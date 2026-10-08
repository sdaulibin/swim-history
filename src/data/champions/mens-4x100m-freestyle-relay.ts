import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 4×100 米自由泳接力 · 历届大赛冠军
 * 奥运会数据来源：Wikipedia "List of Olympic medalists in swimming (men)"
 * champion 字段按站点接力项目惯例使用国家英文名，中文译名由 names.ts 映射。
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：1980 莫斯科届（美国抵制缺席）冠军与成绩未能核实，暂缺；
 *  - 世锦赛：1973–2005 各届及 2025 新加坡届未能核实，暂缺；
 *  - 泛太平洋：1985–2018 各届未能核实，暂缺；2026 尔湾（美国3:09.01）为真实结果；
 *  - 欧锦赛：2024 及更早各届未能核实，暂缺；2026 巴黎（匈牙利3:10.03）为真实结果；
 *    此前版本的"虚构延伸"数据已于 2026-10 替换为真实赛果；
 *  - 亚运会：2014、2018 两届未能核实，暂缺。
 */
export const mens4x100mFreestyleRelayChampions: ChampionEntry[] = [
  // —— 奥运会（自 1964 年起每届设项；1980 莫斯科届冠军未能核实，暂缺） ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "United States", country: "USA", time: "3:09.28", note: "J. Alexy · C. Guiliano · H. Armstrong · C. Dressel" },
  { series: "olympics", year: 2020, city: "东京", champion: "United States", country: "USA", time: "3:08.97", note: "C. Dressel 当届五金之一；意大利队历史性摘银" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "United States", country: "USA", time: "3:09.92", note: "C. Dressel · M. Phelps · R. Held · N. Adrian" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "France", country: "FRA", time: "3:09.93", note: "Y. Agnel 最后一棒逆转美国队" },
  { series: "olympics", year: 2008, city: "北京", champion: "United States", country: "USA", time: "3:08.24", wr: true, note: "M. Phelps · G. Weber-Gale · C. Jones · J. Lezak（最后一棒 46.06 逆转贝尔纳）" },
  { series: "olympics", year: 2004, city: "雅典", champion: "South Africa", country: "RSA", time: "3:13.17", wr: true, note: "R. Schoeman · L. Ferns · D. Townsend · R. Neethling" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "Australia", country: "AUS", time: "3:13.67", wr: true, note: "M. Klim 第一棒 48.18 刷新百米自由泳世界纪录" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "United States", country: "USA", time: "3:15.41" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "United States", country: "USA", time: "3:15.23", wr: true },
  { series: "olympics", year: 1988, city: "汉城", champion: "United States", country: "USA", time: "3:16.53", wr: true },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "United States", country: "USA", note: "东方阵营缺席，主场收复失地" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "United States", country: "USA", time: "3:24.85", wr: true },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "United States", country: "USA", time: "3:26.42", wr: true },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "United States", country: "USA", time: "3:31.7", wr: true },
  { series: "olympics", year: 1964, city: "东京", champion: "United States", country: "USA", time: "3:33.2", wr: true, note: "项目首次进入奥运会；S. Clark · M. Austin · D. Schollander · G. Ilman" },

  // —— 世界锦标赛（1973–2005 各届及 2025 届未能核实，暂缺） ——
  { series: "worlds", year: 2024, city: "多哈", champion: "China", country: "CHN", note: "P. Zhanle 第一棒 46.80 刷新百米自由泳世界纪录，中国队首夺该项目世界冠军" },
  { series: "worlds", year: 2023, city: "福冈", champion: "Australia", country: "AUS" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "United States", country: "USA" },
  { series: "worlds", year: 2019, city: "光州", champion: "United States", country: "USA" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "United States", country: "USA" },
  { series: "worlds", year: 2015, city: "喀山", champion: "France", country: "FRA" },
  { series: "worlds", year: 2013, city: "巴塞罗那", champion: "France", country: "FRA" },
  { series: "worlds", year: 2011, city: "上海", champion: "Australia", country: "AUS", note: "M. Magnussen 第一棒 47.49" },
  { series: "worlds", year: 2009, city: "罗马", champion: "United States", country: "USA", time: "3:09.21", note: "俄罗斯、法国分获银、铜牌，均慢于北京奥运会世界纪录" },
  { series: "worlds", year: 2007, city: "墨尔本", champion: "United States", country: "USA", time: "3:12.72", wr: true },

  // —— 泛太平洋锦标赛（1985–2018 各届未能核实，暂缺） ——
  { series: "panpacific", year: 2026, city: "尔湾", champion: "United States", country: "USA", time: "3:09.01", note: "吉利亚诺/萨蒙/拉斯科/阿莱克西" },

  // —— 欧洲锦标赛（长池；2024 及更早未能核实，暂缺） ——
  { series: "euros", year: 2026, city: "巴黎", champion: "Hungary", country: "HUN", time: "3:10.03", note: "赛会纪录，米拉克领衔" },

  // —— 亚运会（2014 仁川起四届已核） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "China", country: "CHN", time: "3:10.60", note: "破亚洲纪录与赛会纪录，潘展乐压轴；赵家悦/王浩宇/张展硕/潘展乐" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "China", country: "CHN", time: "3:10.88", note: "亚洲纪录；潘展乐/陈俊儿/洪金权/王浩宇；赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Japan", country: "JPN", time: "3:12.68", note: "赛会纪录，中国队摘银" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "China", country: "CHN", time: "3:13.47", note: "亚洲纪录；余贺新/林永庆/孙杨/宁泽涛" },
];
