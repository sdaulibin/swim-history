"use client";

import { useMemo, useState } from "react";

export interface ChartRecord {
  time: string;
  seconds: number;
  holder: string;
  holderDisplay: string;
  countryZh: string;
  date: string;
  dateLabel: string;
  meet?: string;
}

export interface ChartMark {
  date: string;
  label: string;
}

const W = 900;
const H = 440;
const M = { top: 28, right: 150, bottom: 42, left: 58 };
const PW = W - M.left - M.right;
const PH = H - M.top - M.bottom;

/** 聚氨酯快速泳衣时代（2008年批准使用，2010年1月起被禁） */
const ERA = { from: "2008-02-01", to: "2009-12-31", label: "快速泳衣时代" };

function yearFrac(iso: string): number {
  const [y, m, d] = iso.split("-").map(Number);
  return y + (m - 1) / 12 + (d - 1) / 365;
}

function tickLabel(sec: number): string {
  if (sec >= 60) {
    const m = Math.floor(sec / 60);
    const s = sec - m * 60;
    return `${m}:${s.toFixed(2).padStart(5, "0")}`;
  }
  return `${sec}`;
}

export function ProgressionChart({
  records,
  marks = [],
}: {
  records: ChartRecord[];
  marks?: ChartMark[];
}) {
  const [hover, setHover] = useState<number | null>(null);

  const chart = useMemo(() => {
    if (records.length < 2) return null;

    const xs = records.map((r) => yearFrac(r.date));
    const ys = records.map((r) => r.seconds);
    const x0 = xs[0];
    const x1 = Math.max(xs[xs.length - 1] + 0.5, x0 + 1);
    const yMin = Math.floor((Math.min(...ys) - 1.5) / 5) * 5;
    const yMax = Math.ceil((Math.max(...ys) + 1.5) / 5) * 5;

    const px = (yf: number) => M.left + ((yf - x0) / (x1 - x0)) * PW;
    const py = (s: number) => M.top + ((yMax - s) / (yMax - yMin)) * PH;

    // 阶梯折线：每项纪录保持到下一项诞生
    let path = `M ${px(xs[0])} ${py(ys[0])}`;
    for (let i = 1; i < records.length; i++) {
      path += ` L ${px(xs[i])} ${py(ys[i - 1])} L ${px(xs[i])} ${py(ys[i])}`;
    }
    path += ` L ${px(x1)} ${py(ys[ys.length - 1])}`;

    const area =
      `${path} L ${px(x1)} ${M.top + PH} L ${px(xs[0])} ${M.top + PH} Z`;

    // y 轴刻度（每 5 秒一档）
    const yTicks: number[] = [];
    for (let t = yMin; t <= yMax; t += 5) yTicks.push(t);

    // x 轴刻度（跨度大时每 20 年，否则每 10 年）
    const step = x1 - x0 > 60 ? 20 : 10;
    const xTicks: number[] = [];
    for (let y = Math.ceil(x0 / step) * step; y <= x1; y += step) xTicks.push(y);

    return {
      px,
      py,
      xs,
      ys,
      x0,
      x1,
      yMin,
      yMax,
      path,
      area,
      yTicks,
      xTicks,
      eraX1: px(yearFrac(ERA.from)),
      eraX2: px(yearFrac(ERA.to)),
      bottom: M.top + PH,
      hasEra: yearFrac(ERA.to) > x0 && yearFrac(ERA.from) < x1,
    };
  }, [records]);

  if (!chart) return null;

  const {
    px,
    py,
    xs,
    ys,
    path,
    area,
    yTicks,
    xTicks,
    eraX1,
    eraX2,
    bottom,
    hasEra,
  } = chart;

  const last = records.length - 1;
  const h = hover !== null ? records[hover] : null;

  // 悬浮提示定位（限制在画布内）
  const tipW = 200;
  const tipH = 66;
  const tipX =
    hover !== null
      ? Math.min(Math.max(px(xs[hover]) - tipW / 2, M.left + 2), W - tipW - 4)
      : 0;
  const tipY =
    hover !== null
      ? Math.min(Math.max(py(ys[hover]) - tipH - 14, M.top + 2), bottom - tipH)
      : 0;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full"
      role="img"
      aria-label="世界纪录演进阶梯图"
      onMouseLeave={() => setHover(null)}
    >
      {/* 快速泳衣时代色带 */}
      {hasEra && (
        <g>
          <rect
            x={eraX1}
            y={M.top}
            width={Math.max(eraX2 - eraX1, 1.5)}
            height={PH}
            fill="#f59e0b"
            opacity={0.12}
          />
          <text
            x={Math.max(eraX1, 4) + 10}
            y={M.top + PH / 2}
            fontSize={11}
            fill="#b45309"
            opacity={0.9}
            textAnchor="middle"
            transform={`rotate(-90 ${Math.max(eraX1, 4) + 10} ${M.top + PH / 2})`}
          >
            {ERA.label}
          </text>
        </g>
      )}

      {/* 网格与坐标轴 */}
      {yTicks.map((t) => (
        <g key={t}>
          <line
            x1={M.left}
            x2={W - M.right}
            y1={py(t)}
            y2={py(t)}
            stroke="#e2e8f0"
            strokeDasharray="3 4"
          />
          <text
            x={M.left - 8}
            y={py(t) + 4}
            fontSize={11}
            fill="#94a3b8"
            textAnchor="end"
          >
            {tickLabel(t)}
          </text>
        </g>
      ))}
      {xTicks.map((t) => (
        <text
          key={t}
          x={px(t)}
          y={bottom + 22}
          fontSize={11}
          fill="#94a3b8"
          textAnchor="middle"
        >
          {t}
        </text>
      ))}
      <text
        x={M.left - 44}
        y={M.top - 12}
        fontSize={11}
        fill="#64748b"
      >
        成绩（秒）
      </text>

      {/* 历史标注 */}
      {marks.map((m) => {
        const mx = px(yearFrac(m.date));
        const labelX = Math.min(Math.max(mx, M.left + 30), W - M.right - 30);
        return (
          <g key={m.date + m.label}>
            <line
              x1={mx}
              x2={mx}
              y1={M.top}
              y2={bottom}
              stroke="#94a3b8"
              strokeDasharray="4 4"
            />
            <text
              x={labelX}
              y={M.top + 12}
              fontSize={11}
              fill="#475569"
              textAnchor="middle"
            >
              {m.label}
            </text>
          </g>
        );
      })}

      {/* 纪录保持面积与阶梯线 */}
      <path d={area} fill="#93cbe9" opacity={0.18} />
      <path
        d={path}
        fill="none"
        stroke="#1f5e8b"
        strokeWidth={2}
        strokeLinejoin="round"
      />

      {/* 数据点 */}
      {records.map((r, i) => (
        <circle
          key={r.date + r.holder}
          cx={px(xs[i])}
          cy={py(ys[i])}
          r={i === last ? 5 : 3}
          fill={i === last ? "#f59e0b" : "#1f5e8b"}
          stroke="white"
          strokeWidth={i === last ? 2 : 0}
        />
      ))}

      {/* 现世界纪录标注 */}
      <text
        x={W - M.right + 12}
        y={py(ys[last]) - 4}
        fontSize={15}
        fontWeight={700}
        fill="#1f5e8b"
        fontFamily="var(--font-mono)"
      >
        {records[last].time}
      </text>
      <text
        x={W - M.right + 12}
        y={py(ys[last]) + 12}
        fontSize={11}
        fill="#64748b"
      >
        {records[last].holderDisplay}
      </text>

      {/* 悬浮提示 */}
      {h && (
        <g pointerEvents="none">
          <rect
            x={tipX}
            y={tipY}
            width={tipW}
            height={tipH}
            rx={8}
            fill="white"
            stroke="#cbd5e1"
          />
          <text x={tipX + 12} y={tipY + 22} fontSize={13} fontWeight={700} fill="#112a44">
            {h.time}
            <tspan fill="#475569" fontWeight={400}>
              {"  "}
              {h.holderDisplay}
            </tspan>
          </text>
          <text x={tipX + 12} y={tipY + 40} fontSize={11} fill="#64748b">
            {h.dateLabel} · {h.countryZh}
          </text>
          <text x={tipX + 12} y={tipY + 56} fontSize={11} fill="#94a3b8">
            {h.meet ? h.meet.slice(0, 14) : "—"}
          </text>
        </g>
      )}

      {/* 悬浮命中区域 */}
      {records.map((r, i) => (
        <circle
          key={`hit-${r.date}-${r.holder}`}
          cx={px(xs[i])}
          cy={py(ys[i])}
          r={11}
          fill="transparent"
          style={{ cursor: "pointer" }}
          onMouseEnter={() => setHover(i)}
        />
      ))}
    </svg>
  );
}
