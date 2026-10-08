import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 200 米个人混合泳 · 历届大赛冠军
 * 奥运会数据来源：Wikipedia "List of Olympic medalists in swimming (women)" 及各届赛事页
 * 世锦赛数据来源：Olympics.com / SwimSwam / Swimming World 各届报道
 * 泛太平洋数据来源：Olympics.com 2026、SwimSwam Records Roundup、World Aquatics 官方视频
 * 欧锦赛数据来源：Swim Ireland / BBC / Wikipedia（Ellen Walshe 词条）
 * 亚运会数据来源：新华社、Al Jazeera、SwimSwam
 *
 * 待核实缺口（宁缺毋滥）：
 * - 1980 年莫斯科奥运会未设女子 200 混（1968 年设立、1984 年回归），故无该届。
 * - 早期奥运会部分届次（1968/1972/1976/1988/2000/2004）冠军经单一汇总表核实，
 *   成绩未能双源确认，暂不附时间。
 * - 2016 里约霍苏、2020 东京大桥悠依的夺冠成绩仅获单一来源，暂不附时间。
 * - 世锦赛 1973-2009 各届（含 2009 年库科尔斯是否夺冠）待核。
 * - 泛太平洋 1985-2014 各届、欧锦赛 2018-2024 各届、亚运会 2014/2018/2022 三届
 *   未能完成双源核实（检索配额耗尽），暂缺，待补。
 */
export const womens200mMedleyChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Summer McIntosh", country: "CAN", time: "2:06.56", or: true, note: "道格拉斯、麦基翁分获银铜" },
  { series: "olympics", year: 2020, city: "东京", champion: "Yui Ohashi", country: "JPN", note: "同届包揽200/400混双金，赛事于2021年举行" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Katinka Hosszú", country: "HUN" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Ye Shiwen", country: "CHN", time: "2:07.57", or: true, note: "打破自己在半决赛创下的奥运纪录" },
  { series: "olympics", year: 2008, city: "北京", champion: "Stephanie Rice", country: "AUS", time: "2:08.45", wr: true, note: "打破吴艳艳保持11年的世界纪录" },
  { series: "olympics", year: 2004, city: "雅典", champion: "Yana Klochkova", country: "UKR", note: "卫冕" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "Yana Klochkova", country: "UKR" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "Michelle Smith", country: "IRL", time: "2:13.93" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "Lin Li", country: "CHN", time: "2:11.65", wr: true },
  { series: "olympics", year: 1988, city: "汉城", champion: "Daniela Hunger", country: "GDR" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "Tracy Caulkins", country: "USA", time: "2:12.64", or: true },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "Kornelia Ender", country: "GDR" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "Shane Gould", country: "AUS" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "Claudia Kolb", country: "USA" },

  // —— 世界锦标赛（2011 起已核；1973-2009 待核） ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "Summer McIntosh", country: "CAN", time: "2:06.69" },
  { series: "worlds", year: 2024, city: "多哈", champion: "Kate Douglass", country: "USA", time: "2:07.05", note: "卫冕" },
  { series: "worlds", year: 2023, city: "福冈", champion: "Kate Douglass", country: "USA", time: "2:06.79", note: "决赛力克卫冕冠军A.沃尔什" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "Alex Walsh", country: "USA", time: "2:07.13", note: "成绩为单一来源，待复核" },
  { series: "worlds", year: 2019, city: "光州", champion: "Katinka Hosszú", country: "HUN", note: "世锦赛四连冠之四" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "Katinka Hosszú", country: "HUN", note: "三连冠；夺冠成绩为单一来源，暂不附" },
  { series: "worlds", year: 2015, city: "喀山", champion: "Katinka Hosszú", country: "HUN", time: "2:06.12", wr: true },
  { series: "worlds", year: 2013, city: "巴塞罗那", champion: "Katinka Hosszú", country: "HUN", note: "四连冠之一" },
  { series: "worlds", year: 2011, city: "上海", champion: "Ye Shiwen", country: "CHN", time: "2:08.90", note: "15岁，力克库特斯与库科尔斯" },

  // —— 泛太平洋锦标赛（2018、2026 已核；2022 未办，其余届次待核） ——
  // 中国为泛太特邀参赛国。
  { series: "panpacific", year: 2026, city: "尔湾", champion: "Yu Yiting", country: "CHN", time: "2:07.45", note: "赛会纪录，力克麦金托什；A.沃尔什第三" },
  { series: "panpacific", year: 2018, city: "东京", champion: "Yui Ohashi", country: "JPN", time: "2:08.16", note: "主场夺冠，创赛会纪录" },

  // —— 欧洲锦标赛（2026 已核；2018-2024 待核） ——
  { series: "euros", year: 2026, city: "巴黎", champion: "Ellen Walshe", country: "IRL", note: "同届包揽200/400混双金" },

  // —— 亚运会（2006 多哈起六届；2018 届成绩未能核实） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Yu Zidi", country: "CHN", time: "2:06.10", note: "亚洲纪录、赛会纪录与世界青年纪录，历史第二快；余依婷获银" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "Yu Yiting", country: "CHN", time: "2:07.75", note: "赛会纪录；赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Ye Shiwen", country: "CHN", note: "夺冠成绩未能核实" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "Ye Shiwen", country: "CHN", note: "夺冠成绩未能核实" },
  { series: "asiangames", year: 2010, city: "广州", champion: "Ye Shiwen", country: "CHN", time: "2:09.37", note: "14岁爆冷夺金，成绩列当年世界第一" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "Qi Hui", country: "CHN", time: "2:11.92", note: "当届包揽200/400混双金" },
];
