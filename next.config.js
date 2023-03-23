/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.ts$/,
      loader: 'ts-loader',
      options: {allowTsInNodeModules: true}
    });
    return config;
  }
}

module.exports = nextConfig;
