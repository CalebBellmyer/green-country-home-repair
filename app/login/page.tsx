"use client";
import React, { useState } from "react";
import useHandleSignInForm from "@/pages/api/handleSignInForm";

const Page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSignIn = useHandleSignInForm(); // Use the custom hook to get the function

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission
        await handleSignIn(email, password); // Call the sign-in function with the current state
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    name="email"
                    id="email"
                    placeholder="example@gmail.com"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    name="password"
                    id="password"
                    placeholder="password"
                />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default Page;
