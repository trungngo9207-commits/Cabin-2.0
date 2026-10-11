"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { PanelLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { NewBadge } from "./NewBadge";
import { sideNav, topNav } from "./nav";

const DESKTOP_QUERY = "(min-width: 1024px)";

function subscribeDesktop(onChange: () => void) {
  const mq = window.matchMedia(DESKTOP_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function useIsDesktop() {
  return useSyncExternalStore(
    subscribeDesktop,
    () => window.matchMedia(DESKTOP_QUERY).matches,
    () => true,
  );
}

export function PortalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDesktop = useIsDesktop();
  // Desktop keeps the sidebar open by default; phones start with it closed.
  const [desktopOpen, setDesktopOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const open = isDesktop ? desktopOpen : mobileOpen;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const toggle = () => (isDesktop ? setDesktopOpen((v) => !v) : setMobileOpen((v) => !v));

  return (
    <div className="min-h-dvh bg-white font-sans text-[#212529]">
      <div
        role="note"
        className="fixed inset-x-0 top-0 z-40 flex h-8 items-center justify-center gap-2 bg-[#212529] px-3 text-center text-xs text-white sm:text-sm"
      >
        <span className="shrink-0 rounded bg-[#ffc107] px-1.5 font-bold whitespace-nowrap text-[#1d1606]">BẢN DEMO</span>
        <span className="truncate">Dự án nhóm 3 KAIZENZ, không phải FTU Gate chính thức</span>
      </div>

      <header className="fixed inset-x-0 top-8 z-30 flex h-[90px] items-center gap-2 bg-ftu px-2 text-white">
        <button
          type="button"
          aria-label={open ? "Thu gọn menu" : "Mở menu"}
          aria-expanded={open}
          aria-controls="portal-sidebar"
          onClick={toggle}
          className="grid size-11 shrink-0 place-items-center rounded-md border border-white/40 bg-white/10 hover:bg-white/20"
        >
          <PanelLeft className="size-5" />
        </button>
        <div className="hidden flex-1 items-center justify-between gap-4 px-4 lg:flex">
          {topNav.map((item) => (
            <span key={item} className="max-w-[120px] text-[16px] leading-6">
              {item}
            </span>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-2 rounded-full bg-white/20 py-1 pr-4 pl-1">
          <span
            aria-hidden="true"
            className="grid size-10 place-items-center rounded-full bg-white text-sm font-medium text-ftu"
          >
            SV
          </span>
          <div className="text-sm leading-5">
            <div>Sinh viên</div>
            <div className="text-white/80">Tài khoản demo</div>
          </div>
        </div>
      </header>

      {!isDesktop && mobileOpen ? (
        <div
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 top-[122px] z-10 bg-black/40"
        />
      ) : null}

      <aside
        id="portal-sidebar"
        inert={!open}
        className={cn(
          "fixed top-[122px] bottom-0 left-0 z-20 w-[280px] max-w-[85vw] overflow-y-auto border-r-2 border-ftu bg-white px-2.5 transition-transform",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <nav aria-label="Menu chức năng">
          <ul>
            {sideNav.map((item) => {
              const active = item.href !== undefined && item.href === pathname;
              const content = (
                <span className="flex items-center gap-2">
                  <span>{item.label}</span>
                  {item.badge ? (
                    <span className="grid size-[18px] place-items-center rounded-full bg-red-700 text-[11px] text-white">
                      {item.badge}
                    </span>
                  ) : null}
                  {item.isNew ? <NewBadge /> : null}
                </span>
              );
              return (
                <li
                  key={item.label}
                  className={cn(
                    "border-b border-[#ddd] text-[16px] text-black",
                    active && "-mx-2.5 border-b-2 border-b-ftu bg-[#f0d5d6] px-2.5",
                    item.isNew && !active && "font-medium text-ftu",
                  )}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setMobileOpen(false)}
                      className="block py-[15px]"
                    >
                      {content}
                    </Link>
                  ) : (
                    <span
                      aria-disabled="true"
                      title="Chưa có trong bản demo"
                      className="block py-[15px] text-[#555]"
                    >
                      {content}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      <main className={cn("pt-[122px] transition-[padding]", desktopOpen && "lg:pl-[280px]")}>
        {children}
      </main>
    </div>
  );
}
