import React from "react";
import ContactForm from "../ContactForm";
import Header from "../Header";
import Footer from "../Footer";

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
