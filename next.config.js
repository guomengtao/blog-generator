// next.config.js
module.exports = {
    async rewrites() {
      return [
        {
          source: '/:subdomain',
          destination: '/subdomain', // 将所有子域名路由到 /subdomain 页面
        },
      ]
    },
  }