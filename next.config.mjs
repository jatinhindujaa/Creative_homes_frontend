/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,  // disable strict mode to fix findDOMNode usage temporarily
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
