import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-pool-100 bg-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="font-semibold text-pool-800">泳史</span> ·
          非商业爱好者项目，收录游泳项目历史与世界纪录演进
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <Link href="/about/" className="hover:text-pool-700">
            数据来源与许可
          </Link>
          <a
            href="https://www.worldaquatics.com/swimming/records"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pool-700"
          >
            World Aquatics
          </a>
        </div>
      </div>
    </footer>
  );
}
