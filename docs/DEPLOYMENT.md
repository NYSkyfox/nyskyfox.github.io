# GitHub Pages 部署指南

## 问题描述
您遇到的问题是：部署到 GitHub Pages 后，网页内容是 index.html 和 README.md 交织一起（网页重叠显示）。

这是因为 GitHub Pages 默认会显示仓库中的 README.md 文件，而我们的 VitePress 网站应该显示的是通过 VitePress 构建的 index.html 文件。

## 解决方案

我已经为您修复了这个问题，主要做了以下改进：

### 1. 添加了 `.nojekyll` 文件
- 在根目录添加了 `.nojekyll` 文件
- 在构建过程中会在 `dist` 目录创建 `.nojekyll` 文件
- 这个文件告诉 GitHub Pages 不要使用 Jekyll 处理网站

### 2. 更新了 GitHub Actions 工作流
- 改进了部署配置
- 确保在构建后创建 `.nojekyll` 文件
- 使用最新的 GitHub Pages 部署动作

### 3. 更新了 VitePress 配置
- 添加了正确的头部配置
- 设置了 logo 和主题色
- 配置了搜索功能
- 优化了构建配置

## 部署步骤

### 方法一：使用 GitHub Actions（推荐）

1. **创建 GitHub 仓库**
   - 在 GitHub 上创建一个新的仓库
   - 仓库名可以是 `username.github.io`（个人页面）或任意名称

2. **推送代码到仓库**
   ```bash
   # 初始化 Git 仓库
   cd docs
   git init
   git add .
   git commit -m "Initial commit"
   
   # 添加远程仓库
   git remote add origin https://github.com/username/repository-name.git
   
   # 推送到 GitHub
   git branch -M main
   git push -u origin main
   ```

3. **启用 GitHub Pages**
   - 进入仓库的 **Settings** → **Pages**
   - **Source** 选择 **GitHub Actions**
   - 保存设置

4. **等待自动部署**
   - GitHub Actions 会自动运行部署工作流
   - 部署完成后，可以在 Actions 标签页查看状态
   - 访问 `https://username.github.io/repository-name/` 查看网站

### 方法二：手动部署

1. **本地构建**
   ```bash
   cd docs
   npm install
   npm run docs:build
   ```

2. **创建部署分支**
   ```bash
   # 切换到构建目录
   cd .vitepress/dist
   
   # 初始化 Git 仓库
   git init
   git add .
   git commit -m "Deploy to GitHub Pages"
   
   # 推送到 gh-pages 分支
   git push -f https://github.com/username/repository-name.git main:gh-pages
   ```

3. **配置 GitHub Pages**
   - 进入仓库的 **Settings** → **Pages**
   - **Source** 选择 **gh-pages** 分支
   - 保存设置

## 重要配置说明

### Base URL 配置
在 `.vitepress/config.js` 中：
```javascript
base: process.env.NODE_ENV === 'production' ? '/' : '/',
```

- 如果部署到 `https://username.github.io/`（用户页面），设置为 `'/'`
- 如果部署到 `https://username.github.io/repository-name/`（项目页面），设置为 `'/repository-name/'`

### 自定义域名
如果您使用自定义域名：

1. 在 `docs/.vitepress/config.js` 中设置正确的 `base`：
   ```javascript
   base: '/',
   ```

2. 在仓库的 **Settings** → **Pages** 中添加自定义域名

3. 在域名服务商处配置 CNAME 记录

## 故障排除

### 问题1：页面显示空白
- 检查控制台是否有 JavaScript 错误
- 确保 `base` 配置正确
- 检查 `.nojekyll` 文件是否存在

### 问题2：样式丢失
- 检查资源路径是否正确
- 确保 CSS 文件被正确加载
- 检查控制台的网络请求

### 问题3：404 错误
- 检查 GitHub Pages 是否已启用
- 确认部署分支正确
- 等待几分钟让 DNS 生效

## 本地测试
在部署前，建议先在本地测试：
```bash
cd docs
npm run docs:dev  # 开发模式
npm run docs:build  # 构建测试
npm run docs:preview  # 预览构建结果
```

## 支持
如果遇到问题，请检查：
1. GitHub Actions 日志
2. 浏览器控制台错误
3. 网络请求状态

或者参考：
- [VitePress 部署指南](https://vitepress.dev/guide/deploy)
- [GitHub Pages 文档](https://docs.github.com/pages)