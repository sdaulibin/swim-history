import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 400 米个人混合泳 · 历届大赛冠军
 * 奥运会数据来源：Wikipedia 各届赛事页、Olympedia、Britannica
 * 世锦赛数据来源：Swimming World / SwimSwam / Olympics.com / British Swimming
 * 泛太平洋数据来源：SwimSwam、CBC、World Aquatics 官方视频
 * 欧锦赛数据来源：Swim Ireland、Independent.ie、BBC
 * 亚运会数据来源：新华社、搜狐、Al Jazeera、SwimSwam
 *
 * 待核实缺口（宁缺毋滥）：
 * - 早期奥运会部分届次（1964/1968/1972/1976/1984/1992/1996/2004）冠军经单一汇总表
 *   核实，成绩未能双源确认，暂不附时间；2020 东京大桥悠依、2024 巴黎麦金托什的
 *   夺冠精确成绩仅获单一来源，暂不附时间。
 * - 世锦赛 1973-2007 各届、2023 福冈届（麦金托什夺冠成绩）待核。
 * - 泛太平洋 1985-2014 各届（含 2010/2014 拜泽尔之说）、欧锦赛 2018-2024 各届、
 *   亚运会 2014/2018/2022 三届（叶诗文/大桥悠依等之说）未能完成双源核实
 *   （检索配额耗尽），暂缺，待补。
 */
export const womens400mMedleyChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Summer McIntosh", country: "CAN", note: "同届包揽200/400混双金" },
  { series: "olympics", year: 2020, city: "东京", champion: "Yui Ohashi", country: "JPN", note: "同届包揽200/400混双金，赛事于2021年举行" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Katinka Hosszú", country: "HUN", time: "4:26.36", wr: true },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Ye Shiwen", country: "CHN", time: "4:28.43", wr: true, note: "16岁，领先近3秒" },
  { series: "olympics", year: 2008, city: "北京", champion: "Stephanie Rice", country: "AUS", time: "4:29.45", wr: true },
  { series: "olympics", year: 2004, city: "雅典", champion: "Yana Klochkova", country: "UKR", note: "卫冕" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "Yana Klochkova", country: "UKR", time: "4:33.59", wr: true },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "Michelle Smith", country: "IRL", note: "同届包揽200/400混双金" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "Krisztina Egerszegi", country: "HUN", note: "决赛力克林莉" },
  { series: "olympics", year: 1988, city: "汉城", champion: "Janet Evans", country: "USA", time: "4:37.76", note: "同届另获400自、800自两金；银牌为罗马尼亚隆格" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "Tracy Caulkins", country: "USA" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "Petra Schneider", country: "GDR", time: "4:36.29", wr: true, note: "戴维斯获银，后长期申诉东德兴奋剂问题" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "Ulrike Tauber", country: "GDR" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "Gail Neall", country: "AUS" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "Claudia Kolb", country: "USA" },
  { series: "olympics", year: 1964, city: "东京", champion: "Donna de Varona", country: "USA", note: "项目奥运首金" },

  // —— 世界锦标赛（2009 起已核；1973-2007、2023 待核） ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "Summer McIntosh", country: "CAN", time: "4:25.78", note: "赛会纪录；日本的Mio Narita获银" },
  { series: "worlds", year: 2024, city: "多哈", champion: "Freya Colbert", country: "GBR", time: "4:37.14", note: "最后25米反超，戈尔本科获银" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "Summer McIntosh", country: "CAN", time: "4:32.04", note: "15岁" },
  { series: "worlds", year: 2019, city: "光州", champion: "Katinka Hosszú", country: "HUN", note: "史上首位在同一项目五夺世锦赛冠军的女选手" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "Katinka Hosszú", country: "HUN", time: "4:29.33", note: "主场作战" },
  { series: "worlds", year: 2015, city: "喀山", champion: "Katinka Hosszú", country: "HUN", time: "4:30.39", note: "迪拉多获银" },
  { series: "worlds", year: 2013, city: "巴塞罗那", champion: "Katinka Hosszú", country: "HUN" },
  { series: "worlds", year: 2011, city: "上海", champion: "Elizabeth Beisel", country: "USA", time: "4:31.78" },
  { series: "worlds", year: 2009, city: "罗马", champion: "Katinka Hosszú", country: "HUN", note: "力克拜泽尔与卫冕的莱斯（莱斯以4:32.29获铜）" },

  // —— 泛太平洋锦标赛（2018、2026 已核；2014 及更早待核） ——
  { series: "panpacific", year: 2026, city: "尔湾", champion: "Summer McIntosh", country: "CAN", time: "4:28.01", note: "赛会纪录，领游全程，领先3秒以上" },
  { series: "panpacific", year: 2018, city: "东京", champion: "Yui Ohashi", country: "JPN", time: "4:33.77", note: "主场夺冠，当时当年世界最好成绩；同届亦夺200混金" },

  // —— 欧洲锦标赛（2026 已核；2018-2024 待核） ——
  { series: "euros", year: 2026, city: "巴黎", champion: "Ellen Walshe", country: "IRL", time: "4:34.42", note: "爱尔兰纪录，同届包揽200/400混双金" },

  // —— 亚运会（2006 多哈起六届已核） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Yu Zidi", country: "CHN", time: "4:28.56", note: "赛会纪录，13岁，本届个人第三金；队友柯雯曦获银" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "Yu Yiting", country: "CHN", time: "4:35.44", note: "包揽当届女子200/400混双金；赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Yui Ohashi", country: "JPN", time: "4:34.58", note: "金瑟永4:37.43获银，清水咲子获铜" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "Ye Shiwen", country: "CHN", time: "4:32.97" },
  { series: "asiangames", year: 2010, city: "广州", champion: "Ye Shiwen", country: "CHN", time: "4:33.79", note: "14岁，李玄旭获银" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "Qi Hui", country: "CHN", time: "4:38.31", note: "于锐获银" },
];
