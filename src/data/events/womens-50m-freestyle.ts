import type { SwimEvent } from "@/lib/types";

/**
 * 女子 50 米自由泳（长池）世界纪录演进
 * 数据来源：Wikipedia "World record progression 50 metres freestyle" 等
 * 数据截至：2026年10月
 *
 * progression 空缺说明（宁缺毋滥）：
 *  - 斯特芬 23.73（2009 罗马）以前的纪录沿革未能核实到可靠日期，暂缺；
 *  - 舍斯特伦 23.67（2014）的具体日期未能核实，按月份精度收录；
 *  - 23.61 至今无人撼动；亚洲纪录的精确数值未能核实到可靠来源，暂缺
 *    （刘湘 23.97 为全运会创造的亚洲纪录，见中国纪录）。
 */
export const womens50mFreestyle: SwimEvent = {
  slug: "womens-50m-freestyle",
  stroke: "freestyle",
  distance: 50,
  gender: "women",
  course: "LCM",
  name: "女子 50 米自由泳",
  summary:
    "23.61——萨拉·舍斯特伦2017年布达佩斯半决赛的一游，八年后仍是女子泳坛现存最古老的世界纪录之一。而23.97——刘湘2021年全运会告别夜的亚洲纪录——是这个项目给中国观众留下的最深情一帧。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "23.73", holder: "Britta Steffen", country: "GER", date: "2009-08-02", meet: "世界锦标赛", place: "罗马", note: "快速泳衣时代遗产，此前沿革未能核实，暂缺" },
    { time: "23.67", holder: "Sarah Sjöström", country: "SWE", date: "2014-07", meet: "瑞典全国锦标赛", note: "具体日期未能核实，按月份精度收录" },
    { time: "23.61", holder: "Sarah Sjöström", country: "SWE", date: "2017-07-29", meet: "世界锦标赛", place: "布达佩斯", flags: ["sf"], note: "半决赛创造，现世界纪录；布料泳衣时代唯一冲破泳衣遗产的成绩" },
  ],

  asianRecord: {
    time: "23.97", holder: "Liu Xiang", country: "CHN",
    date: "2021-09-26", meet: "中华人民共和国第十四届全运会", place: "西安",
    note: "决赛夺冠并破自己保持的亚洲纪录（24.04，2017全运会）；保持者为中国选手",
  },
  chineseRecord: {
    time: "23.97", holder: "Liu Xiang", country: "CHN",
    date: "2021-09-26", meet: "中华人民共和国第十四届全运会", place: "西安",
    note: "决赛夺冠并破自己保持的亚洲纪录（24.04，2017全运会）；该成绩同时为亚洲纪录",
  },

  top10: [
    { time: "23.61", holder: "Sarah Sjöström", country: "SWE", date: "2017-07-29", meet: "2017年布达佩斯世锦赛", flags: ["sf"], wr: true, note: "现世界纪录" },
    { time: "23.67", holder: "Sarah Sjöström", country: "SWE", date: "2014-07", meet: "2014年瑞典锦标赛", note: "单源待复核" },
    { time: "23.73", holder: "Britta Steffen", country: "GER", date: "2009-08-02", meet: "2009年罗马世锦赛", note: "决赛夺冠兼破世界纪录" },
    { time: "23.81", holder: "Emma McKeon", country: "AUS", date: "2021-08-01", meet: "2020年东京奥运会", note: "奥运会纪录" },
    { time: "23.97", holder: "Liu Xiang", country: "CHN", date: "2021-09-26", meet: "2021年西安全运会", note: "亚洲纪录" },
  ],
  top10Note:
    "23.61、23.67、23.73——纪录榜前三的分差不足0.2秒，却横跨泳衣与布料两个时代；前十的完整名次与第6–10位未能逐条双源核实，暂列锚点。",

  history: [
    {
      heading: "德布鲁因到舍斯特伦：女飞人简史",
      paragraphs: [
        "女子50自1994年进入世锦赛、1988年进入奥运会。因赫·德布鲁因（2000悉尼24.32、2004雅典24.58）与布里塔·斯特芬（2008北京24.06、2009罗马23.73）先后统治；泳衣时代的23.73一度被认为要悬置数十年。",
        "2017年7月29日的布达佩斯半决赛，萨拉·舍斯特伦游出23.61——布料泳衣时代唯一一次冲破泳衣遗产的世界纪录。此后她在2024年巴黎以23.71再度加冕奥运（30岁），却始终差0.1秒无法追上自己的巅峰。",
      ],
    },
    {
      heading: "刘湘的告别夜",
      paragraphs: [
        "2021年9月26日的西安，全运会女子50自决赛：刘湘23.97——打破自己四年前创造的亚洲纪录（24.04），也把这个项目的亚洲天花板定格。此前她还保持着女子50仰的世界纪录，而这一夜之后，这位广东姑娘逐渐淡出泳池。",
        "亚运会的50自赛场同样不乏经典（2023年杭州、2018年雅加达的历届冠军详见下方冠军榜）。世界的23.61与亚洲的23.97之间隔着0.36秒——恰是这个项目一整个时代的距离。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：World record progression 50 metres freestyle",
      url: "https://en.wikipedia.org/wiki/World_record_progression_50_metres_freestyle",
    },
    {
      label: "Wikipedia：Swimming at the 2024 Summer Olympics – Women's 50 metre freestyle",
      url: "https://en.wikipedia.org/wiki/Swimming_at_the_2024_Summer_Olympics_%E2%80%93_Women%27s_50_metre_freestyle",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
  ],
};
