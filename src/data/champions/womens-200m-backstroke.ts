import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 200 米仰泳 · 历届大赛冠军
 * 奥运会：1968-2024 十五届全部经双源核实（Wikipedia 奖牌榜、Olympedia、ISHOF、Olympics.com、AP 等）。
 * 世锦赛：2009-2025 十届经核实；2007 年及更早届次待核，暂缺。
 * 泛太平洋：历届（含 2026 尔湾复办届）冠军未能核实——检索配额受限，暂缺。
 * 欧洲锦标赛：未收录（未能核实；2026 巴黎欧锦"Kos 1:52"线索经辨为男子 200 仰项目）。
 * 亚运会：2022 杭州（2023 年举行）与 2026 名古屋两届已核；2018 雅加达冠军柳雅欣已核
 *   （夺冠成绩未能核实）；2014 仁川待核，暂缺。
 */
export const womens200mBackstrokeChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Kaylee McKeown", country: "AUS", time: "2:03.73", or: true, note: "卫冕；首位连续两届包揽双仰奥运金牌的女选手" },
  { series: "olympics", year: 2020, city: "东京", champion: "Kaylee McKeown", country: "AUS", time: "2:04.68", or: true, note: "西博姆获铜" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Maya DiRado", country: "USA", time: "2:05.99", note: "最后触壁险胜霍苏" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Missy Franklin", country: "USA", time: "2:04.06", wr: true, note: "Beisel 获银" },
  { series: "olympics", year: 2008, city: "北京", champion: "Kirsty Coventry", country: "ZIM", time: "2:05.24", wr: true, note: "卫冕" },
  { series: "olympics", year: 2004, city: "雅典", champion: "Kirsty Coventry", country: "ZIM", time: "2:09.19" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "Diana Mocanu", country: "ROM", time: "2:08.16", note: "同届100仰双冠" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "Krisztina Egerszegi", country: "HUN", note: "三连冠" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "Krisztina Egerszegi", country: "HUN", time: "2:07.06", note: "领先亚军4.15秒" },
  { series: "olympics", year: 1988, city: "汉城", champion: "Krisztina Egerszegi", country: "HUN", time: "2:09.29", or: true, note: "14岁夺冠，奥运游泳史上最年轻冠军" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "Jolanda de Rover", country: "NED", time: "2:12.38" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "Rica Reinisch", country: "GDR", time: "2:11.77", wr: true },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "Ulrike Richter", country: "GDR" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "Melissa Belote", country: "USA" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "Lillian Watson", country: "USA", note: "项目首设" },

  // —— 世界锦标赛（已核实行） ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "Kaylee McKeown", country: "AUS", time: "2:03.33", note: "赛会纪录；Smith 2:04.29、Curzan 2:05.35分获银铜，彭旭玮第四" },
  { series: "worlds", year: 2024, city: "多哈", champion: "Claire Curzan", country: "USA", time: "2:05.77" },
  { series: "worlds", year: 2023, city: "福冈", champion: "Kaylee McKeown", country: "AUS", time: "2:03.85", note: "史密斯获银、彭旭玮获铜" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "Kaylee McKeown", country: "AUS", time: "2:05.08" },
  { series: "worlds", year: 2019, city: "光州", champion: "Regan Smith", country: "USA", time: "2:03.69", note: "半决赛2:03.35破世界纪录" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "Emily Seebohm", country: "AUS", time: "2:05.68", note: "卫冕；破大洋洲及赛会纪录" },
  { series: "worlds", year: 2015, city: "喀山", champion: "Emily Seebohm", country: "AUS" },
  { series: "worlds", year: 2013, city: "巴塞罗那", champion: "Missy Franklin", country: "USA", time: "2:04.76", note: "霍金2:06.66获银" },
  { series: "worlds", year: 2011, city: "上海", champion: "Missy Franklin", country: "USA", time: "2:05.10", note: "16岁首夺世界冠军，时为历史第三快" },
  { series: "worlds", year: 2009, city: "罗马", champion: "Kirsty Coventry", country: "ZIM", time: "2:04.81", wr: true },

  // —— 泛太平洋锦标赛 ——
  // 历届冠军未能核实（含 2026 尔湾复办届），暂缺。

  // —— 欧洲锦标赛 ——
  // 未能核实，暂缺。

  // —— 亚运会（2006 多哈起六届已核） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Peng Xuwei", country: "CHN", time: "2:05.77", note: "9月22日决赛，破赵菁保持16年的亚洲纪录（2:06.46，2010）并卫冕" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "Peng Xuwei", country: "CHN", time: "2:07.28", note: "9月26日决赛；赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Liu Yaxin", country: "CHN", time: "2:07.65", note: "中国时隔八年再夺该项目金牌；酒井夏海2:08.13获银" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "Sayaka Akase", country: "JPN", time: "2:10.31" },
  { series: "asiangames", year: 2010, city: "广州", champion: "Zhao Jing", country: "CHN", time: "2:06.46", note: "亚洲纪录" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "Reiko Nakamura", country: "JPN", time: "2:10.33", note: "赵菁获银" },
];
