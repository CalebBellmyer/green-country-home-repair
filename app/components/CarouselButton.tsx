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
    const icon = isLeft ? "‹" : "›";

    return (
        <button
            onClick={onClick}
            className={`bg-white bg-opacity-50 hover:bg-opacity-70 rounded-full shadow p-2 text-xl ${className}`}
            aria-label={isLeft ? "Previous" : "Next"}
        >
            {icon}
        </button>
    );
};

export default CarouselButton;
