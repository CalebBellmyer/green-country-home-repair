"use client";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

type ProjectTypeProps = {
    type: string;
};

export default function Decks() {
    const [imageUrls, setImageUrls] = useState<string[]>([]);

    useEffect(() => {
        // Include the type in the API call if needed
        fetch(`/api/ProjectImageFetcher?type=${"Decks"}`)
            .then((response) => response.json())
            .then((data) => {
                // Assuming data.pictures is an array of image URLs
                if (data.pictures && data.pictures.length > 0) {
                    setImageUrls(data.pictures);
                }
            })
            .catch((error) => console.error("Error fetching images:", error));
    }, []); // 'type' is now a dependency, effect re-runs when 'type' changes

    return (
        <main className="flex flex-col min-h-screen w-full">
            <Header />
            <div className="w-full max-w-4xl mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {imageUrls.map((url, index) => (
                        <img
                            key={index}
                            src={url}
                            alt={`Deck Project`}
                            className="w-full h-auto"
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
