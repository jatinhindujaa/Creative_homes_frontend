import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchCareers = async () => {
  const response = await axios.get(`${ApiUrl}/careers/get-all`, {
    withCredentials: true,
  });
  return response.data.message; // Adjust based on actual API structure
};
export const deleteCareers = async (id) => {
  const response = await axios.get(`${ApiUrl}/careers/delete?id=${id}`, {
    withCredentials: true,
  });
  return response.data;
};
export const blockCareers = async (id) => {
  const response = await axios.patch(
    `${ApiUrl}/careers/block-careers?id=${id}`,
    {},
    { withCredentials: true }
  );
  return response.data;
};

export const unblockCareers = async (id) => {
  const response = await axios.patch(
    `${ApiUrl}/careers/unblock-careers?id=${id}`,
    {},
    { withCredentials: true }
  );
  return response.data;
};

// export const createData = async (data) => {
//   const response = await axios.post(`${ApiUrl}/careers/create`, data, {
//     withCredentials: true,
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
//   return response.data;
// };

export const createData = async (data) => {
  console.log("Sending career application data:", data);
  
  // Log FormData contents for debugging
  if (data instanceof FormData) {
    console.log("FormData contents:");
    for (let [key, value] of data.entries()) {
      console.log(`${key}:`, value);
    }
  }

  const response = await axios.post(`${ApiUrl}/careers/create`, data, {
    withCredentials: true,
    // DON'T set Content-Type manually - let axios handle it for FormData
    // This allows axios to set the correct boundary for multipart/form-data
  });
  
  console.log("API Response:", response.data);
  return response.data;
};
