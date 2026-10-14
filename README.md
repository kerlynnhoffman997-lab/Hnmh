# 赶一场中原庙会 · Hnmh

河南庙会文化交互网站，覆盖 18 个地区、19 场庙会。从省域地图进入庙会全景，再沿画面热点查看活动、人物和器物的故事。支持电脑、手机和横屏。

作品网址：<https://kerlynnhoffman997-lab.github.io/Hnmh/>

## 文件与运行

本仓库是可直接部署的静态网站，入口为 `index.html`，无需安装依赖或后端服务。HTML、JavaScript、CSS 及资源均使用相对路径，适配 GitHub Pages 的项目目录。

本地预览可在仓库目录运行 `python -m http.server 8000`，然后访问 `http://localhost:8000/`。网页需通过 HTTP 服务运行，不使用 `file://` 打开。

## 发布

GitHub Pages 发布源为 `main` 分支的根目录。`.nojekyll` 保证现有静态资源直接发布。修改后推送至 `main`，Pages 会自动更新。

首页的作品二维码文件为 `assets/review-qr.svg` 与 `assets/review-qr.png`。如更换网址，需要同时更新二维码。

## 画面说明

站内图像为 AI 概念插画；部分建筑位置、摊位邻接和人物站位经过构图补全，不代表实测地图或同一时刻的现场。
