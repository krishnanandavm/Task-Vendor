"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import API from "../../../utils/api";

const EditProduct = () => {
  const { id } = useParams();
  const router = useRouter();
  const { register, handleSubmit, setValue } = useForm();

  // Protect route
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) router.push("/");
  }, [router]);

  // Fetch existing product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await API.get(`/products/${id}/`);
        const product = res.data;
        setValue("name", product.name);
        setValue("description", product.description);
        setValue("price", product.price);
        setValue("quantity", product.quantity);
      } catch (err) {
        alert("Failed to load product: " + err.message);
      }
    };
    fetchProduct();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      await API.put(`/products/${id}/`, data);
      alert("Product updated!");
      router.push("/dashboard");
    } catch (err) {
      alert("Error updating product: " + err.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    router.push("/");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Edit Product</h2>
        <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded shadow">
        <input {...register("name")} placeholder="Name" className="border p-2 w-full mb-2 rounded" />
        <input {...register("description")} placeholder="Description" className="border p-2 w-full mb-2 rounded" />
        <input {...register("price")} type="number" step="0.01" placeholder="Price" className="border p-2 w-full mb-2 rounded" />
        <input {...register("quantity")} type="number" placeholder="Quantity" className="border p-2 w-full mb-2 rounded" />
        <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;