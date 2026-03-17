"use client";
import React from "react";
import { useForm } from "react-hook-form";
import API from "../../utils/api";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      await API.post("/register/", data);
      alert("Registration successful!");
      router.push("/"); // go to login
    } catch (err) {
      alert("Error: " + (err.response?.data?.username || err.message));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="w-full max-w-md bg-white p-10 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Register</h2>
        <input 
          {...register("username")} 
          placeholder="Username" 
          className="border border-blue-400 p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
        />
        <input 
          {...register("password")} 
          type="password" 
          placeholder="Password" 
          className="border border-blue-400 p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
        />
        <button 
          type="submit" 
          className="bg-blue-500  hover:bg-blue-600 text-white w-full py-3 rounded font-semibold mb-4 transition"
        >
          Register
        </button>
        <div className="text-center text-gray-700">
          <span>Already have an account? </span>
          <Link href="/" className="text-green-500 underline">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;