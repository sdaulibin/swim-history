import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 200 米蝶泳 · 历届大赛冠军
 * 奥运会：1968–2024 全部 15 届已核（维基百科各届决赛页 / Olympedia / Olympics.com 等）。
 * 世锦赛：仅收经核实的届次；以下届次冠军待核后补入：
 *   1975、1978、1982、1986、1991、1994、1998、2001、2007。
 *   （注：检索摘要曾给出 1991 年" Hungqing Li "、2003 年克洛奇科娃等明显污染条目，
 *   按「综述常编造」纪律一律未采；2007 年施佩尔/耶德热扎茨卡归属存在矛盾，未写。）
 * 泛太平洋：2006（施佩尔 2:05.40，世界纪录）、2026（卡斯泰卢佐 2:06.24）已核；其余届次待核。
 * 欧锦赛：仅 2026 巴黎（沃尔什 IRL）已核；2022 罗马、2024 贝尔格莱德两届冠军待核（检索配额耗尽）。
 * 亚运会：仅 2026 名古屋（于子迪 2:05.08，赛会纪录）已核；2014 仁川、2018 雅加达、
 *   2022 杭州三届冠军待核（检索配额耗尽）。
 * 另：诺德（1988）、贝尔蒙特（2016）的夺冠成绩未核实到精确值，暂不写成绩。
 */
export const womens200mButterflyChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Summer McIntosh", country: "CAN", time: "2:03.03", or: true, note: "史密斯2:03.84获银（美国纪录），张雨霏获铜" },
  { series: "olympics", year: 2020, city: "东京", champion: "Zhang Yufei", country: "CHN", time: "2:03.86", or: true },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Mireia Belmonte", country: "ESP", note: "格罗夫斯获银，星奈津美获铜" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Jiao Liuyang", country: "CHN", time: "2:04.40", or: true },
  { series: "olympics", year: 2008, city: "北京", champion: "Liu Zige", country: "CHN", time: "2:04.18", wr: true, note: "焦刘洋获银，中国泳军在北京的唯一游泳金牌" },
  { series: "olympics", year: 2004, city: "雅典", champion: "Otylia Jędrzejczak", country: "POL", note: "托马斯获银，德布鲁因获铜" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "Misty Hyman", country: "USA", time: "2:05.88", or: true, note: "爆冷终结奥尼尔六年不败" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "Susie O'Neill", country: "AUS", time: "2:07.76" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "Summer Sanders", country: "USA", time: "2:08.67", or: true },
  { series: "olympics", year: 1988, city: "汉城", champion: "Kathleen Nord", country: "GDR", note: "米格获铜，为其奥运绝唱" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "Mary T. Meagher", country: "USA", note: "当届100蝶/200蝶/混合泳接力三金" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "Ines Geissler", country: "GDR", time: "2:08.09" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "Andrea Pollack", country: "GDR", time: "2:09.87", wr: true },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "Karen Moe", country: "USA", time: "2:15.57", wr: true, note: "美国包揽领奖台" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "Ada Kok", country: "NED", time: "2:24.7", or: true, note: "项目奥运首设" },

  // —— 世界锦标赛（已核实行） ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "Summer McIntosh", country: "CAN", time: "2:01.99", note: "当届第三金，仅差世界纪录0.18秒" },
  { series: "worlds", year: 2024, city: "多哈", champion: "Laura Stephens", country: "GBR", time: "2:07.35", note: "0.09秒险胜丹麦的巴赫" },
  { series: "worlds", year: 2023, city: "福冈", champion: "Summer McIntosh", country: "CAN", time: "2:04.06", note: "世界青年纪录" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "Summer McIntosh", country: "CAN", time: "2:05.20", note: "15岁，世界青年纪录" },
  { series: "worlds", year: 2019, city: "光州", champion: "Boglárka Kapás", country: "HUN", time: "2:06.78" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "Mireia Belmonte", country: "ESP", time: "2:05.26", note: "西班牙在该项目首枚世锦赛金牌" },
  { series: "worlds", year: 2015, city: "喀山", champion: "Natsumi Hoshi", country: "JPN" },
  { series: "worlds", year: 2013, city: "巴塞罗那", champion: "Liu Zige", country: "CHN" },
  { series: "worlds", year: 2011, city: "上海", champion: "Jiao Liuyang", country: "CHN", time: "2:05.55", note: "领跑战胜世界纪录保持者刘子歌" },
  { series: "worlds", year: 2009, city: "罗马", champion: "Jessicah Schipper", country: "AUS", time: "2:03.41", wr: true, note: "刘子歌2:03.90获银，焦刘洋获铜" },
  { series: "worlds", year: 2005, city: "蒙特利尔", champion: "Otylia Jędrzejczak", country: "POL", time: "2:05.61", wr: true },
  { series: "worlds", year: 2003, city: "巴塞罗那", champion: "Otylia Jędrzejczak", country: "POL" },
  { series: "worlds", year: 1973, city: "贝尔格莱德", champion: "Rosemarie Kother", country: "GDR" },

  // —— 泛太平洋锦标赛（2006/2026 已核，其余届次待核） ——
  { series: "panpacific", year: 2026, city: "尔湾", champion: "Brittany Castelluzzo", country: "AUS", time: "2:06.24", note: "澳大利亚包揽金银（德克斯2:06.56）" },
  { series: "panpacific", year: 2006, city: "维多利亚", champion: "Jessicah Schipper", country: "AUS", time: "2:05.40", wr: true },

  // —— 欧洲锦标赛（长池） ——
  { series: "euros", year: 2026, city: "巴黎", champion: "Ellen Walshe", country: "IRL", note: "当届个人第二金" },

  // —— 亚运会 ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Yu Zidi", country: "CHN", time: "2:05.08", note: "13岁，赛会纪录" },
];
