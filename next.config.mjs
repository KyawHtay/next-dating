/** @type {import('next').NextConfig} */
const nextConfig = {

    reactStrictMode: true,
    distDir: 'build',
    output: 'standalone',
    images: {
        domains: ['res.cloudinary.com'],
      },
};

export default nextConfig;
