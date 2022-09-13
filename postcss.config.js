const tailwind = require("tailwindcss");

module.exports = ({ env }) => {
  const plugins = [
    tailwind("./tailwind.config.js"),
    require('autoprefixer'),
    require("postcss-import"),
  ];

  // Only run cssnano in production
  if (env === "production") {
    plugins.push(
      require("cssnano")({ preset: "default" })
    );
  }

  return { plugins };
};
