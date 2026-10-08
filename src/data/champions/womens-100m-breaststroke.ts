import type { ChampionEntry } from "@/lib/types";

/**
 * 女子 100 米蛙泳 · 历届大赛冠军
 * 奥运会数据来源：Wikipedia "List of Olympic medalists in swimming (women)"
 * 世锦赛数据来源：Wikipedia "100 metre breaststroke at the World Aquatics Championships"
 *
 * 世锦赛以下届次待核实后补入（冠军/成绩）：1973、1975、1982、1991、1998。
 * 2013（梅卢蒂特1:04.42）与2015（约翰松1:05.10）经单项决赛页核实；2001/2003 罗雪娟、2005/2007 琼斯、2009/2011 索尼经运动员词条独立核实。
 * 泛太平洋数据来源：Wikipedia 各届赛事页表格直读（1985/1987/1997/1999）、选手生页与权威媒体
 *   （ISHF 名人堂、华盛顿邮报、洛杉矶时报、World Aquatics 奖牌库）；1989 届未能核实，暂缺。
 */
export const womens100mBreaststrokeChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Tatjana Smith", country: "RSA", time: "1:05.28" },
  { series: "olympics", year: 2020, city: "东京", champion: "Lydia Jacoby", country: "USA", time: "1:04.95" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "Lilly King", country: "USA", time: "1:04.93" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "Rūta Meilutytė", country: "LTU", time: "1:05.47" },
  { series: "olympics", year: 2008, city: "北京", champion: "Leisel Jones", country: "AUS", time: "1:05.17" },
  { series: "olympics", year: 2004, city: "雅典", champion: "Luo Xuejuan", country: "CHN", time: "1:06.64" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "Megan Quann", country: "USA", time: "1:07.05" },
  { series: "olympics", year: 1996, city: "亚特兰大", champion: "Penelope Heyns", country: "RSA", time: "1:07.73" },
  { series: "olympics", year: 1992, city: "巴塞罗那", champion: "Yelena Rudkovskaya", country: "EUN", time: "1:08.00" },
  { series: "olympics", year: 1988, city: "汉城", champion: "Tanya Dangalakova", country: "BUL", time: "1:07.95" },
  { series: "olympics", year: 1984, city: "洛杉矶", champion: "Petra van Staveren", country: "NED", time: "1:09.74" },
  { series: "olympics", year: 1980, city: "莫斯科", champion: "Ute Geweniger", country: "GDR", time: "1:10.22" },
  { series: "olympics", year: 1976, city: "蒙特利尔", champion: "Hannelore Anke", country: "GDR" },
  { series: "olympics", year: 1972, city: "慕尼黑", champion: "Cathy Carr", country: "USA", time: "1:13.58" },
  { series: "olympics", year: 1968, city: "墨西哥城", champion: "Đurđa Bjedov", country: "YUG", time: "1:15.8" },

  // —— 世界锦标赛（已核实行） ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "Anna Elendt", country: "GER", time: "1:05.19" },
  { series: "worlds", year: 2024, city: "多哈", champion: "Tang Qianting", country: "CHN", time: "1:05.27" },
  { series: "worlds", year: 2023, city: "福冈", champion: "Rūta Meilutytė", country: "LTU", time: "1:04.62" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "Lilly King", country: "USA", time: "1:05.98" },
  { series: "worlds", year: 2019, city: "光州", champion: "Lilly King", country: "USA", time: "1:04.13", note: "卫冕，成绩与2017年世界纪录完全相同" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "Lilly King", country: "USA", time: "1:04.13", wr: true },
  { series: "worlds", year: 2015, city: "喀山", champion: "Jennie Johansson", country: "SWE", time: "1:05.10" },
  { series: "worlds", year: 2013, city: "巴塞罗那", champion: "Rūta Meilutytė", country: "LTU", time: "1:04.42" },
  { series: "worlds", year: 2011, city: "上海", champion: "Rebecca Soni", country: "USA", time: "1:05.05" },
  { series: "worlds", year: 2009, city: "罗马", champion: "Rebecca Soni", country: "USA", time: "1:04.93" },
  { series: "worlds", year: 2007, city: "墨尔本", champion: "Leisel Jones", country: "AUS" },
  { series: "worlds", year: 2005, city: "蒙特利尔", champion: "Leisel Jones", country: "AUS", note: "哈迪在半决赛以1:06.20打破世界纪录，决赛琼斯夺金" },
  { series: "worlds", year: 2003, city: "巴塞罗那", champion: "Luo Xuejuan", country: "CHN", note: "琼斯半决赛1:06.37破世界纪录，决赛罗雪娟夺金" },
  { series: "worlds", year: 2001, city: "福冈", champion: "Luo Xuejuan", country: "CHN" },
  { series: "worlds", year: 1994, city: "罗马", champion: "Samantha Riley", country: "AUS", time: "1:07.69", wr: true },
  { series: "worlds", year: 1986, city: "马德里", champion: "Sylvia Gerasch", country: "GDR", time: "1:08.11", wr: true },
  { series: "worlds", year: 1978, city: "西柏林", champion: "Yuliya Bogdanova", country: "URS", time: "1:10.31", wr: true },

  // —— 泛太平洋锦标赛（1985 年起；1989 届待核实暂缺） ——
  // 南非（海因斯）为泛太特邀参赛国。
  { series: "panpacific", year: 2026, city: "尔湾", champion: "McKenzie Siroky", country: "USA", time: "1:05.32", note: "泛太复办届，与唐钱婷激战后夺金" },
  { series: "panpacific", year: 2018, city: "东京", champion: "Lilly King", country: "USA", time: "1:05.44" },
  { series: "panpacific", year: 2014, city: "黄金海岸", champion: "Jessica Hardy", country: "USA" },
  { series: "panpacific", year: 2010, city: "尔湾", champion: "Rebecca Soni", country: "USA", time: "1:04.93", note: "赛会纪录，保持至今" },
  { series: "panpacific", year: 2006, city: "维多利亚", champion: "Jessica Hardy", country: "USA" },
  { series: "panpacific", year: 2002, city: "横滨", champion: "Amanda Beard", country: "USA" },
  { series: "panpacific", year: 1999, city: "悉尼", champion: "Penelope Heyns", country: "RSA", time: "1:06.52", wr: true },
  { series: "panpacific", year: 1997, city: "福冈", champion: "Samantha Riley", country: "AUS", time: "1:07.81" },
  { series: "panpacific", year: 1995, city: "亚特兰大", champion: "Penelope Heyns", country: "RSA", time: "1:08.09", note: "非洲纪录；赖利资格赛犯规被逐" },
  { series: "panpacific", year: 1993, city: "神户", champion: "Anita Nall", country: "USA", time: "1:09.11", note: "赛会纪录" },
  { series: "panpacific", year: 1991, city: "埃德蒙顿", champion: "Linley Frame", country: "AUS" },
  { series: "panpacific", year: 1987, city: "布里斯班", champion: "Allison Higson", country: "CAN", time: "1:09.92" },
  { series: "panpacific", year: 1985, city: "东京", champion: "Cindy Õunpuu", country: "CAN", time: "1:10.25" },

  // —— 欧洲锦标赛（长池；2022 起三届已核） ——
  { series: "euros", year: 2026, city: "巴黎", champion: "Angharad Evans", country: "GBR", note: "预赛1:04.97两破赛会纪录后夺冠" },
  { series: "euros", year: 2024, city: "贝尔格莱德", champion: "Eneli Jefimova", country: "EST" },
  { series: "euros", year: 2022, city: "罗马", champion: "Benedetta Pilato", country: "ITA" },

  // —— 亚运会（2014 仁川起四届已核） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "Tang Qianting", country: "CHN", time: "1:04.98", note: "赛会纪录" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "Reona Aoki", country: "JPN", time: "1:06.81", note: "唐钱婷夺得同届50米蛙泳金牌；赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Satomi Suzuki", country: "JPN", time: "1:06.40", note: "赛会纪录" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "Shi Jinglin", country: "CHN", time: "1:06.67", note: "赛会纪录，破罗雪娟2002年创下的纪录" },
];
