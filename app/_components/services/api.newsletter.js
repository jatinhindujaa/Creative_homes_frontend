import axios from "axios";
import { ApiUrl } from "./Api";
export const fetchNewsletter = async () => {
  const response = await axios.get(`${ApiUrl}/newsletter/get-all-newsletter`, {
    withCredentials: true,
  });
  return response.data.message; 
};

export const createNewsletter = async (formData) => {
  const response = await axios.post(`${ApiUrl}/newsletter/create`, formData, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
