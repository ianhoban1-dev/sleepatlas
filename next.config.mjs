/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Every internal link, the sitemap and the JSON-LD use trailing-slash URLs.
  // Serve those as the real pages and 308-redirect /path to /path/.
  trailingSlash: true,
  poweredByHeader: false,
};

export default nextConfig;
