import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createNews,
  deleteNews,
  fetchNews,
  updateNews,
  fetchNewsById,
  updateImage,
  updateBanner,
} from "../../services/api.news";

import toast from "react-hot-toast";

export const useNews = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["News"],
    queryFn: fetchNews,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};

export const useNewsById = (id) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["News", id],
    queryFn: () => fetchNewsById(id),
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};

export const useCreateNews = () => {
  const queryClient = useQueryClient();
  const { mutate: createNewNews, isPending: isCreating } = useMutation({
    mutationFn: createNews,
    onSuccess: () => {
      queryClient.invalidateQueries(["News"]);
      toast.success("News Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create News:", error);
      toast.error("Failed to create News. Please try again.");
    },
  });

  return { createNewNews, isCreating };
};

export const useUpdateNews = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateNews,
    onSuccess: () => {
      queryClient.invalidateQueries(["News"]);
      toast.success("News updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update News:", error);
      toast.error("Failed to update News. Please try again.");
    },
  });
};

export const useDeleteNews = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteNews,
    onSuccess: () => {
      queryClient.invalidateQueries(["News"]);
      toast.success("News deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete News:", error);
      toast.error("Failed to delete News. Please try again.");
    },
  });
};

export const useUpdateNewsImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateImage,
    onSuccess: () => {
      queryClient.invalidateQueries(["News"]);
      toast.success("News image updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update News image:", error);
      toast.error("Failed to update News image. Please try again.");
    },
  });
};

export const useUpdateNewsBanner = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateBanner,
    onSuccess: () => {
      queryClient.invalidateQueries(["News"]);
      toast.success("News banner updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update News banner:", error);
      toast.error("Failed to update News banner. Please try again.");
    },
  });
};
