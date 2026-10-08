/**
 * 泳史数据模型
 *
 * 数据来源：维基百科 World record progression 系列条目（CC BY-SA 4.0）。
 * 每个游泳项目（SwimEvent）对应 src/data/events/ 下的一个文件，
 * progression 按时间顺序收录该项目的（长池）世界纪录演进。
 */

export type Stroke =
  | "freestyle"
  | "backstroke"
  | "breaststroke"
  | "butterfly"
  | "medley"
  | "relay";

export type Gender = "men" | "women";

/** 纪录附加标记（对应维基百科表格中的括号注记） */
export type RecordFlag =
  | "h" // 预赛 heats
  | "sf" // 半决赛 semifinals
  | "r" // 接力第一棒 relay lead-off
  | "tt" // 计时赛 time trial
  | "yd" // 码制泳池（非50米标准池）
  | "eq"; // 平当时纪录 equalled

export interface RecordEntry {
  /** 成绩原文写法，如 "46.40"、"1:04.13"、"58.6"（手计时） */
  time: string;
  /** 运动员姓名（维基百科原文） */
  holder: string;
  /** 国家/地区代码（IOC） */
  country: string;
  /** 日期，ISO 格式 yyyy-mm-dd */
  date: string;
  /** 赛事（中文名，可缺省） */
  meet?: string;
  /** 地点（中文，可缺省） */
  place?: string;
  /** 附加标记 */
  flags?: RecordFlag[];
  /** 是否被世界泳联承认；缺省为 true */
  ratified?: boolean;
  /** 备注 */
  note?: string;
}

export interface HistorySection {
  heading: string;
  paragraphs: string[];
}

/** 大赛系列 */
export type MeetSeries =
  | "olympics" // 奥运会
  | "worlds" // 世界锦标赛（长池）
  | "panpacific" // 泛太平洋锦标赛
  | "euros" // 欧洲锦标赛（长池）
  | "asiangames"; // 亚运会

/** 一届大赛的冠军成绩 */
export interface ChampionEntry {
  series: MeetSeries;
  year: number;
  /** 举办城市（中文，可缺省） */
  city?: string;
  champion: string;
  country: string;
  /** 冠军成绩（个别早期届次可能缺失） */
  time?: string;
  /** 该成绩同时是世界纪录 */
  wr?: boolean;
  /** 奥运纪录 */
  or?: boolean;
  note?: string;
}

export interface SourceLink {
  label: string;
  url: string;
}

/** 区域级纪录（亚洲纪录 / 中国纪录等，长池） */
export interface SecondaryRecord {
  /** 成绩原文写法 */
  time: string;
  /** 运动员姓名（个人项目）或国家英文名（接力项目） */
  holder: string;
  /** 国家/地区代码（IOC） */
  country: string;
  /** 日期，ISO 格式；个别无法核实到日的可只写 yyyy 或 yyyy-mm */
  date?: string;
  /** 赛事（中文名，可缺省） */
  meet?: string;
  /** 地点（中文，可缺省） */
  place?: string;
  /** 该成绩同时为世界纪录 */
  wr?: boolean;
  /** 备注 */
  note?: string;
}

export interface SwimEvent {
  /** URL 路径标识，如 mens-100m-freestyle */
  slug: string;
  stroke: Stroke;
  /** 距离（米） */
  distance: number;
  gender: Gender;
  /** 目前只收录长池（50米） */
  course: "LCM";
  /** 项目中文名，如 "男子 100 米自由泳" */
  name: string;
  /** 一句话简介 */
  summary: string;
  /** 数据截至（说明数据快照时间） */
  dataAsOf: string;
  /** 世界纪录演进，按时间升序 */
  progression: RecordEntry[];
  /** 历届大赛冠军（奥运会、世锦赛、泛太平洋、欧锦赛、亚运会） */
  champions?: ChampionEntry[];
  /** 亚洲纪录（长池；未能核实则缺省） */
  asianRecord?: SecondaryRecord;
  /** 中国纪录（长池；未能核实则缺省） */
  chineseRecord?: SecondaryRecord;
  /** 项目历史 */
  history: HistorySection[];
  sources: SourceLink[];
}
