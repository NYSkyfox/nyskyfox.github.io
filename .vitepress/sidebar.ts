import type { DefaultTheme } from 'vitepress'

/** 导航 */
export const nav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  {
    text: '指南',
    link: '/guide/',
    activeMatch: '^/guide/'
  },
  {
    text: '开发',
    link: '/development/',
    activeMatch: '^/development/'
  }
]

/** 侧边栏 */
export const sidebar: DefaultTheme.Sidebar = {
  '/guide/': [
    {
      text: '指南',
      collapsed: false,
      collapsible: true,
      items: [
        { text: '简介', link: '/guide/intro' },
        { text: '网络解锁教程', link: '/guide/unlock_network' },
        { text: '挂起学生端教程', link: '/guide/suspend_student' }
      ]
    }
  ],
  '/development/': [
    {
      text: '开发',
      collapsed: false,
      collapsible: true,
      items: [
        { text: '快速上手', link: '/development/start' }
      ]
    }
  ]
}
