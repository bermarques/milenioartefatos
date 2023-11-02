/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { esmExternals: false },
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "milenioartefatos.com.br",
        port: "",
        pathname: "/api/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
