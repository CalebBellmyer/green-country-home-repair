"use client";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

type ProjectTypeProps = {
    type: string;
};

export default function Kitchens() {
    const [imageUrls, setImageUrls] = useState<string[]>([]);

    useEffect(() => {
        fetch(`/api/ProjectImageFetcher?type=${"Kitchens"}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.pictures && data.pictures.length > 0) {
                    setImageUrls(data.pictures);
                }
            })
            .catch((error) => console.error("Error fetching images:", error));
    }, []);

    return (
        <main className="flex flex-col min-h-screen w-full">
            <Header />
            <div className="w-full max-w-4xl mx-auto p-4">
                <div className="grid grid=cols-1 md:grid-cols-3 gap-4">
                    {imageUrls.map((url, index) => (
                        <img
                            key={index}
                            src={url}
                            alt={`Kitchen Project`}
                            className="w-full h-auto"
                        />
                    ))}
                </div>
            </div>
            <div className="fixed inset-x-0 bottom-0">
                <Footer />
            </div>
        </main>
    );
}
