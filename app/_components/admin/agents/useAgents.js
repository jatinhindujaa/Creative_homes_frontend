import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createAgent,
  deleteAgent,
  fetchAgents,
  updateAgent,
  fetchAgentById,
  updateImage,
} from "../../services/api.agents";

import toast from "react-hot-toast";

export const useAgents = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Agent"],
    queryFn: fetchAgents,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};

export const useAgentById = (id) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Agent", id],
    queryFn: () => fetchAgentById(id),
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};

export const useCreateAgent = () => {
  const queryClient = useQueryClient();
  const { mutate: createAgents, isPending: isCreating } = useMutation({
    mutationFn: createAgent,
    onSuccess: () => {
      queryClient.invalidateQueries(["Agent"]);
      toast.success("Agent Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create Agent:", error);
      toast.error("Failed to create Agent. Please try again.");
    },
  });

  return { createAgents, isCreating };
};

export const useUpdateAgent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateAgent,
    onSuccess: () => {
      queryClient.invalidateQueries(["Agent"]);
      toast.success("Agent updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Agent:", error);
      toast.error("Failed to update Agent. Please try again.");
    },
  });
};

export const useDeleteAgent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteAgent,
    onSuccess: () => {
      queryClient.invalidateQueries(["Agent"]);
      toast.success("Agent deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete Agent:", error);
      toast.error("Failed to delete Agent. Please try again.");
    },
  });
};

export const useUpdateAgentImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateImage,
    onSuccess: () => {
      queryClient.invalidateQueries(["Agent"]);
      toast.success("Agent image updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Agent image:", error);
      toast.error("Failed to update Agent image. Please try again.");
    },
  });
};
