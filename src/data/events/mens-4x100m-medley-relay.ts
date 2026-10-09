import type { SwimEvent } from "@/lib/types";

/**
 * 男子 4×100 米混合泳接力（长池）世界纪录演进
 * 数据来源：Wikipedia "4 × 100 metres medley relay" 等
 * 数据截至：2026年10月
 *
 * holder 一律使用国家英文名（站点接力项目惯例），中文译名由 names.ts 映射。
 * progression 空缺说明（宁缺毋滥）：
 *  - 英国 3:28.10（2019 光州）以前的纪录沿革未能核实到可靠日期，暂缺；
 *  - 2026 年泛太平洋与 2026 年欧锦赛的该项目结果未能核实，暂缺。
 */
export const mens4x100mMedleyRelay: SwimEvent = {
  slug: "mens-4x100m-medley-relay",
  stroke: "relay",
  distance: 400,
  gender: "men",
  course: "LCM",
  name: "男子 4×100 米混合泳接力",
  summary:
    "3:26.78——东京之夜美国队的复仇之作，而巴黎的3:27.46属于中国：徐嘉余、覃海洋、孙佳俊、潘展乐在2024年8月4日终结了美国人对这个项目长达40年的奥运垄断。这是男子泳坛最沉重的王座易主。",
  dataAsOf: "2026年10月",
  progression: [
    { time: "3:28.10", holder: "Great Britain", country: "GBR", date: "2019-07-27", meet: "世界锦标赛", place: "光州", note: "亚当·皮蒂的蛙泳棒次奠定胜局；此前沿革未能核实，暂缺" },
    { time: "3:26.78", holder: "United States", country: "USA", date: "2021-08-01", meet: "2020年东京奥运会", place: "东京", note: "现世界纪录；中国队当届因蝶泳棒次抢跳被取消成绩" },
  ],

  asianRecord: {
    time: "3:27.46", holder: "China", country: "CHN",
    date: "2024-08-04", meet: "2024年巴黎奥运会", place: "巴黎",
    note: "徐嘉余·覃海洋·孙佳俊·潘展乐；夺冠成绩同时为中国纪录",
  },
  chineseRecord: {
    time: "3:27.46", holder: "China", country: "CHN",
    date: "2024-08-04", meet: "2024年巴黎奥运会", place: "巴黎",
    note: "力压美国（该项目40年奥运垄断被终结）与东道主法国夺金",
  },

  top10: [
    { time: "3:26.78", holder: "United States", country: "USA", date: "2021-08-01", meet: "2020年东京奥运会", wr: true, note: "现世界纪录" },
    { time: "3:27.20", holder: "United States", country: "USA", date: "2023-07-30", meet: "2023年福冈世锦赛", note: "中国队获银牌并创当时亚洲纪录" },
    { time: "3:27.46", holder: "China", country: "CHN", date: "2024-08-04", meet: "2024年巴黎奥运会", note: "亚洲纪录，奥运金牌" },
    { time: "3:28.10", holder: "Great Britain", country: "GBR", date: "2019-07-27", meet: "2019年光州世锦赛", note: "夺冠时为世界纪录" },
    { time: "3:29.62", holder: "Australia", country: "AUS", date: "2023-07-30", meet: "2023年福冈世锦赛", note: "当届铜牌" },
  ],
  top10Note:
    "历史前十集中在美国（奥运七连冠时代）、英国（皮蒂时代）与中国（2023年起的银-金-金三部曲）；2025年新加坡世锦赛中国队再度夺金（夺冠成绩未能核实到可靠来源），潘展乐压轴棒次游出45秒92。",

  history: [
    {
      heading: "四十年的美国王座",
      paragraphs: [
        "自1984年洛杉矶奥运会起，美国队在男子4×100混合泳接力上连夺十金——仰泳的传统、蛙泳的世代积累，让这枚金牌几乎成了美国队的保留节目。2019年光州，亚当·皮蒂领衔的英国队以3:28.10首破世界纪录，被视为最有可能掀翻王座的挑战者。",
        "2021年8月1日的东京，美国队游出3:26.78回击——把世界纪录攥回手中；同一场决赛，中国队因蝶泳棒次抢跳被取消成绩，交了一笔昂贵的学费。没人想到，剧本的高潮在三年后。",
      ],
    },
    {
      heading: "巴黎之夜：40年垄断终结",
      paragraphs: [
        "2024年8月4日，拉德芳斯体育馆：徐嘉余（仰）、覃海洋（蛙）、孙佳俊（蝶）、潘展乐（自）——中国队3:27.46，力压美国与东道主法国，终结了美国队长达40年的奥运垄断。这是中国男子游泳史上分量最重的一枚接力金牌。",
        "2023年福冈（银牌）、2024年巴黎（金牌）、2025年新加坡（再夺金，潘展乐压轴45.92）——中国队在这个项目上完成了从追赶者到王者的三年。亚运会赛场上，日本队长期把持这枚金牌，中国队近年才逐步翻盘，详见冠军榜。",
      ],
    },
  ],
  sources: [
    {
      label: "Wikipedia：4 × 100 metres medley relay",
      url: "https://en.wikipedia.org/wiki/4_%C3%97_100_metres_medley_relay",
    },
    {
      label: "Wikipedia：Swimming at the 2024 Summer Olympics – Men's 4 × 100 metre medley relay",
      url: "https://en.wikipedia.org/wiki/Swimming_at_the_2024_Summer_Olympics_%E2%80%93_Men%27s_4_%C3%97_100_metre_medley_relay",
    },
    {
      label: "World Aquatics 官方纪录",
      url: "https://www.worldaquatics.com/swimming/records",
    },
  ],
};
