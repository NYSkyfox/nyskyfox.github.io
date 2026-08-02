import type { DefaultTheme } from 'vitepress'

/** 汉化文本 */
export const themeConfig: DefaultTheme.Config = {
  search: {
    provider: 'local',
    options: {
      translations: {
        button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
        modal: {
          noResultsText: '没有找到相关结果',
          resetButtonTitle: '清除',
          backButtonTitle: '返回',
          footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          displayDetails: '共 {0} 条结果'
        }
      }
    }
  },
  darkModeSwitchLabel: '切换暗色模式',
  lightModeSwitchTitle: '切换到浅色模式',
  darkModeSwitchTitle: '切换到深色模式',
  sidebarMenuLabel: '菜单',
  returnToTopLabel: '返回顶部',
  outline: { level: [2, 3], label: '本页目录' },
  docFooter: { prev: '上一页', next: '下一页' },
  lastUpdated: { text: '最后更新' },
  notFound: {
    title: '页面不存在',
    quote: '你来到了未知的领域……要不返回首页看看？',
    linkLabel: '返回首页',
    linkText: '返回首页'
  }
}
