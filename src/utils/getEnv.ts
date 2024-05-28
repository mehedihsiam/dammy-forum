type TKey = "VITE_API_BASE_URL";
const getEnv = (key: TKey) => {
  return process.env[key];
};

export default getEnv;
