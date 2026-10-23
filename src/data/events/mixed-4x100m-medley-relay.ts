import type { SwimEvent } from "@/lib/types";

/**
 * 男女混合 4×100 米混合泳接力（长池）世界纪录演进
 * 数据来源：Wikipedia「4 × 100 metres medley relay」混合接力演进表（逐行核对）、
 * World Aquatics 官方纪录、各届世锦赛/奥运会/亚运官方成绩页
 * 数据截至：2026年10月
 *
 * holder 一律使用国家英文名（站点接力项目惯例）。
 * 说明（宁缺毋滥）：
 *  - 混合接力 2015 年喀山世锦赛首次设项，2020 东京入奥；
 *  - 世界泳联在正式设项前已承认混合接力的世界纪录：2013 年印第安纳大学
 *    校队 4:13.47 与美国、俄罗斯俱乐部层面的成绩均列入演进表（已注明性质）；
 *  - 现世界纪录 3:36.70（2026-08-12 泛太平洋锦标赛，美国队）；
 *  - 亚洲纪录为中国队 3:37.55（2024-08-04 巴黎奥运会）。
 */
export const mixed4x100mMedleyRelay: SwimEvent = {
  slug: "mixed-4x100m-medley-relay",
  stroke: "relay",
  distance: 400,
  gender: "mixed",
  course: "LCM",
  name: "男女混合 4×100 米混合泳接力",
  summary:
    "3:36.70——2026年8月12日的欧文，美国队在泛太平洋锦标赛上把混合接力推到人类从未到过的地方：三名女将中的两位（沃尔什、道格拉斯）加上两名男选手，接力顺序的每一次排列都是一道战术题。这项2015年才设项、2020年才入奥的新项目，十一年间已被改写八次。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "4:13.47", holder: "Indiana University Hoosiers", country: "USA", date: "2013-09-26", meet: "IU 秋季赛", place: "布卢明顿", note: "校队层面成绩，世界泳联在混合接力设项前已承认该类纪录" },
    { time: "3:48.74", holder: "St. Petersburg", country: "RUS", date: "2014-05-16", meet: "俄罗斯全国锦标赛", place: "莫斯科", note: "俱乐部（圣彼得堡）层面成绩" },
    { time: "3:44.02", holder: "Great Britain", country: "GBR", date: "2014-08-19", meet: "欧洲游泳锦标赛", place: "柏林", note: "首支在国家队层面创造混合接力世界纪录的队伍" },
    { time: "3:41.71", holder: "Great Britain", country: "GBR", date: "2015-08-05", meet: "世界锦标赛", place: "喀山", note: "混合接力首次进入世锦赛即改写纪录：沃克-赫伯恩·皮蒂·奥康纳·哈尔萨尔" },
    { time: "3:40.28", holder: "United States", country: "USA", date: "2017-07-26", meet: "世界锦标赛", place: "布达佩斯", flags: ["h"], note: "预赛改写" },
    { time: "3:38.56", holder: "United States", country: "USA", date: "2017-07-26", meet: "世界锦标赛", place: "布达佩斯", note: "同日决赛再破：格雷弗斯·莉莉·金·德雷塞尔·曼努埃尔" },
    { time: "3:38.41", holder: "China", country: "CHN", date: "2020-10-01", meet: "中国全国锦标赛", place: "青岛", note: "徐嘉余·闫子贝·张雨霏·杨浚瑄；东京奥运会前一年改写" },
    { time: "3:37.58", holder: "Great Britain", country: "GBR", date: "2021-07-31", meet: "奥运会", place: "东京", note: "混合接力奥运首金兼破纪录：道森·皮蒂·盖伊·霍普金" },
    { time: "3:37.43", holder: "United States", country: "USA", date: "2024-08-03", meet: "奥运会", place: "巴黎", note: "墨菲·芬克·沃尔什·赫斯克；0.15秒之差改写" },
    { time: "3:36.70", holder: "United States", country: "USA", date: "2026-08-12", meet: "泛太平洋锦标赛", place: "欧文", note: "现世界纪录——莫德格林·马蒂亚斯·沃尔什·道格拉斯" },
  ],

  asianRecord: {
    time: "3:37.55", holder: "China", country: "CHN",
    date: "2024-08-04", meet: "奥运会", place: "巴黎",
    note: "徐嘉余·覃海洋·张雨霏·杨浚瑄；亚洲纪录与中国纪录，同时为 2024 巴黎奥运混合接力银牌成绩",
  },
  chineseRecord: {
    time: "3:37.55", holder: "China", country: "CHN",
    date: "2024-08-04", meet: "奥运会", place: "巴黎",
    note: "此前为 3:38.41（2020 青岛全国锦标赛，当时为世界纪录）",
  },

  top10: [
    { time: "3:36.70", holder: "United States", country: "USA", date: "2026-08-12", meet: "2026年泛太平洋锦标赛", wr: true, note: "现世界纪录" },
    { time: "3:37.43", holder: "United States", country: "USA", date: "2024-08-03", meet: "2024年巴黎奥运会", note: "奥运金牌" },
    { time: "3:37.55", holder: "China", country: "CHN", date: "2024-08-04", meet: "2024年巴黎奥运会", note: "亚洲纪录；奥运银牌" },
    { time: "3:37.58", holder: "Great Britain", country: "GBR", date: "2021-07-31", meet: "2020年东京奥运会", note: "混合接力奥运首金" },
    { time: "3:37.73", holder: "China", country: "CHN", date: "2023-09-29", meet: "2022年杭州亚运会", note: "破赛会纪录（赛事于2023年举行）" },
    { time: "3:37.97", holder: "Neutral Athletes B", country: "RUS", date: "2025-07-26", meet: "2025年新加坡世锦赛", note: "世锦赛冠军兼赛会纪录" },
    { time: "3:38.41", holder: "China", country: "CHN", date: "2020-10-01", meet: "2020年中国全国锦标赛", note: "曾为世界纪录" },
    { time: "3:38.56", holder: "United States", country: "USA", date: "2017-07-26", meet: "2017年布达佩斯世锦赛" },
    { time: "3:38.57", holder: "China", country: "CHN", date: "2023-07-26", meet: "2023年福冈世锦赛", note: "世锦赛金牌" },
    { time: "3:38.79", holder: "United States", country: "USA", date: "2022-06-24", meet: "2022年布达佩斯世锦赛" },
  ],
  top10Note:
    "前十门槛 3:38.79——注意这是一个只有十一年历史的项目，前十成绩几乎全部诞生于 2020 年之后。美国队占四席，中国队三席（含亚洲纪录 3:37.55）。",

  history: [
    {
      heading: "2015：一个为「性别战术」而生的项目",
      paragraphs: [
        "混合接力是游泳史上最年轻的集体项目：四人两男两女，棒次可以任意排列——仰、蛙、蝶、自四棒如何分配给男女选手，本身就是一场赛前的博弈。常见的选择是男选手游仰泳与蛙泳、女选手游蝶泳与自由泳，也有队伍把男选手放在自由泳末棒以求「后程反超」。",
        "2015 年喀山世锦赛首次设项。英国队由克里斯·沃克-赫伯恩（仰）、亚当·皮蒂（蛙）、西沃恩-玛丽·奥康纳（蝶）、弗兰·哈尔萨尔（自）组成，以 3:41.71 拿下首金并创世界纪录。世界泳联在此之前已开始承认各俱乐部创造的混合接力纪录（2013 年印第安纳大学 4:13.47 是起点）。",
      ],
    },
    {
      heading: "从东京到巴黎：0.15 秒的拉锯",
      paragraphs: [
        "2017 年布达佩斯，美国队在预赛与决赛同日两破（3:40.28→3:38.56）。2020 年 10 月的青岛，中国队以 3:38.41 短暂成为世界纪录保持者——徐嘉余、闫子贝、张雨霏、杨浚瑄，一年后他们在东京拿下了这个项目的奥运银牌。",
        "2021 年 7 月 31 日，混合接力的奥运首金被英国队拿走：道森、皮蒂、盖伊、霍普金 3:37.58。2024 年 8 月 3 日巴黎，美国队墨菲、芬克、沃尔什、赫斯克以 3:37.43 以 0.15 秒之差改写；次日中国队 3:37.55 摘银并创亚洲纪录——两支队伍的成绩相差 0.12 秒。",
      ],
    },
    {
      heading: "2026：3:36 的门槛",
      paragraphs: [
        "2026 年 8 月 12 日，泛太平洋锦标赛在欧文落幕，美国队莫德格林、马蒂亚斯、格雷琴·沃尔什、凯特·道格拉斯游出 3:36.70——混合接力第一次进入 3:36 区间。同一年，中国队在名古屋亚运会以 3:40.38 夺冠，亚洲的整体水平仍与 3:37 的亚洲纪录有距离。",
        "对这个只有十一年历史的项目而言，纪录的年轮还很浅：八次改写、四支队伍（英国、美国、中国、俄罗斯）、两次入奥。它的下一次改写，可能只取决于某支队伍如何排列那四个人。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：4 × 100 metres medley relay（含混合接力演进表）",
      url: "https://en.wikipedia.org/wiki/4_%C3%97_100_metres_medley_relay",
    },
    {
      label: "Wikipedia：List of Asian records in swimming",
      url: "https://en.wikipedia.org/wiki/List_of_Asian_records_in_swimming",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/records",
    },
  ],
};
