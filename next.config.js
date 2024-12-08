module.exports = {
    async redirects() {
      return [
        {
          source: '/tom',
          destination: 'https://tom.blog.rinuo.com',
          permanent: true, // 如果需要永久重定向，设置为 true
        },
      ]
    },
  }