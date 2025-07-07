import axios from "axios";
import { ApiUrl } from "./Api";
export const fetchBrousher = async () => {
  const response = await axios.get(`${ApiUrl}/brousher/get-all-brousher`, {
    withCredentials: true,
  });
  return response.data.message;
};

export const createBrousher = async (formData) => {
  const response = await axios.post(`${ApiUrl}/brousher/create`, formData, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
