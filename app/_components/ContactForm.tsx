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
            window.location.reload();
        } catch (error) {
            console.error("Error", error);
        }
    };

    return (
        <form onSubmit={onSubmit} className="px-2">
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                className="block w-full p-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            />
            <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder="123-456-7890"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                className="block w-full p-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="block w-full p-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                className="block w-full p-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            ></textarea>
            <div className="flex justify-center pb-2">
                <button
                    type="submit"
                    className="px-4 py-2 mt-4 text-white bg-primary rounded-md shadow   "
                >
                    Submit
                </button>
            </div>
        </form>
    );
}

export default ContactForm;
