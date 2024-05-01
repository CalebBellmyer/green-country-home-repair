import React from "react";
import ContactForm from "../_components/ContactForm";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

function Contact() {
    return (
        <div>
            <Header />
            <ContactForm />
            <div className="fixed inset-x-0 bottom-0">
                <Footer />
            </div>
        </div>
    );
}

export default Contact;
