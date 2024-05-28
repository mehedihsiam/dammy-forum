import useGetUsers from "@/hooks/useGetUsers";
import { TChildrenProps } from "@/types/childrenProps";
import { TUser } from "@/types/user";
import { createContext, useEffect, useMemo, useState } from "react";

type TUserListContext = {
  userList: TUser[];
};

export const UserListContext = createContext<TUserListContext | null>(null);

const UserListArea = (props: TChildrenProps) => {
  const [userList, setUserList] = useState([]);
  const getUserList = useGetUsers();
  const handleFetchUserList = async () => {
    const res = await getUserList();
    if (res.status === 200) {
      setUserList(res.data);
    }
  };

  const values = useMemo(() => ({ userList }), [userList]);
  useEffect(() => {
    handleFetchUserList();
  }, []);

  return (
    <UserListContext.Provider value={values}>
      {props.children}
    </UserListContext.Provider>
  );
};

export default UserListArea;
