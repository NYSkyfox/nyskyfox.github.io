export default {
  title: '余阿强 | 小强',
  description: '有种生物叫小强，Ta令人难以对付。',
  
  // 重要：GitHub Pages 部署配置
  // 如果部署到 https://<USERNAME>.github.io/<REPO>/
  // 需要设置为 '/<REPO>/'
  // 如果部署到自定义域名或根目录，设置为 '/'
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  
  // 确保正确的头部配置
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#16c07c' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]
  ],
  
  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' },
      { text: 'GitHub', link: 'https://github.com' }
    ],
    
    sidebar: [
      {
        text: '介绍',
        items: [
          { text: '首页', link: '/' },
          { text: '关于小强', link: '/about' }
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],
    
    footer: {
      message: '有种生物叫小强，Ta令人难以对付。',
      copyright: 'Copyright © 2024 余阿强'
    },
    
    darkMode: true,
    
    // 自定义主题色
    appearance: 'dark',
    
    // 搜索配置
    search: {
      provider: 'local'
    }
  },
  
  markdown: {
    theme: 'dark-plus',
    lineNumbers: true
  },
  
  // 构建配置
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  }
}