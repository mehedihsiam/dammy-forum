import axios from "axios";

import CustomError from "./error";
import getEnv from "@/utils/getEnv";

const get = async (route: string, headers?: object) => {
  const abortController = new AbortController();
  const BASE_URL = getEnv("VITE_API_BASE_URL");

  try {
    const res = await axios.get(`${BASE_URL}/${route}`, {
      headers,
      signal: abortController.signal,
    });
    return { data: res.data, status: res.status, local_error: null };
  } catch (err) {
    console.log(JSON.stringify(err));
    const error = new CustomError(err, null, 500);
    return error;
  }
};
export default get;
