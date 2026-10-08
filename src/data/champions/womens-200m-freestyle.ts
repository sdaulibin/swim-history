import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 200 米自由泳 · 历届大赛冠军
 * 奥运会数据来源：Wikipedia "Swimming at the Summer Olympics"、Olympedia
 * 世锦赛数据来源：Wikipedia "200 metre freestyle at the World Aquatics Championships"
 * 泛太平洋：1985–2018 各届冠军待核实暂缺，仅收 2026 尔湾复办届
 * 欧锦赛（长池）：2024 起已核；2022 及更早届次待补
 * 亚运会：2018 起已核；2014 仁川待核实暂缺
 * 待核空缺：奥运会 1992 巴塞罗那；世锦赛 1973/1982/1991/1998/2001/2003/2024
 */
export const womens200mFreestyleChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Mollie O'Callaghan", country: "AUS", time: "1:53.07", or: true, note: "历史第二快成绩，距世界纪录仅0.09秒" },
  { series: "olympics", year: 2020, city: "东京", champion: "Ariarne Titmus", country: "AUS", time: "1:53.50", or: true },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Katie Ledecky", country: "USA", time: "1:53.73" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Allison Schmitt", country: "USA", time: "1:53.61", or: true },
  { series: "olympics", year: 2008, city: "北京", champion: "Federica Pellegrini", country: "ITA", time: "1:54.82", wr: true },
  { series: "olympics", year: 2004, city: "雅典", champion: "Camelia Potec", country: "ROU" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "Susie O'Neill", country: "AUS" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "Claudia Poll", country: "CRC", note: "哥斯达黎加史上首枚奥运金牌" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "Nicole Haislett", country: "USA", time: "1:57.90" },
  { series: "olympics", year: 1988, city: "汉城", champion: "Heike Friedrich", country: "GDR" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "Mary Wayte", country: "USA" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "Ines Diers", country: "GDR" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "Petra Thümer", country: "GDR", time: "1:59.83", wr: true, note: "首位突破2分钟大关" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "Shane Gould", country: "AUS", time: "2:06.6", or: true },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "Debbie Meyer", country: "USA", time: "2:10.5", note: "该项目首次入奥；当届200/400/800米三金" },

  // —— 世界锦标赛 ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "Summer McIntosh", country: "CAN" },
  // —— 2024 多哈冠军待核实，暂缺 ——
  { series: "worlds", year: 2023, city: "福冈", champion: "Ariarne Titmus", country: "AUS" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "Mollie O'Callaghan", country: "AUS", time: "1:55.86" },
  { series: "worlds", year: 2019, city: "光州", champion: "Ariarne Titmus", country: "AUS" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "Federica Pellegrini", country: "ITA" },
  { series: "worlds", year: 2015, city: "喀山", champion: "Katie Ledecky", country: "USA" },
  { series: "worlds", year: 2013, city: "巴塞罗那", champion: "Missy Franklin", country: "USA" },
  { series: "worlds", year: 2011, city: "上海", champion: "Federica Pellegrini", country: "ITA" },
  { series: "worlds", year: 2009, city: "罗马", champion: "Federica Pellegrini", country: "ITA", time: "1:52.98", wr: true },
  { series: "worlds", year: 2007, city: "墨尔本", champion: "Federica Pellegrini", country: "ITA", time: "1:56.47", wr: true },
  { series: "worlds", year: 2005, city: "蒙特利尔", champion: "Solenne Figues", country: "FRA" },
  // —— 1998/2003/2001 冠军待核实，暂缺 ——
  { series: "worlds", year: 1994, city: "罗马", champion: "Franziska van Almsick", country: "GER", time: "1:56.78", wr: true },
  // —— 1991 珀斯冠军待核实，暂缺 ——
  { series: "worlds", year: 1986, city: "马德里", champion: "Heike Friedrich", country: "GDR" },
  // —— 1982 瓜亚基尔冠军待核实，暂缺 ——
  { series: "worlds", year: 1978, city: "西柏林", champion: "Cynthia Woodhead", country: "USA" },
  { series: "worlds", year: 1975, city: "卡利", champion: "Shirley Babashoff", country: "USA" },
  // —— 1973 贝尔格莱德冠军待核实，暂缺 ——

  // —— 泛太平洋锦标赛（1985 年起；1985–2018 各届待核实暂缺） ——
  { series: "panpacific", year: 2026, city: "尔湾", champion: "Mollie O'Callaghan", country: "AUS", time: "1:53.10", note: "泛太复办届，生涯第二快成绩" },

  // —— 欧洲锦标赛（长池；2024 起已核，2022 及更早届次待补） ——
  { series: "euros", year: 2026, city: "巴黎", champion: "Marrit Steenbergen", country: "NED", time: "1:54.85", note: "同届加冕100/200米自由泳双冠" },
  { series: "euros", year: 2024, city: "贝尔格莱德", champion: "Marrit Steenbergen", country: "NED" },

  // —— 亚运会（2018 起已核；2014 仁川待核实暂缺） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Siobhán Haughey", country: "HKG", time: "1:53.85", note: "同届加冕100/200米自由泳双冠" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "Li Bingjie", country: "CHN", note: "赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Siobhán Haughey", country: "HKG" },
];
