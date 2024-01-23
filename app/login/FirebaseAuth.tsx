"use client";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const FirebaseAuth = () => {
    if (typeof window === "undefined") return null;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Redirect to /admin on successful login
            window.location.href = "/admin";
        } catch (error) {
            // Handle errors here, such as displaying a notification
            console.error("Authentication error", error);
        }
    };

    return (
        <div>
            <h1>Admin Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default FirebaseAuth;
