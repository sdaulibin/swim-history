import type { SwimEvent } from "@/lib/types";

/**
 * 女子 50 米蝶泳（长池）世界纪录演进
 * 数据来源：Wikipedia "World record progression 50 metres butterfly" 等
 * 数据截至：2026年10月
 *
 * progression 空缺说明（宁缺毋滥）：
 *  - 舍斯特伦 25.07（2009）以前的沿革未能核实，暂缺；
 *  - 24.43（2014）的具体赛事与日期未能核实到可靠来源，按年份精度收录；
 *  - 50 米蝶泳不是奥运会项目，世锦赛（2001 年起）与欧锦赛是其最高舞台。
 */
export const womens50mButterfly: SwimEvent = {
  slug: "womens-50m-butterfly",
  stroke: "butterfly",
  distance: 50,
  gender: "women",
  course: "LCM",
  name: "女子 50 米蝶泳",
  summary:
    "24.43——萨拉·舍斯特伦2014年写下的世界纪录悬置至今，是她众多纪元里最坚固的一道。亚洲的刻度是张雨霏的25.10：2023年杭州亚运的赛会纪录，也是这位「蝶后」当届六金拼图的一块。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "25.07", holder: "Sarah Sjöström", country: "SWE", date: "2009-07-31", meet: "世界锦标赛", place: "罗马", flags: ["sf"], note: "此前沿革未能核实，暂缺" },
    { time: "24.43", holder: "Sarah Sjöström", country: "SWE", date: "2014", note: "2014年创造，具体赛事与日期未能核实到可靠来源；现世界纪录" },
  ],

  asianRecord: {
    time: "25.10", holder: "Zhang Yufei", country: "CHN",
    date: "2023-09", meet: "2022年杭州亚运会（2023年举行）", place: "杭州",
    note: "决赛夺冠并创赛会纪录（原纪录25.55）；同时为中国纪录",
  },
  chineseRecord: {
    time: "25.10", holder: "Zhang Yufei", country: "CHN",
    date: "2023-09", meet: "2022年杭州亚运会（2023年举行）", place: "杭州",
    note: "带病出战的当届六金之一；决赛力压余依婷，池江璃花子获季军",
  },

  top10: [
    { time: "24.43", holder: "Sarah Sjöström", country: "SWE", date: "2014", wr: true, note: "现世界纪录" },
    { time: "25.02", holder: "Sarah Sjöström", country: "SWE", date: "2019-07-28", meet: "2019年光州世锦赛", note: "夺冠成绩" },
    { time: "25.07", holder: "Sarah Sjöström", country: "SWE", date: "2009-07-31", meet: "2009年罗马世锦赛", flags: ["sf"] },
    { time: "25.10", holder: "Zhang Yufei", country: "CHN", date: "2023-09", meet: "2023年杭州亚运会", note: "亚洲纪录" },
  ],
  top10Note:
    "舍斯特伦独占历史前三（她的24.43至今领先第二名0.59秒——女子泳坛最大的纪录鸿沟之一）；张雨霏的25.10是亚洲的标杆。第5–10位未能逐条双源核实，暂列锚点。",

  history: [
    {
      heading: "舍斯特伦的领地",
      paragraphs: [
        "15岁就在2005年蒙特利尔拿下世锦赛100蝶金牌的萨拉·舍斯特伦，把50蝶变成了自己的后花园：2009年罗马半决赛25.07（泳衣时代）、2014年24.43——此后她还在2015、2017、2019三届世锦赛连续卫冕这个项目的金牌。",
        "24.43悬置至今已超过十年，领先第二名的差距接近0.6秒——这是女子泳坛所有项目中最悬殊的一道鸿沟。即使是2024年巴黎奥运50自再度加冕的30岁舍斯特伦，也没有再回到这个高度。",
      ],
    },
    {
      heading: "亚洲刻度：张雨霏的25.10",
      paragraphs: [
        "2023年9月的杭州，带病出战的张雨霏在50蝶决赛游出25.10——创赛会纪录夺冠，余依婷摘银、池江璃花子获铜。这是她当届六枚金牌的一块，也是亚洲选手在这个项目上的历史最高刻度。",
        "50蝶不设奥运会与泛太平洋项目；亚运会近年已将其纳入项目表（历届冠军详见下方冠军榜）。世锦赛的领奖台上，张雨霏与亚洲选手们仍在向舍斯特伦的24.43眺望。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：World record progression 50 metres butterfly",
      url: "https://en.wikipedia.org/wiki/World_record_progression_50_metres_butterfly",
    },
    {
      label: "Wikipedia：Swimming at the 2022 Asian Games – Women's 50 metre butterfly",
      url: "https://en.wikipedia.org/wiki/Swimming_at_the_2022_Asian_Games_%E2%80%93_Women%27s_50_metre_butterfly",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
  ],
};
