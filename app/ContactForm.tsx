"use client";
import { FormEvent, useState } from "react";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    phone,
                }),
                headers: {
                    "content-type": "application/json",
                },
            });
        } catch (error) {
            console.error("Error", error);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
            />
            <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder="123-456-7890"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
            />
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
            ></textarea>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ContactForm;
