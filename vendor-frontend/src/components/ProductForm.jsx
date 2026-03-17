"use client";
import React from "react";
import { useForm } from "react-hook-form";
import API from "../utils/api";

const ProductForm = ({ fetchProducts }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await API.post("/products/", data);
      alert("Product added!");
      reset();
      fetchProducts();
    } catch (err) {
      alert("Error adding product: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-6 border p-4 rounded shadow">
      <h3 className="font-bold mb-2">Add Product</h3>
      <input {...register("name")} placeholder="Name" className="border p-2 w-full mb-2 rounded" />
      <input {...register("description")} placeholder="Description" className="border p-2 w-full mb-2 rounded" />
      <input {...register("price")} type="number" step="0.01" placeholder="Price" className="border p-2 w-full mb-2 rounded" />
      <input {...register("quantity")} type="number" placeholder="Quantity" className="border p-2 w-full mb-2 rounded" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
    </form>
  );
};

export default ProductForm;