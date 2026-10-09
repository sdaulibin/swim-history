import type { SwimEvent } from "@/lib/types";

/**
 * 男子 800 米自由泳（长池）世界纪录演进
 * 数据来源：Wikipedia "World record progression 800 metres freestyle" 等
 * 数据截至：2026年10月
 *
 * progression 空缺说明（宁缺毋滥）：
 *  - 索普 7:39.16（2001 福冈，破自己1999年7:41.59）以前的沿革未能核实到
 *    可靠来源，暂缺；
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
    { time: "7:39.16", holder: "Ian Thorpe", country: "AUS", date: "2001-07", meet: "世界锦标赛", place: "福冈", note: "决赛夺冠并破自己保持的世界纪录（7:41.59）；当届三金之一" },
    { time: "7:38.65", holder: "Grant Hackett", country: "AUS", date: "2005-07", meet: "世界锦标赛", place: "蒙特利尔", note: "决赛夺冠并破世界纪录；此前沿革未能核实，暂缺" },
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
    { time: "7:38.19", holder: "Daniel Wiffen", country: "IRL", date: "2024-08", meet: "2024年巴黎奥运会", note: "奥运会纪录" },
    { time: "7:38.57", holder: "Sun Yang", country: "CHN", date: "2011-07", meet: "2011年上海世锦赛", note: "孙杨首个世锦赛冠军的成绩" },
    { time: "7:38.65", holder: "Grant Hackett", country: "AUS", date: "2005-07", meet: "2005年蒙特利尔世锦赛", note: "夺冠兼破世界纪录" },
    { time: "7:39.16", holder: "Ian Thorpe", country: "AUS", date: "2001-07", meet: "2001年福冈世锦赛", note: "当届三金之一，夺冠兼破世界纪录" },
    { time: "7:39.27", holder: "Gregorio Paltrinieri", country: "ITA", date: "2019-07", meet: "2019年光州世锦赛", note: "破欧洲纪录" },
    { time: "7:39.96", holder: "Sun Yang", country: "CHN", date: "2015-08", meet: "2015年喀山世锦赛", note: "世锦赛三连冠的收官一战" },
    { time: "7:40.77", holder: "Gabriele Detti", country: "ITA", date: "2017-07", meet: "2017年布达佩斯世锦赛", note: "终结孙杨的四连冠梦" },
    { time: "7:40.94", holder: "Daniel Wiffen", country: "IRL", date: "2024-02", meet: "2024年多哈世锦赛" },
    { time: "7:41.36", holder: "Sun Yang", country: "CHN", date: "2013-08", meet: "2013年巴塞罗那世锦赛", note: "世锦赛卫冕战" },
  ],
  top10Note:
    "前十被三巨头瓜分：张琳的现世界纪录一骑绝尘，孙杨的世锦赛三连冠三战与哈克特、索普的两大纪录分列其后，威芬则凭巴黎奥运与多哈世锦赛双冠占据两席；第6–10位彼此仅差2秒。",

  history: [
    {
      heading: "索普、哈克特与张琳的接力棒",
      paragraphs: [
        "奥运会直到2021年才设立男子800自，世锦赛才是它的主战场。2001年福冈，伊恩·索普以7:39.16夺冠并改写自己保持的世界纪录，那是他当届三枚金牌之一；四年后的蒙特利尔，长距离之王格兰特·哈克特以7:38.65终于把这个项目的世界纪录据为己有——此后四年，再无人能进7:38。",
        "2009年7月29日的罗马之夜改写了一切：22岁的张琳在快速泳衣的助推下狂飙至7:32.12，一举将世界纪录提高6.53秒——这是中国男子游泳选手第一次站上世界大赛的最高领奖台，也是至今唯一一次以世界纪录保持者的身份离场的中国男选手。",
      ],
    },
    {
      heading: "十七年的悬置",
      paragraphs: [
        "泳衣时代结束后，7:32.12成了长距离泳坛的「珠峰」。孙杨在2011–2015年实现世锦赛800自三连冠，但三战成绩距张琳的纪录都还有6秒开外的差距；2017年布达佩斯，冲击四连冠的孙杨仅列第五（德蒂7:40.77夺冠），两年后的光州更滑至第六——帕尔特里涅里以7:39.27破欧洲纪录登顶。此后威芬在2024年连夺多哈世锦赛与巴黎奥运双冠，成绩依旧在7:38开外。十七年过去，罗马之夜依旧悬在所有人的头顶。",
        "2024年巴黎奥运会迎来这个项目的第二届奥运赛事，爱尔兰人丹尼尔·维芬以7:38.19改写奥运会纪录夺金；此前东京首秀的冠军是意大利人格雷戈里奥·帕尔特里涅里（未能核实到夺冠成绩的可靠来源）。2023年福冈，哈夫纳维在一场罕见的战术慢决中与1500自实现双冠（夺冠成绩单源待复核）；2003/2007/2022/2025 四届世锦赛冠军未能核实到可靠来源，暂缺。十七年过去，罗马之夜依旧悬在所有人的头顶。",
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
