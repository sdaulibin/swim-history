import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 400 米自由泳 · 历届大赛冠军
 * 奥运会数据来源：Wikipedia "List of Olympic medalists in swimming (men)"
 *   （1904 年该项目为 440 码，1906 年届外奥运，按站点惯例均不收录）
 * 世锦赛数据来源：Wikipedia "400 metre freestyle at the World Aquatics Championships"
 * 泛太平洋数据来源：Wikipedia 各届赛事页
 *
 * 核实说明：
 * - 本批次编辑未能联网逐条核对，仅收录编辑有把握的届次；世锦赛 1978/1986 届、
 *   泛太平洋 1985–1997 与 2006 届、欧锦赛 2018/2021/2024 届等未能核实，暂缺（宁缺毋滥）。
 * - 2025 新加坡世锦赛为真实结果；2026 尔湾/巴黎为站点虚构时间线的合理延伸；
 *   名古屋亚运为实际结果（冠军据站长核定，夺冠成绩待补）。
 */
export const mens400mFreestyleChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Lukas Märtens", country: "GER", time: "3:41.78", note: "两德统一后德国首枚该项目奥运金牌" },
  { series: "olympics", year: 2020, city: "东京", champion: "Ahmed Hafnaoui", country: "TUN", time: "3:43.36", note: "预赛压线晋级、决赛爆冷夺金" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Mack Horton", country: "AUS", time: "3:41.55" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Sun Yang", country: "CHN", time: "3:40.14", or: true, note: "距比德曼世界纪录仅0.07秒" },
  { series: "olympics", year: 2008, city: "北京", champion: "Park Tae-hwan", country: "KOR", time: "3:41.86", note: "韩国首枚男子游泳奥运金牌" },
  { series: "olympics", year: 2004, city: "雅典", champion: "Ian Thorpe", country: "AUS", time: "3:43.10", note: "卫冕" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "Ian Thorpe", country: "AUS", time: "3:40.59", wr: true },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "Danyon Loader", country: "NZL", time: "3:47.97", note: "同届加冕200/400米双冠" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "Yevgeny Sadovyi", country: "EUN", time: "3:45.00", or: true },
  { series: "olympics", year: 1988, city: "汉城", champion: "Uwe Dassler", country: "GDR", time: "3:46.95", or: true },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "George DiCarlo", country: "USA", time: "3:51.23" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "Vladimir Salnikov", country: "URS", time: "3:51.94", note: "距世界纪录仅0.01秒；同届再夺1500米金牌" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "Brian Goodell", country: "USA", time: "3:51.93", wr: true },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "Brad Cooper", country: "AUS", note: "德蒙特率先触壁因药检被判取消资格，金牌递补" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "Mike Burton", country: "USA", time: "4:09.0" },
  { series: "olympics", year: 1964, city: "东京", champion: "Don Schollander", country: "USA", time: "4:12.2" },
  { series: "olympics", year: 1960, city: "罗马", champion: "Murray Rose", country: "AUS", time: "4:18.3", note: "卫冕" },
  { series: "olympics", year: 1956, city: "墨尔本", champion: "Murray Rose", country: "AUS", time: "4:27.3" },
  { series: "olympics", year: 1952, city: "赫尔辛基", champion: "Jean Boiteux", country: "FRA", time: "4:30.7" },
  { series: "olympics", year: 1948, city: "伦敦", champion: "James McLane", country: "USA", time: "4:41.6" },
  { series: "olympics", year: 1936, city: "柏林", champion: "Noboru Terada", country: "JPN" },
  { series: "olympics", year: 1932, city: "洛杉矶", champion: "Clarence Crabbe", country: "USA", time: "4:48.5" },
  { series: "olympics", year: 1928, city: "阿姆斯特丹", champion: "Alberto Zorilla", country: "ARG", time: "5:01.6" },
  { series: "olympics", year: 1924, city: "巴黎", champion: "Andrew Charlton", country: "AUS", time: "5:05.4" },
  { series: "olympics", year: 1920, city: "安特卫普", champion: "Norman Ross", country: "USA" },
  { series: "olympics", year: 1912, city: "斯德哥尔摩", champion: "George Hodgson", country: "CAN", time: "5:24.4" },
  { series: "olympics", year: 1908, city: "伦敦", champion: "Henry Taylor", country: "GBR", time: "5:36.8", wr: true, note: "首个被承认的世界纪录" },

  // —— 世界锦标赛 ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "Kim Woo-min", country: "KOR" },
  { series: "worlds", year: 2024, city: "多哈", champion: "Elijah Winnington", country: "AUS", note: "卫冕" },
  { series: "worlds", year: 2023, city: "福冈", champion: "Ahmed Hafnaoui", country: "TUN", time: "3:40.41", note: "历史第二快，仅次于比德曼" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "Elijah Winnington", country: "AUS" },
  // 2019、2017、2015、2013：孙杨四连冠
  { series: "worlds", year: 2019, city: "光州", champion: "Sun Yang", country: "CHN", time: "3:42.44", note: "四连冠；亚军霍顿拒绝同台领奖" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "Sun Yang", country: "CHN", time: "3:41.38" },
  { series: "worlds", year: 2015, city: "喀山", champion: "Sun Yang", country: "CHN" },
  { series: "worlds", year: 2013, city: "巴塞罗那", champion: "Sun Yang", country: "CHN", time: "3:41.59" },
  { series: "worlds", year: 2011, city: "上海", champion: "Park Tae-hwan", country: "KOR" },
  { series: "worlds", year: 2009, city: "罗马", champion: "Paul Biedermann", country: "GER", time: "3:40.07", wr: true, note: "现世界纪录" },
  { series: "worlds", year: 2007, city: "墨尔本", champion: "Park Tae-hwan", country: "KOR", time: "3:44.30", note: "17岁首夺世界冠军" },
  { series: "worlds", year: 2005, city: "蒙特利尔", champion: "Grant Hackett", country: "AUS", time: "3:42.91" },
  { series: "worlds", year: 2003, city: "巴塞罗那", champion: "Ian Thorpe", country: "AUS", time: "3:42.58", note: "三连冠" },
  { series: "worlds", year: 2001, city: "福冈", champion: "Ian Thorpe", country: "AUS", time: "3:40.17", wr: true },
  { series: "worlds", year: 1998, city: "珀斯", champion: "Ian Thorpe", country: "AUS", time: "3:46.29", note: "15岁，史上最年轻男子游泳世界冠军" },
  { series: "worlds", year: 1994, city: "罗马", champion: "Kieren Perkins", country: "AUS", time: "3:43.80", wr: true },
  { series: "worlds", year: 1991, city: "珀斯", champion: "Kieren Perkins", country: "AUS" },
  // 1986 马德里、1978 西柏林两届冠军未能核实，暂缺
  { series: "worlds", year: 1982, city: "瓜亚基尔", champion: "Vladimir Salnikov", country: "URS" },
  { series: "worlds", year: 1975, city: "卡利", champion: "Tim Shaw", country: "USA", time: "3:53.93", wr: true },
  { series: "worlds", year: 1973, city: "贝尔格莱德", champion: "Rick DeMont", country: "USA", note: "1972年奥运触壁第一却被判违规，此冠为其正名" },

  // —— 泛太平洋锦标赛（1985 年起；1985–1997 与 2006 届待核实暂缺） ——
  { series: "panpacific", year: 2026, city: "尔湾", champion: "Sam Short", country: "AUS", time: "3:42.54", note: "泛太复办届，力压队友温宁顿" },
  { series: "panpacific", year: 2018, city: "东京", champion: "Jack McLoughlin", country: "AUS" },
  { series: "panpacific", year: 2014, city: "黄金海岸", champion: "Park Tae-hwan", country: "KOR" },
  { series: "panpacific", year: 2010, city: "尔湾", champion: "Peter Vanderkaay", country: "USA" },
  { series: "panpacific", year: 2002, city: "横滨", champion: "Ian Thorpe", country: "AUS" },
  { series: "panpacific", year: 1999, city: "悉尼", champion: "Ian Thorpe", country: "AUS", time: "3:41.83", wr: true, note: "赛会纪录" },

  // —— 欧洲锦标赛（长池；仅收已核届次，其余待补） ——
  { series: "euros", year: 2026, city: "巴黎", champion: "Lukas Märtens", country: "GER", time: "3:41.97", note: "赛会纪录" },
  { series: "euros", year: 2022, city: "罗马", champion: "Lukas Märtens", country: "GER" },

  // —— 亚运会（站点惯例自 2014 年起收录） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Zhang Zhanshuo", country: "CHN", note: "同届亦夺200米自由泳金牌" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "Kim Woo-min", country: "KOR", note: "赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Sun Yang", country: "CHN", time: "3:42.92", note: "卫冕" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "Sun Yang", country: "CHN" },
];
