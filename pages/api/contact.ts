import type { NextApiRequest, NextApiResponse } from "next";
import Mailjet from "node-mailjet";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("Data", req.body);
    
    const { name, email, message, phone } = req.body;

    // Basic validation for required fields
    if (!name || !email || !message) {
        return res.status(400).json({ error: "Name, email, and message are required fields." });
    }

    const mailjet = Mailjet.apiConnect(
        process.env.MJ_APIKEY_PUBLIC || "",
        process.env.MJ_APIKEY_PRIVATE || ""
    );

    try {
        const request = await mailjet.post("send", { version: "v3.1" }).request({
            Messages: [
                {
                    From: {
                        Email: "cjbellmyer5984@gmail.com",
                        Name: "Green Country Home Repair",
                    },
                    To: [
                        {
                            Email: "johnnybellmyer@hotmail.com",
                            Name: "Johnny Bellmyer",
                        },
                    ],
                    Subject: "Request Service Form",
                    TextPart: `${message}\nMy email address is ${email}`,
                    HTMLPart: `
                        <p>${message}</p>
                        <br />
                        <h3>Name: ${name}</h3>
                        <h3>Email: ${email}</h3>
                        <br />
                        <h3>Phone: ${phone}</h3>
                    `,
                },
            ],
        });

        console.log("Email sent successfully:", request.body);
        return res.status(200).json({ submitted: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ submitted: false, error: "Failed to send email" });
    }
}

