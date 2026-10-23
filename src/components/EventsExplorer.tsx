"use client";

import { useMemo, useState } from "react";
import { EventCard, type EventCardData } from "./EventCard";

export function EventsExplorer({ events }: { events: EventCardData[] }) {
  const strokes = useMemo(
    () => ["全部", ...Array.from(new Set(events.map((e) => e.strokeZh)))],
    [events],
  );
  const genders = ["全部", "男子", "女子", "男女混合"];

  const [stroke, setStroke] = useState("全部");
  const [gender, setGender] = useState("全部");

  const filtered = events.filter(
    (e) =>
      (stroke === "全部" || e.strokeZh === stroke) &&
      (gender === "全部" || e.genderZh === gender),
  );

  return (
    <div>
      <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-slate-400">泳姿</span>
          {strokes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setStroke(s)}
              className={`rounded-full px-3 py-1 text-sm transition-colors ${
                stroke === s
                  ? "bg-pool-600 font-medium text-white"
                  : "bg-pool-50 text-pool-700 hover:bg-pool-100"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-400">性别</span>
          {genders.map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => setGender(g)}
              className={`rounded-full px-3 py-1 text-sm transition-colors ${
                gender === g
                  ? "bg-pool-600 font-medium text-white"
                  : "bg-pool-50 text-pool-700 hover:bg-pool-100"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 text-sm text-slate-400">
        共 {filtered.length} 个项目
      </div>

      <div className="mt-3 grid gap-4 md:grid-cols-2">
        {filtered.map((ev) => (
          <EventCard key={ev.slug} ev={ev} />
        ))}
      </div>
    </div>
  );
}
