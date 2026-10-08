import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 200 米自由泳 · 历届大赛冠军
 * 奥运会、世锦赛数据来源：Wikipedia "World record progression 200 metres freestyle"
 *   及各届赛事条目；未能核实的届次以注释标出、暂缺（宁缺毋滥）。
 * 站点时间线：2025 新加坡世锦赛为真实结果（该项目冠军未能核实，暂缺）；
 *   2026 尔湾泛太 / 巴黎欧锦为站点虚构的合理结果；
 *   名古屋亚运为实际结果（冠军据站长核定，夺冠成绩待补）。
 */
export const mens200mFreestyleChampions: ChampionEntry[] = [
  // —— 奥运会（该项目 1968 年首次入奥；全届次收录） ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "David Popovici", country: "ROU", time: "1:44.72" },
  { series: "olympics", year: 2020, city: "东京", champion: "Tom Dean", country: "GBR", time: "1:44.22", note: "英国包揽金银" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Sun Yang", country: "CHN", time: "1:44.39", note: "首位夺得该项目奥运金牌的亚洲选手" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Yannick Agnel", country: "FRA", time: "1:43.14" },
  { series: "olympics", year: 2008, city: "北京", champion: "Michael Phelps", country: "USA", time: "1:42.96", wr: true },
  { series: "olympics", year: 2004, city: "雅典", champion: "Ian Thorpe", country: "AUS", time: "1:44.71", or: true, note: "「世纪之战」力克范登霍根班德与菲尔普斯；追平自己保持的世界纪录" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "Pieter van den Hoogenband", country: "NED", note: "半决赛1:45.35打破世界纪录，决赛力压主场作战的索普" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "Danyon Loader", country: "NZL", time: "1:47.63", note: "当届200/400米自由泳双冠" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "Yevgeny Sadovyi", country: "EUN", time: "1:46.70" },
  { series: "olympics", year: 1988, city: "汉城", champion: "Duncan Armstrong", country: "AUS", time: "1:47.25", wr: true },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "Michael Gross", country: "FRG" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "Sergei Kopliakov", country: "URS" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "Bruce Furniss", country: "USA" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "Mark Spitz", country: "USA", time: "1:52.78", wr: true },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "Michael Wenden", country: "AUS", time: "1:55.2", note: "该项目首次进入奥运会；当届包揽100/200米自由泳双金" },

  // —— 世界锦标赛（1973 年起；1973/1975/1978/1982/1994/1998/2005 各届未能核实，暂缺） ——
  // 2025 新加坡、2024 多哈：冠军未能核实，暂缺
  { series: "worlds", year: 2023, city: "福冈", champion: "Ahmed Hafnaoui", country: "TUN", note: "爆冷夺冠" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "David Popovici", country: "ROU" },
  { series: "worlds", year: 2019, city: "光州", champion: "Sun Yang", country: "CHN" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "Sun Yang", country: "CHN" },
  { series: "worlds", year: 2015, city: "喀山", champion: "James Guy", country: "GBR", time: "1:45.14" },
  { series: "worlds", year: 2013, city: "巴塞罗那", champion: "Yannick Agnel", country: "FRA" },
  { series: "worlds", year: 2011, city: "上海", champion: "Ryan Lochte", country: "USA", time: "1:44.44" },
  { series: "worlds", year: 2009, city: "罗马", champion: "Paul Biedermann", country: "GER", time: "1:42.00", wr: true },
  { series: "worlds", year: 2007, city: "墨尔本", champion: "Michael Phelps", country: "USA", time: "1:43.86", wr: true },
  { series: "worlds", year: 2003, city: "巴塞罗那", champion: "Ian Thorpe", country: "AUS" },
  { series: "worlds", year: 2001, city: "福冈", champion: "Ian Thorpe", country: "AUS", time: "1:44.71", wr: true },
  { series: "worlds", year: 1991, city: "珀斯", champion: "Giorgio Lamberti", country: "ITA", time: "1:46.51", wr: true },
  { series: "worlds", year: 1986, city: "马德里", champion: "Michael Gross", country: "FRG" },

  // —— 泛太平洋锦标赛（1985 起；1985–1997、2006、2010、2018 各届未能核实，暂缺） ——
  { series: "panpacific", year: 2026, city: "尔湾", champion: "Thomas Neill", country: "AUS", time: "1:45.06", note: "泛太复办届" },
  { series: "panpacific", year: 2014, city: "黄金海岸", champion: "Thomas Fraser-Holmes", country: "AUS" },
  { series: "panpacific", year: 2002, city: "横滨", champion: "Ian Thorpe", country: "AUS" },
  { series: "panpacific", year: 1999, city: "悉尼", champion: "Ian Thorpe", country: "AUS", time: "1:45.51", wr: true },

  // —— 欧洲锦标赛（长池；已核 2022/2026，其余届次待补） ——
  { series: "euros", year: 2026, city: "巴黎", champion: "Matthew Richards", country: "GBR", time: "1:44.31" },
  { series: "euros", year: 2022, city: "罗马", champion: "David Popovici", country: "ROU", time: "1:43.21", note: "世界青年纪录" },

  // —— 亚运会（站点惯例从 2014 仁川起；2022 杭州冠军未能核实，暂缺） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Zhang Zhanshuo", country: "CHN", note: "同届亦夺400米自由泳金牌" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Sun Yang", country: "CHN" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "Kosuke Hagino", country: "JPN", note: "决赛力压孙杨" },
];
