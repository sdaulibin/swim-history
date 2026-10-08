import type { SwimEvent } from "@/lib/types";

/**
 * 女子 200 米仰泳（长池）世界纪录演进
 * 数据来源：Wikipedia "World record progression 200 metres backstroke"、
 *   SwimSwam / ESPN / Swimming World / LA Times / ISHOF / CGTN 等单行报道
 * 数据截至：2026年10月
 *
 * 核实说明（宁缺毋滥）：
 * 1. 1980 年之前的行次（贝尔罗特 1972 年代等）未能逐条双源核实，暂缺；
 *    Jezek 2:11.93（1978）仅见 ISHOF 单源转述，未单列。
 * 2. 中文资料中「贺慈红 2:07.40 世界纪录（1994）」与埃盖尔塞吉 2:06.62（1991雅典）
 *    的时间线矛盾（疑为短池世界纪录或中国口径），未收录。
 * 3. 2026 年泛太平洋（尔湾）、欧锦赛（巴黎）两站本项结果未能核实（检索通道受限）。
 */
export const womens200mBackstroke: SwimEvent = {
  slug: "womens-200m-backstroke",
  stroke: "backstroke",
  distance: 200,
  gender: "women",
  course: "LCM",
  name: "女子 200 米仰泳",
  summary:
    "埃盖尔塞吉1991年的2:06.62矗立了近17年，科文垂与快速泳衣把它压到2:04.81，富兰克林2012年游出2:04.06，麦基翁2023年3月定格在2:03.14。名古屋亚运会上彭旭玮的2:05.77，则为中国改写了尘封16年的亚洲纪录。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "2:11.77", holder: "Rica Reinisch", country: "GDR", date: "1980-07", meet: "奥运会决赛", place: "莫斯科", note: "破 Jezek 2:11.93；单源（ISHOF）待二次核对" },
    { time: "2:08.60", holder: "Betsy Mitchell", country: "USA", date: "1986-06", note: "据 LA Times 1991 年报道" },
    { time: "2:06.62", holder: "Krisztina Egerszegi", country: "HUN", date: "1991-08-25", meet: "欧洲锦标赛", place: "雅典", note: "保持近17年，直至2008年才被改写" },
    { time: "2:06.39", holder: "Kirsty Coventry", country: "ZIM", date: "2008-02", meet: "密苏里大奖赛", note: "首破埃盖尔塞吉纪录" },
    { time: "2:06.09", holder: "Margaret Hoelzer", country: "USA", date: "2008-07-05", meet: "美国奥运选拔赛", place: "奥马哈" },
    { time: "2:05.24", holder: "Kirsty Coventry", country: "ZIM", date: "2008-08-16", meet: "奥运会决赛", place: "北京", note: "卫冕奥运冠军" },
    { time: "2:04.81", holder: "Kirsty Coventry", country: "ZIM", date: "2009-08-01", meet: "世界锦标赛决赛", place: "罗马", note: "祖耶娃同场2:04.94亦快于原纪录" },
    { time: "2:04.06", holder: "Missy Franklin", country: "USA", date: "2012-08", meet: "奥运会决赛", place: "伦敦" },
    { time: "2:03.35", holder: "Regan Smith", country: "USA", date: "2019-07-26", meet: "世界锦标赛半决赛", place: "光州", flags: ["sf"], note: "17岁，削掉富兰克林保持7年的纪录" },
    { time: "2:03.14", holder: "Kaylee McKeown", country: "AUS", date: "2023-03-10", meet: "澳大利亚锦标赛", place: "黄金海岸", note: "现世界纪录；领先第二名7秒以上夺冠" },
  ],

  asianRecord: {
    time: "2:05.77", holder: "Peng Xuwei", country: "CHN",
    date: "2026-09", meet: "名古屋亚运会", place: "名古屋",
    note: "2026年9月22日决赛，破赵菁2009年创造的2:06.46（尘封16年）并卫冕",
  },
  chineseRecord: {
    time: "2:05.77", holder: "Peng Xuwei", country: "CHN",
    date: "2026-09", meet: "名古屋亚运会", place: "名古屋",
    note: "兼亚洲纪录；原纪录赵菁2:06.46（2009年）",
  },

  top10: [
    { time: "2:03.14", holder: "Kaylee McKeown", country: "AUS", date: "2023-03-10", meet: "澳大利亚锦标赛", place: "黄金海岸", wr: true },
    { time: "2:03.33", holder: "Kaylee McKeown", country: "AUS", date: "2025-08-02", meet: "2025年新加坡世锦赛", note: "赛会纪录" },
    { time: "2:03.35", holder: "Regan Smith", country: "USA", date: "2019-07-26", meet: "2019年光州世锦赛半决赛", flags: ["sf"], note: "时为世界纪录" },
    { time: "2:03.69", holder: "Regan Smith", country: "USA", date: "2019-07-27", meet: "2019年光州世锦赛决赛" },
    { time: "2:03.73", holder: "Kaylee McKeown", country: "AUS", date: "2024-08-02", meet: "2024年巴黎奥运会决赛", note: "奥运纪录" },
    { time: "2:03.85", holder: "Kaylee McKeown", country: "AUS", date: "2023-07", meet: "2023年福冈世锦赛" },
    { time: "2:04.06", holder: "Missy Franklin", country: "USA", date: "2012-08", meet: "2012年伦敦奥运会决赛", note: "时为世界纪录" },
    { time: "2:04.29", holder: "Regan Smith", country: "USA", date: "2025-08-02", meet: "2025年新加坡世锦赛", note: "决赛负于麦基翁获银" },
    { time: "2:04.81", holder: "Kirsty Coventry", country: "ZIM", date: "2009-08-01", meet: "2009年罗马世锦赛决赛", note: "时为世界纪录" },
    { time: "2:04.94", holder: "Anastasia Zuyeva", country: "RUS", date: "2009-08-01", meet: "2009年罗马世锦赛决赛" },
  ],
  top10Note:
    "第10位之后（科文垂2:05.24、Curzan与彭旭玮的2:05.77等）未入榜；其余未能双源核实的成绩一律不收，宁缺毋滥。",

  history: [
    {
      heading: "女王埃盖尔塞吉",
      paragraphs: [
        "1988年汉城，14岁的埃盖尔塞吉以2:09.29夺冠，成为奥运游泳史上最年轻的冠军；1991年8月雅典欧锦赛，她把世界纪录改写为2:06.62；1992年巴塞罗那，她以2:07.06、领先4.15秒的悬殊优势卫冕，1996年亚特兰大又完成三连冠。",
        "2:06.62这块刻度矗立了近17年，是女子泳池最顽固的堡垒之一。",
      ],
    },
    {
      heading: "科文垂、快速泳衣与富兰克林",
      paragraphs: [
        "2008年2月，科文垂在密苏里大奖赛游出2:06.39首破尘封纪录；7月奥马哈选拔赛，霍尔泽2:06.09再下一城；8月北京决赛，科文垂2:05.24卫冕。一年后罗马，她以2:04.81撞开2:05大门，祖耶娃2:04.94同样快于旧纪录——那是聚氨酯泳衣的极限。",
        "2012年伦敦，17岁的富兰克林以2:04.06把纪录带回「纺织品时代」，并在2011、2013两届世锦赛实现三连冠；此后西博姆2015、2017年两度问鼎。",
      ],
    },
    {
      heading: "麦基翁时代与彭旭玮",
      paragraphs: [
        "2019年光州半决赛，17岁的史密斯游出2:03.35；2023年3月10日黄金海岸，麦基翁以2:03.14登顶并保持至今。东京（2:04.68）、巴黎（2:03.73）两届奥运与2022-2025三届世锦赛（2:05.08、2:03.85、2:03.33），她把该项目的统治延伸了整个奥运周期。",
        "中国方面，赵菁2009年的2:06.46把亚洲纪录尘封了16年，直到2026年9月22日名古屋亚运会——彭旭玮以2:05.77夺冠卫冕，也为中国游泳写下新的亚洲纪录。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：World record progression 200 metres backstroke",
      url: "https://en.wikipedia.org/wiki/World_record_progression_200_metres_backstroke",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
    {
      label: "SwimSwam：麦基翁 2:03.14 破世界纪录（2023澳大利亚锦标赛）",
      url: "https://swimswam.com/kaylee-mckeown-crushes-203-14-200-backstroke-world-record/",
    },
    {
      label: "ESPN：史密斯光州半决赛 2:03.35 破世界纪录",
      url: "https://www.espn.com/",
    },
  ],
};
