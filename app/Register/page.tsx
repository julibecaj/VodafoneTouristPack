"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would handle registration logic (e.g., send data to API)
    // await registerUser(...);

    // After registration, redirect to main page
    router.push("/");
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