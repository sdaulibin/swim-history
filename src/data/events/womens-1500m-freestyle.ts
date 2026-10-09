import type { SwimEvent } from "@/lib/types";

/**
 * 女子 1500 米自由泳（长池）世界纪录演进
 * 数据来源：Wikipedia "World record progression 1500 metres freestyle" 等
 * 数据截至：2026年10月
 *
 * progression 空缺说明（宁缺毋滥）：
 *  - 莱德基 2017 布达佩斯 15:25.48 以前的纪录沿革（Friis/Belmonte 时代）
 *    未能核实到可靠日期，暂缺；
 *  - 15:20.48（2018）至今无人撼动，是莱德基保持时间最长的现役世界纪录之一。
 */
export const womens1500mFreestyle: SwimEvent = {
  slug: "womens-1500m-freestyle",
  stroke: "freestyle",
  distance: 1500,
  gender: "women",
  course: "LCM",
  name: "女子 1500 米自由泳",
  summary:
    "15:20.48——莱德基2018年写下的世界纪录悬置至今，比她自己的800米纪录（8:04.12）还要「古老」。这个项目2021年才第一次进入奥运会；而亚洲的第一道刻度，是李冰洁的15:43.94。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "15:25.48", holder: "Katie Ledecky", country: "USA", date: "2017-07-25", meet: "世界锦标赛", place: "布达佩斯", note: "项目首届世锦赛决赛夺冠并破世界纪录；此前沿革未能核实，暂缺" },
    { time: "15:20.48", holder: "Katie Ledecky", country: "USA", date: "2018-07", meet: "美国全国锦标赛", place: "欧文", note: "现世界纪录，悬置至今" },
  ],

  asianRecord: {
    time: "15:43.94", holder: "Li Bingjie", country: "CHN",
    date: "2025-05-20", meet: "全国游泳冠军赛",
    note: "打破自己2021年全运会创造的15:52.87；稍后的新加坡世锦赛成绩未能核实到可靠来源，若更快则纪录待更正",
  },
  chineseRecord: {
    time: "15:43.94", holder: "Li Bingjie", country: "CHN",
    date: "2025-05-20", meet: "全国游泳冠军赛",
    note: "从15:52.87（2021全运会）到15:58.43（2023）再到15:43.94，李冰洁独自撑起这条曲线",
  },

  top10: [
    { time: "15:20.48", holder: "Katie Ledecky", country: "USA", date: "2018-07", meet: "2018年美国全国锦标赛", wr: true, note: "现世界纪录" },
    { time: "15:25.48", holder: "Katie Ledecky", country: "USA", date: "2017-07-25", meet: "2017年布达佩斯世锦赛", note: "原世界纪录" },
    { time: "15:26.44", holder: "Katie Ledecky", country: "USA", date: "2025-07", meet: "2025年新加坡世锦赛", note: "第六届世锦赛冠军" },
    { time: "15:30.02", holder: "Katie Ledecky", country: "USA", date: "2024-08-03", meet: "2024年巴黎奥运会", note: "第二次奥运夺冠" },
    { time: "15:37.34", holder: "Katie Ledecky", country: "USA", date: "2021-07-28", meet: "2020年东京奥运会", note: "奥运首秀夺冠" },
    { time: "15:43.94", holder: "Li Bingjie", country: "CHN", date: "2025-05-20", meet: "2025年全国游泳冠军赛", note: "亚洲纪录" },
  ],
  top10Note:
    "前十由莱德基的多个历史成绩垄断；李冰洁的15:43.94是亚洲人第一次游进15:50。15:41–15:48区间有多名欧洲选手（Quadarella 等），具体名次未能双源核实，暂列锚点。",

  history: [
    {
      heading: "最年轻的奥运项目，最老的纪录",
      paragraphs: [
        "女子1500米自由泳直到2021年东京才第一次进入奥运会——百年奥运史上最后设立的女性游泳单项之一。而在世锦赛，它2017年才完成首秀，莱德基以15:25.48夺冠兼破世界纪录；一年后的美国全国锦标赛，她把纪录推到15:20.48。",
        "此后八年，15:20.48纹丝不动。莱德基自己在东京（15:37.34）、巴黎（15:30.02）、新加坡（15:26.44）三夺大赛金牌，却没有一次能逼近自己的巅峰——8:04.12的800自纪录尚且被她自己刷新过，1500自的15:20.48成了莱德基纪元里最坚固的界碑。",
      ],
    },
    {
      heading: "亚洲刻度：李冰洁的长坡",
      paragraphs: [
        "亚洲的第一道刻度同样属于李冰洁。2021年西安全运会，她以15:52.87刷新亚洲纪录——那也是1500自第一次进入全运会；2023年她游出15:58.43后经历起伏，2025年5月的全国冠军赛，23岁的她把亚洲纪录一口气推到15:43.94，跻身当届巴黎奥运成绩的第四名水准。",
        "亚运会的女子1500自同样年轻——2022年杭州才完成首秀。李冰洁在杭州与2026年名古屋（15:53.52）两度加冕，是这个项目在亚洲赛场的第一位「王朝主人」。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：World record progression 1500 metres freestyle",
      url: "https://en.wikipedia.org/wiki/World_record_progression_1500_metres_freestyle",
    },
    {
      label: "Wikipedia：Swimming at the 2024 Summer Olympics – Women's 1500 metre freestyle",
      url: "https://en.wikipedia.org/wiki/Swimming_at_the_2024_Summer_Olympics_%E2%80%93_Women%27s_1500_metre_freestyle",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
  ],
};
