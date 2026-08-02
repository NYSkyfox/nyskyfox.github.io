/* .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import type { Router } from 'vitepress'
import './style/index.css'
import ArticleMetadata from './components/ArticleMetadata.vue'
import MyLayout from './components/MyLayout.vue'

import mediumZoom from 'medium-zoom'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

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
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  },
}