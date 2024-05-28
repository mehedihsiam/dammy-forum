import get from "@/api/get";

const useGetPosts = () => {
  const getPosts = async () => {
    const res = await get("posts");

    return res;
  };

  return getPosts;
};

export default useGetPosts;
