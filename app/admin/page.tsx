import React from "react";
import AdminProjectType from "./AdminProjectType";

const Admin = () => {
    return (
        <div>
            <h1>Admin</h1>
            <AdminProjectType type="Bathrooms" />
            <AdminProjectType type="Kitchens" />
            <AdminProjectType type="Decks" />
        </div>
    );
};

export default Admin;
