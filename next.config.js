/** @type {import('next').NextConfig} */
// export default nextConfig;
const nextConfig = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      },
      // {
      //   source: "/manage/:path*",
      //   headers: [
      //     // {
      //     //   key: 'X-Frame-Options',
      //     //   value: 'ALLOW-FROM https://bean-mind-demo-qclqcs135-chanhxaosas-projects.vercel.app'
      //     // },
      //     {
      //       key: "Content-Security-Policy",
      //       value: "frame-ancestors https://bean-mind-demo.vercel.app"
      //     }
      //   ]
      // }
    ];
  },
  images: {
    remotePatterns: [
      {
        hostname: "*",
      }
    ]
  }
};

module.exports = nextConfig;