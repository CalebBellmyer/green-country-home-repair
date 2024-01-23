"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
    if (typeof window !== "undefined") {
        // Your client-side code that uses window goes here
        const [isMenuOpen, setIsMenuOpen] = useState(false);

        return (
            <header className="bg-primary shadow-md z-50">
                <nav className="container mx-auto flex justify-between items-center py-4 px-6 md:flex-row">
                    <div className="text-lg font-bold text-white">
                        <Link href="/">Green Country</Link>{" "}
                        {/* Replace with your company logo */}
                    </div>

                    {/* Hamburger Menu Icon for Mobile */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            type="button"
                        >
                            <span>Menu</span>{" "}
                            {/* Replace with icon if preferred */}
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <ul
                        className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ${
                            isMenuOpen ? "block" : "hidden md:flex"
                        } bg-primary md:bg-transparent absolute md:relative top-16 md:top-auto left-0 w-full md:w-auto p-6 md:p-0 transition-all duration-300 ease-in-out`}
                    >
                        <li>
                            <Link href="/kitchens">Kitchens</Link>
                        </li>
                        <li>
                            <Link href="/bathrooms">Bathrooms</Link>
                        </li>
                        <li>
                            <Link href="/decks">Decks</Link>
                        </li>
                        {/* Add more navigation items here */}
                    </ul>
                </nav>
            </header>
        );
    }
};

export default Header;
