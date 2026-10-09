import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 100 米仰泳 · 历届大赛冠军
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：1996 年及以前各届未能核实，暂缺；
 *  - 世锦赛：2015 年及以前、2024/2025 届未能核实，暂缺；
 *  - 泛太平洋 / 欧洲锦标赛：各届未能核实，暂缺；
 *  - 亚运会：2006 多哈届未能核实，暂缺；2010 届冠军已核、成绩未能核实。
 */
export const mens100mBackstrokeChampions: ChampionEntry[] = [
  // —— 奥运会（1996 年及以前未能核实，暂缺） ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Thomas Ceccon", country: "ITA", time: "52.00", note: "加冕奥运冠军；奥运会纪录（51.85）未能改写" },
  { series: "olympics", year: 2020, city: "东京", champion: "Evgeny Rylov", country: "Russia", time: "51.98", note: "科列斯尼科夫52.00摘银，俄罗斯包揽金银；徐嘉余52.51列第五" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Ryan Murphy", country: "USA", time: "51.85", wr: true, note: "决赛打破世界纪录，当届包揽100/200仰双金" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Matt Grevers", country: "USA", time: "52.16" },
  { series: "olympics", year: 2008, city: "北京", champion: "Aaron Peirsol", country: "USA", time: "52.54", note: "决赛创世界纪录" },
  { series: "olympics", year: 2004, city: "雅典", champion: "Aaron Peirsol", country: "USA", note: "夺冠成绩未能核实" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "Lenny Krayzelburg", country: "USA", note: "夺冠成绩未能核实" },

  // —— 世界锦标赛（2015 及以前、2024/2025 届未能核实，暂缺） ——
  { series: "worlds", year: 2023, city: "福冈", champion: "Ryan Murphy", country: "USA", time: "52.22", note: "徐嘉余52.64获第四" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "Thomas Ceccon", country: "ITA", time: "51.60", wr: true, note: "决赛破世界纪录；当届世锦赛第一项世界纪录" },
  { series: "worlds", year: 2019, city: "光州", champion: "Xu Jiayu", country: "CHN", time: "52.43", note: "卫冕成功" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "Xu Jiayu", country: "CHN", time: "52.44", note: "0.04秒险胜格雷弗斯，中国男子仰泳首个世界冠军" },

  // —— 亚运会（2006 届未能核实，暂缺） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Xu Jiayu", country: "CHN", time: "51.98", note: "破赛会纪录，实现三连冠；31岁老将，比巴黎奥运冠军成绩快0.02秒" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "Xu Jiayu", country: "CHN", time: "52.23", note: "赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Xu Jiayu", country: "CHN", time: "52.34", note: "平入江陵介保持的赛会纪录，首枚个人亚运金牌" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "Ryosuke Irie", country: "JPN", time: "52.34", note: "创赛会纪录；当届包揽100/200仰双金" },
  { series: "asiangames", year: 2010, city: "广州", champion: "Ryosuke Irie", country: "JPN", note: "夺冠成绩未能核实；当届包揽100/200仰双金" },
];
