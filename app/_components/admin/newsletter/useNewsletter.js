import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { createNewsletter, fetchNewsletter } from "../../services/api.newsletter";

export const useCreateNewsletter = () => {
  const queryClient = useQueryClient();
  const { mutate: createNewNewsletter, isPending: isCreating } = useMutation({
    mutationFn: createNewsletter,
    onSuccess: () => {
      queryClient.invalidateQueries(["Newsletter"]);
      toast.success("News Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create News:", error);
      toast.error("Failed to create News. Please try again.");
    },
  });

  return { createNewNewsletter, isCreating };
};

export const useNewsletter = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Newsletter"],
    queryFn: fetchNewsletter,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};
