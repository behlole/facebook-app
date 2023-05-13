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
}

module.exports = nextConfig
