"use client";
import React, { useState } from "react";
import useHandleSignInForm from "@/pages/api/handleSignInForm";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

const Page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSignIn = useHandleSignInForm();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await handleSignIn(email, password);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />
            <main className="flex-grow">
                <div className="flex justify-center items-center flex-1 mt-24">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 bg-white p-8 rounded-lg shadow-lg min-w-[320px]"
                    >
                        <h1 className="text-2xl font-semibold text-center">
                            Login
                        </h1>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            name="email"
                            id="email"
                            placeholder="example@gmail.com"
                            className="w-full py-2 px-4 rounded-lg border-2 border-gray-300"
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            name="password"
                            id="password"
                            placeholder="password"
                            className="w-full py-2 px-4 rounded-lg border-2 border-gray-300"
                        />
                        <button
                            type="submit"
                            className="bg-primary w-full text-lg text-white rounded-lg active:bg-tertiary active:shadow-lg focus:outline-none py-2"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Page;
