import type { Stroke } from "@/lib/types";
import { mens100mFreestyle } from "./events/mens-100m-freestyle";
import { womens100mFreestyle } from "./events/womens-100m-freestyle";
import { mens100mBreaststroke } from "./events/mens-100m-breaststroke";
import { womens100mBreaststroke } from "./events/womens-100m-breaststroke";

export const events = [
  mens100mFreestyle,
  womens100mFreestyle,
  mens100mBreaststroke,
  womens100mBreaststroke,
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
