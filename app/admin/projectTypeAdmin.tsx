"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { storage } from "../firebase";
import {
    ref as storageRef,
    uploadBytes,
    getDownloadURL,
    deleteObject,
} from "firebase/storage";
import PaginationButton from "../components/PaginationButton";

type ProjectTypeProps = {
    type: string;
};

const ProjectTypeAdmin = ({ type: type }: ProjectTypeProps) => {
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const totalPages = Math.ceil(imageUrls.length / itemsPerPage);

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newFile = event.target.files ? event.target.files[0] : null;
        setFile(newFile);
    };

    const uploadFile = () => {
        if (file) {
            const uploadRef = storageRef(storage, `${type}/${file.name}`);
            setUploading(true);

            uploadBytes(uploadRef, file)
                .then((snapshot) => {
                    getDownloadURL(snapshot.ref).then((downloadURL) => {
                        console.log("File available at", downloadURL);
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

            deleteObject(fileRef)
                .then(() => {
                    setImageUrls((prevUrls) =>
                        prevUrls.filter((url) => url !== imageUrl)
                    );
                    console.log("File deleted successfully");
                })
                .catch((error) => {
                    console.error("Error removing file: ", error);
                });
        }
    };

    useEffect(() => {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        fetch(`/api/ProjectImageFetcher?type=${encodeURIComponent(type)}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.pictures && data.pictures.length > 0) {
                    setImageUrls(data.pictures);
                }
            })
            .catch((error) => console.error("Error fetching images:", error));
    }, [type, currentPage]); // type and currentPage are a dependency, effect re-runs when type/currentPage changes

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <section className="flex flex-col  items-center j p-4 bg-gray-100 ">
            <div className="w-full max-w-4xl mx-auto md:grid md:grid-cols-3 ">
                {imageUrls.length > 0 ? (
                    imageUrls
                        .slice(
                            (currentPage - 1) * itemsPerPage,
                            currentPage * itemsPerPage
                        )
                        .map((imageUrl, index) => (
                            <div key={index} className="md:px-2 md:py-2">
                                <Image
                                    src={imageUrl}
                                    alt={`${type} image ${index + 1}`}
                                    width={500}
                                    height={300}
                                />
                                <button
                                    type="button"
                                    onClick={() => deleteImage(imageUrl)}
                                    className="mt-2 text-red-500 hover:text-red-700"
                                >
                                    Delete
                                </button>
                            </div>
                        ))
                ) : (
                    <p className="text-center text-gray-600">
                        Loading images...
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
                            type="file"
                            onChange={onFileChange}
                            className="file:mr-4 file:w-full file:py-2 file:px-4 file:rounded-md file:border-0
                           file:text-sm file:font-semibold file:bg-primary file:text-white
                           hover:file:bg-tertiary hover:file:shadow-lg"
                        />
                    </div>
                    <div className="w-full sm:w-auto">
                        <button
                            onClick={uploadFile}
                            disabled={uploading}
                            className={`w-full py-2 px-4 text-sm font-semibold rounded-md text-white bg-primary
                            hover:bg-tertiary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                                uploading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        >
                            {uploading ? "Uploading..." : "Upload"}
                        </button>
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                </div>
            </div>
        </section>
    );
};

export default ProjectTypeAdmin;
