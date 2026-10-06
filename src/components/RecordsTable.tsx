import { FLAG_ZH, countryOf, holderZh, isRatified, zhDate } from "@/lib/display";
import type { RecordEntry } from "@/lib/types";

export function RecordsTable({ records }: { records: RecordEntry[] }) {
  let no = 0;
  const rows = records.map((r) => {
    const ratified = isRatified(r);
    if (ratified) no += 1;
    return { r, ratified, no: ratified ? no : null };
  });
  const currentNo = no;
  const country = (code: string) => countryOf(code);

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
      <table className="w-full min-w-[640px] text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-pool-50/60 text-left text-xs tracking-wide text-slate-500">
            <th className="px-4 py-3 font-medium">#</th>
            <th className="px-4 py-3 font-medium">成绩</th>
            <th className="px-4 py-3 font-medium">运动员</th>
            <th className="px-4 py-3 font-medium">国家 / 地区</th>
            <th className="px-4 py-3 font-medium">日期</th>
            <th className="px-4 py-3 font-medium">赛事 · 地点</th>
            <th className="px-4 py-3 font-medium">备注</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ r, ratified, no: n }, i) => {
            const isCurrent = ratified && n === currentNo;
            const c = country(r.country);
            return (
              <tr
                key={`${r.holder}-${r.date}-${i}`}
                className={`border-b border-slate-100 last:border-0 ${
                  isCurrent
                    ? "border-l-4 border-l-amber-400 bg-amber-50/70"
                    : ratified
                      ? "hover:bg-pool-50/50"
                      : "text-slate-400 opacity-80"
                }`}
              >
                <td className="px-4 py-2.5 tabular-nums text-slate-400">
                  {n ?? "—"}
                </td>
                <td className="px-4 py-2.5 font-mono font-semibold tabular-nums text-pool-800">
                  {r.time}
                </td>
                <td className="px-4 py-2.5">
                  <span className={isCurrent ? "font-semibold" : ""}>
                    {holderZh(r.holder)}
                  </span>
                  <span className="ml-1.5 text-xs text-slate-400">
                    {r.holder}
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-2.5">
                  {c.flag && <span className="mr-1">{c.flag}</span>}
                  {c.zh}
                </td>
                <td className="whitespace-nowrap px-4 py-2.5 tabular-nums text-slate-600">
                  {zhDate(r.date)}
                </td>
                <td className="px-4 py-2.5 text-slate-600">
                  {r.meet && <span>{r.meet}</span>}
                  {r.meet && r.place && " · "}
                  {r.place && <span className="text-slate-400">{r.place}</span>}
                </td>
                <td className="px-4 py-2.5">
                  <div className="flex flex-wrap items-center gap-1">
                    {isCurrent && (
                      <span className="rounded bg-amber-100 px-1.5 py-0.5 text-xs font-medium text-amber-700">
                        现世界纪录
                      </span>
                    )}
                    {!ratified && (
                      <span className="rounded bg-rose-100 px-1.5 py-0.5 text-xs text-rose-600">
                        未获批准
                      </span>
                    )}
                    {r.flags?.map((f) => (
                      <span
                        key={f}
                        className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-500"
                      >
                        {FLAG_ZH[f]}
                      </span>
                    ))}
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
  );
}
