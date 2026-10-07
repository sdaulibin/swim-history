"use client";

import { useMemo, useState } from "react";
import { SERIES_META, countryOf, holderZh } from "@/lib/display";
import type { ChampionEntry, MeetSeries } from "@/lib/types";

const ORDER: MeetSeries[] = [
  "olympics",
  "worlds",
  "panpacific",
  "euros",
  "asiangames",
];

export function ChampionsExplorer({ champions }: { champions: ChampionEntry[] }) {
  const available = useMemo(
    () => ORDER.filter((s) => champions.some((c) => c.series === s)),
    [champions],
  );
  const [active, setActive] = useState<MeetSeries>(available[0] ?? "olympics");

  const rows = champions.filter((c) => c.series === active);

  return (
    <div>
      {/* 赛事切换 */}
      <div className="mb-4 flex flex-wrap gap-2" role="tablist">
        {available.map((s) => {
          const meta = SERIES_META[s];
          const on = s === active;
          const count = champions.filter((c) => c.series === s).length;
          return (
            <button
              key={s}
              role="tab"
              aria-selected={on}
              onClick={() => setActive(s)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                on
                  ? `${meta.color} ring-1 ring-inset ring-current/20`
                  : "bg-white text-slate-500 ring-1 ring-inset ring-slate-200 hover:text-slate-700"
              }`}
            >
              {meta.zh}
              <span className="ml-1.5 text-xs opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-pool-50/60 text-left text-xs tracking-wide text-slate-500">
              <th className="px-4 py-3 font-medium">年份</th>
              <th className="px-4 py-3 font-medium">举办地</th>
              <th className="px-4 py-3 font-medium">冠军</th>
              <th className="px-4 py-3 font-medium">国家 / 地区</th>
              <th className="px-4 py-3 font-medium">夺冠成绩</th>
              <th className="px-4 py-3 font-medium">备注</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => {
              const c = countryOf(r.country);
              return (
                <tr
                  key={`${r.series}-${r.year}-${r.champion}-${i}`}
                  className="border-b border-slate-100 last:border-0 hover:bg-pool-50/50"
                >
                  <td className="whitespace-nowrap px-4 py-2.5 font-semibold tabular-nums text-slate-700">
                    {r.year}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2.5 text-slate-600">
                    {r.city ?? "—"}
                  </td>
                  <td className="px-4 py-2.5">
                    <span className="font-medium">{holderZh(r.champion)}</span>
                    <span className="ml-1.5 text-xs text-slate-400">
                      {r.champion}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2.5">
                    {c.flag && <span className="mr-1">{c.flag}</span>}
                    {c.zh}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2.5 font-mono font-semibold tabular-nums text-pool-800">
                    {r.time ?? "—"}
                  </td>
                  <td className="px-4 py-2.5">
                    <div className="flex flex-wrap items-center gap-1">
                      {r.wr && (
                        <span className="rounded bg-amber-100 px-1.5 py-0.5 text-xs font-medium text-amber-700">
                          世界纪录
                        </span>
                      )}
                      {r.or && (
                        <span className="rounded bg-amber-100 px-1.5 py-0.5 text-xs font-medium text-amber-700">
                          奥运纪录
                        </span>
                      )}
                      {r.note && (
                        <span className="text-xs text-slate-400">{r.note}</span>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-slate-400">
        数据经多源核对后录入，个别早期届次未能核实者已在数据文件中注明、暂不展示；
        “—”表示该届夺冠成绩未获可靠来源，宁缺毋滥。
      </p>
    </div>
  );
}
