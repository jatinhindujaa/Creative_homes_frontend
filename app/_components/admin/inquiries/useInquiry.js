import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createInquiry,
  deleteInquiry,
  fetchInquiry,
  updateInquiry,
  fetchInquiryById,
  updateImage,
  updateBanner,
  createBrochure,
  createWhtsap,
  fetchWhtsap,
} from "../../services/api.Inquiry.js";

import toast from "react-hot-toast";

export const useInquiry = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Inquiry"],
    queryFn: fetchInquiry,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};


export const useWhtsap = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Whatsapp"],
    queryFn: fetchWhtsap,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};


export const useInquiryById = (id) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Inquiry", id],
    queryFn: () => fetchInquiryById(id),
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};

export const useCreateInquiry = () => {
  const queryClient = useQueryClient();
  const { mutate: createNewInquiry, isPending: isCreating } = useMutation({
    mutationFn: createInquiry,
    onSuccess: () => {
      queryClient.invalidateQueries(["Inquiry"]);
      toast.success("Inquiry Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create Inquiry:", error);
      toast.error("Failed to create Inquiry. Please try again.");
    },
  });

  return { createNewInquiry, isCreating };
};
export const useCreateBrochure= () => {
  const queryClient = useQueryClient();
  const { mutate: createNewBrochure, isPending: isCreating } = useMutation({
    mutationFn: createBrochure,
    onSuccess: () => {
      queryClient.invalidateQueries(["Inquiry"]);
      toast.success("Inquiry Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create Inquiry:", error);
      toast.error("Failed to create Inquiry. Please try again.");
    },
  });

  return { createNewBrochure, isCreating };
};

export const useCreatewhatsap = () => {
  const queryClient = useQueryClient();
  const { mutate: createNewWhatsap, isPending: isCreating } = useMutation({
    mutationFn: createWhtsap,
    onSuccess: () => {
      queryClient.invalidateQueries(["Inquiry"]);
      toast.success("Inquiry Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create Inquiry:", error);
      toast.error("Failed to create Inquiry. Please try again.");
    },
  });

  return { createNewWhatsap, isCreating };
};

export const useUpdateInquiry = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateInquiry,
    onSuccess: () => {
      queryClient.invalidateQueries(["Inquiry"]);
      toast.success("Inquiry updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Inquiry:", error);
      toast.error("Failed to update Inquiry. Please try again.");
    },
  });
};

export const useDeleteInquiry = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteInquiry,
    onSuccess: () => {
      queryClient.invalidateQueries(["Inquiry"]);
      toast.success("Inquiry deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete Inquiry:", error);
      toast.error("Failed to delete Inquiry. Please try again.");
    },
  });
};

export const useUpdateInquiryImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateImage,
    onSuccess: () => {
      queryClient.invalidateQueries(["Inquiry"]);
      toast.success("Inquiry image updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Inquiry image:", error);
      toast.error("Failed to update Inquiry image. Please try again.");
    },
  });
};

export const useUpdateInquiryBanner = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateBanner,
    onSuccess: () => {
      queryClient.invalidateQueries(["Inquiry"]);
      toast.success("Inquiry banner updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Inquiry banner:", error);
      toast.error("Failed to update Inquiry banner. Please try again.");
    },
  });
};
