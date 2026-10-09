import type { SwimEvent } from "@/lib/types";

/**
 * 男子 200 米仰泳（长池）世界纪录演进
 * 数据来源：Wikipedia "World record progression 200 metres backstroke" 等
 * 数据截至：2026年10月
 *
 * progression 空缺说明（宁缺毋滥）：
 *  - 2008 年美国奥运选拔赛 1:52.89 以前的纪录沿革未能核实到可靠来源，暂缺；
 *  - 1:51.92（2009 罗马）为快速泳衣时代的遗产，此后十七年无人撼动，
 *    是男子泳坛现存最古老的世界纪录之一。
 */
export const mens200mBackstroke: SwimEvent = {
  slug: "mens-200m-backstroke",
  stroke: "backstroke",
  distance: 200,
  gender: "men",
  course: "LCM",
  name: "男子 200 米仰泳",
  summary:
    "1:51.92——阿龙·佩尔索尔2009年罗马之夜写下的世界纪录，十七年来悬而未破，是男子泳坛现存最古老的世界纪录之一。1:52.51的亚洲纪录同样来自那晚的入江陵介；而徐嘉余的1:53.99，至今仍是仰泳短轴之外中国男子泳坛的高峰之一。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "1:52.89", holder: "Aaron Peirsol", country: "USA", date: "2008-07-03", meet: "美国奥运选拔赛", place: "奥马哈", note: "布料泳衣时代的天花板" },
    { time: "1:51.92", holder: "Aaron Peirsol", country: "USA", date: "2009-08", meet: "世界锦标赛", place: "罗马", note: "快速泳衣时代绝唱；决赛亚军入江陵介1:52.51创亚洲纪录，两人同场双双超越原世界纪录" },
  ],

  asianRecord: {
    time: "1:52.51", holder: "Ryosuke Irie", country: "JPN",
    date: "2009-08", meet: "世界锦标赛", place: "罗马",
    note: "与世界纪录同一晚创造——罗马决赛中次于佩尔索尔的银牌成绩；十七年来亚洲无人逼近至半秒以内",
  },
  chineseRecord: {
    time: "1:53.99", holder: "Xu Jiayu", country: "CHN",
    date: "2018-08", meet: "2018年雅加达亚运会", place: "雅加达",
    note: "决赛夺冠并打破自己保持的全国纪录（1:54.03）",
  },

  top10: [
    { time: "1:51.92", holder: "Aaron Peirsol", country: "USA", date: "2009-08", meet: "2009年罗马世锦赛", wr: true, note: "现世界纪录" },
    { time: "1:52.51", holder: "Ryosuke Irie", country: "JPN", date: "2009-08", meet: "2009年罗马世锦赛", note: "亚洲纪录" },
    { time: "1:52.89", holder: "Aaron Peirsol", country: "USA", date: "2008-07-03", meet: "2008年美国奥运选拔赛" },
    { time: "1:53.27", holder: "Evgeny Rylov", country: "Russia", date: "2021-07-30", meet: "2020年东京奥运会", note: "奥运会纪录，决赛力压墨菲夺金" },
    { time: "1:53.41", holder: "Tyler Clary", country: "USA", date: "2012-08-02", meet: "2012年伦敦奥运会", note: "力压佩尔索尔夺金" },
    { time: "1:53.68", holder: "Evgeny Rylov", country: "Russia", date: "2019-07-26", meet: "2019年光州世锦赛", note: "赛会纪录" },
    { time: "1:53.99", holder: "Xu Jiayu", country: "CHN", date: "2018-08", meet: "2018年雅加达亚运会", note: "中国纪录" },
    { time: "1:54.26", holder: "Hubert Kos", country: "HUN", date: "2024-08-01", meet: "2024年巴黎奥运会" },
    { time: "1:54.52", holder: "Ryan Murphy", country: "USA", date: "2022-07", meet: "2022年布达佩斯世锦赛", note: "单源待复核" },
  ],
  top10Note:
    "佩尔索尔的1:52.89（2008）与雷洛夫东京夺冠的1:53.27（奥运会纪录）、克莱里伦敦的1:53.41为不同时代的锚点；历史前十中仅有的两位非美日选手——俄罗斯的雷洛夫（两席）与匈牙利的科什（2024巴黎奥运冠军）。中国纪录保持者徐嘉余的1:53.99紧随其后。",

  history: [
    {
      heading: "佩尔索尔王朝与罗马之夜",
      paragraphs: [
        "男子200米仰泳的现代史几乎就是阿龙·佩尔索尔的个人史。2003年巴塞罗那、2005年蒙特利尔，美国人连续拿下世锦赛金牌；2008年7月3日的美国奥运选拔赛，他把世界纪录推到1:52.89——这个成绩即使放在布料泳衣时代，也足够在任何一届大赛夺冠。",
        "真正的疯狂在2009年8月的罗马：聚氨酯泳衣的谢幕演出上，佩尔索尔游出1:51.92，把世界纪录一次提高近1秒；更惊人的是同场决赛，19岁的入江陵介以1:52.51摘银——两名选手同时超越原世界纪录，1:52.51就此成为至今无人能撼的亚洲纪录。",
      ],
    },
    {
      heading: "后泳衣时代：十七年的追逐",
      paragraphs: [
        "罗马之后，布料泳衣回归，1:51.92成了远处的高墙。2012年伦敦，泰勒·克莱里在佩尔索尔缺席的决赛中以1:53.41爆冷夺冠；2016年里约，瑞安·墨菲接棒美国仰泳王朝（1:53.62）；2019年光州，叶夫根尼·雷洛夫以1:53.68为俄罗斯拿下该项目21年来首个世界冠军。",
        "2021年东京，雷洛夫把奥运冠军成绩推到1:53.27、墨菲摘银——这是后泳衣时代的最高峰，距离世界纪录仍有1.35秒。2024年巴黎，匈牙利的胡贝尔特·科什以1:54.26夺冠；四届过去，佩尔索尔与入江的罗马之夜依然悬在所有仰泳选手的头顶。",
        "中国这十七年的主角是徐嘉余：这位以100仰见长的温州选手在2018年雅加达亚运会上游出1:53.99夺金——这既是中国纪录，也是亚洲选手在布料泳衣时代的最好成绩之一。亚运会赛场上，入江陵介（2014仁川1:53.26破赛会纪录）与徐嘉余（2018）先后坐庄，2023年杭州与2026年名古屋的冠军亦均未游进1:54。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：World record progression 200 metres backstroke",
      url: "https://en.wikipedia.org/wiki/World_record_progression_200_metres_backstroke",
    },
    {
      label: "Wikipedia：Swimming at the 2024 Summer Olympics – Men's 200 metre backstroke",
      url: "https://en.wikipedia.org/wiki/Swimming_at_the_2024_Summer_Olympics_%E2%80%93_Men%27s_200_metre_backstroke",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
  ],
};
