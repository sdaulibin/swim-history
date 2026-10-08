import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于",
  description: "泳史是什么、数据从哪里来、收录范围与路线图。",
};

const sections = [
  {
    heading: "这是什么",
    body: [
      "泳史是一个非商业的爱好者项目，目标是系统地整理游泳各项目的历史沿革与世界纪录演进——从 1905 年佐尔坦·哈尔迈的 1:05.8，到麦金托什的 3:54.18 与澳大利亚女队的 3:27.96，把散落在史料里的每一条时间线收拢到一起。",
      "目前已收录自由泳的百米、200/400 米与 4×100 米接力共十个项目：完整的纪录演进表、阶梯图、项目历史文章，以及历届大赛冠军榜——奥运会、世锦赛、泛太平洋锦标赛、欧锦赛与亚运会五大系列，从 1896 年雅典的首金得主到 2026 年的最新冠军。数据结构已经就绪，后续项目可以低成本复制接入。",
    ],
  },
  {
    heading: "数据来源与许可",
    body: [
      "纪录演进数据译自维基百科 World record progression 系列条目（许可协议 CC BY-SA 4.0），赛事与地点名为中文译写，成绩与日期保留原文；运动员中文译名参考通行译法，未收录者显示原文。",
      "历届冠军数据以维基百科各届赛事条目的成绩表为底本，逐条用 World Aquatics 奖牌库、Olympedia、名人堂（ISHOF）选手小传与当届媒体报道（新华社、SwimSwam、Swimming World、洛杉矶时报等）交叉核对后才写入。个别届次无法双源核实者宁可留空并在数据文件中注明，绝不臆造。",
      "权威纪录以 World Aquatics（世界泳联）官网为准，两个来源互相校验。个别历史成绩存在手计时、码制泳池、未被批准等特殊情况，均在表格中以标记注明。",
    ],
  },
  {
    heading: "收录范围与路线图",
    body: [
      "当前范围：长池（50 米池）· 男女 100–400 米自由泳、蝶泳、仰泳、个人混合泳及 4×100、4×200 米自由泳接力（男子仰泳两项目待数据配额恢复后补录），共 272 条纪录条目（含 2 条未获批准），外加五大系列 906 条历届冠军条目（奥运会自 1896 年、世锦赛自 1973 年、泛太平洋自 1985 年、亚运会自 2014 年、欧锦赛自 2008 年起已核部分）。每个项目同时标注现亚洲纪录与中国纪录（长池），与现世界纪录并列展示。",
      "路线图：补全仰泳、蝶泳、混合泳及更长距离与其他接力项目；补齐欧锦赛更早届次与个别存疑届次；增加短池（25 米）数据；增加奥运纪录；建立运动员页面，把同一个人的多条纪录串成生涯。",
    ],
  },
  {
    heading: "如何参与",
    body: [
      "站点的全部数据都是代码化的：每个项目对应 src/data/events/ 下的一个 TypeScript 文件，按已有的样板填入 progression 与 history，再到 src/data/index.ts 注册即可生成新页面。",
      "发现数据错漏？欢迎对照数据来源核查后修正对应文件——这比截图转载更可靠，也是这个项目存在的意义。",
    ],
  },
  {
    heading: "技术实现",
    body: [
      "Next.js（App Router + TypeScript）+ Tailwind CSS 构建的纯静态站点（output: export），纪录演进图为手写 SVG 阶梯图，无图表库依赖。构建产物可部署到 Vercel、GitHub Pages 等任意静态托管。",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-pool-950">关于泳史</h1>
      <div className="mt-8 space-y-10">
        {sections.map((s) => (
          <section key={s.heading}>
            <h2 className="text-xl font-semibold text-pool-800">{s.heading}</h2>
            <div className="mt-3 space-y-3 leading-loose text-slate-600">
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
