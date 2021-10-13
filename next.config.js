module.exports = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config) => {
    config.resolve.preferRelative = false;
    return config;
  },
}
