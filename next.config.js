const withPlugins = require("next-compose-plugins");

// // const optimizedImages = require("next-optimized-images");
const path = require("path");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const plugins = [
  [
    withBundleAnalyzer,
    {
      poweredByHeader: false,
      trailingSlash: true,
      basePath: "",
      reactStrictMode: true,
    },
  ],
  // [
  //   // optimizedImages,
  //   {
  //     // these are the default values so you don't have to provide them
  //     // if they are good enough for your use-case.
  //     // but you can overwrite them here with any valid value you want.
  //     inlineImageLimit: 8192,
  //     // densities: [1, 2],
  //     // breakpoints: [],
  //     imagesFolder: "images",
  //     imagesName: "[name]-[hash].[ext]",
  //     handleImages: ["jpg", "jpeg", "png", "svg", "webp", "gif"],
  //     removeOriginalExtension: false,
  //     optimizeImages: true,
  //     optimizeImagesInDev: true,
  //     mozjpeg: {
  //       quality: 80,
  //     },
  //     optipng: {
  //       optimizationLevel: 3,
  //     },
  //     pngquant: false,
  //     gifsicle: {
  //       interlaced: true,
  //       optimizationLevel: 3,
  //     },
  //     svgo: {
  //       // enable/disable svgo plugins here
  //     },
  //     webp: {
  //       preset: "default",
  //       quality: 75,
  //     },
  //     responsive: {
  //       adapter: require("responsive-loader/sharp"),
  //       sizes: [300, 320, 640, 960, 1200, 1800, 2400],
  //       placeholder: true,
  //       placeholderSize: 40,
  //     },
  //   },
  // ],
];

const nextConfig = {
  // i18n,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  experimental: {
    appDir: true,
    fontLoaders: [
      // {
      //   loader: "@next/font/google",
      //   options: { weight: ["300", "400", "500", "700"] },
      // },
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  // images: {
  //   loader: "custom",
  //   disableStaticImages: true,
  // },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    // unoptimized: true,
    // loader: "custom",
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "burnstoves.com",
      },
      {
        protocol: "https",
        hostname: "burnstoves-assets.nyc3.cdn.digitaloceanspaces.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

module.exports = withPlugins(plugins, nextConfig);
