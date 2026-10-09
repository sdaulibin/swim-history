import type { Stroke } from "@/lib/types";
import { mens100mFreestyle } from "./events/mens-100m-freestyle";
import { womens100mFreestyle } from "./events/womens-100m-freestyle";
import { mens100mBreaststroke } from "./events/mens-100m-breaststroke";
import { womens100mBreaststroke } from "./events/womens-100m-breaststroke";
import { mens200mFreestyle } from "./events/mens-200m-freestyle";
import { womens200mFreestyle } from "./events/womens-200m-freestyle";
import { mens400mFreestyle } from "./events/mens-400m-freestyle";
import { womens400mFreestyle } from "./events/womens-400m-freestyle";
import { mens4x100mFreestyleRelay } from "./events/mens-4x100m-freestyle-relay";
import { womens4x100mFreestyleRelay } from "./events/womens-4x100m-freestyle-relay";
import { mens100mFreestyleChampions } from "./champions/mens-100m-freestyle";
import { womens100mFreestyleChampions } from "./champions/womens-100m-freestyle";
import { mens100mBreaststrokeChampions } from "./champions/mens-100m-breaststroke";
import { womens100mBreaststrokeChampions } from "./champions/womens-100m-breaststroke";
import { mens4x200mFreestyleRelay } from "./events/mens-4x200m-freestyle-relay";
import { mens4x200mFreestyleRelayChampions } from "./champions/mens-4x200m-freestyle-relay";
import { womens4x200mFreestyleRelay } from "./events/womens-4x200m-freestyle-relay";
import { womens4x200mFreestyleRelayChampions } from "./champions/womens-4x200m-freestyle-relay";
import { mens100mButterfly } from "./events/mens-100m-butterfly";
import { mens100mButterflyChampions } from "./champions/mens-100m-butterfly";
import { mens200mButterfly } from "./events/mens-200m-butterfly";
import { mens200mButterflyChampions } from "./champions/mens-200m-butterfly";
import { womens100mButterfly } from "./events/womens-100m-butterfly";
import { womens100mButterflyChampions } from "./champions/womens-100m-butterfly";
import { womens200mButterfly } from "./events/womens-200m-butterfly";
import { womens200mButterflyChampions } from "./champions/womens-200m-butterfly";
import { womens100mBackstroke } from "./events/womens-100m-backstroke";
import { womens100mBackstrokeChampions } from "./champions/womens-100m-backstroke";
import { womens200mBackstroke } from "./events/womens-200m-backstroke";
import { womens200mBackstrokeChampions } from "./champions/womens-200m-backstroke";
import { mens200mMedley } from "./events/mens-200m-medley";
import { mens200mMedleyChampions } from "./champions/mens-200m-medley";
import { mens400mMedley } from "./events/mens-400m-medley";
import { mens400mMedleyChampions } from "./champions/mens-400m-medley";
import { womens200mMedley } from "./events/womens-200m-medley";
import { womens200mMedleyChampions } from "./champions/womens-200m-medley";
import { womens400mMedley } from "./events/womens-400m-medley";
import { womens400mMedleyChampions } from "./champions/womens-400m-medley";
import { mens200mFreestyleChampions } from "./champions/mens-200m-freestyle";
import { womens200mFreestyleChampions } from "./champions/womens-200m-freestyle";
import { mens400mFreestyleChampions } from "./champions/mens-400m-freestyle";
import { womens400mFreestyleChampions } from "./champions/womens-400m-freestyle";
import { mens4x100mFreestyleRelayChampions } from "./champions/mens-4x100m-freestyle-relay";
import { womens4x100mFreestyleRelayChampions } from "./champions/womens-4x100m-freestyle-relay";
import { mens200mBackstroke } from "./events/mens-200m-backstroke";
import { mens200mBackstrokeChampions } from "./champions/mens-200m-backstroke";
import { mens800mFreestyle } from "./events/mens-800m-freestyle";
import { mens800mFreestyleChampions } from "./champions/mens-800m-freestyle";
import { womens800mFreestyle } from "./events/womens-800m-freestyle";
import { womens800mFreestyleChampions } from "./champions/womens-800m-freestyle";
import { mens1500mFreestyle } from "./events/mens-1500m-freestyle";
import { mens1500mFreestyleChampions } from "./champions/mens-1500m-freestyle";
import { womens1500mFreestyle } from "./events/womens-1500m-freestyle";
import { womens1500mFreestyleChampions } from "./champions/womens-1500m-freestyle";
import { mens50mFreestyle } from "./events/mens-50m-freestyle";
import { mens50mFreestyleChampions } from "./champions/mens-50m-freestyle";
import { womens50mFreestyle } from "./events/womens-50m-freestyle";
import { womens50mFreestyleChampions } from "./champions/womens-50m-freestyle";
import { mens50mButterfly } from "./events/mens-50m-butterfly";
import { mens50mButterflyChampions } from "./champions/mens-50m-butterfly";
import { womens50mButterfly } from "./events/womens-50m-butterfly";
import { womens50mButterflyChampions } from "./champions/womens-50m-butterfly";
import { mens4x100mMedleyRelay } from "./events/mens-4x100m-medley-relay";
import { mens4x100mMedleyRelayChampions } from "./champions/mens-4x100m-medley-relay";
import { womens4x100mMedleyRelay } from "./events/womens-4x100m-medley-relay";
import { womens4x100mMedleyRelayChampions } from "./champions/womens-4x100m-medley-relay";

