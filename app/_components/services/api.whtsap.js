import axios from "axios";
import { ApiUrl } from "./Api";
export const fetchWhtsap = async () => {
  const response = await axios.get(`${ApiUrl}/whtsap/get-all-whatsapp`, {
    withCredentials: true,
  });
  return response.data.message; // Adjust based on actual API structure
};

export const createWhtsap = async (formData) => {
  const response = await axios.post(`${ApiUrl}/whtsap/create`, formData, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};