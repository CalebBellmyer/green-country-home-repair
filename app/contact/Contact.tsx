"use client";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");
    const [captchaValue, setCaptchaValue] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!captchaValue) {
            alert("Please verify you are not a robot.");
            return;
        }

        // Send data to the server-side for email processing
        // Example: POST request to your API endpoint
    };

    return (
        <div>WIP</div>
        // <form onSubmit={handleSubmit}>
        //     <label htmlFor="subject">Subject:</label>
        //     <input
        //         type="text"
        //         id="subject"
        //         name="subject"
        //         value={subject}
        //         onChange={(e) => setSubject(e.target.value)}
        //     />

        //     <label htmlFor="body">Body:</label>
        //     <textarea
        //         id="body"
        //         name="body"
        //         value={body}
        //         onChange={(e) => setBody(e.target.value)}
        //     />

        //     {/* <ReCAPTCHA
        //         sitekey="YOUR_RECAPTCHA_SITE_KEY"
        //         onChange={(value) => setCaptchaValue(value)}
        //     /> */}

        //     <button type="submit">Submit</button>
        // </form>
    );
};

export default Contact;
