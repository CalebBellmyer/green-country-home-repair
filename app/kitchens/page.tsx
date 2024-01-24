"use client";
import React from "react";
import DisplayProject from "../DisplayProject";
import Header from "../Header";

const kitchens = () => {
    return (
        <>
            <Header />
            <DisplayProject type="Kitchens" />;
        </>
    );
};

export default kitchens;
