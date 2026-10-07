import Link from "next/link";

export interface EventCardData {
  slug: string;
  name: string;
  strokeZh: string;
  genderZh: string;
  distance: number;
  wrTime: string;
  wrHolderZh: string;
  wrHolder: string;
  wrCountryFlag: string | null;
  wrCountryZh: string;
  wrDateLabel: string;
  wrDate: string;
  count: number;
  firstYear: number;
  championCount: number;
}

export function EventCard({ ev }: { ev: EventCardData }) {
  return (
    <Link
      href={`/events/${ev.slug}/`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-pool-400 hover:shadow-lg hover:shadow-pool-100"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-pool-950 group-hover:text-pool-700">
          {ev.name}
        </h3>
        <span className="mt-0.5 shrink-0 rounded-full bg-pool-50 px-2 py-0.5 text-xs text-pool-700">
          {ev.strokeZh} · {ev.distance}米
        </span>
      </div>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="font-mono text-3xl font-bold tabular-nums text-pool-700">
          {ev.wrTime}
        </span>
        <span className="text-xs text-slate-400">现世界纪录</span>
      </div>
      <div className="mt-2 text-sm text-slate-600">
        {ev.wrCountryFlag && <span className="mr-1">{ev.wrCountryFlag}</span>}
        {ev.wrHolderZh}
        <span className="ml-1 text-slate-400">{ev.wrHolder}</span>
      </div>
      <div className="mt-1 text-xs text-slate-400">{ev.wrDateLabel}</div>
      <div className="mt-4 border-t border-slate-100 pt-3 text-xs text-slate-400">
        {ev.count} 条世界纪录 · {ev.firstYear} 年至今
        {ev.championCount > 0 && (
          <span className="mt-1 block text-pool-600">
            🏆 历届大赛冠军 {ev.championCount} 条（奥运 / 世锦赛 / 泛太 / 欧锦 / 亚运）
          </span>
        )}
      </div>
    </Link>
  );
}
