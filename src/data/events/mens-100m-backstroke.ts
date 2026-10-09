import type { SwimEvent } from "@/lib/types";

/**
 * 男子 100 米仰泳（长池）世界纪录演进
 * 数据来源：新华社/央视/CCTV5 赛事报道、Wikipedia 等
 * 数据截至：2026年10月
 *
 * progression 空缺说明（宁缺毋滥）：
 *  - 佩尔索尔 52.54（2008 北京）以前的纪录沿革未能核实到可靠来源，暂缺；
 *  - 51.60（2022 布达佩斯）为布料泳衣时代该项目唯一突破52秒大关的成绩；
 *  - 奥运会纪录仍是墨菲的 51.85（2016 里约）——东京 51.98 与巴黎 52.00 均未能改写。
 */
export const mens100mBackstroke: SwimEvent = {
  slug: "mens-100m-backstroke",
  stroke: "backstroke",
  distance: 100,
  gender: "men",
  course: "LCM",
  name: "男子 100 米仰泳",
  summary:
    "51.60——2022年布达佩斯世锦赛决赛，意大利人托马斯·切孔把世界纪录一次提高0.25秒，是布料泳衣时代该项目唯一一次叩开52秒大关。亚洲纪录与中国纪录同属徐嘉余：2017年4月的51.86至今仍是亚洲仰泳的天花板。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "52.54", holder: "Aaron Peirsol", country: "USA", date: "2008-08", meet: "2008年北京奥运会", place: "北京", note: "决赛夺冠，世界纪录兼奥运会纪录；快速泳衣时代前夕的布料泳衣成绩" },
    { time: "51.94", holder: "Aaron Peirsol", country: "USA", date: "2009-07", meet: "美国游泳锦标赛（世锦赛选拔赛）", place: "印第安纳波利斯", note: "十天内抢回被改写的纪录；聚氨酯泳衣时代的极限" },
    { time: "51.85", holder: "Ryan Murphy", country: "USA", date: "2016-08-08", meet: "2016年里约奥运会", place: "里约热内卢", note: "决赛夺冠并破世界纪录，此后作为奥运会纪录保持至今" },
    { time: "51.60", holder: "Thomas Ceccon", country: "ITA", date: "2022-06", meet: "世界锦标赛", place: "布达佩斯", note: "决赛夺冠并破世界纪录，当届世锦赛诞生的第一项世界纪录；现世界纪录" },
  ],

  asianRecord: {
    time: "51.86", holder: "Xu Jiayu", country: "CHN",
    date: "2017-04", meet: "2017年全国游泳冠军赛", place: "青岛",
    note: "破亚洲纪录（CCTV5收录该役）；九年过去，51.86仍是亚洲选手在该项目的最快成绩",
  },
  chineseRecord: {
    time: "51.86", holder: "Xu Jiayu", country: "CHN",
    date: "2017-04", meet: "2017年全国游泳冠军赛", place: "青岛",
    note: "与亚洲纪录同役创造",
  },

  top10: [
    { time: "51.60", holder: "Thomas Ceccon", country: "ITA", date: "2022-06", meet: "2022年布达佩斯世锦赛", wr: true, note: "现世界纪录" },
    { time: "51.85", holder: "Ryan Murphy", country: "USA", date: "2016-08-08", meet: "2016年里约奥运会", note: "奥运会纪录" },
    { time: "51.86", holder: "Xu Jiayu", country: "CHN", date: "2017-04", meet: "2017年全国游泳冠军赛", note: "亚洲纪录兼中国纪录" },
    { time: "51.94", holder: "Aaron Peirsol", country: "USA", date: "2009-07", meet: "2009年美国游泳锦标赛", note: "快速泳衣时代遗产" },
    { time: "51.98", holder: "Evgeny Rylov", country: "Russia", date: "2021-07-27", meet: "2020年东京奥运会", note: "决赛夺金" },
    { time: "51.98", holder: "Xu Jiayu", country: "CHN", date: "2026-09", meet: "2026年名古屋亚运会", note: "破赛会纪录，31岁实现亚运三连冠" },
    { time: "52.00", holder: "Kliment Kolesnikov", country: "Russia", date: "2021-07-27", meet: "2020年东京奥运会", note: "决赛银牌" },
    { time: "52.00", holder: "Thomas Ceccon", country: "ITA", date: "2024-08", meet: "2024年巴黎奥运会", note: "决赛夺金" },
    { time: "52.22", holder: "Ryan Murphy", country: "USA", date: "2023-07", meet: "2023年福冈世锦赛", note: "决赛夺冠" },
    { time: "52.34", holder: "Ryosuke Irie", country: "JPN", date: "2014-09", meet: "2014年仁川亚运会", note: "赛会纪录，保持至2026年" },
  ],
  top10Note:
    "前十以已核实成绩为锚点：切孔51.60与墨菲51.85分列历史前二，徐嘉余51.86紧随其后——这是亚洲选手在该项目历史榜单上的最高位次。东京决赛雷洛夫/科列斯尼科夫以51.98/52.00包揽金银，徐嘉余52.51列第五；佩尔索尔51.94（2009）之外，泳衣时代的其余成绩未能核实，暂不收录。",

  history: [
    {
      heading: "佩尔索尔王朝与墨菲接棒",
      paragraphs: [
        "北京奥运会的52.54是布料泳衣时代男子100仰的最后绝唱——阿龙·佩尔索尔以世界纪录成绩夺金，九个月后又在全美选拔赛把纪录改写为51.94。聚氨酯泳衣退场后，这道高墙矗立了七年：直到2016年8月8日的里约决赛，瑞安·墨菲游出51.85，才把世界纪录重新拉回布料泳衣选手名下，并完成仰泳双冠。",
        "这七年间亚洲的焦点在入江陵介与徐嘉余之间轮转：入江在仁川亚运会游出52.34刷新赛会纪录；2017年4月，徐嘉余在全国冠军赛游出51.86——这个成绩距离佩尔索尔的51.94只差0.08秒，就此成为新的亚洲纪录。",
      ],
    },
    {
      heading: "51.60：布达佩斯之夜与切孔时代",
      paragraphs: [
        "2022年6月的布达佩斯世锦赛决赛，21岁的意大利人托马斯·切孔以51.60一击致命——把墨菲的纪录一次提高0.25秒，这也是布料泳衣时代该项目唯一一次突破52秒。此后他再夺2024年巴黎奥运会冠军（52.00），但奥运会纪录仍停在墨菲的51.85：东京雷洛夫的51.98与巴黎切孔的52.00，都没能改写它。",
        "中国军团的故事属于徐嘉余一个人：2017年布达佩斯，他以52.44力压格雷弗斯0.04秒首夺世界冠军，2019年光州以52.43卫冕；亚运赛场他完成百米仰泳三连庄——2018年雅加达52.34平赛会纪录、2023年杭州52.23、2026年名古屋51.98刷新赛会纪录。31岁那年，他的51.98比巴黎奥运冠军成绩还快0.02秒，51.86的亚洲纪录却依然是他自己九年前的影子。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：World record progression 100 metres backstroke",
      url: "https://en.wikipedia.org/wiki/World_record_progression_100_metres_backstroke",
    },
    {
      label: "Wikipedia：Swimming at the 2024 Summer Olympics – Men's 100 metre backstroke",
      url: "https://en.wikipedia.org/wiki/Swimming_at_the_2024_Summer_Olympics_%E2%80%93_Men%27s_100_metre_backstroke",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
  ],
};
