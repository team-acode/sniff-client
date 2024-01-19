/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['acode-bucket-fragrance.s3.ap-northeast-2.amazonaws.com','acode-bucket-review.s3.ap-northeast-2.amazonaws.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
