/** @type {import('next').NextConfig} */
const Dotenv = require('dotenv-webpack');

const nextConfig = {
    images: {
        domains: [
            'links.papareact.com',
            'platform-lookaside.fbsbx.com',
            'firebasestorage.googleapis.com',
            'avatars.githubusercontent.com'
        ],
    },
    webpack: (config) => {
        config.plugins.push(new Dotenv());
        return config;
    },
    secret: "a3b8d1e8f5c2a9e4b1c6d9e2f7c4a1b8d3e6f9c2a5b8d1e4a7b2c5d8e1f4a9",
}

module.exports = nextConfig
