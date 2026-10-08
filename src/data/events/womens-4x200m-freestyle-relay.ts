import type { SwimEvent } from "@/lib/types";

/**
 * 女子 4×200 米自由泳接力（长池）世界纪录演进
 * 数据来源：Wikipedia "World record progression 4 × 200 metres freestyle relay" 等
 * 数据截至：2026年10月
 *
 * holder 一律使用国家英文名（站点接力项目惯例），中文译名由 names.ts 映射。
 * progression 空缺说明（宁缺毋滥）：
 *  - 2007 年以前的纪录沿革未能核实，暂缺
 *    （2006 年德国队曾创 7:50.82 的世界纪录，具体日期未能核实，暂不收录）；
 *  - 2009 年罗马 7:42.08 之后至 2019 年光州 7:41.50 之间近十年无经核实的纪录改写；
 *  - 2023 年福冈 7:37.50 为现世界纪录（2024 巴黎、2025 新加坡、2026 均未被打破）。
 */
export const womens4x200mFreestyleRelay: SwimEvent = {
  slug: "womens-4x200m-freestyle-relay",
  stroke: "relay",
  distance: 800,
  gender: "women",
  course: "LCM",
  name: "女子 4×200 米自由泳接力",
  summary:
    "从1996年亚特兰大才进入奥运的年轻项目，如今已被推到7:37.50——澳大利亚在福冈写下的现世界纪录。而曲线中间那段最动人的，是2021年东京之夜：中国队7:40.33惊天夺金，把世界纪录留在了亚洲。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "7:50.09", holder: "United States", country: "USA", date: "2007-03-29", meet: "世界锦标赛", place: "墨尔本", note: "N. Coughlin 领游；打破德国队保持的世界纪录" },
    { time: "7:44.31", holder: "Australia", country: "AUS", date: "2008-08-14", meet: "2008年北京奥运会", place: "北京", note: "S. Rice · B. Barratt · K. Palmer · L. McKenzie；将原纪录一举提高 5.78 秒" },
    { time: "7:42.08", holder: "China", country: "CHN", date: "2009-07-30", meet: "世界锦标赛", place: "罗马", note: "刘子歌 · 朱倩薇 · 庞佳颖等；聚氨酯泳衣时代的世界纪录，保持了近十年" },
    { time: "7:41.50", holder: "Australia", country: "AUS", date: "2019-07-25", meet: "世界锦标赛", place: "光州", note: "A. Titmus 一棒 1:54.27" },
    { time: "7:40.33", holder: "China", country: "CHN", date: "2021-07-29", meet: "2020年东京奥运会", place: "东京", note: "杨浚瑄 · 汤慕涵 · 张雨霏 · 李冰洁；爆冷力压美国、澳大利亚夺冠" },
    { time: "7:39.29", holder: "Australia", country: "AUS", date: "2022-07-31", meet: "英联邦运动会", place: "伯明翰", note: "A. Titmus 一棒 1:52.82；史上首支游进 7:40 的队伍" },
    { time: "7:37.50", holder: "Australia", country: "AUS", date: "2023-07-27", meet: "世界锦标赛", place: "福冈", note: "现世界纪录；蒂特姆斯、奥卡拉汉领衔" },
  ],

  asianRecord: {
    time: "7:40.33", holder: "China", country: "CHN",
    date: "2021-07-29", meet: "2020年东京奥运会",
    note: "该成绩同时为世界纪录（保持至 2022 年 7 月）；至今仍是亚洲纪录与中国纪录",
    wr: true,
  },
  chineseRecord: {
    time: "7:40.33", holder: "China", country: "CHN",
    date: "2021-07-29", meet: "2020年东京奥运会",
    note: "杨浚瑄/汤慕涵/张雨霏/李冰洁；此后中国队最好成绩为 7:42.34（2024 巴黎铜牌）",
    wr: true,
  },

  top10: [
    { time: "7:37.50", holder: "Australia", country: "AUS", date: "2023-07-27", meet: "2023年福冈世锦赛", wr: true, note: "现世界纪录" },
    { time: "7:38.08", holder: "Australia", country: "AUS", date: "2024-08-01", meet: "2024年巴黎奥运会", note: "奥运纪录" },
    { time: "7:39.29", holder: "Australia", country: "AUS", date: "2022-07-31", meet: "2022年英联邦运动会", note: "史上首破 7:40" },
    { time: "7:39.35", holder: "Australia", country: "AUS", date: "2025-07-31", meet: "2025年新加坡世锦赛", note: "0.66 秒险胜美国队" },
    { time: "7:40.01", holder: "United States", country: "USA", date: "2025-07-31", meet: "2025年新加坡世锦赛", note: "美国纪录" },
    { time: "7:40.33", holder: "China", country: "CHN", date: "2021-07-29", meet: "2020年东京奥运会", note: "亚洲纪录，夺冠时为世界纪录" },
    { time: "7:40.73", holder: "United States", country: "USA", date: "2021-07-29", meet: "2020年东京奥运会", note: "莱德基压轴仍摘银，快于原世界纪录" },
    { time: "7:41.29", holder: "Australia", country: "AUS", date: "2021-07-29", meet: "2020年东京奥运会", note: "东京决赛三队全部快于原世界纪录" },
    { time: "7:41.45", holder: "United States", country: "USA", date: "2022-06-22", meet: "2022年布达佩斯世锦赛", note: "赛会纪录" },
    { time: "7:41.50", holder: "Australia", country: "AUS", date: "2019-07-25", meet: "2019年光州世锦赛", note: "夺冠时为世界纪录" },
  ],
  top10Note:
    "7:40.86（美国，2024巴黎银牌）、7:42.34（中国，2024巴黎铜牌）、7:42.40（澳大利亚，2026泛太平洋）、7:42.08（中国，2009罗马，保持近十年的前世界纪录）紧随其后；前十由澳大利亚（5 席）与美国（4 席）垄断，唯一例外是中国的亚洲纪录 7:40.33。",

  history: [
    {
      heading: "入奥与美国时代",
      paragraphs: [
        "女子4×200米自由泳接力是游泳家族里的年轻项目——直到1996年7月25日的亚特兰大，它才第一次进入奥运会，东道主美国队拿下首金。此后悉尼（阿斯诺、芒兹、本科、汤普森组合）与雅典，美国人完成奥运三连冠；从悉尼的珍妮·汤普森到2007年墨尔本世锦赛一棒的娜塔莉·考芙林，一代代名将领跑，让这个项目的前十年几乎成了美国队的独角戏。",
        "2008年8月14日的北京水立方，剧本第一次改写：不被看好的澳大利亚队——斯蒂芬妮·赖斯、布朗蒂·巴拉特、凯莉·帕尔默与琳达·麦肯齐——游出7:44.31，把世界纪录一口气提高了5.78秒，力压夺标热门摘金。一年后的罗马，聚氨酯泳衣的谢幕演出上，刘子歌领衔的中国队再进一步：7:42.08，新的世界纪录。",
      ],
    },
    {
      heading: "东京之夜：中国的黄金时刻",
      paragraphs: [
        "罗马的7:42.08是泳衣狂飙时代的尾声，此后近十年布料泳衣无人在长池逼近它——直到2019年光州，阿丽亚尔妮·蒂特姆斯一棒1:54.27，澳大利亚以7:41.50为新时代开路。但真正的地震在2021年7月29日的东京水上运动中心：杨浚瑄、汤慕涵、张雨霏、李冰洁组成的中国队游出7:40.33，爆冷力压两大热门——美国7:40.73、澳大利亚7:41.29，决赛前三名全部快于原世界纪录，中国队历史上第一次登上该项目奥运最高领奖台。",
        "这枚金牌的余韵延续至今：7:40.33至今仍是亚洲纪录与中国纪录。此后中国队又在2024年多哈世锦赛以7:47.26夺得世界冠军（李冰洁第三棒1:54.59率队从第五反超），巴黎奥运摘铜（7:42.34）、2025新加坡再摘铜；亚运会赛场自2014年仁川起，中国队已完成四连冠。",
      ],
    },
    {
      heading: "7:37.50：澳大利亚的统治",
      paragraphs: [
        "东京之后，纪录改写的主动权回到澳大利亚手中：2022年7月31日伯明翰英联邦运动会，蒂特姆斯一棒1:52.82、奥卡拉汉压轴，7:39.29——史上第一支游进7:40的队伍；2023年7月27日福冈，她们把世界纪录定格在7:37.50。巴黎的2024年8月1日，奥卡拉汉、帕利斯特、思罗塞尔与蒂特姆斯再以7:38.08夺冠，仅比世界纪录慢0.58秒。",
        "统治仍在延续：2025新加坡7:39.35险胜美国（7:40.01，美国纪录）、2026泛太平洋7:42.40再胜美国与加拿大。欧锦赛赛场则由英国队称雄——2026年巴黎，她们以7:45.93的赛会纪录包揽当届男女4×200两金。唯一能持续站上领奖台挑战澳美的，正是那支在东京改写历史的中国队。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：4 × 200 metres freestyle relay",
      url: "https://en.wikipedia.org/wiki/4_%C3%97_200_metres_freestyle_relay",
    },
    {
      label: "Wikipedia：Swimming at the 2020 Summer Olympics – Women's 4 × 200 metre freestyle relay",
      url: "https://en.wikipedia.org/wiki/Swimming_at_the_2020_Summer_Olympics_%E2%80%93_Women%27s_4_%C3%97_200_metre_freestyle_relay",
    },
    {
      label: "Wikipedia：Swimming at the 2024 Summer Olympics – Women's 4 × 200 metre freestyle relay",
      url: "https://en.wikipedia.org/wiki/Swimming_at_the_2024_Summer_Olympics_%E2%80%93_Women%27s_4_%C3%97_200_metre_freestyle_relay",
    },
    {
      label: "Wikipedia：Swimming at the 2026 Asian Games – Women's 4 × 200 metre freestyle relay",
      url: "https://en.wikipedia.org/wiki/Swimming_at_the_2026_Asian_Games_%E2%80%93_Women%27s_4_%C3%97_200_metre_freestyle_relay",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
  ],
};
