"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "首页" },
  { href: "/events/", label: "项目" },
  { href: "/about/", label: "关于" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-pool-100 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2.5">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
            <path
              d="M2 7.5c2-2.2 4-2.2 6 0s4 2.2 6 0 4-2.2 6 0"
              stroke="#3893c6"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M2 12.5c2-2.2 4-2.2 6 0s4 2.2 6 0 4-2.2 6 0"
              stroke="#2676ab"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M2 17.5c2-2.2 4-2.2 6 0s4 2.2 6 0 4-2.2 6 0"
              stroke="#1f5e8b"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-lg font-bold tracking-wide text-pool-900">
            泳史
          </span>
          <span className="hidden text-sm text-slate-400 sm:inline">
            游泳项目历史与世界纪录
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                  active
                    ? "bg-pool-100 font-medium text-pool-800"
                    : "text-slate-500 hover:bg-pool-50 hover:text-pool-700"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
