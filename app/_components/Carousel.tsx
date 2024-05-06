"use client";
import React, { useState, useEffect, useCallback } from "react";
import CarouselButton from "./CarouselButton";
import Image from "next/image";

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
        return () => {
            clearInterval(interval);
        };
    }, [currentIndex, next]);

    return (
        <div className="flex items-center justify-center space-x-4">
            <CarouselButton
                direction="left"
                onClick={goToPrevious}
                aria-label="right carousel navigation arrow"
                // Add in once swipe gesture is added
                // isDisabled={window.innerWidth <= 820}
            />
            <div className="w-full max-w-2xl h-[400px] relative flex items-center justify-center overflow-hidden shadow-lg rounded-lg">
                {images.length > 0 && (
                    <Image
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(min-width: 640px) 640px, 100vw"
                        className="rounded-lg" // Add rounded corners to the image itself if needed
                    />
                )}
            </div>
            <CarouselButton
                direction="right"
                onClick={goToNext}
                aria-label="left carousel navigation arrow"
                // Add in once swipe gesture is added
                // isDisabled={window.innerWidth <= 820}
            />
        </div>
    );
};

export default Carousel;
