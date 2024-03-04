/** @type {import('next').NextConfig} */

// const { withSentryConfig } = require('@sentry/nextjs');

// const SentryWebpackPluginOptions = {
//   org: 'wowfulfillment',
//   project: 'inkpod-web',
//   authToken: process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN,
//   silent: true,
// };

const moduleExports = {
  i18n: {
    localeDetection: false,
    // These are all the locales you want to support in
    // your application
    locales: ['en-US', 'zh-CN'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-US',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    // domains: [
    //   {
    //     domain: 'example.com',
    //     defaultLocale: 'en-US',
    //   },
    //   {
    //     domain: 'example.cn',
    //     defaultLocale: 'zh-CN',
    //     // an optional http field can also be used to test
    //     // locale domains locally with http instead of https
    //     http: true,
    //   },
    // ],
  },
};

module.exports = moduleExports;
// module.exports = withSentryConfig(
//   {
//     ...moduleExports,
//     sentry: {
//       widenClientFileUpload: true,
//       hideSourceMaps: true,
//     },
//   },
//   {
//     ...SentryWebpackPluginOptions,
//     ignore: [],
//   },
// );
//     : moduleExports;
//   process.env === 'production'
//     ? withSentryConfig(moduleExports, SentryWebpackPluginOptions)
//     : moduleExports;
