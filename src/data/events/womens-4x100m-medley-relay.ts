import type { SwimEvent } from "@/lib/types";

/**
 * 女子 4×100 米混合泳接力（长池）世界纪录演进
 * 数据来源：Wikipedia "4 × 100 metres medley relay" 等
 * 数据截至：2026年10月
 *
 * holder 一律使用国家英文名（站点接力项目惯例），中文译名由 names.ts 映射。
 * progression 空缺说明（宁缺毋滥）：
 *  - 美国 3:52.05（2012 伦敦）以前的纪录沿革（含 2009 罗马中国队 3:52.1x 一带
 *    的世界纪录）未能核实到可靠数值，暂缺；
 *  - 2026 年泛太平洋与 2026 年欧锦赛的该项目结果未能核实，暂缺。
 */
export const womens4x100mMedleyRelay: SwimEvent = {
  slug: "womens-4x100m-medley-relay",
  stroke: "relay",
  distance: 400,
  gender: "women",
  course: "LCM",
  name: "女子 4×100 米混合泳接力",
  summary:
    "3:49.63——2024年8月4日的巴黎，美国女队把世界纪录送进3:49时代。这是唯一在人类3:50大关之内的接力成绩；而亚洲的刻度，属于罗马2009那个中国之夜留下的3:52.19。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "3:52.05", holder: "United States", country: "USA", date: "2012-08-04", meet: "2012年伦敦奥运会", place: "伦敦", note: "决赛夺冠并破世界纪录；此前沿革未能核实，暂缺" },
    { time: "3:50.40", holder: "United States", country: "USA", date: "2019-07-27", meet: "世界锦标赛", place: "光州", note: "决赛夺冠并破世界纪录" },
    { time: "3:49.63", holder: "United States", country: "USA", date: "2024-08-04", meet: "2024年巴黎奥运会", place: "巴黎", note: "现世界纪录；雷根·史密斯仰泳棒次领衔" },
  ],

  asianRecord: {
    time: "3:52.19", holder: "China", country: "CHN",
    date: "2009-08-01", meet: "世界锦标赛", place: "罗马",
    note: "赵菁·孙晔·焦刘洋·庞佳颖；快速泳衣时代的夺冠成绩兼世界纪录，至今仍是亚洲纪录与中国纪录；数值存在不同说法，以单源待复核",
  },
  chineseRecord: {
    time: "3:52.19", holder: "China", country: "CHN",
    date: "2009-08-01", meet: "世界锦标赛", place: "罗马",
    note: "中国女子接力史上唯一一次「世界纪录保持者」时代；此后最好成绩为3:53.x级别",
  },

  top10: [
    { time: "3:49.63", holder: "United States", country: "USA", date: "2024-08-04", meet: "2024年巴黎奥运会", wr: true, note: "现世界纪录" },
    { time: "3:50.40", holder: "United States", country: "USA", date: "2019-07-27", meet: "2019年光州世锦赛", note: "夺冠时为世界纪录" },
    { time: "3:51.60", holder: "Australia", country: "AUS", date: "2021-08-01", meet: "2020年东京奥运会", note: "奥运金牌成绩" },
    { time: "3:52.05", holder: "United States", country: "USA", date: "2012-08-04", meet: "2012年伦敦奥运会", note: "夺冠时为世界纪录" },
    { time: "3:52.19", holder: "China", country: "CHN", date: "2009-08-01", meet: "2009年罗马世锦赛", note: "亚洲纪录" },
  ],
  top10Note:
    "美国队包办历史前三与第四，唯一的例外是中国队罗马2009的3:52.19；东京的澳大利亚（3:51.60）紧随其后。完整名次的第6–10位未能逐条双源核实，暂列锚点。",

  history: [
    {
      heading: "美国与澳大利亚的二人转",
      paragraphs: [
        "女子4×100混合泳接力的世界纪录长期在美国与澳大利亚之间易手：从米西·富兰克林领衔的美国时代，到坎贝尔姐妹与麦基翁们的澳大利亚挑战。2012年伦敦（3:52.05）与2019年光州（3:50.40），美国队两度刷新世界纪录。",
        "2021年东京的决赛，澳大利亚以3:51.60夺金；但世界纪录仍在美国人手中。三年后的巴黎，雷根·史密斯领衔的美国队游出3:49.63——人类第一支闯进3:50的女子接力。",
      ],
    },
    {
      heading: "罗马之夜的亚洲回声",
      paragraphs: [
        "亚洲人距离王座最近的一次要追溯到2009年8月1日的罗马：赵菁（仰）、孙晔（蛙）、焦刘洋（蝶）、庞佳颖（自）组成的中国队在快速泳衣的助推下以3:52.19夺冠兼破世界纪录——这是中国女子接力史上唯一一次以世界纪录保持者身份离场。",
        "泳衣时代结束后，3:52.19成了亚洲的天花板：杭州亚运、东京与巴黎的历届中国队都停在3:53开外。亚运会的冠军榜上，中国队与日本队轮流坐庄，详见下方冠军榜。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：4 × 100 metres medley relay",
      url: "https://en.wikipedia.org/wiki/4_%C3%97_100_metres_medley_relay",
    },
    {
      label: "Wikipedia：Swimming at the 2024 Summer Olympics – Women's 4 × 100 metre medley relay",
      url: "https://en.wikipedia.org/wiki/Swimming_at_the_2024_Summer_Olympics_%E2%80%93_Women%27s_4_%C3%97_100_metre_medley_relay",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
  ],
};
