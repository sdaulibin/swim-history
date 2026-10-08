import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 100 米蝶泳 · 历届大赛冠军
 * 奥运会数据来源：Wikipedia 各届赛事页 / Olympedia 奖牌名单（1968/1980/1984 冠军成绩待核，1968 成绩两说 55.9/56.7 故不写）
 * 世锦赛数据来源：Wikipedia 各届赛事页、World Aquatics 视频、SwimSwam、ISHOF 选手页
 * 泛太平洋数据来源：Wikipedia 各届赛事页"Men's events"表格直读（1985/1987/1997/2002 等）、
 *   SwimSwam（2014/2018）；1989/1993/1995 届为综述单源待复核
 * 欧锦赛数据来源：SwimSwam 2026 欧锦赛报道（"米拉克欧锦赛四连冠、2021 年 50.18 赛会纪录"）；
 *   2016/2018 两届未能核实，暂缺
 * 亚运会数据来源：新华网（2026 名古屋）、维基百科亚运纪录表；2014 仁川、2022 杭州两届未能核实，暂缺
 * 2026 泛太平洋（尔湾）与 2026 亚运（名古屋，游泳赛部分在东京水上运动中心举行）均已核实收录。
 */
export const mens100mButterflyChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Kristóf Milák", country: "HUN", time: "49.90", note: "力压加拿大连多（49.99）首夺该项目奥运金牌" },
  { series: "olympics", year: 2020, city: "东京", champion: "Caeleb Dressel", country: "USA", time: "49.45", wr: true, or: true },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Joseph Schooling", country: "SGP", time: "50.39", or: true, note: "新加坡首金，击败菲尔普斯" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Michael Phelps", country: "USA", time: "51.21", or: true, note: "奥运三连冠" },
  { series: "olympics", year: 2008, city: "北京", champion: "Michael Phelps", country: "USA", time: "50.58", or: true, note: "百分之一秒险胜查维奇" },
  { series: "olympics", year: 2004, city: "雅典", champion: "Michael Phelps", country: "USA" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "Lars Frölander", country: "SWE", time: "52.00" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "Denis Pankratov", country: "RUS", time: "52.27", wr: true },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "Pablo Morales", country: "USA", time: "53.32" },
  { series: "olympics", year: 1988, city: "汉城", champion: "Anthony Nesty", country: "SUR", time: "53.00", note: "苏里南首金，0.01秒险胜比昂迪" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "Michael Gross", country: "FRG", time: "53.08", wr: true },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "Pär Arvidsson", country: "SWE" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "Matt Vogel", country: "USA", time: "54.35" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "Mark Spitz", country: "USA", time: "54.27", wr: true },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "Doug Russell", country: "USA", note: "决赛击败施皮茨" },

  // —— 世界锦标赛 ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "Maxime Grousset", country: "FRA", time: "49.62", note: "决赛胜蓬蒂（49.83）与卡伦（50.07）" },
  { series: "worlds", year: 2024, city: "多哈", champion: "Diogo Ribeiro", country: "POR", time: "51.17", note: "多数高手缺席奥运前世锦赛，单源待复核" },
  { series: "worlds", year: 2023, city: "福冈", champion: "Maxime Grousset", country: "FRA", time: "50.14", note: "卫冕冠军米拉克缺席" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "Kristóf Milák", country: "HUN", time: "50.14", note: "主场作战，同届另夺50/200蝶金牌" },
  { series: "worlds", year: 2019, city: "光州", champion: "Caeleb Dressel", country: "USA", time: "49.66", note: "半决赛49.50更已打破世界纪录" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "Caeleb Dressel", country: "USA", time: "49.86" },
  { series: "worlds", year: 2015, city: "喀山", champion: "Chad le Clos", country: "RSA", time: "50.56" },
  { series: "worlds", year: 2013, city: "巴塞罗那", champion: "Chad le Clos", country: "RSA", time: "51.06", note: "同届包揽100/200蝶金牌" },
  { series: "worlds", year: 2011, city: "上海", champion: "Michael Phelps", country: "USA", time: "50.71" },
  { series: "worlds", year: 2009, city: "罗马", champion: "Michael Phelps", country: "USA", time: "49.82", wr: true },
  { series: "worlds", year: 2007, city: "墨尔本", champion: "Michael Phelps", country: "USA", time: "50.77", note: "0.05秒险胜世界纪录保持者克罗克" },
  { series: "worlds", year: 2005, city: "蒙特利尔", champion: "Ian Crocker", country: "USA", time: "50.40", wr: true },
  { series: "worlds", year: 2003, city: "巴塞罗那", champion: "Ian Crocker", country: "USA", time: "50.98", wr: true },
  { series: "worlds", year: 2001, city: "福冈", champion: "Geoff Huegill", country: "AUS", time: "52.10" },
  { series: "worlds", year: 1998, city: "珀斯", champion: "Michael Klim", country: "AUS", time: "52.25" },
  { series: "worlds", year: 1994, city: "罗马", champion: "Rafał Szukała", country: "POL", time: "53.51", note: "潘克拉托夫获铜" },
  { series: "worlds", year: 1991, city: "珀斯", champion: "Anthony Nesty", country: "SUR", time: "53.29" },
  { series: "worlds", year: 1986, city: "马德里", champion: "Pablo Morales", country: "USA" },
  { series: "worlds", year: 1982, city: "瓜亚基尔", champion: "Matt Gribble", country: "USA" },
  { series: "worlds", year: 1978, city: "西柏林", champion: "Joe Bottom", country: "USA" },
  { series: "worlds", year: 1975, city: "卡利", champion: "Greg Jagenburg", country: "USA", time: "55.63" },
  { series: "worlds", year: 1973, city: "贝尔格莱德", champion: "Bruce Robertson", country: "CAN", time: "55.69" },

  // —— 泛太平洋锦标赛（1985 年起） ——
  { series: "panpacific", year: 2026, city: "尔湾", champion: "Matthew Temple", country: "AUS", time: "50.39", note: "赛会纪录，破德雷塞尔50.75；澳大利亚包揽冠亚军" },
  { series: "panpacific", year: 2018, city: "东京", champion: "Caeleb Dressel", country: "USA", time: "50.75", note: "赛会纪录，破菲尔普斯所保持纪录" },
  { series: "panpacific", year: 2014, city: "黄金海岸", champion: "Michael Phelps", country: "USA", time: "51.29", note: "复出后首个国际个人冠军" },
  { series: "panpacific", year: 2010, city: "尔湾", champion: "Michael Phelps", country: "USA" },
  { series: "panpacific", year: 2006, city: "维多利亚", champion: "Ian Crocker", country: "USA", note: "卫冕成功" },
  { series: "panpacific", year: 2002, city: "横滨", champion: "Ian Crocker", country: "USA", time: "52.45" },
  { series: "panpacific", year: 1999, city: "悉尼", champion: "Neil Walker", country: "USA", note: "继1997年后卫冕" },
  { series: "panpacific", year: 1997, city: "福冈", champion: "Neil Walker", country: "USA", time: "52.76", note: "赛会纪录" },
  { series: "panpacific", year: 1995, city: "亚特兰大", champion: "Scott Miller", country: "AUS", time: "53.07" },
  { series: "panpacific", year: 1993, city: "神户", champion: "Mark Henderson", country: "USA" },
  { series: "panpacific", year: 1991, city: "埃德蒙顿", champion: "Matt Biondi", country: "USA" },
  { series: "panpacific", year: 1989, city: "东京", champion: "Anthony Nesty", country: "SUR", time: "53.80", note: "单源待复核" },
  { series: "panpacific", year: 1987, city: "布里斯班", champion: "Pablo Morales", country: "USA", time: "53.37" },
  { series: "panpacific", year: 1985, city: "东京", champion: "Pablo Morales", country: "USA", time: "53.69", note: "首届泛太锦标赛" },

  // —— 欧洲锦标赛（长池；2021 起四届已核，米拉克四连冠） ——
  { series: "euros", year: 2026, city: "巴黎", champion: "Kristóf Milák", country: "HUN", time: "49.48", note: "欧洲纪录，距世界纪录0.03秒；欧锦赛四连冠" },
  { series: "euros", year: 2024, city: "贝尔格莱德", champion: "Kristóf Milák", country: "HUN" },
  { series: "euros", year: 2022, city: "罗马", champion: "Kristóf Milák", country: "HUN" },
  { series: "euros", year: 2021, city: "布达佩斯", champion: "Kristóf Milák", country: "HUN", time: "50.18", note: "赛会纪录；赛事因疫情于2021年举行" },

  // —— 亚运会 ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Mitsunaga Shoon", country: "JPN", time: "50.56", note: "亚运会纪录；决赛于东京水上运动中心举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Joseph Schooling", country: "SGP", time: "51.04", note: "单源待复核" },
];
