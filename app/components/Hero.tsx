"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
    const [bgImageUrl, setBgImageUrl] = useState("");

    useEffect(() => {
        fetch("/api/Hero")
            .then((response) => response.json())
            .then((data) => {
                if (data.imageUrl) {
                    setBgImageUrl(data.imageUrl);
                }
            })
            .catch((error) => console.error("Error fetching images:", error));
    }, []);

    return (
        <div className="relative overflow-hidden h-64 md:h-96 aspect-w-4 aspect-h-3">
            <Image
                src={bgImageUrl} // Replace with your image path
                alt="Hero"
                fill
                style={{ objectFit: "cover" }}
                className="absolute inset-0 "
                placeholder="empty"
            />
        </div>
    );
};

export default Hero;
