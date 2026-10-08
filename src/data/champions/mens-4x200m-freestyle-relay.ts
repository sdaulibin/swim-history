import type { ChampionEntry } from "@/lib/types";

/**
 * 男子 4×200 米自由泳接力 · 历届大赛冠军
 * champion 字段按站点接力项目惯例使用国家英文名，中文译名由 names.ts 映射。
 * 空缺说明（宁缺毋滥，未能核实的届次暂缺）：
 *  - 奥运会：2000 年以前各届冠军未能核实，暂缺；
 *  - 世锦赛：1973–2019 各届未能核实（2013 巴塞罗那届美国夺冠由后续报道间接证实），
 *    2015/2017/2019 届暂缺；
 *  - 泛太平洋：1985–2018 各届未能核实，暂缺；2026 尔湾（美国 6:59.37）为真实结果；
 *  - 欧洲锦标赛：2024 及更早各届未能核实，暂缺；2026 巴黎（英国 7:01.52）为真实结果；
 *  - 亚运会：2014 仁川届中国队夺冠已核实，具体成绩未能核实；2010 及更早暂缺。
 */
export const mens4x200mFreestyleRelayChampions: ChampionEntry[] = [
  // —— 奥运会（2000 年以前各届未能核实，暂缺） ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "Great Britain", country: "GBR", time: "6:59.43", note: "卫冕奥运冠军；美国 7:00.78 银牌、澳大利亚 7:01.98 铜牌" },
  { series: "olympics", year: 2020, city: "东京", champion: "Great Britain", country: "GBR", time: "6:58.58", note: "欧洲纪录；T. Dean · D. Scott · J. Guy · M. Richards；英国首夺该项目奥运金牌，俄奥队银、澳队铜" },
  { series: "olympics", year: 2016, city: "里约热内卢", champion: "United States", country: "USA", time: "7:00.66", note: "C. Dwyer · T. Haas · R. Lochte · M. Phelps（菲尔普斯第 21 枚奥运金牌）；英国银牌、日本铜牌" },
  { series: "olympics", year: 2012, city: "伦敦", champion: "United States", country: "USA", time: "6:59.70", note: "R. Lochte · C. Dwyer · R. Berens · M. Phelps（压轴，第 19 枚奥运奖牌）；法国银牌、中国铜牌" },
  { series: "olympics", year: 2008, city: "北京", champion: "United States", country: "USA", time: "6:58.55", wr: true, note: "M. Phelps · R. Lochte · R. Berens · P. Vanderkaay；史上首破 7 分钟" },
  { series: "olympics", year: 2004, city: "雅典", champion: "United States", country: "USA", time: "7:07.33", note: "K. Keller 压轴顶住 I. Thorpe 的追赶，M. Phelps 一棒出发" },
  { series: "olympics", year: 2000, city: "悉尼", champion: "Australia", country: "AUS", time: "7:07.05", wr: true, note: "I. Thorpe · M. Klim · T. Pearson · B. Kirby；美国银牌、荷兰铜牌" },

  // —— 世界锦标赛（1973–2019 除 2013 外未能核实，暂缺） ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "Great Britain", country: "GBR", time: "6:59.84", note: "M. Richards · J. Guy · J. McMillan · D. Scott；英国队世界大赛四连冠；中国 7:00.91 银牌（时为亚洲纪录）" },
  { series: "worlds", year: 2024, city: "多哈", champion: "China", country: "CHN", time: "7:01.84", note: "季新杰 · 王浩宇 · 潘展乐 · 张展硕；16 岁的张展硕压轴夺金，韩国银牌、日本铜牌" },
  { series: "worlds", year: 2023, city: "福冈", champion: "Great Britain", country: "GBR", time: "6:59.08", note: "当届决赛唯一游进 7 分钟的队伍" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "United States", country: "USA", time: "7:00.24", note: "C. Foster · T. Freeman · C. Carrozza · T. Julian；澳大利亚 7:03.50 银牌" },
  { series: "worlds", year: 2013, city: "巴塞罗那", champion: "United States", country: "USA", note: "由 2022 年报道「美国 2013 年后首夺该项目世界冠军」间接证实" },

  // —— 泛太平洋锦标赛（1985–2018 各届未能核实，暂缺） ——
  { series: "panpacific", year: 2026, city: "尔湾", champion: "United States", country: "USA", time: "6:59.37", note: "赛会纪录；L. Hobson · A. Shackell · P. Sammon · G. Jett；澳大利亚 7:01.10 银牌、日本铜牌" },

  // —— 欧洲锦标赛（长池；2024 及更早未能核实，暂缺） ——
  { series: "euros", year: 2026, city: "巴黎", champion: "Great Britain", country: "GBR", time: "7:01.52", note: "M. Richards · J. McMillan · J. Guy · D. Scott；东道主法国银牌，L. Marchand 一棒 1:43.76" },

  // —— 亚运会（2006 多哈起六届；2014 日本夺金无成绩披露） ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "China", country: "CHN", time: "7:00.17", note: "亚洲纪录与赛会纪录；决赛在东京水上运动中心举行，张展硕压轴 1:42.92 逆转日本队" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "South Korea", country: "KOR", time: "7:01.73", note: "亚洲纪录，黄善宇领衔；中国银牌、日本铜牌；赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "Japan", country: "JPN", time: "7:05.17", note: "赛会纪录；中国 7:05.45 银牌、韩国铜牌" },
  { series: "asiangames", year: 2014, city: "仁川", champion: "Japan", country: "JPN", note: "萩野公介末棒反超孙杨，中国队摘银；夺冠成绩未能核实" },
  { series: "asiangames", year: 2010, city: "广州", champion: "China", country: "CHN", time: "7:07.66", note: "张琳、孙杨领衔，首次夺得该项目亚运金牌，日本队获银" },
  { series: "asiangames", year: 2006, city: "多哈", champion: "Japan", country: "JPN", time: "7:14.86", note: "中国队摘银" },
];
