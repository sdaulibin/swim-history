import type { SwimEvent } from "@/lib/types";

/**
 * 男子 100 米蝶泳（长池）世界纪录演进
 * 数据来源：Wikipedia "World record progression 100 metres butterfly"（表格直读）
 * 交叉核对：SwimSwam（德雷塞尔 49.75 泛太赛会纪录 / 米拉克 49.48 欧洲纪录）、
 *   Olympics.com（巴黎 2024 决赛）、世界泳联视频（福冈 2023 决赛 50.14）
 * 数据截至：2026年10月
 * 已知缺口：中国纪录（长池）未能核实，暂缺（避免误写）；
 *   top10 第 6/7/8/10 行来自维基百科"历史前 25"表格直读，为单源，待二源复核。
 */
export const mens100mButterfly: SwimEvent = {
  slug: "mens-100m-butterfly",
  stroke: "butterfly",
  distance: 100,
  gender: "men",
  course: "LCM",
  name: "男子 100 米蝶泳",
  summary:
    "从1957年图姆佩克的1:03.4起步，经石本时代的日本旋风、施皮茨一年六破、格罗斯的53秒大关，到克罗克与菲尔普斯的贴身缠斗，最终停在德雷塞尔2021年东京的49.45——人类首次游进49.5秒。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "1:03.4", holder: "György Tumpek", country: "HUN", date: "1957-05-26", place: "布达佩斯", note: "首个被承认的世界纪录" },
    { time: "1:01.5", holder: "Takashi Ishimoto", country: "JPN", date: "1957-06-16", place: "久留米" },
    { time: "1:01.3", holder: "Takashi Ishimoto", country: "JPN", date: "1957-07-07", place: "东京" },
    { time: "1:01.2", holder: "Takashi Ishimoto", country: "JPN", date: "1957-09-06", place: "久留米" },
    { time: "1:01.1", holder: "Takashi Ishimoto", country: "JPN", date: "1958-06-29", place: "洛杉矶" },
    { time: "1:01.0", holder: "Takashi Ishimoto", country: "JPN", date: "1958-09-14", place: "高知", note: "两年内六破世界纪录" },
    { time: "59.0", holder: "Lance Larson", country: "USA", date: "1960-06-26", place: "洛杉矶", note: "首次突破1分钟" },
    { time: "58.7", holder: "Lance Larson", country: "USA", date: "1960-07-24", place: "托莱多" },
    { time: "58.6", holder: "Fred Schmidt", country: "USA", date: "1961-08-20", place: "洛杉矶" },
    { time: "58.4", holder: "Luis Nicolao", country: "ARG", date: "1962-04-24", place: "里约热内卢" },
    { time: "57.0", holder: "Luis Nicolao", country: "ARG", date: "1962-04-27", place: "里约热内卢", note: "两天内提高1.4秒" },
    { time: "56.3", holder: "Mark Spitz", country: "USA", date: "1967-07-31", meet: "泛美运动会", place: "温尼伯" },
    { time: "56.3", holder: "Doug Russell", country: "USA", date: "1967-08-29", place: "东京", flags: ["eq"] },
    { time: "55.7", holder: "Mark Spitz", country: "USA", date: "1967-10-07", place: "西柏林" },
    { time: "55.6", holder: "Mark Spitz", country: "USA", date: "1968-08-30", meet: "美国奥运选拔赛", place: "长滩" },
    { time: "55.0", holder: "Mark Spitz", country: "USA", date: "1971-08-25", meet: "AAU全国锦标赛", place: "休斯敦" },
    { time: "54.72", holder: "Mark Spitz", country: "USA", date: "1972-07-04", meet: "美国奥运选拔赛", place: "芝加哥", flags: ["h"] },
    { time: "54.56", holder: "Mark Spitz", country: "USA", date: "1972-07-04", meet: "美国奥运选拔赛", place: "芝加哥" },
    { time: "54.27", holder: "Mark Spitz", country: "USA", date: "1972-08-31", meet: "1972年慕尼黑奥运会", place: "慕尼黑", note: "奥运会前一年内第六次刷新" },
    { time: "54.18", holder: "Joe Bottom", country: "USA", date: "1977-08-27", meet: "美国与东德对抗赛", place: "东柏林" },
    { time: "54.15", holder: "Pär Arvidsson", country: "SWE", date: "1980-04-11", meet: "美国全国锦标赛", place: "奥斯汀" },
    { time: "53.81", holder: "William Paulus", country: "USA", date: "1981-04-03", place: "奥斯汀" },
    { time: "53.44", holder: "Matt Gribble", country: "USA", date: "1983-08-06", meet: "美国全国锦标赛", place: "克洛维斯" },
    { time: "53.38", holder: "Pablo Morales", country: "USA", date: "1984-06-24", meet: "美国奥运选拔赛", place: "印第安纳波利斯" },
    { time: "53.08", holder: "Michael Gross", country: "FRG", date: "1984-07-30", meet: "1984年洛杉矶奥运会", place: "洛杉矶" },
    { time: "52.84", holder: "Pablo Morales", country: "USA", date: "1986-06-23", meet: "美国全国锦标赛", place: "奥兰多" },
    { time: "52.32", holder: "Denis Pankratov", country: "RUS", date: "1995-08-23", meet: "欧洲锦标赛", place: "维也纳" },
    { time: "52.27", holder: "Denis Pankratov", country: "RUS", date: "1996-07-24", meet: "1996年亚特兰大奥运会", place: "亚特兰大" },
    { time: "52.15", holder: "Michael Klim", country: "AUS", date: "1997-10-09", meet: "澳大利亚锦标赛", place: "布里斯班" },
    { time: "52.03", holder: "Michael Klim", country: "AUS", date: "1999-12-10", meet: "AIS游泳赛", place: "堪培拉", flags: ["tt"] },
    { time: "51.81", holder: "Michael Klim", country: "AUS", date: "1999-12-12", meet: "AIS游泳赛", place: "堪培拉", flags: ["tt"] },
    { time: "51.76", holder: "Andriy Serdinov", country: "UKR", date: "2003-07-25", meet: "世界锦标赛", place: "巴塞罗那", flags: ["sf"] },
    { time: "51.47", holder: "Michael Phelps", country: "USA", date: "2003-07-25", meet: "世界锦标赛", place: "巴塞罗那", flags: ["sf"] },
    { time: "50.98", holder: "Ian Crocker", country: "USA", date: "2003-07-26", meet: "世界锦标赛", place: "巴塞罗那" },
    { time: "50.76", holder: "Ian Crocker", country: "USA", date: "2004-07-13", meet: "美国奥运选拔赛", place: "长滩" },
    { time: "50.40", holder: "Ian Crocker", country: "USA", date: "2005-07-30", meet: "世界锦标赛", place: "蒙特利尔" },
    { time: "50.22", holder: "Michael Phelps", country: "USA", date: "2009-07-09", meet: "美国全国锦标赛", place: "印第安纳波利斯" },
    { time: "50.01", holder: "Milorad Čavić", country: "SRB", date: "2009-07-31", meet: "世界锦标赛", place: "罗马", flags: ["sf"] },
    { time: "49.82", holder: "Michael Phelps", country: "USA", date: "2009-08-01", meet: "世界锦标赛", place: "罗马", note: "快速泳衣时代的高点" },
    { time: "49.50", holder: "Caeleb Dressel", country: "USA", date: "2019-07-26", meet: "世界锦标赛", place: "光州", flags: ["sf"] },
    { time: "49.45", holder: "Caeleb Dressel", country: "USA", date: "2021-07-31", meet: "2020年东京奥运会", place: "东京", note: "现世界纪录" },
  ],

  asianRecord: {
    time: "50.39", holder: "Joseph Schooling", country: "SGP",
    date: "2016-08-12", meet: "2016年里约奥运会", place: "里约热内卢",
    note: "决赛击败菲尔普斯夺金，同时为奥运会纪录，亦是亚洲选手历史最快成绩",
  },
  // 中国纪录（长池）未能核实到可靠来源，暂缺

  top10: [
    { time: "49.45", holder: "Caeleb Dressel", country: "USA", date: "2021-07-31", meet: "2020年东京奥运会", wr: true },
    { time: "49.48", holder: "Kristóf Milák", country: "HUN", date: "2026-08-13", meet: "2026年巴黎欧锦赛", note: "欧洲纪录，距世界纪录仅0.03秒" },
    { time: "49.50", holder: "Caeleb Dressel", country: "USA", date: "2019-07-26", meet: "2019年光州世锦赛", flags: ["sf"] },
    { time: "49.62", holder: "Maxime Grousset", country: "FRA", date: "2025-08-02", meet: "2025年新加坡世锦赛", note: "此前为欧洲纪录" },
    { time: "49.66", holder: "Caeleb Dressel", country: "USA", date: "2019-07-27", meet: "2019年光州世锦赛" },
    { time: "49.68", holder: "Kristóf Milák", country: "HUN", date: "2021-07-31", meet: "2020年东京奥运会", note: "决赛银牌" },
    { time: "49.71", holder: "Caeleb Dressel", country: "USA", date: "2021-07-30", meet: "2020年东京奥运会", flags: ["sf"] },
    { time: "49.76", holder: "Caeleb Dressel", country: "USA", date: "2021-06-18", meet: "美国奥运选拔赛", flags: ["sf"] },
    { time: "49.82", holder: "Michael Phelps", country: "USA", date: "2009-08-01", meet: "2009年罗马世锦赛" },
    { time: "49.83", holder: "Noè Ponti", country: "SUI", date: "2025-08-02", meet: "2025年新加坡世锦赛", note: "决赛银牌" },
  ],
  top10Note:
    "德雷塞尔一人占前十中的五席（49.45/49.50/49.66/49.71/49.76）；米拉克2026年欧锦赛的49.48为现欧洲纪录、历史第二快。第6—8、10行来自维基百科历史前25表格直读（单源），待二源复核。",

  history: [
    {
      heading: "蝶泳独立与石本时代",
      paragraphs: [
        "1952年蝶泳被国际泳联从蛙泳中单列为独立项目，1957年起系统承认男子百米蝶泳世界纪录——起点是匈牙利人哲尔吉·图姆佩克当年5月游出的1:03.4。",
        "纪录随即将入日本时间：石本在1957年6月至1958年9月间接连六次刷新，把成绩推进到1:01.0；直到1960年，美国人兰斯·拉尔森才首次游进1分钟（59.0）。",
      ],
    },
    {
      heading: "施皮茨、格罗斯与莫拉莱斯的接力",
      paragraphs: [
        "马克·施皮茨在1967年至1972年间把纪录从56.3一路压到54.27——慕尼黑奥运会夺金之前，他刚在美国选拔赛上两度刷新。1972年之后，纪录转入美国人手中长达二十余年：博托姆、阿尔维德松、格里布尔、莫拉莱斯轮番登顶，其间西德的米夏埃尔·格罗斯在1984年洛杉矶决赛游出53.08，成为首位闯入53秒的选手。",
        "莫拉莱斯1986年把纪录推到52.84后，俄罗斯人杰尼斯·潘克拉托夫在1995—1996年先后游出52.32和52.27，后一成绩正是亚特兰大奥运会的夺金之战。澳大利亚人迈克尔·克利姆1997年刷新后，又在1999年12月的计时赛中两度改写，把纪录带到51.81。",
      ],
    },
    {
      heading: "克罗克—菲尔普斯—德雷塞尔",
      paragraphs: [
        "2003年巴塞罗那世锦赛成为分水岭：半决赛中谢尔季诺夫与菲尔普斯先后突破52秒，决赛伊恩·克罗克一举游出50.98。此后克罗克（50.76、50.40）与菲尔普斯（50.22、49.82）在快速泳衣时代互相追逐，2009年罗马的49.82保持了整整十年。",
        "2019年光州，卡莱布·德雷塞尔在半决赛游出49.50，成为首位突破49.5的选手；2021年东京决赛，他又把世界纪录定格在49.45。此后米拉克在巴黎奥运会上以49.90首夺奥运金牌（2024），2026年巴黎欧锦赛的49.48距世界纪录仅差0.03秒；同年格鲁塞（49.62，2025）与蓬蒂（49.83，2025）也已游进49.9之内，项目进入群雄逐鹿的新阶段。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：World record progression 100 metres butterfly",
      url: "https://en.wikipedia.org/wiki/World_record_progression_100_metres_butterfly",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
    {
      label: "SwimSwam：Milak Nails European Record of 49.48（2026 欧锦赛）",
      url: "https://swimswam.com/hungarys-kristof-milak-just-misses-wr-in-100fly-nails-european-record-of-49-48",
    },
    {
      label: "Olympics.com：巴黎 2024 男子 100 米蝶泳决赛",
      url: "https://www.olympics.com/en/olympic-games/paris-2024/results/swimming/100m-butterfly-men",
    },
  ],
};
