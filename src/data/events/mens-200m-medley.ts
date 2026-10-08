import type { SwimEvent } from "@/lib/types";

/**
 * 男子 200 米个人混合泳（长池）世界纪录演进
 * 数据来源：Wikipedia "World record progression 200 metres individual medley"
 *          Wikipedia "200 metre individual medley"（历史最快成绩榜，截至 2025 年 12 月）
 * 数据截至：2026年10月
 */
export const mens200mMedley: SwimEvent = {
  slug: "mens-200m-medley",
  stroke: "medley",
  distance: 200,
  gender: "men",
  course: "LCM",
  name: "男子 200 米个人混合泳",
  summary:
    "四种泳姿的终极全能赛。1956年哈里森的2:30.7起步，经拉尔松、达尔尼、西耶维宁的接力，菲尔普斯2008年游出1:54.23，罗切特的1:54.00站了14年——直到2025年新加坡的夜晚，马尔尚在半决赛游出1:52.69，人类首次闯进1:53。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "2:30.7", holder: "George Harrison", country: "USA", date: "1956-08-24", place: "洛杉矶", note: "首个被承认的世界纪录" },
    { time: "2:29.1", holder: "Frank Brunnell", country: "USA", date: "1958-07-19", place: "阿克伦" },
    { time: "2:26.2", holder: "Gary Heinrich", country: "USA", date: "1959-06-27", place: "洛杉矶" },
    { time: "2:24.7", holder: "Lance Larson", country: "USA", date: "1959-07-11", place: "圣克拉拉" },
    { time: "2:22.2", holder: "John McGill", country: "USA", date: "1960-07-23", place: "托莱多" },
    { time: "2:22.1", holder: "Ted Stickles", country: "USA", date: "1960-07-23", place: "托莱多" },
    { time: "2:21.3", holder: "Ted Stickles", country: "USA", date: "1961-07-02", place: "芝加哥" },
    { time: "2:20.5", holder: "Ted Stickles", country: "USA", date: "1961-07-22", place: "凯霍加福尔斯" },
    { time: "2:19.6", holder: "Ted Stickles", country: "USA", date: "1961-08-19", meet: "男子NAAA锦标赛", place: "洛杉矶" },
    { time: "2:15.9", holder: "Ted Stickles", country: "USA", date: "1961-08-19", meet: "男子NAAA锦标赛", place: "洛杉矶", note: "同日连破，1961年一年四破世界纪录" },
    { time: "2:15.5", holder: "Dick Roth", country: "USA", date: "1964-08-02", meet: "美国全国锦标赛", place: "洛斯阿尔托斯" },
    { time: "2:14.9", holder: "Dick Roth", country: "USA", date: "1964-08-15", place: "莫米" },
    { time: "2:13.1", holder: "Greg Buckingham", country: "USA", date: "1966-07-24", place: "洛斯阿尔托斯" },
    { time: "2:12.4", holder: "Greg Buckingham", country: "USA", date: "1966-08-21", place: "林肯" },
    { time: "2:11.3", holder: "Greg Buckingham", country: "USA", date: "1967-08-23", place: "奥克帕克" },
    { time: "2:10.6", holder: "Charlie Hickcox", country: "USA", date: "1968-08-31", meet: "美国奥运选拔赛", place: "洛杉矶" },
    { time: "2:09.6", holder: "Gary Hall Sr.", country: "USA", date: "1969-08-17", meet: "AAU锦标赛", place: "路易斯维尔" },
    { time: "2:09.5", holder: "Gary Hall Sr.", country: "USA", date: "1970-08-23", meet: "AAU锦标赛", place: "洛杉矶" },
    { time: "2:09.3", holder: "Gunnar Larsson", country: "SWE", date: "1970-09-12", meet: "欧洲锦标赛", place: "巴塞罗那" },
    { time: "2:09.30", holder: "Gary Hall Sr.", country: "USA", date: "1972-08-02", meet: "美国奥运选拔赛", place: "芝加哥" },
    { time: "2:07.17", holder: "Gunnar Larsson", country: "SWE", date: "1972-09-03", meet: "1972年慕尼黑奥运会", place: "慕尼黑", note: "慕尼黑双料混合泳金牌" },
    { time: "2:06.32", holder: "David Wilkie", country: "GBR", date: "1974-08-24", meet: "欧洲锦标赛", place: "维也纳" },
    { time: "2:06.32", holder: "Steve Furniss", country: "USA", date: "1974-09-01", meet: "美国与东德对抗赛", place: "康科德", flags: ["eq"] },
    { time: "2:06.08", holder: "Bruce Furniss", country: "USA", date: "1975-08-23", meet: "AAU锦标赛", place: "堪萨斯城" },
    { time: "2:05.31", holder: "Graham Smith", country: "CAN", date: "1977-08-04", place: "蒙特利尔" },
    { time: "2:05.24", holder: "Oleksandr Sydorenko", country: "URS", date: "1978-07-09", meet: "苏联锦标赛", place: "莫斯科" },
    { time: "2:04.39", holder: "Steve Lundquist", country: "USA", date: "1978-08-02", meet: "美国全国锦标赛", place: "伍德兰兹" },
    { time: "2:03.56", holder: "Graham Smith", country: "CAN", date: "1978-08-24", meet: "世界锦标赛", place: "西柏林" },
    { time: "2:03.29", holder: "Jesse Vassallo", country: "USA", date: "1979-07-06", meet: "泛美运动会", place: "圣胡安" },
    { time: "2:03.24", holder: "Bill Barrett", country: "USA", date: "1980-08-01", place: "尔湾" },
    { time: "2:03.01", holder: "Jeremy Reingold", country: "RSA", date: "1980-09-26", place: "开普敦" },
    { time: "2:02.78", holder: "Alex Baumann", country: "CAN", date: "1981-07-29", place: "海德堡" },
    { time: "2:02.25", holder: "Alex Baumann", country: "CAN", date: "1982-10-04", meet: "英联邦运动会", place: "布里斯班" },
    { time: "2:01.42", holder: "Alex Baumann", country: "CAN", date: "1984-08-04", meet: "1984年洛杉矶奥运会", place: "洛杉矶" },
    { time: "2:00.56", holder: "Tamás Darnyi", country: "HUN", date: "1987-08-23", meet: "欧洲锦标赛", place: "斯特拉斯堡" },
    { time: "2:00.17", holder: "Tamás Darnyi", country: "HUN", date: "1988-09-25", meet: "1988年汉城奥运会", place: "汉城" },
    { time: "2:00.11", holder: "David Wharton", country: "USA", date: "1989-08-20", meet: "泛太平洋锦标赛", place: "东京" },
    { time: "1:59.36", holder: "Tamás Darnyi", country: "HUN", date: "1991-01-13", meet: "世界锦标赛", place: "珀斯", note: "人类首次突破2分钟" },
    { time: "1:58.16", holder: "Jani Sievinen", country: "FIN", date: "1994-09-11", meet: "世界锦标赛", place: "罗马", note: "保持9年" },
    { time: "1:57.94", holder: "Michael Phelps", country: "USA", date: "2003-06-29", meet: "圣克拉拉邀请赛", place: "圣克拉拉" },
    { time: "1:57.52", holder: "Michael Phelps", country: "USA", date: "2003-07-24", meet: "世界锦标赛", place: "巴塞罗那", flags: ["sf"] },
    { time: "1:56.04", holder: "Michael Phelps", country: "USA", date: "2003-07-25", meet: "世界锦标赛", place: "巴塞罗那" },
    { time: "1:55.94", holder: "Michael Phelps", country: "USA", date: "2003-08-09", meet: "美国全国锦标赛", place: "科利奇帕克" },
    { time: "1:55.84", holder: "Michael Phelps", country: "USA", date: "2006-08-20", meet: "泛太平洋锦标赛", place: "维多利亚" },
    { time: "1:54.98", holder: "Michael Phelps", country: "USA", date: "2007-03-29", meet: "世界锦标赛", place: "墨尔本" },
    { time: "1:54.80", holder: "Michael Phelps", country: "USA", date: "2008-07-04", meet: "美国奥运选拔赛", place: "奥马哈" },
    { time: "1:54.23", holder: "Michael Phelps", country: "USA", date: "2008-08-15", meet: "2008年北京奥运会", place: "北京" },
    { time: "1:54.10", holder: "Ryan Lochte", country: "USA", date: "2009-07-30", meet: "世界锦标赛", place: "罗马" },
    { time: "1:54.00", holder: "Ryan Lochte", country: "USA", date: "2011-07-28", meet: "世界锦标赛", place: "上海", note: "保持14年" },
    { time: "1:52.69", holder: "Léon Marchand", country: "FRA", date: "2025-07-30", meet: "世界锦标赛", place: "新加坡", flags: ["sf"], note: "现世界纪录；半决赛游出，次日决赛以1:53.68夺冠" },
  ],

  asianRecord: {
    time: "1:54.62", holder: "Wang Shun", country: "CHN",
    date: "2023-09-24", meet: "2022年杭州亚运会（2023年举行）", place: "杭州",
    note: "此前亚洲纪录为汪顺本人2021年东京奥运夺冠的1:55.00",
  },
  chineseRecord: {
    time: "1:54.62", holder: "Wang Shun", country: "CHN",
    date: "2023-09-24", meet: "2022年杭州亚运会（2023年举行）", place: "杭州",
    note: "即现行亚洲纪录",
  },

  top10: [
    { time: "1:52.69", holder: "Léon Marchand", country: "FRA", date: "2025-07-30", meet: "2025年新加坡世锦赛", flags: ["sf"], wr: true },
    { time: "1:53.68", holder: "Léon Marchand", country: "FRA", date: "2025-07-31", meet: "2025年新加坡世锦赛" },
    { time: "1:54.00", holder: "Ryan Lochte", country: "USA", date: "2011-07-28", meet: "2011年上海世锦赛" },
    { time: "1:54.06", holder: "Léon Marchand", country: "FRA", date: "2024-08-02", meet: "2024年巴黎奥运会" },
    { time: "1:54.10", holder: "Ryan Lochte", country: "USA", date: "2009-07-30", meet: "2009年罗马世锦赛" },
    { time: "1:54.16", holder: "Michael Phelps", country: "USA", date: "2011-07-28", meet: "2011年上海世锦赛" },
    { time: "1:54.23", holder: "Michael Phelps", country: "USA", date: "2008-08-15", meet: "2008年北京奥运会" },
    { time: "1:54.27", holder: "Michael Phelps", country: "USA", date: "2012-08-02", meet: "2012年伦敦奥运会" },
    { time: "1:54.30", holder: "Shaine Casas", country: "USA", date: "2025-07-31", meet: "2025年新加坡世锦赛" },
    { time: "1:54.43", holder: "Ryan Lochte", country: "USA", date: "2010-08-21", meet: "2010年泛太平洋锦标赛" },
  ],
  top10Note:
    "历史仅有的十次游进1:54.5的成绩（快照截至2025年12月）：马尔尚3次、罗切特3次、菲尔普斯3次、卡萨斯1次。汪顺的亚洲纪录1:54.62列第十一位。2026年8月泛太平洋锦标赛冠军松下的1:56.02未及榜内门槛；2026年巴黎欧锦赛、名古屋亚运会成绩未经核实，暂未纳入。",

  history: [
    {
      heading: "全能之王的试金石",
      paragraphs: [
        "混合泳要求蝶、仰、蛙、自四种泳姿各游四分之一距离，任何一环的短板都会被无情放大。国际泳联1956年起承认男子200混世界纪录——美国人乔治·哈里森的2:30.7是这条时间线的起点，此后十四年纪录全部写在美国人名下：特德·斯蒂克尔斯1961年一年之内四次刷新，迪克·罗斯在1964年东京奥运会前把成绩推到2:14.9。",
        "1970年瑞典人贡纳尔·拉尔松第一次抢走纪录，并在1972年慕尼黑以2:07.17登顶奥运——那只是200混在奥运会的第二次亮相。此后该项目一度被移出奥运赛程，1976与1980两届均未设项，直到1984年洛杉矶才回归，加拿大人亚历克斯·鲍曼以2:01.42的世界纪录宣告王者归来。",
      ],
    },
    {
      heading: "达尔尼王朝与西耶维宁的惊鸿",
      paragraphs: [
        "1980年代属于匈牙利的塔马什·达尔尼：1987年斯特拉斯堡2:00.56首破2:01，1988年汉城2:00.17奥运夺金，加上1986与1991两届世锦赛，他几乎垄断了整个时代。1991年珀斯，他游出1:59.36，成为人类首位闯进2分钟的人；1994年罗马，芬兰人亚尼·西耶维宁再把纪录大幅推进到1:58.16。",
        "这纪录一站就是九年。2003年，18岁的迈克尔·菲尔普斯在巴塞罗那连破1:57.52（半决赛）与1:56.04，随后2007年墨尔本1:54.98、2008年北京1:54.23步步紧逼。瑞安·罗切特2009年罗马（1:54.10）与2011年上海（1:54.00）两次接棒，1:54.00此后保持了14年。",
      ],
    },
    {
      heading: "汪顺、马尔尚与1:52时代",
      paragraphs: [
        "2004至2016年，菲尔普斯完成奥运四连冠；2016年里约1:54.66的谢幕演出之后，混合泳的王座悬置多年。2021年东京，中国选手汪顺以1:55.00夺冠，成为首位登上奥运混合泳最高领奖台的中国男选手；2023年杭州亚运会，他又把亚洲纪录改写为1:54.62。",
        "真正的接班人是法国人莱昂·马尔尚：2022年布达佩斯双冠起步，2023年福冈1:54.82（欧洲纪录）成为历史上第三个游进1:55的人，2024年巴黎1:54.06奥运称王。2025年7月30日新加坡，他在半决赛游出1:52.69——人类首次进入1:53，次日决赛以1:53.68夺冠，这是仅次于他本人半决赛的历史第二快成绩。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：World record progression 200 metres individual medley",
      url: "https://en.wikipedia.org/wiki/World_record_progression_200_metres_individual_medley",
    },
    {
      label: "Wikipedia：200 metre individual medley（历史最快成绩榜）",
      url: "https://en.wikipedia.org/wiki/200_metre_individual_medley",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
  ],
};
