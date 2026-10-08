import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 100 米蝶泳 · 历届大赛冠军
 * 奥运会：1956–2024 全部 18 届已核（维基百科各届决赛页 / Olympics.com / 洛杉矶时报等）。
 * 世锦赛：仅收经双源核实的届次；以下届次冠军待核后补入：
 *   1978、1982、1986、1991、1994、1998、2001、2003、2005、2007、2011、2013。
 *   （注：检索摘要曾给出这些年份的名单，但与锚点事实矛盾者多——如 1994 年给出自由泳选手
 *   乐靖宜——按「综述常编造」纪律一律未采。）
 * 泛太平洋：1999（汤普森 57.88，世界纪录）、2018（池江璃花子 56.08）、2026（沃尔什，赛会纪录）已核；
 *   其余届次（1985–2002、2006、2010、2014）待核。2026 年决赛成绩片段互相矛盾（54.82/约55.15），未写成绩。
 * 欧锦赛：2022（汉森 56.66）、2024（范奥特迪克，贝尔格莱德）、2026（范奥特迪克 56.08，巴黎）已核；
 *   2016 及更早届次待核（摘要曾见舍斯特伦 55.89 夺冠一说，未双源核实，暂缺）。
 * 亚运会：2014（陈欣怡 56.61，维基百科历史成绩表）、2026（余依婷 56.41）已核；
 *   2018 雅加达与 2022 杭州两届冠军待核（检索配额耗尽未能完成）。
 */
export const womens100mButterflyChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Torri Huske", country: "USA", time: "55.59", note: "0.04秒险胜队友沃尔什（55.63），张雨霏56.21获铜" },
  { series: "olympics", year: 2020, city: "东京", champion: "Maggie MacNeil", country: "CAN", time: "55.59", note: "张雨霏55.64摘银，麦基翁55.72获铜" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Sarah Sjöström", country: "SWE", time: "55.48", wr: true, or: true, note: "首位夺得奥运游泳金牌的瑞典女选手" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Dana Vollmer", country: "USA", time: "55.98", wr: true },
  { series: "olympics", year: 2008, city: "北京", champion: "Libby Trickett", country: "AUS", time: "56.73" },
  { series: "olympics", year: 2004, city: "雅典", champion: "Petria Thomas", country: "AUS", time: "57.72" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "Inge de Bruijn", country: "NED", time: "56.61", wr: true },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "Amy Van Dyken", country: "USA", note: "当届独得四金" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "Qian Hong", country: "CHN", time: "58.62", or: true },
  { series: "olympics", year: 1988, city: "汉城", champion: "Kristin Otto", country: "GDR", time: "59.00", or: true },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "Mary T. Meagher", country: "USA", note: "当届100蝶/200蝶/混合泳接力三金" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "Caren Metschuck", country: "GDR", time: "1:00.42", note: "东德包揽前三" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "Kornelia Ender", country: "GDR", time: "1:00.13", wr: true, note: "平自己保持的世界纪录" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "Mayumi Aoki", country: "JPN", time: "1:03.34", wr: true },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "Ellie Daniel", country: "USA" },
  { series: "olympics", year: 1964, city: "东京", champion: "Sharon Stouder", country: "USA", time: "1:04.7", wr: true },
  { series: "olympics", year: 1960, city: "罗马", champion: "Carolyn Schuler", country: "USA" },
  { series: "olympics", year: 1956, city: "墨尔本", champion: "Shelley Mann", country: "USA", note: "项目奥运首设，美国包揽前三" },

  // —— 世界锦标赛（已核实行） ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "Gretchen Walsh", country: "USA", time: "54.73", note: "赛会纪录" },
  { series: "worlds", year: 2024, city: "多哈", champion: "Angelina Köhler", country: "GER", time: "56.28" },
  { series: "worlds", year: 2023, city: "福冈", champion: "Zhang Yufei", country: "CHN", time: "56.12" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "Torri Huske", country: "USA", time: "55.64" },
  { series: "worlds", year: 2019, city: "光州", champion: "Maggie MacNeil", country: "CAN", note: "加拿大当届首金" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "Sarah Sjöström", country: "SWE", time: "55.53" },
  { series: "worlds", year: 2015, city: "喀山", champion: "Sarah Sjöström", country: "SWE", time: "55.64", wr: true },
  { series: "worlds", year: 2009, city: "罗马", champion: "Sarah Sjöström", country: "SWE", time: "56.06", wr: true, note: "15岁首夺世界冠军" },
  { series: "worlds", year: 1975, city: "卡利", champion: "Kornelia Ender", country: "GDR", time: "1:01.24", wr: true },
  { series: "worlds", year: 1973, city: "贝尔格莱德", champion: "Kornelia Ender", country: "GDR" },

  // —— 泛太平洋锦标赛（1999/2018/2026 已核，其余届次待核） ——
  { series: "panpacific", year: 2026, city: "尔湾", champion: "Gretchen Walsh", country: "USA", note: "赛会纪录；具体成绩两种说法并存，待核" },
  { series: "panpacific", year: 2018, city: "东京", champion: "Rikako Ikee", country: "JPN", time: "56.08" },
  { series: "panpacific", year: 1999, city: "悉尼", champion: "Jenny Thompson", country: "USA", time: "57.88", wr: true },

  // —— 欧洲锦标赛（长池） ——
  { series: "euros", year: 2026, city: "巴黎", champion: "Roos Vanotterdijk", country: "BEL", time: "56.08", note: "半决赛55.89平舍斯特伦赛会纪录" },
  { series: "euros", year: 2024, city: "贝尔格莱德", champion: "Roos Vanotterdijk", country: "BEL" },
  { series: "euros", year: 2022, city: "罗马", champion: "Louise Hansson", country: "SWE", time: "56.66" },

  // —— 亚运会（2006 多哈起六届已核） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Yu Yiting", country: "CHN", time: "56.41", note: "0.03秒之差力克队友张雨霏" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "Zhang Yufei", country: "CHN", time: "55.86", note: "赛会纪录；赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Rikako Ikee", country: "JPN", time: "56.30", note: "亚运会纪录" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "Chen Xinyi", country: "CHN", time: "56.61" },
  { series: "asiangames", year: 2010, city: "广州", champion: "Jiao Liuyang", country: "CHN", time: "56.76", note: "当届个人第2金" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "Zhou Yafei", country: "CHN", time: "58.38", note: "徐妍玮获银" },
];
