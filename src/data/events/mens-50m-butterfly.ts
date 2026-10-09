import type { SwimEvent } from "@/lib/types";

/**
 * 男子 50 米蝶泳（长池）世界纪录演进
 * 数据来源：Wikipedia "World record progression 50 metres butterfly" 等
 * 数据截至：2026年10月
 *
 * progression 空缺说明（宁缺毋滥）：
 *  - 德雷塞尔 22.35（2019 光州决赛）以前的纪录沿革（Huegill、Govorov 时代的
 *    多次改写及 22.43 等）未能核实到可靠日期，暂缺；
 *  - 50 米蝶泳不是奥运会项目，世锦赛（2001 年起）与欧锦赛是其最高舞台；
 *  - 亚洲纪录由巴林归化选手阿尔汉格尔斯基持有（2026名古屋亚运以22.91夺冠时
 *    已是纪录保持者），精确数值待复核，暂缺。
 */
export const mens50mButterfly: SwimEvent = {
  slug: "mens-50m-butterfly",
  stroke: "butterfly",
  distance: 50,
  gender: "men",
  course: "LCM",
  name: "男子 50 米蝶泳",
  summary:
    "22.35——2019年光州，卡莱布·德雷塞尔在50蝶决赛里把世界纪录一次提高0.12秒。这是不进奥运会的「闪电项目」：世锦赛与欧锦赛是它唯一的巅峰舞台，而亚洲的速度同样在这里生长。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "22.35", holder: "Caeleb Dressel", country: "USA", date: "2019-07-27", meet: "世界锦标赛", place: "光州", note: "决赛夺冠并破世界纪录；同届包揽50自/50蝶/100蝶三项冠军，现世界纪录" },
  ],

  chineseRecord: {
    time: "23.21", holder: "Wang Changhao", country: "CHN",
    date: "2023-05", meet: "全国游泳冠军赛",
    note: "打破李朱濠时代的旧全国纪录",
  },

  top10: [
    { time: "22.35", holder: "Caeleb Dressel", country: "USA", date: "2019-07-27", meet: "2019年光州世锦赛", wr: true, note: "现世界纪录" },
    { time: "23.21", holder: "Wang Changhao", country: "CHN", date: "2023-05", meet: "2023年全国游泳冠军赛", note: "中国纪录" },
  ],
  top10Note:
    "德雷塞尔的22.35独居榜首，此后无人游进22.5；戈沃罗夫、桑托斯等人的22.4x级别历史成绩未能逐条双源核实，暂列锚点。",

  history: [
    {
      heading: "不进奥运的闪电项目",
      paragraphs: [
        "50米蝶泳2001年才进入世锦赛，且始终无缘奥运会——它是最纯粹的「触壁竞速」：一次出发、十几次划臂、零容错。澳大利亚的杰夫·休吉尔、乌克兰的安德烈·戈沃罗夫、巴西的尼古拉斯·桑托斯们先后在00年代留下纪录，但都湮没在泳衣时代的混沌里。",
        "2019年7月的光州属于德雷塞尔：决赛22.35一举破世界纪录——该届包揽50自、50蝶、100蝶三项冠军的美国人，把50蝶推到了一个此后无人接近的高度。",
      ],
    },
    {
      heading: "亚洲的速度",
      paragraphs: [
        "亚洲人在这个项目上的标杆是日本的短距离蝶泳群像与中国的新生代：李朱濠曾是旧全国纪录的保持者，2023年5月的全国冠军赛，王长浩以23.21改写全国纪录；同年杭州亚运会，该项目重新回到亚洲视野的中心。",
        "泛太平洋锦标赛不设50米项目；对亚洲选手而言，世锦赛、欧锦赛（非亚洲）之外，亚运会是这个项目最重要的舞台——2023年杭州、2026年名古屋的冠军榜见证着亚洲速度的轮替。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：World record progression 50 metres butterfly",
      url: "https://en.wikipedia.org/wiki/World_record_progression_50_metres_butterfly",
    },
    {
      label: "Wikipedia：Swimming at the 2019 World Aquatics Championships – Men's 50 metre butterfly",
      url: "https://en.wikipedia.org/wiki/Swimming_at_the_2019_World_Aquatics_Championships_%E2%80%93_Men%27s_50_metre_butterfly",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
  ],
};
