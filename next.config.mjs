/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        FIREBASE_API_KEY: "AIzaSyBfVulBiNjXCvhQB77n0rPmQL6QSUgwYPA",
        FIREBAASE_AUTH_DOMAIN: "greencountry-fa990.firebaseapp.com",
        FIREBASE_PROJECT_ID: "greencountry-fa990",
        FIREBASE_STORAGE_BUCKET: "greencountry-fa990.appspot.com",
        FIREBASE_MESSAGING_SENDER_ID: "539308240186",
        FIREBASE_APP_ID: "1:539308240186:web:a0700e914abd4204f07403",
        MJ_APIKEY_PRIVATE: "321759788897b982681b7978dac25d42",
        MJ_APIKEY_PUBLIC: "9afa9c838c40f9a83b6d7bc96821b5e9",
    },

    images: {
        domains: ["firebasestorage.googleapis.com"],
    },
};

export default nextConfig;
