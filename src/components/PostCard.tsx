import { TPost } from "@/types/post";
import styles from "@/styles/postCard.module.css";
import useUserListContext from "@/hooks/useUserListContext";
import { Card } from "keep-react";
import PostFooter from "./CardFooter";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

type TPostCardProps = {
  post: TPost;
};
export default function PostCard(props: TPostCardProps) {
  const navigate = useNavigate();
  const usersContext = useUserListContext();
  const author = usersContext?.userList.find(
    (user) => user.id === props.post.userId
  );

  const handleNavigate = useCallback(() => {
    navigate(`/posts/${props.post.id}`);
  }, [props.post.id]);

  return (
    <Card className="max-w-md mb-5 w-auto">
      <Card.Content>
        <Card.Title>{props.post.title.toUpperCase()}</Card.Title>

        <p className={styles.users_name}>by {author?.name}</p>
        <Card.Description className="text-justify">
          {props.post.body}
        </Card.Description>
      </Card.Content>

      <PostFooter handleGoToDetails={handleNavigate} postId={props.post.id} />
    </Card>
  );
}
