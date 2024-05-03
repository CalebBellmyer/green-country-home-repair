/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        FIREBAASE_AUTH_DOMAIN: process.env.FIREBAASE_AUTH_DOMAIN,
        FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
        FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
        FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
        FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
        MJ_APIKEY_PRIVATE: process.env.MJ_APIKEY_PRIVATE,
        MJ_APIKEY_PUBLIC: process.env.MJ_APIKEY_PUBLIC,
    },

    images: {
        remotePatterns: [
            {
                hostname: "firebasestorage.googleapis.com",
            },
        ],
    },
};

export default nextConfig;
