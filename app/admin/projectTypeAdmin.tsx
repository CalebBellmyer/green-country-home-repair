"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { storage } from "../firebase";
import {
    ref as storageRef,
    uploadBytes,
    getDownloadURL,
    deleteObject,
} from "firebase/storage";
import PaginationButton from "../_components/PaginationButton";

type ProjectTypeProps = {
    type: string;
};

const ProjectTypeAdmin = ({ type }: ProjectTypeProps) => {
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true); // New loading state
    const [deleting, setDeleting] = useState<boolean>(false); // Deletion loader
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const totalPages = Math.ceil(imageUrls.length / itemsPerPage);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        if (file) {
            const uploadRef = storageRef(storage, `${type}/${file.name}`);
            setUploading(true);

            uploadBytes(uploadRef, file)
                .then((snapshot) => {
                    getDownloadURL(snapshot.ref).then((downloadURL) => {
                        setImageUrls((prevUrls) => [...prevUrls, downloadURL]);
                        setUploading(false);
                    });
                })
                .catch((error) => {
                    console.error("Upload failed:", error);
                    setError("Upload failed");
                    setUploading(false);
                });
        } else {
            setError("No file selected");
        }
    };

    const deleteImage = (imageUrl: string) => {
        if (window.confirm("Are you sure you want to delete this image?")) {
            const fileRef = storageRef(storage, imageUrl);
            setDeleting(true);

            deleteObject(fileRef)
                .then(() => {
                    setImageUrls((prevUrls) =>
                        prevUrls.filter((url) => url !== imageUrl)
                    );
                    setDeleting(false);
                    console.log("File deleted successfully");
                })
                .catch((error) => {
                    console.error("Error removing file: ", error);
                    setDeleting(false);
                });
        }
    };

    useEffect(() => {
        setLoading(true); // Set loading to true before fetching
        fetch(`/api/ProjectImageFetcher?type=${encodeURIComponent(type)}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.pictures && data.pictures.length > 0) {
                    setImageUrls(data.pictures);
                }
                setLoading(false); // Set loading to false after fetching
            })
            .catch((error) => {
                console.error("Error fetching images:", error);
                setLoading(false); // Set loading to false even on error
            });
    }, [type, currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const triggerFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <section className="flex flex-col items-center p-4 bg-gray-100">
            <div className="w-full max-w-4xl mx-auto md:grid md:grid-cols-3 lg:grid-cols-4">
                {loading ? (
                    <p className="text-center text-gray-600">
                        Loading images...
                    </p>
                ) : imageUrls.length > 0 ? (
                    imageUrls
                        .slice(
                            (currentPage - 1) * itemsPerPage,
                            currentPage * itemsPerPage
                        )
                        .map((imageUrl, index) => (
                            <div
                                key={index}
                                className="md:px-2 md:py-2 flex flex-col"
                            >
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        aria-label="Delete Image"
                                        onClick={() => deleteImage(imageUrl)}
                                        disabled={deleting}
                                        className={`text-red-500 text-2xl font-bold p-2 w-10 h-10 flex items-center justify-center rounded-full ${
                                            deleting
                                                ? "opacity-50 cursor-not-allowed"
                                                : "hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-2"
                                        }`}
                                    >
                                        &times;
                                    </button>
                                </div>

                                <Image
                                    src={imageUrl}
                                    alt={`${type} image ${index + 1}`}
                                    width={500}
                                    height={300}
                                    className="rounded-md"
                                />
                            </div>
                        ))
                ) : (
                    <p className="text-center text-gray-600">
                        No images found.
                    </p>
                )}
            </div>
            <PaginationButton
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
            <div className="flex justify-end w-full">
                <div className="flex items-center justify-center space-x-4 p-4">
                    <div className="w-full sm:w-auto">
                        <input
                            ref={fileInputRef}
                            type="file"
                            onChange={onFileChange}
                            className="hidden"
                        />
                        <button
                            type="button"
                            onClick={triggerFileInput}
                            className="w-20 h-20 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white text-3xl font-bold"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectTypeAdmin;
