"use client"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import React from "react"
import { useState } from "react"
import FlippableCard from "@/components/FlippableCard"

export default function User(){
    return(
        <div className="profile">
            <div className="userInfo">
                <h1 className="user">Welcome, !</h1>
            </div>
            <div className="activeCards">
                <h1 className="cards">Your active cards</h1>
            </div>
            <div className="shoppingItems">
                <h1 className="items">Your shopped items</h1>
            </div>
            <div className="rewards">
                <h1 className="rewards">Check your rewards</h1>
                <div className="cardHolder">
                    <h2 className="card">Card information</h2>
                    <FlippableCard
                        front={<img src="/assets/Rewards Card Front1.svg" alt="Rewards Card Front" style={{width: "100%", height: "100%"}} />}
                        back={<img src="/assets/Rewards Card Back1.svg" alt="Rewards Card Back" style={{width: "100%", height: "100%"}} />}
                    />
                </div>
            </div>
        </div>
    )
}
