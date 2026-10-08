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
import { mens200mFreestyleChampions } from "./champions/mens-200m-freestyle";
import { womens200mFreestyleChampions } from "./champions/womens-200m-freestyle";
import { mens400mFreestyleChampions } from "./champions/mens-400m-freestyle";
import { womens400mFreestyleChampions } from "./champions/womens-400m-freestyle";
import { mens4x100mFreestyleRelayChampions } from "./champions/mens-4x100m-freestyle-relay";
import { womens4x100mFreestyleRelayChampions } from "./champions/womens-4x100m-freestyle-relay";

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
