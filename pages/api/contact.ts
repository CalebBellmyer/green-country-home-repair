import type { NextApiRequest, NextApiResponse } from "next";
import Mailjet from "node-mailjet";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("Data", req.body);

    const { name, email, message, phone } = req.body;

    const mailjet = Mailjet.apiConnect(
        process.env.MJ_APIKEY_PUBLIC || "",
        process.env.MJ_APIKEY_PRIVATE || ""
    );

    const request = mailjet.post("send", { version: "v3.1" }).request({
        Messages: [
            {
                From: {
                    Email: `${email}`,
                    Name: `${name}`,
                },
                To: [
                    {
                        Email: "johnnybellmyer@hotmail.com",
                        Name: `${name}`,
                    },
                ],
                Subject: "Request Service",
                TextPart: `${message} 
                    my email adress is ${email}
                    `,
                HTMLPart: `<p>${message}</p><br /><h3>My name is: ${name}</h3><h3>My email adress: ${email}</h3><br /><h3>My phone number: ${phone}`,
            },
        ],
    });

    request
        .then((result) => {
            console.log(result.body);
        })
        .catch((err) => {
            console.log(err.statusCode);
        });

    res.status(200).json({ submitted: "true" });
}
