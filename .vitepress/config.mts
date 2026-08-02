import { defineConfig } from 'vitepress'
import { branding } from './branding'
import { markdown } from './markdown'
import { themeConfig } from './Chinese'
import { nav, sidebar } from './sidebar'

export default defineConfig({
  title: 'OsEasy-ToolKit',
  description: '噢易多媒体教学系统学生端工具箱',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,

  markdown,

  themeConfig: {
    ...branding,
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
