import { ref, deleteObject } from "firebase/storage";
import { storage } from "../firebase"; // Adjust the import path as needed

type DeletePictureButtonProps = {
    imageUrl: string;
    onDeleteSuccess: (url: string) => void;
};

const DeletePictureButton = ({
    imageUrl,
    onDeleteSuccess,
}: DeletePictureButtonProps) => {
    const deleteImage = async () => {
        const imageRef = ref(storage, imageUrl);

        try {
            await deleteObject(imageRef);
            onDeleteSuccess(imageUrl);
            console.log("File deleted successfully");
        } catch (error) {
            console.error("Error deleting image:", error);
        }
    };

    return (
        <button
            onClick={deleteImage}
            className="absolute top-0 right-0 bg-red-500 text-white p-1 m-1 rounded"
        >
            Delete
        </button>
    );
};

export default DeletePictureButton;
