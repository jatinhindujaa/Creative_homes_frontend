import axios from "axios";
import { ApiUrl } from "./Api";
export const fetchBrochure = async () => {
  const response = await axios.get(`${ApiUrl}/brochure/get-all-brochure`, {
    withCredentials: true,
  });
  return response.data.message;
};

export const createBrochure = async (formData) => {
  const response = await axios.post(`${ApiUrl}/brochure/create`, formData, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
