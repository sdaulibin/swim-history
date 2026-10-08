import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 400 米自由泳 · 历届大赛冠军
 * 奥运会数据来源：Wikipedia "List of Olympic medalists in swimming (women)"
 * 世锦赛数据来源：Wikipedia "400 metre freestyle at the World Aquatics Championships"
 * 泛太平洋数据来源：Wikipedia 各届赛事页
 *
 * 核实说明：
 * - 1920 年安特卫普奥运会未设女子 400 米自由泳（该届中距离项目为 300 米，由
 *   布莱布特里夺冠）；项目自 1924 年巴黎起连续设项至今，每届均有冠军收录。
 * - 2025 新加坡世锦赛为真实结果；2026 尔湾泛太（帕利斯特）/ 巴黎欧锦（夸达雷拉
 *   4:01.34）/ 名古屋亚运（李冰洁4:02.71）均为真实结果，此前版本的"虚构延伸"数据
 *   已于 2026-10 全部替换为真实赛果。
 * - 世锦赛 1975/1982/1986/1994/1998/2001/2003/2005/2011、泛太平洋 1985/1991/1993/
 *   1995/1997/1999/2002/2006/2010、欧锦赛 2006 与 2026 之外各届、亚运会 2014 仁川，
 *   未能核实，宁缺毋滥暂缺。
 */
