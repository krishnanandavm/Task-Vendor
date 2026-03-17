"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import API from "../../utils/api";
import ProductForm from "../../components/ProductForm";
import ProductList from "../../components/ProductList";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  // Protect route
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) router.push("/"); // redirect to login if not logged in
  }, [router]);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products/");
      setProducts(res.data);
    } catch (err) {
      alert("Error fetching products: " + err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Logout function
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    router.push("/");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>
      <ProductForm fetchProducts={fetchProducts} />
      <ProductList products={products} fetchProducts={fetchProducts} />
    </div>
  );
};

export default Dashboard;