import React from "react";
import ProjectDisplay from "../components/ProjectDisplay";

const Page = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <ProjectDisplay type="Decks" />
            </div>
        </div>
    );
};
export default Page;
