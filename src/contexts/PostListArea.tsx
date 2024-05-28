import useGetPosts from "@/hooks/useGetPosts";
import { TChildrenProps } from "@/types/childrenProps";
import { TPost } from "@/types/post";
import { createContext, useEffect, useMemo, useState } from "react";

type TUserListContext = {
  postList: TPost[];
  loading: boolean;
};

export const PostListContext = createContext<TUserListContext | null>(null);

const PostListArea = (props: TChildrenProps) => {
  const getPosts = useGetPosts();
  const [postList, setPostList] = useState<TPost[]>([]);
  const [loading, setLoading] = useState(false);

  const values = useMemo(
    () => ({ postList, loading }),
    [postList.length, loading]
  );

  const handleGetPosts = async () => {
    setLoading(true);
    const postRes = await getPosts();
    if (postRes.status === 200) {
      const sortedPost = postRes.data.sort((a: TPost, b: TPost) => b.id - a.id);
      setPostList(sortedPost);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetPosts();
  }, []);

  return (
    <PostListContext.Provider value={values}>
      {props.children}
    </PostListContext.Provider>
  );
};

export default PostListArea;
