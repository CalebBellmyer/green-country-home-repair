"use client";
import React, { useState, useEffect, useCallback } from "react";
import CarouselButton from "./CarouselButton";

export interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstImage = currentIndex === 0;
        const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastImage = currentIndex === images.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const next = useCallback(goToNext, [currentIndex, images.length]);

    useEffect(() => {
        const interval = setInterval(next, 6000);
        return () => clearInterval(interval); // This is the cleanup function to clear the interval
    }, [currentIndex, next]);

    return (
        <div className="flex items-center justify-center">
            <CarouselButton direction="left" onClick={goToPrevious} />
            <div className="w-full max-w-2xl h-[400px] relative flex items-center justify-center overflow-hidden">
                {images.length > 0 && (
                    <img
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        className="w-full h-full object-contain"
                    />
                )}
            </div>
            <CarouselButton direction="right" onClick={goToNext} />
        </div>
    );
};

export default Carousel;
