"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PaginationButton from "./PaginationButton";
import Image from "next/image";

interface ProjectTypeProps {
    type: string;
}

const ProjectType: React.FC<ProjectTypeProps> = ({ type }) => {
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const totalPages = Math.ceil(imageUrls.length / itemsPerPage);

    useEffect(() => {
        fetch(`/api/ProjectImageFetcher?type=${type}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.pictures && data.pictures.length > 0) {
                    setImageUrls(data.pictures); // Store all and paginate client-side
                }
            })
            .catch((error) => console.error("Error fetching images:", error));
    }, [type]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <main className="flex flex-col min-h-screen w-full bg-gray-100">
            <Header />
            <div className="w-full max-w-4xl mx-auto p-4 flex-grow">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {imageUrls
                        .slice(
                            (currentPage - 1) * itemsPerPage,
                            currentPage * itemsPerPage
                        )
                        .map((url, index) => (
                            <div key={index} className="w-full h-full relative">
                                <Image
                                    src={url}
                                    alt={`${type} project image ${index + 1}`}
                                    layout="responsive"
                                    objectFit="cover"
                                    width={300}
                                    height={200}
                                    className="rounded-lg"
                                />
                            </div>
                        ))}
                </div>
                <PaginationButton
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
            <Footer />
        </main>
    );
};

export default ProjectType;
