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
        <div className="flex justify-center items-center flex-1 mt-24 w-11/12">
            <form
                onSubmit={onSubmit}
                className="space-y-6 bg-white p-8 rounded-lg shadow-lg min-w-[320px]"
            >
                <h1 className="text-2xl font-semibold text-center">
                    Contact Us
                </h1>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Name"
                    className="w-full py-2 px-4 rounded-lg border-2 border-gray-300"
                />
                <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    placeholder="123-456-7890"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    className="w-full py-2 px-4 rounded-lg border-2 border-gray-300"
                />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    className="w-full py-2 px-4 rounded-lg border-2 border-gray-300"
                />
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    className="w-full py-2 px-4 rounded-lg border-2 border-gray-300"
                    rows={4}
                ></textarea>
                <button
                    type="submit"
                    className="bg-primary w-full text-lg text-white rounded-lg active:bg-tertiary active:shadow-lg focus:outline-none py-2"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
