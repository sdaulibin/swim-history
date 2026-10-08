import type { SwimEvent } from "@/lib/types";

/**
 * 男子 100 米蛙泳（长池）世界纪录演进
 * 数据来源：Wikipedia "World record progression 100 metres breaststroke"
 * 数据截至：2026年7月
 */
export const mens100mBreaststroke: SwimEvent = {
  slug: "mens-100m-breaststroke",
  stroke: "breaststroke",
  distance: 100,
  gender: "men",
  course: "LCM",
  name: "男子 100 米蛙泳",
  summary:
    "最古老的泳姿，最漫长的较量。1961年科列斯尼科夫的1:14.1起步，经过贾斯特雷姆斯基的疯狂一年、北岛康介的亚洲王朝，最终停在亚当·皮蒂2019年的56.88。",
  dataAsOf: "2026年7月",
  progression: [
    { time: "1:14.1", holder: "Leonid Kolesnikov", country: "URS", date: "1961-05-02", place: "莫斯科", note: "首个被承认的世界纪录" },
    { time: "1:11.1", holder: "Chet Jastremski", country: "USA", date: "1961-07-02", place: "芝加哥" },
    { time: "1:10.7", holder: "Gunter Tittes", country: "GDR", date: "1961-07-05", place: "东柏林" },
    { time: "1:10.7", holder: "Chet Jastremski", country: "USA", date: "1961-07-28", place: "东京", flags: ["eq"] },
    { time: "1:10.0", holder: "Chet Jastremski", country: "USA", date: "1961-07-30", place: "东京" },
    { time: "1:09.5", holder: "Chet Jastremski", country: "USA", date: "1961-08-03", place: "大阪" },
    { time: "1:07.8", holder: "Chet Jastremski", country: "USA", date: "1961-08-20", meet: "男子NAAA锦标赛", place: "洛杉矶" },
    { time: "1:07.5", holder: "Chet Jastremski", country: "USA", date: "1961-08-20", meet: "男子NAAA锦标赛", place: "洛杉矶", note: "1961年单年七次刷新世界纪录" },
    { time: "1:07.4", holder: "Georgy Prokopenko", country: "URS", date: "1964-03-26", place: "巴库" },
    { time: "1:06.9", holder: "Georgy Prokopenko", country: "URS", date: "1964-09-03", place: "莫斯科" },
    { time: "1:06.7", holder: "Vladimir Kosinsky", country: "URS", date: "1967-11-08", place: "列宁格勒" },
    { time: "1:06.4", holder: "Jose Fiolo", country: "BRA", date: "1968-02-19", place: "里约热内卢" },
    { time: "1:06.2", holder: "Nikolai Pankin", country: "URS", date: "1968-04-18", place: "莫斯科" },
    { time: "1:05.8", holder: "Nikolai Pankin", country: "URS", date: "1969-04-20", place: "马格德堡" },
    { time: "1:05.68", holder: "John Hencken", country: "USA", date: "1972-08-29", meet: "1972年慕尼黑奥运会", place: "慕尼黑", flags: ["sf"] },
    { time: "1:05.13", holder: "Nobutaka Taguchi", country: "JPN", date: "1972-08-29", meet: "1972年慕尼黑奥运会", place: "慕尼黑", flags: ["sf"] },
    { time: "1:04.94", holder: "Nobutaka Taguchi", country: "JPN", date: "1972-08-30", meet: "1972年慕尼黑奥运会", place: "慕尼黑" },
    { time: "1:04.35", holder: "John Hencken", country: "USA", date: "1973-09-04", meet: "世界锦标赛", place: "贝尔格莱德", flags: ["h"] },
    { time: "1:04.02", holder: "John Hencken", country: "USA", date: "1973-09-04", meet: "世界锦标赛", place: "贝尔格莱德" },
    { time: "1:03.88", holder: "John Hencken", country: "USA", date: "1974-08-31", meet: "美国与东德对抗赛", place: "康科德" },
    { time: "1:03.88", holder: "John Hencken", country: "USA", date: "1976-07-19", meet: "1976年蒙特利尔奥运会", place: "蒙特利尔", flags: ["eq", "h"] },
    { time: "1:03.62", holder: "John Hencken", country: "USA", date: "1976-07-19", meet: "1976年蒙特利尔奥运会", place: "蒙特利尔", flags: ["sf"] },
    { time: "1:03.11", holder: "John Hencken", country: "USA", date: "1976-07-20", meet: "1976年蒙特利尔奥运会", place: "蒙特利尔" },
    { time: "1:02.86", holder: "Gerald Mörken", country: "FRG", date: "1977-08-18", place: "延雪平" },
    { time: "1:02.62", holder: "Steve Lundquist", country: "USA", date: "1982-07-19", meet: "美国世锦赛选拔赛", place: "米申维耶霍" },
    { time: "1:02.53", holder: "Steve Lundquist", country: "USA", date: "1982-08-21", place: "印第安纳波利斯" },
    { time: "1:02.34", holder: "Steve Lundquist", country: "USA", date: "1983-07-19", meet: "美国全国锦标赛", place: "克洛维斯" },
    { time: "1:02.28", holder: "Steve Lundquist", country: "USA", date: "1983-08-17", meet: "泛美运动会", place: "加拉加斯" },
    { time: "1:02.13", holder: "John Moffet", country: "USA", date: "1984-06-25", meet: "美国奥运选拔赛", place: "印第安纳波利斯" },
    { time: "1:01.65", holder: "Steve Lundquist", country: "USA", date: "1984-07-29", meet: "1984年洛杉矶奥运会", place: "洛杉矶" },
    { time: "1:01.49", holder: "Adrian Moorhouse", country: "GBR", date: "1989-08-15", meet: "欧洲锦标赛", place: "波恩", flags: ["h"] },
    { time: "1:01.49", holder: "Adrian Moorhouse", country: "GBR", date: "1990-01-25", meet: "英联邦运动会", place: "奥克兰", flags: ["eq"] },
    { time: "1:01.49", holder: "Adrian Moorhouse", country: "GBR", date: "1990-07-26", place: "伦敦", flags: ["eq"] },
    { time: "1:01.49", holder: "Norbert Rózsa", country: "HUN", date: "1991-01-07", meet: "世界锦标赛", place: "珀斯", flags: ["eq", "h"] },
    { time: "1:01.45", holder: "Norbert Rózsa", country: "HUN", date: "1991-01-07", meet: "世界锦标赛", place: "珀斯" },
    { time: "1:01.45", holder: "Vasili Ivanov", country: "URS", date: "1991-06-11", place: "莫斯科", flags: ["eq"] },
    { time: "1:01.29", holder: "Norbert Rózsa", country: "HUN", date: "1991-08-20", meet: "欧洲锦标赛", place: "雅典", flags: ["h"] },
    { time: "1:00.95", holder: "Károly Güttler", country: "HUN", date: "1993-08-03", meet: "欧洲锦标赛", place: "谢菲尔德", flags: ["h"] },
    { time: "1:00.60", holder: "Frederik Deburghgraeve", country: "BEL", date: "1996-07-20", meet: "1996年亚特兰大奥运会", place: "亚特兰大", flags: ["h"] },
    { time: "1:00.36", holder: "Roman Sludnov", country: "RUS", date: "2000-06-15", place: "莫斯科", flags: ["sf"] },
    { time: "1:00.29", holder: "Ed Moses", country: "USA", date: "2001-03-28", meet: "美国全国锦标赛", place: "奥斯汀" },
    { time: "1:00.26", holder: "Roman Sludnov", country: "RUS", date: "2001-06-28", meet: "俄罗斯锦标赛", place: "莫斯科", flags: ["sf"] },
    { time: "59.97", holder: "Roman Sludnov", country: "RUS", date: "2001-06-29", meet: "俄罗斯锦标赛", place: "莫斯科", note: "人类首次突破1分钟" },
    { time: "59.94", holder: "Roman Sludnov", country: "RUS", date: "2001-07-23", meet: "世界锦标赛", place: "福冈", flags: ["sf"] },
    { time: "59.78", holder: "Kosuke Kitajima", country: "JPN", date: "2003-07-21", meet: "世界锦标赛", place: "巴塞罗那", note: "首位突破59秒的选手" },
    { time: "59.30", holder: "Brendan Hansen", country: "USA", date: "2004-07-08", meet: "美国奥运选拔赛", place: "长滩" },
    { time: "59.13", holder: "Brendan Hansen", country: "USA", date: "2006-08-01", meet: "美国全国锦标赛", place: "尔湾" },
    { time: "58.91", holder: "Kosuke Kitajima", country: "JPN", date: "2008-08-11", meet: "2008年北京奥运会", place: "北京" },
    { time: "58.67", holder: "Ihor Borysyk", country: "UKR", date: "2009-06-13", meet: "乌克兰全国杯", place: "哈尔科夫", ratified: false, note: "未被承认为世界纪录" },
    { time: "58.58", holder: "Brenton Rickard", country: "AUS", date: "2009-07-27", meet: "世界锦标赛", place: "罗马" },
    { time: "58.46", holder: "Cameron van der Burgh", country: "RSA", date: "2012-07-29", meet: "2012年伦敦奥运会", place: "伦敦" },
    { time: "57.92", holder: "Adam Peaty", country: "GBR", date: "2015-04-17", meet: "英国锦标赛", place: "伦敦", note: "人类首次突破58秒" },
    { time: "57.55", holder: "Adam Peaty", country: "GBR", date: "2016-08-06", meet: "2016年里约奥运会", place: "里约热内卢", flags: ["h"] },
    { time: "57.13", holder: "Adam Peaty", country: "GBR", date: "2016-08-07", meet: "2016年里约奥运会", place: "里约热内卢" },
    { time: "57.10", holder: "Adam Peaty", country: "GBR", date: "2018-08-04", meet: "欧洲锦标赛", place: "格拉斯哥" },
    { time: "56.88", holder: "Adam Peaty", country: "GBR", date: "2019-07-21", meet: "世界锦标赛", place: "光州", flags: ["sf"], note: "现世界纪录" },
  ],

  asianRecord: {
    time: "57.69", holder: "Qin Haiyang", country: "CHN",
    date: "2023-07-24", meet: "2023年福冈世锦赛", place: "福冈",
  },
  chineseRecord: {
    time: "57.69", holder: "Qin Haiyang", country: "CHN",
    date: "2023-07-24", meet: "2023年福冈世锦赛", place: "福冈",
  },


  top10: [
    { time: "56.88", holder: "Adam Peaty", country: "GBR", date: "2019-07-21", meet: "2019年光州世锦赛", flags: ["sf"], wr: true },
    { time: "57.10", holder: "Adam Peaty", country: "GBR", date: "2018-08-04", meet: "2018年格拉斯哥欧锦赛" },
    { time: "57.13", holder: "Adam Peaty", country: "GBR", date: "2016-08-07", meet: "2016年里约奥运会" },
    { time: "57.37", holder: "Adam Peaty", country: "GBR", date: "2021-07", meet: "2020年东京奥运会" },
    { time: "57.55", holder: "Adam Peaty", country: "GBR", date: "2016-08-06", meet: "2016年里约奥运会", flags: ["h"] },
    { time: "57.69", holder: "Qin Haiyang", country: "CHN", date: "2023-07-24", meet: "2023年福冈世锦赛" },
    { time: "57.82", holder: "Qin Haiyang", country: "CHN", date: "2023-07-23", meet: "2023年福冈世锦赛", flags: ["sf"] },
    { time: "57.90", holder: "Arno Kamminga", country: "NED", date: "2021", note: "2021年两度游出，分列第八、九位" },
  ],
  top10Note:
    "榜首几乎被皮蒂垄断；卡明加2021年两游57.90。皮蒂其余57.9x区间的成绩与第十位归属待进一步核实，故列前九项。",

  history: [
    {
      heading: "最古老的泳姿",
      paragraphs: [
        "蛙泳是人类最古老的游泳姿势，古埃及壁画与亚述浮雕中就有它的身影，现代竞技蛙泳则在19世纪的英国定型。1952年蝶泳被单列为独立项目、1957年规则要求头部周期性露出水面之后，今天意义上的蛙泳才真正与蝶泳分家。",
        "国际泳联自1961年起系统承认男子百米蛙泳世界纪录——苏联人列昂尼德·科列斯尼科夫1961年5月游出的1:14.1，是这张时间线的起点。",
      ],
    },
    {
      heading: "1961：贾斯特雷姆斯基年",
      paragraphs: [
        "美国牙医切特·贾斯特雷姆斯基在1961年7月至8月间接连七次刷新世界纪录，把成绩从1:11.1一口气推进到1:07.5，两个多月内将纪录提高近4秒——单年七破，至今仍是该项目难以想象的传奇。",
        "60年代余下的时间属于苏联学派：普罗科片科、科辛斯基、潘金轮番登顶，将纪录压进1:05.8。1968年，巴西人若泽·菲奥洛短暂插旗，是苏联时代少有的例外。",
      ],
    },
    {
      heading: "田口信教与亨肯时代",
      paragraphs: [
        "1972年慕尼黑奥运会，日本的田口信教以1:04.94夺金并刷新世界纪录；半决赛中他游出的1:05.13同样是纪录——一夜两破，奥运决赛的历史密度可想而知。",
        "1973至1976年，约翰·亨肯先后七次刷新纪录，从1:05.68推进到1:03.11。1984年洛杉矶奥运，史蒂夫·伦德奎斯特以1:01.65夺冠，把纪录逼近1分钟大关。",
      ],
    },
    {
      heading: "跨越一分钟",
      paragraphs: [
        "1996年亚特兰大，比利时的弗雷德里克·德伯格赫雷夫在预赛游出1:00.60，距一分钟只差半秒多点。2001年，答案揭晓：罗曼·斯卢德诺夫先在俄罗斯锦标赛上以59.97首次突破1分钟，随后又在福冈世锦赛半决赛推进到59.94。",
        "2003年巴塞罗那世锦赛，北岛康介以59.78成为首位游进59秒的选手；布雷登·汉森两次回敬之后，日本蛙王在北京完成加冕。",
      ],
    },
    {
      heading: "亚洲蛙王：北岛康介",
      paragraphs: [
        "2008年8月11日，北京奥运会男子100米蛙泳决赛，北岛康介以58.91夺冠并刷新世界纪录。加上2004年雅典的金牌，他成为继田口信教之后又一位奥运蛙王，「亚洲蛙王」之名响彻世界。",
        "2012年伦敦，南非人卡梅伦·范德伯格以58.46接棒；快速泳衣时代尾声的2009年，里克德的58.58也曾短暂登顶。",
      ],
    },
    {
      heading: "皮蒂：独一档的存在",
      paragraphs: [
        "2015年4月，亚当·皮蒂在英国锦标赛游出57.92，把人类极限带进58秒之内；2016里约（57.13）、2018年欧锦赛（57.10）步步推进，2019年光州世锦赛半决赛的56.88，至今无人接近——表中前十五快的成绩几乎全部写着他的名字。",
        "2023年福冈，中国的覃海洋成为首位在单届世锦赛包揽50/100/200米蛙泳三金的选手，57.69也是除皮蒂之外人类游出的最快成绩。2024年巴黎，意大利的马丁嫩吉夺冠，蛙泳进入群雄并起的新阶段。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：World record progression 100 metres breaststroke",
      url: "https://en.wikipedia.org/wiki/World_record_progression_100_metres_breaststroke",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
  ],
};
