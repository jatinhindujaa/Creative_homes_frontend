import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchNews = async () => {
  const response = await axios.get(`${ApiUrl}/news/get-all`, {
    withCredentials: true,
  });
  return response.data.message; // Adjust based on actual API structure
};

export const createNews = async (formData) => {
  const response = await axios.post(`${ApiUrl}/news/create`, formData, {
    withCredentials: true,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const updateNews = async ({ id, formData }) => {
  const response = await axios.post(
    `${ApiUrl}/news/update?id=${id}`,
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

export const deleteNews = async (id) => {
  const response = await axios.get(`${ApiUrl}/news/delete?id=${id}`, {
    withCredentials: true,
  });
  return response.data;
};

export const fetchNewsById = async (id) => {
  const response = await axios.get(`${ApiUrl}/news/get-by-id?_id=${id}`, {
    withCredentials: true,
  });
  return response.data.message;
};

export const updateImage = async ({ id, formData }) => {
  const response = await axios.post(
    `${ApiUrl}/news/update-image?id=${id}`,
    formData,
    {
      withCredentials: true,
    }
  );
  return response.data;
};


export const updateMobileImage = async ({ id, formData }) => {
  const response = await axios.post(
    `${ApiUrl}/news/update-mobile-image?id=${id}`,
    formData,
    {
      withCredentials: true,
    }
  );
  return response.data;
};



export const updateBanner = async ({ id, formData }) => {
  const response = await axios.post(
    `${ApiUrl}/news/update-banner?id=${id}`,
    formData,
    {
      withCredentials: true,
    }
  );
  return response.data;
};
