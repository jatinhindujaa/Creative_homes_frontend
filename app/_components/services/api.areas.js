import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchAreas = async () => {
  const response = await axios.get(`${ApiUrl}/area/get-all`, {
    withCredentials: true,
  });
  return response.data.data; // Adjust based on actual API structure
};

export const createAreas = async (formData) => {
  const response = await axios.post(`${ApiUrl}/area/create`, formData, {
    withCredentials: true,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const updateAreas = async ({ id, formData }) => {
  const response = await axios.post(
    `${ApiUrl}/area/update?id=${id}`,
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

export const deleteAreas = async (id) => {
  const response = await axios.get(`${ApiUrl}/area/delete?id=${id}`, {
    withCredentials: true,
  });
  return response.data;
};

export const fetchAreasById = async (id) => {
  const response = await axios.get(`${ApiUrl}/area/get-by-id?_id=${id}`, {
    withCredentials: true,
  });
  return response.data.message;
};

export const updateImage = async ({ id, formData }) => {
  const response = await axios.post(
    `${ApiUrl}/area/update-image?id=${id}`,
    formData,
    {
      withCredentials: true,
    }
  );
  return response.data;
};
export const updatemobileImage = async ({ id, formData }) => {
  const response = await axios.post(
    `${ApiUrl}/area/update-mobile-image?id=${id}`,
    formData,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const updateBanner = async ({ id, formData }) => {
  const response = await axios.post(
    `${ApiUrl}/area/update-banner?id=${id}`,
    formData,
    {
      withCredentials: true,
    }
  );
  return response.data;
};
