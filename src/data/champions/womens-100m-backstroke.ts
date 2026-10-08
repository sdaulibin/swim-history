import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 100 米仰泳 · 历届大赛冠军
 * 奥运会：1968-2024 十五届全部经双源核实（Wikipedia 奖牌榜、World Aquatics、ESPN 年鉴、CBC、Indian Express 等）。
 * 世锦赛：2007-2025 十一届经核实；2005 年及更早届次待核，暂缺。
 * 泛太平洋：历届（含 2026 尔湾复办届）冠军未能核实——检索配额受限，仅确认
 *   麦基翁 2018 年东京泛太以 59.25 完成国际赛首秀（世界泳联特稿），未获金牌。
 * 欧洲锦标赛：未收录（未能核实；2026 巴黎欧锦的"Kos 1:52"线索为男子 200 仰，不属本项）。
 * 亚运会：2022 杭州（2023 年举行）与 2026 名古屋两届已核；2014 仁川、2018 雅加达待核，暂缺。
 */
export const womens100mBackstrokeChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Kaylee McKeown", country: "AUS", time: "57.33", or: true, note: "卫冕；史密斯获银" },
  { series: "olympics", year: 2020, city: "东京", champion: "Kaylee McKeown", country: "AUS", time: "57.47", or: true, note: "赛前一个多月她在澳选拔赛以57.45首破世界纪录" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Katinka Hosszú", country: "HUN", time: "58.45" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Missy Franklin", country: "USA", time: "58.33", or: true },
  { series: "olympics", year: 2008, city: "北京", champion: "Natalie Coughlin", country: "USA", time: "58.96", note: "科文垂半决赛58.77为当时世界纪录，决赛获银" },
  { series: "olympics", year: 2004, city: "雅典", champion: "Natalie Coughlin", country: "USA", note: "预赛1:00.85破奥运纪录" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "Diana Mocanu", country: "ROM", time: "1:00.21", or: true, note: "罗马尼亚首枚奥运游泳金牌" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "Beth Botsford", country: "USA", time: "1:01.19" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "Krisztina Egerszegi", country: "HUN", time: "1:00.68" },
  { series: "olympics", year: 1988, city: "汉城", champion: "Kristin Otto", country: "GDR", time: "1:00.89", note: "埃盖尔塞吉获银" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "Theresa Andrews", country: "USA", time: "1:02.55" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "Rica Reinisch", country: "GDR", time: "1:00.86" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "Ulrike Richter", country: "GDR", time: "1:01.83" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "Melissa Belote", country: "USA", time: "1:05.78" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "Kaye Hall", country: "USA", time: "1:06.2" },

  // —— 世界锦标赛（已核实行） ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "Kaylee McKeown", country: "AUS", time: "57.16", note: "个人最好成绩；史密斯、伯科夫分获银铜" },
  { series: "worlds", year: 2024, city: "多哈", champion: "Claire Curzan", country: "USA", time: "58.29", note: "同届包揽50/100/200仰三项冠军" },
  { series: "worlds", year: 2023, city: "福冈", champion: "Kaylee McKeown", country: "AUS", time: "57.53", note: "赛会纪录；同届完成仰泳三冠王" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "Regan Smith", country: "USA", time: "58.22", note: "马斯58.40获银" },
  { series: "worlds", year: 2019, city: "光州", champion: "Kylie Masse", country: "CAN", time: "58.60", note: "卫冕；史密斯在赛后次日的混合泳接力第一棒游出57.57破世界纪录" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "Kylie Masse", country: "CAN", time: "58.10", wr: true },
  { series: "worlds", year: 2015, city: "喀山", champion: "Emily Seebohm", country: "AUS" },
  { series: "worlds", year: 2013, city: "巴塞罗那", champion: "Missy Franklin", country: "USA" },
  { series: "worlds", year: 2011, city: "上海", champion: "Anastasia Zuyeva", country: "RUS" },
  { series: "worlds", year: 2009, city: "罗马", champion: "Gemma Spofforth", country: "GBR", time: "58.12", wr: true },
  { series: "worlds", year: 2007, city: "墨尔本", champion: "Natalie Coughlin", country: "USA", time: "59.44", wr: true },

  // —— 泛太平洋锦标赛 ——
  // 历届冠军未能核实（含 2026 尔湾复办届），暂缺；2018 年东京泛太麦基翁以 59.25 完成国际赛首秀。

  // —— 欧洲锦标赛 ——
  // 未能核实，暂缺。

  // —— 亚运会（2006 多哈起六届已核） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Peng Xuwei", country: "CHN", time: "59.30", note: "决赛9月23日；日本白井璃绪59.89获银" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "Wan Letian", country: "CHN", time: "59.38", note: "赛事于2023年举行；汪雪儿获银" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Natsumi Sakai", country: "JPN", time: "59.27", note: "小西杏奈获银，陈洁摘铜，卫冕冠军傅园慧列第四" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "Fu Yuanhui", country: "CHN", time: "59.95" },
  { series: "asiangames", year: 2010, city: "广州", champion: "Zhao Jing", country: "CHN", time: "59.20", note: "当届包揽100/200仰双金" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "Reiko Nakamura", country: "JPN", time: "1:00.82", note: "当届包揽100/200仰双金，徐田龙子获银" },
];
