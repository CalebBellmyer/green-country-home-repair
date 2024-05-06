// pages/index.tsx or pages/index.js
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
    const [bgImageUrl, setBgImageUrl] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/Hero")
            .then((response) => response.json())
            .then((data) => {
                if (data.imageUrl) {
                    setBgImageUrl(data.imageUrl);
                    setLoading(false);
                }
            })
            .catch((error) => console.error("Error fetching images:", error));
    }, []);

    return (
        <div className="flex justify-center w-full">
            <div className="relative flex justify-center overflow-hidden w-full 2xl:w-5/6 h-[16rem] sm:h-[24rem] md:h-[28rem] lg:h-[36rem]">
                {!loading ? (
                    <Image
                        src={bgImageUrl}
                        alt="Hero"
                        fill
                        style={{ objectFit: "cover" }}
                        placeholder="empty"
                        quality={100}
                        priority
                    />
                ) : (
                    <div className="animate-pulse duration-100 rounded-lg min-width-[640px] w-full h-full bg-gray-300 ">
                        {" "}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Hero;
