/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'blob.v0.dev',
      },
    ],
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // Add a rule to handle .tsx files as images for WhatsAppIcon
    config.module.rules.push({
      test: /\.tsx$/,
      issuer: /\.(jsx?|tsx?)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
      include: /components\/whatsapp-icon\.tsx$/, // Only apply to this specific file
    });

    return config;
  },
};

export default nextConfig;
