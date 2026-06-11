/** @type {import('next').NextConfig} */

// NOTE: basePath is temporary — serving at lakshay-bit-png.github.io/portfolio/
// for the is-a.dev preview. Once buildwithlakshay.is-a.dev is granted, remove
// basePath and restore public/CNAME so it serves at the custom domain root.
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: "/portfolio",
  images: { unoptimized: true },
};

export default nextConfig;
