import React from "react";

interface PaginationButtonProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    return (
        <div className="flex justify-center space-x-4 mt-4">
            <button
                disabled={currentPage <= 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="px-4 py-2 rounded bg-primary text-white disabled:bg-gray-300 active:bg-tertiary active:shadow-lg"
            >
                Previous
            </button>
            <button
                disabled={currentPage >= totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="px-4 py-2 rounded bg-primary text-white disabled:bg-gray-300 active:bg-tertiary active:shadow-lg"
            >
                Next
            </button>
        </div>
    );
};

export default PaginationButton;
