import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site; route-level caching and Activity-preserved routes are
  // switched off so AnimatePresence page transitions behave predictably.
  cacheComponents: false,
  partialPrefetching: false,
};

export default nextConfig;
