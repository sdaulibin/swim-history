import type { SwimEvent } from "@/lib/types";

/**
 * 女子 800 米自由泳（长池）世界纪录演进
 * 数据来源：Wikipedia "World record progression 800 metres freestyle" 等
 * 数据截至：2026年10月
 *
 * progression 空缺说明（宁缺毋滥）：
 *  - 莱德基 2016 里约 8:04.79 以前的多次改写（8:11.50 等）未能核实到可靠日期，暂缺；
 *  - 8:04.79 保持九年后，2025 年 7 月新加坡世锦赛莱德基自己再刷至 8:04.12。
 */
export const womens800mFreestyle: SwimEvent = {
  slug: "womens-800m-freestyle",
  stroke: "freestyle",
  distance: 800,
  gender: "women",
  course: "LCM",
  name: "女子 800 米自由泳",
  summary:
    "这是莱德基一个人的王国：8:04.12——2025年新加坡，28岁的她时隔九年再刷自己保持的世界纪录，把项目推到了连自己都难以复刻的高度。李冰洁的8:13.31（2023福冈银牌）是亚洲人距离王座最近的一次。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "8:04.79", holder: "Katie Ledecky", country: "USA", date: "2016-08-12", meet: "2016年里约奥运会", place: "里约热内卢", note: "决赛夺冠并破世界纪录；此前多次改写未能核实到可靠日期，暂缺" },
    { time: "8:04.12", holder: "Katie Ledecky", country: "USA", date: "2025-07", meet: "世界锦标赛", place: "新加坡", note: "时隔九年自己刷新；现世界纪录" },
  ],

  asianRecord: {
    time: "8:13.31", holder: "Li Bingjie", country: "CHN",
    date: "2023-07", meet: "世界锦标赛", place: "福冈",
    note: "决赛次于莱德基摘银并创亚洲纪录；同时为中国纪录",
  },
  chineseRecord: {
    time: "8:13.31", holder: "Li Bingjie", country: "CHN",
    date: "2023-07", meet: "世界锦标赛", place: "福冈",
    note: "李冰洁15岁时即以8:15.46在2017布达佩斯世锦赛摘银，2023年福冈将亚洲纪录推至8:13.31",
  },

  top10: [
    { time: "8:04.12", holder: "Katie Ledecky", country: "USA", date: "2025-07", meet: "2025年新加坡世锦赛", wr: true, note: "现世界纪录" },
    { time: "8:04.79", holder: "Katie Ledecky", country: "USA", date: "2016-08-12", meet: "2016年里约奥运会", note: "原世界纪录，保持九年" },
    { time: "8:08.07", holder: "Katie Ledecky", country: "USA", date: "2023-07", meet: "2023年福冈世锦赛", note: "福冈夺冠成绩，历史第三快" },
    { time: "8:08.87", holder: "Katie Ledecky", country: "USA", date: "2022-06", meet: "2022年布达佩斯世锦赛", note: "单源待复核" },
    { time: "8:11.04", holder: "Katie Ledecky", country: "USA", date: "2024-08-03", meet: "2024年巴黎奥运会", note: "巴黎第四次奥运称霸该距离" },
    { time: "8:12.57", holder: "Katie Ledecky", country: "USA", date: "2021-07-31", meet: "2020年东京奥运会", note: "比里约慢了近8秒仍碾压夺冠" },
    { time: "8:13.31", holder: "Li Bingjie", country: "CHN", date: "2023-07", meet: "2023年福冈世锦赛", note: "亚洲纪录，历史最快非莱德基成绩" },
  ],
  top10Note:
    "历史前十几乎被莱德基一人垄断（她生涯游出8:12.5以内的次数超过其余人类总和）；李冰洁的8:13.31是唯一闯进前十附近的中国成绩。8:14.10（阿德灵顿，2008北京奥运冠军成绩）为莱德基之前的奥运标杆。",

  history: [
    {
      heading: "从阿德灵顿到莱德基",
      paragraphs: [
        "2008年8月16日的北京水立方，19岁的丽贝卡·阿德灵顿以8:14.10打破尘封19年的世界纪录，为英国拿下1988年以来第一枚游泳奥运金牌。没人想到，这个项目的下一个时代会来得如此彻底——",
        "2012年伦敦，15岁的凯蒂·莱德基横空出世夺金；此后十余年，她把这个项目的世界纪录从8:11一路刷到8:04.79（2016里约），再在九年后——2025年7月的新加坡——28岁的她以8:04.12再刷一次。8:04区间之外，人类的最好成绩还停留在8:13。",
      ],
    },
    {
      heading: "李冰洁：亚洲的距离",
      paragraphs: [
        "亚洲人距离王座最近的一次属于李冰洁。2017年布达佩斯，15岁的她以8:15.46摘银；2023年福冈，21岁的她把亚洲纪录推到8:13.31——仅次于莱德基，是历史最快的非莱德基成绩。",
        "亚运会赛场上，女子800自的冠军长期在中日好手之间轮转，历届冠军详见下方冠军榜。对中国女子长距离而言，莱德基的8:04是遥远的灯塔，而李冰洁的8:13.31证明这条航线的存在。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：World record progression 800 metres freestyle",
      url: "https://en.wikipedia.org/wiki/World_record_progression_800_metres_freestyle",
    },
    {
      label: "Wikipedia：Swimming at the 2025 World Aquatics Championships – Women's 800 metre freestyle",
      url: "https://en.wikipedia.org/wiki/Swimming_at_the_2025_World_Aquatics_Championships_%E2%80%93_Women%27s_800_metre_freestyle",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
  ],
};
