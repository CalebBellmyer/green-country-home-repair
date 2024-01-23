import { useRef } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase"; // Adjust the import path as needed

const AddPictureButton = ({ type, onUploadSuccess }) => {
    const fileInputRef = useRef(null);

    const handleFileSelect = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const fileRef = ref(storage, `${type}/${file.name}`);
        try {
            const snapshot = await uploadBytes(fileRef, file);
            const url = await getDownloadURL(snapshot.ref);
            onUploadSuccess(url);
            console.log("File uploaded successfully");
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <>
            <button
                onClick={handleButtonClick}
                className="bg-green-500 text-white p-2 rounded"
            >
                Add Picture
            </button>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                className="hidden"
            />
        </>
    );
};

export default AddPictureButton;
