import type { NextApiRequest, NextApiResponse } from "next";
import { storage } from "../../app/firebase";
import { ref, getDownloadURL } from "firebase/storage";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ imageUrl?: string; error?: string }>
) {
    const fileRef = ref(storage, "Hero.jpg"); // Adjust path as necessary

    try {
        const imageUrl = await getDownloadURL(fileRef);
        res.status(200).json({ imageUrl });
    } catch (error) {
        console.error("Failed to retrieve image:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
