"use client";
import React, { useEffect, useState } from "react";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../firebase";
import AddPictureButton from "./AddPictureButton";
import DeletePictureButton from "./DeletePictureButton";

const AdminProjectType = ({ type }) => {
    const [imageUrls, setImageUrls] = useState<string[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            const folderRef = ref(storage, type);
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
    }, [type]);

    const handleUploadSuccess = (url) => {
        setImageUrls((currentUrls) => [...currentUrls, url]);
    };

    const handleDeleteSuccess = (deletedUrl) => {
        setImageUrls((currentUrls) =>
            currentUrls.filter((url) => url !== deletedUrl)
        );
    };

    return (
        <section className="p-4 bg-gray-100">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    {type}
                </h1>
                <AddPictureButton
                    type={type}
                    onUploadSuccess={handleUploadSuccess}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {imageUrls.map((url, index) => (
                    <div key={index} className="relative">
                        <img
                            src={url}
                            alt={`${type} ${index + 1}`}
                            className="w-full h-auto object-cover"
                        />
                        <DeletePictureButton
                            imageUrl={url}
                            onDeleteSuccess={handleDeleteSuccess}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AdminProjectType;
