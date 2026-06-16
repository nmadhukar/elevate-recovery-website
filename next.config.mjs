/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a self-contained build (.next/standalone) for a small Docker image.
  output: 'standalone',
  // Keep nodemailer out of the bundle; load it as a real Node module at runtime.
  serverExternalPackages: ['nodemailer'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
