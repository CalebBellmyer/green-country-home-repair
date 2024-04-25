"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { storage } from "../firebase";
import {
    ref as storageRef,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";

type ProjectTypeProps = {
    type: string;
};

const ProjectTypeAdmin = ({ type: type }: ProjectTypeProps) => {
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

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
                        setImageUrls((prevUrls) => [...prevUrls, downloadURL]); // Update the imageUrls state
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
                        <div key={index} className="md:px-2 md:py-2">
                            <Image
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
            <div>
                <input type="file" onChange={onFileChange} />
                <button onClick={uploadFile} disabled={uploading}>
                    Upload
                </button>
                {error && <p className="text-color-red-700">{error}</p>}
            </div>
        </section>
    );
};

export default ProjectTypeAdmin;
