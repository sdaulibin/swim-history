import type { SwimEvent } from "@/lib/types";

/**
 * 女子 4×100 米混合泳接力（长池）世界纪录演进
 * 数据来源：Wikipedia「4 × 100 metres medley relay」演进表（逐行核对）、
 * World Aquatics 官方纪录、各届世锦赛/奥运会官方成绩页
 * 数据截至：2026年10月
 *
 * holder 一律使用国家英文名（站点接力项目惯例）。
 * 说明（宁缺毋滥）：
 *  - 本表从 1953 年匈牙利 5:10.8 起完整收录（含手计时时代）；
 *  - 现世界纪录 3:49.34（2025-08-03 新加坡世锦赛），旧版停在 3:49.63
 *    （2024 巴黎），已按官方成绩页更新；
 *  - 亚洲纪录仍为中国队 3:52.19（2009 罗马世锦赛，快速泳衣时代）。
 */
export const womens4x100mMedleyRelay: SwimEvent = {
  slug: "womens-4x100m-medley-relay",
  stroke: "relay",
  distance: 400,
  gender: "women",
  course: "LCM",
  name: "女子 4×100 米混合泳接力",
  summary:
    "3:49.34——2025年8月3日的新加坡，雷根·史密斯、凯特·道格拉斯、格雷琴·沃尔什与托丽·赫斯克把女子混合泳接力第一次带进3:50之内。而在亚洲，3:52.19（2009罗马）仍是十六年未被触及的天花板——那是赵菁、孙晔、焦刘洋、庞佳颖的泳衣时代遗产。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "5:10.8", holder: "Hungary", country: "HUN", date: "1953-07-24", place: "布达佩斯" },
    { time: "5:09.2", holder: "Hungary", country: "HUN", date: "1953-08-10", place: "布加勒斯特" },
    { time: "5:07.8", holder: "Hungary", country: "HUN", date: "1954-08-03", place: "布达佩斯" },
    { time: "5:06.2", holder: "France", country: "FRA", date: "1954-08-16", place: "马赛" },
    { time: "5:02.1", holder: "Netherlands", country: "NED", date: "1954-11-27", place: "鹿特丹" },
    { time: "5:00.1", holder: "Netherlands", country: "NED", date: "1955-07-17", place: "巴黎" },
    { time: "4:57.8", holder: "Hungary", country: "HUN", date: "1955-09-03", place: "布达佩斯" },
    { time: "4:54.3", holder: "Netherlands", country: "NED", date: "1956-11-19", place: "希尔弗瑟姆" },
    { time: "4:53.1", holder: "Netherlands", country: "NED", date: "1956-12-08", place: "兹沃勒" },
    { time: "4:57.0", holder: "Netherlands", country: "NED", date: "1957-05-18", meet: "英荷对抗赛", place: "布莱克浦" },
    { time: "4:52.9", holder: "Netherlands", country: "NED", date: "1958-09-05", meet: "欧洲游泳锦标赛", place: "布达佩斯" },
    { time: "4:51.5", holder: "Netherlands", country: "NED", date: "1959-07-26", meet: "荷英对抗赛", place: "瓦尔韦克" },
    { time: "4:44.6", holder: "United States", country: "USA", date: "1959-09-06", place: "芝加哥" },
    { time: "4:41.1", holder: "United States", country: "USA", date: "1960-09-02", meet: "奥运会", place: "罗马" },
    { time: "4:40.1", holder: "East Germany", country: "GDR", date: "1962-08-23", meet: "欧洲游泳锦标赛", place: "莱比锡" },
    { time: "4:39.1", holder: "Netherlands", country: "NED", date: "1964-06-28", meet: "荷英对抗赛", place: "格罗宁根" },
    { time: "4:38.1", holder: "United States", country: "USA", date: "1964-07-04", place: "洛斯阿尔托斯" },
    { time: "4:34.6", holder: "United States", country: "USA", date: "1964-09-28", meet: "奥运前测试赛", place: "洛杉矶" },
    { time: "4:33.9", holder: "United States", country: "USA", date: "1964-10-18", meet: "奥运会", place: "东京" },
    { time: "4:30.0", holder: "United States", country: "USA", date: "1967-07-30", meet: "泛美运动会", place: "温尼伯" },
    { time: "4:28.1", holder: "United States", country: "USA", date: "1968-09-14", meet: "奥运前测试赛", place: "科罗拉多斯普林斯" },
    { time: "4:27.4", holder: "United States", country: "USA", date: "1970-09-01", place: "东京" },
    { time: "4:27.3", holder: "United States", country: "USA", date: "1971-09-11", meet: "苏美英对抗赛", place: "明斯克" },
    { time: "4:25.34", holder: "United States", country: "USA", date: "1972-08-18", meet: "奥运前测试赛", place: "诺克斯维尔" },
    { time: "4:20.75", holder: "United States", country: "USA", date: "1972-09-03", meet: "奥运会", place: "慕尼黑" },
    { time: "4:16.84", holder: "East Germany", country: "GDR", date: "1973-09-04", meet: "世界锦标赛", place: "贝尔格莱德", note: "首届世锦赛夺冠兼破世界纪录" },
    { time: "4:13.78", holder: "East Germany", country: "GDR", date: "1974-08-24", meet: "欧洲游泳锦标赛", place: "维也纳" },
    { time: "4:13.41", holder: "East Germany", country: "GDR", date: "1976-06-05", meet: "东德全国锦标赛", place: "柏林" },
    { time: "4:07.95", holder: "East Germany", country: "GDR", date: "1976-07-18", meet: "奥运会", place: "蒙特利尔" },
    { time: "4:06.67", holder: "East Germany", country: "GDR", date: "1980-07-20", meet: "奥运会", place: "莫斯科" },
    { time: "4:05.88", holder: "East Germany", country: "GDR", date: "1982-08-06", meet: "世界锦标赛", place: "瓜亚基尔" },
    { time: "4:05.79", holder: "East Germany", country: "GDR", date: "1983-08-26", meet: "欧洲游泳锦标赛", place: "罗马" },
    { time: "4:03.69", holder: "East Germany", country: "GDR", date: "1984-08-24", meet: "友谊运动会", place: "莫斯科" },
    { time: "4:02.54", holder: "United States", country: "USA", date: "1992-07-30", meet: "奥运会", place: "巴塞罗那" },
    { time: "4:01.67", holder: "China", country: "CHN", date: "1994-09-10", meet: "世界锦标赛", place: "罗马" },
    { time: "3:58.30", holder: "United States", country: "USA", date: "2000-09-23", meet: "奥运会", place: "悉尼" },
    { time: "3:57.32", holder: "Australia", country: "AUS", date: "2004-08-21", meet: "奥运会", place: "雅典" },
    { time: "3:56.30", holder: "Australia", country: "AUS", date: "2006-03-21", meet: "英联邦运动会", place: "墨尔本" },
    { time: "3:55.74", holder: "Australia", country: "AUS", date: "2007-03-31", meet: "世界锦标赛", place: "墨尔本" },
    { time: "3:52.69", holder: "Australia", country: "AUS", date: "2008-08-17", meet: "奥运会", place: "北京" },
    { time: "3:52.19", holder: "China", country: "CHN", date: "2009-08-01", meet: "世界锦标赛", place: "罗马", note: "赵菁·陈慧佳·焦刘洋·李哲思；快速泳衣时代夺冠兼破世界纪录——亚洲纪录至今" },
    { time: "3:52.05", holder: "United States", country: "USA", date: "2012-08-04", meet: "奥运会", place: "伦敦" },
    { time: "3:51.55", holder: "United States", country: "USA", date: "2017-07-30", meet: "世界锦标赛", place: "布达佩斯", note: "夺冠兼破世界纪录" },
    { time: "3:50.40", holder: "United States", country: "USA", date: "2019-07-28", meet: "世界锦标赛", place: "光州" },
    { time: "3:49.63", holder: "United States", country: "USA", date: "2024-08-04", meet: "奥运会", place: "巴黎", note: "保持一年即被改写" },
    { time: "3:49.34", holder: "United States", country: "USA", date: "2025-08-03", meet: "世界锦标赛", place: "新加坡", note: "现世界纪录——史密斯·道格拉斯·沃尔什·赫斯克；人类首支游进3:50的女子接力" },
  ],

  asianRecord: {
    time: "3:52.19", holder: "China", country: "CHN",
    date: "2009-08-01", meet: "世界锦标赛", place: "罗马",
    note: "赵菁·陈慧佳·焦刘洋·李哲思；快速泳衣时代夺冠兼破世界纪录，亚洲纪录保持至今；2026 名古屋亚运中国队 3:54.55 夺冠",
  },
  chineseRecord: {
    time: "3:52.19", holder: "China", country: "CHN",
    date: "2009-08-01", meet: "世界锦标赛", place: "罗马",
    note: "中国女子接力史上唯一一次以世界纪录保持者身份离场",
  },

  top10: [
    { time: "3:49.34", holder: "United States", country: "USA", date: "2025-08-03", meet: "2025年新加坡世锦赛", wr: true, note: "现世界纪录" },
    { time: "3:49.63", holder: "United States", country: "USA", date: "2024-08-04", meet: "2024年巴黎奥运会", note: "保持一年即被改写" },
    { time: "3:50.40", holder: "United States", country: "USA", date: "2019-07-28", meet: "2019年光州世锦赛" },
    { time: "3:51.55", holder: "United States", country: "USA", date: "2017-07-30", meet: "2017年布达佩斯世锦赛" },
    { time: "3:51.60", holder: "Australia", country: "AUS", date: "2021-08-01", meet: "2020年东京奥运会", note: "奥运金牌成绩" },
    { time: "3:52.05", holder: "United States", country: "USA", date: "2012-08-04", meet: "2012年伦敦奥运会" },
    { time: "3:52.08", holder: "United States", country: "USA", date: "2023-07-30", meet: "2023年福冈世锦赛" },
    { time: "3:52.19", holder: "China", country: "CHN", date: "2009-08-01", meet: "2009年罗马世锦赛", note: "亚洲纪录" },
    { time: "3:52.36", holder: "United States", country: "USA", date: "2011-07-30", meet: "2011年上海世锦赛" },
    { time: "3:52.67", holder: "Australia", country: "AUS", date: "2025-08-03", meet: "2025年新加坡世锦赛", note: "当届银牌" },
  ],
  top10Note:
    "前十门槛 3:52.67，美国队占六席。唯一的亚洲席位是中国队 2009 罗马的 3:52.19——那之后十六年，没有任何亚洲队伍再游进 3:53。",

  history: [
    {
      heading: "美国与澳大利亚的二人转",
      paragraphs: [
        "女子混合泳接力的世界纪录长期在美国与澳大利亚之间易手：1992 年巴塞罗那美国队 4:02.54、1994 年罗马中国队 4:01.67（亚洲纪录的前身）、2000 年悉尼美国队 3:58.30——直到 2004 年雅典，澳大利亚以 3:57.32 首次把这个项目带进澳洲纪元。",
        "2007 年墨尔本世锦赛（3:55.74）与 2008 年北京奥运会（3:52.69），澳大利亚两度改写；2012 年伦敦，米西·富兰克林领衔的美国队以 3:52.05 抢回纪录。此后是美国的十年：2017 布达佩斯 3:51.55、2019 光州 3:50.40、2024 巴黎 3:49.63、2025 新加坡 3:49.34。",
      ],
    },
    {
      heading: "罗马之夜的亚洲回声",
      paragraphs: [
        "亚洲人距离王座最近的一次要追溯到 2009 年 8 月 1 日的罗马：赵菁（仰）、陈慧佳（蛙）、焦刘洋（蝶）、李哲思（自）组成的中国队以 3:52.19 夺冠兼破世界纪录——这是中国女子接力史上唯一一次以世界纪录保持者身份离场。",
        "泳衣时代结束后，3:52.19 成了亚洲的天花板：2018 年雅加达亚运日本队 3:54.73、2026 年名古屋中国队 3:54.55，都在 3:54 之外。亚运冠军榜上中国队与日本队轮流坐庄，详见下方冠军榜。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：4 × 100 metres medley relay（世界纪录演进表）",
      url: "https://en.wikipedia.org/wiki/4_%C3%97_100_metres_medley_relay",
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
