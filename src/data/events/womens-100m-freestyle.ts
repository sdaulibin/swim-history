import type { SwimEvent } from "@/lib/types";

/**
 * 女子 100 米自由泳（长池）世界纪录演进
 * 数据来源：Wikipedia "World record progression 100 metres freestyle"
 * 数据截至：2026年7月
 */
export const womens100mFreestyle: SwimEvent = {
  slug: "womens-100m-freestyle",
  stroke: "freestyle",
  distance: 100,
  gender: "women",
  course: "LCM",
  name: "女子 100 米自由泳",
  summary:
    "1912年斯德哥尔摩，女子游泳第一次进入奥运会。从芬妮·杜拉克的1:19.8到斯滕贝根的51.68，一个多世纪的演进里写满了弗雷泽、恩德、乐靖宜与舍斯特伦的名字。",
  dataAsOf: "2026年7月",
  progression: [
    { time: "1:35.0", holder: "Martha Gerstung", country: "GER", date: "1908-10-18", place: "马格德堡", note: "首个被承认的世界纪录" },
    { time: "1:26.6", holder: "Claire Guttenstein", country: "BEL", date: "1910-10-02", place: "布鲁塞尔" },
    { time: "1:24.6", holder: "Daisy Curwen", country: "GBR", date: "1911-09-29", place: "利物浦" },
    { time: "1:20.6", holder: "Daisy Curwen", country: "GBR", date: "1912-06-10", place: "利物浦" },
    { time: "1:19.8", holder: "Fanny Durack", country: "AUS", date: "1912-07-09", meet: "1912年斯德哥尔摩奥运会", place: "斯德哥尔摩", note: "首位女子游泳奥运冠军" },
    { time: "1:18.8", holder: "Fanny Durack", country: "AUS", date: "1912-07-21", meet: "德国锦标赛", place: "汉堡" },
    { time: "1:16.2", holder: "Fanny Durack", country: "AUS", date: "1915-02-06", place: "悉尼" },
    { time: "1:14.4", holder: "Ethelda Bleibtrey", country: "USA", date: "1920-08-23", meet: "1920年安特卫普奥运会", place: "安特卫普", flags: ["sf"] },
    { time: "1:13.6", holder: "Ethelda Bleibtrey", country: "USA", date: "1920-08-25", meet: "1920年安特卫普奥运会", place: "安特卫普" },
    { time: "1:12.8", holder: "Gertrude Ederle", country: "USA", date: "1923-06-30", place: "纽瓦克" },
    { time: "1:12.2", holder: "Mariechen Wehselau", country: "USA", date: "1924-07-19", meet: "1924年巴黎奥运会", place: "巴黎", flags: ["h"] },
    { time: "1:10.0", holder: "Ethel Lackie", country: "USA", date: "1926-01-28", place: "托莱多" },
    { time: "1:09.8", holder: "Eleanor Garatti", country: "USA", date: "1929-08-07", place: "檀香山" },
    { time: "1:09.4", holder: "Albina Osipowich", country: "USA", date: "1929-08-25", place: "旧金山" },
    { time: "1:08.0", holder: "Helene Madison", country: "USA", date: "1930-03-14", place: "迈阿密海滩" },
    { time: "1:06.6", holder: "Helene Madison", country: "USA", date: "1931-04-20", place: "波士顿" },
    { time: "1:06.0", holder: "Willy den Ouden", country: "NED", date: "1933-07-09", place: "安特卫普" },
    { time: "1:05.4", holder: "Willy den Ouden", country: "NED", date: "1934-02-24", place: "阿姆斯特丹" },
    { time: "1:04.8", holder: "Willy den Ouden", country: "NED", date: "1934-04-15", place: "鹿特丹" },
    { time: "1:04.6", holder: "Willy den Ouden", country: "NED", date: "1936-02-27", place: "阿姆斯特丹" },
    { time: "1:04.5", holder: "Dawn Fraser", country: "AUS", date: "1956-02-21", meet: "澳大利亚锦标赛", place: "悉尼" },
    { time: "1:04.2", holder: "Cocky Gastelaars", country: "NED", date: "1956-03-03", place: "阿姆斯特丹" },
    { time: "1:04.0", holder: "Cocky Gastelaars", country: "NED", date: "1956-04-14", place: "希丹" },
    { time: "1:03.3", holder: "Dawn Fraser", country: "AUS", date: "1956-08-25", place: "汤斯维尔" },
    { time: "1:03.2", holder: "Lorraine Crapp", country: "AUS", date: "1956-10-20", place: "悉尼" },
    { time: "1:02.4", holder: "Lorraine Crapp", country: "AUS", date: "1956-10-25", meet: "澳大利亚奥运选拔赛", place: "墨尔本" },
    { time: "1:02.0", holder: "Dawn Fraser", country: "AUS", date: "1956-12-01", meet: "1956年墨尔本奥运会", place: "墨尔本" },
    { time: "1:01.5", holder: "Dawn Fraser", country: "AUS", date: "1958-02-18", place: "墨尔本", flags: ["yd"] },
    { time: "1:01.4", holder: "Dawn Fraser", country: "AUS", date: "1958-07-21", meet: "英联邦运动会", place: "加的夫", flags: ["yd"] },
    { time: "1:01.2", holder: "Dawn Fraser", country: "AUS", date: "1958-08-10", place: "希丹" },
    { time: "1:00.2", holder: "Dawn Fraser", country: "AUS", date: "1960-02-23", place: "悉尼", flags: ["yd"] },
    { time: "1:00.0", holder: "Dawn Fraser", country: "AUS", date: "1962-10-23", place: "墨尔本", flags: ["yd"] },
    { time: "59.9", holder: "Dawn Fraser", country: "AUS", date: "1962-10-24", place: "墨尔本", flags: ["yd"] },
    { time: "59.5", holder: "Dawn Fraser", country: "AUS", date: "1962-10-27", meet: "英联邦运动会", place: "珀斯", flags: ["yd"] },
    { time: "58.9", holder: "Dawn Fraser", country: "AUS", date: "1964-02-29", place: "悉尼", note: "首次在50米泳池突破1分钟" },
    { time: "58.9", holder: "Shane Gould", country: "AUS", date: "1971-04-30", place: "伦敦", flags: ["eq"] },
    { time: "58.5", holder: "Shane Gould", country: "AUS", date: "1972-01-08", place: "悉尼" },
    { time: "58.25", holder: "Kornelia Ender", country: "GDR", date: "1973-07-13", place: "东柏林" },
    { time: "58.12", holder: "Kornelia Ender", country: "GDR", date: "1973-08-18", place: "乌得勒支" },
    { time: "57.61", holder: "Kornelia Ender", country: "GDR", date: "1973-09-08", meet: "世界锦标赛", place: "贝尔格莱德", flags: ["r"] },
    { time: "57.54", holder: "Kornelia Ender", country: "GDR", date: "1973-09-09", meet: "世界锦标赛", place: "贝尔格莱德" },
    { time: "57.51", holder: "Kornelia Ender", country: "GDR", date: "1974-07-04", place: "罗斯托克" },
    { time: "56.96", holder: "Kornelia Ender", country: "GDR", date: "1974-08-19", meet: "欧洲锦标赛", place: "维也纳" },
    { time: "56.38", holder: "Kornelia Ender", country: "GDR", date: "1975-03-14", place: "德累斯顿" },
    { time: "56.22", holder: "Kornelia Ender", country: "GDR", date: "1975-07-26", meet: "世界锦标赛", place: "卡利", flags: ["r"] },
    { time: "55.73", holder: "Kornelia Ender", country: "GDR", date: "1976-06-01", place: "东柏林" },
    { time: "55.65", holder: "Kornelia Ender", country: "GDR", date: "1976-07-19", meet: "1976年蒙特利尔奥运会", place: "蒙特利尔" },
    { time: "55.41", holder: "Barbara Krause", country: "GDR", date: "1978-07-05", place: "东柏林" },
    { time: "54.98", holder: "Barbara Krause", country: "GDR", date: "1980-07-20", meet: "1980年莫斯科奥运会", place: "莫斯科", flags: ["h"] },
    { time: "54.79", holder: "Barbara Krause", country: "GDR", date: "1980-07-21", meet: "1980年莫斯科奥运会", place: "莫斯科" },
    { time: "54.73", holder: "Kristin Otto", country: "GDR", date: "1986-08-19", meet: "世界锦标赛", place: "马德里", flags: ["r"] },
    { time: "54.48", holder: "Jenny Thompson", country: "USA", date: "1992-03-01", meet: "美国奥运选拔赛", place: "印第安纳波利斯", flags: ["h"] },
    { time: "54.01", holder: "Le Jingyi", country: "CHN", date: "1994-09-05", meet: "世界锦标赛", place: "罗马", note: "中国选手首次创造该项目世界纪录" },
    { time: "53.80", holder: "Inge de Bruijn", country: "NED", date: "2000-05-28", place: "谢菲尔德" },
    { time: "53.77", holder: "Inge de Bruijn", country: "NED", date: "2000-09-20", meet: "2000年悉尼奥运会", place: "悉尼", flags: ["sf"] },
    { time: "53.66", holder: "Libby Lenton", country: "AUS", date: "2004-03-31", place: "悉尼", flags: ["sf"] },
    { time: "53.52", holder: "Jodie Henry", country: "AUS", date: "2004-08-18", meet: "2004年雅典奥运会", place: "雅典", flags: ["sf"] },
    { time: "53.42", holder: "Libby Lenton", country: "AUS", date: "2006-01-31", place: "墨尔本", flags: ["sf"] },
    { time: "53.30", holder: "Britta Steffen", country: "GER", date: "2006-08-02", meet: "欧洲锦标赛", place: "布达佩斯" },
    { time: "52.88", holder: "Libby Trickett", country: "AUS", date: "2008-03-27", place: "悉尼" },
    { time: "52.85", holder: "Britta Steffen", country: "GER", date: "2009-06-25", place: "柏林", flags: ["h"] },
    { time: "52.56", holder: "Britta Steffen", country: "GER", date: "2009-06-27", place: "柏林" },
    { time: "52.22", holder: "Britta Steffen", country: "GER", date: "2009-07-26", meet: "世界锦标赛", place: "罗马", flags: ["r"] },
    { time: "52.07", holder: "Britta Steffen", country: "GER", date: "2009-07-31", meet: "世界锦标赛", place: "罗马" },
    { time: "52.06", holder: "Cate Campbell", country: "AUS", date: "2016-07-02", place: "布里斯班" },
    { time: "51.71", holder: "Sarah Sjöström", country: "SWE", date: "2017-07-23", meet: "世界锦标赛", place: "布达佩斯", flags: ["r"], note: "4×100米自由泳接力决赛第一棒" },
    { time: "51.68", holder: "Marrit Steenbergen", country: "NED", date: "2026-06-27", meet: "塞特科利杯", place: "罗马", note: "现世界纪录" },
  ],

  asianRecord: {
    time: "52.17", holder: "Siobhán Haughey", country: "HKG",
    date: "2023-09-27", meet: "杭州亚运会", place: "杭州",
    note: "决赛夺冠并刷新亚洲纪录（长池）",
  },
  chineseRecord: {
    time: "52.44", holder: "Yang Junxuan", country: "CHN",
    date: "2024-07-28", meet: "2024年巴黎奥运会", place: "巴黎",
    note: "4×100自接力第一棒；个人赛全国纪录为其52.68（2024年4月全国冠军赛）",
  },


  top10: [
    { time: "51.68", holder: "Marrit Steenbergen", country: "NED", date: "2026-06-27", meet: "意大利罗马", wr: true, note: "现世界纪录" },
    { time: "51.71", holder: "Sarah Sjöström", country: "SWE", date: "2017-07-23", meet: "2017年布达佩斯世锦赛", flags: ["sf"] },
    { time: "51.90", holder: "Marrit Steenbergen", country: "NED", date: "2026-08-12", meet: "2026年巴黎欧锦赛" },
    { time: "51.96", holder: "Emma McKeon", country: "AUS", date: "2021-07", meet: "2020年东京奥运会" },
  ],
  top10Note:
    "第五位起（奥卡拉根、坎贝尔、莫施、道格拉斯等52秒区间成绩的精确排序）待逐条双源核实后补入，宁缺毋滥。",

  history: [
    {
      heading: "1912：女子游泳登上奥运舞台",
      paragraphs: [
        "1912年斯德哥尔摩奥运会首次设立女子游泳项目，澳大利亚人芬妮·杜拉克以1:19.8夺冠，成为史上第一位女子游泳奥运冠军。此后二十年，纪录在美、澳、荷之间流转，1923年创造1:12.8的格特鲁德·埃德尔，三年后成为首位横渡英吉利海峡的女性。",
        "大萧条年代，荷兰人薇莉·登乌登把成绩一路推进到1:04.6，单枪匹马撑起了欧洲女子短距离的门面。",
      ],
    },
    {
      heading: "道恩·弗雷泽：不可复制的传奇",
      paragraphs: [
        "1956至1964年间，道恩·弗雷泽十余次刷新世界纪录：1956年墨尔本奥运会以1:02.0主场夺冠，1962年在码制泳池将成绩带进1分钟，1964年2月的悉尼，她游出58.9——这是女子首次在50米泳池突破1分钟。",
        "她还连续三届（1956/1960/1964）夺得奥运百米自由泳金牌，这一成就至今无人复制。1972年，15岁的希恩·古尔德短暂接过火炬，随后时代翻页。",
      ],
    },
    {
      heading: "东德机器与它的阴影",
      paragraphs: [
        "70至80年代，民主德国女将统治了这张表：科尔内利娅·恩德一人九次刷新纪录，1976年蒙特利尔以55.65夺冠；此后克劳泽（54.79）与奥托（54.73）继续推进。",
        "两德统一后解密的档案证实，这背后是国家主导的系统性兴奋剂计划。这些成绩在表格上依然有效，但始终伴随争议——这是女子游泳史无法回避的一章。",
      ],
    },
    {
      heading: "乐靖宜：中国时刻",
      paragraphs: [
        "1994年9月5日，罗马世锦赛，乐靖宜在决赛中游出54.01夺得冠军并刷新世界纪录——这是中国选手首次在女子百米自由泳写下世界纪录。两年后的亚特兰大奥运会，她登上奥运最高领奖台。",
        "此后纪录进入荷兰与澳大利亚的节奏：德布鲁因在悉尼奥运游出53.77，乔迪·亨利在雅典奥运将纪录带至53.52。",
      ],
    },
    {
      heading: "快速泳衣时代与斯特芬的巅峰",
      paragraphs: [
        "2008年前后，聚氨酯快速泳衣让成绩集体跳水：布丽塔·斯特芬在2009年一年内四次刷新纪录，罗马世锦赛决赛的52.07成为该时代的女子百自标杆——2010年起非织物泳衣被禁。",
        "凯特·坎贝尔2016年游出52.06，以0.01秒的优势终于越过斯特芬。下一个真正的跨越要等到2017年。",
      ],
    },
    {
      heading: "舍斯特伦的九年与斯滕贝根的新时代",
      paragraphs: [
        "2017年7月23日布达佩斯，萨拉·舍斯特伦在4×100米自由泳接力第一棒游出51.71。这个纪录保持了近九年，其间她在2024年巴黎奥运会上以31岁的年龄终于首次加冕该项目奥运冠军。",
        "2026年6月27日，罗马塞特科利杯，荷兰人玛丽特·斯滕贝根游出51.68，将尘封的纪录提高了0.03秒。女子百米自由泳的「51秒中段」时代，正式开启。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：World record progression 100 metres freestyle",
      url: "https://en.wikipedia.org/wiki/World_record_progression_100_metres_freestyle",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
  ],
};
