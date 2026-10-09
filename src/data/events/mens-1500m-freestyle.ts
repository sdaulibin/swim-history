import type { SwimEvent } from "@/lib/types";

/**
 * 男子 1500 米自由泳（长池）世界纪录演进
 * 数据来源：Wikipedia "World record progression 1500 metres freestyle" 等
 * 数据截至：2026年10月
 *
 * progression 空缺说明（宁缺毋滥）：
 *  - 哈克特 14:34.56（2001 布里斯班友好运动会，仅年份精度）以前的沿革
 *    未能核实到可靠日期，暂缺；
 *  - 14:31.02 悬置十二年后，2024 年 8 月 4 日巴黎之夜被芬克以 14:30.67 打破。
 */
export const mens1500mFreestyle: SwimEvent = {
  slug: "mens-1500m-freestyle",
  stroke: "freestyle",
  distance: 1500,
  gender: "men",
  course: "LCM",
  name: "男子 1500 米自由泳",
  summary:
    "14:30.67——2024年8月4日的巴黎，博比·芬克在没人押注的终点前疯狂加速，把孙杨悬置十二年的14:31.02送进历史。这是「泳池马拉松」最伟大的冲刺之一，也是孙杨时代留下的最后一块界碑被移除的时刻。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "14:34.56", holder: "Grant Hackett", country: "AUS", date: "2001", meet: "友好运动会", place: "布里斯班", note: "保持十年的长池绝唱；具体日期未能核实，按年份精度收录" },
    { time: "14:34.14", holder: "Sun Yang", country: "CHN", date: "2011-07", meet: "世界锦标赛", place: "上海", note: "个人首枚世锦赛金牌兼破世界纪录，把哈克特的十年悬纪录提高0.42秒" },
    { time: "14:31.02", holder: "Sun Yang", country: "CHN", date: "2012-08-04", meet: "2012年伦敦奥运会", place: "伦敦", note: "决赛夺冠并再破世界纪录" },
    { time: "14:30.67", holder: "Bobby Finke", country: "USA", date: "2024-08-04", meet: "2024年巴黎奥运会", place: "巴黎", note: "整整十二年后同一天被打破；现世界纪录，最后100米的疯狂冲刺" },
  ],

  asianRecord: {
    time: "14:31.02", holder: "Sun Yang", country: "CHN",
    date: "2012-08-04", meet: "2012年伦敦奥运会", place: "伦敦",
    note: "该成绩曾为世界纪录，至今仍是亚洲纪录与中国纪录",
  },
  chineseRecord: {
    time: "14:31.02", holder: "Sun Yang", country: "CHN",
    date: "2012-08-04", meet: "2012年伦敦奥运会", place: "伦敦",
    note: "此后中国男子1500自再无人游进14分40秒",
  },

  top10: [
    { time: "14:30.67", holder: "Bobby Finke", country: "USA", date: "2024-08-04", meet: "2024年巴黎奥运会", wr: true, note: "现世界纪录" },
    { time: "14:31.02", holder: "Sun Yang", country: "CHN", date: "2012-08-04", meet: "2012年伦敦奥运会", note: "亚洲纪录，原世界纪录" },
    { time: "14:31.54", holder: "Ahmed Hafnaoui", country: "TUN", date: "2023-07", meet: "2023年福冈世锦赛", note: "破孙杨保持的赛会纪录（14:34.14）" },
    { time: "14:34.14", holder: "Sun Yang", country: "CHN", date: "2011-07", meet: "2011年上海世锦赛", note: "原世界纪录" },
    { time: "14:34.56", holder: "Grant Hackett", country: "AUS", date: "2001", meet: "2001年友好运动会" },
    { time: "14:34.57", holder: "Gregorio Paltrinieri", country: "ITA", date: "2016-08-13", meet: "2016年里约奥运会", note: "奥运会纪录时代的欧洲标杆" },
    { time: "14:35.43", holder: "Sun Yang", country: "CHN", date: "2010-11", meet: "2010年广州亚运会", note: "破亚洲纪录" },
    { time: "14:39.65", holder: "Bobby Finke", country: "USA", date: "2021-08-01", meet: "2020年东京奥运会", note: "东京最后50米反超夺金" },
    { time: "14:40.84", holder: "Oussama Mellouli", country: "TUN", date: "2008-08-17", meet: "2008年北京奥运会", note: "为突尼斯拿下历史性金牌" },
    { time: "14:42.42", holder: "Zhang Zhanshuo", country: "CHN", date: "2026-09", meet: "2026年名古屋亚运会", note: "破赛会纪录，后程反超夺冠" },
  ],
  top10Note:
    "前十的门槛在14:45上下；孙杨的14:31.02之后，只有芬克一人游进过14:32。中国的费立纬（14:46.59，2025年全国赛）正在叩响前十的门槛。",

  history: [
    {
      heading: "哈克特到孙杨：世纪的移交",
      paragraphs: [
        "格兰特·哈克特把1500自的世界纪录保持了十年（2001–2012），期间拿下悉尼、雅典两金——这是长距离泳坛最后的「单人王朝」。2012年8月4日的伦敦水上中心，20岁的孙杨以14:31.02终结了这个时代：中国男子游泳的第一枚奥运长距离金牌，兼新的世界纪录。",
        "此后十二年，14:31.02成了长距离泳坛的传说。帕尔特里涅里（2016里约）、帕尔特里涅里之后的时代冠军们（维芬、芬克）无人能进14:33；孙杨的纪录悬置了整整一个奥运周期又一个奥运周期。",
      ],
    },
    {
      heading: "巴黎之夜：芬克的疯狂冲刺",
      paragraphs: [
        "2024年8月4日——与孙杨破纪录同一天，只是隔了十二年——博比·芬克在巴黎拉德芳斯体育馆的最后一百米发起赌博式的冲刺，14:30.67，快了0.35秒。一个以「后程发力」闻名的佛罗里达人，用最戏剧化的方式完成了这个项目十二年来最重要的一次改写。",
        "对中国长距离而言，孙杨的14:31.02仍是亚洲纪录；费立纬（14:46.59，2025）领衔的新一代正试图重新接近这条线。亚运会赛场上，从2006年多哈起，男子1500自的冠军在中日之间轮转——张琳、孙杨、朴泰桓、萩野公介、费立纬们轮流加冕，详见冠军榜。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：World record progression 1500 metres freestyle",
      url: "https://en.wikipedia.org/wiki/World_record_progression_1500_metres_freestyle",
    },
    {
      label: "Wikipedia：Swimming at the 2024 Summer Olympics – Men's 1500 metre freestyle",
      url: "https://en.wikipedia.org/wiki/Swimming_at_the_2024_Summer_Olympics_%E2%80%93_Men%27s_1500_metre_freestyle",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
  ],
};
