// next.config.js
const withSass = require('@zeit/next-sass');
module.exports = withSass({
  /* config options here */
  webpack(config, options) {
    return config;
  },
});
