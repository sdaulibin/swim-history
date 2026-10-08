import type { SwimEvent } from "@/lib/types";

/**
 * 男子 200 米蝶泳（长池）世界纪录演进
 * 数据来源：Wikipedia "World record progression 200 metres butterfly"（表格直读）
 * 交叉核对：Olympics.com（布达佩斯 2022 决赛 1:50.34 / 光州 2019 1:50.73）、SwimSwam、olympic.ca（卡伦 1:52.80）
 * 数据截至：2026年10月
 * 已知缺口：
 *   1. 1935—1971 年早期纪录（Szittya 起步、50—60 年代日本/澳大利亚选手、施皮茨 2:05—2:02 段、
 *      加里·霍尔 1970—1971 段及 1972 慕尼黑奥运会决赛纪录）因源表格提取乱码、行序错乱无法核实，暂缺待补；
 *   2. 1986 年平 1:56.96 纪录行与 1989 年 1:56.24 行地点缺失，日期仅能核到月份；
 *   3. 中国纪录（长池）未能核实，暂缺（避免误写）。
 */
export const mens200mButterfly: SwimEvent = {
  slug: "mens-200m-butterfly",
  stroke: "butterfly",
  distance: 200,
  gender: "men",
  course: "LCM",
  name: "男子 200 米蝶泳",
  summary:
    "1975年加里·霍尔率先闯入2分钟，经西本、布鲁纳、斯图尔特、潘克拉托夫、马尔肖的接力传递，菲尔普斯2009年在罗马写下1:51.51；十年后米拉克在光州终结了菲氏王朝，2022年布达佩斯之夜把纪录推至1:50.34。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "2:01.53", holder: "Gary Hall", country: "USA", date: "1972-06-20", meet: "美国奥运选拔赛", place: "芝加哥" },
    { time: "2:00.53", holder: "Gary Hall", country: "USA", date: "1975-07-27" },
    { time: "1:59.19", holder: "Gary Hall", country: "USA", date: "1975-08-21", note: "首次突破2分钟" },
    { time: "1:58.21", holder: "Mike Bruner", country: "USA", date: "1976-06-22" },
    { time: "1:57.43", holder: "Mike Bruner", country: "USA", date: "1976-07-02", meet: "1976年蒙特利尔奥运会", place: "蒙特利尔" },
    { time: "1:57.04", holder: "Jon Sieben", country: "AUS", date: "1984-08-02", meet: "1984年洛杉矶奥运会", place: "洛杉矶" },
    { time: "1:56.96", holder: "Melvin Stewart", country: "USA", date: "1985-06-14", place: "奥斯汀" },
    { time: "1:56.24", holder: "Melvin Stewart", country: "USA", date: "1989-03" },
    { time: "1:55.69", holder: "Melvin Stewart", country: "USA", date: "1991-01-03", meet: "世界锦标赛", place: "珀斯" },
    { time: "1:55.22", holder: "Denis Pankratov", country: "RUS", date: "1995-06-23", place: "温彻斯特" },
    { time: "1:54.05", holder: "Denis Pankratov", country: "RUS", date: "1995-07-04", place: "温彻斯特" },
    { time: "1:54.05", holder: "Tom Malchow", country: "USA", date: "1998-09-05", place: "布里斯班", flags: ["eq"] },
    { time: "1:53.57", holder: "Tom Malchow", country: "USA", date: "2000-05-17", place: "夏洛特" },
    { time: "1:53.51", holder: "Michael Phelps", country: "USA", date: "2001-03-30", place: "奥斯汀", note: "15岁的菲尔普斯首次刷新世界纪录" },
    { time: "1:52.09", holder: "Michael Phelps", country: "USA", date: "2007-03-31", meet: "世界锦标赛", place: "墨尔本" },
    { time: "1:51.51", holder: "Michael Phelps", country: "USA", date: "2009-07-29", meet: "世界锦标赛", place: "罗马", note: "保持了十年之久" },
    { time: "1:50.73", holder: "Kristóf Milák", country: "HUN", date: "2019-07-24", meet: "世界锦标赛", place: "光州", note: "终结菲尔普斯保持十年的纪录" },
    { time: "1:50.34", holder: "Kristóf Milák", country: "HUN", date: "2022-06-21", meet: "世界锦标赛", place: "布达佩斯", note: "现世界纪录" },
  ],

  asianRecord: {
    time: "1:52.53", holder: "Katsuji Matsumoto", country: "JPN",
    date: "2019-07-24", meet: "2019年光州世锦赛", place: "光州",
    note: "决赛次于米拉克的世界纪录摘银，为亚洲选手历史最快",
  },
  // 中国纪录（长池）未能核实到可靠来源，暂缺

  top10: [
    { time: "1:50.34", holder: "Kristóf Milák", country: "HUN", date: "2022-06-21", meet: "2022年布达佩斯世锦赛", wr: true },
    { time: "1:50.73", holder: "Kristóf Milák", country: "HUN", date: "2019-07-24", meet: "2019年光州世锦赛" },
    { time: "1:51.21", holder: "Léon Marchand", country: "FRA", date: "2024-07-31", meet: "2024年巴黎奥运会", note: "奥运会纪录" },
    { time: "1:51.25", holder: "Kristóf Milák", country: "HUN", date: "2021-07-29", meet: "2020年东京奥运会" },
    { time: "1:51.40", holder: "Kristóf Milák", country: "HUN", date: "2022-05-26", meet: "匈牙利全国锦标赛", place: "布达佩斯", note: "单源待复核" },
    { time: "1:51.51", holder: "Michael Phelps", country: "USA", date: "2009-07-29", meet: "2009年罗马世锦赛" },
    { time: "1:51.75", holder: "Kristóf Milák", country: "HUN", date: "2024-07-31", meet: "2024年巴黎奥运会", note: "决赛银牌，次于马尔尚" },
    { time: "1:52.43", holder: "Léon Marchand", country: "FRA", date: "2023-07-26", meet: "2023年福冈世锦赛" },
    { time: "1:52.53", holder: "Katsuji Matsumoto", country: "JPN", date: "2019-07-24", meet: "2019年光州世锦赛", note: "亚洲纪录" },
    { time: "1:52.80", holder: "Ilya Kharun", country: "CAN", date: "2024-07-31", meet: "2024年巴黎奥运会", note: "加拿大纪录" },
  ],
  top10Note:
    "米拉克独占前十中的五席；马尔尚在巴黎的1:51.21为奥运会纪录。2026年泛太赛乌尔兰多（1:53.11）与2026年欧锦赛马尔尚（成绩待核）均未及前十门槛。",

  history: [
    {
      heading: "突破两分钟的漫长跋涉",
      paragraphs: [
        "在蝶泳技术与训练体系尚不成熟的年代，200米蝶泳突破2分钟大关用了近二十年：1975年7月，美国的加里·霍尔先游出2:00.53，一个月后再进一步到1:59.19，成为史上首位游进2分钟的选手。",
        "1976年蒙特利尔，迈克·布鲁纳在奥运决赛把纪录推到1:57.43；1984年洛杉矶，澳大利亚的乔恩·西本以1:57.04夺冠并刷新世界纪录，成为奥运史上该项目的经典冷门之一。",
      ],
    },
    {
      heading: "斯图尔特、潘克拉托夫与菲尔普斯王朝",
      paragraphs: [
        "80年代末到90年代属于梅尔文·斯图尔特与杰尼斯·潘克拉托夫：前者在1985—1991年间三度刷新（1:56.96、1:56.24、1:55.69），后者在1995年两个月内两次大幅改写（1:55.22、1:54.05）。",
        "2001年3月，15岁的迈克尔·菲尔普斯以1:53.51首次打破世界纪录，此后在福冈、巴塞罗那、蒙特利尔、墨尔本的世锦赛上步步推进，2009年罗马的1:51.51将项目带入全新维度——这一纪录保持了整整十年。",
      ],
    },
    {
      heading: "米拉克与马尔尚的新纪元",
      paragraphs: [
        "2019年光州，19岁的克里斯托夫·米拉克以1:50.73终结了菲尔普斯的十年统治；东京奥运（1:51.25）加冕后，他又在2022年6月布达佩斯主场把世界纪录定格在1:50.34——亚军马尔尚被甩开三秒开外。",
        "2024年巴黎，主场作战的莱昂·马尔尚以1:51.21击败米拉克（1:51.75）夺金；2023年福冈他同样问鼎（1:52.43）。亚洲方面，松元克央2019年在光州游出的1:52.53仍是亚洲纪录；2026年名古屋亚运，中国台北的王冠闳以1:55.05夺冠，为该地区首枚男子游泳亚运金牌。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：World record progression 200 metres butterfly",
      url: "https://en.wikipedia.org/wiki/World_record_progression_200_metres_butterfly",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
    {
      label: "Olympics.com：布达佩斯 2022 世锦赛男子 200 米蝶泳决赛",
      url: "https://www.olympics.com/en/olympic-games/budapest-2022/results/swimming/200m-butterfly-men",
    },
    {
      label: "SwimSwam：Milak breaks 200 Fly World Record in 1:50.34",
      url: "https://swimswam.com/milak-breaks-200-fly-world-record-in-150-34",
    },
  ],
};
