import type { SwimEvent } from "@/lib/types";

/**
 * 女子 100 米蝶泳（长池）世界纪录演进
 * 纪录演进与历史成绩榜来源：Wikipedia "World record progression 100 metres butterfly"
 * 与 "100 metres butterfly"（历史成绩表，截至 2025 年 12 月）整表直读；
 * 54.33（2026-05-02，劳德代尔堡公开赛）经 Swimming World / Olympics.com / Yahoo 多源核实。
 *
 * 已知缺口与说明：
 * - 历史前十榜以维基百科成绩表（截至 2025 年 12 月）为基础、加入 2026 年 54.33；
 *   2026 年泛太决赛沃尔什夺冠成绩未获双源核实（检索片段同时出现 54.82 与约 55.15 两种说法），
 *   按「矛盾不写」原则未列入前十榜。
 * - 张雨霏 55.62（亚洲纪录）按成绩表列历史第 15 位，未进前十。
 * 数据截至：2026年10月
 */
export const womens100mButterfly: SwimEvent = {
  slug: "womens-100m-butterfly",
  stroke: "butterfly",
  distance: 100,
  gender: "women",
  course: "LCM",
  name: "女子 100 米蝶泳",
  summary:
    "从1957年荷兰人福尔拜伊的1:10.5起步，经东德机器、米格的57.93与舍斯特伦的55.48，如今格雷琴·沃尔什正把这项纪录以肉眼可见的速度改写到54秒边缘。钱红的巴塞罗那金牌与张雨霏的55.62亚洲纪录，是中国泳军刻在这条时间线上的印记。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "1:10.5", holder: "Atie Voorbij", country: "NED", date: "1957-08-04", place: "莱嫩", note: "首个被承认的世界纪录" },
    { time: "1:09.6", holder: "Nancy Ramey", country: "USA", date: "1958-06-28", place: "洛杉矶" },
    { time: "1:09.1", holder: "Nancy Ramey", country: "USA", date: "1959-09-02", place: "芝加哥" },
    { time: "1:08.9", holder: "Janice Andrew", country: "AUS", date: "1961-04-02", place: "东京" },
    { time: "1:08.8", holder: "Mary Stewart", country: "CAN", date: "1961-08-12", place: "费城" },
    { time: "1:08.2", holder: "Susan Doerr", country: "USA", date: "1961-08-12", place: "费城" },
    { time: "1:07.3", holder: "Mary Stewart", country: "CAN", date: "1962-07-28", place: "温哥华" },
    { time: "1:06.5", holder: "Kathy Ellis", country: "USA", date: "1963-08-16", place: "海波因特" },
    { time: "1:06.1", holder: "Ada Kok", country: "NED", date: "1963-09-01", place: "苏斯特代恩" },
    { time: "1:05.1", holder: "Ada Kok", country: "NED", date: "1964-05-30", place: "布莱克浦尔" },
    { time: "1:04.7", holder: "Sharon Stouder", country: "USA", date: "1964-10-16", meet: "东京奥运会", place: "东京" },
    { time: "1:04.1", holder: "Alice Jones", country: "USA", date: "1970-08-20", meet: "美国全国锦标赛", place: "洛杉矶" },
    { time: "1:03.9", holder: "Mayumi Aoki", country: "JPN", date: "1972-07-21", place: "东京" },
    { time: "1:03.8", holder: "Andrea Gyarmati", country: "HUN", date: "1972-08-31", meet: "慕尼黑奥运会", place: "慕尼黑", flags: ["sf"] },
    { time: "1:03.34", holder: "Mayumi Aoki", country: "JPN", date: "1972-09-01", meet: "慕尼黑奥运会", place: "慕尼黑" },
    { time: "1:03.05", holder: "Kornelia Ender", country: "GDR", date: "1973-04-14", place: "东柏林" },
    { time: "1:02.31", holder: "Kornelia Ender", country: "GDR", date: "1973-07-14", meet: "东德锦标赛", place: "东柏林" },
    { time: "1:02.09", holder: "Rosemarie Kother", country: "GDR", date: "1974-08-21", meet: "欧洲锦标赛", place: "维也纳", flags: ["h"] },
    { time: "1:01.99", holder: "Rosemarie Kother", country: "GDR", date: "1974-08-22", meet: "欧洲锦标赛", place: "维也纳" },
    { time: "1:01.88", holder: "Rosemarie Kother", country: "GDR", date: "1974-09-01", meet: "美国与东德对抗赛", place: "康科德" },
    { time: "1:01.33", holder: "Kornelia Ender", country: "GDR", date: "1975-06-09", meet: "东德锦标赛", place: "维滕贝格" },
    { time: "1:01.24", holder: "Kornelia Ender", country: "GDR", date: "1975-07-24", meet: "世界锦标赛", place: "卡利" },
    { time: "1:00.13", holder: "Kornelia Ender", country: "GDR", date: "1976-06-04", meet: "东德锦标赛", place: "东柏林" },
    { time: "1:00.13", holder: "Kornelia Ender", country: "GDR", date: "1976-07-22", meet: "蒙特利尔奥运会", place: "蒙特利尔", flags: ["eq"] },
    { time: "59.78", holder: "Christiane Knacke", country: "GDR", date: "1977-08-28", meet: "美国与东德对抗赛", place: "东柏林", note: "首位突破1分钟大关的女选手" },
    { time: "59.46", holder: "Andrea Pollack", country: "GDR", date: "1978-07-03", meet: "东德锦标赛", place: "东柏林" },
    { time: "59.26", holder: "Mary T. Meagher", country: "USA", date: "1980-04-11", meet: "美国春季全国锦标赛", place: "奥斯汀" },
    { time: "57.93", holder: "Mary T. Meagher", country: "USA", date: "1981-08-16", meet: "美国全国锦标赛", place: "布朗迪尔", note: "保持18年，直至1999年才被汤普森打破" },
    { time: "57.88", holder: "Jenny Thompson", country: "USA", date: "1999-08-23", meet: "泛太平洋锦标赛", place: "悉尼" },
    { time: "56.69", holder: "Inge de Bruijn", country: "NED", date: "2000-05-27", meet: "Super Speedo大奖赛", place: "谢菲尔德" },
    { time: "56.64", holder: "Inge de Bruijn", country: "NED", date: "2000-07-22", meet: "太平洋西北地区锦标赛", place: "费德勒尔韦" },
    { time: "56.61", holder: "Inge de Bruijn", country: "NED", date: "2000-09-17", meet: "悉尼奥运会", place: "悉尼" },
    { time: "56.44", holder: "Sarah Sjöström", country: "SWE", date: "2009-07-26", meet: "世界锦标赛", place: "罗马", flags: ["sf"] },
    { time: "56.06", holder: "Sarah Sjöström", country: "SWE", date: "2009-07-27", meet: "世界锦标赛", place: "罗马", note: "15岁的舍斯特伦首夺世界冠军" },
    { time: "55.98", holder: "Dana Vollmer", country: "USA", date: "2012-07-29", meet: "伦敦奥运会", place: "伦敦" },
    { time: "55.74", holder: "Sarah Sjöström", country: "SWE", date: "2015-08-02", meet: "世界锦标赛", place: "喀山", flags: ["sf"] },
    { time: "55.64", holder: "Sarah Sjöström", country: "SWE", date: "2015-08-03", meet: "世界锦标赛", place: "喀山" },
    { time: "55.48", holder: "Sarah Sjöström", country: "SWE", date: "2016-08-07", meet: "里约奥运会", place: "里约热内卢", note: "首位夺得奥运游泳金牌的瑞典女选手" },
    { time: "55.18", holder: "Gretchen Walsh", country: "USA", date: "2024-06-15", meet: "美国奥运选拔赛", place: "印第安纳波利斯", flags: ["sf"] },
    { time: "55.09", holder: "Gretchen Walsh", country: "USA", date: "2025-05-03", meet: "职业游泳系列赛", place: "劳德代尔堡", flags: ["h"], note: "首位游进55秒的女选手（预赛）" },
    { time: "54.60", holder: "Gretchen Walsh", country: "USA", date: "2025-05-03", meet: "职业游泳系列赛", place: "劳德代尔堡" },
    { time: "54.33", holder: "Gretchen Walsh", country: "USA", date: "2026-05-02", meet: "劳德代尔堡公开赛", place: "劳德代尔堡", note: "现世界纪录" },
  ],

  asianRecord: {
    time: "55.62", holder: "Zhang Yufei", country: "CHN",
    date: "2020-09-29", meet: "2020年全国游泳冠军赛", place: "青岛",
    note: "当时列历史第二快，至今保持",
  },
  chineseRecord: {
    time: "55.62", holder: "Zhang Yufei", country: "CHN",
    date: "2020-09-29", meet: "2020年全国游泳冠军赛", place: "青岛",
  },

  top10: [
    { time: "54.33", holder: "Gretchen Walsh", country: "USA", date: "2026-05-02", meet: "劳德代尔堡公开赛", place: "劳德代尔堡", wr: true },
    { time: "54.60", holder: "Gretchen Walsh", country: "USA", date: "2025-05-03", meet: "职业游泳系列赛", place: "劳德代尔堡" },
    { time: "54.73", holder: "Gretchen Walsh", country: "USA", date: "2025-07-28", meet: "2025年新加坡世锦赛", place: "新加坡", note: "赛会纪录，夺冠" },
    { time: "54.76", holder: "Gretchen Walsh", country: "USA", date: "2025-06-05", meet: "2025年美国全国锦标赛", place: "印第安纳波利斯" },
    { time: "55.09", holder: "Gretchen Walsh", country: "USA", date: "2025-05-03", meet: "职业游泳系列赛", place: "劳德代尔堡", flags: ["h"] },
    { time: "55.18", holder: "Gretchen Walsh", country: "USA", date: "2024-06-15", meet: "2024年美国奥运选拔赛", place: "印第安纳波利斯", flags: ["sf"] },
    { time: "55.29", holder: "Gretchen Walsh", country: "USA", date: "2025-06-05", meet: "2025年美国全国锦标赛", place: "印第安纳波利斯", flags: ["h"] },
    { time: "55.31", holder: "Gretchen Walsh", country: "USA", date: "2024-06-16", meet: "2024年美国奥运选拔赛", place: "印第安纳波利斯" },
    { time: "55.38", holder: "Gretchen Walsh", country: "USA", date: "2024-07-27", meet: "巴黎奥运会", place: "巴黎", flags: ["sf"] },
    { time: "55.48", holder: "Sarah Sjöström", country: "SWE", date: "2016-08-07", meet: "里约奥运会", place: "里约热内卢" },
  ],
  top10Note:
    "前十以「历史最快成绩」为口径（沃尔什一人占八席为真实面貌），基础为维基百科成绩表（截至2025年12月）加入2026年54.33；2026年泛太决赛成绩未双源核实，未列入。紧随其后的有赫斯克55.52、舍斯特伦55.53、麦克尼尔与赫斯克各55.59、张雨霏55.62（亚洲纪录）。",

  history: [
    {
      heading: "荷兰、美国与东德机器",
      paragraphs: [
        "1957年8月，荷兰的阿蒂·福尔拜伊在莱嫩游出1:10.5，成为女子百米蝶泳首个被承认的世界纪录。此后七年纪录在北美与荷兰之间辗转，1964年东京奥运会，美国的莎伦·斯托德在决赛游出1:04.7夺金，荷兰名将阿达·科克摘银；1972年，日本的青木麻由美先在东京游出1:03.9，又在慕尼黑奥运决赛以1:03.34刷新世界纪录夺金。",
        "1973年起，这张时间线被东德接管：恩德1975年世锦赛游出1:01.24，次年蒙特利尔奥运决赛平自己保持的1:00.13夺冠；1977年克纳克游出59.78，成为首位突破1分钟大关的女选手；波拉克1978年推进到59.46。这段垄断在两德统一后被系统性兴奋剂丑闻的阴影笼罩——成绩留在表上，争议留在史册里。",
      ],
    },
    {
      heading: "米格的18年、德布鲁因与快速泳衣",
      paragraphs: [
        "1981年8月，「蝴蝶夫人」玛丽·T·米格在布朗迪尔游出57.93，这个「提前了一个时代的成绩」保持了18年，直到1999年泛太锦标赛才被珍妮·汤普森的57.88刷新。次年，英格·德布鲁因在四个月内三破纪录，把成绩带到56.61——并在悉尼奥运决赛中以这一成绩登顶。",
        "2009年罗马，快速泳衣时代的最后疯狂：15岁的萨拉·舍斯特伦半决赛56.44、决赛56.06，两日内两破世界纪录，也宣告了一个天才的登场。",
      ],
    },
    {
      heading: "舍斯特伦王朝与沃尔什时刻",
      paragraphs: [
        "2012年伦敦，达娜·沃尔默以55.98成为该项目首位游进56秒的女选手；随后是舍斯特伦的王朝：2015年喀山55.64、2016年里约55.48，她成为首位夺得奥运游泳金牌的瑞典女选手。中国力量同样在这条线上留下刻度：1992年巴塞罗那，钱红以58.62打破奥运纪录夺金；2020年9月，张雨霏在全国冠军赛游出55.62刷新亚洲纪录，翌年东京以55.64惜败麦克尼尔摘银。",
        "2024年属于美国内战：沃尔什在选拔赛游出55.18，巴黎决赛却被赫斯克以0.04秒优势翻盘（55.59比55.63，张雨霏56.21摘铜）。此后沃尔什开启独走模式：2025年5月劳德代尔堡同日两破（预赛55.09、决赛54.60，史上首破55秒），新加坡世锦赛54.73夺冠；2026年5月2日又在劳德代尔堡公开赛把世界纪录改写为54.33，8月在尔湾泛太以赛会纪录夺金。54秒的大门，正在被反复叩响。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：World record progression 100 metres butterfly",
      url: "https://en.wikipedia.org/wiki/World_record_progression_100_metres_butterfly",
    },
    {
      label: "Wikipedia：100 metres butterfly（历史成绩表）",
      url: "https://en.wikipedia.org/wiki/100_metres_butterfly",
    },
    {
      label: "World Aquatics：沃尔什屡破100蝶世界纪录",
      url: "https://www.worldaquatics.com/news/4498174/swimming-world-record-gretchen-walsh-usa-keeps-setting-the-100m-butterfly-bar-higher",
    },
    {
      label: "Swimming World：Walsh Blasts World Record 54.33 at Fort Lauderdale Open",
      url: "https://www.swimmingworldmagazine.com/news/flash-gretchen-walsh-blasts-world-record-in-100-butterfly-goes-54-33-at-fort-lauderdale-open",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
  ],
};
