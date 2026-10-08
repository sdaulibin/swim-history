import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProgressionChart, type ChartMark } from "@/components/ProgressionChart";
import { RecordsTable } from "@/components/RecordsTable";
import { ChampionsExplorer } from "@/components/ChampionsExplorer";
import { events, genderMeta, strokeMeta } from "@/data";
import { zhNames } from "@/data/names";
import {
  FLAG_ZH,
  countryOf,
  holderZh,
  isRatified,
  toSeconds,
  zhDate,
} from "@/lib/display";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const CHART_MARKS: Record<string, ChartMark[]> = {
  "mens-100m-freestyle": [
    { date: "1922-07-09", label: "首破1分钟" },
    { date: "1976-07-25", label: "首破50秒" },
  ],
  "womens-100m-freestyle": [
    { date: "1964-02-29", label: "长池首破1分钟" },
    { date: "2017-07-23", label: "舍斯特伦 51.71" },
  ],
  "mens-100m-breaststroke": [
    { date: "2001-06-29", label: "首破1分钟" },
    { date: "2015-04-17", label: "皮蒂首破58秒" },
  ],
  "womens-100m-breaststroke": [
    { date: "1996-07-21", label: "海因斯夺金" },
    { date: "2017-07-25", label: "莉莉·金 1:04.13" },
  ],
  "mens-200m-freestyle": [
    { date: "2009-07-28", label: "比德曼 1:42.00" },
  ],
  "womens-200m-freestyle": [
    { date: "1976-07-22", label: "首破2分钟" },
    { date: "2023-07-26", label: "悬置14年后告破" },
  ],
  "mens-400m-freestyle": [
    { date: "1908-07-17", label: "泰勒 5:36.8" },
    { date: "2009-07-26", label: "比德曼 3:40.07" },
  ],
  "womens-400m-freestyle": [
    { date: "2009-07-26", label: "首破4分钟" },
    { date: "2016-08-07", label: "莱德基时代" },
  ],
  "mens-4x100m-freestyle-relay": [
    { date: "2000-09-16", label: "悉尼 3:13.67" },
    { date: "2008-08-11", label: "神奇一棒" },
  ],
  "womens-4x100m-freestyle-relay": [
    { date: "1912-07-13", label: "首项世界纪录" },
    { date: "2023-07-23", label: "首破 3:28" },
  ],
  "mens-4x200m-freestyle-relay": [
    { date: "2000-09-19", label: "悉尼主场首冠" },
    { date: "2008-08-13", label: "首破 7 分钟" },
  ],
  "womens-4x200m-freestyle-relay": [
    { date: "2009-07-30", label: "中国队 7:42.08" },
    { date: "2023-07-27", label: "澳 7:37.50 现 WR" },
  ],
  "mens-100m-butterfly": [
    { date: "1960-06-26", label: "首破1分钟" },
    { date: "2009-08-01", label: "菲尔普斯 49.82" },
  ],
  "mens-200m-butterfly": [
    { date: "1975-08-21", label: "首破2分钟" },
    { date: "2019-07-24", label: "首破 1:51" },
  ],
  "womens-100m-butterfly": [
    { date: "1977-08-28", label: "首破1分钟" },
    { date: "1981-08-16", label: "57.93 悬置18年" },
  ],
  "womens-200m-butterfly": [
    { date: "1981-08-13", label: "2:05.96 悬置19年" },
    { date: "2009-10-21", label: "刘子歌 2:01.81" },
  ],
  "womens-100m-backstroke": [
    { date: "2002-08-13", label: "首破1分钟" },
    { date: "2024-06-18", label: "史密斯 57.13" },
  ],
  "womens-200m-backstroke": [
    { date: "1991-08-25", label: "艾盖尔塞吉时代" },
    { date: "2019-07-26", label: "首破 2:04" },
  ],
  "mens-200m-medley": [
    { date: "1991-01-13", label: "首破2分钟" },
    { date: "2025-07-30", label: "马尔尚 1:52.69" },
  ],
  "mens-400m-medley": [
    { date: "1968-08-30", label: "首破4:40" },
    { date: "2023-07-23", label: "马尔尚 4:02.50" },
  ],
  "womens-200m-medley": [
    { date: "1997-10", label: "吴艳艳 2:09.72" },
    { date: "2025-06-09", label: "麦金托什 2:05.70" },
  ],
  "womens-400m-medley": [
    { date: "2012-07", label: "叶诗文 4:28.43" },
    { date: "2025-06-11", label: "麦金托什 4:23.65" },
  ],
};

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return {};
  return {
    title: `${event.name}：世界纪录与历史`,
    description: event.summary,
  };
}

