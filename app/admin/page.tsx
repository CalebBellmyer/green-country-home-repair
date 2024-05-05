"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SideNav from "./SideNav";
import ProjectTypeAdmin from "./projectTypeAdmin";

const Page = () => {
    const [currentType, setCurrentType] = useState<string>("Bathrooms");
    const router = useRouter();
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                router.push("/login");
            }
        });

        return () => unsubscribe();
    }, [auth, router]);

    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-gray-100">
            <div className="w-full flex-none md:w-64">
                <SideNav setType={setCurrentType} />
            </div>
            <div className="w-full">
                <ProjectTypeAdmin type={currentType} />
            </div>
        </div>
    );
};

export default Page;
