"use client";
import React from "react";
import { useForm } from "react-hook-form";
import API from "../utils/api";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const res = await API.post("/login/", data);
      localStorage.setItem("access_token", res.data.access);
      localStorage.setItem("refresh_token", res.data.refresh);
      alert("Login successful!");
      router.push("/dashboard");
    } catch (err) {
      alert("Login failed: " + err.response?.data?.detail);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="w-full max-w-md bg-white p-10 rounded-lg shadow-lg text-black"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <input 
          {...register("username")} 
          placeholder="Username" 
          className="border border-green-400 p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
        />
        <input 
          {...register("password")} 
          type="password" 
          placeholder="Password" 
          className="border border-green-400 p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
        />
        <button 
          type="submit" 
          className="bg-green-500 hover:bg-green-600 text-white w-full py-3 rounded font-semibold mb-4 transition"
        >
          Login
        </button>
        <div className="text-center text-gray-700">
          <span>Don't have an account? </span>
          <Link href="/register" className="text-blue-500 underline">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;