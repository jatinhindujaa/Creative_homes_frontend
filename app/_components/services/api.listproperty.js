import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchListproperty = async () => {
  const response = await axios.get(`${ApiUrl}/listyourproperty/get-all`, {
    withCredentials: true,
  });
  return response.data.message; // Adjust based on actual API structure
};

export const createListproperty = async (formData) => {
  const response = await axios.post(
    `${ApiUrl}/listyourproperty/create`,
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

export const deleteListproperty = async (id) => {
  const response = await axios.get(
    `${ApiUrl}/listyourproperty/delete?id=${id}`,
    {
      withCredentials: true,
    }
  );
  return response.data;
};