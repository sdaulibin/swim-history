# 泳史 · 游泳项目历史与世界纪录

一个中文的游泳史料站：收录各项目的历史沿革、世界纪录演进（含阶梯图、完整纪录表与项目历史文章），以及**历届大赛冠军榜**——奥运会、世锦赛、泛太平洋锦标赛、欧锦赛、亚运会五大系列。

技术栈：**Next.js（App Router + TypeScript）+ Tailwind CSS v4**，纯静态导出（`output: 'export'`），可部署到任意静态托管。

## 快速开始

```bash
npm install
npm run dev      # 开发预览 http://localhost:3000
npm run build    # 静态导出，产物在 out/
```

## 目录结构

```
src/
├── app/                     # 页面
│   ├── page.tsx             # 首页（焦点纪录、按泳姿浏览、最近刷新）
│   ├── events/page.tsx      # 项目列表（客户端筛选）
│   ├── events/[slug]/       # 项目详情（WR卡、演进图、纪录表、历史文章）
│   └── about/page.tsx       # 关于 / 数据来源
├── components/
│   ├── ProgressionChart.tsx # 纪录演进 SVG 阶梯图（客户端，悬停提示）
│   ├── ChampionsExplorer.tsx# 历届大赛冠军榜（客户端，按赛事切换）
│   ├── RecordsTable.tsx     # 完整纪录表
│   ├── EventsExplorer.tsx   # 项目筛选器（客户端）
│   └── ...
├── data/
│   ├── events/              # ★ 每个项目一个数据文件（progression + history）
│   ├── champions/           # ★ 每个项目一个冠军数据文件（五大系列）
│   ├── names.ts             # 运动员中文译名表
│   └── index.ts             # 项目注册表 + 站点配置
└── lib/
    ├── types.ts             # 数据模型（SwimEvent / RecordEntry / ChampionEntry）
    └── display.ts           # 成绩解析、国家、赛事系列等展示工具
```

## 如何新增一个项目

1. 复制 `src/data/events/mens-100m-freestyle.ts` 为新文件（如 `mens-200m-freestyle.ts`）。
2. 按样板填写：
   - 元信息：`slug / stroke / distance / gender / name / summary / dataAsOf`
   - `progression`：按时间升序的纪录数组。字段说明见 `src/lib/types.ts`：
     - `time` 保留来源原文写法（如 `58.6` 手计时、`1:04.13`）；
     - `flags`：`h` 预赛 / `sf` 半决赛 / `r` 接力第一棒 / `tt` 计时赛 / `yd` 码制泳池 / `eq` 平纪录；
     - `ratified: false` 表示未被承认的纪录（表中标「未获批准」，不进图表）；
     - `meet / place` 填中文译名。
   - `history`：项目历史文章（分节，每节 2 段左右，基于可核实事实）。
   - `sources`：数据来源链接。
3. 在 `src/data/index.ts` 导入并加入 `events` 数组。
4. `npm run build` —— 新页面自动生成（详情页图表标注可在 `src/app/events/[slug]/page.tsx` 的 `CHART_MARKS` 中按 slug 添加）。
5. 新运动员的中文译名补进 `src/data/names.ts`。

### 新增历届大赛冠军数据

冠军数据与纪录演进分文件存放（`src/data/champions/<slug>.ts`），`ChampionEntry` 字段见 `src/lib/types.ts`：
`series`（`olympics | worlds | panpacific | euros | asiangames`）、`year / city / champion / country / time / wr / or / note`。

**录入纪律（重要）**：每条冠军数据必须先经至少两个独立来源核对（维基百科当届成绩表直读 + World Aquatics 奖牌库 / Olympedia / 名人堂小传 / 当届权威媒体报道任一），无法核实者宁可不录，在文件注释中说明缺口；`time` 缺失时留空，页面上显示"—"。

## 数据来源与维护

- 纪录演进：[Wikipedia · World record progression 系列](https://en.wikipedia.org/wiki/World_record_progression_100_metres_freestyle)（CC BY-SA 4.0）
- 历届冠军：维基百科各届赛事条目成绩表、World Aquatics 奖牌库、Olympedia、ISHOF 名人堂、新华社 / SwimSwam / Swimming World 等当届报道，逐条交叉核对
- 权威校验：[World Aquatics Records](https://www.worldaquatics.com/swimming/records)
- 更新流程：大赛后对照上述来源更新对应 `progression`（通常在末尾追加新纪录）与 `champions/`（追加当届冠军），并更新 `dataAsOf`。

## 部署

- **Vercel**：导入仓库即可，零配置。
- **GitHub Pages / 任意静态托管**：`npm run build` 后把 `out/` 目录发布即可（已配置 `trailingSlash`）。
