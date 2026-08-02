import type { MarkdownOptions } from 'vitepress'

/** Markdown 渲染配置 */
export const markdown: MarkdownOptions = {
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
}
