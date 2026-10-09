# 个人学术主页

基于 [Astro](https://astro.build/) 的单作者学术主页。全部内容存放在类型化的数据文件和 Markdown 里——没有 CMS，没有数据库，每个页面都是纯静态的。

[English](README.md)

## 特性

- **Home / Publications / Blog**——所有板块完全由数据文件驱动
- **明暗双主题**——跟随系统、记住选择，切换时全页交叉渐变
- **论文卡片**——作者高亮、奖项徽章、teaser 图点击放大
- **Markdown 博客**——分类（Thoughts / Travel / Notes）与草稿支持
- **访客地图**——可选的国家维度访客统计；未配置时自动隐藏

## 快速开始

```bash
npm install
npm run dev      # 本地预览
npm run build    # 产出静态站点到 dist/
npm run preview  # 本地预览生产构建
```

需要 Node.js ≥ 22.12。

## 项目结构

```text
src/
├── data/            # 全部内容：站点信息、News、论文、经历
├── content/writing/ # 博客文章（Markdown）
├── layouts/         # 共享页面骨架
├── components/      # 可复用的界面组件
└── styles/          # 全局样式
public/              # 头像、favicon、OG 图、品牌 logo
scripts/             # 本地维护脚本
```

## 更新内容

不需要碰组件——所有内容都在 `src/data/` 或 `src/content/writing/` 里改：

| 内容 | 文件 | 说明 |
| --- | --- | --- |
| 简介、联系方式、页脚日期 | `src/data/site.ts` | `intro` 支持内联 `<strong>` / `<em>` / `<a>` |
| News | `src/data/news.ts` | 最新在前，日期 `YYYY.MM`；首页显示前三条 |
| Publications | `src/data/publications.ts` | 约定见下 |
| Experience | `src/data/experience.ts` | Logo 放 `public/brands/` |
| 博客文章 | `src/content/writing/*.md` | 纯 Markdown |

约定：

- **论文**——`authors` 用精确姓名字符串，与你一致的条目自动高亮，名字后加 `†` 标记通讯作者。常用链接标签：`Paper` / `Project` / `Code` / `arXiv` / `BibTeX`。没有链接就留 `links: []`，别放占位地址；已接收未发表用 `note: "Accepted"` 标注。
- **News**——每条一句短句，只记里程碑（接收、获奖、入职）。
- **博客 frontmatter**——`title`、`date`（`YYYY-MM-DD`）、`category`（`Thoughts` / `Travel` / `Notes`）、可选 `description`；`draft: true` 不发布。
- **每次更新后**——顺手更新 `src/data/site.ts` 的 `SITE.updated`（`Oct. 2026` 格式），并确认 `npm run build` 通过。

## 部署

`npm run build` 产出纯静态 `dist/`。仓库自带 GitHub Actions 工作流（`.github/workflows/deploy.yml`），推送 `main` 分支即自动构建并发布到 GitHub Pages；产物也可直接部署到 Vercel、Netlify 或任意静态托管。
