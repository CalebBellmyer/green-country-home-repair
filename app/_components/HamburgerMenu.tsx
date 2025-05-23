function HamburgerMenu({
    setIsMenuOpen,
    isMenuOpen,
}: {
    setIsMenuOpen: (value: boolean) => void;
    isMenuOpen: boolean;
}) {
    return (
        <div className="md:hidden " aria-label="navigation-menu">
            <button
                className="relative group"
                aria-label="open navigation menu"
                onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                    console.log(!isMenuOpen);
                }}
            >
                <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-primary ring-0 ring-gray-300 hover:ring-4 group-focus:ring-4 ring-opacity-30 duration-75 ">
                    <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden group-focus:-translate-y-1.5 group-focus:-rotate-90">
                        <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg] group-focus:w-2/3 delay-150"></div>
                        <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10"></div>
                        <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150"></div>
                    </div>
                </div>
            </button>
        </div>
    );
}

export default HamburgerMenu;
