/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        FIREBASE_API_KEY: "AIzaSyBfVulBiNjXCvhQB77n0rPmQL6QSUgwYPA",
        FIREBAASE_AUTH_DOMAIN: "greencountry-fa990.firebaseapp.com",
        FIREBASE_PROJECT_ID: "greencountry-fa990",
        FIREBASE_STORAGE_BUCKET: "greencountry-fa990.appspot.com",
        FIREBASE_MESSAGING_SENDER_ID: "539308240186",
        FIREBASE_APP_ID: "1:539308240186:web:a0700e914abd4204f07403",
    },

    images: {
        domains: ["firebasestorage.googleapis.com"],
    },
};

export default nextConfig;
