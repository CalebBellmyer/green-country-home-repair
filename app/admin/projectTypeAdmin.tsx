"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ProjectTypeProps = {
    type: string;
};

const ProjectTypeAdmin = ({ type }: ProjectTypeProps) => {
    const [imageUrls, setImageUrls] = useState<string[]>([]);

    useEffect(() => {
        fetch(`/api/ProjectImageFetcher?type=${encodeURIComponent(type)}`) // Include the type in API call if needed
            .then((response) => response.json())
            .then((data) => {
                // Assuming data.pictures is an array of image URLs
                if (data.pictures && data.pictures.length > 0) {
                    setImageUrls(data.pictures);
                }
            })
            .catch((error) => console.error("Error fetching images:", error));
    }, [type]); // type is now a dependency, effect re-runs when type changes

    return (
        <section className="flex flex-col  items-center justify-center p-4 bg-gray-100 ">
            <div className="w-full max-w-4xl mx-auto md:grid md:grid-cols-3 ">
                {imageUrls.length > 0 ? (
                    imageUrls.map((imageUrl, index) => (
                        <div className="md:px-2 md:py-2">
                            <Image
                                key={index}
                                src={imageUrl}
                                alt={`${type} image ${index + 1}`}
                                width={500}
                                height={300}
                            />
                            <button type="button"></button>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-600">
                        Loading images...
                    </p>
                )}
            </div>
        </section>
    );
};

export default ProjectTypeAdmin;
