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
        <div className="flex justify-center max-h-[700px] overflow-hidden max-w-[500]">
            <div
                className="relative w-full max-h-24 overflow-hidden lg:max-w-screen-lg"
                style={{ paddingTop: "56.25%" }}
            >
                {bgImageUrl && (
                    <Image
                        src={bgImageUrl}
                        alt="Picture of Owners"
                        fill={true}
                        className="max-h-[700px] object-top"
                        priority={true}
                    />
                )}
            </div>
        </div>
    );
};

export default Hero;
