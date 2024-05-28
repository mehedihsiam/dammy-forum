import get from "@/api/get";

const useGetComments = () => {
  const fetch = async () => {
    const res = await get("comments");

    return res;
  };

  return fetch;
};

export default useGetComments;
