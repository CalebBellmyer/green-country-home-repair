import signIn from "./signIn";
import { useRouter } from "next/navigation";

export default function useHandleSignInForm() {
    const router = useRouter();

    return async (email: string, password: string) => {
        const { result, error } = await signIn(email, password);
        if (error) {
            console.error("Login error:", error);
            alert("Failed to log in"); // Display an error message (consider using a more user-friendly method)
            return;
        }
        console.log("Login successful:", result);
        router.push("/admin"); // Navigate on successful login
    };
}
