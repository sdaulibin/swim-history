import type { SwimEvent } from "@/lib/types";

/**
 * 男子 50 米自由泳（长池）世界纪录演进
 * 数据来源：Wikipedia「50 metres freestyle」演进表（逐行核对）、
 * World Aquatics 官方纪录、各届世锦赛/奥运会官方成绩页
 * 数据截至：2026年10月
 *
 * 说明（宁缺毋滥）：
 *  - 1976 年国际泳联首次设立 50 米世界纪录，本站从首位保持者（斯金纳）收录；
 *  - 威廉姆斯 22.18（1988）当年未被承认，以 ratified:false 保留为史实；
 *  - 2026-03-20 麦克沃伊在深圳中国公开赛游出 20.88，破西埃洛悬置十七年的
 *    20.91——本条依据维基演进表与赛事报道双源收录；
 *  - 亚洲纪录仍为中国潘展乐的 21.56（2024 全国冠军赛）。
 */
export const mens50mFreestyle: SwimEvent = {
  slug: "mens-50m-freestyle",
  stroke: "freestyle",
  distance: 50,
  gender: "men",
  course: "LCM",
  name: "男子 50 米自由泳",
  summary:
    "20.88——2026年3月20日的深圳，30岁的卡梅伦·麦克沃伊把西埃洛悬置十七年的20.91抹去，这是五十米自由泳第一次迈进20.8。从霍尔与欧文的千禧并列，到西埃洛的罗马一炮，再到麦克沃伊三十岁之后的两次改写，这是最短、也最残酷的距离。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "23.86", holder: "Jonty Skinner", country: "RSA", date: "1976-08-14", meet: "美国全国锦标赛", place: "费城", note: "国际泳联设立50米世界纪录后的首个保持者" },
    { time: "23.74", holder: "Joe Bottom", country: "USA", date: "1977-07-03", meet: "加拿大杯", place: "怡陶碧谷" },
    { time: "23.72", holder: "Ron Manganiello", country: "USA", date: "1978-07-29", place: "迈阿密" },
    { time: "23.70", holder: "Klaus Steinbach", country: "FRG", date: "1979-07-23", place: "弗赖堡" },
    { time: "23.66", holder: "Chris Cavanaugh", country: "USA", date: "1980-02-02", meet: "国际邀请赛", place: "阿默斯福特" },
    { time: "23.12", holder: "Chris Cavanaugh", country: "USA", date: "1980-04-10", meet: "美国春季锦标赛", place: "奥斯汀", flags: ["h"] },
    { time: "22.96", holder: "Rowdy Gaines", country: "USA", date: "1980-04-10", meet: "美国春季锦标赛", place: "奥斯汀", flags: ["h"] },
    { time: "22.83", holder: "Bruce Stahl", country: "USA", date: "1980-04-10", meet: "美国春季锦标赛", place: "奥斯汀", flags: ["h"] },
    { time: "22.71", holder: "Joe Bottom", country: "USA", date: "1980-08-15", meet: "夏威夷邀请赛", place: "檀香山" },
    { time: "22.54", holder: "Robin Leamy", country: "USA", date: "1981-08-15", meet: "美国全国锦标赛", place: "布朗迪尔", flags: ["h"] },
    { time: "22.52", holder: "Dano Halsall", country: "SUI", date: "1985-07-21", meet: "瑞士锦标赛", place: "贝林佐纳" },
    { time: "22.40", holder: "Tom Jager", country: "USA", date: "1985-12-06", meet: "USS 邀请赛", place: "奥斯汀" },
    { time: "22.33", holder: "Matt Biondi", country: "USA", date: "1986-06-26", meet: "美国世锦赛选拔赛", place: "奥兰多" },
    { time: "22.32", holder: "Tom Jager", country: "USA", date: "1987-08-13", meet: "泛太平洋锦标赛", place: "布里斯班" },
    { time: "22.23", holder: "Tom Jager", country: "USA", date: "1988-03-25", meet: "美国春季锦标赛", place: "奥兰多" },
    { time: "22.18", holder: "Peter Williams", country: "RSA", date: "1988-04-10", meet: "CSCA 邀请赛", place: "印第安纳波利斯", ratified: false, note: "当年未被国际泳联承认，作为史实保留" },
    { time: "22.14", holder: "Matt Biondi", country: "USA", date: "1988-09-24", meet: "奥运会", place: "汉城", note: "首位游进22.2以内的奥运冠军" },
    { time: "22.12", holder: "Tom Jager", country: "USA", date: "1989-08-20", meet: "泛太平洋锦标赛", place: "东京" },
    { time: "21.98", holder: "Tom Jager", country: "USA", date: "1990-03-24", meet: "美国冲刺锦标赛", place: "纳什维尔", flags: ["sf"], note: "首次游进22秒" },
    { time: "21.81", holder: "Tom Jager", country: "USA", date: "1990-03-24", meet: "美国冲刺锦标赛", place: "纳什维尔" },
    { time: "21.64", holder: "Alexander Popov", country: "RUS", date: "2000-06-16", meet: "俄罗斯全国锦标赛", place: "莫斯科", flags: ["tt"], note: "保持八年的布料泳衣时代标杆" },
    { time: "21.56", holder: "Eamon Sullivan", country: "AUS", date: "2008-02-17", meet: "新南威尔士州锦标赛", place: "悉尼" },
    { time: "21.50", holder: "Alain Bernard", country: "FRA", date: "2008-03-23", meet: "欧洲游泳锦标赛", place: "埃因霍温", flags: ["sf"] },
    { time: "21.41", holder: "Eamon Sullivan", country: "AUS", date: "2008-03-27", meet: "澳大利亚奥运选拔赛", place: "悉尼", flags: ["sf"] },
    { time: "21.28", holder: "Eamon Sullivan", country: "AUS", date: "2008-03-28", meet: "澳大利亚奥运选拔赛", place: "悉尼", note: "悉尼三天内两破纪录" },
    { time: "20.94", holder: "Frédérick Bousquet", country: "FRA", date: "2009-04-26", meet: "法国全国锦标赛", place: "蒙彼利埃", note: "快速泳衣时代首个游进21秒的人" },
    { time: "20.91", holder: "Cesar Cielo", country: "BRA", date: "2009-12-18", meet: "巴西全国锦标赛", place: "圣保罗", note: "快速泳衣时代遗产，悬置十七年" },
    { time: "20.88", holder: "Cameron McEvoy", country: "AUS", date: "2026-03-20", meet: "中国公开赛", place: "深圳", note: "现世界纪录——30岁改写；南非选手威廉姆斯1988年的22.18当年未被承认" },
  ],

  asianRecord: {
    time: "21.56", holder: "Pan Zhanle", country: "CHN",
    date: "2024-04", meet: "中国全国游泳冠军赛",
    note: "亚洲纪录与中国纪录同为潘展乐 21.56；2026名古屋亚运金煐汎 21.66 为赛会纪录，未能超越",
  },
  chineseRecord: {
    time: "21.56", holder: "Pan Zhanle", country: "CHN",
    date: "2024-04", meet: "中国全国游泳冠军赛",
    note: "此前宁泽涛 21.72（2017 全国冠军赛）为旧纪录",
  },

  top10: [
    { time: "20.88", holder: "Cameron McEvoy", country: "AUS", date: "2026-03-20", meet: "2026年中国公开赛（深圳）", wr: true, note: "现世界纪录" },
    { time: "20.91", holder: "Cesar Cielo", country: "BRA", date: "2009-12-18", meet: "2009年巴西全国锦标赛", note: "快速泳衣时代" },
    { time: "20.94", holder: "Frédérick Bousquet", country: "FRA", date: "2009-04-26", meet: "2009年法国全国锦标赛" },
    { time: "21.04", holder: "Caeleb Dressel", country: "USA", date: "2019-07-27", meet: "2019年光州世锦赛", note: "世锦赛纪录" },
    { time: "21.06", holder: "Cameron McEvoy", country: "AUS", date: "2023-07-29", meet: "2023年福冈世锦赛", note: "大洋洲纪录（旧）" },
    { time: "21.07", holder: "Caeleb Dressel", country: "USA", date: "2021-08-01", meet: "2020年东京奥运会", note: "奥运会纪录" },
    { time: "21.14", holder: "Cameron McEvoy", country: "AUS", date: "2025-08-02", meet: "2025年新加坡世锦赛" },
    { time: "21.19", holder: "Florent Manaudou", country: "FRA", date: "2015-08-08", meet: "2015年喀山世锦赛" },
    { time: "21.25", holder: "Cameron McEvoy", country: "AUS", date: "2024-08-02", meet: "2024年巴黎奥运会", note: "30岁奥运加冕" },
    { time: "21.28", holder: "Eamon Sullivan", country: "AUS", date: "2008-03-28", meet: "2008年澳大利亚奥运选拔赛" },
  ],
  top10Note:
    "前十门槛 21.28；麦克沃伊独占四席。亚洲与中国的最好刻度仍是潘展乐的 21.56（2024），与第十位相差 0.28 秒——这也是这个项目在亚洲的百年距离。",

  history: [
    {
      heading: "从设立到泳衣狂飙",
      paragraphs: [
        "1976 年国际泳联才为 50 米设立世界纪录，首位保持者是南非的琼蒂·斯金纳（23.86）。此后十四年，这个项目几乎是美国人的内部锦标赛：博顿、卡瓦诺、盖恩斯、莱米、贾格尔、比昂迪轮番改写，贾格尔在 1990 年 3 月的纳什维尔一天内两破纪录，把人类带进 21 秒时代。",
        "2000 年 9 月 21 日的悉尼，加里·霍尔与安东尼·欧文同时触壁——21.98，奥运史上罕见的并列夺金。布料泳衣时代，这个项目的最长寿纪录属于波波夫：21.64（2000 年莫斯科，计时赛），一直守到 2008 年。",
      ],
    },
    {
      heading: "快速泳衣：从 21.56 到 20.91",
      paragraphs: [
        "2008 年 3 月是分水岭：埃蒙·沙利文在悉尼三天内两破世界纪录（21.56→21.41→21.28），伯纳德在埃因霍温游出 21.50，人类的极限被压缩到 21.2 之内。2009 年 4 月，布斯的 20.94 首次破 21 秒；同年 12 月的圣保罗，西埃洛以 20.91 收官——泳衣禁令随即到来。",
        "20.91 此后悬置十七年：马纳多、欧文、德雷塞尔（21.07 奥运会纪录）、麦克沃伊（21.06）都在它面前止步。直到 2026 年 3 月 20 日的深圳中国公开赛，30 岁的麦克沃伊游出 20.88——这一次，纪录终于换了主人。",
      ],
    },
    {
      heading: "亚洲刻度：21.5 的墙",
      paragraphs: [
        "亚洲人在这个项目上的最好成绩长期徘徊在 21.5 上下：宁泽涛 21.72（2017）曾是中国标杆，2024 年潘展乐以 21.56 改写全国纪录并保持亚洲纪录至今；2026 年名古屋亚运会，韩国金煐汎以 21.66 破赛会纪录夺金、中国香港何甄陶 21.76 摘银，吴卿风则在女子组以 23.98 改写赛会纪录。",
        "泛太平洋锦标赛不设 50 米项目，世锦赛与奥运会是唯一的巅峰舞台。麦克沃伊（2023 福冈 21.06、2024 巴黎 21.25、2025 新加坡 21.14、2026 深圳 20.88）证明：这最短的距离，往往属于最耐心的等待者。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：50 metres freestyle（世界纪录演进表）",
      url: "https://en.wikipedia.org/wiki/50_metres_freestyle",
    },
    {
      label: "Wikipedia：List of World Aquatics Championships medalists in swimming (men)",
      url: "https://en.wikipedia.org/wiki/List_of_World_Aquatics_Championships_medalists_in_swimming_(men)",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
  ],
};
