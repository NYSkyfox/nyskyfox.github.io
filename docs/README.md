# 余阿强 | 小强 - VitePress 网站

> "有种生物叫小强，Ta令人难以对付。"

这是一个基于 VitePress 构建的个人网站，主题色为 **#16c07c**，默认使用暗色模式。

## 项目特点

- 🎨 **自定义主题** - 主色调 #16c07c，暗色模式
- 🚀 **现代化技术栈** - 基于 VitePress 和 Vue 3
- 📱 **响应式设计** - 适配各种设备屏幕
- 🌐 **GitHub Pages 支持** - 一键部署到 GitHub Pages
- 📝 **Markdown 驱动** - 使用 Markdown 编写内容

## 项目结构

```
docs/
├── .vitepress/          # VitePress 配置
│   ├── config.js       # 配置文件
│   └── theme/          # 自定义主题
│       ├── index.js    # 主题入口
│       └── style.css   # 自定义样式
├── index.md            # 首页
├── about.md            # 关于页面
├── package.json        # 项目依赖
└── README.md           # 项目说明
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run docs:dev
```

### 构建生产版本

```bash
npm run docs:build
```

### 预览构建结果

```bash
npm run docs:preview
```

## 部署到 GitHub Pages

1. 在 GitHub 上创建新的仓库
2. 将代码推送到仓库
3. 在仓库设置中启用 GitHub Pages
4. 选择 `docs/.vitepress/dist` 作为源目录

或者使用 GitHub Actions 自动部署：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 16
      - run: npm ci
      - run: npm run docs:build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

## 自定义配置

### 修改主题色

在 `docs/.vitepress/theme/style.css` 中修改 CSS 变量：

```css
:root {
  --vp-c-brand: #16c07c;
  --vp-c-brand-light: #2cd894;
  --vp-c-brand-lighter: #4ae8a8;
  --vp-c-brand-dark: #0fa869;
  --vp-c-brand-darker: #0c8c56;
}
```

### 修改网站信息

在 `docs/.vitepress/config.js` 中修改：

```javascript
export default {
  title: '余阿强 | 小强',
  description: '有种生物叫小强，Ta令人难以对付。',
  // ...
}
```

## 小强的哲学

1. **坚韧** - 面对困难不退缩
2. **适应** - 随环境变化而进化
3. **生存** - 在任何条件下都能找到出路
4. **成长** - 不断学习，持续进步

## 许可证

MIT License

## 联系

- GitHub: [https://github.com](https://github.com)
- Email: example@example.com

---

**生命不息，奋斗不止。**