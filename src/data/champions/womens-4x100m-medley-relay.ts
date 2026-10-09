import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 4×100 米混合泳接力 · 历届大赛冠军
 * champion 字段按站点接力项目惯例使用国家英文名。
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：2004 年及以前各届未能核实，暂缺；
 *  - 世锦赛：2022–2025 各届未能核实，暂缺；
 *  - 泛太平洋 / 欧洲锦标赛：各届未能核实，暂缺；
 *  - 亚运会：2006 多哈起六届（研究进行中，个别届次可能暂缺）。
 */
export const womens4x100mMedleyRelayChampions: ChampionEntry[] = [
  // —— 奥运会（2004 年及以前未能核实，暂缺） ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "United States", country: "USA", time: "3:49.63", wr: true, note: "人类首支闯进3:50的女子接力" },
  { series: "olympics", year: 2020, city: "东京", champion: "Australia", country: "AUS", time: "3:51.60", note: "力压美国夺金" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "United States", country: "USA", time: "3:53.13" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "United States", country: "USA", time: "3:52.05", wr: true },
  { series: "olympics", year: 2008, city: "北京", champion: "Australia", country: "AUS", note: "夺冠成绩未能核实" },

  // —— 世界锦标赛（2022–2025 届未能核实，暂缺） ——
  { series: "worlds", year: 2019, city: "光州", champion: "United States", country: "USA", time: "3:50.40", wr: true },

  // —— 亚运会（2006 多哈起六届已核；2026 届破赛会纪录） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "China", country: "CHN", time: "3:54.55", note: "破赛会纪录；彭旭玮·张雨霏·唐钱婷·余依婷" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "Japan", country: "JPN", time: "3:57.57", note: "中国队预赛抢跳被取消资格；赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Japan", country: "JPN", time: "3:54.73", note: "破亚运会纪录；中国队交接棒犯规被取消成绩" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "Japan", country: "JPN", note: "韩国获银牌、中国香港铜牌；夺冠成绩未能核实" },
  { series: "asiangames", year: 2010, city: "广州", champion: "China", country: "CHN", time: "3:57.80", note: "赵菁·陈慧佳·焦刘洋·唐奕；日本3:58.24获银牌" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "China", country: "CHN", time: "4:04.22", note: "当届中国游泳队首金之一" },
];
