import type { SwimEvent } from "@/lib/types";

/**
 * 男子 4×200 米自由泳接力（长池）世界纪录演进
 * 数据来源：Wikipedia "World record progression 4 × 200 metres freestyle relay" 等
 * 数据截至：2026年10月
 *
 * holder 一律使用国家英文名（站点接力项目惯例），中文译名由 names.ts 映射。
 * progression 空缺说明（宁缺毋滥）：
 *  - 2000 年以前的纪录沿革未能核实，暂缺
 *    （悉尼奥运前的世界纪录为澳大利亚的 7:08.79，亦创于悉尼，具体赛事与日期未能核实）；
 *  - 2001 年福冈世锦赛 7:04.66 的具体决赛日期未能核实到日，暂记为 2001-07；
 *  - 2002–2006 年间无经核实的纪录改写（澳大利亚 7:04.66 一直保持到 2007 年墨尔本）；
 *  - 2008 年北京 6:58.55 至今（含 2025 新加坡世锦赛、2026 泛太平洋与亚运会）未被打破。
 */
export const mens4x200mFreestyleRelay: SwimEvent = {
  slug: "mens-4x200m-freestyle-relay",
  stroke: "relay",
  distance: 800,
  gender: "men",
  course: "LCM",
  name: "男子 4×200 米自由泳接力",
  summary:
    "每人两百米、四棒八百米的中距离团队鏖战。从2000年悉尼的7:07.05，到2008年北京6:58.55首破七分大关，这条世界纪录已沉睡十八年；而英国人的四连冠王朝与中国军团的亚洲纪录，正把曲线的另一端不断推快。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "7:07.05", holder: "Australia", country: "AUS", date: "2000-09-19", meet: "2000年悉尼奥运会", place: "悉尼", note: "I. Thorpe（1:46.03）· M. Klim · T. Pearson · B. Kirby；主场作战，终结美国奥运连冠" },
    { time: "7:04.66", holder: "Australia", country: "AUS", date: "2001-07", meet: "世界锦标赛", place: "福冈", note: "G. Hackett · M. Klim · B. Kirby · I. Thorpe（压轴 1:44.14）；当届男子三项接力均由澳大利亚夺冠" },
    { time: "7:03.24", holder: "United States", country: "USA", date: "2007-03-30", meet: "世界锦标赛", place: "墨尔本", note: "M. Phelps（1:45.36）· R. Lochte · K. Keller · P. Vanderkaay；菲尔普斯当届七金之一" },
    { time: "6:58.55", holder: "United States", country: "USA", date: "2008-08-13", meet: "2008年北京奥运会", place: "北京", note: "M. Phelps · R. Lochte · R. Berens · P. Vanderkaay；史上首次游进 7 分钟，现世界纪录" },
  ],

  asianRecord: {
    time: "7:00.17", holder: "China", country: "CHN",
    date: "2026-09-21", meet: "名古屋亚运会（东京水上运动中心）",
    note: "决赛改写亚洲纪录与赛会纪录；张展硕压轴游出 1:42.92，率队逆转日本队夺冠",
  },
  chineseRecord: {
    time: "7:00.17", holder: "China", country: "CHN",
    date: "2026-09-21", meet: "名古屋亚运会",
    note: "此前中国纪录为 7:00.91（2025年新加坡世锦赛银牌成绩）",
  },

  top10: [
    { time: "6:58.55", holder: "United States", country: "USA", date: "2008-08-13", meet: "2008年北京奥运会", wr: true, note: "现世界纪录，首破 7 分钟" },
    { time: "6:58.58", holder: "Great Britain", country: "GBR", date: "2021-07-28", meet: "2020年东京奥运会", note: "欧洲纪录，距世界纪录仅 0.03 秒" },
    { time: "6:59.08", holder: "Great Britain", country: "GBR", date: "2023-07-28", meet: "2023年福冈世锦赛", note: "当届决赛唯一游进 7 分钟的队伍" },
    { time: "6:59.37", holder: "United States", country: "USA", date: "2026-08-13", meet: "2026年泛太平洋锦标赛", place: "尔湾", note: "赛会纪录；Hobson 一棒 1:44.13" },
    { time: "6:59.43", holder: "Great Britain", country: "GBR", date: "2024-07-30", meet: "2024年巴黎奥运会", note: "卫冕奥运冠军" },
    { time: "6:59.70", holder: "United States", country: "USA", date: "2012-07-31", meet: "2012年伦敦奥运会", note: "菲尔普斯压轴，第 19 枚奥运奖牌" },
    { time: "6:59.84", holder: "Great Britain", country: "GBR", date: "2025-08-01", meet: "2025年新加坡世锦赛", note: "英国队全球四连冠之一" },
    { time: "7:00.17", holder: "China", country: "CHN", date: "2026-09-21", meet: "名古屋亚运会", note: "亚洲纪录" },
    { time: "7:00.24", holder: "United States", country: "USA", date: "2022-06-23", meet: "2022年布达佩斯世锦赛", note: "美国该项目的下一座世界冠军" },
    { time: "7:00.66", holder: "United States", country: "USA", date: "2016-08-09", meet: "2016年里约奥运会", note: "奥运四连冠收官" },
  ],
  top10Note:
    "7:00.78（美国，2024巴黎银牌）、7:00.91（中国，2025新加坡银牌，原亚洲纪录）、7:00.98（澳大利亚，2025新加坡铜牌）紧随其后；6:58.55 自 2008 年 8 月 13 日起无人撼动，是男子泳坛现存最古老的世界纪录之一。",

  history: [
    {
      heading: "索普与澳大利亚王朝",
      paragraphs: [
        "2000年9月19日，悉尼奥运主场的澳大利亚队让男子4×200米接力进入新时代：17岁的伊恩·索普第一棒游出1:46.03，与克利姆、皮尔逊、柯比一起以7:07.05打破世界纪录——这是美国人长期垄断的终结。次年福冈世锦赛，哈克特、克利姆、柯比与索普再进一步：7:04.66，索普压轴一棒1:44.14惊世骇俗，澳大利亚包揽当届全部三项男子自由泳接力。",
        "雅典2004，剧本来到凯勒与索普的直接对话：菲尔普斯第一棒率美国队出发，最后一棒凯勒顶住索普的疯狂追赶，美国队以7:07.33险胜0.1秒级差距夺金。此后数年，世界纪录停在澳大利亚人的7:04.66上，等待下一个时代的到来。",
      ],
    },
    {
      heading: "6:58.55：菲尔普斯时代的巅峰",
      paragraphs: [
        "2007年墨尔本世锦赛，美国队（菲尔普斯、洛赫特、凯勒、范德卡伊）以7:03.24首度改写福冈纪录，那是菲尔普斯七金狂欢的一部分。真正的巅峰在一年后的水立方：2008年8月13日，菲尔普斯、洛赫特、贝伦斯、范德卡伊游出6:58.55——人类首次在这个项目突破7分钟大关。这一棒接一棒的成绩，成为菲尔普斯八金神话的注脚，也把世界纪录钉在了此后十八年无人企及的高度。",
        "伦敦2012，压轴的菲尔普斯收下个人第19枚奥运奖牌，以6:59.70为美国队实现奥运三连冠；里约2016，德怀尔、哈斯、洛赫特与菲尔普斯再以7:00.66完成四连冠——那是菲尔普斯生涯最后一枚接力奥运金牌。银牌归于英国、铜牌归于日本，新旧力量已在牌桌边缘就座。",
      ],
    },
    {
      heading: "英国王朝与亚洲力量",
      paragraphs: [
        "东京2020属于英国：迪恩、斯科特、盖伊与理查兹游出6:58.58，仅比世界纪录慢0.03秒，英国史上首次夺得该项目奥运金牌。此后福冈2023（6:59.08）、巴黎2024（6:59.43，卫冕）、新加坡2025（6:59.84），英国队完成世界大赛四连冠，理查兹、盖伊、麦克米兰与斯科特的班底坚如磐石。",
        "亚洲军团的曲线同样陡峭：2024年多哈世锦赛，季新杰、王浩宇、潘展乐与16岁的张展硕以7:01.84逆转夺金，中国男队首夺该项目世界冠军；同年巴黎他们以7:04.37位列第四。2025年新加坡，中国队7:00.91摘银改写亚洲纪录；2026年9月21日名古屋亚运会（东京水上运动中心），中国队7:00.17再破亚洲纪录——第三棒后还落后日本队1.89秒，张展硕压轴1:42.92完成惊天逆转。此前杭州亚运会的亚洲纪录属于黄善宇领衔的韩国队（7:01.73），2018年雅加达的赛会纪录则由日本队保持（7:05.17）——男子4×200，已是中日韩三国的贴身缠斗。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：4 × 200 metres freestyle relay",
      url: "https://en.wikipedia.org/wiki/4_%C3%97_200_metres_freestyle_relay",
    },
    {
      label: "Wikipedia：World record progression 4 × 200 metres freestyle relay",
      url: "https://en.wikipedia.org/wiki/World_record_progression_4_%C3%97_200_metres_freestyle_relay",
    },
    {
      label: "Wikipedia：Swimming at the 2024 Summer Olympics – Men's 4 × 200 metre freestyle relay",
      url: "https://en.wikipedia.org/wiki/Swimming_at_the_2024_Summer_Olympics_%E2%80%93_Men%27s_4_%C3%97_200_metre_freestyle_relay",
    },
    {
      label: "Wikipedia：Swimming at the 2026 Asian Games – Men's 4 × 200 metre freestyle relay",
      url: "https://en.wikipedia.org/wiki/Swimming_at_the_2026_Asian_Games_%E2%80%93_Men%27s_4_%C3%97_200_metre_freestyle_relay",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
  ],
};
