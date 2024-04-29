import { auth } from "../../app/firebase";
import { signOut } from "firebase/auth";

export default async function logout() {
    try {
        await signOut(auth);
        console.log("Logged out");
    } catch (error) {
        console.error("Failed to log out:", error);
    }
}
