"use client"
import Link from "next/link"

export default function LogIn(){
    

   
    return(
        <div className={"page"}>
            <div className={"logInContainer"}>
                <h1 className={"loginTitle"}>Log In</h1>
                <div className={"formGroup1"}>
                    <label htmlFor="username">Username</label>
                    <input type="username" id="username" name="username" placeholder="Enter your username" required />
                </div>
                <div className={"formGroup2"}>    
                    <label htmlFor="number">Number</label>
                    <input type="tel" id="number" name="number" placeholder="+355 69 xxx xxxx" required />
                </div>  
                <div className={"formGroup3"}>  
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required />
                </div>    
                <Link href={"./page"} className={"button"}>Log In</Link>
                <p>Not part of Vodafone?</p>
                <Link href={"/Register"} className={"button"}>Register here</Link>
            </div> 
        </div>
    )
}