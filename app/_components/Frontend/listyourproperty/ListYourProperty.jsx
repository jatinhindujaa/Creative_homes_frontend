// import React from 'react'

// const ListYourProperty = () => {
//   return (
//     <div>ListYourProperty</div>
//   )
// }

// export default ListYourProperty



"use client";

import { useForm } from "react-hook-form";

export default function ListYourProperty() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/submit-valuation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      alert("Submitted Successfully!");
    } catch (err) {
      console.error("Submission error", err);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto mt-12">
      <h2 className="text-2xl font-bold text-center mb-2">Book a Valuation</h2>
      <p className="text-center text-sm mb-6 text-gray-600">
        Ready to make your move? Start with a free property valuation. It’s
        quick, easy, and informative.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="text"
          {...register("fullName", { required: true })}
          placeholder="Full Name*"
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Email Address*"
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          {...register("mobile", { required: true })}
          placeholder="Mobile*"
          className="w-full px-4 py-2 border rounded"
        />
        <select
          {...register("listingType", { required: true })}
          className="w-full px-4 py-2 border rounded"
        >
          <option value="">Listing Type*</option>
          <option value="Rent">Rent</option>
          <option value="Sale">Sale</option>
        </select>
        <input
          type="text"
          {...register("propertyAddress", { required: true })}
          placeholder="Property Address*"
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800"
        >
          Submit Details
        </button>
      </form>
      <p className="text-xs text-center mt-3 text-gray-500">
        By clicking Submit, you agree to our{" "}
        <a href="#" className="underline">
          Terms & Privacy Policy
        </a>
        .
      </p>
    </div>
  );
}
