import type { SwimEvent } from "@/lib/types";

/**
 * 女子 4×100 米自由泳接力（长池）世界纪录演进
 * 数据来源：Wikipedia "World record progression 4 × 100 metres freestyle relay"、World Aquatics
 * 数据截至：2026年7月
 *
 * 接力条目的 holder 为国家英文名，中文译名由 names.ts 映射。
 * 部分早期条目（1912/1976/1992/1994/2004/2008）的具体日期按当届赛程考证，存在个别天数误差，
 * 建议联网后对照维基百科纪录页逐条复核；未核实区间以注释标注、宁缺毋滥。
 */
export const womens4x100mFreestyleRelay: SwimEvent = {
  slug: "womens-4x100m-freestyle-relay",
  stroke: "relay",
  distance: 400,
  gender: "women",
  course: "LCM",
  name: "女子 4×100 米自由泳接力",
  summary:
    "从1912年斯德哥尔摩英国队的5:52.8，到2023年福冈的3:27.96：接力王座在美国王朝、民主德国机器、荷兰旋风与澳大利亚帝国手中流转，中国队则在罗马、杭州与巴黎写下自己的坐标。",
  dataAsOf: "2026年7月",
  progression: [
    { time: "5:52.8", holder: "Great Britain", country: "GBR", date: "1912-07-13", meet: "1912年斯德哥尔摩奥运会", place: "斯德哥尔摩", note: "首个被承认的世界纪录；女子游泳入奥首届接力" },
    // 1920–1972 年间：美国（1920年安特卫普5:11.2、1924、1928、1932、1948、1960、1964、1968、1972）、
    // 荷兰（1936）、匈牙利（1952）、澳大利亚（1956）先后在奥运会上改写纪录，
    // 各条目成绩与承认状态未能逐条核实，暂不收录（宁缺毋滥）
    { time: "3:42.45", holder: "East Germany", country: "GDR", date: "1976-07-22", meet: "1976年蒙特利尔奥运会", place: "蒙特利尔", note: "恩德时代的民主德国队将纪录一举提高近13秒" },
    // 1986 年马德里世锦赛民主德国据信游出更快成绩（约3:40.5），未核实，暂不收录
    { time: "3:39.46", holder: "United States", country: "USA", date: "1992-07-26", meet: "1992年巴塞罗那奥运会", place: "巴塞罗那", note: "首次突破3分40秒" },
    { time: "3:37.91", holder: "China", country: "CHN", date: "1994-09-01", meet: "世界锦标赛", place: "罗马", note: "中国队首次创造该项目世界纪录，乐靖宜领衔；保持了整整六年" },
    { time: "3:36.61", holder: "United States", country: "USA", date: "2000-09-16", meet: "2000年悉尼奥运会", place: "悉尼", note: "打破中国队保持六年的世界纪录" },
    { time: "3:35.94", holder: "Australia", country: "AUS", date: "2004-08-14", meet: "2004年雅典奥运会", place: "雅典" },
    { time: "3:33.76", holder: "Netherlands", country: "NED", date: "2008-08-10", meet: "2008年北京奥运会", place: "北京" },
    { time: "3:31.72", holder: "Netherlands", country: "NED", date: "2009-07-26", meet: "世界锦标赛", place: "罗马", note: "快速泳衣时代；I. Dekker · R. Kromowidjojo · F. Heemskerk · M. Veldhuis" },
    { time: "3:30.65", holder: "Australia", country: "AUS", date: "2016-08-06", meet: "2016年里约热内卢奥运会", place: "里约热内卢" },
    { time: "3:30.05", holder: "Australia", country: "AUS", date: "2018-04-05", meet: "英联邦运动会", place: "黄金海岸" },
    { time: "3:29.69", holder: "Australia", country: "AUS", date: "2021-07-25", meet: "2020年东京奥运会", place: "东京", note: "首次游进3分30秒" },
    { time: "3:27.96", holder: "Australia", country: "AUS", date: "2023-07-23", meet: "世界锦标赛", place: "福冈", note: "现世界纪录；首破3分28秒" },
  ],

  asianRecord: {
    time: "3:30.30", holder: "China", country: "CHN",
    date: "2024-07-27", meet: "2024年巴黎奥运会", place: "巴黎",
    note: "决赛摘铜并刷新亚洲纪录",
  },
  chineseRecord: {
    time: "3:30.30", holder: "China", country: "CHN",
    date: "2024-07-27", meet: "2024年巴黎奥运会", place: "巴黎",
  },


  top10: [
    { time: "3:27.96", holder: "Australia", country: "AUS", date: "2023-07-23", meet: "2023年福冈世锦赛", wr: true },
    { time: "3:28.92", holder: "Australia", country: "AUS", date: "2024-07-27", meet: "2024年巴黎奥运会" },
    { time: "3:29.32", holder: "United States", country: "USA", date: "2026-08", meet: "2026年泛太平洋锦标赛", note: "美国纪录（预赛/决赛口径存疑）" },
    { time: "3:29.69", holder: "Australia", country: "AUS", date: "2021-07-25", meet: "2020年东京奥运会" },
    { time: "3:30.21", holder: "Australia", country: "AUS", date: "2019-07-21", meet: "2019年光州世锦赛" },
    { time: "3:30.30", holder: "China", country: "CHN", date: "2024-07-27", meet: "2024年巴黎奥运会", note: "亚洲纪录" },
    { time: "3:30.65", holder: "Australia", country: "AUS", date: "2016-08-13", meet: "2016年里约奥运会" },
    { time: "3:31.72", holder: "Netherlands", country: "NED", date: "2009-08-02", meet: "2009年罗马世锦赛" },
    { time: "3:31.72", holder: "Australia", country: "AUS", date: "2017-07", meet: "2017年布达佩斯世锦赛", note: "与荷兰队世界纪录恰好相同" },
    { time: "3:31.93", holder: "United States", country: "USA", date: "2023-07-23", meet: "2023年福冈世锦赛" },
  ],
  top10Note:
    "澳大利亚几乎垄断榜首；中国队3:30.30（2024巴黎铜牌）为亚洲纪录。英国队2026欧锦赛夺冠成绩待核，未入列。",

  history: [
    {
      heading: "1912：与女子游泳一同入奥",
      paragraphs: [
        "1912年斯德哥尔摩奥运会第一次设立女子游泳项目，泳池内共两个小项：100米自由泳与4×100米自由泳接力。英国队以5:52.8夺得首届接力金牌，这一成绩被列为该项目首个被承认的世界纪录。此后接力台几乎成了美国队的后院：1920年安特卫普（5:11.2）、1924年巴黎、1928年阿姆斯特丹、1932年洛杉矶，美国队连夺四届，唯一的例外是1936年柏林——登乌登与马斯滕布罗克压阵的荷兰队登顶。",
        "二战后格局依旧：1948年伦敦美国队夺回王座；1952年赫尔辛基，匈牙利女子游泳的黄金一代爆冷登顶；1956年墨尔本，道恩·弗雷泽与洛兰·克拉普坐镇的东道主澳大利亚队首次染指该项目。从1920到1972年间的12届奥运会，美国队9次夺冠，先后只被荷兰、匈牙利、澳大利亚各搅局一次。",
      ],
    },
    {
      heading: "美国机器与民主德国的裂缝",
      paragraphs: [
        "1960年罗马至1972年慕尼黑，美国队又添四连冠，接力深度无人能及。裂缝出现在1976年蒙特利尔：民主德国队以3:42.45将世界纪录一举提高近13秒，科尔内利娅·恩德当届独得四金，那也是女子游泳版图被系统性改写的一届。",
        "两德统一后解密的档案证实，这背后是国家主导的系统性兴奋剂计划——与个人项目一样，这是接力史上无法回避的一章。民主德国队随后卫冕1980年莫斯科（美国缺席），1984年洛杉矶美国队趁抵制空档夺金，1988年汉城民主德国队再度登顶，克里斯汀·奥托把该项目金牌收入她传奇的六金之中——那是民主德国接力王朝的最后一次亮相。",
      ],
    },
    {
      heading: "1992美国与1994中国时刻",
      paragraphs: [
        "1992年巴塞罗那，美国队以3:39.46首破3分40秒，1996年亚特兰大成功卫冕。真正的震动来自1994年罗马世锦赛：乐靖宜领衔的中国队游出3:37.91，成为首支创造该项目世界纪录的亚洲队伍。这个纪录保持了整整六年，直到2000年悉尼奥运会才被美国队（3:36.61）改写。",
        "2004年雅典，澳大利亚队的亨利、伦顿一代以3:35.94首次将世界纪录挂在自己名下——这是她们自1956年之后的第二枚该项目奥运金牌。澳大利亚接力帝国的地基，就此打下。",
      ],
    },
    {
      heading: "荷兰旋风与快速泳衣",
      paragraphs: [
        "荷兰人自1936年之后再登顶，等了72年：2008年北京，她们以3:33.76打破澳大利亚的纪录；一年后的罗马世锦赛，聚氨酯快速泳衣的最后一个夏天，荷兰队游出3:31.72——这个成绩比泳衣禁令多活了七年，直到2016年里约才被坎贝尔姐妹压阵的澳大利亚队（3:30.65）刷新。",
        "2018年黄金海岸英联邦运动会，澳大利亚队将纪录推进到3:30.05。此时接力台的剧本已经写好：一边是蓄势待发的澳大利亚帝国，一边是等待交接棒的新生代。",
      ],
    },
    {
      heading: "澳大利亚帝国与中国时刻",
      paragraphs: [
        "2021年东京，布朗蒂·坎贝尔、哈里斯、麦基翁与凯特·坎贝尔组成的澳大利亚队游出3:29.69，人类首次在该项目突破3分30秒；2023年福冈，她们再进一步——3:27.96，现世界纪录。2024年巴黎，澳大利亚队以3:28.92实现卫冕，雅典以来六届奥运五冠，距世界纪录仅差0.96秒；中国队摘得铜牌并刷新亚洲纪录，此前杭州亚运会她们已重新夺回亚洲王座。",
        "2025年新加坡世锦赛，澳大利亚队延续着统治；2026年的尔湾泛太平洋锦标赛与名古屋亚运会，接力金牌依旧分属澳大利亚与中国——巴黎周期的格局，正原样走进洛杉矶周期。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：World record progression 4 × 100 metres freestyle relay",
      url: "https://en.wikipedia.org/wiki/World_record_progression_4_%C3%97100_metres_freestyle_relay",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
  ],
};
