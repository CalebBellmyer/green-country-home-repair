"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PaginationButton from "./PaginationButton";
import Image from "next/image";
import Modal from "./Modal";

interface ProjectTypeProps {
    type: string;
}

const ProjectType: React.FC<ProjectTypeProps> = ({ type }) => {
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const itemsPerPage = 12;
    const totalPages = Math.ceil(imageUrls.length / itemsPerPage);

    const showModal = (url: string) => {
        setSelectedImage(url);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

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
            <div className=" flex w-full mx-auto p-4 flex-grow justify-center items-center flex-col">
                <div className="flex w-full justify-center items-center " >
                    <div className="2xl:w-5/6 grid   grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
                        {imageUrls
                            .slice(
                                (currentPage - 1) * itemsPerPage,
                                currentPage * itemsPerPage
                            )
                            .map((url, index) => (
                                <div
                                    key={index}
                                    className="flex w-72 h-52 md:w-80  md:h-80 relative overflow-hidden rounded-lg shadow-lg "
                                >
                                    <Image
                                        src={url}
                                        alt={`${type} project image ${index + 1}`}
                                        width={340} // Adjust based on the grid size
                                        height={208}
                                        quality={100}
                                        style={{ objectFit: "cover" }}
                                        onClick={() => showModal(url)}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
                <PaginationButton
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
            <Footer />
            {selectedImage && (
                <Modal
                    src={selectedImage}
                    alt={`${type} project image`}
                    onClose={closeModal}
                />
            )}
        </main>
    );
};

export default ProjectType;
