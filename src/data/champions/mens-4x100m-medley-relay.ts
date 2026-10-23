import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 4×100 米混合泳接力 · 历届大赛冠军
 * champion 字段按站点接力项目惯例使用国家英文名。
 * 数据来源：Wikipedia 各届世锦赛/奥运会/亚运总览页成绩表逐行核对
 * 说明（宁缺毋滥）：
 *  - 奥运会：1960 罗马起设项，17 届全部收录；
 *  - 世锦赛：1973 贝尔格莱德起设项，22 届全部收录；
 *  - 泛太平洋 / 欧洲锦标赛：暂未收录；
 *  - 亚运会：2006 多哈起六届全部收录。
 * 勘误：旧版把 2025 新加坡世锦赛冠军记为中国队并附「潘展乐45.92」，
 * 实为中立运动员B队（俄罗斯）3:26.93 夺金；45.92 是潘展乐 2024 巴黎的末棒。
 */
export const mens4x100mMedleyRelayChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "China", country: "CHN", time: "3:27.46", note: "徐嘉余·覃海洋·孙佳俊·潘展乐；终结美国队40年奥运垄断，潘展乐末棒45.92" },
  { series: "olympics", year: 2020, city: "东京", champion: "United States", country: "USA", time: "3:26.78", wr: true, note: "现世界纪录；中国队因蝶泳棒次抢跳被取消成绩" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "United States", country: "USA", time: "3:27.95", or: true, note: "奥运纪录（非世界纪录）；菲尔普斯奥运谢幕战" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "United States", country: "USA", time: "3:29.35", note: "距世界纪录3:27.28仅2.07秒" },
  { series: "olympics", year: 2008, city: "北京", champion: "United States", country: "USA", time: "3:29.34", wr: true, note: "破世界纪录；菲尔普斯八金之夜的第8金" },
  { series: "olympics", year: 2004, city: "雅典", champion: "United States", country: "USA", time: "3:30.68", wr: true, note: "破世界纪录" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "United States", country: "USA", time: "3:33.73", wr: true, note: "破世界纪录" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "United States", country: "USA", time: "3:34.84", wr: true, note: "破世界纪录" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "United States", country: "USA", time: "3:36.93", note: "平1988汉城世界纪录" },
  { series: "olympics", year: 1988, city: "汉城", champion: "United States", country: "USA", time: "3:36.93", wr: true, note: "破世界纪录；伯科夫仰泳棒54.56" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "United States", country: "USA", time: "3:39.30", wr: true, note: "破世界纪录" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "Australia", country: "AUS", time: "3:45.70", note: "美国等西方国家抵制，澳大利亚夺冠" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "United States", country: "USA", time: "3:42.22", wr: true, note: "破世界纪录；当届一日两破" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "United States", country: "USA", time: "3:48.16", wr: true, note: "破世界纪录；施皮茨当届第七金" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "United States", country: "USA", time: "3:54.9", wr: true, note: "破世界纪录" },
  { series: "olympics", year: 1964, city: "东京", champion: "United States", country: "USA", time: "3:58.4", wr: true, note: "破世界纪录；汤普森·曼仰泳棒59.6" },
  { series: "olympics", year: 1960, city: "罗马", champion: "United States", country: "USA", time: "4:05.4", wr: true, note: "设项首金兼破世界纪录" },

  // —— 世界锦标赛 ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "Neutral Athletes B", country: "RUS", time: "3:26.93", note: "中立运动员B队（利芬采夫·普里戈达·米纳科夫·科尔涅夫）；世锦赛与欧洲纪录" },
  { series: "worlds", year: 2024, city: "多哈", champion: "United States", country: "USA", time: "3:29.30" },
  { series: "worlds", year: 2023, city: "福冈", champion: "United States", country: "USA", time: "3:27.20", note: "世锦赛纪录；中国队3:29.00银并创当时亚洲纪录" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "Italy", country: "ITA", time: "3:27.51", note: "切孔领衔；平欧洲纪录" },
  { series: "worlds", year: 2019, city: "光州", champion: "Great Britain", country: "GBR", time: "3:28.10", note: "欧洲纪录；皮蒂的蛙泳棒次奠定胜局" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "United States", country: "USA", time: "3:27.91" },
  { series: "worlds", year: 2015, city: "喀山", champion: "United States", country: "USA", time: "3:29.93" },
  { series: "worlds", year: 2013, city: "巴塞罗那", champion: "France", country: "FRA", time: "3:31.51", note: "拉库尔·佩雷斯·斯特拉维乌斯·吉洛" },
  { series: "worlds", year: 2011, city: "上海", champion: "United States", country: "USA", time: "3:32.06" },
  { series: "worlds", year: 2009, city: "罗马", champion: "United States", country: "USA", time: "3:27.28", wr: true, note: "快速泳衣时代最后一破，保持十二年" },
  { series: "worlds", year: 2007, city: "墨尔本", champion: "Australia", country: "AUS", time: "3:34.93", note: "威尔士·理查德·劳特斯坦·沙利文" },
  { series: "worlds", year: 2005, city: "蒙特利尔", champion: "United States", country: "USA", time: "3:31.85" },
  { series: "worlds", year: 2003, city: "巴塞罗那", champion: "United States", country: "USA", time: "3:31.54", wr: true, note: "破世界纪录；菲尔普斯首次登上该项目世锦赛之巅" },
  { series: "worlds", year: 2001, city: "福冈", champion: "Australia", country: "AUS", time: "3:35.35", note: "威尔士·哈里森·许吉尔·克里姆" },
  { series: "worlds", year: 1998, city: "珀斯", champion: "Australia", country: "AUS", time: "3:37.98", note: "大洋洲纪录" },
  { series: "worlds", year: 1994, city: "罗马", champion: "United States", country: "USA", time: "3:37.74", note: "破赛会纪录" },
  { series: "worlds", year: 1991, city: "珀斯", champion: "United States", country: "USA", time: "3:39.66", note: "破赛会纪录" },
  { series: "worlds", year: 1986, city: "马德里", champion: "United States", country: "USA", time: "3:41.25" },
  { series: "worlds", year: 1982, city: "瓜亚基尔", champion: "United States", country: "USA", time: "3:40.84", wr: true, note: "破世界纪录" },
  { series: "worlds", year: 1978, city: "西柏林", champion: "United States", country: "USA", time: "3:44.63", note: "破赛会纪录" },
  { series: "worlds", year: 1975, city: "卡利", champion: "United States", country: "USA", time: "3:49.00", note: "破赛会纪录" },
  { series: "worlds", year: 1973, city: "贝尔格莱德", champion: "United States", country: "USA", time: "3:49.49", note: "设项首金" },

  // —— 亚运会 ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "China", country: "CHN", time: "3:27.89", note: "亚运四连冠" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "China", country: "CHN", time: "3:27.01", note: "破亚洲纪录；赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "China", country: "CHN", time: "3:29.99", note: "破赛会纪录" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "China", country: "CHN", time: "3:31.37", note: "破赛会纪录；徐嘉余·李响·李朱濠·宁泽涛末棒逆转日本" },
  { series: "asiangames", year: 2010, city: "广州", champion: "Japan", country: "JPN", time: "3:34.10", note: "中国队率先到边（3:34.01）但因抢跳被取消成绩，日本递补夺冠" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "Japan", country: "JPN", time: "3:36.52", note: "中国队获银牌" },
];
