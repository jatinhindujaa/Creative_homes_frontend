import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchInquiry = async () => {
  const response = await axios.get(`${ApiUrl}/contact/get-all`, {
    withCredentials: true,
  });
  return response.data.message; // Adjust based on actual API structure
};

export const createInquiry = async (formData) => {
  const response = await axios.post(`${ApiUrl}/contact/create`, formData, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const updateInquiry = async ({ id, formData }) => {
  const response = await axios.post(
    `${ApiUrl}/contact/update?id=${id}`,
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

export const deleteInquiry = async (id) => {
  const response = await axios.get(`${ApiUrl}/contact/delete?id=${id}`, {
    withCredentials: true,
  });
  return response.data;
};

export const fetchInquiryById = async (id) => {
  const response = await axios.get(`${ApiUrl}/contact/get-by-id?_id=${id}`, {
    withCredentials: true,
  });
  return response.data.message;
};

export const updateImage = async ({ id, formData }) => {
  const response = await axios.post(
    `${ApiUrl}/contact/update-image?id=${id}`,
    formData,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const updateBanner = async ({ id, formData }) => {
  const response = await axios.post(
    `${ApiUrl}/contact/update-banner?id=${id}`,
    formData,
    {
      withCredentials: true,
    }
  );
  return response.data;
};
