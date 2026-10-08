import type { SwimEvent } from "@/lib/types";

/**
 * 男子 400 米个人混合泳（长池）世界纪录演进
 * 数据来源：Wikipedia "World record progression 400 metres individual medley"
 *          Wikipedia "400 metre individual medley"（历史最快成绩榜，截至 2026 年 6 月）
 * 数据截至：2026年10月
 */
export const mens400mMedley: SwimEvent = {
  slug: "mens-400m-medley",
  stroke: "medley",
  distance: 400,
  gender: "men",
  course: "LCM",
  name: "男子 400 米个人混合泳",
  summary:
    "泳池里最艰苦的项目：四段泳姿、四百余米的无死角较量。从1964年罗斯的4:45.4，经拉尔松、达尔尼、多兰的接力，到菲尔普斯保持15年的4:03.84，最终停在2023年福冈马尔尚的4:02.50。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "5:15.6", holder: "Gary Heinrich", country: "USA", date: "1957-08-27", place: "费城", note: "首个被承认的世界纪录" },
    { time: "5:12.9", holder: "Vladimir Strushanov", country: "URS", date: "1957-10-20", place: "莫斯科" },
    { time: "5:08.8", holder: "Ian Black", country: "GBR", date: "1959-06-06", place: "加的夫" },
    { time: "5:07.8", holder: "George Harrison", country: "USA", date: "1960-06-24", place: "洛杉矶" },
    { time: "5:05.3", holder: "George Harrison", country: "USA", date: "1960-06-24", place: "洛杉矶" },
    { time: "5:04.5", holder: "Dennis Rounsaville", country: "USA", date: "1960-07-22", place: "托莱多" },
    { time: "5:04.3", holder: "Ted Stickles", country: "USA", date: "1961-07-01", place: "芝加哥" },
    { time: "4:55.6", holder: "Ted Stickles", country: "USA", date: "1961-08-18", place: "洛杉矶", note: "一步跨越9秒" },
    { time: "4:53.8", holder: "Gerhard Hetz", country: "FRG", date: "1962-05-24", place: "莫斯科" },
    { time: "4:51.4", holder: "Ted Stickles", country: "USA", date: "1962-06-30", place: "芝加哥" },
    { time: "4:51.0", holder: "Ted Stickles", country: "USA", date: "1962-07-12", place: "路易斯维尔" },
    { time: "4:50.2", holder: "Gerhard Hetz", country: "FRG", date: "1963-10-12", place: "东京" },
    { time: "4:48.6", holder: "Dick Roth", country: "USA", date: "1964-07-31", place: "洛斯阿尔托斯" },
    { time: "4:45.4", holder: "Dick Roth", country: "USA", date: "1964-10-14", meet: "1964年东京奥运会", place: "东京", note: "奥运金牌" },
    { time: "4:45.3", holder: "Andrey Dunayev", country: "URS", date: "1968-04-03", place: "塔林" },
    { time: "4:45.1", holder: "Greg Buckingham", country: "USA", date: "1968-07-06", meet: "圣克拉拉邀请赛", place: "圣克拉拉" },
    { time: "4:43.4", holder: "Gary Hall Sr.", country: "USA", date: "1968-07-20", place: "洛杉矶" },
    { time: "4:43.3", holder: "Charlie Hickcox", country: "USA", date: "1968-08-30", meet: "美国奥运选拔赛", place: "长滩", flags: ["h"] },
    { time: "4:39.0", holder: "Charlie Hickcox", country: "USA", date: "1968-08-30", meet: "美国奥运选拔赛", place: "长滩", note: "同日两破" },
    { time: "4:38.7", holder: "Gary Hall Sr.", country: "USA", date: "1969-07-11", meet: "圣克拉拉邀请赛", place: "圣克拉拉" },
    { time: "4:33.9", holder: "Gary Hall Sr.", country: "USA", date: "1969-08-15", meet: "AAU锦标赛", place: "路易斯维尔" },
    { time: "4:31.0", holder: "Gary Hall Sr.", country: "USA", date: "1970-08-21", meet: "AAU锦标赛", place: "洛杉矶" },
    { time: "4:30.81", holder: "Gary Hall Sr.", country: "USA", date: "1972-08-03", meet: "美国奥运选拔赛", place: "芝加哥" },
    { time: "4:28.89", holder: "András Hargitay", country: "HUN", date: "1974-08-20", meet: "欧洲锦标赛", place: "维也纳" },
    { time: "4:26.00", holder: "Zoltán Verrasztó", country: "HUN", date: "1976-04-02", meet: "AAU室内锦标赛", place: "长滩" },
    { time: "4:23.68", holder: "Rod Strachan", country: "USA", date: "1976-07-25", meet: "1976年蒙特利尔奥运会", place: "蒙特利尔", note: "奥运金牌" },
    { time: "4:23.39", holder: "Jesse Vassallo", country: "USA", date: "1978-08-04", meet: "AAU锦标赛", place: "伍德兰兹" },
    { time: "4:20.05", holder: "Jesse Vassallo", country: "USA", date: "1978-08-28", meet: "世界锦标赛", place: "西柏林" },
    { time: "4:19.78", holder: "Ricardo Prado", country: "BRA", date: "1982-08-08", meet: "世界锦标赛", place: "瓜亚基尔" },
    { time: "4:19.61", holder: "Jens-Peter Berndt", country: "GDR", date: "1984-05-23", meet: "东德锦标赛", place: "马格德堡" },
    { time: "4:17.53", holder: "Alex Baumann", country: "CAN", date: "1984-06-17", meet: "加拿大奥运选拔赛", place: "埃托比科克" },
    { time: "4:17.41", holder: "Alex Baumann", country: "CAN", date: "1984-07-30", meet: "1984年洛杉矶奥运会", place: "洛杉矶", note: "奥运金牌" },
    { time: "4:16.12", holder: "David Wharton", country: "USA", date: "1987-08-14", meet: "泛太平洋锦标赛", place: "布里斯班" },
    { time: "4:15.42", holder: "Tamás Darnyi", country: "HUN", date: "1987-08-19", meet: "欧洲锦标赛", place: "斯特拉斯堡" },
    { time: "4:14.75", holder: "Tamás Darnyi", country: "HUN", date: "1988-09-21", meet: "1988年汉城奥运会", place: "汉城", note: "奥运金牌" },
    { time: "4:12.36", holder: "Tamás Darnyi", country: "HUN", date: "1991-01-08", meet: "世界锦标赛", place: "珀斯" },
    { time: "4:12.30", holder: "Tom Dolan", country: "USA", date: "1994-09-11", meet: "世界锦标赛", place: "罗马" },
    { time: "4:11.76", holder: "Tom Dolan", country: "USA", date: "2000-09-17", meet: "2000年悉尼奥运会", place: "悉尼", note: "奥运金牌，卫冕" },
    { time: "4:11.09", holder: "Michael Phelps", country: "USA", date: "2002-08-15", meet: "美国全国锦标赛", place: "劳德代尔堡" },
    { time: "4:10.73", holder: "Michael Phelps", country: "USA", date: "2003-04-07", meet: "泳坛对决赛（Duel in the Pool）", place: "印第安纳波利斯" },
    { time: "4:09.09", holder: "Michael Phelps", country: "USA", date: "2003-07-27", meet: "世界锦标赛", place: "巴塞罗那" },
    { time: "4:08.41", holder: "Michael Phelps", country: "USA", date: "2004-07-07", meet: "美国奥运选拔赛", place: "长滩" },
    { time: "4:08.26", holder: "Michael Phelps", country: "USA", date: "2004-08-14", meet: "2004年雅典奥运会", place: "雅典", note: "奥运金牌" },
    { time: "4:06.22", holder: "Michael Phelps", country: "USA", date: "2007-04-01", meet: "世界锦标赛", place: "墨尔本" },
    { time: "4:05.25", holder: "Michael Phelps", country: "USA", date: "2008-06-29", meet: "美国奥运选拔赛", place: "奥马哈" },
    { time: "4:03.84", holder: "Michael Phelps", country: "USA", date: "2008-08-10", meet: "2008年北京奥运会", place: "北京", note: "奥运金牌；保持15年" },
    { time: "4:02.50", holder: "Léon Marchand", country: "FRA", date: "2023-07-23", meet: "世界锦标赛", place: "福冈", note: "现世界纪录；打破菲尔普斯保持15年的4:03.84" },
  ],

  asianRecord: {
    time: "4:06.05", holder: "Kosuke Hagino", country: "JPN",
    date: "2016-08-06", meet: "2016年里约奥运会", place: "里约热内卢",
    note: "依据历史最快成绩榜为亚洲选手最快成绩，列历史第十位",
  },
  chineseRecord: {
    time: "4:09.10", holder: "Wang Shun", country: "CHN",
    date: "2013-09-04", meet: "第十二届全运会", place: "沈阳",
    note: "据历史最快成绩榜，尚无中国选手游得更快",
  },

  top10: [
    { time: "4:02.50", holder: "Léon Marchand", country: "FRA", date: "2023-07-23", meet: "2023年福冈世锦赛", wr: true },
    { time: "4:02.95", holder: "Léon Marchand", country: "FRA", date: "2024-07-28", meet: "2024年巴黎奥运会" },
    { time: "4:03.84", holder: "Michael Phelps", country: "USA", date: "2008-08-10", meet: "2008年北京奥运会" },
    { time: "4:04.28", holder: "Léon Marchand", country: "FRA", date: "2022-06-18", meet: "2022年布达佩斯世锦赛" },
    { time: "4:04.56", holder: "Léon Marchand", country: "FRA", date: "2026-06-27", meet: "2026年法国锦标赛（圣埃蒂安）" },
    { time: "4:04.73", holder: "Léon Marchand", country: "FRA", date: "2025-08-03", meet: "2025年新加坡世锦赛" },
    { time: "4:05.18", holder: "Ryan Lochte", country: "USA", date: "2012-07-28", meet: "2012年伦敦奥运会" },
    { time: "4:05.25", holder: "Michael Phelps", country: "USA", date: "2008-06-29", meet: "2008年美国奥运选拔赛" },
    { time: "4:05.90", holder: "Chase Kalisz", country: "USA", date: "2017-07-30", meet: "2017年布达佩斯世锦赛" },
    { time: "4:06.05", holder: "Kosuke Hagino", country: "JPN", date: "2016-08-06", meet: "2016年里约奥运会" },
  ],
  top10Note:
    "马尔尚独占五席（第一、二、四、五、六位），菲尔普斯的4:03.84自2008年保持至2023年。快照截至2026年6月；同年8月泛太平洋锦标赛松下以赛会纪录4:06.75夺冠，未及榜内门槛（慢于第十位4:06.05）",

  history: [
    {
      heading: "最漫长的全能较量",
      paragraphs: [
        "400混是泳池里对全面性与耐力的终极考验。1957年海因里希的5:15.6被承认为首个世界纪录，随后苏联的斯特鲁沙诺夫、英国的伊恩·布莱克轮番冲击；1961年特德·斯蒂克尔斯把纪录一举砍到4:55.6，1964年东京奥运会，美国的迪克·罗斯以4:45.4夺冠并刷新世界纪录。此后近十年，纪录几乎都在美国人手中传递：白金汉、希科克斯、老加里·霍尔把成绩推进到4:30.81。",
        "1972年慕尼黑，瑞典的贡纳尔·拉尔松与美国的蒂姆·麦基同时触壁4:31.98，电子计时到千分位才分出胜负——0.002秒的差距促使国际泳联此后不再以千分之一秒判定名次。1978年杰西·瓦萨洛（4:20.05）与1982年巴西人里卡多·普拉多（4:19.78）先后把纪录带进4:20之内。",
      ],
    },
    {
      heading: "鲍曼、达尔尼与多兰",
      paragraphs: [
        "1984年洛杉矶，加拿大人亚历克斯·鲍曼在抵制阴影下以4:17.41登顶奥运；四年后汉城，匈牙利的塔马什·达尔尼以4:14.75开始了他对两个混合泳项目长达八年的统治——1988、1992两届奥运，1986、1991两届世锦赛，400混金牌无一旁落。",
        "1990年代中后期属于美国的汤姆·多兰：1994年罗马4:12.30、1998年珀斯4:14.95两夺世锦赛，1996年亚特兰大4:14.90、2000年悉尼4:11.76两获奥运金牌。此后，接力棒交到了一个叫迈克尔·菲尔普斯的少年手中。",
      ],
    },
    {
      heading: "4:03.84的丰碑与马尔尚时代",
      paragraphs: [
        "2002至2008年，菲尔普斯八次刷新400混世界纪录，从4:11.09一路推进到北京奥运会的4:03.84。这座丰碑此后保持了整整15年，是那个时代最坚固的游泳世界纪录。",
        "2023年7月23日福冈，法国人莱昂·马尔尚游出4:02.50将其打破，随后以巴黎奥运4:02.95、新加坡世锦赛4:04.73、2026年法国锦标赛4:04.56持续统治该项目。亚洲方面，萩野公介2016年里约的4:06.05至今仍是亚洲纪录；中国的全国纪录则属于汪顺——2013年全运会的4:09.10。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：World record progression 400 metres individual medley",
      url: "https://en.wikipedia.org/wiki/World_record_progression_400_metres_individual_medley",
    },
    {
      label: "Wikipedia：400 metre individual medley（历史最快成绩榜）",
      url: "https://en.wikipedia.org/wiki/400_metre_individual_medley",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
  ],
};
