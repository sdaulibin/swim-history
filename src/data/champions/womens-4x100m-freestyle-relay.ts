import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 4×100 米自由泳接力 · 历届大赛冠军
 * 奥运会数据来源：Wikipedia "List of Olympic medalists in swimming (women)"、各届决赛页
 * 世锦赛数据来源：Wikipedia "4 × 100 metre freestyle relay at the World Aquatics Championships"
 *
 * 核实说明（宁缺毋滥）：
 * - 奥运会全届次收录；1924–1996 年间多数届次冠军国可核、夺冠成绩未能双源核实，暂不附成绩
 * - 世锦赛 1978（美国/民主德国说法存疑）、1991、1998、2001、2003、2007、2011、2024（多哈）
 *   各届待核暂缺；2025 新加坡届冠军国为澳大利亚，具体成绩待补
 * - 泛太平洋 1985–2010 各届待核暂缺；欧锦赛长池仅收 2026 届；亚运会按站点惯例自 2014 起收录
 * - 站点时间线：2025 新加坡为真实结果；2026 尔湾泛太、2026 巴黎欧锦赛、2026 名古屋亚运为
 *   站点虚构延伸的合理结果
 * - champion 一律使用国家英文名，中文译名由 names.ts 映射
 */
export const womens4x100mFreestyleRelayChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Australia", country: "AUS", time: "3:28.92", or: true, note: "距世界纪录3:27.96差0.96秒" },
  { series: "olympics", year: 2020, city: "东京", champion: "Australia", country: "AUS", time: "3:29.69", wr: true, or: true, note: "首次游进3分30秒" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Australia", country: "AUS", time: "3:30.65", wr: true, or: true },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Australia", country: "AUS", note: "时隔八年再登顶" },
  { series: "olympics", year: 2008, city: "北京", champion: "Netherlands", country: "NED", time: "3:33.76", wr: true },
  { series: "olympics", year: 2004, city: "雅典", champion: "Australia", country: "AUS", time: "3:35.94", wr: true },
  { series: "olympics", year: 2000, city: "悉尼", champion: "United States", country: "USA", time: "3:36.61", wr: true, note: "打破中国队保持六年的世界纪录" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "United States", country: "USA", note: "卫冕" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "United States", country: "USA", time: "3:39.46", wr: true, note: "首次突破3分40秒" },
  { series: "olympics", year: 1988, city: "汉城", champion: "East Germany", country: "GDR", note: "克里斯汀·奥托当届六金之一" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "United States", country: "USA" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "East Germany", country: "GDR" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "East Germany", country: "GDR", time: "3:42.45", wr: true, note: "恩德当届四金之一" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "United States", country: "USA" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "United States", country: "USA" },
  { series: "olympics", year: 1964, city: "东京", champion: "United States", country: "USA" },
  { series: "olympics", year: 1960, city: "罗马", champion: "United States", country: "USA" },
  { series: "olympics", year: 1956, city: "墨尔本", champion: "Australia", country: "AUS", note: "东道主夺金，弗雷泽、克拉普均在阵中" },
  { series: "olympics", year: 1952, city: "赫尔辛基", champion: "Hungary", country: "HUN", note: "匈牙利女子游泳黄金一代" },
  { series: "olympics", year: 1948, city: "伦敦", champion: "United States", country: "USA" },
  { series: "olympics", year: 1936, city: "柏林", champion: "Netherlands", country: "NED" },
  { series: "olympics", year: 1932, city: "洛杉矶", champion: "United States", country: "USA", note: "美国队奥运四连冠" },
  { series: "olympics", year: 1928, city: "阿姆斯特丹", champion: "United States", country: "USA" },
  { series: "olympics", year: 1924, city: "巴黎", champion: "United States", country: "USA" },
  { series: "olympics", year: 1920, city: "安特卫普", champion: "United States", country: "USA", time: "5:11.2", wr: true },
  { series: "olympics", year: 1912, city: "斯德哥尔摩", champion: "Great Britain", country: "GBR", time: "5:52.8", wr: true, note: "女子游泳入奥首届；首个被承认的世界纪录" },

  // —— 世界锦标赛（1978/1991/1998/2001/2003/2007/2011/2024 待核暂缺） ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "Australia", country: "AUS" },
  { series: "worlds", year: 2023, city: "福冈", champion: "Australia", country: "AUS", time: "3:27.96", wr: true, note: "现世界纪录" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "Australia", country: "AUS" },
  { series: "worlds", year: 2019, city: "光州", champion: "Australia", country: "AUS" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "Australia", country: "AUS", time: "3:31.72", note: "成绩恰好与2009年荷兰队的世界纪录同为3:31.72" },
  { series: "worlds", year: 2015, city: "喀山", champion: "Australia", country: "AUS" },
  { series: "worlds", year: 2013, city: "巴塞罗那", champion: "Australia", country: "AUS" },
  { series: "worlds", year: 2009, city: "罗马", champion: "Netherlands", country: "NED", time: "3:31.72", wr: true, note: "快速泳衣时代" },
  { series: "worlds", year: 2005, city: "蒙特利尔", champion: "Australia", country: "AUS" },
  { series: "worlds", year: 1986, city: "马德里", champion: "East Germany", country: "GDR" },
  { series: "worlds", year: 1982, city: "瓜亚基尔", champion: "East Germany", country: "GDR" },
  { series: "worlds", year: 1975, city: "卡利", champion: "East Germany", country: "GDR" },
  { series: "worlds", year: 1973, city: "贝尔格莱德", champion: "East Germany", country: "GDR" },

  // —— 泛太平洋锦标赛（1985 年起；1985–2010 各届待核暂缺） ——
  { series: "panpacific", year: 2026, city: "尔湾", champion: "Australia", country: "AUS", time: "3:29.44", note: "泛太复办届；哈里斯当届接力、个人双金" },
  { series: "panpacific", year: 2018, city: "东京", champion: "Australia", country: "AUS" },
  { series: "panpacific", year: 2014, city: "黄金海岸", champion: "Australia", country: "AUS" },

  // —— 欧洲锦标赛（长池；仅收 2026 届，更早届次待核） ——
  { series: "euros", year: 2026, city: "巴黎", champion: "Netherlands", country: "NED", time: "3:32.94", note: "斯滕贝根领衔" },

  // —— 亚运会（2014 起四届） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "China", country: "CHN", time: "3:31.85", note: "卫冕" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "China", country: "CHN", note: "赛事于2023年举行；具体成绩待核" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "China", country: "CHN" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "China", country: "CHN" },
];
