"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
    const [bgImageUrl, setBgImageUrl] = useState("");

    useEffect(() => {
        fetch("/api/Hero") // Make sure this matches the actual API route path
            .then((response) => response.json())
            .then((data) => {
                if (data.imageUrl) {
                    setBgImageUrl(data.imageUrl); // Update state with the URL
                }
            })
            .catch((error) => console.error("Error fetching images:", error));
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <>
            {bgImageUrl && (
                <Image
                    src={bgImageUrl}
                    alt="Hero Image"
                    layout="fill"
                    objectFit="cover"
                />
            )}
        </>
    );
};

export default Hero;
