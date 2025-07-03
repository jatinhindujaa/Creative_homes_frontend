import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchLogin = async () => {
  const response = await axios.get(`${ApiUrl}/admin/create`, {
    withCredentials: true,
  });
  return response.data.message; // Adjust based on actual API structure
};
export const createLogin = async (formData) => {
  const response = await axios.post(
    `${ApiUrl}/admin/create`,
    formData,
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const getLogin = async (formData) => {
  const response = await axios.post(`${ApiUrl}/admin/login`, formData, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("response", response.data.data);
  return response.data;
};
