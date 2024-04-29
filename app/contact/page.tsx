import React from "react";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
