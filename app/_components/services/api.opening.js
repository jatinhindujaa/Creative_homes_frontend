import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchOpenings = async () => {
  const response = await axios.get(`${ApiUrl}/openings/get-all`, {
    withCredentials: true,
  });
  return response.data.message; // Adjust based on actual API structure
};

export const deleteOpenings = async (id) => {
  const response = await axios.get(`${ApiUrl}/openings/delete?id=${id}`, {
    withCredentials: true,
  });
  return response.data;
};
export const blockOpenings = async (id) => {
  const response = await axios.patch(
    `${ApiUrl}/openings/block-opening?id=${id}`,
    {},
    { withCredentials: true }
  );
  return response.data;
};

export const unblockOpenings = async (id) => {
  const response = await axios.patch(
    `${ApiUrl}/openings/unblock-opening?id=${id}`,
    {},
    { withCredentials: true }
  );
  return response.data;
};
export const updateOpenings = async ({ id, data }) => {
  const response = await axios.post(
    `${ApiUrl}/openings/update?id=${id}`,
    data,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const createOpenings = async (formdata) => {
  const response = await axios.post(`${ApiUrl}/openings/create`, formdata, {
    withCredentials: true,
  });
  return response.data;
};

export const fetchOpeningsById = async (_id) => {
  const response = await axios.get(`${ApiUrl}/openings/getbyId?id=${_id}`, {
    withCredentials: true,
  });
  return response.data.message; // Adjust based on the actual API response structure
};
