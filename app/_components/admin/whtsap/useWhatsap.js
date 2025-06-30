import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { createWhtsap, fetchWhtsap } from "../../services/api.whtsap";

export const useWhtsap = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Whatsapp"],
    queryFn: fetchWhtsap,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};
export const useCreatewhatsap = () => {
  const queryClient = useQueryClient();
  const { mutate: createNewWhatsap, isPending: isCreating } = useMutation({
    mutationFn: createWhtsap,
    onSuccess: () => {
      queryClient.invalidateQueries(["Whatsapp"]);
      toast.success("Whatsapp Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create Whatsapp:", error);
      toast.error("Failed to create Whatsapp. Please try again.");
    },
  });

  return { createNewWhatsap, isCreating };
};
