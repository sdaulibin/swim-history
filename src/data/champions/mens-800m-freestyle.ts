import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 800 米自由泳 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：2024 巴黎届冠军未能核实，暂缺；2021 东京为该项目奥运首秀；
 *  - 世锦赛：2017–2025 各届冠军未能核实，暂缺（该项目 2017 年起进入世锦赛）；
 *  - 泛太平洋 / 欧洲锦标赛：各届未能核实，暂缺；
 *  - 亚运会：男子 800 自进入亚运会较晚（约 2018 年起），历届详见研究核证。
 */
export const mens800mFreestyleChampions: ChampionEntry[] = [
  // —— 奥运会（2024 巴黎届未能核实，暂缺） ——
  { series: "olympics", year: 2020, city: "东京", champion: "Gregorio Paltrinieri", country: "ITA", note: "该项目奥运首秀的冠军；夺冠成绩未能核实" },
];
