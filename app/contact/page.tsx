import React from "react";
import ContactForm from "../_components/ContactForm";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

function Contact() {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center p-4  h-48">
                <p className="text-lg md:text-2xl font-semibold hover:text-slate-500 transition duration-300 ">
                    Contact Us
                </p> 
                <div className="flex items-center justify-center">
                    <p className="text-lg py-2 w-2/3">
                        Contact Green Country Home Repair today to schedule your free estimate. Call us at 918-
                        214-6006 Monday thru Friday 7:00 am to 5:00 pm or fill out the form below and we will
                        contact you as soon as possible.
                    </p>
                </div>
            </div>
            <div className="flex items-center">

            <ContactForm />
            </div>
            <div className="fixed inset-x-0 bottom-0">
                <Footer />
            </div>
        </div>
    );
}

export default Contact;
