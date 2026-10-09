import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 50 米蝶泳 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 50 米蝶泳不是奥运会项目，无奥运条目；
 *  - 世锦赛：2001 年起设立；2015/2017 届夺冠成绩未能核实；
 *    2022–2025 各届未能核实，暂缺；
 *  - 泛太平洋锦标赛不设 50 米项目；欧洲锦标赛：2026 及以前未能核实，暂缺；
 *  - 亚运会：2014/2018/2022/2026 四届已核；2006/2010 届未能核实
 *    （已知 2010 年陆滢仅获铜牌，冠军另有其人）。
 */
export const womens50mButterflyChampions: ChampionEntry[] = [
  // —— 世界锦标赛（2022–2025 届未能核实，暂缺） ——
  { series: "worlds", year: 2019, city: "光州", champion: "Sarah Sjöström", country: "SWE", time: "25.02" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "Sarah Sjöström", country: "SWE", note: "夺冠成绩未能核实" },
  { series: "worlds", year: 2015, city: "喀山", champion: "Sarah Sjöström", country: "SWE", note: "夺冠成绩未能核实" },

  // —— 亚运会（四届已核；2006/2010 暂缺） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Zhang Yufei", country: "CHN", time: "25.41", note: "卫冕；吴卿风获银牌、池江璃花子获铜牌" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "Zhang Yufei", country: "CHN", time: "25.10", note: "赛会纪录（原25.55）；余依婷银牌、池江璃花子铜牌；赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Rikako Ikee", country: "JPN", time: "25.55", note: "破亚运会纪录（原陆滢25.83）" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "Lu Ying", country: "CHN", time: "25.83", note: "破亚运会纪录" },
];
