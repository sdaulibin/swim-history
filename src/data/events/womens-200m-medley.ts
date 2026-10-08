import type { SwimEvent } from "@/lib/types";

/**
 * 女子 200 米个人混合泳（长池）世界纪录演进
 * 数据来源：Wikipedia "World record progression 200 metres individual medley"、
 * Swimming World / SwimSwam / Olympics.com / Al Jazeera / 新华社等（见 sources）
 * 数据截至：2026年10月
 *
 * 核实说明（宁缺毋滥）：
 * - 纪录链从 1981 年格韦尼希 2:11.73 起（华盛顿邮报：林莉 1992 年打破的是当时
 *   泳坛最古老的世界纪录）；更早链条（恩德尔等东德时代）与 2009 年库科尔斯
 *   2:06.15 的具体轮次（半决赛/决赛）未能双源核实，未收。
 * - 1980 年莫斯科奥运会未设女子 200 米个人混合泳（1968 年设立，1984 年回归）。
 */
export const womens200mMedley: SwimEvent = {
  slug: "womens-200m-medley",
  stroke: "medley",
  distance: 200,
  gender: "women",
  course: "LCM",
  name: "女子 200 米个人混合泳",
  summary:
    "从林莉1992年的2:11.65到于子迪2026年的2:06.10，这条时间线上写满中国名字：吴艳艳、叶诗文、余依婷相继登场，而麦金托什的2:05.70标记着现在的天花板。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "2:11.73", holder: "Ute Geweniger", country: "GDR", date: "1981", note: "保持11年，被打破前是泳坛最古老的世界纪录" },
    { time: "2:11.65", holder: "Lin Li", country: "CHN", date: "1992-07", meet: "1992年巴塞罗那奥运会", place: "巴塞罗那", note: "中国选手首次改写该项目世界纪录" },
    { time: "2:09.72", holder: "Wu Yanyan", country: "CHN", date: "1997-10", meet: "中国全国运动会", place: "上海", note: "一举提高近2秒，此后保持11年" },
    { time: "2:08.45", holder: "Stephanie Rice", country: "AUS", date: "2008-08", meet: "2008年北京奥运会", place: "北京" },
    { time: "2:06.15", holder: "Ariana Kukors", country: "USA", date: "2009-07", meet: "世界锦标赛", place: "罗马", note: "快速泳衣时代的产物" },
    { time: "2:06.12", holder: "Katinka Hosszú", country: "HUN", date: "2015-08", meet: "世界锦标赛", place: "喀山", note: "此后保持近十年" },
    { time: "2:05.70", holder: "Summer McIntosh", country: "CAN", date: "2025-06-09", meet: "加拿大游泳选拔赛", place: "维多利亚", note: "现世界纪录" },
  ],

  asianRecord: {
    time: "2:06.10", holder: "Yu Zidi", country: "CHN",
    date: "2026-09-21", meet: "2026年爱知·名古屋亚运会", place: "名古屋",
    note: "同时为亚运会赛会纪录与世界青年纪录，历史第二快；打破叶诗文保持14年的亚洲纪录（2:07.57）",
  },
  chineseRecord: {
    time: "2:06.10", holder: "Yu Zidi", country: "CHN",
    date: "2026-09-21", meet: "2026年爱知·名古屋亚运会", place: "名古屋",
    note: "原纪录为叶诗文 2:07.57（2012年伦敦奥运会）",
  },

  top10: [
    { time: "2:05.70", holder: "Summer McIntosh", country: "CAN", date: "2025-06-09", meet: "加拿大游泳选拔赛", place: "维多利亚", wr: true },
    { time: "2:06.10", holder: "Yu Zidi", country: "CHN", date: "2026-09-21", meet: "名古屋亚运会", place: "名古屋", note: "亚洲纪录、世界青年纪录，历史第二快" },
    { time: "2:06.12", holder: "Katinka Hosszú", country: "HUN", date: "2015-08", meet: "喀山世锦赛" },
    { time: "2:06.15", holder: "Ariana Kukors", country: "USA", date: "2009-07", meet: "罗马世锦赛" },
    { time: "2:06.56", holder: "Summer McIntosh", country: "CAN", date: "2024-08", meet: "巴黎奥运会", note: "奥运纪录" },
    { time: "2:06.69", holder: "Summer McIntosh", country: "CAN", date: "2025-08", meet: "新加坡世锦赛" },
    { time: "2:06.79", holder: "Kate Douglass", country: "USA", date: "2023-07-24", meet: "福冈世锦赛" },
    { time: "2:07.05", holder: "Kate Douglass", country: "USA", date: "2024-02", meet: "多哈世锦赛" },
    { time: "2:07.45", holder: "Yu Yiting", country: "CHN", date: "2026-08", meet: "泛太平洋锦标赛", place: "尔湾", note: "赛会纪录" },
    { time: "2:07.57", holder: "Ye Shiwen", country: "CHN", date: "2012-07", meet: "伦敦奥运会", note: "奥运纪录，此后14年为亚洲纪录" },
  ],
  top10Note:
    "第11位以后的2:07区间（麦基翁、A.沃尔什等）及霍苏2016里约奥运夺冠成绩等仅获单一来源的成绩，待双源核实后补入，宁缺毋滥。",

  history: [
    {
      heading: "东德余晖与林莉的惊鸿一瞥",
      paragraphs: [
        "1981年，东德的乌特·格韦尼希游出2:11.73，这个纪录在此后11年里无人能动，被打破前已是当时泳坛最古老的世界纪录。女子200混在奥运赛场也几经沉浮：1968年设立、1980年莫斯科一度被取消，直到1984年才回归。",
        "1992年巴塞罗那，林莉在400混不敌艾盖尔塞吉之后，转身在200混决赛游出2:11.65，为中国游泳首次改写这个项目的世界纪录。1997年八运会，吴艳艳把纪录一下子推进到2:09.72——这个成绩又站了11年，直到2008年北京奥运会的泳池里才被澳大利亚的斯蒂芬妮·莱斯以2:08.45改写。",
      ],
    },
    {
      heading: "快速泳衣、库科尔斯与霍苏的十年",
      paragraphs: [
        "2009年罗马世锦赛，快速泳衣把成绩压缩到极限：美国的阿丽亚娜·库科尔斯游出2:06.15。这个数字高悬六年后，匈牙利的卡廷卡·霍苏在2015年喀山以2:06.12将其抹去，随后在2013-2019年间完成世锦赛四连冠，并在2016年里约加冕奥运冠军。",
        "霍苏的2:06.12一直保持到2025年——将近十年。这期间没人能突破2:06大关，直到一个叫萨默·麦金托什的加拿大女孩开始改写一切。",
      ],
    },
    {
      heading: "叶诗文与她的后辈们",
      paragraphs: [
        "2011年上海，15岁的叶诗文以2:08.90成为该项目最年轻的世锦赛冠军；2012年伦敦，她又以2:07.57夺得奥运金牌——虽是奥运纪录而非世界纪录（当时WR仍是库科尔斯的2:06.15），但2:07.57此后14年一直是亚洲纪录与中国纪录。",
        "2025年6月，麦金托什在维多利亚游出2:05.70终结霍苏时代；2026年泛太平洋锦标赛，余依婷又以2:07.45的赛会纪录击败麦金托什夺冠。2026年9月21日名古屋亚运决赛，13岁的于子迪游出2:06.10——历史第二快、新的亚洲与世界青年纪录，余依婷摘银。中国200混的接力棒，在同一个领奖台上完成了交接。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：World record progression 200 metres individual medley",
      url: "https://en.wikipedia.org/wiki/World_record_progression_200_metres_individual_medley",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
    {
      label: "Swimming World：麦金托什 2:05.70（2025-06-09）",
      url: "https://www.swimmingworldmagazine.com/news/summer-mcintosh-is-first-swimmer-since-sarah-sjostrom-to-own-four-world-records-simultaneously",
    },
    {
      label: "Al Jazeera：Who is Yu Zidi, China's 13-year-old swimming sensation?",
      url: "https://www.aljazeera.com",
    },
    {
      label: "Olympics.com：2026泛太平洋锦标赛 余依婷胜麦金托什夺200混",
      url: "https://www.olympics.com",
    },
  ],
};
