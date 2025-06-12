import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createAreas,
  deleteAreas,
  fetchAreas,
  updateAreas,
  fetchAreasById,
  updateImage,
  updateBanner,
  updatemobileImage,
} from "../../services/api.areas.js";

import toast from "react-hot-toast";

export const useAreas = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Areas"],
    queryFn: fetchAreas,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};

export const useAreasById = (id) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Areas", id],
    queryFn: () => fetchAreasById(id),
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};

export const useCreateAreas = () => {
  const queryClient = useQueryClient();
  const { mutate: createNewAreas, isPending: isCreating } = useMutation({
    mutationFn: createAreas,
    onSuccess: () => {
      queryClient.invalidateQueries(["Areas"]);
      toast.success("Areas Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create Areas:", error);
      toast.error("Failed to create Areas. Please try again.");
    },
  });

  return { createNewAreas, isCreating };
};

export const useUpdateAreas = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateAreas,
    onSuccess: () => {
      queryClient.invalidateQueries(["Areas"]);
      toast.success("Areas updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Areas:", error);
      toast.error("Failed to update Areas. Please try again.");
    },
  });
};

export const useDeleteAreas = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteAreas,
    onSuccess: () => {
      queryClient.invalidateQueries(["Areas"]);
      toast.success("Areas deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete Areas:", error);
      toast.error("Failed to delete Areas. Please try again.");
    },
  });
};

export const useUpdateAreasImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateImage,
    onSuccess: () => {
      queryClient.invalidateQueries(["Areas"]);
      toast.success("Areas image updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Areas image:", error);
      toast.error("Failed to update Areas image. Please try again.");
    },
  });
};
export const useUpdateAreasmobileImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatemobileImage,
    onSuccess: () => {
      queryClient.invalidateQueries(["Areas"]);
      toast.success("Areas image updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Areas image:", error);
      toast.error("Failed to update Areas image. Please try again.");
    },
  });
};

export const useUpdateAreasBanner = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateBanner,
    onSuccess: () => {
      queryClient.invalidateQueries(["Areas"]);
      toast.success("Areas banner updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Areas banner:", error);
      toast.error("Failed to update Areas banner. Please try again.");
    },
  });
};
