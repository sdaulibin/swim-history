import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 1500 米自由泳 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：2000 年及以前各届未能核实，暂缺；
 *  - 世锦赛：2022–2025 各届未能核实，暂缺；
 *  - 泛太平洋 / 欧洲锦标赛：各届未能核实，暂缺；
 *  - 亚运会：2006 多哈起六届（研究进行中，个别届次可能暂缺）。
 */
export const mens1500mFreestyleChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Bobby Finke", country: "USA", time: "14:30.67", wr: true, note: "十二年后同日打破孙杨的世界纪录；最后100米的疯狂冲刺" },
  { series: "olympics", year: 2020, city: "东京", champion: "Bobby Finke", country: "USA", time: "14:39.65", note: "最后50米反超夺金" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Gregorio Paltrinieri", country: "ITA", time: "14:34.57" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Sun Yang", country: "CHN", time: "14:31.02", wr: true, note: "中国男子游泳首枚奥运长距离金牌" },
  { series: "olympics", year: 2008, city: "北京", champion: "Oussama Mellouli", country: "TUN", time: "14:40.84", note: "为突尼斯拿下历史性金牌" },
  { series: "olympics", year: 2004, city: "雅典", champion: "Grant Hackett", country: "AUS", time: "14:43.40", note: "卫冕成功" },
];
