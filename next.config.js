/** @type {import('next').NextConfig} */
// module.exports = {
//   // reactStrictMode: true,
//   // images: {
//   //   remotePatterns: [
//   //     {
//   //       protocol: 'https',
//   //       hostname: 'user-images.githubusercontent.com',
//   //       pathname: '/**',
//   //     },
//   //     {
//   //       protocol: 'https',
//   //       hostname: 'www.getlifegard.com',
//   //       pathname: '/**',
//   //     },
//   //     {
//   //       protocol: 'https',
//   //       hostname: 'github-production-user-asset-6210df.s3.amazonaws.com',
//   //       pathname: '/**',
//   //     },
//   //     {
//   //       protocol: 'https',
//   //       hostname: 'i.postimg.cc',
//   //       pathname: '/**',
//   //     },
//   //     {
//   //       protocol: 'https',
//   //       hostname: 'buttons-animations-kv.vercel.app',
//   //       pathname: '/**',
//   //     },
//   //   ],
//   // },
//   images: {
//     unoptimized: true, // Disable Next.js image optimization for static export
//   },
//   output: 'export',
//   // output: 'standalone',
// };

module.exports = {
  output: 'export', // Enables static export
  basePath: '', // Set to the subdirectory if your project is in one (e.g., '/my-app')
  assetPrefix: '', // If not deployed in a subdirectory, keep this empty
  images: {
    unoptimized: true, // For exporting images without Next.js optimization
  },
};
