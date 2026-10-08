import type { SwimEvent } from "@/lib/types";

/**
 * 男子 100 米自由泳（长池）世界纪录演进
 * 数据来源：Wikipedia "World record progression 100 metres freestyle"
 * 数据截至：2026年10月
 */
export const mens100mFreestyle: SwimEvent = {
  slug: "mens-100m-freestyle",
  stroke: "freestyle",
  distance: 100,
  gender: "men",
  course: "LCM",
  name: "男子 100 米自由泳",
  summary:
    "游泳皇冠上的明珠。从1905年哈尔迈的1:05.8，到2024年潘展乐在巴黎游出的46.40，一百二十年间人类将这100米的极限推进了近20秒。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "1:05.8", holder: "Zoltán Halmay", country: "HUN", date: "1905-12-03", place: "维也纳", note: "首个被承认的世界纪录" },
    { time: "1:05.6", holder: "Charles Daniels", country: "USA", date: "1908-07-20", meet: "1908年伦敦奥运会", place: "伦敦" },
    { time: "1:02.8", holder: "Charles Daniels", country: "USA", date: "1910-04-15", place: "纽约", flags: ["tt"] },
    { time: "1:02.4", holder: "Kurt Bretting", country: "GER", date: "1912-04-06", place: "布鲁塞尔" },
    { time: "1:01.6", holder: "Duke Kahanamoku", country: "USA", date: "1912-07-20", meet: "德国锦标赛", place: "汉堡" },
    { time: "1:01.4", holder: "Duke Kahanamoku", country: "USA", date: "1918-08-09", place: "纽约" },
    { time: "1:00.4", holder: "Duke Kahanamoku", country: "USA", date: "1920-08-24", meet: "1920年安特卫普奥运会", place: "安特卫普" },
    { time: "58.6", holder: "Johnny Weissmuller", country: "USA", date: "1922-07-09", place: "阿拉米达", note: "首次突破1分钟" },
    { time: "57.4", holder: "Johnny Weissmuller", country: "USA", date: "1924-02-17", place: "迈阿密" },
    { time: "56.8", holder: "Peter Fick", country: "USA", date: "1934-03-02", place: "纽黑文" },
    { time: "56.6", holder: "Peter Fick", country: "USA", date: "1935-03-05", place: "纽黑文", flags: ["tt"] },
    { time: "56.4", holder: "Peter Fick", country: "USA", date: "1936-02-11", place: "纽黑文" },
    { time: "55.9", holder: "Alan Ford", country: "USA", date: "1944-04-13", place: "纽黑文", flags: ["tt"] },
    { time: "55.8", holder: "Alex Jany", country: "FRA", date: "1947-09-15", place: "芒通" },
    { time: "55.4", holder: "Alan Ford", country: "USA", date: "1948-06-29", meet: "美国奥运选拔赛", place: "底特律", flags: ["tt"] },
    { time: "54.8", holder: "Dick Cleveland", country: "USA", date: "1954-04-01", place: "纽黑文", flags: ["tt"] },
    { time: "55.4", holder: "Jon Henricks", country: "AUS", date: "1956-11-30", meet: "1956年墨尔本奥运会", place: "墨尔本", note: "慢于此前的计时赛成绩，仍被列为正式纪录" },
    { time: "55.2", holder: "John Devitt", country: "AUS", date: "1957-01-19", place: "悉尼" },
    { time: "54.6", holder: "John Devitt", country: "AUS", date: "1957-01-28", place: "布里斯班" },
    { time: "54.4", holder: "Steve Clark", country: "USA", date: "1961-08-18", meet: "AAU锦标赛", place: "洛杉矶" },
    { time: "53.6", holder: "Manuel dos Santos", country: "BRA", date: "1961-09-20", place: "里约热内卢", flags: ["tt"] },
    { time: "52.9", holder: "Alain Gottvallès", country: "FRA", date: "1964-09-13", place: "布达佩斯" },
    { time: "52.9", holder: "Steve Clark", country: "USA", date: "1964-10-14", meet: "1964年东京奥运会", place: "东京", flags: ["eq", "r"] },
    { time: "52.6", holder: "Ken Walsh", country: "USA", date: "1967-07-27", meet: "泛美运动会", place: "温尼伯", flags: ["r"] },
    { time: "52.6", holder: "Zac Zorn", country: "USA", date: "1968-09-02", meet: "美国奥运选拔赛", place: "洛杉矶", flags: ["eq"] },
    { time: "52.2", holder: "Michael Wenden", country: "AUS", date: "1968-10-19", meet: "1968年墨西哥城奥运会", place: "墨西哥城" },
    { time: "51.94", holder: "Mark Spitz", country: "USA", date: "1970-08-23", place: "洛杉矶", flags: ["h"] },
    { time: "51.47", holder: "Mark Spitz", country: "USA", date: "1972-08-05", meet: "美国奥运选拔赛", place: "芝加哥", flags: ["h"] },
    { time: "51.22", holder: "Mark Spitz", country: "USA", date: "1972-09-03", meet: "1972年慕尼黑奥运会", place: "慕尼黑" },
    { time: "51.12", holder: "Jim Montgomery", country: "USA", date: "1975-06-21", place: "长滩", flags: ["h"] },
    { time: "51.11", holder: "Andy Coan", country: "USA", date: "1975-08-03", place: "劳德代尔堡" },
    { time: "50.59", holder: "Jim Montgomery", country: "USA", date: "1975-08-23", place: "堪萨斯城", flags: ["sf"] },
    { time: "50.39", holder: "Jim Montgomery", country: "USA", date: "1976-07-24", meet: "1976年蒙特利尔奥运会", place: "蒙特利尔", flags: ["sf"] },
    { time: "49.99", holder: "Jim Montgomery", country: "USA", date: "1976-07-25", meet: "1976年蒙特利尔奥运会", place: "蒙特利尔", note: "人类首次突破50秒" },
    { time: "49.44", holder: "Jonty Skinner", country: "RSA", date: "1976-08-14", place: "费城" },
    { time: "49.36", holder: "Rowdy Gaines", country: "USA", date: "1981-04-03", place: "奥斯汀", flags: ["tt"] },
    { time: "49.24", holder: "Matt Biondi", country: "USA", date: "1985-08-06", place: "米申维耶霍", flags: ["h"] },
    { time: "48.95", holder: "Matt Biondi", country: "USA", date: "1985-08-06", place: "米申维耶霍" },
    { time: "48.74", holder: "Matt Biondi", country: "USA", date: "1986-06-24", place: "奥兰多" },
    { time: "48.42", holder: "Matt Biondi", country: "USA", date: "1988-08-10", meet: "美国奥运选拔赛", place: "奥斯汀" },
    { time: "48.21", holder: "Alexander Popov", country: "RUS", date: "1994-06-18", meet: "Mare Nostrum巡回赛", place: "蒙特卡洛" },
    { time: "48.18", holder: "Michael Klim", country: "AUS", date: "2000-09-16", meet: "2000年悉尼奥运会", place: "悉尼", flags: ["r"] },
    { time: "47.84", holder: "Pieter van den Hoogenband", country: "NED", date: "2000-09-19", meet: "2000年悉尼奥运会", place: "悉尼", flags: ["sf"] },
    { time: "47.60", holder: "Alain Bernard", country: "FRA", date: "2008-03-21", meet: "欧洲锦标赛", place: "埃因霍温", flags: ["sf"] },
    { time: "47.50", holder: "Alain Bernard", country: "FRA", date: "2008-03-22", meet: "欧洲锦标赛", place: "埃因霍温" },
    { time: "47.24", holder: "Eamon Sullivan", country: "AUS", date: "2008-08-11", meet: "2008年北京奥运会", place: "北京", flags: ["r"] },
    { time: "47.20", holder: "Alain Bernard", country: "FRA", date: "2008-08-13", meet: "2008年北京奥运会", place: "北京", flags: ["sf"] },
    { time: "47.05", holder: "Eamon Sullivan", country: "AUS", date: "2008-08-13", meet: "2008年北京奥运会", place: "北京", flags: ["sf"] },
    { time: "46.94", holder: "Alain Bernard", country: "FRA", date: "2009-04-23", meet: "法国锦标赛", place: "蒙彼利埃", flags: ["sf"], ratified: false, note: "因所穿泳衣未获批准，未被承认为世界纪录" },
    { time: "46.91", holder: "César Cielo", country: "BRA", date: "2009-07-30", meet: "世界锦标赛", place: "罗马" },
    { time: "46.86", holder: "David Popovici", country: "ROU", date: "2022-08-13", meet: "欧洲锦标赛", place: "罗马" },
    { time: "46.80", holder: "Pan Zhanle", country: "CHN", date: "2024-02-11", meet: "世界锦标赛", place: "多哈", flags: ["r"], note: "4×100米自由泳接力决赛第一棒" },
    { time: "46.40", holder: "Pan Zhanle", country: "CHN", date: "2024-07-31", meet: "2024年巴黎奥运会", place: "巴黎", note: "现世界纪录；巴黎奥运会个人决赛夺冠" },
  ],

  asianRecord: {
    time: "46.40", holder: "Pan Zhanle", country: "CHN",
    date: "2024-07-31", meet: "2024年巴黎奥运会", place: "巴黎",
    wr: true, note: "亦为世界纪录",
  },
  chineseRecord: {
    time: "46.40", holder: "Pan Zhanle", country: "CHN",
    date: "2024-07-31", meet: "2024年巴黎奥运会", place: "巴黎",
    note: "与亚洲纪录、世界纪录为同一成绩",
  },


  top10: [
    { time: "46.40", holder: "Pan Zhanle", country: "CHN", date: "2024-07-31", meet: "2024年巴黎奥运会", wr: true },
    { time: "46.51", holder: "David Popovici", country: "ROU", date: "2025-07", meet: "2025年新加坡世锦赛", note: "赛会纪录" },
    { time: "46.56", holder: "David Popovici", country: "ROU", date: "2026-08-12", meet: "2026年巴黎欧锦赛" },
    { time: "46.72", holder: "David Popovici", country: "ROU", date: "2026-08-11", meet: "2026年巴黎欧锦赛", flags: ["sf"] },
    { time: "46.74", holder: "Egor Kornev", country: "RUS", date: "2026-08-12", meet: "2026年巴黎欧锦赛", note: "以中立运动员身份参赛" },
    { time: "46.80", holder: "Pan Zhanle", country: "CHN", date: "2024-02-11", meet: "2024年多哈世锦赛", flags: ["r"], note: "接力第一棒" },
    { time: "46.86", holder: "David Popovici", country: "ROU", date: "2022-08-13", meet: "2022年罗马欧锦赛" },
    { time: "46.91", holder: "César Cielo", country: "BRA", date: "2009-07-30", meet: "2009年罗马世锦赛" },
    { time: "46.92", holder: "Pan Zhanle", country: "CHN", date: "2024-07-27", meet: "2024年巴黎奥运会", flags: ["r"], note: "接力第一棒，破奥运纪录" },
    { time: "46.92", holder: "Jack Alexy", country: "USA", date: "2025-07", meet: "2025年新加坡世锦赛" },
  ],
  top10Note:
    "伯纳德2009年的46.94因所穿泳衣未获批准不计入；德雷塞尔46.96（2019光州）与查尔莫斯47.08紧随其后，未入列。",

  history: [
    {
      heading: "从「任意泳姿」到爬泳一统",
      paragraphs: [
        "自由泳的规则本义是「随便怎么游」——任何姿势都可以使用。由于爬泳（crawl）在实践中最快，它很快成为自由泳的事实标准。1905年12月，匈牙利人佐尔坦·哈尔迈在维也纳游出1:05.8，被公认为该项目首个世界纪录。",
        "早期纪录多诞生于表演赛和计时赛。1908年伦敦奥运会起，奥运会开始采用50米泳池并系统承认世界纪录，查尔斯·丹尼尔斯在伦敦夺冠时游出的1:05.6，成为奥运泳池中的第一个百米自由泳纪录。",
      ],
    },
    {
      heading: "韦斯穆勒：第一位全球偶像",
      paragraphs: [
        "夏威夷人杜克·卡哈纳莫库在1912年和1920年两夺奥运金牌，并将纪录带到1:00.4。1922年7月，约翰尼·韦斯穆勒游出58.6，把人类首次带进1分钟之内——他此后前往好莱坞主演《人猿泰山》，成为游泳史上第一位世界级偶像。",
        "此后彼得·菲克与艾伦·福特在纽黑文的一次次冲击中把成绩压到55秒边缘。1956年墨尔本奥运会，澳大利亚人琼·亨里克斯在决赛中以55.4夺冠，正式将纪录带入奥运时代的中段。",
      ],
    },
    {
      heading: "突破50秒",
      paragraphs: [
        "1976年7月25日，蒙特利尔奥运会决赛，吉姆·蒙哥马利以49.99夺冠——人类首次在长池突破50秒大关。仅仅19天后，南非人琼蒂·斯金纳便以49.44将其改写。",
        "80年代属于马特·比昂迪：他在1985至1988年间四次刷新纪录，将成绩定格在48.42。90年代则属于「沙皇」亚历山大·波波夫——1994年游出48.21，并在1992、1996两届奥运会上实现卫冕。",
      ],
    },
    {
      heading: "世纪之交与快速泳衣狂飙",
      paragraphs: [
        "2000年悉尼奥运会，皮特·范登霍根班德在主场观众的呐喊中游出47.84。2008年，聚氨酯「快速泳衣」引发了纪录雪崩：阿兰·贝尔纳与埃蒙·沙利文在数月内五次刷新世界纪录。",
        "贝尔纳2009年4月游出的46.94因泳衣未获认证而未被承认；2009年罗马世锦赛，塞萨尔·西耶洛的46.91成为「塑料时代」的绝唱。2010年1月起，非织物泳衣被国际泳联全面禁止，此后该纪录沉寂了整整13年。",
      ],
    },
    {
      heading: "新纪元：波波维奇与潘展乐",
      paragraphs: [
        "2022年8月，17岁的罗马尼亚少年大卫·波波维奇在欧锦赛上游出46.86，终结了漫长的等待。宁泽涛2015年喀山世锦赛的夺冠已经写下亚洲伏笔，而真正的爆发属于中国：2024年2月多哈世锦赛，潘展乐在4×100米自由泳接力第一棒游出46.80；7月31日巴黎奥运会个人决赛，他以46.40强势夺金并再破世界纪录。",
        "46.40是该项目120年历史上第52次被承认的世界纪录，也是亚洲选手第一次站上男子百米自由泳之巅。从哈尔迈到潘展乐，这条曲线上写满了每个时代的名字。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：World record progression 100 metres freestyle",
      url: "https://en.wikipedia.org/wiki/World_record_progression_100_metres_freestyle",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
  ],
};
