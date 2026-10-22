import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 50 米自由泳 · 历届大赛冠军
 * 数据来源：Wikipedia 各届世锦赛/奥运会/亚运总览页成绩表逐行核对
 * 说明（宁缺毋滥）：
 *  - 奥运会：1988 汉城起设项，10 届全部收录；2000 悉尼霍尔与欧文并列夺金；
 *  - 世锦赛：1986 马德里起设项，18 届全部收录；
 *  - 泛太平洋锦标赛不设 50 米项目；欧锦赛暂未收录；
 *  - 亚运会：2006 多哈起六届全部收录。
 */
export const mens50mFreestyleChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Cameron McEvoy", country: "AUS", time: "21.25", note: "30岁终圆奥运金牌梦" },
  { series: "olympics", year: 2020, city: "东京", champion: "Caeleb Dressel", country: "USA", time: "21.07", or: true, note: "赛事于2021年举行" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Anthony Ervin", country: "USA", time: "21.40", note: "35岁夺金，与2000年并列夺冠相隔16年" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Florent Manaudou", country: "FRA", time: "21.34", note: "力压卫冕冠军西埃洛" },
  { series: "olympics", year: 2008, city: "北京", champion: "Cesar Cielo", country: "BRA", time: "21.30", or: true },
  { series: "olympics", year: 2004, city: "雅典", champion: "Gary Hall Jr.", country: "USA", time: "21.93" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "Anthony Ervin / Gary Hall Jr.", country: "USA", time: "21.98", note: "并列夺金——奥运游泳史上罕见的双金牌" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "Alexander Popov", country: "RUS", time: "22.13" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "Alexander Popov", country: "EUN", time: "21.91", or: true, note: "代表独联体出战" },
  { series: "olympics", year: 1988, city: "汉城", champion: "Matt Biondi", country: "USA", time: "22.14", wr: true, note: "设项首金；当届独得7枚奖牌" },

  // —— 世界锦标赛 ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "Cameron McEvoy", country: "AUS", time: "21.14" },
  { series: "worlds", year: 2024, city: "多哈", champion: "Vladyslav Bukhov", country: "UKR", time: "21.44", note: "0.01秒险胜麦克沃伊" },
  { series: "worlds", year: 2023, city: "福冈", champion: "Cameron McEvoy", country: "AUS", time: "21.06", note: "大洋洲纪录；距世界纪录0.15秒" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "Ben Proud", country: "GBR", time: "21.32" },
  { series: "worlds", year: 2019, city: "光州", champion: "Caeleb Dressel", country: "USA", time: "21.04", note: "世锦赛纪录" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "Caeleb Dressel", country: "USA", time: "21.15" },
  { series: "worlds", year: 2015, city: "喀山", champion: "Florent Manaudou", country: "FRA", time: "21.19" },
  { series: "worlds", year: 2013, city: "巴塞罗那", champion: "Cesar Cielo", country: "BRA", time: "21.32", note: "世锦赛三连冠（2009/2011/2013）" },
  { series: "worlds", year: 2011, city: "上海", champion: "Cesar Cielo", country: "BRA", time: "21.52" },
  { series: "worlds", year: 2009, city: "罗马", champion: "Cesar Cielo", country: "BRA", time: "21.08", note: "快速泳衣时代" },
  { series: "worlds", year: 2007, city: "墨尔本", champion: "Ben Wildman-Tobriner", country: "USA", time: "21.88" },
  { series: "worlds", year: 2005, city: "蒙特利尔", champion: "Roland Schoeman", country: "RSA", time: "21.69" },
  { series: "worlds", year: 2003, city: "巴塞罗那", champion: "Alexander Popov", country: "RUS", time: "21.92", note: "世锦赛三连冠（1998/2001/2003）中的最后一枚；2001年银牌" },
  { series: "worlds", year: 2001, city: "福冈", champion: "Anthony Ervin", country: "USA", time: "22.09" },
  { series: "worlds", year: 1998, city: "珀斯", champion: "Bill Pilczuk", country: "USA", time: "22.29", note: "爆冷击败卫冕冠军波波夫" },
  { series: "worlds", year: 1994, city: "罗马", champion: "Alexander Popov", country: "RUS", time: "22.17" },
  { series: "worlds", year: 1991, city: "珀斯", champion: "Tom Jager", country: "USA", time: "22.16" },
  { series: "worlds", year: 1986, city: "马德里", champion: "Tom Jager", country: "USA", time: "22.49", note: "设项首金" },

  // —— 亚运会 ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Kim Young-beom", country: "KOR", time: "21.66", note: "破赛会纪录；中国香港何甄陶21.76银" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "Ji Yu-chan", country: "KOR", time: "21.72", note: "破赛会纪录；赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Yu Hexin", country: "CHN", time: "22.11" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "Ning Zetao", country: "CHN", time: "21.95", note: "首次游进22秒的亚运冠军" },
  { series: "asiangames", year: 2010, city: "广州", champion: "Lü Zhiwu", country: "CHN", time: "22.37" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "Rafed Al-Masri", country: "SYR", time: "22.41" },
];
