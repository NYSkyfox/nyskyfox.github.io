import type { MarkdownOptions } from 'vitepress'

/** Markdown 渲染配置 */
export const markdown: MarkdownOptions = {
  lineNumbers: true,
  config: (md) => {
    // mermaid: 将 mermaid 代码块转换为 <pre class="mermaid">
    const defaultFence = md.renderer.rules.fence
    md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
      const token = tokens[idx]
      const info = token.info.trim().split(/\s+/)[0]
      if (info === 'mermaid') {
        return `<pre class="mermaid">${token.content.trim()}</pre>`
      }
      return defaultFence ? defaultFence(tokens, idx, options, env, slf) : ''
    }
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
}
