const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center py-4">
            <div className="container mx-auto px-6">
                <div className="flex justify-center mb-4">
                    {/* Social Media Links */}

                    <a
                        href="https://www.facebook.com/RepairDoneRight"
                        className="mx-2"
                    >
                        Facebook
                    </a>
                </div>
                <div>
                    {/* Footer Navigation */}
                    <a href="/contact" className="mx-2">
                        Contact
                    </a>
                    <a href="/login" className="mx-2">
                        Employee Login
                    </a>
                    {/* Add more navigation links as needed */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
