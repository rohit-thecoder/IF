import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // Static site generation ke liye
  trailingSlash: true,   // Ye /about ko /about/index.html bana dega
  images: {
    unoptimized: true,   // Hostinger shared hosting pe image optimization issue karta hai
  },
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
