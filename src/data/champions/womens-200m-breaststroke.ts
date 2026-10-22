import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 200 米蛙泳 · 历届大赛冠军
 * 数据来源：Wikipedia 各届世锦赛/奥运会/亚运总览页成绩表逐行核对
 * 说明（宁缺毋滥）：
 *  - 奥运会：1924 起设项，本表从 1968 墨西哥城起收录 15 届（与站点电计时口径一致）；
 *  - 世锦赛：1973 贝尔格莱德起设项，22 届全部收录；
 *  - 泛太平洋锦标赛、欧锦赛暂未收录；
 *  - 亚运会：2006 多哈起六届全部收录。
 */
export const womens200mBreaststrokeChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Kate Douglass", country: "USA", time: "2:19.24", note: "美洲纪录" },
  { series: "olympics", year: 2020, city: "东京", champion: "Tatjana Schoenmaker", country: "RSA", time: "2:18.95", wr: true, note: "破世界纪录；赛事于2021年举行" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Rie Kaneto", country: "JPN", time: "2:20.30" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Rebecca Soni", country: "USA", time: "2:19.59", wr: true, note: "半决赛2:20.00、决赛2:19.59，一天两破世界纪录" },
  { series: "olympics", year: 2008, city: "北京", champion: "Rebecca Soni", country: "USA", time: "2:20.22", wr: true, note: "破世界纪录" },
  { series: "olympics", year: 2004, city: "雅典", champion: "Amanda Beard", country: "USA", time: "2:23.37", or: true },
  { series: "olympics", year: 2000, city: "悉尼", champion: "Ágnes Kovács", country: "HUN", time: "2:24.35" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "Penelope Heyns", country: "RSA", time: "2:25.41", or: true, note: "南非女性的首枚奥运游泳金牌" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "Kyoko Iwasaki", country: "JPN", time: "2:26.65", note: "14岁——奥运游泳史上最年轻的个人金牌得主之一" },
  { series: "olympics", year: 1988, city: "汉城", champion: "Silke Hörner", country: "GDR", time: "2:26.71", wr: true, note: "破世界纪录" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "Anne Ottenbrite", country: "CAN", time: "2:30.38" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "Lina Kačiušytė", country: "URS", time: "2:29.54", or: true },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "Marina Koshevaya", country: "URS", time: "2:33.35", wr: true, note: "破世界纪录" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "Beverley Whitfield", country: "AUS", time: "2:41.05" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "Sharon Wichman", country: "USA", time: "2:44.4", note: "本站收录起点" },

  // —— 世界锦标赛 ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "Kate Douglass", country: "USA", time: "2:18.50", note: "破赛会纪录与美洲纪录" },
  { series: "worlds", year: 2024, city: "多哈", champion: "Tes Schouten", country: "NED", time: "2:19.81" },
  { series: "worlds", year: 2023, city: "福冈", champion: "Tatjana Schoenmaker", country: "RSA", time: "2:20.80" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "Lilly King", country: "USA", time: "2:22.41" },
  { series: "worlds", year: 2019, city: "光州", champion: "Yuliya Efimova", country: "RUS", time: "2:20.17" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "Yuliya Efimova", country: "RUS", time: "2:19.64" },
  { series: "worlds", year: 2015, city: "喀山", champion: "Kanako Watanabe", country: "JPN", time: "2:21.15" },
  { series: "worlds", year: 2013, city: "巴塞罗那", champion: "Yuliya Efimova", country: "RUS", time: "2:19.41", note: "半决赛佩德森2:19.11破世界纪录，决赛叶菲莫娃夺金" },
  { series: "worlds", year: 2011, city: "上海", champion: "Rebecca Soni", country: "USA", time: "2:21.47" },
  { series: "worlds", year: 2009, city: "罗马", champion: "Nađa Higl", country: "SRB", time: "2:21.62", note: "塞尔维亚的首枚游泳世锦赛金牌；快速泳衣时代" },
  { series: "worlds", year: 2007, city: "墨尔本", champion: "Leisel Jones", country: "AUS", time: "2:21.84" },
  { series: "worlds", year: 2005, city: "蒙特利尔", champion: "Leisel Jones", country: "AUS", time: "2:21.72", wr: true, note: "破世界纪录" },
  { series: "worlds", year: 2003, city: "巴塞罗那", champion: "Amanda Beard", country: "USA", time: "2:22.99", note: "平齐晖2001年的世界纪录" },
  { series: "worlds", year: 2001, city: "福冈", champion: "Ágnes Kovács", country: "HUN", time: "2:24.90", note: "破赛会纪录；中国齐晖2:25.09银" },
  { series: "worlds", year: 1998, city: "珀斯", champion: "Ágnes Kovács", country: "HUN", time: "2:25.45", note: "破赛会纪录" },
  { series: "worlds", year: 1994, city: "罗马", champion: "Samantha Riley", country: "AUS", time: "2:26.87", note: "破赛会纪录" },
  { series: "worlds", year: 1991, city: "珀斯", champion: "Yelena Volkova", country: "URS", time: "2:29.53" },
  { series: "worlds", year: 1986, city: "马德里", champion: "Silke Hörner", country: "GDR", time: "2:27.40", wr: true, note: "破世界纪录" },
  { series: "worlds", year: 1982, city: "瓜亚基尔", champion: "Svetlana Varganova", country: "URS", time: "2:28.82", note: "破赛会纪录" },
  { series: "worlds", year: 1978, city: "西柏林", champion: "Lina Kačiušytė", country: "URS", time: "2:31.42", wr: true, note: "预赛2:33.11、决赛2:31.42，一天两破世界纪录" },
  { series: "worlds", year: 1975, city: "卡利", champion: "Hannelore Anke", country: "GDR", time: "2:37.25", note: "破赛会纪录" },
  { series: "worlds", year: 1973, city: "贝尔格莱德", champion: "Renate Vogel", country: "GDR", time: "2:40.01", note: "设项首金" },

  // —— 亚运会 ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Kotomi Kato", country: "JPN", time: "2:22.57", note: "韩国朴诗恩2:22.69银并破全国纪录" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "Ye Shiwen", country: "CHN", time: "2:23.84", note: "赛事于2023年举行；叶诗文时隔九年再夺亚运金牌" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Kanako Watanabe", country: "JPN", time: "2:23.05" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "Kanako Watanabe", country: "JPN", time: "2:21.82", note: "破赛会纪录" },
  { series: "asiangames", year: 2010, city: "广州", champion: "Jeong Da-rae", country: "KOR", time: "2:25.02" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "Qi Hui", country: "CHN", time: "2:23.93", note: "破赛会纪录；亚洲纪录保持者" },
];
