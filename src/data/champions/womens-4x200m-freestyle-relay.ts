import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 4×200 米自由泳接力 · 历届大赛冠军
 * champion 字段按站点接力项目惯例使用国家英文名，中文译名由 names.ts 映射。
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：1996/2000/2004 三届美国队夺冠已核实，具体成绩未能核实；
 *  - 世锦赛：1973–2017 各届未能核实，暂缺；
 *  - 泛太平洋：1985–2018 各届未能核实，暂缺；2026 尔湾（澳大利亚 7:42.40）为真实结果；
 *  - 欧洲锦标赛：2024 及更早各届未能核实，暂缺；2026 巴黎（英国 7:45.93 赛会纪录）为真实结果；
 *  - 亚运会：2014/2018 两届冠军已核实但具体成绩未能核实；
 *    2022 杭州届 7:49.34 为单一来源，待复核。
 */
export const womens4x200mFreestyleRelayChampions: ChampionEntry[] = [
  // —— 奥运会（1996 年设项；1996/2000/2004 届成绩未能核实） ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Australia", country: "AUS", time: "7:38.08", or: true, note: "M. O'Callaghan · L. Pallister · B. Throssell · A. Titmus；美国 7:40.86 银牌、中国 7:42.34 铜牌" },
  { series: "olympics", year: 2020, city: "东京", champion: "China", country: "CHN", time: "7:40.33", wr: true, note: "杨浚瑄 · 汤慕涵 · 张雨霏 · 李冰洁；中国首金，美国 7:40.73 银、澳大利亚 7:41.29 铜，前三名均快于原世界纪录" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "United States", country: "USA", time: "7:43.03", note: "K. Ledecky 压轴；力压澳大利亚 1.84 秒" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "United States", country: "USA", time: "7:42.92", note: "M. Franklin · D. Vollmer · S. Vreeland · A. Schmitt" },
  { series: "olympics", year: 2008, city: "北京", champion: "Australia", country: "AUS", time: "7:44.31", wr: true, note: "S. Rice · B. Barratt · K. Palmer · L. McKenzie；将世界纪录一举提高 5.78 秒" },
  { series: "olympics", year: 2004, city: "雅典", champion: "United States", country: "USA", note: "奥运三连冠收官（成绩未能核实）" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "United States", country: "USA", note: "S. Arsenault · D. Munz · L. Benko · J. Thompson（成绩未能核实）" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "United States", country: "USA", note: "项目首次进入奥运会，东道主夺首金（1996-07-25，成绩未能核实）" },

  // —— 世界锦标赛（1973–2017 各届未能核实，暂缺） ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "Australia", country: "AUS", time: "7:39.35", note: "L. Pallister · J. Perkins · B. Castelluzzo · M. O'Callaghan；美国 7:40.01 银牌（美国纪录），中国 7:42.99 铜牌" },
  { series: "worlds", year: 2024, city: "多哈", champion: "China", country: "CHN", time: "7:47.26", note: "李冰洁第三棒 1:54.59 率队从第五反超，艾衍含、杨佩琪在阵；英国队银牌" },
  { series: "worlds", year: 2023, city: "福冈", champion: "Australia", country: "AUS", time: "7:37.50", wr: true, note: "现世界纪录；蒂特姆斯、奥卡拉汉领衔" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "United States", country: "USA", time: "7:41.45", note: "C. Weinstein · L. Smith · K. Ledecky · B. Sims；澳大利亚 7:43.86 银牌、加拿大 7:44.76 铜牌" },
  { series: "worlds", year: 2019, city: "光州", champion: "Australia", country: "AUS", time: "7:41.50", wr: true, note: "A. Titmus 一棒 1:54.27" },

  // —— 泛太平洋锦标赛（1985–2018 各届未能核实，暂缺） ——
  { series: "panpacific", year: 2026, city: "尔湾", champion: "Australia", country: "AUS", time: "7:42.40", note: "赛会纪录；美国 7:43.10 银牌、加拿大铜牌" },

  // —— 欧洲锦标赛（长池；2024 及更早未能核实，暂缺） ——
  { series: "euros", year: 2026, city: "巴黎", champion: "Great Britain", country: "GBR", time: "7:45.93", note: "赛会纪录；A. Wood 领衔，英国队包揽当届男女 4×200 两金" },

  // —— 亚运会（2006 多哈起六届；2010/2014 届成绩未能核实） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "China", country: "CHN", time: "7:49.37", note: "李家萍 · 柳雅欣 · 李冰洁 · 余依婷；决赛在东京水上运动中心举行，日本 7:59.53 银牌、韩国 8:01.87 铜牌" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "China", country: "CHN", time: "7:49.34", note: "柳雅欣 · 程玉洁 · 李冰洁 · 李家萍；日本银牌、韩国铜牌；赛事于2023年举行（成绩单一来源，待复核）" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "China", country: "CHN", note: "王简嘉禾、李冰洁在阵（成绩未能核实）" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "China", country: "CHN", note: "郭君君 · 唐奕 · 曹悦 · 沈铎（成绩未能核实），日本银牌" },
  { series: "asiangames", year: 2010, city: "广州", champion: "China", country: "CHN", note: "夺冠成绩未能核实" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "China", country: "CHN", time: "8:01.89" },
];
