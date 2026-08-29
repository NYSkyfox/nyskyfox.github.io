/* .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import type { Router } from 'vitepress'
import './style/index.css'
import ArticleMetadata from './components/ArticleMetadata.vue'
import MyLayout from './components/MyLayout.vue'

import mediumZoom from 'medium-zoom'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

let mermaidInitialized = false
async function renderMermaid() {
  const els = document.querySelectorAll('pre.mermaid')
  if (!els.length) return
  const mermaid = (await import('mermaid')).default
  if (!mermaidInitialized) {
    mermaid.initialize({ startOnLoad: false, theme: 'default', securityLevel: 'loose' })
    mermaidInitialized = true
  }
  for (const el of Array.from(els)) {
    try {
      const code = el.textContent || ''
      const id = 'mmd-' + Math.random().toString(36).slice(2, 8)
      const { svg } = await mermaid.render(id, code)
      el.outerHTML = svg
    } catch (e: any) {
      el.textContent = 'Mermaid 渲染失败: ' + (e && e.message ? e.message : e)
    }
  }
}

export default {
  extends: DefaultTheme,
  Layout: MyLayout,

  enhanceApp({ app, router }: { app: any; router: Router }) {
    app.component('ArticleMetadata', ArticleMetadata)
  },

  setup() {
    const route = useRoute()
    const initZoom = () => {
      mediumZoom('.main img', { background: 'rgba(0, 0, 0, 0.7)' })
    }
    onMounted(() => {
      initZoom()
      nextTick(renderMermaid)
    })
    watch(
      () => route.path,
      () => nextTick(() => {
        initZoom()
        renderMermaid()
      })
    )
  },
}
