/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/new-tab/:path*",
        headers: [
          {
            key: "cache-control",
            value: "public, max-age=21600, revalidate=21600",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
