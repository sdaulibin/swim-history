import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 100 米自由泳 · 历届大赛冠军
 * 奥运会数据来源：Wikipedia "List of Olympic medalists in swimming (women)"
 * 世锦赛数据来源：Wikipedia "100 metre freestyle at the World Aquatics Championships"
 * 泛太平洋数据来源：Wikipedia 各届赛事页、Olympedia（汤普森小传）、Olympics.com（2026）、
 *   路透/南加大校报（2006 考芙琳金牌、维尔银牌）逐条双源核实
 *   1985/1987/1989/1991 四届未能双源核实（1991 年"海斯莱特/马蒂诺"说法冲突），暂缺
 */
export const womens100mFreestyleChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Sarah Sjöström", country: "SWE", time: "52.16" },
  { series: "olympics", year: 2020, city: "东京", champion: "Emma McKeon", country: "AUS", time: "51.96", or: true },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Simone Manuel", country: "USA", time: "52.70", or: true, note: "与奥莱克西亚克并列冠军" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Penny Oleksiak", country: "CAN", time: "52.70", or: true, note: "与曼努埃尔并列冠军" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Ranomi Kromowidjojo", country: "NED", time: "53.00" },
  { series: "olympics", year: 2008, city: "北京", champion: "Britta Steffen", country: "GER", time: "53.12" },
  { series: "olympics", year: 2004, city: "雅典", champion: "Jodie Henry", country: "AUS", time: "53.84" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "Inge de Bruijn", country: "NED", time: "53.83" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "Le Jingyi", country: "CHN", time: "54.50" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "Zhuang Yong", country: "CHN", time: "54.64" },
  { series: "olympics", year: 1988, city: "汉城", champion: "Kristin Otto", country: "GDR", time: "54.93" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "Carrie Steinseifer", country: "USA", time: "55.92", note: "与霍格斯黑德并列冠军" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "Nancy Hogshead", country: "USA", time: "55.92", note: "与斯坦塞弗并列冠军" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "Barbara Krause", country: "GDR", time: "54.79", wr: true },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "Kornelia Ender", country: "GDR", time: "55.65", wr: true },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "Sandra Neilson", country: "USA", time: "58.59" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "Jan Henne", country: "USA", time: "1:00.0" },
  { series: "olympics", year: 1964, city: "东京", champion: "Dawn Fraser", country: "AUS", time: "59.5" },
  { series: "olympics", year: 1960, city: "罗马", champion: "Dawn Fraser", country: "AUS", time: "1:01.2" },
  { series: "olympics", year: 1956, city: "墨尔本", champion: "Dawn Fraser", country: "AUS", time: "1:02.0" },
  { series: "olympics", year: 1948, city: "伦敦", champion: "Greta Andersen", country: "DEN", time: "1:06.3" },
  { series: "olympics", year: 1936, city: "柏林", champion: "Rie Mastenbroek", country: "NED", time: "1:05.9" },
  { series: "olympics", year: 1932, city: "洛杉矶", champion: "Helene Madison", country: "USA", time: "1:06.8" },
  { series: "olympics", year: 1928, city: "阿姆斯特丹", champion: "Albina Osipowich", country: "USA", time: "1:13.6" },
  { series: "olympics", year: 1924, city: "巴黎", champion: "Ethel Lackie", country: "USA", time: "1:12.4" },
  { series: "olympics", year: 1920, city: "安特卫普", champion: "Ethelda Bleibtrey", country: "USA", time: "1:13.6" },
  { series: "olympics", year: 1912, city: "斯德哥尔摩", champion: "Fanny Durack", country: "AUS", time: "1:18.8" },

  // —— 世界锦标赛 ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "Torri Huske", country: "USA", time: "52.09" },
  { series: "worlds", year: 2024, city: "多哈", champion: "Marrit Steenbergen", country: "NED", time: "52.71" },
  { series: "worlds", year: 2023, city: "福冈", champion: "Mollie O'Callaghan", country: "AUS", time: "52.17" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "Mollie O'Callaghan", country: "AUS", time: "52.67" },
  { series: "worlds", year: 2019, city: "光州", champion: "Simone Manuel", country: "USA", time: "52.04" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "Simone Manuel", country: "USA", time: "52.31" },
  { series: "worlds", year: 2015, city: "喀山", champion: "Bronte Campbell", country: "AUS", time: "52.52" },
  { series: "worlds", year: 2013, city: "巴塞罗那", champion: "Ranomi Kromowidjojo", country: "NED", time: "53.42" },
  { series: "worlds", year: 2011, city: "上海", champion: "Ranomi Kromowidjojo", country: "NED", time: "53.67" },
  { series: "worlds", year: 2009, city: "罗马", champion: "Britta Steffen", country: "GER", time: "52.07", wr: true },
  { series: "worlds", year: 2007, city: "墨尔本", champion: "Libby Lenton", country: "AUS", time: "53.40" },
  { series: "worlds", year: 2005, city: "蒙特利尔", champion: "Libby Lenton", country: "AUS", time: "54.14" },
  { series: "worlds", year: 2003, city: "巴塞罗那", champion: "Jodie Henry", country: "AUS", time: "54.58" },
  { series: "worlds", year: 2001, city: "福冈", champion: "Inge de Bruijn", country: "NED", time: "54.71" },
  { series: "worlds", year: 1998, city: "珀斯", champion: "Jenny Thompson", country: "USA", time: "54.95" },
  { series: "worlds", year: 1994, city: "罗马", champion: "Le Jingyi", country: "CHN", time: "54.01", wr: true },
  { series: "worlds", year: 1991, city: "珀斯", champion: "Jenny Thompson", country: "USA", time: "55.16" },
  { series: "worlds", year: 1986, city: "马德里", champion: "Kristin Otto", country: "GDR", time: "55.34" },
  { series: "worlds", year: 1982, city: "瓜亚基尔", champion: "Jodi Cary", country: "AUS", time: "56.53" },
  { series: "worlds", year: 1978, city: "西柏林", champion: "Tracy Caulkins", country: "USA", time: "56.81" },
  { series: "worlds", year: 1975, city: "卡利", champion: "Kornelia Ender", country: "GDR", time: "56.22", wr: true },
  { series: "worlds", year: 1973, city: "贝尔格莱德", champion: "Kornelia Ender", country: "GDR", time: "58.25" },

  // —— 泛太平洋锦标赛（1985 年起；1985/1987/1989/1991 四届待核实暂缺）——
  { series: "panpacific", year: 2026, city: "尔湾", champion: "Meg Harris", country: "AUS", time: "52.60", note: "泛太复办届，力压沃尔什 0.18 秒" },
  { series: "panpacific", year: 2018, city: "东京", champion: "Cate Campbell", country: "AUS", time: "52.03", note: "英联邦纪录，当时历史第二快" },
  { series: "panpacific", year: 2014, city: "黄金海岸", champion: "Cate Campbell", country: "AUS", time: "52.62", note: "赛会纪录" },
  { series: "panpacific", year: 2010, city: "尔湾", champion: "Natalie Coughlin", country: "USA", time: "53.67", note: "赛会纪录" },
  { series: "panpacific", year: 2006, city: "维多利亚", champion: "Natalie Coughlin", country: "USA" },
  { series: "panpacific", year: 2002, city: "横滨", champion: "Natalie Coughlin", country: "USA" },
  { series: "panpacific", year: 1999, city: "悉尼", champion: "Jenny Thompson", country: "USA", time: "54.89" },
  { series: "panpacific", year: 1997, city: "福冈", champion: "Jenny Thompson", country: "USA" },
  { series: "panpacific", year: 1995, city: "亚特兰大", champion: "Jenny Thompson", country: "USA" },
  { series: "panpacific", year: 1993, city: "神户", champion: "Jenny Thompson", country: "USA" },

  // —— 欧洲锦标赛（长池；2022 起三连冠已核，更早届次待补） ——
  { series: "euros", year: 2026, city: "巴黎", champion: "Marrit Steenbergen", country: "NED", time: "51.90", note: "三破赛会纪录" },
  { series: "euros", year: 2024, city: "贝尔格莱德", champion: "Marrit Steenbergen", country: "NED", note: "同届加冕100/200米自由泳双冠" },
  { series: "euros", year: 2022, city: "罗马", champion: "Marrit Steenbergen", country: "NED" },

  // —— 亚运会（已核 2018 起三届） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Siobhán Haughey", country: "HKG", time: "52.45", note: "卫冕" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "Siobhán Haughey", country: "HKG", time: "52.17", note: "亚洲纪录；赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Rikako Ikee", country: "JPN", time: "53.27", note: "赛会纪录；当届独得6金" },
];
