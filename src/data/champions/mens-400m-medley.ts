import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 400 米个人混合泳 · 历届大赛冠军
 * 奥运会数据来源：Wikipedia 各届赛事页 / Olympedia / ISHOF（1964-2024 已核）
 * 世锦赛数据来源：Wikipedia 各届赛事页 / SwimSwam / Swimming World / ISHOF（1973-2025 已核）
 * 泛太平洋数据来源：Wikipedia WR 演进表 / SwimSwam / Swimming World / Olympedia /
 *   2026年8月赛事报道（已核 1987/1995/2006/2010/2014/2018/2026）；
 *   1985/1989/1993/1997/1999/2002 六届未能核实（检索配额耗尽），暂缺。
 * 欧锦赛：各届冠军均未能核实（检索配额耗尽），暂缺。
 * 亚运会：各届（2014起）均未能核实，暂缺。
 */
export const mens400mMedleyChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Léon Marchand", country: "FRA", time: "4:02.95", or: true, note: "当届连夺200蝶/200蛙/200混/400混四金" },
  { series: "olympics", year: 2020, city: "东京", champion: "Chase Kalisz", country: "USA", time: "4:09.42", note: "美国代表团当届首金" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Kosuke Hagino", country: "JPN", time: "4:06.05", note: "亚洲纪录" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Ryan Lochte", country: "USA", time: "4:05.18" },
  { series: "olympics", year: 2008, city: "北京", champion: "Michael Phelps", country: "USA", time: "4:03.84", wr: true },
  { series: "olympics", year: 2004, city: "雅典", champion: "Michael Phelps", country: "USA", time: "4:08.26", wr: true },
  { series: "olympics", year: 2000, city: "悉尼", champion: "Tom Dolan", country: "USA", time: "4:11.76", wr: true, note: "卫冕" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "Tom Dolan", country: "USA", time: "4:14.90" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "Tamás Darnyi", country: "HUN", time: "4:14.23", or: true, note: "卫冕，奥运两连冠" },
  { series: "olympics", year: 1988, city: "汉城", champion: "Tamás Darnyi", country: "HUN", time: "4:14.75", wr: true },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "Alex Baumann", country: "CAN", time: "4:17.41", wr: true },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "Aleksandr Sidorenko", country: "URS", time: "4:22.89", or: true },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "Rod Strachan", country: "USA", time: "4:23.68", wr: true },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "Gunnar Larsson", country: "SWE", time: "4:31.98", note: "以0.002秒之差险胜Tim McKee，千分位判胜促使计时规则修改" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "Charlie Hickcox", country: "USA", time: "4:48.4" },
  { series: "olympics", year: 1964, city: "东京", champion: "Dick Roth", country: "USA", time: "4:45.4", wr: true },

  // —— 世界锦标赛 ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "Léon Marchand", country: "FRA", time: "4:04.73" },
  { series: "worlds", year: 2024, city: "多哈", champion: "Lewis Clareburt", country: "NZL", time: "4:09.72" },
  { series: "worlds", year: 2023, city: "福冈", champion: "Léon Marchand", country: "FRA", time: "4:02.50", wr: true, note: "打破菲尔普斯保持15年的世界纪录" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "Léon Marchand", country: "FRA", time: "4:04.28", note: "世界大赛首冠，当届包揽200/400混双金" },
  { series: "worlds", year: 2019, city: "光州", champion: "Daiya Seto", country: "JPN", note: "当届200/400混双金；夺冠成绩待核" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "Chase Kalisz", country: "USA", time: "4:05.90", note: "锦标赛纪录；当届200/400混双冠" },
  { series: "worlds", year: 2015, city: "喀山", champion: "Daiya Seto", country: "JPN", time: "4:08.50" },
  { series: "worlds", year: 2013, city: "巴塞罗那", champion: "Daiya Seto", country: "JPN", note: "19岁首夺世界冠军；夺冠成绩待核" },
  { series: "worlds", year: 2011, city: "上海", champion: "Ryan Lochte", country: "USA", time: "4:07.13" },
  { series: "worlds", year: 2009, city: "罗马", champion: "Ryan Lochte", country: "USA", time: "4:07.01" },
  { series: "worlds", year: 2007, city: "墨尔本", champion: "Michael Phelps", country: "USA", time: "4:06.22", wr: true },
  { series: "worlds", year: 2005, city: "蒙特利尔", champion: "Michael Phelps", country: "USA", note: "夺冠成绩待核" },
  { series: "worlds", year: 2003, city: "巴塞罗那", champion: "Michael Phelps", country: "USA", time: "4:09.09", wr: true },
  { series: "worlds", year: 2001, city: "福冈", champion: "Alessio Boggiatto", country: "ITA", time: "4:13.15", note: "爆冷击败Erik Vendt" },
  { series: "worlds", year: 1998, city: "珀斯", champion: "Tom Dolan", country: "USA", time: "4:14.95" },
  { series: "worlds", year: 1994, city: "罗马", champion: "Tom Dolan", country: "USA", time: "4:12.30", wr: true },
  { series: "worlds", year: 1991, city: "珀斯", champion: "Tamás Darnyi", country: "HUN", time: "4:12.36", wr: true },
  { series: "worlds", year: 1986, city: "马德里", champion: "Tamás Darnyi", country: "HUN", note: "夺冠成绩待核" },
  { series: "worlds", year: 1982, city: "瓜亚基尔", champion: "Ricardo Prado", country: "BRA", time: "4:19.78", wr: true },
  { series: "worlds", year: 1978, city: "西柏林", champion: "Jesse Vassallo", country: "USA", time: "4:20.05", wr: true },
  { series: "worlds", year: 1975, city: "卡利", champion: "András Hargitay", country: "HUN", note: "领先亚军3秒以上；夺冠成绩待核" },
  { series: "worlds", year: 1973, city: "贝尔格莱德", champion: "András Hargitay", country: "HUN", note: "世锦赛历史首枚男子400混金牌；夺冠成绩待核" },

  // —— 泛太平洋锦标赛（已核届次；1985/1989/1993/1997/1999/2002 暂缺） ——
  { series: "panpacific", year: 2026, city: "尔湾", champion: "Tomoyuki Matsushita", country: "JPN", time: "4:06.75", note: "赛会纪录，打破罗切特2010年在同地创造的4:07.59" },
  { series: "panpacific", year: 2018, city: "东京", champion: "Chase Kalisz", country: "USA", time: "4:07.95" },
  { series: "panpacific", year: 2014, city: "黄金海岸", champion: "Kosuke Hagino", country: "JPN", time: "4:08.31" },
  { series: "panpacific", year: 2010, city: "尔湾", champion: "Ryan Lochte", country: "USA", time: "4:07.59", note: "赛会纪录，保持16年" },
  { series: "panpacific", year: 2006, city: "维多利亚", champion: "Michael Phelps", country: "USA", note: "夺冠成绩待核" },
  { series: "panpacific", year: 1995, city: "亚特兰大", champion: "Tom Dolan", country: "USA", note: "当届包揽200/400混两项冠军" },
  { series: "panpacific", year: 1987, city: "布里斯班", champion: "David Wharton", country: "USA", time: "4:16.12", wr: true },
];
