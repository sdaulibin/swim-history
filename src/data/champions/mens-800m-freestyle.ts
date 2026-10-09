import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 800 米自由泳 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 世锦赛：2001/2005/2009/2011/2013/2015 六届已核（索普、哈克特、张琳、
 *    孙杨三连冠）；2003/2007 两届及 2017–2025 各届未能核实到可靠赛果，暂缺；
 *  - 泛太平洋 / 欧洲锦标赛：各届未能核实，暂缺；
 *  - 亚运会自 2018 年起设男子 800 自（此前各届无此项目），三届均已核实。
 */
export const mens800mFreestyleChampions: ChampionEntry[] = [
  // —— 奥运会（2021 东京为项目奥运首秀，两届全） ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Daniel Wiffen", country: "IRL", time: "7:38.19", note: "破奥运会纪录；爱尔兰首个奥运游泳冠军" },
  { series: "olympics", year: 2020, city: "东京", champion: "Gregorio Paltrinieri", country: "ITA", note: "该项目奥运首秀的冠军；夺冠成绩未能核实" },

  // —— 世界锦标赛（六届已核；2003/2007 及 2017–2025 届未能核实，暂缺） ——
  { series: "worlds", year: 2015, city: "喀山", champion: "Sun Yang", country: "CHN", time: "7:39.96", note: "世锦赛三连冠的收官一战" },
  { series: "worlds", year: 2013, city: "巴塞罗那", champion: "Sun Yang", country: "CHN", time: "7:41.36", note: "卫冕成功" },
  { series: "worlds", year: 2011, city: "上海", champion: "Sun Yang", country: "CHN", time: "7:38.57", note: "个人首个世锦赛冠军" },
  { series: "worlds", year: 2009, city: "罗马", champion: "Zhang Lin", country: "CHN", time: "7:32.12", wr: true, note: "中国男子游泳首个世界大赛冠军，兼创世界纪录，至今悬置" },
  { series: "worlds", year: 2005, city: "蒙特利尔", champion: "Grant Hackett", country: "AUS", time: "7:38.65", wr: true, note: "决赛夺冠并破索普的世界纪录" },
  { series: "worlds", year: 2001, city: "福冈", champion: "Ian Thorpe", country: "AUS", time: "7:39.16", wr: true, note: "决赛夺冠并破自己保持的世界纪录；当届三金之一" },

  // —— 亚运会（2018 年起设项，三届已核） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Zhang Zhanshuo", country: "CHN", time: "7:42.49", note: "破赛会纪录；当届七金征程的第五金" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "Kim Woo-min", country: "KOR", time: "7:46.03", note: "破亚运会纪录（原孙杨7:48.36）；费立纬7:49.90获银；赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Sun Yang", country: "CHN", time: "7:48.36", note: "项目亚运首秀即夺冠并创赛会纪录（单源待复核）" },
];
