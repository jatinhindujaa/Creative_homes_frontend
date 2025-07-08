import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createOpenings,
  deleteOpenings,
  fetchOpenings,
  updateOpenings,
  fetchOpeningsById,
} from "../../services/api.opening.js";

import toast from "react-hot-toast";

export const useOpenings = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Openings"],
    queryFn: fetchOpenings,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};



export const useOpeningsById = (id) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Openings", id],
    queryFn: () => fetchOpeningsById(id),
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};

export const useCreateOpenings = () => {
  const queryClient = useQueryClient();
  const { mutate: createNewOpenings, isPending: isCreating } = useMutation({
    mutationFn: createOpenings,
    onSuccess: () => {
      queryClient.invalidateQueries(["Openings"]);
      toast.success("Openings Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create Openings:", error);
      toast.error("Failed to create Openings. Please try again.");
    },
  });

  return { createNewOpenings, isCreating };
};

export const useUpdateOpenings = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateOpenings,
    onSuccess: () => {
      queryClient.invalidateQueries(["Openings"]);
      toast.success("Openings updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Openings:", error);
      toast.error("Failed to update Openings. Please try again.");
    },
  });
};

export const useDeleteOpenings = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteOpenings,
    onSuccess: () => {
      queryClient.invalidateQueries(["Openings"]);
      toast.success("Openings deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete Openings:", error);
      toast.error("Failed to delete Openings. Please try again.");
    },
  });
};


