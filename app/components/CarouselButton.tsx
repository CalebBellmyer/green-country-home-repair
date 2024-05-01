import React from "react";

interface CarouselButtonProps {
    direction: "left" | "right";
    onClick: () => void;
    className?: string;
}

const CarouselButton: React.FC<CarouselButtonProps> = ({
    direction,
    onClick,
    className,
}) => {
    const isLeft = direction === "left";
    // Using Font Awesome icons for better visual appeal
    const icon = isLeft ? (
        <svg
            className="w-4 h-4 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
            />
        </svg>
    ) : (
        <svg
            className="w-4 h-4 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
            />
        </svg>
    );

    return (
        <button
            onClick={onClick}
            className={`inline-flex items-center justify-center bg-white bg-opacity-60 hover:bg-opacity-80 rounded-full shadow-md p-3 text-lg transition duration-300 ease-in-out ${className}`}
            aria-label={isLeft ? "Previous" : "Next"}
        >
            {icon}
        </button>
    );
};

export default CarouselButton;
