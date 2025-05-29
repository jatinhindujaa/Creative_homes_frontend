import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchAgents = async () => {
  const response = await axios.get(`${ApiUrl}/agent/get-all`, {
    withCredentials: true,
  });
  return response.data.message; // Adjust based on actual API structure
};

export const createAgent = async (formData) => {
  const response = await axios.post(`${ApiUrl}/agent/create`, formData, {
    withCredentials: true,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const updateAgent = async ({ id, formData }) => {
  const response = await axios.post(
    `${ApiUrl}/agent/update?id=${id}`,
    formData,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const deleteAgent = async (id) => {
  const response = await axios.get(`${ApiUrl}/agent/delete?id=${id}`, {
    withCredentials: true,
  });
  return response.data;
};

export const fetchAgentById = async (id) => {
  const response = await axios.get(`${ApiUrl}/agent/get-by-id?_id=${id}`, {
    withCredentials: true,
  });
  return response.data.data;
};

export const updateImage = async ({ id, formData }) => {
  const response = await axios.post(
    `${ApiUrl}/agent/update-image?id=${id}`,
    formData,
    {
      withCredentials: true,
    }
  );
  return response.data;
};
