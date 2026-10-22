import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 200 米蛙泳 · 历届大赛冠军
 * 数据来源：Wikipedia 各届世锦赛/奥运会/亚运总览页成绩表逐行核对
 * 说明（宁缺毋滥）：
 *  - 奥运会：1908 起设项，本表从 1968 墨西哥城起收录 15 届（与站点电计时口径一致）；
 *  - 世锦赛：1973 贝尔格莱德起设项，22 届全部收录；
 *  - 泛太平洋锦标赛、欧锦赛暂未收录；
 *  - 亚运会：2006 多哈起六届全部收录。
 */
export const mens200mBreaststrokeChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Léon Marchand", country: "FRA", time: "2:05.85", or: true, note: "奥运纪录；主场四金之一" },
  { series: "olympics", year: 2020, city: "东京", champion: "Zac Stubblety-Cook", country: "AUS", time: "2:06.38", or: true, note: "赛事于2021年举行" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Dmitriy Balandin", country: "KAZ", time: "2:07.46", note: "哈萨克斯坦游泳的首枚奥运金牌" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Dániel Gyurta", country: "HUN", time: "2:07.28", wr: true, note: "破世界纪录" },
  { series: "olympics", year: 2008, city: "北京", champion: "Kosuke Kitajima", country: "JPN", time: "2:07.64", or: true, note: "卫冕双冠" },
  { series: "olympics", year: 2004, city: "雅典", champion: "Kosuke Kitajima", country: "JPN", time: "2:09.44", or: true },
  { series: "olympics", year: 2000, city: "悉尼", champion: "Domenico Fioravanti", country: "ITA", time: "2:10.87" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "Norbert Rózsa", country: "HUN", time: "2:12.57" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "Mike Barrowman", country: "USA", time: "2:10.16", wr: true, note: "破世界纪录；巴罗曼生涯五破纪录" },
  { series: "olympics", year: 1988, city: "汉城", champion: "József Szabó", country: "HUN", time: "2:13.52" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "Victor Davis", country: "CAN", time: "2:13.34", wr: true, note: "破世界纪录" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "Robertas Žulpa", country: "URS", time: "2:15.85" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "David Wilkie", country: "GBR", time: "2:15.11", wr: true, note: "一次削掉3.10秒；奥运纪录保持二十年" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "John Hencken", country: "USA", time: "2:21.55", wr: true, note: "破世界纪录" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "Felipe Muñoz", country: "MEX", time: "2:28.7", note: "墨西哥首位奥运游泳冠军；本站收录起点" },

  // —— 世界锦标赛 ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "Qin Haiyang", country: "CHN", time: "2:07.41", note: "覃海洋重夺该项目金牌" },
  { series: "worlds", year: 2024, city: "多哈", champion: "Dong Zhihao", country: "CHN", time: "2:07.94", note: "18岁；中国首次包揽该项目世锦赛两连冠" },
  { series: "worlds", year: 2023, city: "福冈", champion: "Qin Haiyang", country: "CHN", time: "2:05.48", wr: true, note: "破世界纪录；同届包揽50/100/200蛙三金" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "Zac Stubblety-Cook", country: "AUS", time: "2:07.07" },
  { series: "worlds", year: 2019, city: "光州", champion: "Anton Chupkov", country: "RUS", time: "2:06.12", wr: true, note: "破世界纪录" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "Anton Chupkov", country: "RUS", time: "2:06.96", note: "破赛会纪录" },
  { series: "worlds", year: 2015, city: "喀山", champion: "Marco Koch", country: "GER", time: "2:07.76" },
  { series: "worlds", year: 2013, city: "巴塞罗那", champion: "Dániel Gyurta", country: "HUN", time: "2:07.23", note: "世锦赛三连冠（2009/2011/2013）" },
  { series: "worlds", year: 2011, city: "上海", champion: "Dániel Gyurta", country: "HUN", time: "2:08.41" },
  { series: "worlds", year: 2009, city: "罗马", champion: "Dániel Gyurta", country: "HUN", time: "2:07.64", note: "快速泳衣时代" },
  { series: "worlds", year: 2007, city: "墨尔本", champion: "Kosuke Kitajima", country: "JPN", time: "2:09.80" },
  { series: "worlds", year: 2005, city: "蒙特利尔", champion: "Brendan Hansen", country: "USA", time: "2:09.85" },
  { series: "worlds", year: 2003, city: "巴塞罗那", champion: "Kosuke Kitajima", country: "JPN", time: "2:09.42", wr: true, note: "破世界纪录" },
  { series: "worlds", year: 2001, city: "福冈", champion: "Brendan Hansen", country: "USA", time: "2:10.69", note: "破赛会纪录" },
  { series: "worlds", year: 1998, city: "珀斯", champion: "Kurt Grote", country: "USA", time: "2:13.40" },
  { series: "worlds", year: 1994, city: "罗马", champion: "Norbert Rózsa", country: "HUN", time: "2:12.81" },
  { series: "worlds", year: 1991, city: "珀斯", champion: "Mike Barrowman", country: "USA", time: "2:11.23", wr: true, note: "破世界纪录" },
  { series: "worlds", year: 1986, city: "马德里", champion: "József Szabó", country: "HUN", time: "2:14.27", note: "破赛会纪录" },
  { series: "worlds", year: 1982, city: "瓜亚基尔", champion: "Victor Davis", country: "CAN", time: "2:14.77", wr: true, note: "破世界纪录" },
  { series: "worlds", year: 1978, city: "西柏林", champion: "Nicholas Nevid", country: "USA", time: "2:16.37", note: "破赛会纪录" },
  { series: "worlds", year: 1975, city: "卡利", champion: "David Wilkie", country: "GBR", time: "2:18.23" },
  { series: "worlds", year: 1973, city: "贝尔格莱德", champion: "David Wilkie", country: "GBR", time: "2:19.28", wr: true, note: "设项首金；破世界纪录" },

  // —— 亚运会 ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Shin Ohashi", country: "JPN", time: "2:04.83", wr: true, note: "破世界纪录——人类首次游进2:05；20岁" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "Qin Haiyang", country: "CHN", time: "2:07.03", note: "破赛会纪录；赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Yasuhiro Koseki", country: "JPN", time: "2:07.81", note: "与渡边一平2:07.82的0.01秒对决" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "Dmitriy Balandin", country: "KAZ", time: "2:07.67", note: "破赛会纪录" },
  { series: "asiangames", year: 2010, city: "广州", champion: "Naoya Tomita", country: "JPN", time: "2:10.36" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "Kosuke Kitajima", country: "JPN", time: "2:12.05" },
];
