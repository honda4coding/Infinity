const {
  withHydrationOverlay,
} = require("@builder.io/react-hydration-overlay/next");

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports =
  process.env.NODE_ENV === "development"
    ? withHydrationOverlay({
        appRootSelector: "main",
      })(nextConfig)
    : nextConfig;