export default async function EventPage({ params }: PageProps) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();

  const idx = events.findIndex((e) => e.slug === slug);
  const prev = events[(idx - 1 + events.length) % events.length];
  const next = events[(idx + 1) % events.length];

  const ratified = event.progression.filter(isRatified);
  const wr = ratified[ratified.length - 1];
  const first = ratified[0];
  const wrCountry = countryOf(wr.country);
  const improvement = toSeconds(first.time) - toSeconds(wr.time);

  const chartRecords = ratified.map((r) => ({
    time: r.time,
    seconds: toSeconds(r.time),
    holder: r.holder,
    holderDisplay: holderZh(r.holder),
    countryZh: countryOf(r.country).zh,
    date: r.date,
    dateLabel: zhDate(r.date),
    meet: r.meet,
  }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      {/* 面包屑 */}
      <nav className="text-sm text-slate-400">
        <Link href="/" className="hover:text-pool-700">
          首页
        </Link>
        <span className="mx-2">/</span>
        <Link href="/events/" className="hover:text-pool-700">
          项目
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-600">{event.name}</span>
      </nav>

      {/* 页头 */}
      <header className="mt-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-pool-100 px-2.5 py-1 text-xs font-medium text-pool-700">
            {genderMeta[event.gender].zh}
          </span>
          <span className="rounded-full bg-pool-100 px-2.5 py-1 text-xs font-medium text-pool-700">
            {strokeMeta[event.stroke].zh}
          </span>
          <span className="rounded-full bg-pool-100 px-2.5 py-1 text-xs font-medium text-pool-700">
            {event.distance} 米
          </span>
          <span className="rounded-full bg-pool-100 px-2.5 py-1 text-xs font-medium text-pool-700">
            长池（50米）
          </span>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-pool-950 sm:text-4xl">
          {event.name}
        </h1>
        <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
          {event.summary}
        </p>
      </header>

      {/* 现世界纪录 */}
      <section className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-r from-pool-950 via-pool-800 to-pool-600 text-white">
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[auto_1fr] lg:items-center">
          <div>
            <div className="text-sm text-pool-200">现世界纪录</div>
            <div className="mt-2 font-mono text-6xl font-bold tabular-nums sm:text-7xl">
              {wr.time}
            </div>
            <div className="mt-1 text-sm text-pool-200">
              {wrCountry.flag} {wrCountry.zh}
            </div>
          </div>
          <div className="lg:border-l lg:border-white/20 lg:pl-8">
            <div className="text-xl font-semibold">
              {holderZh(wr.holder)}
              <span className="ml-2 text-sm font-normal text-pool-200">
                {wr.holder}
              </span>
            </div>
            <div className="mt-1 text-pool-100">
              {zhDate(wr.date)}
              {wr.meet ? ` · ${wr.meet}` : ""}
              {wr.place ? ` · ${wr.place}` : ""}
            </div>
            {wr.flags && wr.flags.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {wr.flags.map((f) => (
                  <span
                    key={f}
                    className="rounded-full bg-white/15 px-2 py-0.5 text-xs"
                  >
                    {FLAG_ZH[f]}
                  </span>
                ))}
              </div>
            )}
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-pool-100">
              <span>
                第 <b className="font-mono text-base">{ratified.length}</b>{" "}
                次刷新（被承认）
              </span>
              <span>
                首项纪录 {first.date.slice(0, 4)} 年
              </span>
              <span>
                累计提升{" "}
                <b className="font-mono text-base">
                  {improvement.toFixed(1)}
                </b>{" "}
                秒
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 亚洲纪录 / 中国纪录 */}
      {(event.asianRecord || event.chineseRecord) && (
        <section className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            { rec: event.asianRecord, key: "asian", label: "亚洲纪录（长池）", chip: "bg-rose-100 text-rose-700" },
            { rec: event.chineseRecord, key: "chinese", label: "中国纪录（长池）", chip: "bg-amber-100 text-amber-700" },
          ]
            .filter(({ rec }) => Boolean(rec))
            .map(({ rec, key, label, chip }) => {
              const r = rec!;
              const rc = countryOf(r.country);
              return (
                <div
                  key={key}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${chip}`}
                    >
                      {label}
                    </span>
                    {r.wr && (
                      <span className="text-xs font-medium text-amber-600">
                        世界纪录
                      </span>
                    )}
                  </div>
                  <div className="mt-3 font-mono text-4xl font-bold tabular-nums text-pool-800">
                    {r.time}
                  </div>
                  <div className="mt-2 text-slate-700">
                    {rc.flag && <span className="mr-1">{rc.flag}</span>}
                    {holderZh(r.holder)}
                    {zhNames[r.holder] && (
                      <span className="ml-1.5 text-xs text-slate-400">
                        {r.holder}
                      </span>
                    )}
                  </div>
                  <div className="mt-1 text-xs text-slate-400">
                    {[r.meet, r.place, r.date?.replace(/-/g, ".")]
                      .filter(Boolean)
                      .join(" · ")}
                  </div>
                  {r.note && (
                    <div className="mt-2 text-xs leading-relaxed text-slate-500">
                      {r.note}
                    </div>
                  )}
                </div>
              );
            })}
        </section>
      )}

      {/* 纪录演进图 */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-pool-950">纪录演进</h2>
        <p className="mt-1 text-sm text-slate-500">
          阶梯线为被承认的世界纪录；阴影带为 2008–2009 年聚氨酯快速泳衣时代；悬停查看每项纪录。
        </p>
        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
          <ProgressionChart
            records={chartRecords}
            marks={CHART_MARKS[event.slug] ?? []}
          />
        </div>
      </section>

      {/* 历史前十成绩 */}
      {event.top10 && event.top10.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-pool-950">
            历史前十成绩
            <span className="ml-2 align-middle text-sm font-normal text-slate-400">
              长池 · 截至 {event.dataAsOf}
            </span>
          </h2>
          {event.top10Note && (
            <p className="mt-1 text-sm text-slate-500">{event.top10Note}</p>
          )}
          <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-pool-50/60 text-left text-xs tracking-wide text-slate-500">
                  <th className="px-4 py-3 font-medium">#</th>
                  <th className="px-4 py-3 font-medium">成绩</th>
                  <th className="px-4 py-3 font-medium">运动员</th>
                  <th className="px-4 py-3 font-medium">国家 / 地区</th>
                  <th className="px-4 py-3 font-medium">赛事 · 日期</th>
                </tr>
              </thead>
              <tbody>
                {event.top10.map((r, i) => {
                  const c = countryOf(r.country);
                  return (
                    <tr
                      key={`${r.time}-${r.holder}-${i}`}
                      className={`border-b border-slate-100 last:border-0 hover:bg-pool-50/50 ${
                        i === 0 ? "border-l-4 border-l-amber-400 bg-amber-50/60" : ""
                      }`}
                    >
                      <td className="px-4 py-2.5 tabular-nums text-slate-400">
                        {i + 1}
                      </td>
                      <td className="px-4 py-2.5 font-mono font-semibold tabular-nums text-pool-800">
                        {r.time}
                        {r.wr && (
                          <span className="ml-2 rounded bg-amber-100 px-1.5 py-0.5 text-xs font-medium text-amber-700">
                            WR
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-2.5">
                        <span className="font-medium">{holderZh(r.holder)}</span>
                        <span className="ml-1.5 text-xs text-slate-400">
                          {r.holder}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2.5">
                        {c.flag && <span className="mr-1">{c.flag}</span>}
                        {c.zh}
                      </td>
                      <td className="px-4 py-2.5 text-slate-600">
                        {r.meet}
                        {r.date && ` · ${r.date.replace(/-/g, ".")}`}
                        {r.note && (
                          <span className="ml-2 text-xs text-slate-400">
                            {r.note}
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* 历届大赛冠军 */}
      {event.champions && event.champions.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-pool-950">历届大赛冠军</h2>
          <p className="mt-1 text-sm text-slate-500">
            奥运会、世锦赛、泛太平洋锦标赛、欧锦赛与亚运会的该项冠军及夺冠成绩。
          </p>
          <div className="mt-4">
            <ChampionsExplorer champions={event.champions} />
          </div>
        </section>
      )}

      {/* 完整纪录表 */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-pool-950">
          完整纪录表
          <span className="ml-2 align-middle text-sm font-normal text-slate-400">
            共 {event.progression.length} 条（含{" "}
            {event.progression.length - ratified.length} 条未获批准）
          </span>
        </h2>
        <div className="mt-4">
          <RecordsTable records={event.progression} />
        </div>
      </section>

      {/* 项目历史 */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-pool-950">项目历史</h2>
        <div className="mt-6 space-y-10">
          {event.history.map((section) => (
            <article key={section.heading}>
              <h3 className="text-lg font-semibold text-pool-800">
                {section.heading}
              </h3>
              <div className="mt-3 space-y-3 leading-loose text-slate-600">
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 数据来源 */}
      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500">
        <div className="font-medium text-slate-600">数据来源（截至{event.dataAsOf}）</div>
        <ul className="mt-2 space-y-1">
          {event.sources.map((s) => (
            <li key={s.url}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pool-600 hover:text-pool-700 hover:underline"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs leading-relaxed text-slate-400">
          纪录演进数据译自维基百科（CC BY-SA 4.0），赛事与地点名为中文译写；成绩与日期保留原文。如发现错漏，欢迎对照来源指出。
        </p>
      </section>

      {/* 上一项 / 下一项 */}
      <nav className="mt-10 flex items-center justify-between gap-4 border-t border-pool-100 pt-6 text-sm">
        <Link
          href={`/events/${prev.slug}/`}
          className="text-slate-500 hover:text-pool-700"
        >
          ← {prev.name}
        </Link>
        <Link
          href={`/events/${next.slug}/`}
          className="text-slate-500 hover:text-pool-700"
        >
          {next.name} →
        </Link>
      </nav>
    </div>
  );
}
