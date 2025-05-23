import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createOffplan,
  deleteOffplan,
  fetchOffplan,
  updateOffplan,
  updateMultiImagesFromOffplan,
  fetchOffplanById,
  removeMultiImageFromOffplan,
} from "../../services/api.offplan.js";

import toast from "react-hot-toast";

export const useOffplan = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Offplan"],
    queryFn: fetchOffplan,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};

export const useOffplanById = (id) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Offplan", id],
    queryFn: () => fetchOffplanById(id),
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};

export const useCreateOffplan = () => {
  const queryClient = useQueryClient();
  const { mutate: createOffplanp, isPending: isCreating } = useMutation({
    mutationFn: createOffplan,
    onSuccess: () => {
      queryClient.invalidateQueries(["Offplan"]);
      toast.success("Offplan Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create Offplan:", error);
      toast.error("Failed to create Offplan. Please try again.");
    },
  });

  return { createOffplanp, isCreating };
};

export const useUpdateOffplan = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateOffplan,
    onSuccess: () => {
      queryClient.invalidateQueries(["Offplan"]);
      toast.success("Offplan updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Offplan:", error);
      toast.error("Failed to update Offplan. Please try again.");
    },
  });
};

export const useDeleteOffplan = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteOffplan,
    onSuccess: () => {
      queryClient.invalidateQueries(["Offplan"]);
      toast.success("Offplan deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete Offplan:", error);
      toast.error("Failed to delete Offplan. Please try again.");
    },
  });
};

export const useUpdateMultiImagesFromOffplan = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateMultiImagesFromOffplan,
    onSuccess: () => {
      queryClient.invalidateQueries(["Offplan"]);
      toast.success("Offplan multi images updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Offplan multi images:", error);
      toast.error("Failed to update Offplan multi images. Please try again.");
    },
  });
};

export const useDeleteMultiImageFromOffplan = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeMultiImageFromOffplan,
    onSuccess: () => {
      queryClient.invalidateQueries(["Offplan"]);
      toast.success("Offplan multi image deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete Offplan multi image:", error);
      toast.error("Failed to delete Offplan multi image. Please try again.");
    },
  });
};
