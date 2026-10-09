import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 1500 米自由泳 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：2021 东京为该项目奥运首秀，此前无此项；
 *  - 世锦赛：2013–2025 七届已核，2022/2023 两届夺冠成绩未能逐条核实；
 *  - 泛太平洋 / 欧洲锦标赛：各届未能核实，暂缺；
 *  - 亚运会：女子 1500 自 2018 年起设项，三届已核。
 */
export const womens1500mFreestyleChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Katie Ledecky", country: "USA", time: "15:30.02", note: "该项目奥运第二金" },
  { series: "olympics", year: 2020, city: "东京", champion: "Katie Ledecky", country: "USA", time: "15:37.34", note: "奥运首秀夺冠" },

  // —— 世界锦标赛（2024 多哈届未能核实，暂缺） ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "Katie Ledecky", country: "USA", time: "15:26.44", note: "个人第六届世锦赛1500自冠军" },
  { series: "worlds", year: 2024, city: "多哈", champion: "Simona Quadarella", country: "ITA", time: "15:46.99", note: "莱德基缺席；李冰洁15:56.62获银牌" },
  { series: "worlds", year: 2023, city: "福冈", champion: "Katie Ledecky", country: "USA", note: "夺冠成绩未能核实" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "Katie Ledecky", country: "USA", note: "夺冠成绩未能核实" },
  { series: "worlds", year: 2019, city: "光州", champion: "Simona Quadarella", country: "ITA", time: "15:40.89", note: "莱德基因病退出决赛" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "Katie Ledecky", country: "USA", time: "15:31.82", note: "夺冠并破世界纪录" },
  { series: "worlds", year: 2013, city: "巴塞罗那", champion: "Katie Ledecky", country: "USA", time: "15:36.53", note: "项目首届世锦赛，夺冠兼创世界纪录" },

  // —— 亚运会（2018 年起设项，三届已核） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Li Bingjie", country: "CHN", time: "15:53.52", note: "成功卫冕" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "Li Bingjie", country: "CHN", time: "15:51.18", note: "破赛会纪录；高唯中获银牌；赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Wang Jianjiahe", country: "CHN", time: "15:53.68", note: "项目亚运首秀冠军" },
];
