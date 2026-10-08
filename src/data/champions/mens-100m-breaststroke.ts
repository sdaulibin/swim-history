import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 100 米蛙泳 · 历届大赛冠军
 * 奥运会数据来源：Wikipedia "List of Olympic medalists in swimming (men)"
 * 世锦赛数据来源：Wikipedia "100 metre breaststroke at the World Aquatics Championships"
 * 注：1978/1982/1986/1994 四届世锦赛夺冠成绩待核实（避免误写）。
 * 泛太平洋数据来源：Wikipedia 各届赛事页表格直读（1985/1987/1993/1995/1997/2002/2006/2014）、
 *   World Aquatics/ISHOF/奥体百科选手页（1991/1999/2010/2018/2026）；1989 届未能核实，暂缺。
 */
export const mens100mBreaststrokeChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Nicolò Martinenghi", country: "ITA", time: "59.01" },
  { series: "olympics", year: 2020, city: "东京", champion: "Adam Peaty", country: "GBR", time: "57.37", or: true },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Adam Peaty", country: "GBR", time: "57.13", wr: true },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Cameron van der Burgh", country: "RSA", time: "58.46", wr: true },
  { series: "olympics", year: 2008, city: "北京", champion: "Kosuke Kitajima", country: "JPN", time: "58.91", wr: true },
  { series: "olympics", year: 2004, city: "雅典", champion: "Kosuke Kitajima", country: "JPN", time: "59.78" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "Domenico Fioravanti", country: "ITA", time: "1:00.46" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "Frederik Deburghgraeve", country: "BEL", time: "1:00.65" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "Nelson Diebel", country: "USA", time: "1:01.50" },
  { series: "olympics", year: 1988, city: "汉城", champion: "Adrian Moorhouse", country: "GBR", time: "1:01.88" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "Steve Lundquist", country: "USA", time: "1:01.65", wr: true },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "Duncan Goodhew", country: "GBR", time: "1:03.44" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "John Hencken", country: "USA", time: "1:03.11", wr: true },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "Nobutaka Taguchi", country: "JPN", time: "1:04.94", wr: true },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "Don McKenzie", country: "USA", time: "1:07.70" },

  // —— 世界锦标赛 ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "Qin Haiyang", country: "CHN", time: "58.23" },
  { series: "worlds", year: 2024, city: "多哈", champion: "Qin Haiyang", country: "CHN", time: "58.34" },
  { series: "worlds", year: 2023, city: "福冈", champion: "Qin Haiyang", country: "CHN", time: "57.69" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "Nicolò Martinenghi", country: "ITA", time: "58.26" },
  { series: "worlds", year: 2019, city: "光州", champion: "Adam Peaty", country: "GBR", time: "56.88", wr: true },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "Adam Peaty", country: "GBR", time: "57.53" },
  { series: "worlds", year: 2015, city: "喀山", champion: "Adam Peaty", country: "GBR", time: "58.52" },
  { series: "worlds", year: 2013, city: "巴塞罗那", champion: "Christian Sprenger", country: "AUS", time: "58.79" },
  { series: "worlds", year: 2011, city: "上海", champion: "Alexander Dale Oen", country: "NOR", time: "58.71" },
  { series: "worlds", year: 2009, city: "罗马", champion: "Brenton Rickard", country: "AUS", time: "58.58", wr: true },
  { series: "worlds", year: 2007, city: "墨尔本", champion: "Kosuke Kitajima", country: "JPN", time: "59.37" },
  { series: "worlds", year: 2005, city: "蒙特利尔", champion: "Kosuke Kitajima", country: "JPN", time: "59.53" },
  { series: "worlds", year: 2003, city: "巴塞罗那", champion: "Kosuke Kitajima", country: "JPN", time: "59.78", wr: true },
  { series: "worlds", year: 2001, city: "福冈", champion: "Roman Sludnov", country: "RUS", time: "59.94", wr: true },
  { series: "worlds", year: 1998, city: "珀斯", champion: "Frédérick Deburghgraeve", country: "BEL", time: "1:00.81" },
  { series: "worlds", year: 1994, city: "罗马", champion: "Károly Güttler", country: "HUN" },
  { series: "worlds", year: 1991, city: "珀斯", champion: "Norbert Rózsa", country: "HUN", time: "1:01.45", wr: true },
  { series: "worlds", year: 1986, city: "马德里", champion: "Vladimir Kosinsky", country: "URS" },
  { series: "worlds", year: 1982, city: "瓜亚基尔", champion: "Steve Lundquist", country: "USA" },
  { series: "worlds", year: 1978, city: "西柏林", champion: "Gerald Mörken", country: "FRG" },
  { series: "worlds", year: 1975, city: "卡利", champion: "John Hencken", country: "USA", time: "1:04.05" },
  { series: "worlds", year: 1973, city: "贝尔格莱德", champion: "John Hencken", country: "USA", time: "1:04.02" },

  // —— 泛太平洋锦标赛（1985 年起；1989 届待核实暂缺） ——
  { series: "panpacific", year: 2026, city: "尔湾", champion: "Van Mathias", country: "USA", time: "58.02", note: "赛会纪录，日本大桥信58.54破青年世纪录摘银" },
  { series: "panpacific", year: 2018, city: "东京", champion: "Andrew Wilson", country: "USA", time: "58.74", note: "赛会纪录" },
  { series: "panpacific", year: 2014, city: "黄金海岸", champion: "Yasuhiro Koseki", country: "JPN", time: "59.62" },
  { series: "panpacific", year: 2010, city: "尔湾", champion: "Kosuke Kitajima", country: "JPN" },
  { series: "panpacific", year: 2006, city: "维多利亚", champion: "Brendan Hansen", country: "USA", time: "59.90", note: "赛会纪录" },
  { series: "panpacific", year: 2002, city: "横滨", champion: "Kosuke Kitajima", country: "JPN", time: "1:00.36" },
  { series: "panpacific", year: 1999, city: "悉尼", champion: "Simon Cowley", country: "AUS", time: "1:02.06" },
  { series: "panpacific", year: 1997, city: "福冈", champion: "Kurt Grote", country: "USA", time: "1:01.22", note: "赛会纪录" },
  { series: "panpacific", year: 1995, city: "亚特兰大", champion: "Eric Wunderlich", country: "USA", time: "1:01.80" },
  { series: "panpacific", year: 1993, city: "神户", champion: "Phil Rogers", country: "AUS", time: "1:01.56" },
  { series: "panpacific", year: 1991, city: "埃德蒙顿", champion: "Mike Barrowman", country: "USA", time: "1:02.02" },
  { series: "panpacific", year: 1987, city: "布里斯班", champion: "Victor Davis", country: "CAN", time: "1:02.85" },
  { series: "panpacific", year: 1985, city: "东京", champion: "John Moffet", country: "USA", time: "1:02.42" },

  // —— 欧洲锦标赛（长池；2016 起六届已核） ——
  { series: "euros", year: 2026, city: "巴黎", champion: "Nicolò Martinenghi", country: "ITA", time: "58.58", note: "欧锦赛三连冠" },
  { series: "euros", year: 2024, city: "贝尔格莱德", champion: "Nicolò Martinenghi", country: "ITA", note: "皮蒂复出仅列第五" },
  { series: "euros", year: 2022, city: "罗马", champion: "Nicolò Martinenghi", country: "ITA" },
  { series: "euros", year: 2021, city: "布达佩斯", champion: "Adam Peaty", country: "GBR" },
  { series: "euros", year: 2018, city: "格拉斯哥", champion: "Adam Peaty", country: "GBR", time: "57.10", wr: true },
  { series: "euros", year: 2016, city: "伦敦", champion: "Adam Peaty", country: "GBR" },

  // —— 亚运会（2014 仁川起四届已核） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Shin Ohashi", country: "JPN", time: "58.64", note: "与董志豪并列冠军；数日后破200蛙世界纪录" },
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Dong Zhihao", country: "CHN", time: "58.64", note: "与大桥信并列冠军" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "Qin Haiyang", country: "CHN", time: "57.76", note: "赛会纪录；赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Yasuhiro Koseki", country: "JPN", time: "58.86", note: "赛会纪录，当届包揽三项蛙泳金牌" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "Dmitriy Balandin", country: "KAZ", time: "59.92", note: "赛会纪录，当届包揽50/100/200蛙三金" },
];
