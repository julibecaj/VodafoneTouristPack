"use client"
import Link from "next/link"
import { loginUser } from "@/lib/api"
import { useRouter } from "next/navigation"
import { Phone } from "lucide-react";
import React, {useState} from "react";

export default function LogIn(){
    const router = useRouter();
    const[error, setError] = useState("");

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const loginData = {
            username: formData.get("username") as string,
            phone: formData.get("phone") as string,
            password: formData.get("password") as string
        };
        

        try{
            const user = await loginUser(loginData);
            //saving user in localStorage or context for profile page
            localStorage.setItem("userId", user.id);
            router.push("/User") //redirecting to profile page
        }catch (err: any){
            setError(err.message);
        }
        
        
    };

   
    return (
    <div className="page">
      <div className="logInContainer">
        <h1 className="loginTitle">Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className="formGroup1">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="formGroup2">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          {error && <p style={{color: "red"}}>{error}</p>}
          <button type="submit" className="button">Log In</button>
        </form>
        <p>Not part of Vodafone?</p>
        <a href="/Register" className="button">Register here</a>
      </div>
    </div>
  );
}