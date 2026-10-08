import type { SwimEvent } from "@/lib/types";

/**
 * 女子 200 米蝶泳（长池）世界纪录演进
 * 主要来源：World Aquatics / SwimSwam / Swimming World / Olympics.com / 芝加哥论坛报 / ISHOF
 * 对各次破纪录报道的直接检索核实；历史前十为已双源核实的成绩集合。
 *
 * 已知缺口与说明：
 * - 早期演进（1957–1972 年首纪录，以及 1972–1979、2000–2005 等区间内可能存在的中间纪录）
 *   未能逐条双源核实，未收录，宁缺毋滥。
 * - 莫尔 2:15.57（1972 慕尼黑奥运决赛）与耶德热扎茨卡 2:05.61（2005 蒙特利尔世锦赛决赛）
 *   的具体日期未核实到日，分别记为 1972-08 与 2005-07。
 * - 米格 2:07.01（1979）的具体日期与赛事未核实，仅记年份。
 * - 米格 2:05.96 的日期，Swimming World 回顾文作 1981-08-13，SwimSwam 一处作 1981-08-11，
 *   本表取资料更详的 8 月 13 日，矛盾记录在案。
 * 数据截至：2026年10月
 */
export const womens200mButterfly: SwimEvent = {
  slug: "womens-200m-butterfly",
  stroke: "butterfly",
  distance: 200,
  gender: "women",
  course: "LCM",
  name: "女子 200 米蝶泳",
  summary:
    "从米格1981年「提前一个时代」的2:05.96，到刘子歌济南全运会快速泳衣时代的2:01.81，再到麦金托什2026年多伦多之夜的2:01.65——这项女子泳坛最古老的世界纪录，等了十七年才等到改写它的人。焦刘洋的伦敦金牌与张雨霏的东京奥运纪录，是这条线上最亮的中国刻度。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "2:15.57", holder: "Karen Moe", country: "USA", date: "1972-08", meet: "慕尼黑奥运会", place: "慕尼黑", note: "奥运决赛创世界纪录，美国包揽领奖台" },
    { time: "2:09.87", holder: "Andrea Pollack", country: "GDR", date: "1976-07-19", meet: "蒙特利尔奥运会", place: "蒙特利尔", note: "15岁的波拉克一破近6秒" },
    { time: "2:07.01", holder: "Mary T. Meagher", country: "USA", date: "1979", note: "16岁首破世界纪录；具体日期与赛事待核" },
    { time: "2:05.96", holder: "Mary T. Meagher", country: "USA", date: "1981-08-13", meet: "美国全国锦标赛", place: "布朗迪尔", note: "「提前一个时代的成绩」，保持近19年" },
    { time: "2:05.81", holder: "Susie O'Neill", country: "AUS", date: "2000-05-17", meet: "澳大利亚奥运选拔赛", place: "悉尼", note: "终结米格近19年的垄断" },
    { time: "2:05.61", holder: "Otylia Jędrzejczak", country: "POL", date: "2005-07", meet: "世界锦标赛", place: "蒙特利尔" },
    { time: "2:05.40", holder: "Jessicah Schipper", country: "AUS", date: "2006-08-18", meet: "泛太平洋锦标赛", place: "维多利亚" },
    { time: "2:04.18", holder: "Liu Zige", country: "CHN", date: "2008-08-14", meet: "北京奥运会", place: "北京", note: "中国游泳在本土奥运会的唯一游泳金牌；焦刘洋同获银牌" },
    { time: "2:03.41", holder: "Jessicah Schipper", country: "AUS", date: "2009-07-30", meet: "世界锦标赛", place: "罗马", note: "决赛前三名均破原世界纪录（刘子歌2:03.90第二）" },
    { time: "2:01.81", holder: "Liu Zige", country: "CHN", date: "2009-10-21", meet: "第十一届全国运动会", place: "济南", note: "比原纪录快1.60秒；快速泳衣时代留给未来的最后遗产" },
    { time: "2:01.65", holder: "Summer McIntosh", country: "CAN", date: "2026-07-05", meet: "加拿大游泳选拔赛", place: "多伦多", note: "现世界纪录；终结女子泳坛最古老的世界纪录" },
  ],

  asianRecord: {
    time: "2:01.81", holder: "Liu Zige", country: "CHN",
    date: "2009-10-21", meet: "第十一届全国运动会", place: "济南",
    wr: true, note: "自2009年10月起保持至2026年7月（其间为世界纪录），至今仍为亚洲纪录",
  },
  chineseRecord: {
    time: "2:01.81", holder: "Liu Zige", country: "CHN",
    date: "2009-10-21", meet: "第十一届全国运动会", place: "济南",
  },

  top10: [
    { time: "2:01.65", holder: "Summer McIntosh", country: "CAN", date: "2026-07-05", meet: "加拿大游泳选拔赛", place: "多伦多", wr: true },
    { time: "2:01.81", holder: "Liu Zige", country: "CHN", date: "2009-10-21", meet: "第十一届全国运动会", place: "济南" },
    { time: "2:01.99", holder: "Summer McIntosh", country: "CAN", date: "2025-07-31", meet: "2025年新加坡世锦赛", place: "新加坡", note: "当时历史第二快" },
    { time: "2:03.03", holder: "Summer McIntosh", country: "CAN", date: "2024-08-01", meet: "巴黎奥运会", place: "巴黎" },
    { time: "2:03.41", holder: "Jessicah Schipper", country: "AUS", date: "2009-07-30", meet: "2009年罗马世锦赛", place: "罗马" },
    { time: "2:03.84", holder: "Regan Smith", country: "USA", date: "2024-08-01", meet: "巴黎奥运会", place: "巴黎", note: "美国纪录" },
    { time: "2:03.86", holder: "Zhang Yufei", country: "CHN", date: "2021-07-29", meet: "东京奥运会", place: "东京", note: "奥运纪录（中国纪录）" },
    { time: "2:03.90", holder: "Liu Zige", country: "CHN", date: "2009-07-30", meet: "2009年罗马世锦赛", place: "罗马" },
    { time: "2:04.06", holder: "Summer McIntosh", country: "CAN", date: "2023-07-27", meet: "2023年福冈世锦赛", place: "福冈", note: "世界青年纪录" },
    { time: "2:04.18", holder: "Liu Zige", country: "CHN", date: "2008-08-14", meet: "北京奥运会", place: "北京" },
  ],
  top10Note:
    "仅收经双源核实的成绩；2009年罗马决赛焦刘洋（铜牌）成绩、贝尔蒙特2016里约夺冠成绩等2:04区间成绩未逐条核实，未列入。第10位之后紧随的有焦刘洋2:04.40（伦敦奥运，奥运纪录）等。",

  history: [
    {
      heading: "从科克到米格：一项纪录的两种命运",
      paragraphs: [
        "1968年墨西哥城，女子200米蝶泳首次进入奥运会，荷兰的阿达·科克以2:24.7登顶；1972年慕尼黑，美国的卡伦·莫在决赛游出2:15.57刷新世界纪录并带领美国包揽领奖台。此后是东德的年代：1976年蒙特利尔，15岁的安德烈娅·波拉克把纪录砍到2:09.87，1980年莫斯科盖斯勒以2:08.09夺金——这些成绩同样被笼罩在东德系统性用药的阴影之下。",
        "1979年，16岁的玛丽·T·米格以2:07.01首破世界纪录，1981年8月又在布朗迪尔游出2:05.96——一个「提前了一个时代的成绩」。它保持了近19年，直到2000年5月17日才被澳大利亚的苏茜·奥尼尔在奥运选拔赛上以0.15秒之差改写；同年的悉尼奥运会，奥尼尔却在主场被美国姑娘米丝蒂·海曼爆冷掀翻（2:05.88，奥运纪录）。",
      ],
    },
    {
      heading: "中国时代：水立方到济南",
      paragraphs: [
        "2005年蒙特利尔，波兰的奥蒂莉亚·耶德热扎茨卡以2:05.61打破世界纪录，翌年施佩尔在泛太锦标赛推进到2:05.40。真正的地震发生在2008年8月14日的水立方：刘子歌以2:04.18打破世界纪录夺金——那是中国游泳在北京奥运会的唯一一枚游泳金牌，焦刘洋同获银牌。",
        "2009年的快速泳衣把这项目推向失控：7月罗马世锦赛，施佩尔决赛游出2:03.41，刘子歌（2:03.90）与焦刘洋同场将原纪录甩在身后；三个月后的济南全运会，刘子歌再砍1.60秒，游出2:01.81——这个成绩在之后的十七年里无人接近，成为女子泳坛最后一项「快速泳衣时代」的世界纪录。此后中国姑娘继续书写：焦刘洋2011年世锦赛（2:05.55）与2012年伦敦奥运（2:04.40，奥运纪录）接连登顶，刘子歌2013年再夺世锦赛金牌。",
      ],
    },
    {
      heading: "麦金托什与「不可打破」的终结",
      paragraphs: [
        "2015至2019年，星奈津美、贝尔蒙特（2016里约、2017布达佩斯）、卡帕什轮流坐庄，却无人能撼动2:01.81。2021年东京，张雨霏以2:03.86打破奥运纪录夺金，并在同一上午连夺4×200自由泳接力世界纪录金牌；2022年布达佩斯，15岁的萨默·麦金托什以2:05.20拿下个人首项世界冠军，宣告换代。",
        "此后是麦金托什的独奏：2023福冈2:04.06、2024巴黎2:03.03（奥运纪录，史密斯2:03.84获银）、2025新加坡2:01.99——离那个「不可打破」的数字只差0.18秒；2026年7月5日多伦多，她在加拿大选拔赛游出2:01.65，终结了女子泳坛最古老的世界纪录。而中国的下一棒已经交出：2026年名古屋亚运，13岁的于子迪以2:05.08（赛会纪录）夺金，中国女子蝶泳的新旧交替悄然完成。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：World record progression 200 metres butterfly",
      url: "https://en.wikipedia.org/wiki/World_record_progression_200_metres_butterfly",
    },
    {
      label: "World Aquatics：麦金托什攻克「不可打破」的200蝶世界纪录",
      url: "https://www.worldaquatics.com/news/4532555/summer-mcintosh-conquers-the-once-unbreakable-200m-butterfly-world-record",
    },
    {
      label: "SwimSwam：Summer McIntosh Shatters 200 Fly World Record in 2:01.65",
      url: "https://swimswam.com/summer-mcintosh-shatters-200-fly-world-record-in-201-65-ending-oldest-wr-in-womens-swimming",
    },
    {
      label: "Olympics.com：张雨霏东京夺金",
      url: "https://www.olympics.com/en/news/zhang-yufei-wins-gold-in-womens-200m-butterfly",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
  ],
};
