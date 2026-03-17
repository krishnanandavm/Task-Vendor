"use client";
import React from "react";
import API from "../utils/api";
import Link from "next/link";

const ProductList = ({ products, fetchProducts }) => {
  const deleteProduct = async (id) => {
    if (!confirm("Are you sure?")) return;
    await API.delete(`/products/${id}/`);
    fetchProducts();
  };

  return (
    <div>
      {products.map((p) => (
        <div key={p.id} className="border p-2 mb-2 flex justify-between items-center rounded shadow">
          <div>
            <strong>{p.name}</strong> - {p.description} (${p.price}) | Qty: {p.quantity}
          </div>
          <div className="flex gap-2">
            <Link href={`/products/${p.id}`} className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</Link>
            <button
              onClick={() => deleteProduct(p.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;