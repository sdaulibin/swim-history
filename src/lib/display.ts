import { zhNames } from "@/data/names";
import type { MeetSeries, RecordFlag } from "@/lib/types";

/** 大赛系列元信息 */
export const SERIES_META: Record<
  MeetSeries,
  { zh: string; color: string }
> = {
  olympics: { zh: "奥运会", color: "bg-amber-100 text-amber-700" },
  worlds: { zh: "世锦赛", color: "bg-pool-100 text-pool-700" },
  panpacific: { zh: "泛太平洋", color: "bg-teal-100 text-teal-700" },
  euros: { zh: "欧锦赛", color: "bg-indigo-100 text-indigo-700" },
  asiangames: { zh: "亚运会", color: "bg-rose-100 text-rose-700" },
};

/** 国家/地区：中文名 + 旗帜 emoji（历史上已消失的国家无对应 emoji） */
export const COUNTRIES: Record<string, { zh: string; flag: string | null }> = {
  USA: { zh: "美国", flag: "🇺🇸" },
  AUS: { zh: "澳大利亚", flag: "🇦🇺" },
  HUN: { zh: "匈牙利", flag: "🇭🇺" },
  GER: { zh: "德国", flag: "🇩🇪" },
  GDR: { zh: "民主德国", flag: null },
  FRG: { zh: "联邦德国", flag: null },
  GBR: { zh: "英国", flag: "🇬🇧" },
  FRA: { zh: "法国", flag: "🇫🇷" },
  BRA: { zh: "巴西", flag: "🇧🇷" },
  JPN: { zh: "日本", flag: "🇯🇵" },
  URS: { zh: "苏联", flag: null },
  RUS: { zh: "俄罗斯", flag: "🇷🇺" },
  RSA: { zh: "南非", flag: "🇿🇦" },
  SWE: { zh: "瑞典", flag: "🇸🇪" },
  NED: { zh: "荷兰", flag: "🇳🇱" },
  BEL: { zh: "比利时", flag: "🇧🇪" },
  ROU: { zh: "罗马尼亚", flag: "🇷🇴" },
  CHN: { zh: "中国", flag: "🇨🇳" },
  LTU: { zh: "立陶宛", flag: "🇱🇹" },
  UKR: { zh: "乌克兰", flag: "🇺🇦" },
  YUG: { zh: "南斯拉夫", flag: null },
  CAN: { zh: "加拿大", flag: "🇨🇦" },
  ITA: { zh: "意大利", flag: "🇮🇹" },
  SRB: { zh: "塞尔维亚", flag: "🇷🇸" },
  HKG: { zh: "中国香港", flag: "🇭🇰" },
  EUN: { zh: "独联体", flag: null },
  EST: { zh: "爱沙尼亚", flag: "🇪🇪" },
  DEN: { zh: "丹麦", flag: "🇩🇰" },
  BUL: { zh: "保加利亚", flag: "🇧🇬" },
  NOR: { zh: "挪威", flag: "🇳🇴" },
};

export const FLAG_ZH: Record<RecordFlag, string> = {
  h: "预赛",
  sf: "半决赛",
  r: "接力第一棒",
  tt: "计时赛",
  yd: "码制泳池",
  eq: "平纪录",
};

export function countryOf(code: string): { zh: string; flag: string | null } {
  return COUNTRIES[code] ?? { zh: code, flag: null };
}

/** 运动员中文译名（names.ts 未收录时回退为原文） */
export function holderZh(holder: string): string {
  return zhNames[holder] ?? holder;
}

/** "1:04.13" -> 64.13；"58.6" -> 58.6 */
export function toSeconds(time: string): number {
  const m = time.match(/^(\d+):(\d+(?:\.\d+)?)$/);
  if (m) return Number(m[1]) * 60 + Number(m[2]);
  return Number.parseFloat(time);
}

/** 秒数转回显示格式 */
export function formatSeconds(sec: number): string {
  if (sec >= 60) {
    const m = Math.floor(sec / 60);
    const s = sec - m * 60;
    return `${m}:${s.toFixed(2).padStart(5, "0")}`;
  }
  return sec.toFixed(2);
}

/** "1961-05-02" -> "1961年5月2日" */
export function zhDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${y}年${m}月${d}日`;
}

export function isRatified(entry: { ratified?: boolean }): boolean {
  return entry.ratified !== false;
}
