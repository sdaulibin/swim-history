import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 50 米自由泳 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：2000 年并列夺金为千禧名场面；1996 及以前未能核实，暂缺；
 *  - 世锦赛：2015/2022/2024/2025 各届未能核实，暂缺；
 *  - 泛太平洋锦标赛不设 50 米项目；欧洲锦标赛：2026 及以前未能核实，暂缺；
 *  - 亚运会：2006 多哈起六届（研究进行中，个别届次可能暂缺）。
 */
export const mens50mFreestyleChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Cameron McEvoy", country: "AUS", time: "21.25", note: "30岁终圆奥运金牌梦" },
  { series: "olympics", year: 2020, city: "东京", champion: "Caeleb Dressel", country: "USA", time: "21.07", or: true },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Anthony Ervin", country: "USA", time: "21.40", note: "35岁夺金，距2000年并列夺冠已16年" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Florent Manaudou", country: "FRA", time: "21.34", note: "力压卫冕冠军西埃洛" },
  { series: "olympics", year: 2008, city: "北京", champion: "Cesar Cielo", country: "BRA", time: "21.30", note: "巴西首枚游泳奥运金牌" },
  { series: "olympics", year: 2004, city: "雅典", champion: "Gary Hall Jr.", country: "USA", time: "21.93", note: "卫冕成功" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "Anthony Ervin", country: "USA", time: "21.98", note: "与加里·霍尔并列夺冠，奥运史上罕见的双金" },

  // —— 世界锦标赛（2015/2022/2024/2025 届未能核实，暂缺） ——
  { series: "worlds", year: 2023, city: "福冈", champion: "Cameron McEvoy", country: "AUS", time: "21.06", note: "布料泳衣时代历史最快，距世界纪录0.15秒" },
  { series: "worlds", year: 2019, city: "光州", champion: "Caeleb Dressel", country: "USA", time: "21.04", note: "赛会纪录" },

  // —— 亚运会（2006 多哈起六届；详见研究核证） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Kim Young-beom", country: "KOR", time: "21.66", note: "破赛会纪录夺金" },
];
