import firebase from "firebase/compat/app";
import { auth } from "../../app/firebase";
import {
    signInWithEmailAndPassword,
    UserCredential,
    AuthError,
} from "firebase/auth";

interface SignInResult {
    result: UserCredential | null;
    error: AuthError | null;
}

export default async function signIn(
    email: string,
    password: string
): Promise<SignInResult> {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        return { result, error: null };
    } catch (error) {
        console.error("Failed to log in:", error);
        return { result: null, error: error as AuthError };
    }
}
