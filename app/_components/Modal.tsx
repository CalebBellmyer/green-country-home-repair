import React from "react";

interface ModalProps {
    src: string;
    alt: string;
    onClose: () => void;
}

const Modal = ({ src, alt, onClose }: ModalProps) => {
    return (
        <div className="fixed z-10 pt-24 left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-90">
            <div className="flex flex-col content-center ">
                <div
                    className="flex justify-end pr-8 pb-2 text-white text-4xl font-bold transition duration-300 hover:text-[#bbb] focus:text-[#bbb] cursor-pointer"
                    onClick={onClose}
                >
                    &times;
                </div>
                <div className="flex justify-center w-4/5 max-h-[70vh] overflow-hidden mx-auto">
                    <img
                        className="object-contain max-w-full max-h-full"
                        src={src}
                        alt={alt}
                    />
                </div>
            </div>
        </div>
    );
};

export default Modal;
