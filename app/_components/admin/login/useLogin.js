import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createLogin, fetchLogin, getLogin } from "../../services/api.login";


export const useLoginPage= () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Loginpage"],
    queryFn: fetchLogin,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};


export const useCreateuser = () => {
  const queryClient = useQueryClient();
  const { mutate: createNewLogin, isPending: isCreating } = useMutation({
    mutationFn: createLogin,
    onSuccess: () => {
      queryClient.invalidateQueries(["Loginpage"]);
      toast.success("Login Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create Login:", error);
      toast.error("Failed to create Login. Please try again.");
    },
  });

  return { createNewLogin, isCreating };
};



export const usegetLogin = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: getNewLogin, isPending: isCreating } = useMutation({
    mutationFn: getLogin,
    onSuccess: () => {
      queryClient.invalidateQueries(["Loginpage"]);
      toast.success("Login Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create Login:", error);
      toast.error("Failed to create Login. Please try again.");
    },
  });

  return { getNewLogin, isCreating };
};
