import type { SwimEvent } from "@/lib/types";

/**
 * 女子 400 米个人混合泳（长池）世界纪录演进
 * 数据来源：Wikipedia "400 metres individual medley"、Olympedia、SwimSwam、
 * Swimming World、CBC、新华社等（见 sources）
 * 数据截至：2026年10月
 *
 * 核实说明（宁缺毋滥）：
 * - 纪录链从 1980 年施耐德起（此前为考尔金斯 4:40.83，年代未能核实，未收）；
 *   1982 年 4:36.10 的具体赛事地点未能核实，仅注年份。
 * - 2023 年福冈世锦赛 400 混麦金托什的夺冠成绩未能检索核实，未入 top10。
 * - 2024 年巴黎奥运会麦金托什夺冠的精确成绩未能双源核实，top10 暂不收。
 */
export const womens400mMedley: SwimEvent = {
  slug: "womens-400m-medley",
  stroke: "medley",
  distance: 400,
  gender: "women",
  course: "LCM",
  name: "女子 400 米个人混合泳",
  summary:
    "施耐德时代的4:36起步，叶诗文16岁在伦敦写下4:28.43，麦金托什把它带到4:23.65——而13岁的于子迪在名古屋游出4:28.56，距亚洲纪录只差0.13秒。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "4:39.96", holder: "Petra Schneider", country: "GDR", date: "1980-03", place: "列宁格勒" },
    { time: "4:38.44", holder: "Petra Schneider", country: "GDR", date: "1980-05", place: "马格德堡" },
    { time: "4:36.29", holder: "Petra Schneider", country: "GDR", date: "1980-07", meet: "1980年莫斯科奥运会", place: "莫斯科", note: "决赛领先第二名10秒以上" },
    { time: "4:36.10", holder: "Petra Schneider", country: "GDR", date: "1982", note: "保持15年，直至1997年" },
    { time: "4:34.79", holder: "Chen Yan", country: "CHN", date: "1997-10", meet: "中国全国运动会", place: "上海" },
    { time: "4:33.59", holder: "Yana Klochkova", country: "UKR", date: "2000-09", meet: "2000年悉尼奥运会", place: "悉尼" },
    { time: "4:29.45", holder: "Stephanie Rice", country: "AUS", date: "2008-08", meet: "2008年北京奥运会", place: "北京", note: "首位突破4:30大关的女选手" },
    { time: "4:28.43", holder: "Ye Shiwen", country: "CHN", date: "2012-07", meet: "2012年伦敦奥运会", place: "伦敦", note: "16岁，领先近3秒夺金" },
    { time: "4:26.36", holder: "Katinka Hosszú", country: "HUN", date: "2016-08", meet: "2016年里约奥运会", place: "里约热内卢" },
    { time: "4:25.87", holder: "Summer McIntosh", country: "CAN", date: "2023-04", meet: "加拿大游泳选拔赛", note: "首次打破霍苏的世界纪录" },
    { time: "4:24.38", holder: "Summer McIntosh", country: "CAN", date: "2024-05", meet: "加拿大奥运选拔赛", place: "蒙特利尔", note: "巴黎奥运周期再自破" },
    { time: "4:23.65", holder: "Summer McIntosh", country: "CAN", date: "2025-06-11", meet: "加拿大游泳选拔赛", place: "维多利亚", note: "现世界纪录，三度自破" },
  ],

  asianRecord: {
    time: "4:28.43", holder: "Ye Shiwen", country: "CHN",
    date: "2012-07", meet: "2012年伦敦奥运会", place: "伦敦", wr: true,
    note: "至今仍是亚洲纪录；于子迪2026年亚运4:28.56为亚洲历史第二快",
  },
  chineseRecord: {
    time: "4:28.43", holder: "Ye Shiwen", country: "CHN",
    date: "2012-07", meet: "2012年伦敦奥运会", place: "伦敦",
    note: "于子迪2026年9月游出4:28.56，仅差0.13秒",
  },

  top10: [
    { time: "4:23.65", holder: "Summer McIntosh", country: "CAN", date: "2025-06-11", meet: "加拿大游泳选拔赛", place: "维多利亚", wr: true },
    { time: "4:24.38", holder: "Summer McIntosh", country: "CAN", date: "2024-05", meet: "加拿大奥运选拔赛", place: "蒙特利尔" },
    { time: "4:25.78", holder: "Summer McIntosh", country: "CAN", date: "2025-08-03", meet: "新加坡世锦赛", note: "赛会纪录" },
    { time: "4:25.87", holder: "Summer McIntosh", country: "CAN", date: "2023-04", meet: "加拿大游泳选拔赛" },
    { time: "4:26.36", holder: "Katinka Hosszú", country: "HUN", date: "2016-08", meet: "里约奥运会" },
    { time: "4:28.43", holder: "Ye Shiwen", country: "CHN", date: "2012-07", meet: "伦敦奥运会", note: "亚洲纪录" },
    { time: "4:28.56", holder: "Yu Zidi", country: "CHN", date: "2026-09-23", meet: "名古屋亚运会", note: "亚洲历史第二快" },
    { time: "4:29.33", holder: "Katinka Hosszú", country: "HUN", date: "2017-07", meet: "布达佩斯世锦赛" },
    { time: "4:29.45", holder: "Stephanie Rice", country: "AUS", date: "2008-08", meet: "北京奥运会" },
    { time: "4:30.39", holder: "Katinka Hosszú", country: "HUN", date: "2015-08", meet: "喀山世锦赛" },
  ],
  top10Note:
    "麦金托什2024巴黎奥运夺冠成绩、2023福冈世锦赛成绩及霍苏2009罗马世锦赛成绩（约4:30.31，单一来源）等未双源核实，待补；宁缺毋滥。",

  history: [
    {
      heading: "施耐德的4:36与东德阴影",
      paragraphs: [
        "1980年，东德的佩特拉·施耐德一个赛季内三度刷新世界纪录——3月列宁格勒4:39.96、5月马格德堡4:38.44、7月莫斯科奥运会4:36.29，决赛领先第二名英国人沙伦·戴维斯10秒开外；1982年她把纪录定格在4:36.10，此后15年无人接近。",
        "两德统一后，东德系统性国家兴奋剂计划曝光，施耐德本人亦承认涉及其中，戴维斯为银牌升级的申诉至今未果。成绩留在表上，争议留在史册里。1997年八运会，陈妍（Chen Yan）的4:34.79才终于翻开新页；2000年悉尼，乌克兰的亚娜·克莱奇科娃再推进到4:33.59。",
      ],
    },
    {
      heading: "莱斯、叶诗文与4:30大关",
      paragraphs: [
        "2008年北京，斯蒂芬妮·莱斯以4:29.45成为首位游进4:30的女选手。四年后的伦敦，16岁的叶诗文以4:28.43夺冠并刷新世界纪录——她在最后100米自由泳冲出58.68，比同场男子组罗切特的收官段仅慢0.03秒，引发轩然大波，但她从未被认定任何违规。",
        "4:28.43至今仍是亚洲纪录与中国纪录。十四年后，最接近它的不是别人，而是一个13岁的中国后辈。",
      ],
    },
    {
      heading: "麦金托什时代与于子迪",
      paragraphs: [
        "2016年里约，霍苏以4:26.36改写叶诗文的纪录。2023年4月起，萨默·麦金托什开始了一个人的冲刺：4:25.87、4:24.38、4:23.65，三年内三度自破；2025年新加坡世锦赛以4:25.78的赛会纪录夺第四金，2026年8月泛太平洋锦标赛又以4:28.01领游全程夺冠。",
        "2026年9月23日名古屋亚运决赛，13岁的于子迪一路领先游出4:28.56——赛会纪录、世界历史第五快，距叶诗文保持14年的亚洲纪录只差0.13秒，队友柯雯曦摘银。中国400混的下一个时代，可能已经在名古屋开始。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：400 metres individual medley（世界纪录演进）",
      url: "https://en.wikipedia.org/wiki/400_metres_individual_medley",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
    {
      label: "SwimSwam：Summer McIntosh Posts 4:23.65 400 IM to Break Her Own（2025-06-11）",
      url: "https://swimswam.com",
    },
    {
      label: "新华社：于子迪获名古屋亚运会女子400米个人混合泳金牌（2026-09-23）",
      url: "http://www.xinhuanet.com",
    },
    {
      label: "CBC：麦金托什破泛太赛会纪录夺金（2026-08-13）",
      url: "https://www.cbc.ca",
    },
  ],
};
