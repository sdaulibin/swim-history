import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 50 米蝶泳 · 历届大赛冠军
 * 数据来源：Wikipedia 各届世锦赛/亚运总览页成绩表逐行核对
 * 说明（宁缺毋滥）：
 *  - 50 米蝶泳不是奥运会项目，无奥运条目；
 *  - 世锦赛：2001 福冈起设项，14 届全部收录；
 *  - 泛太平洋锦标赛不设 50 米项目；欧锦赛暂未收录；
 *  - 亚运会：2006 多哈起六届全部收录。
 */
export const mens50mButterflyChampions: ChampionEntry[] = [
  // —— 世界锦标赛 ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "Maxime Grousset", country: "FRA", time: "22.48", note: "蓬蒂22.51、切孔22.67同场刷新国家纪录" },
  { series: "worlds", year: 2024, city: "多哈", champion: "Diogo Ribeiro", country: "POR", time: "22.97" },
  { series: "worlds", year: 2023, city: "福冈", champion: "Thomas Ceccon", country: "ITA", time: "22.68" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "Caeleb Dressel", country: "USA", time: "22.57" },
  { series: "worlds", year: 2019, city: "光州", champion: "Caeleb Dressel", country: "USA", time: "22.35", note: "世锦赛纪录（非世界纪录——世界纪录为戈沃罗夫22.27）；同届包揽50自/50蝶/100蝶" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "Ben Proud", country: "GBR", time: "22.75" },
  { series: "worlds", year: 2015, city: "喀山", champion: "Florent Manaudou", country: "FRA", time: "22.97" },
  { series: "worlds", year: 2013, city: "巴塞罗那", champion: "Cesar Cielo", country: "BRA", time: "23.01" },
  { series: "worlds", year: 2011, city: "上海", champion: "Cesar Cielo", country: "BRA", time: "23.10" },
  { series: "worlds", year: 2009, city: "罗马", champion: "Milorad Čavić", country: "SRB", time: "22.67", note: "快速泳衣时代" },
  { series: "worlds", year: 2007, city: "墨尔本", champion: "Roland Schoeman", country: "RSA", time: "23.18", note: "卫冕成功" },
  { series: "worlds", year: 2005, city: "蒙特利尔", champion: "Roland Schoeman", country: "RSA", time: "22.96", wr: true, note: "半决赛23.01、决赛22.96，一天两破世界纪录" },
  { series: "worlds", year: 2003, city: "巴塞罗那", champion: "Matt Welsh", country: "AUS", time: "23.43", wr: true, note: "破世界纪录" },
  { series: "worlds", year: 2001, city: "福冈", champion: "Geoff Huegill", country: "AUS", time: "23.50", note: "设项首金" },

  // —— 亚运会 ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Mikhail Arkhangelskiy", country: "BRN", time: "22.91", note: "平亚洲纪录；巴林归化选手" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "Baek In-chul", country: "KOR", time: "23.29", note: "破赛会纪录；赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Joseph Schooling", country: "SIN", time: "23.61" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "Shi Yang", country: "CHN", time: "23.46", note: "破赛会纪录" },
  { series: "asiangames", year: 2010, city: "广州", champion: "Zhou Jiawei", country: "CHN", time: "23.66", note: "破赛会纪录" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "Zhou Jiawei", country: "CHN", time: "23.94", note: "设项首金；破赛会纪录" },
];
