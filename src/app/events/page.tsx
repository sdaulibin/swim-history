import type { Metadata } from "next";
import { EventsExplorer } from "@/components/EventsExplorer";
import type { EventCardData } from "@/components/EventCard";
import { events, genderMeta, strokeMeta } from "@/data";
import { countryOf, holderZh, isRatified, zhDate } from "@/lib/display";

export const metadata: Metadata = {
  title: "全部项目",
  description: "按泳姿、性别浏览已收录的游泳项目及其世界纪录演进。",
};

export default function EventsPage() {
  const cards: EventCardData[] = events.map((e) => {
    const ratified = e.progression.filter(isRatified);
    const wr = ratified[ratified.length - 1];
    const c = countryOf(wr.country);
    return {
      slug: e.slug,
      name: e.name,
      strokeZh: strokeMeta[e.stroke].zh,
      genderZh: genderMeta[e.gender].zh,
      distance: e.distance,
      wrTime: wr.time,
      wrHolderZh: holderZh(wr.holder),
      wrHolder: wr.holder,
      wrCountryFlag: c.flag,
      wrCountryZh: c.zh,
      wrDateLabel: zhDate(wr.date),
      wrDate: wr.date,
      count: ratified.length,
      firstYear: Number(e.progression[0].date.slice(0, 4)),
      championCount: e.champions?.length ?? 0,
    };
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold text-pool-950">全部项目</h1>
      <p className="mt-2 text-slate-500">
        每个项目包含完整的世界纪录演进，以及奥运会、世锦赛、泛太平洋、欧锦赛、亚运会五大系列的历届冠军榜。
      </p>
      <div className="mt-8">
        <EventsExplorer events={cards} />
      </div>
    </div>
  );
}
