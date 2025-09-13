"use client"
import Link from "next/link"
import styles from "../LogIn/LogIn.module.css";


export default function LogIn(){
    

   
    return(
        <div className={styles.page}>
            <div className={styles.logInContainer}>
                <h1 className={styles.loginTitle}>Log In</h1>
                <div className={styles.formGroup1}>
                    <label htmlFor="username">Username</label>
                    <input type="username" id="username" name="username" placeholder="Enter your username" required />
                </div>
                <div className={styles.formGroup2}>    
                    <label htmlFor="number">Number</label>
                    <input type="tel" id="number" name="number" placeholder="+355 69 xxx xxxx" required />
                </div>  
                <div className={styles.formGroup3}>  
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required />
                </div>    
                <Link href={"./page"} className={styles.button}>Log In</Link>
            </div> 
        </div>
    )
}