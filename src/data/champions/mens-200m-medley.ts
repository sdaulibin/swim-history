import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 200 米个人混合泳 · 历届大赛冠军
 * 奥运会数据来源：Wikipedia 各届赛事页 / Olympedia / ISHOF / SwimSwam（1968-2024 已核）；
 *   1976/1980 两届奥运会未设男子200混。
 * 世锦赛数据来源：Wikipedia 各届赛事页 / SwimSwam / Swimming World（1978-2025 已核）；
 *   1973/1975 两届世锦赛未设男子200混。
 * 泛太平洋数据来源：Wikipedia WR 演进表 / SwimSwam / Swimming World / Olympedia /
 *   2026年8月赛事报道（已核 1989/1995/2006/2010/2014/2018/2026）；
 *   1985/1987/1993/1997/1999/2002 六届未能核实（检索配额耗尽），暂缺。
 * 欧锦赛：各届冠军均未能核实（检索配额耗尽），暂缺。
 * 亚运会：2022（2023年举行）已核；2014/2018/2026 三届未能核实，暂缺。
 */
export const mens200mMedleyChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Léon Marchand", country: "FRA", time: "1:54.06", or: true },
  { series: "olympics", year: 2020, city: "东京", champion: "Wang Shun", country: "CHN", time: "1:55.00", note: "首位夺得奥运混合泳金牌的中国男选手；当时亚洲纪录" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Michael Phelps", country: "USA", time: "1:54.66", note: "奥运四连冠（2004-2016）" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Michael Phelps", country: "USA", time: "1:54.27" },
  { series: "olympics", year: 2008, city: "北京", champion: "Michael Phelps", country: "USA", time: "1:54.23", wr: true },
  { series: "olympics", year: 2004, city: "雅典", champion: "Michael Phelps", country: "USA", time: "1:57.14", or: true },
  { series: "olympics", year: 2000, city: "悉尼", champion: "Massimiliano Rosolino", country: "ITA", time: "1:58.98", or: true },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "Attila Czene", country: "HUN", time: "1:59.91", or: true },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "Tamás Darnyi", country: "HUN", note: "奥运两连冠；夺冠成绩待核" },
  { series: "olympics", year: 1988, city: "汉城", champion: "Tamás Darnyi", country: "HUN", time: "2:00.17", wr: true },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "Alex Baumann", country: "CAN", time: "2:01.42", wr: true },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "Gunnar Larsson", country: "SWE", time: "2:07.17", wr: true },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "Charlie Hickcox", country: "USA", time: "2:12.0", or: true },

  // —— 世界锦标赛 ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "Léon Marchand", country: "FRA", time: "1:53.68", note: "半决赛以1:52.69打破世界纪录" },
  { series: "worlds", year: 2024, city: "多哈", champion: "Finlay Knox", country: "CAN", time: "1:56.64", note: "加拿大全国纪录" },
  { series: "worlds", year: 2023, city: "福冈", champion: "Léon Marchand", country: "FRA", time: "1:54.82", note: "欧洲纪录；历史第三人游进1:55" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "Léon Marchand", country: "FRA", time: "1:55.22", note: "20岁新星的突破，当届包揽200/400混双冠" },
  { series: "worlds", year: 2019, city: "光州", champion: "Daiya Seto", country: "JPN", note: "当届200/400混双金；夺冠成绩待核" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "Chase Kalisz", country: "USA", time: "1:55.56", note: "当届200/400混双冠" },
  { series: "worlds", year: 2015, city: "喀山", champion: "Ryan Lochte", country: "USA", time: "1:55.81", note: "世锦赛四连冠（2009-2015）" },
  { series: "worlds", year: 2013, city: "巴塞罗那", champion: "Ryan Lochte", country: "USA", time: "1:54.98" },
  { series: "worlds", year: 2011, city: "上海", champion: "Ryan Lochte", country: "USA", time: "1:54.00", wr: true },
  { series: "worlds", year: 2009, city: "罗马", champion: "Ryan Lochte", country: "USA", time: "1:54.10", wr: true },
  { series: "worlds", year: 2007, city: "墨尔本", champion: "Michael Phelps", country: "USA", time: "1:54.98", wr: true },
  { series: "worlds", year: 2005, city: "蒙特利尔", champion: "Michael Phelps", country: "USA", note: "夺冠成绩待核" },
  { series: "worlds", year: 2003, city: "巴塞罗那", champion: "Michael Phelps", country: "USA", time: "1:56.04", wr: true },
  { series: "worlds", year: 2001, city: "福冈", champion: "Massimiliano Rosolino", country: "ITA", time: "1:59.71" },
  { series: "worlds", year: 1998, city: "珀斯", champion: "Tom Dolan", country: "USA", note: "夺冠成绩待核" },
  { series: "worlds", year: 1994, city: "罗马", champion: "Jani Sievinen", country: "FIN", time: "1:58.16", wr: true },
  { series: "worlds", year: 1991, city: "珀斯", champion: "Jani Sievinen", country: "FIN", time: "1:59.36", wr: true },
  { series: "worlds", year: 1986, city: "马德里", champion: "Tamás Darnyi", country: "HUN", time: "2:01.57", note: "锦标赛纪录" },
  { series: "worlds", year: 1982, city: "瓜亚基尔", champion: "Aleksandr Sidorenko", country: "URS", time: "2:03.30" },
  { series: "worlds", year: 1978, city: "西柏林", champion: "Graham Smith", country: "CAN", time: "2:03.56", wr: true },

  // —— 泛太平洋锦标赛（已核届次；1985/1987/1993/1997/1999/2002 暂缺） ——
  { series: "panpacific", year: 2026, city: "尔湾", champion: "Tomoyuki Matsushita", country: "JPN", time: "1:56.02", note: "决赛力克美国Carson Foster（1:56.37）" },
  { series: "panpacific", year: 2018, city: "东京", champion: "Chase Kalisz", country: "USA", time: "1:55.40" },
  { series: "panpacific", year: 2014, city: "黄金海岸", champion: "Kosuke Hagino", country: "JPN", note: "当届200/400混双金；夺冠成绩待核" },
  { series: "panpacific", year: 2010, city: "尔湾", champion: "Ryan Lochte", country: "USA", time: "1:54.43" },
  { series: "panpacific", year: 2006, city: "维多利亚", champion: "Michael Phelps", country: "USA", time: "1:55.84", wr: true },
  { series: "panpacific", year: 1995, city: "亚特兰大", champion: "Tom Dolan", country: "USA", note: "当届包揽200/400混两项冠军" },
  { series: "panpacific", year: 1989, city: "东京", champion: "David Wharton", country: "USA", time: "2:00.11", wr: true },

  // —— 亚运会（2014 起；2014/2018/2026 待核，暂缺） ——
  { series: "asiangames", year: 2022, city: "杭州", champion: "Wang Shun", country: "CHN", time: "1:54.62", note: "亚洲纪录；赛事于2023年举行" },
];
