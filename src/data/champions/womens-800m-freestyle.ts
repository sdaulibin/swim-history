import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 800 米自由泳 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：2000 年及以前各届未能核实，暂缺；
 *  - 世锦赛：2024 多哈届冠军未能核实（莱德基缺席），暂缺；
 *  - 泛太平洋 / 欧洲锦标赛：各届未能核实，暂缺；
 *  - 亚运会：2006 多哈起六届（研究进行中，个别届次可能暂缺）。
 */
export const womens800mFreestyleChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Katie Ledecky", country: "USA", time: "8:11.04", note: "第四届奥运称霸该距离" },
  { series: "olympics", year: 2020, city: "东京", champion: "Katie Ledecky", country: "USA", time: "8:12.57" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Katie Ledecky", country: "USA", time: "8:04.79", wr: true },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Katie Ledecky", country: "USA", time: "8:14.63", note: "15岁的横空出世" },
  { series: "olympics", year: 2008, city: "北京", champion: "Rebecca Adlington", country: "GBR", time: "8:14.10", wr: true, note: "为英国拿下1988年以来首枚游泳奥运金牌" },
  { series: "olympics", year: 2004, city: "雅典", champion: "Ai Shibata", country: "JPN", time: "8:24.54" },

  // —— 世界锦标赛（2024 多哈届未能核实，暂缺） ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "Katie Ledecky", country: "USA", time: "8:04.12", wr: true, note: "时隔九年自己刷新世界纪录" },
  { series: "worlds", year: 2023, city: "福冈", champion: "Katie Ledecky", country: "USA", time: "8:08.07", note: "李冰洁8:13.31获银牌并创亚洲纪录" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "Katie Ledecky", country: "USA", time: "8:08.87", note: "单源待复核" },
  { series: "worlds", year: 2019, city: "光州", champion: "Katie Ledecky", country: "USA", time: "8:13.58" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "Katie Ledecky", country: "USA", note: "夺冠成绩未能核实；李冰洁8:15.46摘银" },
];
