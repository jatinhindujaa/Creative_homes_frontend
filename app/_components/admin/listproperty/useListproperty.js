import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createListproperty, deleteListproperty, fetchListproperty } from "../../services/api.listproperty";
import toast from "react-hot-toast";

export const useCreateListproperty = () => {
  const queryClient = useQueryClient();
  const { mutate: createNewListproperty, isPending: isCreating } = useMutation({
    mutationFn: createListproperty,
    onSuccess: () => {
      queryClient.invalidateQueries(["Listproperty"]);
      toast.success("Listproperty Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create Listproperty:", error);
      toast.error("Failed to create Listproperty. Please try again.");
    },
  });

  return { createNewListproperty, isCreating };
};

export const useListProperty = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["ListProperty"],
    queryFn: fetchListproperty,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};

export const useDeleteListProperty = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteListproperty,
    onSuccess: () => {
      queryClient.invalidateQueries(["ListProperty"]);
      toast.success("ListProperty deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete ListProperty:", error);
      toast.error("Failed to delete ListProperty. Please try again.");
    },
  });
};