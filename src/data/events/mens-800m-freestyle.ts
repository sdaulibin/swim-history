import type { SwimEvent } from "@/lib/types";

/**
 * 男子 800 米自由泳（长池）世界纪录演进
 * 数据来源：Wikipedia "World record progression 800 metres freestyle" 等
 * 数据截至：2026年10月
 *
 * progression 空缺说明（宁缺毋滥）：
 *  - 张琳 2009 罗马 7:32.12 以前的纪录沿革未能核实到可靠来源，暂缺
 *    （此前澳大利亚哈克特时代的 7:38.65 等多站纪录未能核实到日期，暂不收录）；
 *  - 7:32.12 至今无人撼动——与 200 仰的 1:51.92 一样，是快速泳衣时代留下的
 *    现存最古老的世界纪录之一。
 */
export const mens800mFreestyle: SwimEvent = {
  slug: "mens-800m-freestyle",
  stroke: "freestyle",
  distance: 800,
  gender: "men",
  course: "LCM",
  name: "男子 800 米自由泳",
  summary:
    "7:32.12——张琳2009年罗马为中国男子游泳拿下第一枚世界大赛金牌时创造的世界纪录，十七年后依然无人撼动。它是快速泳衣时代的遗产，也是中国男子泳坛至今唯一的一次「世界最快」。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "7:38.65", holder: "Grant Hackett", country: "AUS", date: "2001-07-24", meet: "世界锦标赛", place: "福冈", note: "长距离之王的长池绝唱；此前沿革未能核实，暂不收录" },
    { time: "7:32.12", holder: "Zhang Lin", country: "CHN", date: "2009-07-29", meet: "世界锦标赛", place: "罗马", note: "中国男子游泳史上第一个世界大赛冠军兼世界纪录；快速泳衣时代遗产，保持至今" },
  ],

  asianRecord: {
    time: "7:32.12", holder: "Zhang Lin", country: "CHN",
    date: "2009-07-29", meet: "世界锦标赛", place: "罗马",
    note: "该成绩同时为世界纪录，至今仍是亚洲纪录与中国纪录",
    wr: true,
  },
  chineseRecord: {
    time: "7:32.12", holder: "Zhang Lin", country: "CHN",
    date: "2009-07-29", meet: "世界锦标赛", place: "罗马",
    note: "孙杨（7:38.65，2012）与后世所有中国长距离选手均未能逼近至5秒以内",
    wr: true,
  },

  top10: [
    { time: "7:32.12", holder: "Zhang Lin", country: "CHN", date: "2009-07-29", meet: "2009年罗马世锦赛", wr: true, note: "现世界纪录" },
    { time: "7:38.65", holder: "Grant Hackett", country: "AUS", date: "2001-07-24", meet: "2001年福冈世锦赛", note: "张琳之前的世界纪录，保持八年" },
  ],
  top10Note:
    "历史前十中快速泳衣时代的成绩（2008–2009）占去大半，张琳与哈克特的两大纪录分列前两位；布料泳衣时代的世界大赛冠军成绩多在7:40–7:44区间。第3–10位的逐条成绩未能双源核实，暂列锚点，待后续补齐。",

  history: [
    {
      heading: "哈克特的长距离王国",
      paragraphs: [
        "格兰特·哈克特统治男子中长距离自由泳的岁月里，800米自由泳只是他的「副业」——奥运会直到2021年才设立这个项目，世锦赛才是它的主战场。2001年福冈，哈克特游出7:38.65，把世界纪录定格在一个此后八年无人能及的高度。",
        "2009年7月29日的罗马之夜改写了一切：22岁的张琳在快速泳衣的助推下狂飙至7:32.12，一举将世界纪录提高6.53秒——这是中国男子游泳选手第一次站上世界大赛的最高领奖台，也是至今唯一一次以世界纪录保持者的身份离场的中国男选手。",
      ],
    },
    {
      heading: "十七年的悬置",
      paragraphs: [
        "泳衣时代结束后，7:32.12成了长距离泳坛的「珠峰」。孙杨在2012年游出7:38.65追平哈克特的历史第二快，却始终无法再进一秒；帕尔特里涅里、哈夫纳维、维芬、芬克们先后在世界大赛称雄，冠军成绩却始终在7:40开外徘徊。",
        "2024年巴黎奥运会迎来这个项目的第二届奥运赛事，此前东京首秀的冠军是意大利人格雷戈里奥·帕尔特里涅里（未能核实到夺冠成绩的可靠来源）；2023年福冈世锦赛之后，世界大赛冠军成绩始终未进7:40。十七年过去，罗马之夜依旧悬在所有人的头顶。",
        "亚运会赛场上，男子800自直到2018年雅加达才进入项目表；2026年名古屋，中国新一代长距离选手们仍在向张琳的背影追赶。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：World record progression 800 metres freestyle",
      url: "https://en.wikipedia.org/wiki/World_record_progression_800_metres_freestyle",
    },
    {
      label: "Wikipedia：Swimming at the 2009 World Aquatics Championships – Men's 800 metre freestyle",
      url: "https://en.wikipedia.org/wiki/Swimming_at_the_2009_World_Aquatics_Championships_%E2%80%93_Men%27s_800_metre_freestyle",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
  ],
};
