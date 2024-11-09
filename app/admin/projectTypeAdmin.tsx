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
        const allFiles = event.target.files;

        if (allFiles) {
            for (let i = 0; i < allFiles.length; i++) {
                let file = allFiles[i];
                if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
                    const uploadRef = storageRef(
                        storage,
                        `${type}/${file.name}`
                    );
                    setUploading(true);

                    uploadBytes(uploadRef, file)
                        .then((snapshot) => {
                            getDownloadURL(snapshot.ref).then((downloadURL) => {
                                setImageUrls((prevUrls) => [
                                    ...prevUrls,
                                    downloadURL,
                                ]);
                                setUploading(false);
                            });
                        })
                        .catch((error) => {
                            console.error("Upload failed:", error);
                            setError("Upload failed");
                            setUploading(false);
                        });
                } else {
                    alert("Only JPG and PNG files are allowed");
                    setError("Only JPG and PNG files are allowed");
                    console.log('jpg or png only')
                }
            }
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
        <section className="w-full p-4 bg-gray-100">
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                                className="flex flex-col items-center"
                            >
                                <div className="flex justify-end w-full">
                                    <button
                                        type="button"
                                        aria-label="Delete Image"
                                        onClick={() => deleteImage(imageUrl)}
                                        disabled={deleting}
                                        className={`text-red-500 text-2xl font-bold p-2 rounded-full ${
                                            deleting
                                                ? "opacity-50 cursor-not-allowed"
                                                : "hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        }`}
                                    >
                                        &times;
                                    </button>
                                </div>
                                <div className="w-full h-auto relative aspect-square rounded-md overflow-hidden">
                                    <Image
                                        src={imageUrl}
                                        alt={`${type} project image ${index + 1}`}
                                        width={340} // Adjust based on the grid size
                                        height={208}
                                        quality={100}
                                        style={{ objectFit: "cover" }}

                                    />
                                </div>
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
                            multiple
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
