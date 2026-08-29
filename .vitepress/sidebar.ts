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
    text: '教程',
    link: '/tutorial/',
    activeMatch: '^/tutorial/'
  },
  {
    text: '开发',
    link: '/develop/',
    activeMatch: '^/develop/'
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
        { text: '概览页', link: '/guide/overview' },
        { text: '进程管理', link: '/guide/process' },
        { text: '服务管理', link: '/guide/service' },
        { text: '解锁管理', link: '/guide/unlock' },
        { text: '广播管理', link: '/guide/broadcast' },
        { text: 'DLL 工具', link: '/guide/dll' },
        { text: '文件管理', link: '/guide/backup' },
        { text: '设置', link: '/guide/settings' },
        { text: '关于', link: '/guide/about' },
        { text: '高级', link: '/guide/advanced' }
      ]
    }
  ],
  '/tutorial/': [
    {
      text: '教程',
      collapsed: false,
      collapsible: true,
      items: [
        { text: '网络解锁教程', link: '/tutorial/unlock_network' },
        { text: '挂起学生端教程', link: '/tutorial/suspend_student' }
      ]
    }
  ],
  '/develop/': [
    {
      text: '开发',
      collapsed: false,
      collapsible: true,
      items: [
        { text: '快速上手', link: '/develop/start' },
        { text: '静态分析报告', link: '/develop/report' },
        { text: '完整运行流程图', link: '/develop/Os-Easy 完整流程图' }
      ]
    }
  ]
}