export const events = [
  { ...mens100mFreestyle, champions: mens100mFreestyleChampions },
  { ...womens100mFreestyle, champions: womens100mFreestyleChampions },
  { ...mens100mBreaststroke, champions: mens100mBreaststrokeChampions },
  { ...womens100mBreaststroke, champions: womens100mBreaststrokeChampions },
  { ...mens200mFreestyle, champions: mens200mFreestyleChampions },
  { ...womens200mFreestyle, champions: womens200mFreestyleChampions },
  { ...mens400mFreestyle, champions: mens400mFreestyleChampions },
  { ...womens400mFreestyle, champions: womens400mFreestyleChampions },
  { ...mens4x100mFreestyleRelay, champions: mens4x100mFreestyleRelayChampions },
  { ...womens4x100mFreestyleRelay, champions: womens4x100mFreestyleRelayChampions },
  { ...mens4x200mFreestyleRelay, champions: mens4x200mFreestyleRelayChampions },
  { ...womens4x200mFreestyleRelay, champions: womens4x200mFreestyleRelayChampions },
  { ...mens100mButterfly, champions: mens100mButterflyChampions },
  { ...mens200mButterfly, champions: mens200mButterflyChampions },
  { ...womens100mButterfly, champions: womens100mButterflyChampions },
  { ...womens200mButterfly, champions: womens200mButterflyChampions },
  { ...womens100mBackstroke, champions: womens100mBackstrokeChampions },
  { ...womens200mBackstroke, champions: womens200mBackstrokeChampions },
  { ...mens200mMedley, champions: mens200mMedleyChampions },
  { ...mens400mMedley, champions: mens400mMedleyChampions },
  { ...womens200mMedley, champions: womens200mMedleyChampions },
  { ...womens400mMedley, champions: womens400mMedleyChampions },
  { ...mens200mBackstroke, champions: mens200mBackstrokeChampions },
  { ...mens800mFreestyle, champions: mens800mFreestyleChampions },
  { ...womens800mFreestyle, champions: womens800mFreestyleChampions },
  { ...mens1500mFreestyle, champions: mens1500mFreestyleChampions },
  { ...womens1500mFreestyle, champions: womens1500mFreestyleChampions },
  { ...mens50mFreestyle, champions: mens50mFreestyleChampions },
  { ...womens50mFreestyle, champions: womens50mFreestyleChampions },
  { ...mens50mButterfly, champions: mens50mButterflyChampions },
  { ...womens50mButterfly, champions: womens50mButterflyChampions },
  { ...mens4x100mMedleyRelay, champions: mens4x100mMedleyRelayChampions },
  { ...womens4x100mMedleyRelay, champions: womens4x100mMedleyRelayChampions },
];

export const strokeMeta: Record<Stroke, { zh: string }> = {
  freestyle: { zh: "自由泳" },
  backstroke: { zh: "仰泳" },
  breaststroke: { zh: "蛙泳" },
  butterfly: { zh: "蝶泳" },
  medley: { zh: "混合泳" },
  relay: { zh: "接力" },
};

export const genderMeta: Record<string, { zh: string }> = {
  men: { zh: "男子" },
  women: { zh: "女子" },
};

export const siteConfig = {
  name: "泳史",
  tagline: "每一道浪花，都被记住",
  description:
    "收录游泳各项目的历史沿革与世界纪录演进：从1905年哈尔迈的1:05.8，到潘展乐的46.40——每一个时代的名字，都在这里。",
};
