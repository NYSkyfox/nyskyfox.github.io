import type { DefaultTheme } from 'vitepress'

/** 站点品牌配置：logo、社交链接、页脚 */
export const branding: Partial<DefaultTheme.Config> = {
  logo: '/logo.svg',
  socialLinks: [
    { icon: 'github', link: 'https://github.com/NYSkyfox/OsEasy-ToolKit' }
  ],
  footer: {
    message: '基于 VitePress 构建',
    copyright: 'Copyright © 2025 OsEasy-ToolKit'
  }
}
