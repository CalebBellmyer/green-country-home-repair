"use client";
import React, { useState } from "react";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-primary z-50">
            <nav className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-lg font-bold text-white">
                    <Link href="/">Green Country</Link>{" "}
                    {/* Replace with your company logo */}
                </div>

                {/* Hamburger Menu Icon for Mobile */}
                <div className="md:hidden">
                    <HamburgerMenu
                        setIsMenuOpen={setIsMenuOpen}
                        isMenuOpen={isMenuOpen}
                    />
                </div>

                {/* Navigation Links */}
                <ul
                    className={`${
                        isMenuOpen ? "flex" : "hidden"
                    } flex-col md:flex md:flex-row md:space-x-4 absolute md:relative top-20 md:top-auto left-0 md:left-auto w-full md:w-auto bg-primary md:bg-transparent p-6 md:p-0 transition-all duration-300 ease-in-out z-10`}
                >
                    <li>
                        <Link
                            href="/kitchens"
                            className="text-white hover:text-gray-200"
                        >
                            Kitchens
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/bathrooms"
                            className="text-white hover:text-gray-200"
                        >
                            Bathrooms
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/decks"
                            className="text-white hover:text-gray-200"
                        >
                            Decks
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="text-white hover:text-gray-200"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
