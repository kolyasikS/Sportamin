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
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
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
