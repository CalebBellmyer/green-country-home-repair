import React from "react";

const AdminNavButton = ({ type, setType }) => {
    return (
        <div className="rounded-lg py-1">
            <button
                type="button"
                className="w-40 md:w-48 text-lg text-white rounded-lg focus:bg-tertiary focus:shadow-lg
                           transition duration-300 ease-in-out focus:outline-none text-left px-4"
                onClick={() => setType(type)}
            >
                {type}
            </button>
        </div>
    );
};

export default AdminNavButton;
