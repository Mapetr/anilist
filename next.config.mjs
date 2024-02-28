import {withSentryConfig} from '@sentry/nextjs';
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
    openAnalyzer: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
};

export default withSentryConfig(bundleAnalyzer(nextConfig), {
// For all available options, see:
// https://github.com/getsentry/sentry-webpack-plugin#options

// Suppresses source map uploading logs during build
    silent: true,
    org: "anilist-34",
    project: "website",
}, {
// For all available options, see:
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

// Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

// Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: false,

// Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: "/monitoring",

// Hides source maps from generated client bundles
    hideSourceMaps: true,

// Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

// Enables automatic instrumentation of Vercel Cron Monitors.
// See the following for more information:
// https://docs.sentry.io/product/crons/
// https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,
});

// export default nextConfig;
