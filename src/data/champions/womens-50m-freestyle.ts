import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 50 米自由泳 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：1996 及以前未能核实，暂缺；
 *  - 世锦赛：2015/2022/2023/2024/2025 各届未能核实，暂缺；
 *  - 泛太平洋锦标赛不设 50 米项目；欧洲锦标赛：2026 及以前未能核实，暂缺；
 *  - 亚运会：2006 多哈起六届（研究进行中，个别届次可能暂缺）。
 */
export const womens50mFreestyleChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Sarah Sjöström", country: "SWE", time: "23.71", note: "30岁加冕，个人第三枚奥运金牌" },
  { series: "olympics", year: 2020, city: "东京", champion: "Emma McKeon", country: "AUS", time: "23.81", or: true, note: "当届四金之一" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Pernille Blume", country: "DEN", time: "24.07", note: "丹麦意外之喜" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Ranomi Kromowidjojo", country: "NED", time: "24.05", note: "当届50/100自双金" },
  { series: "olympics", year: 2008, city: "北京", champion: "Britta Steffen", country: "GER", time: "24.06", note: "当届50/100自双金" },
  { series: "olympics", year: 2004, city: "雅典", champion: "Inge de Bruijn", country: "NED", time: "24.58", note: "卫冕成功" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "Inge de Bruijn", country: "NED", time: "24.32", wr: true, note: "当届50自/100自/100蝶三金" },

  // —— 世界锦标赛（2015/2022–2025 届未能核实，暂缺） ——
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "Sarah Sjöström", country: "SWE", time: "23.69", note: "半决赛23.61创现世界纪录" },

  // —— 亚运会（2006 多哈起六届；详见研究核证） ——
];
