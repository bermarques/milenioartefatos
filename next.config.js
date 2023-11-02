/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { esmExternals: false },
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uploadthing.com",
        port: "",
        pathname: "/f/**",
      },
    ],
  },
};

module.exports = nextConfig;
