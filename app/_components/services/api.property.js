import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchProperties = async () => {
  const response = await axios.get(`${ApiUrl}/property/get-all`, {
    withCredentials: true,
  });
  return response.data.message; // Adjust based on actual API structure
};

export const createProperty = async (formData) => {
  const response = await axios.post(`${ApiUrl}/property/create`, formData, {
    withCredentials: true,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const updateProperty = async ({ id, formData }) => {
  const response = await axios.post(
    `${ApiUrl}/property/update?id=${id}`,
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

export const deleteProperty = async (id) => {
  const response = await axios.get(`${ApiUrl}/property/delete?id=${id}`, {
    withCredentials: true,
  });
  return response.data;
};

export const fetchPropertyById = async (id) => {
  const response = await axios.get(`${ApiUrl}/property/get-by-id?_id=${id}`, {
    withCredentials: true,
  });
  return response.data.message;
};

export const updateMultiImagesFromProperty = async ({ id, images }) => {
  const response = await axios.post(
    `${ApiUrl}/property//update-multiple-images?id=${id}`,
    images,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

// export const removeMultiImageFromCheckup = async ({ id, data }) => {
//   const response = await axios.post(
//     `${ApiUrl}/checkup/delete-image?id=${id}`,
//     data,
//     {
//       withCredentials: true,
//     }
//   );
//   return response.data;
// };
