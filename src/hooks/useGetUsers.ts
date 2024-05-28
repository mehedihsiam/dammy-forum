import get from "@/api/get";

const useGetUsers = () => {
  const fetch = async () => {
    const res = await get("users");

    return res;
  };

  return fetch;
};

export default useGetUsers;
