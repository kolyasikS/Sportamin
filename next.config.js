/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  reactStrictMode: true,
  publicRuntimeConfig: {
    API_URL: process.env.API_URL
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.ts$/,
      loader: 'ts-loader',
      options: {allowTsInNodeModules: true}
    });
    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      tls: false,
      child_process: false,
    };
    return config;
  }
}

module.exports = nextConfig;
