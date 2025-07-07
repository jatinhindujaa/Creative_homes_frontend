import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { createBrousher, fetchBrousher } from "../../services/api.brousher";

export const useCreateBrousher = () => {
  const queryClient = useQueryClient();
  const { mutate: createNewBrousher, isPending: isCreating } = useMutation({
    mutationFn: createBrousher,
    onSuccess: () => {
      queryClient.invalidateQueries(["Brousher"]);
      toast.success("News Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create News:", error);
      toast.error("Failed to create News. Please try again.");
    },
  });

  return { createNewBrousher, isCreating };
};

export const useBrousher = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Brousher"],
    queryFn: fetchBrousher,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};
