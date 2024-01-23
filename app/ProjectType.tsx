"use client";
import React, { useEffect, useState } from "react";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "./firebase";
import Carousel from "./Carousel";

type ProjectTypeProps = {
    type: string;
};

const ProjectType = ({ type }: ProjectTypeProps) => {
    if (typeof window !== "undefined") {
        // Your client-side code that uses window goes here
        const [imageUrls, setImageUrls] = useState<string[]>([]);

        useEffect(() => {
            const fetchImages = async () => {
                const folderRef = ref(storage, type); // Now correctly using the 'type' prop
                try {
                    const result = await listAll(folderRef);
                    const urlPromises = result.items.map((itemRef) =>
                        getDownloadURL(itemRef)
                    );
                    const urls = await Promise.all(urlPromises);
                    setImageUrls(urls);
                } catch (error) {
                    console.error("Error fetching images:", error);
                }
            };

            fetchImages();
        }, [type]); // Adding 'type' as a dependency for useEffect

        return (
            <section className="flex flex-col items-center justify-center p-4 bg-gray-100">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    {type}
                </h1>
                <div className="w-full max-w-4xl mx-auto">
                    {" "}
                    {/* Adjusted max width */}
                    {imageUrls.length > 0 ? (
                        <Carousel images={imageUrls} />
                    ) : (
                        <p className="text-center text-gray-600">
                            Loading images...
                        </p>
                    )}
                </div>
            </section>
        );
    }
};

export default ProjectType;
