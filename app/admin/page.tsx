"use client";
import { useState } from "react";
import SideNav from "./SideNav";
import ProjectTypeAdmin from "./projectTypeAdmin";

const page = () => {
    const [currentType, setCurrentType] = useState<string>("Bathrooms");

    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav setType={setCurrentType} />
            </div>
            <ProjectTypeAdmin type={currentType} />
        </div>
    );
};

export default page;
