import type { SwimEvent } from "@/lib/types";

/**
 * 男子 50 米自由泳（长池）世界纪录演进
 * 数据来源：Wikipedia "World record progression 50 metres freestyle" 等
 * 数据截至：2026年10月
 *
 * progression 空缺说明（宁缺毋滥）：
 *  - 沙利文 21.28（2008）以前的纪录沿革未能核实到可靠日期，暂缺；
 *  - 西埃洛 20.91 为快速泳衣时代遗产，悬置至今；
 *  - 亚洲纪录的保持者与数值未能核实到可靠来源，暂缺。
 */
export const mens50mFreestyle: SwimEvent = {
  slug: "mens-50m-freestyle",
  stroke: "freestyle",
  distance: 50,
  gender: "men",
  course: "LCM",
  name: "男子 50 米自由泳",
  summary:
    "20.91——塞萨尔·西埃洛2009年罗马的「一炮」，十七年后依然是人类在这个「水上百米飞人大战」上的极限。从霍尔与欧文的千禧并列，到麦克沃伊30岁的巴黎加冕，这是最短、也最残酷的距离。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "21.28", holder: "Eamon Sullivan", country: "AUS", date: "2008-03", meet: "澳大利亚奥运选拔赛", place: "悉尼", note: "此前沿革未能核实，暂缺" },
    { time: "20.91", holder: "Cesar Cielo", country: "BRA", date: "2009-08-01", meet: "世界锦标赛", place: "罗马", note: "快速泳衣时代遗产，现世界纪录" },
  ],

  chineseRecord: {
    time: "21.56", holder: "Pan Zhanle", country: "CHN",
    date: "2024-04", meet: "全国游泳冠军赛",
    note: "此前宁泽涛21.72（2017年全国冠军赛）为旧纪录；21.56同时为中国选手历史最快",
  },

  top10: [
    { time: "20.91", holder: "Cesar Cielo", country: "BRA", date: "2009-08-01", meet: "2009年罗马世锦赛", wr: true, note: "现世界纪录" },
    { time: "21.06", holder: "Cameron McEvoy", country: "AUS", date: "2023-07-29", meet: "2023年福冈世锦赛", note: "大洋洲纪录，布料泳衣时代最快" },
    { time: "21.07", holder: "Caeleb Dressel", country: "USA", date: "2021-08-01", meet: "2020年东京奥运会", note: "奥运会纪录" },
    { time: "21.25", holder: "Cameron McEvoy", country: "AUS", date: "2024-08-02", meet: "2024年巴黎奥运会", note: "30岁奥运加冕" },
    { time: "21.28", holder: "Eamon Sullivan", country: "AUS", date: "2008-03", meet: "2008年澳大利亚奥运选拔赛" },
    { time: "21.34", holder: "Florent Manaudou", country: "FRA", date: "2012-08-03", meet: "2012年伦敦奥运会", note: "力压卫冕冠军西埃洛夺金" },
    { time: "21.40", holder: "Anthony Ervin", country: "USA", date: "2016-08-12", meet: "2016年里约奥运会", note: "35岁夺金，与2000年并列夺冠时隔16年" },
    { time: "21.56", holder: "Pan Zhanle", country: "CHN", date: "2024-04", meet: "2024年全国游泳冠军赛", note: "中国纪录" },
  ],
  top10Note:
    "前十的门槛约21.5秒；西埃洛、麦克沃伊、德雷塞尔各自代表三个时代。潘展乐的21.56与金煐汎的21.66（2026名古屋亚运，赛会纪录）是亚洲声音的代表，历史前十的完整名次未能逐条双源核实，暂列锚点。",

  history: [
    {
      heading: "从并列夺金到泳衣狂飙",
      paragraphs: [
        "2000年9月21日的悉尼，加里·霍尔与安东尼·欧文同时触壁——21.98，奥运史上罕见的并列夺金。此后霍尔（2004）与西埃洛（2008，21.30）轮流加冕；2009年8月1日的罗马，西埃洛在快速泳衣的助推下游出20.91，这个纪录悬置至今。",
        "泳衣时代结束后，这个项目成了「老将的狂欢」：2012年伦敦的弗洛朗·马纳多、2016年里约35岁的欧文、2021年东京的德雷塞尔（21.07，奥运会纪录）——直到2023年福冈，麦克沃伊游出21.06，距离西埃洛只剩0.15秒。",
      ],
    },
    {
      heading: "亚洲速度：从宁泽涛到金煐汎",
      paragraphs: [
        "亚洲人在这个项目上的最好成绩徘徊在21.5上下：宁泽涛21.72（2017）曾是中国标杆，2024年潘展乐以21.56改写全国纪录；2026年名古屋亚运会，韩国的金煐汎以21.66破赛会纪录夺金——21秒上下的争夺，至今没有亚洲选手能真正挤进世界之巅的第一梯队。",
        "泛太平洋锦标赛不设50米项目，世锦赛与奥运会是唯一的巅峰舞台；2023年麦克沃伊的21.06与2024年巴黎的21.25（又是麦克沃伊，30岁）证明：这最短的距离，往往属于最耐心的等待者。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：World record progression 50 metres freestyle",
      url: "https://en.wikipedia.org/wiki/World_record_progression_50_metres_freestyle",
    },
    {
      label: "Wikipedia：Swimming at the 2024 Summer Olympics – Men's 50 metre freestyle",
      url: "https://en.wikipedia.org/wiki/Swimming_at_the_2024_Summer_Olympics_%E2%80%93_Men%27s_50_metre_freestyle",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
  ],
};
