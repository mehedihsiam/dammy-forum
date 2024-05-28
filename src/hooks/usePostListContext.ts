import { PostListContext } from "@/contexts/PostListArea";
import { useContext } from "react";

const usePostListContext = () => useContext(PostListContext);
export default usePostListContext;
