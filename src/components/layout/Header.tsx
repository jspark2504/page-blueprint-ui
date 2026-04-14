"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

import siteConfig from "@/content/site.config";

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <ul className="serif-body flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-7">
      {siteConfig.nav.map((item) => {
        const matchPath = item.matchPath ?? item.href.split("#")[0] ?? item.href;
        const active = pathname === matchPath;
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={`block rounded-md px-3 py-2 text-base transition sm:px-0 sm:py-0 ${
                active ? "text-[#2d5016]" : "text-[#36452d] hover:text-[#2d5016]"
              }`}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
      <li className="mt-1 sm:mt-0">
        <Link
          href="/#visit-guide"
          className="inline-flex rounded-full bg-[#2d5016] px-5 py-2 text-sm font-semibold text-white hover:bg-[#3a6520]"
          onClick={onNavigate}
        >
          예약하기
        </Link>
      </li>
    </ul>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-[#e8e4dc] bg-[#faf8f5]/95 backdrop-blur-sm">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-zinc-900 focus:shadow"
      >
        본문으로 건너뛰기
      </a>
      <div className="mx-auto flex h-[4.7rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2d5016] text-sm font-semibold text-white">
            N
          </div>
          <span className="serif-display text-[1.65rem] text-[#203218]">{siteConfig.siteName}</span>
        </Link>

        <nav className="hidden sm:block" aria-label="주요 메뉴">
          <NavLinks />
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-[#d9d3c8] p-2 text-[#203218] hover:bg-[#f0ece3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d5016] sm:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "메뉴 닫기" : "메뉴 열기"}</span>
          <span aria-hidden className="flex flex-col gap-1">
            <span className={`h-0.5 w-5 bg-current transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <div
        id={menuId}
        className={`sm:hidden ${open ? "block" : "hidden"}`}
        role="dialog"
        aria-modal="true"
        aria-label="모바일 내비게이션"
      >
        <div className="fixed inset-0 top-16 z-30 bg-black/35" aria-hidden onClick={() => setOpen(false)} />
        <nav className="relative z-40 border-b border-[#d9d3c8] bg-[#faf8f5] px-4 py-4" aria-label="모바일 주요 메뉴">
          <NavLinks onNavigate={() => setOpen(false)} />
        </nav>
      </div>
    </header>
  );
}
