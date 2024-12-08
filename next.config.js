// next.config.js
module.exports = {
    reactStrictMode: true,
    async redirects() {
      return [
        {
          source: '/:subdomain',
          destination: '/[subdomain]',
          permanent: true,
        },
      ];
    },
  };