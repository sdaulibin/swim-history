import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 800 米自由泳 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：2024 巴黎届冠军未能核实，暂缺；2021 东京为该项目奥运首秀；
 *  - 世锦赛：2017–2025 各届冠军未能核实，暂缺（该项目 2017 年起进入世锦赛）；
 *  - 泛太平洋 / 欧洲锦标赛：各届未能核实，暂缺；
 *  - 亚运会自 2018 年起设男子 800 自（此前各届无此项目），三届均已核实。
 */
export const mens800mFreestyleChampions: ChampionEntry[] = [
  // —— 奥运会（2024 巴黎届未能核实，暂缺） ——
  { series: "olympics", year: 2020, city: "东京", champion: "Gregorio Paltrinieri", country: "ITA", note: "该项目奥运首秀的冠军；夺冠成绩未能核实" },

  // —— 亚运会（2018 年起设项，三届已核） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Zhang Zhanshuo", country: "CHN", time: "7:42.49", note: "破赛会纪录；当届七金征程的第五金" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "Kim Woo-min", country: "KOR", time: "7:46.03", note: "破亚运会纪录（原孙杨7:48.36）；费立纬7:49.90获银；赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Sun Yang", country: "CHN", time: "7:48.36", note: "项目亚运首秀即夺冠并创赛会纪录（单源待复核）" },
];
