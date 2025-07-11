import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { createData, deleteCareers, fetchCareers } from "../../services/api.career";

export const useCareers = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Careers"],
    queryFn: fetchCareers,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};



// export const useCareersById = (id) => {
//   const { data, isLoading, error } = useQuery({
//     queryKey: ["Careers", id],
//     queryFn: () => fetchCareersById(id),
//     staleTime: 5 * 60 * 1000,
//   });
//   return { data, isLoading, error };
// };

// export const useCreateCareers = () => {
//   const queryClient = useQueryClient();
//   const { mutate: createNewCareers, isPending: isCreating } = useMutation({
//     mutationFn: createData,
//     onSuccess: () => {
//       queryClient.invalidateQueries(["Careers"]);
//       toast.success("Careers Created successfully!");
//     },
//     onError: (error) => {
//       console.error("Failed to create Careers:", error);
//       toast.error("Failed to create Careers. Please try again.");
//     },
//   });

//   return { createNewCareers, isCreating };
// };
export const useCreateCareers = () => {
  const queryClient = useQueryClient();
  const { mutate: createNewCareers, isPending: isCreating } = useMutation({
    mutationFn: createData,
    onSuccess: () => {
      queryClient.invalidateQueries(["Careers"]);
      toast.success("Career application submitted successfully!");
    },
    onError: (error) => {
      console.error("Failed to create career application:", error);
      console.error("Error details:", error.response?.data);
      toast.error("Failed to submit application. Please try again.");
    },
  });

  return { createNewCareers, isCreating };
};

export const useDeleteCareers = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCareers,
    onSuccess: () => {
      queryClient.invalidateQueries(["Careers"]);
      toast.success("Careers deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete Careers:", error);
      toast.error("Failed to delete Careers. Please try again.");
    },
  });
};

