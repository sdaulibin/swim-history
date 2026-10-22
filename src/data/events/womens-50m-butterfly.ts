import type { SwimEvent } from "@/lib/types";

/**
 * 女子 50 米蝶泳（长池）世界纪录演进
 * 数据来源：Wikipedia「50 metres butterfly」演进表（逐行核对）、
 * World Aquatics 官方纪录、各届世锦赛官方成绩页
 * 数据截至：2026年10月
 *
 * 说明（宁缺毋滥）：
 *  - 本站旧版把舍斯特伦 24.43 按年份精度收录，现已核实为
 *    2014-07-05 瑞典全国锦标赛（布罗斯）；
 *  - 50 米蝶泳不是奥运会项目，世锦赛（2001 年起）与欧锦赛是最高舞台；
 *  - 亚洲纪录为张雨霏 25.05（2023 福冈世锦赛）。
 */
export const womens50mButterfly: SwimEvent = {
  slug: "womens-50m-butterfly",
  stroke: "butterfly",
  distance: 50,
  gender: "women",
  course: "LCM",
  name: "女子 50 米蝶泳",
  summary:
    "24.43——2014年7月5日的布罗斯，萨拉·舍斯特伦在瑞典全国锦标赛上写下的一行数字，十二年后仍是女子泳坛最坚固的世界纪录之一。她在这个项目上拿过六枚世锦赛金牌，而这个数字，比她的金牌更难被超越。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "26.54", holder: "Inge de Bruijn", country: "NED", date: "1999-06-18", meet: "荷兰全国锦标赛", place: "阿默斯福特", note: "女子50米蝶泳首个世界纪录" },
    { time: "26.39", holder: "Anna-Karin Kammerling", country: "SWE", date: "1999-07-01", meet: "瑞典全国锦标赛", place: "哈尔姆斯塔德" },
    { time: "26.29", holder: "Anna-Karin Kammerling", country: "SWE", date: "1999-07-27", meet: "欧洲游泳锦标赛", place: "伊斯坦布尔" },
    { time: "25.83", holder: "Inge de Bruijn", country: "NED", date: "2000-05-20", meet: "地中海系列赛", place: "蒙特卡洛", flags: ["h"] },
    { time: "25.64", holder: "Inge de Bruijn", country: "NED", date: "2000-05-26", meet: "超级 Speedo 大奖赛", place: "谢菲尔德", flags: ["h"] },
    { time: "25.57", holder: "Anna-Karin Kammerling", country: "SWE", date: "2002-07-30", meet: "欧洲游泳锦标赛", place: "柏林" },
    { time: "25.46", holder: "Therese Alshammar", country: "SWE", date: "2007-06-13", meet: "地中海系列赛", place: "巴塞罗那" },
    { time: "25.33", holder: "Marleen Veldhuis", country: "NED", date: "2009-04-19", meet: "阿姆斯特丹游泳杯", place: "阿姆斯特丹" },
    { time: "25.28", holder: "Marleen Veldhuis", country: "NED", date: "2009-07-31", meet: "世界锦标赛", place: "罗马", flags: ["sf"] },
    { time: "25.07", holder: "Therese Alshammar", country: "SWE", date: "2009-07-31", meet: "世界锦标赛", place: "罗马", flags: ["sf"], note: "同一天同一池，两破纪录" },
    { time: "24.43", holder: "Sarah Sjöström", country: "SWE", date: "2014-07-05", meet: "瑞典全国锦标赛", place: "布罗斯", note: "现世界纪录——悬置十二年" },
  ],

  asianRecord: {
    time: "25.05", holder: "Zhang Yufei", country: "CHN",
    date: "2023-07-29", meet: "世界锦标赛",
    note: "张雨霏 2023 福冈世锦赛 25.05 夺银并创亚洲纪录；2026 名古屋亚运 25.41 夺冠",
  },
  chineseRecord: {
    time: "25.05", holder: "Zhang Yufei", country: "CHN",
    date: "2023-07-29", meet: "世界锦标赛",
    note: "此前陆滢 25.42（2013 巴塞罗那世锦赛）为旧纪录",
  },

  top10: [
    { time: "24.43", holder: "Sarah Sjöström", country: "SWE", date: "2014-07-05", meet: "2014年瑞典全国锦标赛", wr: true, note: "现世界纪录" },
    { time: "24.60", holder: "Sarah Sjöström", country: "SWE", date: "2017-07-29", meet: "2017年布达佩斯世锦赛", note: "世锦赛纪录" },
    { time: "24.63", holder: "Sarah Sjöström", country: "SWE", date: "2024-02-18", meet: "2024年多哈世锦赛" },
    { time: "24.77", holder: "Sarah Sjöström", country: "SWE", date: "2023-07-29", meet: "2023年福冈世锦赛" },
    { time: "24.83", holder: "Gretchen Walsh", country: "USA", date: "2025-08-02", meet: "2025年新加坡世锦赛" },
    { time: "24.95", holder: "Sarah Sjöström", country: "SWE", date: "2022-06-18", meet: "2022年布达佩斯世锦赛" },
    { time: "24.96", holder: "Sarah Sjöström", country: "SWE", date: "2015-08-08", meet: "2015年喀山世锦赛" },
    { time: "25.02", holder: "Sarah Sjöström", country: "SWE", date: "2019-07-27", meet: "2019年光州世锦赛" },
    { time: "25.05", holder: "Zhang Yufei", country: "CHN", date: "2023-07-29", meet: "2023年福冈世锦赛", note: "亚洲纪录" },
    { time: "25.07", holder: "Therese Alshammar", country: "SWE", date: "2009-07-31", meet: "2009年罗马世锦赛（半决赛）" },
  ],
  top10Note:
    "前十门槛 25.07，舍斯特伦独占七席——这个项目几乎是她一个人的纪元。亚洲与中国的最好刻度是张雨霏的 25.05（2023 福冈），位列历史第九。",

  history: [
    {
      heading: "1999：女子五十蝶的零年",
      paragraphs: [
        "女子 50 米蝶泳的世界纪录从 1999 年才开始：6 月 18 日阿默斯福特，英格·德布鲁因游出 26.54；两个月内，瑞典的安娜-卡琳·卡默林两次改写。2000 年 5 月，德布鲁因在蒙特卡洛与谢菲尔德两天一破，把纪录带到 25.64。",
        "2002 年柏林欧锦赛，卡默林 25.57；2007 年巴塞罗那，阿尔沙马尔 25.46；2009 年 4 月，费尔杜伊斯在阿姆斯特丹首次游进 25.4。2009 年 7 月 31 日的罗马世锦赛半决赛更戏剧化：费尔杜伊斯先在第二组游出 25.28，几分钟后阿尔沙马尔在另一组游出 25.07——同一天、同一泳池，两破纪录。",
      ],
    },
    {
      heading: "舍斯特伦的 24.43",
      paragraphs: [
        "2014 年 7 月 5 日，布罗斯，瑞典全国锦标赛。萨拉·舍斯特伦游出 24.43——在那个连快速泳衣都已禁用的年代，这个数字显得不可思议。此后十二年的世锦赛，她拿下六枚 50 蝶金牌（2015、2017、2019、2022、2023、2024），把世锦赛纪录推进到 24.60。",
        "24.43 距 24 秒只差 0.43，却始终无人触及。2025 年新加坡，沃尔什以 24.83 夺冠——快，但离那道墙还有 0.40 秒。",
      ],
    },
    {
      heading: "亚洲的一池蝶",
      paragraphs: [
        "中国选手在这个项目上留下的刻度清晰：2001 年周雅菲在罗马世锦赛 25.57 拿铜；2013 年陆滢在巴塞罗那以 25.42 创亚洲纪录、2014 年仁川亚运 25.83 夺金；2023 年福冈，张雨霏以 25.05 刷新亚洲纪录并摘银——仅落后舍斯特伦 0.28 秒。",
        "2023 年杭州亚运，张雨霏以 25.10 破赛会纪录夺金；2026 年名古屋亚运，她再度以 25.41 卫冕。亚洲的蝶，仍在向 24 秒的山顶缓慢攀爬。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：50 metres butterfly（世界纪录演进表）",
      url: "https://en.wikipedia.org/wiki/50_metres_butterfly",
    },
    {
      label: "Wikipedia：List of World Aquatics Championships medalists in swimming (women)",
      url: "https://en.wikipedia.org/wiki/List_of_World_Aquatics_Championships_medalists_in_swimming_(women)",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
  ],
};
