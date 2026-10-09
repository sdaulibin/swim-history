import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 200 米仰泳 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：2008 年及以前各届未能核实，暂缺；
 *  - 世锦赛：2017/2023/2025 届未能核实，暂缺；
 *  - 泛太平洋：各届未能核实，暂缺；欧洲锦标赛：2026 及以前暂缺；
 *  - 亚运会：2006 多哈起六届（研究进行中，个别届次可能暂缺）。
 */
export const mens200mBackstrokeChampions: ChampionEntry[] = [
  // —— 奥运会（2008 年及以前未能核实，暂缺） ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Hubert Kos", country: "HUN", time: "1:54.26", note: "匈牙利新王，力压墨菲时代的余晖" },
  { series: "olympics", year: 2020, city: "东京", champion: "Evgeny Rylov", country: "Russia", time: "1:53.27", or: true, note: "奥运会纪录；墨菲获银，俄罗斯包揽金银" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Ryan Murphy", country: "USA", time: "1:53.62" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Tyler Clary", country: "USA", time: "1:53.41", note: "力压卫冕冠军佩尔索尔夺冠" },

  // —— 世界锦标赛（2017/2023/2025 届未能核实，暂缺） ——
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "Ryan Murphy", country: "USA", time: "1:54.52", note: "单源待复核" },
  { series: "worlds", year: 2019, city: "光州", champion: "Evgeny Rylov", country: "Russia", time: "1:53.68", note: "赛会纪录" },

  // —— 亚运会（2006 多哈起六届；详见研究核证） ——
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Xu Jiayu", country: "CHN", time: "1:53.99", note: "当届个人第四金；打破全国纪录" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "Ryosuke Irie", country: "JPN", time: "1:53.26", note: "破赛会纪录" },
];
