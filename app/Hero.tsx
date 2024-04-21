"use client";
import React, { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase"; // Adjust the import path as needed
import Image from "next/image";

const Hero = () => {
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
        <>
            {bgImageUrl && (
                <Image src={bgImageUrl} alt="Hero Image" fill={true} />
            )}
        </>
    );
};

export default Hero;
