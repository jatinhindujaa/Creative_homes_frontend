import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createProperty,
  deleteProperty,
  fetchProperties,
  updateProperty,
  updateMultiImagesFromProperty,
  fetchPropertyById,
  removeMultiImageFromProperty,
  fetchPropertyByAgentId,
} from "../../services/api.property";

import toast from "react-hot-toast";

export const useProperties = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Property"],
    queryFn: fetchProperties,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};

export const usePropertyById = (id) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Property", id],
    queryFn: () => fetchPropertyById(id),
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};

export const usePropertyByAgentId = (id) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Property", id],
    queryFn: () => fetchPropertyByAgentId(id),
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};


export const useCreateProperty = () => {
  const queryClient = useQueryClient();
  const { mutate: createProperties, isPending: isCreating } = useMutation({
    mutationFn: createProperty,
    onSuccess: () => {
      queryClient.invalidateQueries(["Property"]);
      toast.success("Property Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create Property:", error);
      toast.error("Failed to create Property. Please try again.");
    },
  });

  return { createProperties, isCreating };
};


export const useUpdateProperty = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProperty,
    onSuccess: () => {
      queryClient.invalidateQueries(["Property"]);
      toast.success("Property updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Property:", error);
      toast.error("Failed to update Property. Please try again.");
    },
  });
};

export const useDeleteProperty = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProperty,
    onSuccess: () => {
      queryClient.invalidateQueries(["Property"]);
      toast.success("Property deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete Property:", error);
      toast.error("Failed to delete Property. Please try again.");
    },
  });
};

export const useUpdateMultiImagesFromProperty = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateMultiImagesFromProperty,
    onSuccess: () => {
      queryClient.invalidateQueries(["Property"]);
      toast.success("Property multi images updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Property multi images:", error);
      toast.error("Failed to update Property multi images. Please try again.");
    },
  });
};

export const useDeleteMultiImageFromProperty = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeMultiImageFromProperty,
    onSuccess: () => {
      queryClient.invalidateQueries(["Property"]);
      toast.success("Property multi image deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete Property multi image:", error);
      toast.error("Failed to delete Property multi image. Please try again.");
    },
  });
};
