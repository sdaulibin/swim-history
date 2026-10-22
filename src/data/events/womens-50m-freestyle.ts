import type { SwimEvent } from "@/lib/types";

/**
 * 女子 50 米自由泳（长池）世界纪录演进
 * 数据来源：Wikipedia「50 metres freestyle」演进表（逐行核对）、
 * World Aquatics 官方纪录、各届世锦赛/奥运会官方成绩页
 * 数据截至：2026年10月
 *
 * 说明（宁缺毋滥）：
 *  - 演进从 1975 年恩德尔（26.99，接力第一棒）起完整收录；
 *  - 舍斯特伦 23.67（2017 布达佩斯半决赛）、23.61（2023 福冈半决赛）
 *    的具体场次已按官方成绩页核实（旧版曾按月份精度收录）；
 *  - 2026 年是该项目史上最疯狂的一年：道格拉斯与沃尔什在两个月内四次改写，
 *    最终由道格拉斯在泛太平洋锦标赛游出 23.19；
 *  - 亚洲纪录为刘湘 23.97（2021 全运会）。
 */
export const womens50mFreestyle: SwimEvent = {
  slug: "womens-50m-freestyle",
  stroke: "freestyle",
  distance: 50,
  gender: "women",
  course: "LCM",
  name: "女子 50 米自由泳",
  summary:
    "23.19——2026年8月15日，凯特·道格拉斯在泛太平洋锦标赛一天之内两破世界纪录，把舍斯特伦保持了十三年的王座彻底改写。而同一年，沃尔什在罗马也留下 23.55。女子五十米的极限，正以0.06秒为步长向前挪动。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "26.99", holder: "Kornelia Ender", country: "GDR", date: "1975-07-26", meet: "世界锦标赛", place: "卡利", flags: ["r"], note: "接力第一棒；女子50米首个世界纪录" },
    { time: "26.95", holder: "Johanna Malloy", country: "CAN", date: "1977-08-16", meet: "加拿大夏季运动会", place: "圣约翰斯" },
    { time: "26.74", holder: "Anne Jardin", country: "CAN", date: "1978-08-19", meet: "加拿大全国锦标赛", place: "怡陶碧谷" },
    { time: "26.61", holder: "Cynthia Woodhead", country: "USA", date: "1980-04-10", meet: "美国春季锦标赛", place: "奥斯汀", flags: ["h"] },
    { time: "26.53", holder: "Kelly Asplund", country: "USA", date: "1980-04-10", meet: "美国春季锦标赛", place: "奥斯汀", flags: ["h"] },
    { time: "26.32", holder: "Jill Sterkel", country: "USA", date: "1980-04-10", meet: "美国春季锦标赛", place: "奥斯汀", flags: ["h"] },
    { time: "25.96", holder: "Jill Sterkel", country: "USA", date: "1980-04-10", meet: "美国春季锦标赛", place: "奥斯汀", note: "一日之内三破纪录" },
    { time: "25.79", holder: "Jill Sterkel", country: "USA", date: "1981-04-03", meet: "长角邀请赛", place: "奥斯汀", flags: ["tt"] },
    { time: "25.69", holder: "Dara Torres", country: "USA", date: "1983-01-29", meet: "Speedo 国际赛", place: "阿默斯福特", flags: ["h"] },
    { time: "25.64", holder: "Annemarie Verstappen", country: "NED", date: "1983-07-09", meet: "荷兰全国锦标赛", place: "阿默斯福特" },
    { time: "25.62", holder: "Dara Torres", country: "USA", date: "1983-08-05", meet: "美国全国锦标赛", place: "克洛维斯" },
    { time: "25.50", holder: "Tamara Costache", country: "ROU", date: "1986-07-16", meet: "罗马尼亚全国锦标赛", place: "布加勒斯特", flags: ["h"] },
    { time: "25.34", holder: "Tamara Costache", country: "ROU", date: "1986-07-16", meet: "罗马尼亚全国锦标赛", place: "布加勒斯特" },
    { time: "25.31", holder: "Tamara Costache", country: "ROU", date: "1986-08-01", meet: "巴尔干运动会", place: "索菲亚" },
    { time: "25.28", holder: "Tamara Costache", country: "ROU", date: "1986-08-23", meet: "世界锦标赛", place: "马德里", note: "世锦赛夺冠兼破纪录" },
    { time: "24.98", holder: "Yang Wenyi", country: "CHN", date: "1988-04-11", meet: "亚洲游泳锦标赛", place: "广州", note: "亚洲选手首次改写该项目世界纪录" },
    { time: "24.79", holder: "Yang Wenyi", country: "CHN", date: "1992-07-31", meet: "奥运会", place: "巴塞罗那", note: "奥运会纪录" },
    { time: "24.51", holder: "Le Jingyi", country: "CHN", date: "1994-09-11", meet: "世界锦标赛", place: "罗马", note: "世锦赛夺冠兼破纪录" },
    { time: "24.48", holder: "Inge de Bruijn", country: "NED", date: "2000-06-04", meet: "荷兰全国锦标赛", place: "德拉赫滕" },
    { time: "24.39", holder: "Inge de Bruijn", country: "NED", date: "2000-06-10", meet: "若泽·芬克尔杯", place: "里约热内卢" },
    { time: "24.13", holder: "Inge de Bruijn", country: "NED", date: "2000-09-22", meet: "奥运会", place: "悉尼", flags: ["sf"], note: "悉尼半决赛改写；决赛夺冠" },
    { time: "24.09", holder: "Marleen Veldhuis", country: "NED", date: "2008-03-24", meet: "欧洲游泳锦标赛", place: "埃因霍温" },
    { time: "23.97", holder: "Libby Trickett", country: "AUS", date: "2008-03-29", meet: "澳大利亚奥运选拔赛", place: "悉尼" },
    { time: "23.96", holder: "Marleen Veldhuis", country: "NED", date: "2009-04-19", meet: "阿姆斯特丹游泳杯", place: "阿姆斯特丹" },
    { time: "23.73", holder: "Britta Steffen", country: "GER", date: "2009-08-02", meet: "世界锦标赛", place: "罗马", note: "快速泳衣时代遗产；世锦赛夺冠兼破纪录" },
    { time: "23.67", holder: "Sarah Sjöström", country: "SWE", date: "2017-07-29", meet: "世界锦标赛", place: "布达佩斯", flags: ["sf"] },
    { time: "23.61", holder: "Sarah Sjöström", country: "SWE", date: "2023-07-29", meet: "世界锦标赛", place: "福冈", flags: ["sf"], note: "保持三年、被视为难以撼动的23.61" },
    { time: "23.59", holder: "Kate Douglass", country: "USA", date: "2026-06-19", meet: "职业游泳系列赛", place: "印第安纳波利斯" },
    { time: "23.55", holder: "Gretchen Walsh", country: "USA", date: "2026-06-28", meet: "七丘杯", place: "罗马" },
    { time: "23.49", holder: "Kate Douglass", country: "USA", date: "2026-08-15", meet: "泛太平洋锦标赛", place: "欧文", flags: ["h"], note: "预赛改写，当日决赛再破" },
    { time: "23.19", holder: "Kate Douglass", country: "USA", date: "2026-08-15", meet: "泛太平洋锦标赛", place: "欧文", note: "现世界纪录——一天之内两破，把纪录推进 0.30 秒" },
  ],

  asianRecord: {
    time: "23.97", holder: "Liu Xiang", country: "CHN",
    date: "2021-09", meet: "全运会",
    note: "刘湘 2021 年全运会游出，与澳大利亚特里克特的 23.97 同一刻度；2026 名古屋亚运吴卿风 23.98 距之仅 0.01 秒",
  },
  chineseRecord: {
    time: "23.97", holder: "Liu Xiang", country: "CHN",
    date: "2021-09", meet: "全运会",
    note: "刘湘退役前的告别之作；吴卿风 2026 年 23.98 为第二快",
  },

  top10: [
    { time: "23.19", holder: "Kate Douglass", country: "USA", date: "2026-08-15", meet: "2026年泛太平洋锦标赛", wr: true, note: "现世界纪录" },
    { time: "23.49", holder: "Kate Douglass", country: "USA", date: "2026-08-15", meet: "2026年泛太平洋锦标赛（预赛）" },
    { time: "23.55", holder: "Gretchen Walsh", country: "USA", date: "2026-06-28", meet: "2026年七丘杯（罗马）" },
    { time: "23.59", holder: "Kate Douglass", country: "USA", date: "2026-06-19", meet: "2026年职业游泳系列赛" },
    { time: "23.61", holder: "Sarah Sjöström", country: "SWE", date: "2023-07-29", meet: "2023年福冈世锦赛（半决赛）", note: "旧世界纪录" },
    { time: "23.62", holder: "Sarah Sjöström", country: "SWE", date: "2023-07-30", meet: "2023年福冈世锦赛" },
    { time: "23.67", holder: "Sarah Sjöström", country: "SWE", date: "2017-07-29", meet: "2017年布达佩斯世锦赛（半决赛）" },
    { time: "23.69", holder: "Sarah Sjöström", country: "SWE", date: "2017-07-30", meet: "2017年布达佩斯世锦赛" },
    { time: "23.71", holder: "Sarah Sjöström", country: "SWE", date: "2024-08-04", meet: "2024年巴黎奥运会", note: "30岁奥运加冕" },
    { time: "23.73", holder: "Britta Steffen", country: "GER", date: "2009-08-02", meet: "2009年罗马世锦赛" },
  ],
  top10Note:
    "前十门槛 23.73，舍斯特伦一人独占五席、道格拉斯三席——2026 年两个月内，这个榜单被美国人重写了四次。亚洲与中国的最好成绩仍是刘湘的 23.97（2021 全运会）。",

  history: [
    {
      heading: "从恩德尔的接力棒开始",
      paragraphs: [
        "女子 50 米自由泳的世界纪录，第一条来自 1975 年卡利世锦赛的接力第一棒——东德 Kornelia Ender 的 26.99。此后十年是美加的试验田，斯特克尔在 1980 年 4 月的奥斯汀一天内三破纪录。1986 年，罗马尼亚的科斯塔凯把纪录带到 25.28；1988 年 4 月，杨文意在广州的亚洲锦标赛上游出 24.98，亚洲选手第一次拥有了这个项目的世界纪录。",
        "1992 年巴塞罗那，杨文意以 24.79 夺冠并刷新自己的纪录；两年后的罗马世锦赛，乐靖宜 24.51 再度改写。整个九十年代，这个项目的最快刻度都写在中文名字旁边。",
      ],
    },
    {
      heading: "德布鲁因与快速泳衣",
      paragraphs: [
        "2000 年是英格·德布鲁因的年份：6 月的荷兰锦标赛 24.48、里约的芬克尔杯 24.39、悉尼奥运半决赛 24.13——三个数字，一次比一次狠。2008 年 3 月，费尔杜伊斯与特里克特在六天内把纪录推到 23.97；2009 年 8 月 2 日的罗马，布丽塔·斯特芬以 23.73 拿下世锦赛金牌并终结泳衣时代。",
        "23.73 保持了八年，直到 2017 年布达佩斯，舍斯特伦在半决赛游出 23.67。六年后的福冈，她再度把纪录改写到 23.61——那是她职业生涯最后一项世界纪录，也是此后三年里所有人仰望的墙。",
      ],
    },
    {
      heading: "2026：两个月，四次改写",
      paragraphs: [
        "2026 年 6 月 19 日，印第安纳波利斯的职业游泳系列赛，凯特·道格拉斯游出 23.59，终结了舍斯特伦的统治；九天后，格雷琴·沃尔什在罗马的七丘杯以 23.55 抢走纪录。8 月 15 日的欧文，泛太平洋锦标赛——道格拉斯先在预赛 23.49，再在决赛 23.19，一天之内两破世界纪录。",
        "亚洲的刻度没有停下：刘湘 2021 年全运会的 23.97 仍是亚洲纪录，2026 年名古屋亚运会，吴卿风以 23.98 夺冠并刷新赛会纪录——0.01 秒，既是距离，也是这个项目在亚洲的分量。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：50 metres freestyle（世界纪录演进表）",
      url: "https://en.wikipedia.org/wiki/50_metres_freestyle",
    },
    {
      label: "Wikipedia：List of World Aquatics Championships medalists in swimming (women)",
      url: "https://en.wikipedia.org/wiki/List_of_World_Aquatics_Championships_medalists_in_swimming_(women)",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
  ],
};
