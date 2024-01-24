"use client";
import React from "react";
import DisplayProject from "../DisplayProject";
import Header from "../Header";

const decks = () => {
    return (
        <>
            <Header />
            <DisplayProject type="Decks" />;
        </>
    );
};

export default decks;
