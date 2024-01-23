/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        FIREBASE_API_KEY: "AIzaSyAvui84aUVAX2T5V_0fIPeIInYrlAXJ3eM",
        FIREBASE_AUTH_DOMAIN: "green-country-be50d.firebaseapp.com",
        FIREBASE_PROJECT_ID: "green-country-be50d",
        FIREBASE_STORAGE_BUCKET: "green-country-be50d.appspot.com",
        FIREBASE_MESSAGING_SENDER_ID: "932085409483",
        FIREBASE_APP_ID: "1:932085409483:web:df55637151faec49a15d4e",
        FIREBASE_MEASUREMENT_ID: "G-NQ9M4QC8MW",
    },

    images: {
        domains: ["firebasestorage.googleapis.com"],
    },
};

export default nextConfig;
