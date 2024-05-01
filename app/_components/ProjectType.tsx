"use client";

import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import Link from "next/link";

type ProjectTypeProps = {
    type: string;
    maxImages?: number;
};

const ProjectType = ({ type, maxImages = undefined }: ProjectTypeProps) => {
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    maxImages = 6 || 3;

    useEffect(() => {
        fetch(`/api/ProjectImageFetcher?type=${type}&limit=${maxImages || ""}`)
            .then((response) => response.json())
            .then((data) => {
                // Assuming data.pictures is an array of image URLs
                if (data.pictures && data.pictures.length > 0) {
                    setImageUrls(data.pictures.slice(0, maxImages));
                }
            })
            .catch((error) => console.error("Error fetching images:", error));
    }, [type, maxImages]); // type is now a dependency, effect re-runs when type changes

    return (
        <section className="flex flex-col items-center justify-center p-4 bg-gray-100">
            <Link href={`/${type.toLowerCase()}`}>
                <span className="text-lg font-semibold hover:text-slate-500 transition duration-300 ">
                    {type}
                </span>
            </Link>
            <div className="w-full max-w-4xl mx-auto">
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
};

export default ProjectType;
