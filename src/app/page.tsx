import Link from "next/link";
import { events, siteConfig, strokeMeta } from "@/data";
import { countryOf, holderZh, isRatified, toSeconds, zhDate } from "@/lib/display";
import type { RecordEntry, Stroke } from "@/lib/types";

function wrOf(event: (typeof events)[number]): RecordEntry {
  const ratified = event.progression.filter(isRatified);
  return ratified[ratified.length - 1];
}

export default function Home() {
  const totalRecords = events.reduce((n, e) => n + e.progression.length, 0);
  const strokesInUse = Array.from(new Set(events.map((e) => e.stroke)));
  const featured = events.find((e) => e.slug === "mens-100m-freestyle")!;
  const featuredWr = wrOf(featured);
  const featuredMore = [
    {
      slug: "womens-200m-medley",
      line: "2025年6月加拿大选拔赛，麦金托什把自己保持的世界纪录再推快0.17秒，女子混合泳已进入她的时代。",
    },
    {
      slug: "mens-200m-freestyle",
      line: "快速泳衣时代罗马之夜的1:42.00已悬挂十七年，波波维奇2022年的1:42.97是最接近的一次。",
    },
    {
      slug: "mens-400m-freestyle",
      line: "同为2009年罗马的遗产；2026年尔湾泛太平洋赛上，肖特的3:40.52距它只剩0.45秒。",
    },
  ];
  const others = events.filter(
    (e) => e.slug !== featured.slug && !featuredMore.some((f) => f.slug === e.slug),
  );

  const recent = events
    .flatMap((e) =>
      e.progression
        .filter(isRatified)
        .slice(-3)
        .map((r) => ({ event: e, record: r })),
    )
    .sort((a, b) => (a.record.date < b.record.date ? 1 : -1))
    .slice(0, 6);

  const firstYear = Math.min(
    ...events.map((e) => Number(e.progression[0].date.slice(0, 4))),
  );
  const lastYear = Math.max(
    ...events.map((e) => Number(wrOf(e).date.slice(0, 4))),
  );

  const totalChampions = events.reduce(
    (n, e) => n + (e.champions?.length ?? 0),
    0,
  );
  const stats = [
    { label: "收录项目", value: String(events.length) },
    { label: "纪录条目", value: `${totalRecords}` },
    { label: "历届大赛冠军", value: `${totalChampions} 条` },
    { label: "数据跨越", value: `${firstYear}–${lastYear}` },
  ];

  return (
    <div>
      {/* 英雄区 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pool-950 via-pool-800 to-pool-600 text-white">
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 h-24 w-full opacity-25"
          aria-hidden
        >
          <path
            d="M0 70 C 180 20, 360 20, 540 70 S 900 120, 1080 70 1440 70 V140 H0 Z"
            fill="#ffffff"
          />
          <path
            d="M0 100 C 240 60, 480 60, 720 100 S 1200 140, 1440 100 V140 H0 Z"
            fill="#ffffff"
            opacity="0.5"
          />
        </svg>
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-24">
          <p className="text-sm tracking-[0.3em] text-pool-200">
            SWIMMING HISTORY · {firstYear}—{lastYear}
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-wide sm:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-3 text-lg text-pool-100">{siteConfig.tagline}</p>
          <p className="mt-5 max-w-2xl leading-relaxed text-pool-100/90">
            {siteConfig.description}
            每个项目还收录奥运会、世锦赛、泛太平洋、欧锦赛、亚运会五大系列的历届冠军与夺冠成绩。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/events/"
              className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-pool-800 transition-colors hover:bg-pool-50"
            >
              浏览全部项目
            </Link>
            <Link
              href="/about/"
              className="rounded-full border border-white/40 px-6 py-2.5 text-sm text-white transition-colors hover:bg-white/10"
            >
              关于数据来源
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur"
              >
                <div className="font-mono text-2xl font-bold tabular-nums">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-pool-100/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 焦点纪录 */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold text-pool-950">焦点纪录</h2>
          <Link
            href="/events/"
            className="text-sm text-pool-600 hover:text-pool-700"
          >
            全部项目 →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="flex flex-col justify-between rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-6">
            <div>
              <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-700">
                男子 100 米自由泳 · 现世界纪录
              </span>
              <div className="mt-4 font-mono text-6xl font-bold tabular-nums text-pool-900">
                {featuredWr.time}
              </div>
              <div className="mt-3 text-lg font-semibold text-pool-950">
                {holderZh(featuredWr.holder)}
                <span className="ml-2 text-sm font-normal text-slate-400">
                  {featuredWr.holder}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {zhDate(featuredWr.date)}，{featuredWr.meet}个人决赛。46.40
                是该项目 120 年历史上第 52 次被承认的世界纪录，亚洲选手第一次站上男子百米自由泳之巅。
              </p>
            </div>
            <Link
              href={`/events/${featured.slug}/`}
              className="mt-6 self-start text-sm font-medium text-pool-700 hover:text-pool-600"
            >
              查看完整演进（52 条纪录）→
            </Link>
          </div>

          {featuredMore.map(({ slug, line }) => {
            const e = events.find((ev) => ev.slug === slug)!;
            const wr = wrOf(e);
            const c = countryOf(wr.country);
            return (
              <div
                key={slug}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-pool-400 hover:shadow-md hover:shadow-pool-100"
              >
                <div>
                  <span className="rounded-full bg-pool-50 px-2.5 py-1 text-xs font-medium text-pool-700">
                    {e.name} · 现世界纪录
                  </span>
                  <div className="mt-4 font-mono text-5xl font-bold tabular-nums text-pool-900">
                    {wr.time}
                  </div>
                  <div className="mt-3 text-lg font-semibold text-pool-950">
                    {c.flag && <span className="mr-1">{c.flag}</span>}
                    {holderZh(wr.holder)}
                    <span className="ml-2 text-sm font-normal text-slate-400">
                      {wr.holder}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{line}</p>
                </div>
                <Link
                  href={`/events/${slug}/`}
                  className="mt-6 self-start text-sm font-medium text-pool-700 hover:text-pool-600"
                >
                  查看完整演进（{e.progression.filter(isRatified).length} 条纪录）→
                </Link>
              </div>
            );
          })}

          {/* 男子 100 米仰泳：项目页尚未收录，先展示世界纪录 */}
          <div className="flex flex-col justify-between rounded-2xl border border-dashed border-slate-300 bg-slate-50/60 p-6">
            <div>
              <span className="rounded-full bg-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600">
                男子 100 米仰泳 · 现世界纪录
              </span>
              <div className="mt-4 font-mono text-5xl font-bold tabular-nums text-pool-900">
                51.60
              </div>
              <div className="mt-3 text-lg font-semibold text-pool-950">
                <span className="mr-1">🇮🇹</span>
                托马斯·切孔
                <span className="ml-2 text-sm font-normal text-slate-400">Thomas Ceccon</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                2022年6月布达佩斯世锦赛决赛，切孔将原纪录一举提高0.25秒；四年过去，51.60仍是该项目的历史最快。
              </p>
            </div>
            <span className="mt-6 self-start text-sm font-medium text-slate-400">
              项目页面筹备中 · 纪录先行
            </span>
          </div>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {others.map((e) => {
              const wr = wrOf(e);
              const c = countryOf(wr.country);
              return (
                <Link
                  key={e.slug}
                  href={`/events/${e.slug}/`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-pool-400 hover:shadow-md hover:shadow-pool-100"
                >
                  <div>
                    <div className="text-xs text-slate-400">{e.name}</div>
                    <div className="mt-1.5 font-semibold text-pool-950 group-hover:text-pool-700">
                      {c.flag && <span className="mr-1">{c.flag}</span>}
                      {holderZh(wr.holder)}
                    </div>
                    <div className="mt-0.5 text-sm text-slate-400">
                      {zhDate(wr.date)}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-3xl font-bold tabular-nums text-pool-700">
                      {wr.time}
                    </div>
                    <div className="text-xs text-slate-400">
                      {e.progression.filter(isRatified).length} 条纪录
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
      </section>

      {/* 按泳姿浏览 */}
      <section className="border-y border-pool-100 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold text-pool-950">按泳姿浏览</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {(Object.keys(strokeMeta) as Stroke[]).map((s) => {
              const list = events.filter((e) => e.stroke === s);
              const active = list.length > 0;
              const inner = (
                <>
                  <div className="text-lg font-semibold">{strokeMeta[s].zh}</div>
                  <div className="mt-2 text-sm opacity-75">
                    {active ? `${list.length} 个项目` : "即将收录"}
                  </div>
                </>
              );
              return active ? (
                <Link
                  key={s}
                  href="/events/"
                  className="rounded-2xl border border-pool-200 bg-pool-50 p-5 text-pool-800 transition-colors hover:border-pool-400 hover:bg-pool-100"
                >
                  {inner}
                </Link>
              ) : (
                <div
                  key={s}
                  className="rounded-2xl border border-dashed border-slate-200 p-5 text-slate-400"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 最近的纪录刷新 */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-pool-950">最近的纪录刷新</h2>
        <div className="mt-6 divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white">
          {recent.map(({ event, record }) => {
            const c = countryOf(record.country);
            return (
              <Link
                key={`${event.slug}-${record.date}-${record.holder}`}
                href={`/events/${event.slug}/`}
                className="flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-pool-50/60"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <span className="w-24 shrink-0 text-sm tabular-nums text-slate-400">
                    {record.date}
                  </span>
                  <span className="shrink-0 font-mono text-lg font-bold tabular-nums text-pool-700">
                    {record.time}
                  </span>
                  <span className="truncate text-sm text-slate-600">
                    {c.flag && <span className="mr-1">{c.flag}</span>}
                    {holderZh(record.holder)}
                    <span className="ml-2 text-slate-400">{event.name}</span>
                  </span>
                </div>
                <span className="shrink-0 text-xs text-slate-300">
                  {toSeconds(record.time).toFixed(2)}s
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
