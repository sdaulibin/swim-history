import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 50 米蝶泳 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 50 米蝶泳不是奥运会项目，无奥运条目；
 *  - 世锦赛：2001 年起设立；2017 及以前、2022–2025 各届未能核实，暂缺；
 *  - 泛太平洋锦标赛不设 50 米项目；欧洲锦标赛：2026 及以前未能核实，暂缺；
 *  - 亚运会：2018/2022/2026 三届已核；2006–2014 届设项与赛果未能核实，暂缺。
 */
export const mens50mButterflyChampions: ChampionEntry[] = [
  // —— 世界锦标赛（2017 及以前、2022–2025 届未能核实，暂缺） ——
  { series: "worlds", year: 2019, city: "光州", champion: "Caeleb Dressel", country: "USA", time: "22.35", wr: true, note: "同届包揽50自/50蝶/100蝶三金" },

  // —— 亚运会（三届已核；2006–2014 暂缺） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Mikhail Arhangelsky", country: "BRN", time: "22.91", note: "归化选手；赛前已是亚洲纪录保持者；光永翔音获银牌" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "Baek Incheol", country: "KOR", time: "23.29", note: "破亚运会纪录；王长浩第四、陈俊儿第八；赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Joseph Schooling", country: "SGP", time: "23.61", note: "王鹏23.65获银牌" },
];
