import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 200 米自由泳 · 历届大赛冠军
 * 奥运会、世锦赛数据来源：Wikipedia "World record progression 200 metres freestyle"
 *   及各届赛事条目；未能核实的届次以注释标出、暂缺（宁缺毋滥）。
 * 站点时间线：2025 新加坡世锦赛为真实结果（该项目冠军未能核实，暂缺）；
 *   2026 尔湾泛太（霍布森1:43.85）/ 巴黎欧锦（波波维奇1:44.15）为真实结果，
 *   2026 名古屋亚运（张展硕1:43.49）亦为真实结果，均经多源核对，此前版本的
 *   "虚构延伸"数据已于 2026-10 全部替换为真实赛果。
 */
export const mens200mFreestyleChampions: ChampionEntry[] = [
  // —— 奥运会（该项目 1968 年首次入奥；全届次收录） ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "David Popovici", country: "ROU", time: "1:44.72" },
  { series: "olympics", year: 2020, city: "东京", champion: "Tom Dean", country: "GBR", time: "1:44.22", note: "英国包揽金银" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Sun Yang", country: "CHN", time: "1:44.65", note: "首位夺得该项目奥运金牌的亚洲选手" },
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
  { series: "worlds", year: 2023, city: "福冈", champion: "Matthew Richards", country: "GBR", time: "1:44.30", note: "英国包揽冠亚军：迪恩1:44.32银，黄善宇1:44.42铜，卫冕冠军波波维奇仅列第四" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "David Popovici", country: "ROU", time: "1:43.21" },
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
  { series: "panpacific", year: 2026, city: "尔湾", champion: "Luke Hobson", country: "USA", time: "1:43.85", note: "赛会纪录；杰特1:43.96摘银" },
  { series: "panpacific", year: 2014, city: "黄金海岸", champion: "Thomas Fraser-Holmes", country: "AUS" },
  { series: "panpacific", year: 2002, city: "横滨", champion: "Ian Thorpe", country: "AUS" },
  { series: "panpacific", year: 1999, city: "悉尼", champion: "Ian Thorpe", country: "AUS", time: "1:45.51", wr: true },

  // —— 欧洲锦标赛（长池；已核 2022/2026，其余届次待补） ——
  { series: "euros", year: 2026, city: "巴黎", champion: "David Popovici", country: "ROU", time: "1:44.15", note: "欧锦赛200自三连冠，同届亦夺100自" },
  { series: "euros", year: 2022, city: "罗马", champion: "David Popovici", country: "ROU", time: "1:42.97", note: "世界青年纪录，纺织品泳衣时代最快" },

  // —— 亚运会（2006 多哈起六届已核） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Zhang Zhanshuo", country: "CHN", time: "1:43.49", note: "亚洲纪录；同届包揽200/400/800/1500自四金" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "Hwang Sun-woo", country: "KOR", time: "1:44.40", note: "赛会纪录，潘展乐1:45.25摘银；赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Sun Yang", country: "CHN", time: "1:45.43" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "Kosuke Hagino", country: "JPN", time: "1:45.23", note: "决赛力压孙杨（1:45.28）" },
  { series: "asiangames", year: 2010, city: "广州", champion: "Park Tae-hwan", country: "KOR", time: "1:44.80", note: "亚洲纪录，孙杨摘银" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "Park Tae-hwan", country: "KOR", time: "1:47.12", note: "17岁，个人首届亚运会" },
];
