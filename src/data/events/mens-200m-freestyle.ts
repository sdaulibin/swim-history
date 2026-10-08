import type { SwimEvent } from "@/lib/types";

/**
 * 男子 200 米自由泳（长池）世界纪录演进
 * 数据来源：Wikipedia "World record progression 200 metres freestyle"
 * 数据截至：2026年7月
 *
 * 空缺区间说明（宁缺毋滥，待补）：
 * - 1905–1972：早期纪录（哈尔迈、韦斯穆勒、罗斯、沙兰德等时代）因来源庞杂、
 *   未能逐条核实精确成绩与日期，暂不收录；
 * - 1973–1988：Furniss（1976 蒙特利尔）、Kopliakov（1980 莫斯科）、
 *   Gross（1983–84 数度改写）等条目同样未能核实精确成绩与日期，暂不收录。
 */
export const mens200mFreestyle: SwimEvent = {
  slug: "mens-200m-freestyle",
  stroke: "freestyle",
  distance: 200,
  gender: "men",
  course: "LCM",
  name: "男子 200 米自由泳",
  summary:
    "中距离的皇冠：施皮茨的1:52.78、索普与范登霍根班德的世纪对决、菲尔普斯的1:42.96，直到2009年比德曼1:42.00——一条悬置近17年、至今无人撼动的门槛。",
  dataAsOf: "2026年7月",
  progression: [
    { time: "1:52.78", holder: "Mark Spitz", country: "USA", date: "1972-08-29", meet: "1972年慕尼黑奥运会", place: "慕尼黑", note: "决赛夺冠成绩" },
    { time: "1:47.25", holder: "Duncan Armstrong", country: "AUS", date: "1988-09-19", meet: "1988年汉城奥运会", place: "汉城", note: "决赛后半程发力爆冷，改写格罗斯保持的世界纪录" },
    { time: "1:46.51", holder: "Giorgio Lamberti", country: "ITA", date: "1991-01-06", meet: "世界锦标赛", place: "珀斯", note: "决赛成绩；此后该纪录沉寂八年" },
    { time: "1:46.00", holder: "Ian Thorpe", country: "AUS", date: "1999-08-24", meet: "泛太平洋锦标赛", place: "悉尼", flags: ["h"], note: "预赛即打破兰贝蒂八年的纪录" },
    { time: "1:45.51", holder: "Ian Thorpe", country: "AUS", date: "1999-08-24", meet: "泛太平洋锦标赛", place: "悉尼", note: "同日决赛再破" },
    { time: "1:45.35", holder: "Pieter van den Hoogenband", country: "NED", date: "2000-09-18", meet: "2000年悉尼奥运会", place: "悉尼", flags: ["sf"], note: "半决赛；次日在决赛中击败主场作战的索普夺冠" },
    { time: "1:44.71", holder: "Ian Thorpe", country: "AUS", date: "2001-07-24", meet: "世界锦标赛", place: "福冈", note: "决赛夺冠成绩" },
    { time: "1:43.86", holder: "Michael Phelps", country: "USA", date: "2007-03-27", meet: "世界锦标赛", place: "墨尔本", note: "打破索普保持近六年的纪录；首位游进1:44的选手" },
    { time: "1:42.96", holder: "Michael Phelps", country: "USA", date: "2008-08-12", meet: "2008年北京奥运会", place: "北京", note: "决赛夺冠；人类首次突破1:43" },
    { time: "1:42.00", holder: "Paul Biedermann", country: "GER", date: "2009-07-28", meet: "世界锦标赛", place: "罗马", note: "身着聚氨酯泳衣击败菲尔普斯；现世界纪录，至今未被打破" },
  ],

  asianRecord: {
    time: "1:43.49", holder: "Zhang Zhanshuo", country: "CHN",
    date: "2026-09", meet: "名古屋亚运会",
    note: "决赛刷新亚洲纪录",
  },
  chineseRecord: {
    time: "1:43.49", holder: "Zhang Zhanshuo", country: "CHN",
    date: "2026-09", meet: "名古屋亚运会",
  },


  top10: [
    { time: "1:42.00", holder: "Paul Biedermann", country: "GER", date: "2009-07-28", meet: "2009年罗马世锦赛", wr: true },
    { time: "1:42.96", holder: "Michael Phelps", country: "USA", date: "2008-08", meet: "2008年北京奥运会" },
    { time: "1:42.97", holder: "David Popovici", country: "ROU", date: "2022-08-15", meet: "2022年罗马欧锦赛", note: "纺织品泳衣时代最快" },
    { time: "1:43.14", holder: "Yannick Agnel", country: "FRA", date: "2012-07", meet: "2012年伦敦奥运会" },
    { time: "1:43.49", holder: "Zhang Zhanshuo", country: "CHN", date: "2026-09", meet: "名古屋亚运会", note: "亚洲纪录" },
    { time: "1:43.86", holder: "Michael Phelps", country: "USA", date: "2007-07", meet: "2007年墨尔本世锦赛" },
    { time: "1:44.22", holder: "Tom Dean", country: "GBR", date: "2021-07", meet: "2020年东京奥运会" },
    { time: "1:44.30", holder: "Matthew Richards", country: "GBR", date: "2023-07-25", meet: "2023年福冈世锦赛" },
    { time: "1:44.32", holder: "Tom Dean", country: "GBR", date: "2023-07-25", meet: "2023年福冈世锦赛" },
    { time: "1:44.39", holder: "Sun Yang", country: "CHN", date: "2017-07", meet: "2017年布达佩斯世锦赛" },
  ],
  top10Note:
    "黄善宇1:44.42（2023杭州亚运）、孙杨1:44.65（2016里约）、索普1:44.71（2001/2004两游）紧随其后未入列；另有比德曼1:42.81、波波维奇1:43.13的说法待核，未采信。",

  history: [
    {
      heading: "迟到六十年的奥运项目",
      paragraphs: [
        "与100米、1500米自由泳不同，男子200米自由泳直到1968年墨西哥城奥运会才首次进入奥运大家庭——此时距离1896年雅典已有七十二年。此前半个多世纪，该项目的世界纪录在表演赛、独立赛事与码制泳池之间流转，韦斯穆勒等一代代名将都曾榜上有名（早期条目来源庞杂，本站进度表暂未收录）。",
        "墨西哥城的高原泳池里，澳大利亚人迈克尔·温登包揽100米、200米自由泳两金，1:55.2为项目写下第一条奥运纪录。四年后的慕尼黑，马克·施皮茨以1:52.78夺冠——这是他七金之旅中的一站，这条纪录也在表上停驻多年。",
      ],
    },
    {
      heading: "巨人的肩膀",
      paragraphs: [
        "1976年蒙特利尔，美国人布鲁斯·弗尼斯登顶；1980年莫斯科，金牌归了苏联人谢尔盖·科普利亚科夫。1984年洛杉矶，「信天翁」迈克尔·格罗斯——那位臂展惊人的西德人——加冕200自，同届还带走100蝶金牌，把项目带入「1:47时代」。",
        "1988年汉城，澳大利亚人邓肯·阿姆斯特朗在决赛后半程突然发力，1:47.25爆冷改写世界纪录，成为澳式「以弱胜强」的经典一课。1991年1月的珀斯，意大利人乔治·兰贝蒂以1:46.51再进一步——此后，这条曲线安静了整整八年。",
      ],
    },
    {
      heading: "索普、范登霍根班德与世纪之战",
      paragraphs: [
        "1999年8月的悉尼泛太平洋锦标赛，16岁的伊恩·索普在预赛便游出1:46.00，把兰贝蒂的八年纪录归零，同日的决赛再以1:45.51收官。一年后的悉尼奥运会，主场作战的索普却在半决赛遭到皮特·范登霍根班德1:45.35的偷袭，决赛荷兰人再度胜出——在十万东道主观众面前掀翻「索普王朝」。",
        "2001年福冈，索普以1:44.71夺回纪录；2003年巴塞罗那他实现世锦赛卫冕。2004年雅典的「世纪之战」，他与范登霍根班德、迈克尔·菲尔普斯同池对决，1:44.71追平自己的世界纪录夺金。2007年墨尔本，菲尔普斯以1:43.86终结「索普纪元」。",
      ],
    },
    {
      heading: "快速泳衣的绝唱",
      paragraphs: [
        "2008年8月的北京，菲尔普斯的八金征途接连摘下两枚自由泳金牌：8月11日的4×100米自由泳接力（莱扎克神奇一棒），以及次日的200米自由泳——1:42.96，人类首次突破1:43。2009年7月28日的罗马，身着聚氨酯泳衣的德国人保罗·比德曼以1:42.00将菲尔普斯拉下王座——这成为「塑料时代」的最后注脚，2010年1月起非织物泳衣被全面禁止。",
        "此后1:42.00悬置至今：截至2026年7月，它已稳坐近17年。后泳衣时代最快的两次冲线——阿涅尔2012年伦敦的1:43.14、波波维奇2022年罗马欧锦赛的1:43.21——距纪录仍有超过1.1秒。",
      ],
    },
    {
      heading: "中国时刻与等待下一个1:42",
      paragraphs: [
        "2016年里约，孙杨以1:44.39成为首位夺得男子200自奥运金牌的亚洲选手；2017年布达佩斯、2019年光州两届世锦赛，他又两度登顶，完成奥运加世锦赛的世界大赛三连冠。2021年东京，汤姆·迪恩（1:44.22）与同胞包揽金银；2024年巴黎，大卫·波波维奇（1:44.72）终于加冕。",
        "从温登到波波维奇，半个多世纪里奥运冠军的成绩始终在1:44—1:46之间徘徊，而1:42.00仍矗立如山——它是这张表上等待最久的成绩之一，也是聚氨酯时代留给未来的最后一道门槛。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：World record progression 200 metres freestyle",
      url: "https://en.wikipedia.org/wiki/World_record_progression_200_metres_freestyle",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
  ],
};
