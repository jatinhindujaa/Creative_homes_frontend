import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchOffplan = async () => {
  const response = await axios.get(`${ApiUrl}/offplan/get-all`, {
    withCredentials: true,
  });
  return response.data.message; // Adjust based on actual API structure
};

export const createOffplan = async (formData) => {
  const response = await axios.post(`${ApiUrl}/offplan/create`, formData, {
    withCredentials: true,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const updateOffplan = async ({ id, formData }) => {
  const response = await axios.post(
    `${ApiUrl}/offplan/update?id=${id}`,
    formData,
    {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

export const deleteOffplan = async (id) => {
  const response = await axios.get(`${ApiUrl}/offplan/delete?id=${id}`, {
    withCredentials: true,
  });
  return response.data;
};

export const fetchOffplanById = async (id) => {
  const response = await axios.get(`${ApiUrl}/offplan/get-by-id?_id=${id}`, {
    withCredentials: true,
  });
  return response.data.message;
};

export const updateMultiImagesFromOffplan = async ({ id, multipleImages }) => {
  const response = await axios.post(
    `${ApiUrl}/offplan//update-multiple-images?id=${id}`,
    multipleImages,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const removeMultiImageFromOffplan = async ({ id, formData }) => {
  const response = await axios.post(
    `${ApiUrl}/offplan/delete-multiple-image?id=${id}`,
    formData,
    {
      withCredentials: true,
    }
  );
  return response.data;
};
