import type { SwimEvent } from "@/lib/types";

/**
 * 男子 50 米蝶泳（长池）世界纪录演进
 * 数据来源：Wikipedia「50 metres butterfly」演进表（逐行核对）、
 * World Aquatics 官方纪录、各届世锦赛官方成绩页
 * 数据截至：2026年10月
 *
 * 重要勘误：
 *  - 本站旧版把德雷塞尔 2019 光州决赛的 22.35 记为「世界纪录」，
 *    实为世锦赛纪录（CR）；世界纪录是乌克兰戈沃罗夫 2018-07-01
 *    在罗马七丘杯游出的 22.27，悬置至今；
 *  - 50 米蝶泳不是奥运会项目，世锦赛（2001 年起）与欧锦赛是最高舞台。
 */
export const mens50mButterfly: SwimEvent = {
  slug: "mens-50m-butterfly",
  stroke: "butterfly",
  distance: 50,
  gender: "men",
  course: "LCM",
  name: "男子 50 米蝶泳",
  summary:
    "22.27——2018年7月1日的罗马，安德里·戈沃罗夫在七丘杯游出这个数字，八年后仍无人能及。这不是奥运项目，却是世锦赛最凶的「一枪定生死」：从许吉尔到舍曼，从西埃洛到德雷塞尔，五十米只有一次入水、一次转身前的全部勇气。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "23.60", holder: "Geoff Huegill", country: "AUS", date: "2000-05-14", meet: "澳大利亚全国锦标赛", place: "悉尼", note: "该项目首个被承认的世界纪录（1996 年潘克拉托夫的 23.68 未被国际泳联承认）" },
    { time: "23.44", holder: "Geoff Huegill", country: "AUS", date: "2001-07-27", meet: "世界锦标赛", place: "福冈", flags: ["sf"] },
    { time: "23.43", holder: "Matt Welsh", country: "AUS", date: "2003-07-21", meet: "世界锦标赛", place: "巴塞罗那", note: "世锦赛夺冠兼破纪录" },
    { time: "23.30", holder: "Ian Crocker", country: "USA", date: "2004-02-29", meet: "Big 12 计时赛", place: "奥斯汀", flags: ["tt"] },
    { time: "23.01", holder: "Roland Schoeman", country: "RSA", date: "2005-07-24", meet: "世界锦标赛", place: "蒙特利尔", flags: ["sf"] },
    { time: "22.96", holder: "Roland Schoeman", country: "RSA", date: "2005-07-25", meet: "世界锦标赛", place: "蒙特利尔", note: "世锦赛夺冠兼破纪录，首次游进23秒" },
    { time: "22.43", holder: "Rafael Muñoz", country: "ESP", date: "2009-04-05", meet: "西班牙全国锦标赛", place: "马拉加", flags: ["sf"], note: "快速泳衣时代" },
    { time: "22.27", holder: "Andriy Govorov", country: "UKR", date: "2018-07-01", meet: "七丘杯", place: "罗马", note: "现世界纪录——悬置八年" },
  ],

  asianRecord: {
    time: "22.91", holder: "Mikhail Arkhangelskiy", country: "BRN",
    date: "2026-09", meet: "亚运会",
    note: "巴林归化选手阿尔汉格尔斯基 2026 名古屋亚运以 22.91 夺冠并平亚洲纪录；张雨霏同届以 25.41 拿下女子组金牌",
  },

  top10: [
    { time: "22.27", holder: "Andriy Govorov", country: "UKR", date: "2018-07-01", meet: "2018年七丘杯（罗马）", wr: true, note: "现世界纪录" },
    { time: "22.35", holder: "Caeleb Dressel", country: "USA", date: "2019-07-27", meet: "2019年光州世锦赛", note: "世锦赛纪录，非世界纪录" },
    { time: "22.43", holder: "Rafael Muñoz", country: "ESP", date: "2009-04-05", meet: "2009年西班牙全国锦标赛" },
    { time: "22.48", holder: "Maxime Grousset", country: "FRA", date: "2025-08-02", meet: "2025年新加坡世锦赛" },
    { time: "22.51", holder: "Noè Ponti", country: "SUI", date: "2025-08-02", meet: "2025年新加坡世锦赛" },
    { time: "22.57", holder: "Caeleb Dressel", country: "USA", date: "2022-06-19", meet: "2022年布达佩斯世锦赛" },
    { time: "22.67", holder: "Milorad Čavić", country: "SRB", date: "2009-07-27", meet: "2009年罗马世锦赛" },
    { time: "22.68", holder: "Thomas Ceccon", country: "ITA", date: "2023-07-24", meet: "2023年福冈世锦赛" },
    { time: "22.71", holder: "Ben Proud", country: "GBR", date: "2022-06-19", meet: "2022年布达佩斯世锦赛（预赛）" },
    { time: "22.75", holder: "Ben Proud", country: "GBR", date: "2017-07-29", meet: "2017年布达佩斯世锦赛" },
  ],
  top10Note:
    "前十门槛 22.75；戈沃罗夫的 22.27 是快速泳衣之后最长寿的世界纪录之一。亚洲最好刻度为巴林阿尔汉格尔斯基的 22.91（2026 名古屋亚运，平亚洲纪录），中国最好成绩未进前十。",

  history: [
    {
      heading: "最短的项目，最长的等待",
      paragraphs: [
        "50 米蝶泳 2001 年才进入世锦赛，但它的世界纪录可以追溯到更早：1996 年亚特兰大前夜，俄罗斯的杰尼斯·潘克拉托夫在法国米卢斯游出 23.68，国际泳联当年并未承认。真正的第一条官方纪录属于澳大利亚的杰夫·许吉尔——2000 年 5 月在悉尼的 23.60。",
        "2001 年福冈、2003 年巴塞罗那、2005 年蒙特利尔，三年三个纪录：许吉尔 23.44、威尔士 23.43、舍曼 22.96。南非人舍曼在蒙特利尔一天之内先在半决赛破纪录，再在决赛夺金并游进 23 秒——这是这个项目第一次真正进入「22 秒时代」。",
      ],
    },
    {
      heading: "戈沃罗夫的 22.27",
      paragraphs: [
        "2009 年的快速泳衣把纪录推到 22.43（西班牙穆尼奥斯）。泳衣禁令之后，这个数字反而成了顽石：德雷塞尔 2019 年在光州游出 22.35，很多人误以为是世界纪录——其实他破的是世锦赛纪录；真正的世界纪录在一年前已被乌克兰人戈沃罗夫以 22.27 改写。",
        "2018 年 7 月 1 日，罗马七丘杯，戈沃罗夫在预赛之外的决赛中一枪定音。此后八年，从德雷塞尔到格鲁塞、蓬蒂、切孔，最快的世界大赛成绩仍停在 22.35——0.08 秒，是五十米蝶泳至今未被跨越的鸿沟。",
      ],
    },
    {
      heading: "亚洲的一枪",
      paragraphs: [
        "亚洲的速度在这个项目上并不缺席：周嘉威 2006/2010 两届亚运以 23.94、23.66 连续刷新赛会纪录；2014 年仁川石杨 23.46；2018 年雅加达，约瑟夫·斯库林为新加坡夺金。",
        "2026 年名古屋亚运会，巴林归化选手米哈伊尔·阿尔汉格尔斯基在决赛游出 22.91，平亚洲纪录夺金——这是亚洲选手第一次站到 22.9 的门槛上。同届中国张雨霏以 25.41 拿下女子组金牌。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：50 metres butterfly（世界纪录演进表）",
      url: "https://en.wikipedia.org/wiki/50_metres_butterfly",
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
