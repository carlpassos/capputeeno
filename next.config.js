module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ['storage.googleapis.com'],
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}
