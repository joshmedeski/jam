module.exports = {
  reactStrictMode: true,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.mdx$/,
      use: "raw-loader",
    });
    return config;
  },
};
