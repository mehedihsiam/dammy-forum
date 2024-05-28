import { UserListContext } from "@/contexts/UserListArea";
import { useContext } from "react";

const useUserListContext = () => useContext(UserListContext);
export default useUserListContext;