export const womens400mFreestyleChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Ariarne Titmus", country: "AUS", time: "3:57.49", note: "卫冕，力压麦金托什与莱德基" },
  { series: "olympics", year: 2020, city: "东京", champion: "Ariarne Titmus", country: "AUS", time: "3:56.69", note: "力压莱德基；当时历史第二快成绩" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Katie Ledecky", country: "USA", time: "3:56.46", wr: true, note: "领先亚军近 5 秒" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Camille Muffat", country: "FRA", time: "4:01.45", or: true },
  { series: "olympics", year: 2008, city: "北京", champion: "Rebecca Adlington", country: "GBR", time: "4:03.22", or: true, note: "打破埃文斯保持 20 年的奥运纪录" },
  { series: "olympics", year: 2004, city: "雅典", champion: "Laure Manaudou", country: "FRA", time: "4:05.34", note: "法国首位女子游泳奥运冠军" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "Brooke Bennett", country: "USA", time: "4:05.80" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "Michelle Smith", country: "IRL", time: "4:07.25", note: "爱尔兰首枚奥运游泳金牌；1998 年因篡改药检样本被禁赛" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "Dagmar Hase", country: "GER", time: "4:07.37" },
  { series: "olympics", year: 1988, city: "汉城", champion: "Janet Evans", country: "USA", time: "4:03.85", wr: true, note: "同届加冕 800 米自由泳、400 米混合泳" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "Tiffany Cohen", country: "USA", time: "4:07.10", note: "同届加冕 200/400 米双冠" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "Ines Diers", country: "GDR", time: "4:08.76" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "Petra Thümer", country: "GDR", time: "4:09.89", wr: true, note: "首次突破 4:10" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "Shane Gould", country: "AUS", time: "4:19.04", wr: true, note: "首次突破 4:20；当届三枚个人金牌" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "Debbie Meyer", country: "USA", time: "4:31.8", note: "单届包揽 200/400/800 米三金" },
  { series: "olympics", year: 1964, city: "东京", champion: "Virginia Duenkel", country: "USA", time: "4:43.3", note: "队友拉门诺夫斯基本年曾游出 4:39.5 的世界纪录" },
  { series: "olympics", year: 1960, city: "罗马", champion: "Christine Von Saltza", country: "USA", time: "4:50.6" },
  { series: "olympics", year: 1956, city: "墨尔本", champion: "Lorraine Crapp", country: "AUS", time: "4:54.6" },
  { series: "olympics", year: 1952, city: "赫尔辛基", champion: "Valerie Gyenge", country: "HUN", time: "5:12.1" },
  { series: "olympics", year: 1948, city: "伦敦", champion: "Ann Curtis", country: "USA", time: "5:17.8" },
  { series: "olympics", year: 1936, city: "柏林", champion: "Rie Mastenbroek", country: "NED", time: "5:26.4", wr: true, note: "当届独得三金" },
  { series: "olympics", year: 1932, city: "洛杉矶", champion: "Helene Madison", country: "USA", time: "5:28.5", wr: true, note: "当届独得三金" },
  { series: "olympics", year: 1928, city: "阿姆斯特丹", champion: "Martha Norelius", country: "USA", time: "5:42.8", wr: true, note: "卫冕，该项目首位双冠王" },
  { series: "olympics", year: 1924, city: "巴黎", champion: "Martha Norelius", country: "USA", time: "6:02.2", note: "女子 400 米自由泳首次进入奥运会" },

  // —— 世界锦标赛 ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "Summer McIntosh", country: "CAN", note: "以 6 月创造的 3:54.18 世界纪录保持者身份夺冠" },
  { series: "worlds", year: 2024, city: "多哈", champion: "Erika Fairweather", country: "NZL", note: "新西兰首位女子游泳世界冠军" },
  { series: "worlds", year: 2023, city: "福冈", champion: "Ariarne Titmus", country: "AUS", note: "卫冕" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "Katie Ledecky", country: "USA" },
  { series: "worlds", year: 2019, city: "光州", champion: "Ariarne Titmus", country: "AUS", note: "力压莱德基夺冠" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "Katie Ledecky", country: "USA", time: "3:58.34", note: "卫冕；李冰洁夺得银牌" },
  { series: "worlds", year: 2015, city: "喀山", champion: "Katie Ledecky", country: "USA", time: "3:59.13", note: "当届 200/400/800/1500 与接力五金" },
  { series: "worlds", year: 2013, city: "巴塞罗那", champion: "Camille Muffat", country: "FRA" },
  { series: "worlds", year: 2009, city: "罗马", champion: "Federica Pellegrini", country: "ITA", time: "3:59.15", wr: true, note: "女子首次游进 4 分钟" },
  { series: "worlds", year: 2007, city: "墨尔本", champion: "Laure Manaudou", country: "FRA" },
  { series: "worlds", year: 1991, city: "珀斯", champion: "Janet Evans", country: "USA" },
  { series: "worlds", year: 1978, city: "西柏林", champion: "Tracey Wickham", country: "AUS", time: "4:06.21", wr: true },
  { series: "worlds", year: 1973, city: "贝尔格莱德", champion: "Novella Calligaris", country: "ITA", note: "意大利首位女子游泳世界冠军" },
  // 1975/1982/1986/1994/1998/2001/2003/2005/2011 各届冠军未能核实，暂缺

  // —— 泛太平洋锦标赛（1985 年起） ——
  { series: "panpacific", year: 2026, city: "尔湾", champion: "Lani Pallister", country: "AUS", note: "力克莱德基夺金，当届200/400自双冠" },
  { series: "panpacific", year: 2018, city: "东京", champion: "Ariarne Titmus", country: "AUS", note: "首次在大赛决赛战胜莱德基" },
  { series: "panpacific", year: 2014, city: "黄金海岸", champion: "Katie Ledecky", country: "USA", time: "3:58.37", wr: true },
  { series: "panpacific", year: 1989, city: "东京", champion: "Janet Evans", country: "USA" },
  { series: "panpacific", year: 1987, city: "布里斯班", champion: "Janet Evans", country: "USA", wr: true, note: "该届游出 4:05.45，打破威克姆保持九年的世界纪录" },
  // 1985/1991/1993/1995/1997/1999/2002/2006/2010 各届冠军未能核实，暂缺

  // —— 欧洲锦标赛（长池；仅收 2006 与 2026 两届，其余待核） ——
  { series: "euros", year: 2026, city: "巴黎", champion: "Simona Quadarella", country: "ITA", time: "4:01.34", note: "第三次包揽欧锦赛400/800/1500自三金" },
  { series: "euros", year: 2006, city: "布达佩斯", champion: "Laure Manaudou", country: "FRA", time: "4:03.03", wr: true, note: "终结埃文斯纪录近 18 年的统治" },
  // 2008 年埃因霍温欧锦赛佩莱格里尼曾在预赛以 4:01.53 破世界纪录，该届决赛冠军未能核实，暂缺

  // —— 亚运会（2014 仁川起四届已核） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Li Bingjie", country: "CHN", time: "4:02.71", note: "卫冕；该项目亚洲纪录4:01.08仍由她保持" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "Li Bingjie", country: "CHN", time: "4:01.96", note: "赛会纪录；赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Wang Jianjiahe", country: "CHN", note: "与李冰洁包揽冠亚军" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "Zhang Yuhan", country: "CHN", time: "4:07.67", note: "中国游泳队当届首金" },
];
