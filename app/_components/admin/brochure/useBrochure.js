import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { createBrochure, fetchBrochure } from "../../services/api.brousher";

export const useCreateBrochure = () => {
  const queryClient = useQueryClient();
  const { mutate: createNewBrochure, isPending: isCreating } = useMutation({
    mutationFn: createBrochure,
    onSuccess: () => {
      queryClient.invalidateQueries(["Brochure"]);
      toast.success("News Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create News:", error);
      toast.error("Failed to create News. Please try again.");
    },
  });

  return { createNewBrochure, isCreating };
};

export const useBrochure = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Brochure"],
    queryFn: fetchBrochure,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};
