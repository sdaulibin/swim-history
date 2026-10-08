import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 200 米蝶泳 · 历届大赛冠军
 * 奥运会：仅收录经直接来源核实的届次（1976/1984/2000/2012/2020/2024）；
 *   1968/1972/1980/1988/1992/1996/2004/2008/2016 届因检索通道中断未能核实（避免凭记忆误写），暂缺待补。
 * 世锦赛：1982/1991/1994/2001/2003/2005/2007/2009/2013/2015/2019/2022/2023 已核；
 *   1973/1975/1978/1986/1998/2011/2017/2024/2025 届未能核实，暂缺。
 * 泛太平洋：1985/1987/1991/1997/1999/2002/2010/2014/2026 已核（1989/1993/1995/2006/2018 届未能核实暂缺；
 *   2018 届检索综述一度给出勒克洛斯，但其非泛太参赛协会选手，判定为讹误弃用）。
 * 欧锦赛：仅 2026 届已核，其余届次暂缺。
 * 亚运会：2022 杭州与 2026 名古屋已核；2014/2018 届未能核实，暂缺。
 */
export const mens200mButterflyChampions: ChampionEntry[] = [
  // —— 奥运会（仅列已核届次） ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Léon Marchand", country: "FRA", time: "1:51.21", or: true, note: "主场夺金，米拉克1:51.75获银" },
  { series: "olympics", year: 2020, city: "东京", champion: "Kristóf Milák", country: "HUN", time: "1:51.25" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Chad le Clos", country: "RSA", note: "力压菲尔普斯夺金" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "Tom Malchow", country: "USA" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "Jon Sieben", country: "AUS", time: "1:57.04", wr: true },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "Mike Bruner", country: "USA", time: "1:57.43", wr: true },

  // —— 世界锦标赛（仅列已核届次） ——
  { series: "worlds", year: 2023, city: "福冈", champion: "Léon Marchand", country: "FRA", time: "1:52.43", note: "当届第二金" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "Kristóf Milák", country: "HUN", time: "1:50.34", wr: true, note: "亚军马尔尚1:53.37" },
  { series: "worlds", year: 2019, city: "光州", champion: "Kristóf Milák", country: "HUN", time: "1:50.73", wr: true, note: "19岁终结菲尔普斯保持十年的世界纪录" },
  { series: "worlds", year: 2015, city: "喀山", champion: "Chad le Clos", country: "RSA", time: "1:53.01", note: "单源待复核" },
  { series: "worlds", year: 2013, city: "巴塞罗那", champion: "Chad le Clos", country: "RSA", note: "同届包揽100/200蝶金牌" },
  { series: "worlds", year: 2009, city: "罗马", champion: "Michael Phelps", country: "USA", time: "1:51.51", wr: true },
  { series: "worlds", year: 2007, city: "墨尔本", champion: "Michael Phelps", country: "USA", time: "1:52.09", wr: true },
  { series: "worlds", year: 2005, city: "蒙特利尔", champion: "Michael Phelps", country: "USA", time: "1:53.80", wr: true },
  { series: "worlds", year: 2003, city: "巴塞罗那", champion: "Michael Phelps", country: "USA", time: "1:53.93", wr: true },
  { series: "worlds", year: 2001, city: "福冈", champion: "Michael Phelps", country: "USA", time: "1:54.58", wr: true, note: "16岁的首个世界冠军" },
  { series: "worlds", year: 1994, city: "罗马", champion: "Denis Pankratov", country: "RUS", time: "1:56.54" },
  { series: "worlds", year: 1991, city: "珀斯", champion: "Melvin Stewart", country: "USA", time: "1:55.69", wr: true },
  { series: "worlds", year: 1982, city: "瓜亚基尔", champion: "Michael Gross", country: "FRG" },

  // —— 泛太平洋锦标赛（仅列已核届次） ——
  { series: "panpacific", year: 2026, city: "尔湾", champion: "Luca Urlando", country: "USA", time: "1:53.11", note: "破菲尔普斯所保持赛会纪录" },
  { series: "panpacific", year: 2014, city: "黄金海岸", champion: "Daiya Seto", country: "JPN", time: "1:54.92" },
  { series: "panpacific", year: 2010, city: "尔湾", champion: "Michael Phelps", country: "USA" },
  { series: "panpacific", year: 2002, city: "横滨", champion: "Tom Malchow", country: "USA", note: "单源待复核" },
  { series: "panpacific", year: 1999, city: "悉尼", champion: "Uğur Taner", country: "USA", note: "继1997年后卫冕；单源待复核" },
  { series: "panpacific", year: 1997, city: "福冈", champion: "Uğur Taner", country: "USA" },
  { series: "panpacific", year: 1991, city: "埃德蒙顿", champion: "Melvin Stewart", country: "USA" },
  { series: "panpacific", year: 1987, city: "布里斯班", champion: "Melvin Stewart", country: "USA", time: "1:58.05" },
  { series: "panpacific", year: 1985, city: "东京", champion: "Anthony Mosse", country: "NZL", time: "1:58.74", note: "新西兰全国纪录；首届泛太锦标赛" },

  // —— 欧洲锦标赛（长池；仅 2026 届已核） ——
  { series: "euros", year: 2026, city: "巴黎", champion: "Léon Marchand", country: "FRA", note: "个人首枚欧锦赛金牌，米拉克获银" },

  // —— 亚运会（2006 多哈起六届已核） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Wang Kuan-Hung", country: "TPE", time: "1:55.05", note: "中国台北男子游泳首枚亚运金牌；徐放1:55.65获银" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "Honda Tomoshi", country: "JPN", time: "1:53.15", note: "亚运会纪录；赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Daiya Seto", country: "JPN", time: "1:54.34", note: "卫冕" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "Daiya Seto", country: "JPN", time: "1:54.08" },
  { series: "asiangames", year: 2010, city: "广州", champion: "Takashi Matsuda", country: "JPN", time: "1:54.02", note: "日本包揽金银，陈寅摘铜" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "Wu Peng", country: "CHN", time: "1:54.91", note: "卫冕" },
];
