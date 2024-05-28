import { useParams } from "react-router-dom";
import styles from "@/styles/postDetail.module.css";
import NavBar from "@/components/NavBar";
import PostTitle from "@/components/PostTitle";
import usePostListContext from "@/hooks/usePostListContext";
import useUserListContext from "@/hooks/useUserListContext";
import PostFooter from "@/components/CardFooter";
import CommentCard from "@/components/CommentCard";
import { useEffect, useState } from "react";
import { TComment } from "@/types/comment";
import useGetComments from "@/hooks/useGetComments";
import CommentSkeleton from "@/components/CommentSkeleton";
import Footer from "@/components/Footer";

export default function PostDetails() {
  const params = useParams();
  const getComments = useGetComments();
  const [loading, setLoading] = useState(false);

  const [comments, setComments] = useState<TComment[]>([]);

  const postContext = usePostListContext();
  const userContext = useUserListContext();
  const post = postContext?.postList.find(
    (post) => post.id === Number(params.id)
  );
  const user = userContext?.userList.find((user) => user.id === post?.userId);

  const handleGetComments = async () => {
    setLoading(true);
    const response = await getComments();
    if (response.status === 200) {
      const data = response.data;
      const filteredData = data.filter(
        (comment: TComment) => comment.postId === Number(params.id)
      );

      setComments(filteredData);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetComments();
  }, []);

  return (
    <>
      <NavBar />
      <main className={styles.container}>
        <PostTitle title={post?.title} writer={user?.name} />
        <p className="text-justify mb-10">{post?.body}</p>
        <PostFooter hideDetails postId={post?.id || 0} />
        <hr />
        {loading ? (
          <CommentSkeleton />
        ) : (
          comments.map((comment) => (
            <CommentCard
              key={comment.id}
              commenter={comment.name}
              comment={comment.body}
            />
          ))
        )}
      </main>
      <Footer />
    </>
  );
}
