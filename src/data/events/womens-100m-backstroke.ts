import type { SwimEvent } from "@/lib/types";

/**
 * 女子 100 米仰泳（长池）世界纪录演进
 * 数据来源：Wikipedia "World record progression 100 metres backstroke"、
 *   SwimSwam / ESPN / Swimming World / Star Tribune / LA Times 等单行报道
 * 数据截至：2026年10月
 *
 * 核实说明（宁缺毋滥）：
 * 1. 1994 年之前的行次（早期手计时时代、东德时代等）未能逐条双源核实，暂缺；
 *    考夫林生涯共 5 次改写该纪录（国际游泳名人堂口径），2002-2007 年间行次未单列。
 * 2. 57.57 为 4×100 混合泳接力第一棒成绩，世界泳联回溯承认为独立世界纪录。
 * 3. 2026 年泛太平洋（尔湾）、欧锦赛（巴黎）两站本项结果未能核实（检索通道受限）。
 */
export const womens100mBackstroke: SwimEvent = {
  slug: "womens-100m-backstroke",
  stroke: "backstroke",
  distance: 100,
  gender: "women",
  course: "LCM",
  name: "女子 100 米仰泳",
  summary:
    "从贺慈红1994年的1:00.16到雷根·史密斯2024年的57.13，三十年推进了近3秒。麦基翁与史密斯的隔洋拉锯把纪录带入57秒时代；傅园慧的58.72，至今仍是中国离这条时间线最近的一步。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "1:00.16", holder: "He Cihong", country: "CHN", date: "1994-09", meet: "世界锦标赛", place: "罗马", note: "保持近8年，直到2002年才被考夫林改写" },
    { time: "59.58", holder: "Natalie Coughlin", country: "USA", date: "2002-08-13", meet: "美国全国锦标赛", place: "劳德代尔堡", note: "首位突破1分钟大关的女选手" },
    { time: "59.44", holder: "Natalie Coughlin", country: "USA", date: "2007-03", meet: "世界锦标赛决赛", place: "墨尔本", note: "决赛自破尘封近五年的纪录" },
    { time: "58.77", holder: "Kirsty Coventry", country: "ZIM", date: "2008-08", meet: "奥运会半决赛", place: "北京", flags: ["sf"], note: "决赛负于考夫林（58.96）获银，纪录留在半决赛" },
    { time: "58.48", holder: "Anastasia Zuyeva", country: "RUS", date: "2009-07-27", meet: "世界锦标赛半决赛", place: "罗马", flags: ["sf"] },
    { time: "58.12", holder: "Gemma Spofforth", country: "GBR", date: "2009-07-28", meet: "世界锦标赛决赛", place: "罗马", note: "着传统泳衣击败一众聚氨酯泳衣对手，此纪录保持到2017年" },
    { time: "58.10", holder: "Kylie Masse", country: "CAN", date: "2017-07-25", meet: "世界锦标赛决赛", place: "布达佩斯", note: "加拿大首位女子游泳世界冠军" },
    { time: "58.00", holder: "Kathleen Baker", country: "USA", date: "2018-07-28", meet: "美国全国锦标赛", place: "尔湾" },
    { time: "57.57", holder: "Regan Smith", country: "USA", date: "2019-07-28", meet: "世界锦标赛 4×100 混合泳接力决赛第一棒", place: "光州", flags: ["r"], note: "接力一棒单独承认为世界纪录；美国队 3:50.40 破接力世界纪录" },
    { time: "57.45", holder: "Kaylee McKeown", country: "AUS", date: "2021-06-13", meet: "澳大利亚奥运选拔赛决赛", place: "阿德莱德" },
    { time: "57.33", holder: "Kaylee McKeown", country: "AUS", date: "2023-10", meet: "世界泳联世界杯布达佩斯站", place: "布达佩斯", note: "24小时内第二项世界纪录（前一日50仰26.86）" },
    { time: "57.13", holder: "Regan Smith", country: "USA", date: "2024-06-18", meet: "美国奥运选拔赛决赛", place: "印第安纳波利斯", note: "现世界纪录" },
  ],

  asianRecord: {
    time: "58.70", holder: "Aya Terakawa", country: "JPN",
    note: "2017年4月傅园慧游出58.72时距其仅差0.02秒，此纪录在亚洲保持至今；具体创造时间未能核实（约2012年伦敦奥运周期）。赵菁2010年11月13日广州亚运会混合泳接力第一棒58.94曾破当时的亚洲纪录。",
  },
  chineseRecord: {
    time: "58.72", holder: "Fu Yuanhui", country: "CHN",
    date: "2017-04", meet: "2017年全国游泳冠军赛", place: "青岛",
    note: "4月13日决赛；破她自己保持的58.76（2016里约奥运铜牌），距亚洲纪录0.02秒",
  },

  top10: [
    { time: "57.13", holder: "Regan Smith", country: "USA", date: "2024-06-18", meet: "美国奥运选拔赛决赛", place: "印第安纳波利斯", wr: true },
    { time: "57.16", holder: "Kaylee McKeown", country: "AUS", date: "2025-07-29", meet: "2025年新加坡世锦赛", note: "个人最好成绩，距世界纪录0.03秒" },
    { time: "57.33", holder: "Kaylee McKeown", country: "AUS", date: "2023-10", meet: "世界杯布达佩斯站", note: "时为世界纪录" },
    { time: "57.33", holder: "Kaylee McKeown", country: "AUS", date: "2024-07-31", meet: "2024年巴黎奥运会决赛", note: "奥运纪录，与2023年10月的世界纪录完全相同" },
    { time: "57.45", holder: "Kaylee McKeown", country: "AUS", date: "2021-06-13", meet: "澳大利亚奥运选拔赛", place: "阿德莱德", note: "时为世界纪录" },
    { time: "57.47", holder: "Kaylee McKeown", country: "AUS", date: "2021-07", meet: "2020年东京奥运会决赛", note: "时为奥运纪录" },
    { time: "57.47", holder: "Regan Smith", country: "USA", date: "2024-06", meet: "美国奥运选拔赛半决赛", flags: ["sf"], note: "决赛前夜" },
    { time: "57.53", holder: "Kaylee McKeown", country: "AUS", date: "2023-07-25", meet: "2023年福冈世锦赛", note: "赛会纪录" },
    { time: "57.57", holder: "Regan Smith", country: "USA", date: "2019-07-28", meet: "2019年光州世锦赛混合泳接力第一棒", flags: ["r"], note: "接力分段，部分历史榜单不收录" },
    { time: "58.00", holder: "Kathleen Baker", country: "USA", date: "2018-07-28", meet: "美国全国锦标赛", place: "尔湾", note: "时为世界纪录" },
  ],
  top10Note:
    "第10位之后（马斯58.10、斯波福斯58.12等）及史密斯2024巴黎奥运亚军、马斯东京奥运亚军等成绩未能双源核实，宁缺毋滥；57.57为接力第一棒分段，世界泳联承认为世界纪录。",

  history: [
    {
      heading: "贺慈红与1分钟大关",
      paragraphs: [
        "1994年9月的罗马世锦赛，中国的贺慈红游出1:00.16改写世界纪录——这是女子百米仰泳在「1分钟时代」之前的最后一格刻度，此后近8年无人撼动。2002年8月，考夫林在劳德代尔堡的全美锦标赛上以59.58成为历史上首位突破1分钟的女选手；2007年墨尔本世锦赛决赛，她又把纪录削到59.44。",
        "对亚洲泳坛而言，这段时期的坐标属于中国：贺慈红之后，赵菁在2010年广州亚运会混合泳接力第一棒游出58.94，改写了日本选手寺川绫保持的亚洲纪录。",
      ],
    },
    {
      heading: "快速泳衣时代的58.12",
      paragraphs: [
        "2008年北京，科文垂在半决赛游出58.77，决赛却输给考夫林的58.96只得银牌——纪录留在半决赛，金牌留在决赛，是这项赛事著名的错位。一年后的罗马，聚氨酯泳衣把极限再度压缩：祖耶娃半决赛58.48，斯波福斯决赛58.12，英国人身着传统泳衣击败一众「快速泳衣」对手。",
        "纺织品规则时代，马斯2017年布达佩斯58.10、贝克2018年尔湾58.00，把纪录一步步逼向57秒关口。",
      ],
    },
    {
      heading: "麦基翁与史密斯的57秒拉锯",
      paragraphs: [
        "2019年光州，17岁的史密斯在4×100混合泳接力第一棒游出57.57，纪录首次进入57秒区间；2021年6月，麦基翁在阿德莱德选拔赛以57.45夺走；2023年10月布达佩斯世界杯，她再自破至57.33；2024年6月，史密斯在印第安纳波利斯以57.13夺回并保持至今。东京（57.47）与巴黎（57.33）两届奥运，麦基翁全部登顶；2025年新加坡世锦赛，她又游出距世界纪录仅0.03秒的57.16。",
        "中国方面，傅园慧2017年的58.72距亚洲纪录仅差0.02秒，此后汪雪儿（58.99）、万乐天（59.02）相继接班；2026年名古屋亚运会，彭旭玮以59.30夺冠，白井璃绪（日本）59.89获银。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：World record progression 100 metres backstroke",
      url: "https://en.wikipedia.org/wiki/World_record_progression_100_metres_backstroke",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
    {
      label: "SwimSwam：麦基翁布达佩斯世界杯 57.33 破世界纪录",
      url: "https://swimswam.com/kaylee-mckeown-breaks-2nd-world-record-in-24-hours-with-57-33-100-back-in-budapest/",
    },
    {
      label: "ESPN：史密斯美国选拔赛 57.13 破世界纪录",
      url: "https://www.espn.com/",
    },
  ],
};
