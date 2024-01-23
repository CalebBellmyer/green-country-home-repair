"use client";
import React, { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase"; // Adjust the import path as needed

const Hero = () => {
    if (typeof window !== "undefined") {
        // Your client-side code that uses window goes here
        const [bgImageUrl, setBgImageUrl] = useState("");

        useEffect(() => {
            const fetchImage = async () => {
                const storageRef = ref(storage, "/Hero.jpg"); // Update path accordingly
                try {
                    const url = await getDownloadURL(storageRef);
                    setBgImageUrl(url);
                } catch (error) {
                    console.error("Error fetching image from Firebase:", error);
                }
            };

            fetchImage();
        }, []);

        return (
            <div
                className="hero bg-cover bg-center h-96 text-white text-center p-12 md:p-24"
                style={{ backgroundImage: `url(${bgImageUrl})` }}
            ></div>
        );
    }
};

export default Hero;
