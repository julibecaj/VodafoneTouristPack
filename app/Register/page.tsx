"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { registerUser } from "@/lib/api"; //api helper


export default function Register() {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // await registerUser(...);
    
    const formData = new FormData(e.currentTarget);

    const userData = {
      name: formData.get("name") as string,
      surname: formData.get("surname") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      birthday: formData.get("birthday") as string,
      username: formData.get("username") as string,
      password: formData.get("password") as string,
    };

    try{
      await registerUser(userData);
      alert("Registration successful! Please Log In.")
      router.push("/LogIn");
    }catch (err){
      alert("Registration failed: " + err);
    }

    
  };

  return (
    <div className={"registerContainer"}>
      <h1 className={"registerTitle"}>Register for Vodafone</h1>
      <form id={"registerForm"} onSubmit={handleSubmit}>
        <div className={"formGroup1"}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>
        <div className={"formGroup1"}>
          <label htmlFor="surname">Surname</label>
          <input type="text" id="surname" name="surname" placeholder="Enter your surname" required />
        </div>
        <div className={"formGroup1"}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className={"formGroup1"}>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
        </div>
        <div className={"formGroup1"}>
          <label htmlFor="birthday">Birthday</label>
          <input type="date" id="birthday" name="birthday" required />
        </div>
        <div className={"formGroup1"}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" required />
        </div>
        <div className={"formGroup1"}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className={"registerButton"}>Register</button>
      </form>
    </div>
  );
}