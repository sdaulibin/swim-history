import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 50 米自由泳 · 历届大赛冠军
 * 数据来源：Wikipedia 各届世锦赛/奥运会/亚运总览页成绩表逐行核对
 * 说明（宁缺毋滥）：
 *  - 奥运会：1988 汉城起设项，10 届全部收录；
 *  - 世锦赛：1986 马德里起设项，18 届全部收录；
 *  - 泛太平洋锦标赛不设 50 米项目；欧锦赛暂未收录；
 *  - 亚运会：2006 多哈起六届全部收录。
 */
export const womens50mFreestyleChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Sarah Sjöström", country: "SWE", time: "23.71", note: "30岁加冕，个人第三枚奥运金牌" },
  { series: "olympics", year: 2020, city: "东京", champion: "Emma McKeon", country: "AUS", time: "23.81", or: true, note: "当届四金之一；赛事于2021年举行" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Pernille Blume", country: "DEN", time: "24.07" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Ranomi Kromowidjojo", country: "NED", time: "24.05", or: true },
  { series: "olympics", year: 2008, city: "北京", champion: "Britta Steffen", country: "GER", time: "24.06", or: true },
  { series: "olympics", year: 2004, city: "雅典", champion: "Inge de Bruijn", country: "NED", time: "24.58", note: "卫冕成功" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "Inge de Bruijn", country: "NED", time: "24.32" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "Amy Van Dyken", country: "USA", time: "24.87", note: "当届四金" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "Yang Wenyi", country: "CHN", time: "24.79", wr: true, note: "破自己保持的世界纪录" },
  { series: "olympics", year: 1988, city: "汉城", champion: "Kristin Otto", country: "GDR", time: "25.49", note: "设项首金；当届独得六金" },

  // —— 世界锦标赛 ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "Meg Harris", country: "AUS", time: "24.02", note: "中国吴卿风24.26银、程玉洁24.28铜" },
  { series: "worlds", year: 2024, city: "多哈", champion: "Sarah Sjöström", country: "SWE", time: "23.69" },
  { series: "worlds", year: 2023, city: "福冈", champion: "Sarah Sjöström", country: "SWE", time: "23.62" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "Sarah Sjöström", country: "SWE", time: "23.98" },
  { series: "worlds", year: 2019, city: "光州", champion: "Simone Manuel", country: "USA", time: "24.05" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "Sarah Sjöström", country: "SWE", time: "23.69", note: "半决赛23.67破世界纪录，决赛夺冠" },
  { series: "worlds", year: 2015, city: "喀山", champion: "Bronte Campbell", country: "AUS", time: "24.12" },
  { series: "worlds", year: 2013, city: "巴塞罗那", champion: "Ranomi Kromowidjojo", country: "NED", time: "24.05" },
  { series: "worlds", year: 2011, city: "上海", champion: "Therese Alshammar", country: "SWE", time: "24.14" },
  { series: "worlds", year: 2009, city: "罗马", champion: "Britta Steffen", country: "GER", time: "23.73", wr: true, note: "快速泳衣时代；破世界纪录" },
  { series: "worlds", year: 2007, city: "墨尔本", champion: "Libby Lenton", country: "AUS", time: "24.53" },
  { series: "worlds", year: 2005, city: "蒙特利尔", champion: "Libby Lenton", country: "AUS", time: "24.59" },
  { series: "worlds", year: 2003, city: "巴塞罗那", champion: "Inge de Bruijn", country: "NED", time: "24.47", note: "世锦赛三连冠（2001/2003）" },
  { series: "worlds", year: 2001, city: "福冈", champion: "Inge de Bruijn", country: "NED", time: "24.47" },
  { series: "worlds", year: 1998, city: "珀斯", champion: "Amy Van Dyken", country: "USA", time: "25.15" },
  { series: "worlds", year: 1994, city: "罗马", champion: "Le Jingyi", country: "CHN", time: "24.51", wr: true, note: "破世界纪录" },
  { series: "worlds", year: 1991, city: "珀斯", champion: "Zhuang Yong", country: "CHN", time: "25.47" },
  { series: "worlds", year: 1986, city: "马德里", champion: "Tamara Costache", country: "ROU", time: "25.28", wr: true, note: "设项首金；破世界纪录" },

  // —— 亚运会 ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Wu Qingfeng", country: "CHN", time: "23.98", note: "破赛会纪录，距刘湘亚洲纪录23.97仅0.01秒" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "Zhang Yufei", country: "CHN", time: "24.26", note: "破赛会纪录；赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Rikako Ikee", country: "JPN", time: "24.53", note: "破赛会纪录；当届六金荣膺MVP" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "Chen Xinyi", country: "CHN", time: "24.87" },
  { series: "asiangames", year: 2010, city: "广州", champion: "Li Zhesi", country: "CHN", time: "24.97" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "Xu Yanwei", country: "CHN", time: "25.23" },
];
