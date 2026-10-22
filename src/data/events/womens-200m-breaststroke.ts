import type { SwimEvent } from "@/lib/types";

/**
 * 女子 200 米蛙泳（长池）世界纪录演进
 * 数据来源：Wikipedia「200 metres breaststroke」演进表（逐行核对）、
 * World Aquatics 官方纪录、各届世锦赛/奥运会/亚运官方成绩页
 * 数据截至：2026年10月
 *
 * 收录口径（宁缺毋滥）：
 *  - 本表从 1974 年肖特 2:37.89 起收录；1921–1973 的手计时/早期电计时
 *    沿革（36 次改写）暂不收录；
 *  - 世界纪录为俄罗斯奇库诺娃 2:17.55（2023-04-21 喀山，俄罗斯全国锦标赛），
 *    悬置三年；2026 名古屋亚运日本加藤琴 2:22.57 夺冠并破亚洲纪录；
 *  - 亚洲纪录现为加藤琴 2:22.57（2026-09-24 名古屋），此前为齐晖 2:22.99
 *    （2001 杭州，保持二十五年）；中国纪录仍为齐晖 2:22.99。
 */
export const womens200mBreaststroke: SwimEvent = {
  slug: "womens-200m-breaststroke",
  stroke: "breaststroke",
  distance: 200,
  gender: "women",
  course: "LCM",
  name: "女子 200 米蛙泳",
  summary:
    "2:17.55——2023年4月21日的喀山，21岁的叶夫根尼娅·奇库诺娃在俄罗斯全国锦标赛上游出这个数字，把索妮2012年的伦敦纪录推进1.4秒。三年过去，最接近的人也差了近两秒，这是女子泳坛现存最孤独的世界纪录之一。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "2:37.89", holder: "Anne-Katrin Schott", country: "GDR", date: "1974-07-06", meet: "东德全国锦标赛", place: "罗斯托克", note: "本站收录起点；此前沿革暂缺" },
    { time: "2:37.44", holder: "Karla Linke", country: "GDR", date: "1974-08-19", meet: "欧洲游泳锦标赛", place: "维也纳", flags: ["h"] },
    { time: "2:34.99", holder: "Karla Linke", country: "GDR", date: "1974-08-19", meet: "欧洲游泳锦标赛", place: "维也纳", note: "同一天两破" },
    { time: "2:33.35", holder: "Marina Koshevaya", country: "URS", date: "1976-07-21", meet: "奥运会", place: "蒙特利尔", note: "奥运夺冠兼破纪录" },
    { time: "2:33.32", holder: "Yulia Bogdanova", country: "URS", date: "1978-04-07", place: "列宁格勒" },
    { time: "2:33.11", holder: "Lina Kačiušytė", country: "URS", date: "1978-08-24", meet: "世界锦标赛", place: "西柏林", flags: ["h"] },
    { time: "2:31.42", holder: "Lina Kačiušytė", country: "URS", date: "1978-08-24", meet: "世界锦标赛", place: "西柏林", note: "世锦赛夺冠兼破纪录" },
    { time: "2:31.09", holder: "Svetlana Varganova", country: "URS", date: "1979-03-30", meet: "苏联对东德对抗赛", place: "明斯克" },
    { time: "2:28.36", holder: "Lina Kačiušytė", country: "URS", date: "1979-04-06", meet: "苏联对东德青年赛", place: "波茨坦" },
    { time: "2:28.33", holder: "Silke Hörner", country: "GDR", date: "1985-06-05", place: "莱比锡" },
    { time: "2:28.20", holder: "Sylvia Gerasch", country: "GDR", date: "1986-03-01", place: "列宁格勒" },
    { time: "2:27.40", holder: "Silke Hörner", country: "GDR", date: "1986-08-18", meet: "世界锦标赛", place: "马德里", note: "世锦赛夺冠兼破纪录" },
    { time: "2:27.27", holder: "Allison Higson", country: "CAN", date: "1988-05-28", place: "蒙特利尔" },
    { time: "2:26.71", holder: "Silke Hörner", country: "GDR", date: "1988-09-21", meet: "奥运会", place: "汉城", note: "奥运夺冠兼破纪录" },
    { time: "2:25.92", holder: "Anita Nall", country: "USA", date: "1992-03-02", meet: "美国奥运选拔赛", place: "印第安纳波利斯", flags: ["h"] },
    { time: "2:25.35", holder: "Anita Nall", country: "USA", date: "1992-03-02", meet: "美国奥运选拔赛", place: "印第安纳波利斯", note: "15岁，同一天两破" },
    { time: "2:24.76", holder: "Rebecca Brown", country: "AUS", date: "1994-03-15", meet: "澳大利亚全国锦标赛", place: "布里斯班" },
    { time: "2:24.69", holder: "Penelope Heyns", country: "RSA", date: "1999-07-17", meet: "珍妮特·埃文斯邀请赛", place: "洛杉矶", flags: ["h"] },
    { time: "2:24.51", holder: "Penelope Heyns", country: "RSA", date: "1999-07-17", meet: "珍妮特·埃文斯邀请赛", place: "洛杉矶" },
    { time: "2:24.42", holder: "Penelope Heyns", country: "RSA", date: "1999-08-26", meet: "泛太平洋锦标赛", place: "悉尼", flags: ["sf"] },
    { time: "2:23.64", holder: "Penelope Heyns", country: "RSA", date: "1999-08-27", meet: "泛太平洋锦标赛", place: "悉尼" },
    { time: "2:22.99", holder: "Qi Hui", country: "CHN", date: "2001-04-13", meet: "中国全国锦标赛", place: "杭州", note: "亚洲纪录保持至今" },
    { time: "2:22.96", holder: "Leisel Jones", country: "AUS", date: "2004-07-10", meet: "澳大利亚大奖赛", place: "布里斯班" },
    { time: "2:22.44", holder: "Amanda Beard", country: "USA", date: "2004-07-12", meet: "美国奥运选拔赛", place: "长滩" },
    { time: "2:21.72", holder: "Leisel Jones", country: "AUS", date: "2005-07-29", meet: "世界锦标赛", place: "蒙特利尔", note: "世锦赛夺冠兼破纪录" },
    { time: "2:20.54", holder: "Leisel Jones", country: "AUS", date: "2006-02-01", meet: "澳大利亚全国锦标赛", place: "墨尔本" },
    { time: "2:20.22", holder: "Rebecca Soni", country: "USA", date: "2008-08-15", meet: "奥运会", place: "北京", note: "奥运夺冠兼破纪录" },
    { time: "2:20.12", holder: "Annamay Pierse", country: "CAN", date: "2009-07-29", meet: "世界锦标赛", place: "罗马", flags: ["sf"] },
    { time: "2:20.00", holder: "Rebecca Soni", country: "USA", date: "2012-08-01", meet: "奥运会", place: "伦敦", flags: ["sf"] },
    { time: "2:19.59", holder: "Rebecca Soni", country: "USA", date: "2012-08-02", meet: "奥运会", place: "伦敦", note: "决赛夺冠再破；旧纪录保持11年" },
    { time: "2:19.11", holder: "Rikke Møller Pedersen", country: "DEN", date: "2013-08-01", meet: "世界锦标赛", place: "巴塞罗那", flags: ["sf"] },
    { time: "2:18.95", holder: "Tatjana Schoenmaker", country: "RSA", date: "2021-07-30", meet: "奥运会", place: "东京", note: "奥运夺冠兼破纪录" },
    { time: "2:17.55", holder: "Evgeniia Chikunova", country: "RUS", date: "2023-04-21", meet: "俄罗斯全国锦标赛", place: "喀山", note: "现世界纪录——21岁，一次削掉1.40秒" },
  ],

  asianRecord: {
    time: "2:22.57", holder: "Kotomi Kato", country: "JPN",
    date: "2026-09-24", meet: "亚运会", place: "名古屋",
    note: "加藤琴 2026 名古屋亚运决赛 2:22.57 夺冠，打破齐晖保持 25 年的亚洲纪录（2:22.99）",
  },
  chineseRecord: {
    time: "2:22.99", holder: "Qi Hui", country: "CHN",
    date: "2001-04-13", meet: "中国全国锦标赛", place: "杭州",
    note: "齐晖 2001 年创造，保持二十五年；2023 年叶诗文复出后游出 2:23.84 夺亚运金牌，为近年中国最好",
  },

  top10: [
    { time: "2:17.55", holder: "Evgeniia Chikunova", country: "RUS", date: "2023-04-21", meet: "2023年俄罗斯全国锦标赛", wr: true, note: "现世界纪录" },
    { time: "2:18.95", holder: "Tatjana Schoenmaker", country: "RSA", date: "2021-07-30", meet: "2020年东京奥运会", note: "奥运会纪录" },
    { time: "2:19.11", holder: "Rikke Møller Pedersen", country: "DEN", date: "2013-08-01", meet: "2013年巴塞罗那世锦赛（半决赛）" },
    { time: "2:19.24", holder: "Kate Douglass", country: "USA", date: "2024-08-01", meet: "2024年巴黎奥运会", note: "美洲纪录" },
    { time: "2:19.59", holder: "Rebecca Soni", country: "USA", date: "2012-08-02", meet: "2012年伦敦奥运会" },
    { time: "2:19.64", holder: "Yuliya Efimova", country: "RUS", date: "2017-07-28", meet: "2017年布达佩斯世锦赛" },
    { time: "2:19.81", holder: "Tes Schouten", country: "NED", date: "2024-02-16", meet: "2024年多哈世锦赛" },
    { time: "2:20.00", holder: "Rebecca Soni", country: "USA", date: "2012-08-01", meet: "2012年伦敦奥运会（半决赛）" },
    { time: "2:20.12", holder: "Annamay Pierse", country: "CAN", date: "2009-07-29", meet: "2009年罗马世锦赛（半决赛）" },
    { time: "2:20.17", holder: "Yuliya Efimova", country: "RUS", date: "2019-07-25", meet: "2019年光州世锦赛" },
  ],
  top10Note:
    "前十门槛 2:20.17；奇库诺娃的 2:17.55 与第十位相差 2.62 秒，是本站各项目中最「孤独」的世界纪录之一。亚洲最好成绩为齐晖 2:22.99（2001），未进前十。",

  history: [
    {
      heading: "东德的十年与霍纳的三破",
      paragraphs: [
        "女子 200 米蛙泳的世界纪录在 1970 年代几乎被东德与苏联包办：1974 年维也纳欧锦赛，卡尔拉·林克一天之内两破纪录（2:37.44→2:34.99）；1978 年西柏林世锦赛，苏联的卡丘舒特从预赛 2:33.11 到决赛 2:31.42，一天两破。",
        "1980 年代属于东德的西尔克·霍纳：1985 年莱比锡 2:28.33、1986 年马德里世锦赛 2:27.40、1988 年汉城奥运会 2:26.71——三次改写跨越三年，最后一项还带着奥运金牌。",
      ],
    },
    {
      heading: "从海恩斯到索妮",
      paragraphs: [
        "1992 年，15 岁的安妮塔·纳尔在印第安纳波利斯一天两破（2:25.92→2:25.35）。1999 年，南非的佩妮·海恩斯成为这个项目的主角：洛杉矶邀请赛一天两破，悉尼泛太平洋锦标赛一天两破，把纪录从 2:24.69 一路推到 2:23.64。",
        "2001 年 4 月 13 日，杭州，齐晖游出 2:22.99——亚洲纪录由此写下，至今未破。此后是澳洲莱塞尔·琼斯的时代（2:21.72，2005 蒙特利尔世锦赛），以及美国的丽贝卡·索妮：2008 北京 2:20.22、2012 伦敦半决赛 2:20.00、决赛 2:19.59——三破纪录，两获奥运金牌。",
      ],
    },
    {
      heading: "奇库诺娃的 2:17.55",
      paragraphs: [
        "2013 年巴塞罗那，丹麦的佩德森在半决赛游出 2:19.11；2021 年东京，南非的舍恩马克以 2:18.95 夺冠。2023 年 4 月 21 日，喀山，21 岁的俄罗斯人叶夫根尼娅·奇库诺娃在自家全国锦标赛上游出 2:17.55——一次削掉 1.40 秒，把纪录带到一个此前没人敢想的位置。",
        "三年过去，这个数字纹丝未动：2024 年巴黎奥运会冠军道格拉斯 2:19.24，2025 年新加坡世锦赛冠军道格拉斯 2:18.50——都在 2:18 之外。2026 年名古屋亚运会，日本的加藤琴以 2:22.57 夺冠，顺手打破了齐晖 2001 年留下的亚洲纪录（2:22.99）——亚洲在 2:22 的门槛上等待了二十五年，终于往前挪了 0.42 秒。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：200 metres breaststroke（世界纪录演进表）",
      url: "https://en.wikipedia.org/wiki/200_metres_breaststroke",
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
