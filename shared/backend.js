import { BASE_URL } from "./config";
import Cookies from "js-cookie";

export const SERVER_REQUEST = async (thisdata, url, type = 'get', body) => {
  try {
    thisdata.$axios.setToken(Cookies.get("Authorization"), "Bearer");
    const response =
      type.toLowerCase() === "post"
        ? await thisdata.$axios.$post(`${url}`, body)
        : await thisdata.$axios.$get(`${url}`);

    return response;
  } catch (error) {
    const response = await error.response.data;
    return response;
  }
};
