import type { NextConfig } from "next";
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

// ใช้ .then() แทนการใช้ await ตรงๆ ที่ Top-level
if (process.env.NODE_ENV === 'development') {
  setupDevPlatform().catch(err => {
    console.error('Error setting up Cloudflare Dev Platform:', err);
  });
}

/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
