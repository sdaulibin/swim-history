import type { ChampionEntry } from "@/lib/types";

/**
 * 男女混合 4×100 米混合泳接力 · 历届大赛冠军
 * champion 字段按站点接力项目惯例使用国家英文名。
 * 数据来源：Wikipedia 各届世锦赛/奥运会/亚运总览页成绩表逐行核对
 * 说明（宁缺毋滥）：
 *  - 混合接力 2015 年喀山世锦赛首次设项，故世锦赛自 2015 年起收录；
 *  - 奥运会：2020 东京首次设项，2 届全部收录；
 *  - 泛太平洋 / 欧洲锦标赛：暂未收录；
 *  - 亚运会：2018 雅加达起三届全部收录。
 */
export const mixed4x100mMedleyRelayChampions: ChampionEntry[] = [
  // —— 奥运会 ——
  { series: "olympics", year: 2024, city: "巴黎", champion: "United States", country: "USA", time: "3:37.43", wr: true, note: "墨菲·芬克·沃尔什·赫斯克；破世界纪录；中国队3:37.55银并创亚洲纪录" },
  { series: "olympics", year: 2020, city: "东京", champion: "Great Britain", country: "GBR", time: "3:37.58", wr: true, note: "混合接力的奥运首金兼破世界纪录；赛事于2021年举行" },

  // —— 世界锦标赛 ——
  { series: "worlds", year: 2025, city: "新加坡", champion: "Neutral Athletes B", country: "RUS", time: "3:37.97", note: "中立运动员B队（利芬采夫·普里戈达·克莱皮科娃·特罗菲莫娃）；破赛会纪录；中国队3:39.99银" },
  { series: "worlds", year: 2024, city: "多哈", champion: "United States", country: "USA", time: "3:40.22" },
  { series: "worlds", year: 2023, city: "福冈", champion: "China", country: "CHN", time: "3:38.57", note: "徐嘉余·覃海洋·张雨霏·程玉洁；中国混合接力的首枚世锦赛金牌" },
  { series: "worlds", year: 2022, city: "布达佩斯", champion: "United States", country: "USA", time: "3:38.79" },
  { series: "worlds", year: 2019, city: "光州", champion: "Australia", country: "AUS", time: "3:39.08", note: "拉金·威尔逊·麦基恩·坎贝尔" },
  { series: "worlds", year: 2017, city: "布达佩斯", champion: "United States", country: "USA", time: "3:38.56", wr: true, note: "同日预赛3:40.28、决赛3:38.56，两次改写世界纪录" },
  { series: "worlds", year: 2015, city: "喀山", champion: "Great Britain", country: "GBR", time: "3:41.71", wr: true, note: "混合接力设项首金兼破世界纪录" },

  // —— 亚运会 ——
  { series: "asiangames", year: 2026, city: "名古屋", champion: "China", country: "CHN", time: "3:40.38", note: "亚运三连冠" },
  { series: "asiangames", year: 2022, city: "杭州", champion: "China", country: "CHN", time: "3:37.73", note: "破赛会纪录；赛事于2023年举行" },
  { series: "asiangames", year: 2018, city: "雅加达", champion: "China", country: "CHN", time: "3:40.45", note: "混合接力亚运设项首金" },
];
