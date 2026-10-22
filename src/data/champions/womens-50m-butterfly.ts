import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 50 米蝶泳 · 历届大赛冠军
 * 数据来源：Wikipedia 各届世锦赛/亚运总览页成绩表逐行核对
 * 说明（宁缺毋滥）：
 *  - 50 米蝶泳不是奥运会项目，无奥运条目；
 *  - 世锦赛：2001 福冈起设项，14 届全部收录；
 *  - 泛太平洋锦标赛不设 50 米项目；欧锦赛暂未收录；
 *  - 亚运会：2006 多哈起六届全部收录。
 */
export const womens50mButterflyChampions: ChampionEntry[] = [
  // —— 世界锦标赛 ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "Gretchen Walsh", country: "USA", time: "24.83" },
  { series: "worlds", year: 2024, city: "多哈", champion: "Sarah Sjöström", country: "SWE", time: "24.63", note: "世锦赛第6枚50蝶金牌" },
  { series: "worlds", year: 2023, city: "福冈", champion: "Sarah Sjöström", country: "SWE", time: "24.77", note: "中国张雨霏25.05银并创亚洲纪录" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "Sarah Sjöström", country: "SWE", time: "24.95" },
  { series: "worlds", year: 2019, city: "光州", champion: "Sarah Sjöström", country: "SWE", time: "25.02" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "Sarah Sjöström", country: "SWE", time: "24.60", note: "世锦赛纪录" },
  { series: "worlds", year: 2015, city: "喀山", champion: "Sarah Sjöström", country: "SWE", time: "24.96" },
  { series: "worlds", year: 2013, city: "巴塞罗那", champion: "Jeanette Ottesen", country: "DEN", time: "25.24", note: "中国陆滢25.42银并创亚洲纪录" },
  { series: "worlds", year: 2011, city: "上海", champion: "Inge Dekker", country: "NED", time: "25.71" },
  { series: "worlds", year: 2009, city: "罗马", champion: "Marieke Guehrer", country: "AUS", time: "25.48", note: "快速泳衣时代；中国周雅菲25.57铜" },
  { series: "worlds", year: 2007, city: "墨尔本", champion: "Therese Alshammar", country: "SWE", time: "25.91" },
  { series: "worlds", year: 2005, city: "蒙特利尔", champion: "Danni Miatke", country: "AUS", time: "26.11" },
  { series: "worlds", year: 2003, city: "巴塞罗那", champion: "Inge de Bruijn", country: "NED", time: "25.84" },
  { series: "worlds", year: 2001, city: "福冈", champion: "Inge de Bruijn", country: "NED", time: "25.90", note: "设项首金；破赛会纪录" },

  // —— 亚运会 ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Zhang Yufei", country: "CHN", time: "25.41", note: "卫冕成功" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "Zhang Yufei", country: "CHN", time: "25.10", note: "破赛会纪录；赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Rikako Ikee", country: "JPN", time: "25.55", note: "破赛会纪录" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "Lu Ying", country: "CHN", time: "25.83", note: "破赛会纪录" },
  { series: "asiangames", year: 2010, city: "广州", champion: "Tao Li", country: "SIN", time: "26.10", note: "破赛会纪录；中国陆滢铜牌" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "Tao Li", country: "SIN", time: "26.73", note: "设项首金；破赛会纪录" },
];
