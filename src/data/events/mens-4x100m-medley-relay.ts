import type { SwimEvent } from "@/lib/types";

/**
 * 男子 4×100 米混合泳接力（长池）世界纪录演进
 * 数据来源：Wikipedia「4 × 100 metres medley relay」演进表（逐行核对）、
 * World Aquatics 官方纪录、各届世锦赛/奥运会官方成绩页
 * 数据截至：2026年10月
 *
 * holder 一律使用国家英文名（站点接力项目惯例）。
 * 说明（宁缺毋滥）：
 *  - 本表从 1953 年瑞典 4:39.2 起完整收录（含手计时时代）；
 *  - 重要勘误：里约 2016 美国队 3:27.95 是奥运纪录，并非世界纪录——
 *    世界纪录当时仍是罗马 2009 的 3:27.28，旧版漏录该条并把 3:27.95 误作 WR；
 *  - 现世界纪录 3:26.78（2021-08-01 东京奥运会）；
 *  - 2025 新加坡世锦赛冠军为中立运动员 B 队（俄罗斯）3:26.93，非中国队。
 */
export const mens4x100mMedleyRelay: SwimEvent = {
  slug: "mens-4x100m-medley-relay",
  stroke: "relay",
  distance: 400,
  gender: "men",
  course: "LCM",
  name: "男子 4×100 米混合泳接力",
  summary:
    "3:26.78——2021年东京之夜美国队的世界纪录，至今仍是这个项目的天花板。而巴黎的3:27.46属于中国：徐嘉余、覃海洋、孙佳俊、潘展乐在2024年8月4日终结了美国人对这枚金牌长达40年的奥运垄断——男子泳坛最沉重的一次王座易主。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "4:39.2", holder: "Sweden", country: "SWE", date: "1953-02-22", place: "赫尔辛堡" },
    { time: "4:32.2", holder: "France", country: "FRA", date: "1953-03-22", place: "沙勒罗瓦" },
    { time: "4:31.5", holder: "France", country: "FRA", date: "1953-04-01", place: "特鲁瓦" },
    { time: "4:30.8", holder: "Sweden", country: "SWE", date: "1953-04-17", place: "隆德" },
    { time: "4:27.8", holder: "Sweden", country: "SWE", date: "1953-04-24", place: "布罗斯" },
    { time: "4:24.8", holder: "Soviet Union", country: "URS", date: "1953-05-13", place: "莫斯科" },
    { time: "4:21.3", holder: "Soviet Union", country: "URS", date: "1954-01-26", place: "莫斯科" },
    { time: "4:19.0", holder: "Soviet Union", country: "URS", date: "1954-02-24", place: "斯德哥尔摩" },
    { time: "4:14.8", holder: "Soviet Union", country: "URS", date: "1956-08-14", meet: "奥运选拔赛", place: "莫斯科" },
    { time: "4:17.8", holder: "Japan", country: "JPN", date: "1957-09-07", meet: "全日本学生锦标赛", place: "东京" },
    { time: "4:17.2", holder: "Japan", country: "JPN", date: "1958-05-28", meet: "亚运会", place: "东京" },
    { time: "4:16.7", holder: "Japan", country: "JPN", date: "1958-06-29", place: "洛杉矶" },
    { time: "4:14.2", holder: "Australia", country: "AUS", date: "1958-07-25", meet: "英联邦运动会", place: "加的夫" },
    { time: "4:10.4", holder: "Australia", country: "AUS", date: "1958-08-22", place: "大阪" },
    { time: "4:09.2", holder: "United States", country: "USA", date: "1960-07-24", place: "托莱多" },
    { time: "4:08.2", holder: "United States", country: "USA", date: "1960-08-27", meet: "奥运会", place: "罗马", flags: ["h"] },
    { time: "4:05.4", holder: "United States", country: "USA", date: "1960-09-01", meet: "奥运会", place: "罗马", note: "奥运首金兼世界纪录" },
    { time: "4:03.0", holder: "United States", country: "USA", date: "1961-08-20", place: "洛杉矶" },
    { time: "4:01.6", holder: "United States", country: "USA", date: "1962-08-12", place: "凯霍加福尔斯" },
    { time: "4:00.1", holder: "United States", country: "USA", date: "1963-08-24", place: "大阪" },
    { time: "3:58.4", holder: "United States", country: "USA", date: "1964-10-16", meet: "奥运会", place: "东京", note: "奥运夺冠兼破纪录" },
    { time: "3:57.2", holder: "United States", country: "USA", date: "1967-08-31", meet: "世界大学生运动会", place: "东京" },
    { time: "3:56.5", holder: "East Germany", country: "GDR", date: "1967-11-07", place: "莱比锡" },
    { time: "3:54.9", holder: "United States", country: "USA", date: "1968-10-26", meet: "奥运会", place: "墨西哥城" },
    { time: "3:54.4", holder: "East Germany", country: "GDR", date: "1970-09-08", meet: "欧洲游泳锦标赛", place: "巴塞罗那" },
    { time: "3:50.4", holder: "United States", country: "USA", date: "1971-09-03", meet: "东德对美国对抗赛", place: "莱比锡" },
    { time: "3:48.16", holder: "United States", country: "USA", date: "1972-09-04", meet: "奥运会", place: "慕尼黑" },
    { time: "3:47.28", holder: "United States", country: "USA", date: "1976-07-22", meet: "奥运会", place: "蒙特利尔" },
    { time: "3:42.22", holder: "United States", country: "USA", date: "1976-07-22", meet: "奥运会", place: "蒙特利尔" },
    { time: "3:40.84", holder: "United States", country: "USA", date: "1982-08-07", meet: "世界锦标赛", place: "瓜亚基尔" },
    { time: "3:40.42", holder: "United States", country: "USA", date: "1983-08-22", meet: "泛美运动会", place: "加拉加斯" },
    { time: "3:39.30", holder: "United States", country: "USA", date: "1984-08-04", meet: "奥运会", place: "洛杉矶" },
    { time: "3:38.28", holder: "United States", country: "USA", date: "1985-08-18", meet: "泛太平洋锦标赛", place: "东京" },
    { time: "3:36.93", holder: "United States", country: "USA", date: "1988-09-25", meet: "奥运会", place: "汉城" },
    { time: "3:36.93", holder: "United States", country: "USA", date: "1992-07-31", meet: "奥运会", place: "巴塞罗那" },
    { time: "3:34.84", holder: "United States", country: "USA", date: "1996-07-26", meet: "奥运会", place: "亚特兰大" },
    { time: "3:33.73", holder: "United States", country: "USA", date: "2000-09-23", meet: "奥运会", place: "悉尼" },
    { time: "3:33.48", holder: "United States", country: "USA", date: "2002-08-29", meet: "泛太平洋锦标赛", place: "横滨" },
    { time: "3:31.54", holder: "United States", country: "USA", date: "2003-07-27", meet: "世界锦标赛", place: "巴塞罗那" },
    { time: "3:30.68", holder: "United States", country: "USA", date: "2004-08-21", meet: "奥运会", place: "雅典" },
    { time: "3:29.34", holder: "United States", country: "USA", date: "2008-08-17", meet: "奥运会", place: "北京", note: "快速泳衣前夕的世界纪录；四年后伦敦美国队3:29.35距它仅0.01秒" },
    { time: "3:27.28", holder: "United States", country: "USA", date: "2009-08-02", meet: "世界锦标赛", place: "罗马", note: "快速泳衣时代的最后一破，保持十二年" },
    { time: "3:26.78", holder: "United States", country: "USA", date: "2021-08-01", meet: "奥运会", place: "东京", note: "现世界纪录——东京之夜；中国队当届因蝶泳棒次抢跳被取消成绩" },
  ],

  asianRecord: {
    time: "3:27.01", holder: "China", country: "CHN",
    date: "2023-09-26", meet: "亚运会", place: "杭州",
    note: "徐嘉余·覃海洋·王长浩·潘展乐；亚运成绩同样计为亚洲纪录，故 2024 巴黎的 3:27.46（奥运金牌）并非亚洲纪录",
  },
  chineseRecord: {
    time: "3:27.46", holder: "China", country: "CHN",
    date: "2024-08-04", meet: "奥运会", place: "巴黎",
    note: "力压美国（40年奥运垄断被终结）与东道主法国夺金；2025 新加坡世锦赛中国队未能卫冕",
  },

  top10: [
    { time: "3:26.78", holder: "United States", country: "USA", date: "2021-08-01", meet: "2020年东京奥运会", wr: true, note: "现世界纪录" },
    { time: "3:26.93", holder: "Neutral Athletes B", country: "RUS", date: "2025-08-03", meet: "2025年新加坡世锦赛", note: "中立运动员B队（俄罗斯）；世锦赛与欧洲纪录" },
    { time: "3:27.20", holder: "United States", country: "USA", date: "2023-07-30", meet: "2023年福冈世锦赛", note: "世锦赛纪录保持至2025" },
    { time: "3:27.28", holder: "United States", country: "USA", date: "2009-08-02", meet: "2009年罗马世锦赛", note: "快速泳衣时代最后一破，保持十二年" },
    { time: "3:27.46", holder: "China", country: "CHN", date: "2024-08-04", meet: "2024年巴黎奥运会", note: "亚洲纪录，奥运金牌" },
    { time: "3:27.51", holder: "Italy", country: "ITA", date: "2022-06-25", meet: "2022年布达佩斯世锦赛", note: "欧洲纪录（当时）" },
    { time: "3:27.79", holder: "United States", country: "USA", date: "2022-06-25", meet: "2022年布达佩斯世锦赛", note: "当届银牌" },
    { time: "3:27.91", holder: "United States", country: "USA", date: "2017-07-30", meet: "2017年布达佩斯世锦赛" },
    { time: "3:27.95", holder: "United States", country: "USA", date: "2016-08-13", meet: "2016年里约奥运会", note: "奥运纪录（非世界纪录）" },
    { time: "3:27.96", holder: "France", country: "FRA", date: "2025-08-03", meet: "2025年新加坡世锦赛", note: "当届银牌，法国纪录" },
  ],
  top10Note:
    "前十门槛 3:27.96，美国队占五席。中国队 2024 巴黎的 3:27.46 排第五；2023 福冈的 3:29.00 为当时亚洲纪录。2025 年新加坡的冠军是中立运动员 B 队（俄罗斯），中国队未能登台。",

  history: [
    {
      heading: "四十年的美国王座",
      paragraphs: [
        "混合泳接力是检验一个国家游泳厚度的唯一标尺：仰、蛙、蝶、自四种姿势各出一棒，任何一环的短板都会被放大。1960 年罗马，美国队以 4:05.4 拿下这个项目的首枚奥运金牌并创世界纪录；此后半个多世纪，王座几乎一直姓「美」。",
        "1984 年洛杉矶到 2020 年东京，美国队在奥运会上连夺十金。2019 年光州，亚当·皮蒂领衔的英国队以 3:28.10 夺冠，距世界纪录仅 0.15 秒，被视为最有可能掀翻王座的挑战者；2021 年 8 月 1 日的东京，美国队游出 3:26.78 回击——把世界纪录攥回手中。同一场决赛，中国队因蝶泳棒次抢跳被取消成绩，交了一笔昂贵的学费。",
      ],
    },
    {
      heading: "巴黎之夜：40年垄断终结",
      paragraphs: [
        "2024 年 8 月 4 日，拉德芳斯体育馆：徐嘉余（仰）、覃海洋（蛙）、孙佳俊（蝶）、潘展乐（自）——中国队 3:27.46，力压美国与东道主法国，终结了美国队长达 40 年的奥运垄断。潘展乐的最后一棒游出 45 秒 92，是这场接力史上最快的自由泳分段之一。",
        "这枚金牌并非孤立的爆发：2023 年福冈中国队以 3:29.00 拿银并创当时亚洲纪录，2024 年巴黎登顶，2025 年新加坡世锦赛则被中立运动员 B 队（俄罗斯）以 3:26.93 抢走金牌——这个项目进入了美国、中国、俄罗斯、法国、意大利五强混战的时代。",
      ],
    },
    {
      heading: "亚洲：从仰泳短板到四棒齐整",
      paragraphs: [
        "亚洲人在这个项目上长期受困于仰泳与蛙泳的厚度。2006 年多哈与 2010 年广州，日本队两度拿下亚运金牌（2010 年中国队率先到边却因抢跳被取消，日本递补）；2014 年仁川，徐嘉余、李响、李朱濠、宁泽涛以 3:31.37 逆转日本，中国队首次站上亚运之巅。",
        "2018 年雅加达 3:29.99、2022 年杭州 3:27.01（破亚洲纪录）、2026 年名古屋 3:27.89——亚运四连冠。从跟跑到把 3:28 变成常态，中国男子混合泳接力用十年完成了跨越。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：4 × 100 metres medley relay（世界纪录演进表）",
      url: "https://en.wikipedia.org/wiki/4_%C3%97_100_metres_medley_relay",
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
