import React from "react";
import ContactForm from "../_components/ContactForm";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

function Contact() {
    return (
        <div>
            <Header />
            <div className="flex items-center justify-center p-4 bg-gray-100">
                <span className="text-lg md:text-2xl font-semibold hover:text-slate-500 transition duration-300 ">
                    Contact Us
                </span> 
            </div>
            <ContactForm />
            <div className="fixed inset-x-0 bottom-0">
                <Footer />
            </div>
        </div>
    );
}

export default Contact;
