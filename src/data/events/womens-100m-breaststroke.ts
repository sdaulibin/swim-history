import type { SwimEvent } from "@/lib/types";

/**
 * 女子 100 米蛙泳（长池）世界纪录演进
 * 数据来源：Wikipedia "World record progression 100 metres breaststroke"
 * 数据截至：2026年10月
 */
export const womens100mBreaststroke: SwimEvent = {
  slug: "womens-100m-breaststroke",
  stroke: "breaststroke",
  distance: 100,
  gender: "women",
  course: "LCM",
  name: "女子 100 米蛙泳",
  summary:
    "从东德时代的1:20.3起步，到莉莉·金2017年的1:04.13，半个多世纪推进了16秒。罗雪娟的雅典登顶与唐钱婷的1:04.39，是中国泳军在这条时间线上刻下的印记。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "1:20.3", holder: "Karin Beyer", country: "GDR", date: "1958-07-20", place: "东柏林", note: "首个被承认的世界纪录" },
    { time: "1:19.6", holder: "Karin Beyer", country: "GDR", date: "1958-09-12", place: "莱比锡" },
    { time: "1:19.1", holder: "Wiltrud Urselmann", country: "FRG", date: "1960-03-12", place: "苏黎世" },
    { time: "1:19.0", holder: "Ursula Küper", country: "GDR", date: "1960-07-14", place: "莱比锡" },
    { time: "1:18.2", holder: "Barbara Göbel", country: "GDR", date: "1961-07-01", place: "罗斯托克" },
    { time: "1:17.9", holder: "Claudia Kolb", country: "USA", date: "1964-07-11", place: "洛杉矶" },
    { time: "1:17.2", holder: "Svetlana Babanina", country: "URS", date: "1964-09-03", place: "莫斯科" },
    { time: "1:16.5", holder: "Svetlana Babanina", country: "URS", date: "1965-05-11", place: "塔什干" },
    { time: "1:16.4", holder: "Catie Ball", country: "USA", date: "1966-07-15", place: "温特帕克" },
    { time: "1:15.7", holder: "Galina Prozumenshchikova", country: "URS", date: "1966-07-17", place: "列宁格勒" },
    { time: "1:15.6", holder: "Catie Ball", country: "USA", date: "1966-12-28", place: "劳德代尔堡" },
    { time: "1:14.8", holder: "Catie Ball", country: "USA", date: "1967-07-31", meet: "泛美运动会", place: "温尼伯" },
    { time: "1:14.6", holder: "Catie Ball", country: "USA", date: "1967-08-19", meet: "AAU全国锦标赛", place: "费城" },
    { time: "1:14.2", holder: "Catie Ball", country: "USA", date: "1968-08-25", meet: "美国奥运选拔赛", place: "洛杉矶" },
    { time: "1:13.58", holder: "Cathy Carr", country: "USA", date: "1972-09-02", meet: "1972年慕尼黑奥运会", place: "慕尼黑" },
    { time: "1:12.91", holder: "Renate Vogel", country: "GDR", date: "1974-08-22", meet: "欧洲锦标赛", place: "维也纳", flags: ["h"] },
    { time: "1:12.55", holder: "Christel Justen", country: "FRG", date: "1974-08-23", meet: "欧洲锦标赛", place: "维也纳" },
    { time: "1:12.28", holder: "Renate Vogel", country: "GDR", date: "1974-09-01", meet: "美国与东德对抗赛", place: "康科德" },
    { time: "1:11.93", holder: "Carola Nitschke", country: "GDR", date: "1976-06-02", meet: "东德锦标赛", place: "东柏林" },
    { time: "1:11.11", holder: "Hannelore Anke", country: "GDR", date: "1976-07-22", meet: "1976年蒙特利尔奥运会", place: "蒙特利尔", flags: ["h"] },
    { time: "1:10.86", holder: "Hannelore Anke", country: "GDR", date: "1976-07-22", meet: "1976年蒙特利尔奥运会", place: "蒙特利尔", flags: ["sf"] },
    { time: "1:10.31", holder: "Yuliya Bogdanova", country: "URS", date: "1978-08-22", meet: "世界锦标赛", place: "西柏林" },
    { time: "1:10.20", holder: "Ute Geweniger", country: "GDR", date: "1980-05-26", place: "马格德堡" },
    { time: "1:10.11", holder: "Ute Geweniger", country: "GDR", date: "1980-07-24", meet: "1980年莫斯科奥运会", place: "莫斯科", flags: ["h"] },
    { time: "1:09.52", holder: "Ute Geweniger", country: "GDR", date: "1981-04-09", place: "格拉" },
    { time: "1:09.39", holder: "Ute Geweniger", country: "GDR", date: "1981-07-02", place: "东柏林" },
    { time: "1:08.60", holder: "Ute Geweniger", country: "GDR", date: "1981-04-09", meet: "欧洲锦标赛", place: "斯普利特" },
    { time: "1:08.51", holder: "Ute Geweniger", country: "GDR", date: "1983-08-25", meet: "欧洲锦标赛", place: "罗马" },
    { time: "1:08.29", holder: "Sylvia Gerasch", country: "GDR", date: "1984-08-23", meet: "友谊运动会", place: "莫斯科", flags: ["eq"] },
    { time: "1:08.11", holder: "Sylvia Gerasch", country: "GDR", date: "1986-08-11", meet: "世界锦标赛", place: "马德里" },
    { time: "1:07.91", holder: "Silke Hörner", country: "GDR", date: "1987-08-21", meet: "欧洲锦标赛", place: "斯特拉斯堡" },
    { time: "1:07.69", holder: "Samantha Riley", country: "AUS", date: "1994-09-09", meet: "世界锦标赛", place: "罗马" },
    { time: "1:07.46", holder: "Penelope Heyns", country: "RSA", date: "1996-07-02", meet: "南非全国锦标赛", place: "德班" },
    { time: "1:07.02", holder: "Penelope Heyns", country: "RSA", date: "1996-07-21", meet: "1996年亚特兰大奥运会", place: "亚特兰大", flags: ["h"] },
    { time: "1:06.99", holder: "Penelope Heyns", country: "RSA", date: "1999-07-18", meet: "珍妮特·埃文斯邀请赛", place: "洛杉矶", flags: ["h"] },
    { time: "1:06.95", holder: "Penelope Heyns", country: "RSA", date: "1999-07-18", meet: "珍妮特·埃文斯邀请赛", place: "洛杉矶" },
    { time: "1:06.52", holder: "Penelope Heyns", country: "RSA", date: "1999-08-23", meet: "泛太平洋锦标赛", place: "悉尼", flags: ["h"] },
    { time: "1:06.37", holder: "Leisel Jones", country: "AUS", date: "2003-07-21", meet: "世界锦标赛", place: "巴塞罗那", flags: ["sf"] },
    { time: "1:06.20", holder: "Jessica Hardy", country: "USA", date: "2005-07-25", meet: "世界锦标赛", place: "蒙特利尔", flags: ["sf"] },
    { time: "1:05.71", holder: "Leisel Jones", country: "AUS", date: "2006-02-03", meet: "澳大利亚锦标赛", place: "墨尔本" },
    { time: "1:05.09", holder: "Leisel Jones", country: "AUS", date: "2006-03-20", meet: "英联邦运动会", place: "墨尔本" },
    { time: "1:04.84", holder: "Rebecca Soni", country: "USA", date: "2009-07-27", meet: "世界锦标赛", place: "罗马", flags: ["sf"] },
    { time: "1:04.45", holder: "Jessica Hardy", country: "USA", date: "2009-08-07", meet: "美国公开赛", place: "费德勒尔韦" },
    { time: "1:04.35", holder: "Rūta Meilutytė", country: "LTU", date: "2013-07-29", meet: "世界锦标赛", place: "巴塞罗那", flags: ["sf"] },
    { time: "1:04.13", holder: "Lilly King", country: "USA", date: "2017-07-25", meet: "世界锦标赛", place: "布达佩斯", note: "现世界纪录" },
  ],

  asianRecord: {
    time: "1:04.39", holder: "Tang Qianting", country: "CHN",
    date: "2024-04", meet: "2024年全国游泳冠军赛", place: "深圳",
    note: "24小时内两破亚洲纪录（半决赛1:04.68）",
  },
  chineseRecord: {
    time: "1:04.39", holder: "Tang Qianting", country: "CHN",
    date: "2024-04", meet: "2024年全国游泳冠军赛", place: "深圳",
  },


  top10: [
    { time: "1:04.13", holder: "Lilly King", country: "USA", date: "2017-07-25", meet: "2017年布达佩斯世锦赛", wr: true },
    { time: "1:04.13", holder: "Lilly King", country: "USA", date: "2019-07-22", meet: "2019年光州世锦赛", note: "与个人世界纪录完全相同" },
    { time: "1:04.35", holder: "Rūta Meilutytė", country: "LTU", date: "2013-08", meet: "2013年巴塞罗那世锦赛", flags: ["sf"] },
    { time: "1:04.36", holder: "Yuliya Efimova", country: "RUS", date: "2017-07", meet: "2017年布达佩斯世锦赛" },
    { time: "1:04.39", holder: "Tang Qianting", country: "CHN", date: "2024-04", meet: "2024年全国游泳冠军赛", place: "深圳", note: "亚洲纪录" },
    { time: "1:04.42", holder: "Rūta Meilutytė", country: "LTU", date: "2013-08", meet: "2013年巴塞罗那世锦赛" },
    { time: "1:04.62", holder: "Rūta Meilutytė", country: "LTU", date: "2023-07", meet: "2023年福冈世锦赛" },
    { time: "1:04.95", holder: "Lydia Jacoby", country: "USA", date: "2021-07", meet: "2020年东京奥运会" },
  ],
  top10Note:
    "第9-10位（斯库恩梅克、埃文斯等1:05区间成绩）待逐条双源核实后补入，宁缺毋滥。",

  history: [
    {
      heading: "东德时代起步",
      paragraphs: [
        "1958年7月，东德的卡琳·拜尔游出1:20.3，成为女子百米蛙泳首个被承认的世界纪录。此后近三十年，这张时间线几乎被东德女将垄断：安克、博格丹诺娃轮番登顶，格韦尼希1980至1981年间五次刷新，把成绩带到1:08.51。",
        "和自由泳一样，这段历史在两德统一后被系统性兴奋剂丑闻的阴影笼罩——成绩留在表上，争议留在史册里。",
      ],
    },
    {
      heading: "海因斯与90年代",
      paragraphs: [
        "1994年罗马世锦赛，澳大利亚的萨曼莎·赖利以1:07.69打破了东德人最后的垄断。1996年亚特兰大，南非人佩内洛普·海因斯包揽100、200米蛙泳双金，并在1999年把百米纪录推进到1:06.95——20世纪的最好成绩就此定格。",
        "2003至2006年，莱塞尔·琼斯与杰西卡·哈迪拉锯推进；2006年英联邦运动会上琼斯的1:05.09，是「正常泳衣时代」的极限。",
      ],
    },
    {
      heading: "罗雪娟的巅峰",
      paragraphs: [
        "2003年巴塞罗那世锦赛与2004年雅典奥运会，罗雪娟两度登上女子百米蛙泳最高领奖台。雅典的夺冠成绩1:06.64打破了奥运纪录——中国蛙后在那个周期的统治力，至今仍是中国游泳的高光记忆。",
        "她退役后的十几年，世界纪录的战场移向大洋两岸：索尼、哈迪、梅卢蒂特相继登场。",
      ],
    },
    {
      heading: "梅卢蒂特与快速泳衣",
      paragraphs: [
        "2009年罗马，快速泳衣把成绩一口气压缩了近1秒：索尼半决赛1:04.84，一个月后哈迪游出1:04.45。2012年伦敦，15岁的立陶宛少女鲁塔·梅卢蒂特爆冷夺得奥运金牌；次年巴塞罗那世锦赛半决赛，她游出1:04.35。",
        "青少年选手登上成人之巅，是蛙泳这个项目反复上演的戏码——梅卢蒂特只是其中最耀眼的一个。",
      ],
    },
    {
      heading: "莉莉·金与1:04.13",
      paragraphs: [
        "2017年7月25日布达佩斯决赛，莉莉·金以1:04.13夺冠并刷新世界纪录，这个成绩至今保持。她与俄罗斯名将埃菲莫娃的隔池对抗（后者2017年游出1:04.36）是那个周期最大的看点。",
        "金在2016里约与2021东京蝉联奥运冠军，确立了属于她的时代。",
      ],
    },
    {
      heading: "中国新势力",
      paragraphs: [
        "2024年4月21日，唐钱婷在全国游泳冠军赛中游出1:04.39——历史第四快的成绩，也是新的亚洲纪录，距离金的世界纪录只差0.26秒。此后她又在2024年多哈短池世锦赛夺冠，巴黎奥运周期持续向纪录发起冲击。",
        "女子百米蛙泳的下一章，很可能就写在这场追赶里。",
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
