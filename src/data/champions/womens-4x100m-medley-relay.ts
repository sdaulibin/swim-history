import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 4×100 米混合泳接力 · 历届大赛冠军
 * champion 字段按站点接力项目惯例使用国家英文名。
 * 数据来源：Wikipedia 各届世锦赛/奥运会/亚运总览页成绩表逐行核对
 * 说明（宁缺毋滥）：
 *  - 奥运会：1960 罗马起设项，17 届全部收录；
 *  - 世锦赛：1973 贝尔格莱德起设项，22 届全部收录；
 *  - 泛太平洋 / 欧洲锦标赛：暂未收录；
 *  - 亚运会：2006 多哈起六届全部收录。
 */
export const womens4x100mMedleyRelayChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "United States", country: "USA", time: "3:49.63", wr: true, note: "雷根·史密斯领衔；人类首支游进3:50的女子接力" },
  { series: "olympics", year: 2020, city: "东京", champion: "Australia", country: "AUS", time: "3:51.60", note: "麦基翁·霍金·麦基恩·坎贝尔；赛事于2021年举行" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "United States", country: "USA", time: "3:53.13" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "United States", country: "USA", time: "3:52.05", wr: true, note: "破中国队的罗马世界纪录" },
  { series: "olympics", year: 2008, city: "北京", champion: "Australia", country: "AUS", time: "3:52.69", wr: true, note: "破世界纪录" },
  { series: "olympics", year: 2004, city: "雅典", champion: "Australia", country: "AUS", time: "3:57.32", wr: true, note: "破世界纪录" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "United States", country: "USA", time: "3:58.30", wr: true, note: "破世界纪录" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "United States", country: "USA", time: "4:02.88" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "United States", country: "USA", time: "4:02.54", wr: true, note: "破世界纪录" },
  { series: "olympics", year: 1988, city: "汉城", champion: "East Germany", country: "GDR", time: "4:03.74" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "United States", country: "USA", time: "4:08.34" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "East Germany", country: "GDR", time: "4:06.67", wr: true, note: "破世界纪录" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "East Germany", country: "GDR", time: "4:07.95", wr: true, note: "破世界纪录" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "United States", country: "USA", time: "4:20.75", wr: true, note: "破世界纪录" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "United States", country: "USA", time: "4:28.3", note: "奥运纪录" },
  { series: "olympics", year: 1964, city: "东京", champion: "United States", country: "USA", time: "4:33.9", note: "奥运纪录" },
  { series: "olympics", year: 1960, city: "罗马", champion: "United States", country: "USA", time: "4:41.1", wr: true, note: "设项首金兼破世界纪录" },

  // —— 世界锦标赛 ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "United States", country: "USA", time: "3:49.34", wr: true, note: "史密斯·道格拉斯·沃尔什·赫斯克；现世界纪录" },
  { series: "worlds", year: 2024, city: "多哈", champion: "Australia", country: "AUS", time: "3:55.98", note: "美国队未派主力" },
  { series: "worlds", year: 2023, city: "福冈", champion: "United States", country: "USA", time: "3:52.08" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "United States", country: "USA", time: "3:53.78" },
  { series: "worlds", year: 2019, city: "光州", champion: "United States", country: "USA", time: "3:50.40", wr: true, note: "破世界纪录；雷根·史密斯仰泳棒57.57创个人世界纪录" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "United States", country: "USA", time: "3:51.55", wr: true, note: "破世界纪录" },
  { series: "worlds", year: 2015, city: "喀山", champion: "China", country: "CHN", time: "3:54.41", note: "傅园慧·史婧琳·陆滢·沈铎" },
  { series: "worlds", year: 2013, city: "巴塞罗那", champion: "United States", country: "USA", time: "3:53.23", note: "富兰克林·哈迪·沃尔默·罗马诺" },
  { series: "worlds", year: 2011, city: "上海", champion: "United States", country: "USA", time: "3:52.36" },
  { series: "worlds", year: 2009, city: "罗马", champion: "China", country: "CHN", time: "3:52.19", wr: true, note: "赵菁·陈慧佳·焦刘洋·李哲思；快速泳衣时代夺冠兼破世界纪录，亚洲纪录保持至今" },
  { series: "worlds", year: 2007, city: "墨尔本", champion: "Australia", country: "AUS", time: "3:55.74", wr: true, note: "破世界纪录" },
  { series: "worlds", year: 2005, city: "蒙特利尔", champion: "Australia", country: "AUS", time: "3:57.47", note: "破赛会纪录" },
  { series: "worlds", year: 2003, city: "巴塞罗那", champion: "China", country: "CHN", time: "3:59.89", note: "破赛会纪录与亚洲纪录；战殊·罗雪娟·周雅菲·杨雨" },
  { series: "worlds", year: 2001, city: "福冈", champion: "Australia", country: "AUS", time: "4:01.50" },
  { series: "worlds", year: 1998, city: "珀斯", champion: "United States", country: "USA", time: "4:01.93", note: "美洲纪录" },
  { series: "worlds", year: 1994, city: "罗马", champion: "China", country: "CHN", time: "4:01.67", wr: true, note: "贺慈红·戴国宏·刘黎敏·乐靖宜；破世界纪录" },
  { series: "worlds", year: 1991, city: "珀斯", champion: "United States", country: "USA", time: "4:06.51", note: "美洲纪录" },
  { series: "worlds", year: 1986, city: "马德里", champion: "East Germany", country: "GDR", time: "4:04.82", note: "破赛会纪录" },
  { series: "worlds", year: 1982, city: "瓜亚基尔", champion: "East Germany", country: "GDR", time: "4:05.88", wr: true, note: "破世界纪录" },
  { series: "worlds", year: 1978, city: "西柏林", champion: "United States", country: "USA", time: "4:08.21", note: "破赛会纪录" },
  { series: "worlds", year: 1975, city: "卡利", champion: "East Germany", country: "GDR", time: "4:14.74", note: "破赛会纪录" },
  { series: "worlds", year: 1973, city: "贝尔格莱德", champion: "East Germany", country: "GDR", time: "4:16.84", wr: true, note: "设项首金兼破世界纪录" },

  // —— 亚运会 ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "China", country: "CHN", time: "3:54.55", note: "破赛会纪录" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "Japan", country: "JPN", time: "3:57.67", note: "赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Japan", country: "JPN", time: "3:54.73", note: "破亚运会纪录" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "Japan", country: "JPN", time: "4:00.94" },
  { series: "asiangames", year: 2010, city: "广州", champion: "China", country: "CHN", time: "3:57.80" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "China", country: "CHN", time: "4:04.22" },
];
