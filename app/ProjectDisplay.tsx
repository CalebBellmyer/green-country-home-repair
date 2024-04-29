"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PaginationButton from "./PaginationButton"; // Make sure the import path is correct

interface ProjectTypeProps {
    type: string;
}

const ProjectType: React.FC<ProjectTypeProps> = ({ type }) => {
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const totalPages = Math.ceil(imageUrls.length / itemsPerPage);

    useEffect(() => {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        fetch(`/api/ProjectImageFetcher?type=${type}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.pictures && data.pictures.length > 0) {
                    setImageUrls(data.pictures); // Store all and paginate client-side
                }
            })
            .catch((error) => console.error("Error fetching images:", error));
    }, [type, currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <main className="flex flex-col min-h-screen w-full bg-gray-100">
            <div className="flex-grow">
                <Header />
                <div className="w-full max-w-4xl mx-auto p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {imageUrls
                            .slice(
                                (currentPage - 1) * itemsPerPage,
                                currentPage * itemsPerPage
                            )
                            .map((url, index) => (
                                <img
                                    key={index}
                                    src={url}
                                    alt={`${type} Project`}
                                    className="w-full h-auto"
                                />
                            ))}
                    </div>
                    <PaginationButton
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default ProjectType;
