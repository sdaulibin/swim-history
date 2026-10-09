import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 4×100 米混合泳接力 · 历届大赛冠军
 * champion 字段按站点接力项目惯例使用国家英文名。
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：2008 年及以前各届未能核实，暂缺；
 *  - 世锦赛：2022/2024 届未能核实，暂缺；
 *  - 泛太平洋 / 欧洲锦标赛：各届未能核实，暂缺；
 *  - 亚运会：2006 多哈起六届（研究进行中，个别届次可能暂缺）。
 */
export const mens4x100mMedleyRelayChampions: ChampionEntry[] = [
  // —— 奥运会（2008 年及以前未能核实，暂缺） ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "China", country: "CHN", time: "3:27.46", note: "徐嘉余·覃海洋·孙佳俊·潘展乐；终结美国队40年奥运垄断" },
  { series: "olympics", year: 2020, city: "东京", champion: "United States", country: "USA", time: "3:26.78", wr: true, note: "中国队因蝶泳棒次抢跳被取消成绩" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "United States", country: "USA", time: "3:27.95", note: "菲尔普斯奥运谢幕战" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "United States", country: "USA", time: "3:29.35" },

  // —— 世界锦标赛（2022/2024 届未能核实，暂缺） ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "China", country: "CHN", note: "潘展乐压轴棒次游出45.92；夺冠成绩未能核实" },
  { series: "worlds", year: 2023, city: "福冈", champion: "United States", country: "USA", time: "3:27.20", note: "中国队获银牌并创当时的亚洲纪录" },
  { series: "worlds", year: 2019, city: "光州", champion: "Great Britain", country: "GBR", time: "3:28.10", wr: true, note: "皮蒂的蛙泳棒次奠定胜局" },
];
