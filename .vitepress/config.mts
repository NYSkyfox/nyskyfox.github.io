import { defineConfig } from 'vitepress'
import { themeConfig } from './Chinese'
import { nav, sidebar } from './sidebar'

export default defineConfig({
  title: 'OsEasy-ToolKit',
  description: '噢易多媒体教学系统学生端工具箱',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,

  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options)
        if (tokens[idx].tag === 'h1') {
          let mtime = ''
          try {
            const fs = require('fs')
            const stat = fs.statSync(env.path)
            mtime = stat.mtime.toISOString()
          } catch (_) {}
          htmlResult += `<ArticleMetadata file-time="${mtime}" />`
        }
        return htmlResult
      }
      const defaultImageRenderer = md.renderer.rules.image
      md.renderer.rules.image = (tokens, idx, options, env, slf) => {
        const token = tokens[idx]
        token.attrSet('loading', 'lazy')
        return defaultImageRenderer!(tokens, idx, options, env, slf)
      }
    }
  },

  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/NYskyfox' }
    ],
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2025 OsEasy-ToolKit'
    },
    ...themeConfig,
    nav,
    sidebar
  },

  vite: {
    server: {
      watch: {
        ignored: [
          '**/.pub-cache/**',
          '**/node_modules/**',
          '**/.git/**',
          '**/repos/**',
          '**/flutter/**'
        ]
      }
    }
  }
})
