import type { SwimEvent } from "@/lib/types";

/**
 * 男子 200 米蛙泳（长池）世界纪录演进
 * 数据来源：Wikipedia「200 metres breaststroke」演进表（逐行核对）、
 * World Aquatics 官方纪录、各届世锦赛/奥运会/亚运官方成绩页
 * 数据截至：2026年10月
 *
 * 收录口径（宁缺毋滥）：
 *  - 本表从 1968 年（2:28.7）起收录电计时时代之后的可核链条；
 *    1908–1967 的手计时沿革（霍尔曼 3:09.2 起共 40 余次改写）暂不收录；
 *  - 2026-09-24 名古屋亚运会，日本大桥信游出 2:04.83，打破覃海洋
 *    2023 年福冈的 2:05.48——人类首次游进 2:05；
 *  - 亚洲纪录、中国纪录均为覃海洋 2:05.48（2023 福冈）。
 */
export const mens200mBreaststroke: SwimEvent = {
  slug: "mens-200m-breaststroke",
  stroke: "breaststroke",
  distance: 200,
  gender: "men",
  course: "LCM",
  name: "男子 200 米蛙泳",
  summary:
    "2:04.83——2026年9月24日的名古屋，20岁的日本人大桥信在亚运会决赛把覃海洋的世界纪录削去0.65秒。从维尔基的「两分钟之外」到巴罗曼的四连破，再到北岛、汉森与覃海洋，这是一条关于「水感」的百年窄路。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "2:28.7", holder: "Felipe Muñoz", country: "MEX", date: "1968-10-25", meet: "奥运会", place: "墨西哥城", note: "本站收录起点；此前手计时沿革暂缺" },
    { time: "2:27.4", holder: "Vladimir Kosinsky", country: "URS", date: "1968-04-03", place: "塔林" },
    { time: "2:26.5", holder: "Nikolai Pankin", country: "URS", date: "1969-03-22", place: "明斯克" },
    { time: "2:25.4", holder: "Nikolai Pankin", country: "URS", date: "1969-04-19", place: "马格德堡" },
    { time: "2:23.5", holder: "Brian Job", country: "USA", date: "1970-08-22", meet: "AAU 全国锦标赛", place: "洛杉矶" },
    { time: "2:22.79", holder: "John Hencken", country: "USA", date: "1972-08-05", meet: "美国奥运选拔赛", place: "芝加哥" },
    { time: "2:21.55", holder: "John Hencken", country: "USA", date: "1972-09-02", meet: "奥运会", place: "慕尼黑", note: "奥运夺冠兼破纪录" },
    { time: "2:20.52", holder: "John Hencken", country: "USA", date: "1973-08-24", meet: "美国全国锦标赛", place: "路易斯维尔" },
    { time: "2:19.28", holder: "David Wilkie", country: "GBR", date: "1973-09-06", meet: "世界锦标赛", place: "贝尔格莱德", note: "首届世锦赛夺冠兼破纪录" },
    { time: "2:18.93", holder: "John Hencken", country: "USA", date: "1974-08-24", meet: "AAU 全国锦标赛", place: "康科德" },
    { time: "2:18.21", holder: "John Hencken", country: "USA", date: "1974-09-01", meet: "美东德对抗赛", place: "康科德" },
    { time: "2:15.11", holder: "David Wilkie", country: "GBR", date: "1976-07-24", meet: "奥运会", place: "蒙特利尔", note: "一次削掉3.10秒；奥运会纪录保持二十年" },
    { time: "2:14.77", holder: "Victor Davis", country: "CAN", date: "1982-08-05", meet: "世界锦标赛", place: "瓜亚基尔" },
    { time: "2:14.58", holder: "Victor Davis", country: "CAN", date: "1984-06-17", place: "怡陶碧谷" },
    { time: "2:13.34", holder: "Victor Davis", country: "CAN", date: "1984-08-02", meet: "奥运会", place: "洛杉矶", note: "奥运夺冠兼破纪录" },
    { time: "2:12.90", holder: "Mike Barrowman", country: "USA", date: "1989-08-04", meet: "美国全国锦标赛", place: "洛杉矶" },
    { time: "2:12.89", holder: "Mike Barrowman", country: "USA", date: "1989-08-20", meet: "泛太平洋锦标赛", place: "东京" },
    { time: "2:11.53", holder: "Mike Barrowman", country: "USA", date: "1990-07-20", meet: "友好运动会", place: "西雅图" },
    { time: "2:11.23", holder: "Mike Barrowman", country: "USA", date: "1991-01-11", meet: "世界锦标赛", place: "珀斯", note: "世锦赛夺冠兼破纪录" },
    { time: "2:10.60", holder: "Mike Barrowman", country: "USA", date: "1991-08-13", meet: "美国全国锦标赛", place: "劳德代尔堡" },
    { time: "2:10.16", holder: "Mike Barrowman", country: "USA", date: "1992-07-29", meet: "奥运会", place: "巴塞罗那", note: "奥运夺冠兼破纪录；巴罗曼五破世界纪录" },
    { time: "2:09.97", holder: "Kosuke Kitajima", country: "JPN", date: "2002-10-02", meet: "亚运会", place: "釜山", note: "亚洲选手首次改写该项目世界纪录" },
    { time: "2:09.52", holder: "Dimitri Komornikov", country: "RUS", date: "2003-06-15", meet: "地中海系列赛", place: "巴塞罗那" },
    { time: "2:09.42", holder: "Kosuke Kitajima", country: "JPN", date: "2003-07-24", meet: "世界锦标赛", place: "巴塞罗那", note: "世锦赛夺冠兼破纪录" },
    { time: "2:09.04", holder: "Brendan Hansen", country: "USA", date: "2004-07-11", meet: "美国奥运选拔赛", place: "长滩" },
    { time: "2:08.74", holder: "Brendan Hansen", country: "USA", date: "2006-08-05", meet: "美国全国锦标赛", place: "欧文" },
    { time: "2:08.50", holder: "Brendan Hansen", country: "USA", date: "2006-08-21", meet: "泛太平洋锦标赛", place: "维多利亚" },
    { time: "2:07.51", holder: "Kosuke Kitajima", country: "JPN", date: "2008-06-08", meet: "日本公开赛", place: "东京", note: "北京奥运会前两个月改写" },
    { time: "2:07.31", holder: "Christian Sprenger", country: "AUS", date: "2009-07-30", meet: "世界锦标赛", place: "罗马", flags: ["sf"], note: "快速泳衣时代最后一破" },
    { time: "2:07.28", holder: "Dániel Gyurta", country: "HUN", date: "2012-08-01", meet: "奥运会", place: "伦敦", note: "奥运夺冠兼破纪录" },
    { time: "2:07.01", holder: "Akihiro Yamaguchi", country: "JPN", date: "2012-09-15", meet: "日本体育节", place: "岐阜" },
    { time: "2:06.67", holder: "Ippei Watanabe", country: "JPN", date: "2017-01-29", meet: "北岛康介杯", place: "东京" },
    { time: "2:06.12", holder: "Anton Chupkov", country: "RUS", date: "2019-07-26", meet: "世界锦标赛", place: "光州", note: "世锦赛夺冠兼破纪录" },
    { time: "2:05.95", holder: "Zac Stubblety-Cook", country: "AUS", date: "2022-05-22", meet: "澳大利亚全国锦标赛", place: "阿德莱德" },
    { time: "2:05.48", holder: "Qin Haiyang", country: "CHN", date: "2023-07-27", meet: "世界锦标赛", place: "福冈", note: "世锦赛夺冠兼破纪录；亚洲纪录与中国纪录" },
    { time: "2:04.83", holder: "Shin Ohashi", country: "JPN", date: "2026-09-24", meet: "亚运会", place: "名古屋", note: "现世界纪录——20岁，人类首次游进2:05" },
  ],

  asianRecord: {
    time: "2:04.83", holder: "Shin Ohashi", country: "JPN",
    date: "2026-09-24", meet: "亚运会", place: "名古屋", wr: true,
    note: "2026 名古屋亚运决赛破世界纪录，亚洲纪录随之易主；此前亚洲纪录为覃海洋 2:05.48（2023 福冈）",
  },
  chineseRecord: {
    time: "2:05.48", holder: "Qin Haiyang", country: "CHN",
    date: "2023-07-27", meet: "世界锦标赛", place: "福冈",
    note: "覃海洋 2023 年包揽 50/100/200 蛙三金，200 蛙决赛 2:05.48 破世界纪录；仍是中国纪录",
  },

  top10: [
    { time: "2:04.83", holder: "Shin Ohashi", country: "JPN", date: "2026-09-24", meet: "2026年名古屋亚运会", wr: true, note: "现世界纪录" },
    { time: "2:05.48", holder: "Qin Haiyang", country: "CHN", date: "2023-07-27", meet: "2023年福冈世锦赛", note: "亚洲纪录" },
    { time: "2:05.85", holder: "Léon Marchand", country: "FRA", date: "2024-07-31", meet: "2024年巴黎奥运会" },
    { time: "2:05.95", holder: "Zac Stubblety-Cook", country: "AUS", date: "2022-05-22", meet: "2022年澳大利亚全国锦标赛" },
    { time: "2:06.12", holder: "Anton Chupkov", country: "RUS", date: "2019-07-26", meet: "2019年光州世锦赛" },
    { time: "2:06.38", holder: "Zac Stubblety-Cook", country: "AUS", date: "2021-07-29", meet: "2020年东京奥运会", note: "奥运会纪录" },
    { time: "2:06.40", holder: "Shoma Sato", country: "JPN", date: "2021-04-07", meet: "2021年日本全国锦标赛" },
    { time: "2:06.54", holder: "Matthew Fallon", country: "USA", date: "2024-06-19", meet: "2024年美国奥运选拔赛" },
    { time: "2:06.67", holder: "Ippei Watanabe", country: "JPN", date: "2017-01-29", meet: "2017年北岛康介杯" },
    { time: "2:06.68", holder: "Matthew Wilson", country: "AUS", date: "2019-07-25", meet: "2019年光州世锦赛（半决赛）" },
  ],
  top10Note:
    "前十被日本（四席）、澳大利亚（三席）与美国、中国、法国瓜分，门槛 2:06.68。大桥信 2026 年的 2:04.83 把前十的门槛整整推快了 0.19 秒。",

  history: [
    {
      heading: "从维尔基到巴罗曼",
      paragraphs: [
        "男子 200 米蛙泳是蛙泳的「长距离」——它考验的不是爆发，而是划水效率的极限。1908 年英国的弗雷德里克·霍尔曼以 3:09.2 创下首个世界纪录；此后半个世纪，纪录在手计时与规则变迁中反复改写（包括 1950 年代对蝶泳式蛙泳的限制）。",
        "电计时时代的真正坐标是 1976 年蒙特利尔：英国的大卫·维尔基以 2:15.11 一次削掉 3.10 秒，这个奥运会纪录保持了二十年。1980 年代末到 1990 年代初属于美国的迈克·巴罗曼——他五破世界纪录，1992 年巴塞罗那以 2:10.16 夺冠并改写纪录，把人类带进 2:10 之内。",
      ],
    },
    {
      heading: "北岛、汉森与亚洲的崛起",
      paragraphs: [
        "2002 年 10 月 2 日的釜山亚运会，北岛康介游出 2:09.97——亚洲选手第一次握有男子 200 蛙的世界纪录。此后他与美国的布伦丹·汉森展开了四年拉锯：汉森 2:09.04（2004）、2:08.74 与 2:08.50（2006），北岛 2:07.51（2008）——北京奥运会上，北岛以 2:07.64 卫冕双冠。",
        "泳衣时代由澳大利亚的斯普伦格在 2009 年罗马收官（2:07.31）。禁令之后，这项纪录依然以零点零几秒的步长前行：吉尔塔 2:07.28（2012 伦敦奥运）、山口观弘 2:07.01（2012）、渡边一平 2:06.67（2017）、楚普科夫 2:06.12（2019 光州）、斯图布莱蒂-库克 2:05.95（2022）。",
      ],
    },
    {
      heading: "覃海洋的 2:05.48 与大桥信的 2:04.83",
      paragraphs: [
        "2023 年福冈世锦赛，覃海洋包揽 50、100、200 米蛙泳三金——这是蛙泳史上的第一次。200 米决赛他游出 2:05.48，把世界纪录推向 2:05 的门槛；2024 年巴黎，法国人马尔尚以 2:05.85 拿下奥运金牌，仍未能越线。",
        "2026 年 9 月 24 日，名古屋亚运会决赛，20 岁的日本人大桥信游出 2:04.83——0.65 秒的跃升，人类第一次在这个项目上游进 2:05。日本蛙泳在渡边一平、佐藤翔马、大桥信几代人之后，重新回到了世界之巅。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：200 metres breaststroke（世界纪录演进表）",
      url: "https://en.wikipedia.org/wiki/200_metres_breaststroke",
    },
    {
      label: "Wikipedia：List of World Aquatics Championships medalists in swimming (men)",
      url: "https://en.wikipedia.org/wiki/List_of_World_Aquatics_Championships_medalists_in_swimming_(men)",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
  ],
};
