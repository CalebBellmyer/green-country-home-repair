import type { NextApiRequest, NextApiResponse } from "next";
import { storage } from "../../app/firebase";
import { ref, getDownloadURL, listAll } from "firebase/storage";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ pictures?: string[]; error?: string }>
) {
    // Extracting 'type' from the query parameters
    const type = req.query.type as string; // Make sure 'type' is passed as a query parameter

    const folderRef = ref(storage, type); // Use 'type' to reference a specific folder in Firebase Storage

    try {
        let result = await listAll(folderRef);
        const urlPromises = result.items.map((itemRef) =>
            getDownloadURL(itemRef)
        );
        const pictures = await Promise.all(urlPromises);
        res.status(200).json({ pictures });
    } catch (error) {
        console.error("Failed to retrieve images:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
