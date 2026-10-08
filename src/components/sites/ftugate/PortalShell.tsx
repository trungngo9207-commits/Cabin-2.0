"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bell, ChevronDown, PanelLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { sideNav, topNav } from "./nav";

export function PortalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-screen bg-white font-sans text-[#212529]">
      <header className="fixed inset-x-0 top-0 z-30 flex h-[90px] items-center gap-2 bg-ftu px-2 text-white">
        <button
          type="button"
          aria-label="Thu gọn menu"
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 shrink-0 place-items-center rounded-md border border-white/40 bg-white/10 hover:bg-white/20"
        >
          <PanelLeft className="size-5" />
        </button>
        <nav className="hidden flex-1 items-center justify-between px-4 lg:flex lg:gap-4">
          {topNav.map((item) => (
            <span
              key={item}
              className="max-w-[120px]cursor-pointer text-[16px] leading-6 hover:underline"
            >
              {item}
            </span>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 rounded-full bg-white/20 py-1 pr-3 pl-1">
          <span className="grid size-10 place-items-center rounded-full bg-[#da251d] text-lg text-yellow-300">
            ★
          </span>
          <span className="grid size-10 place-items-center rounded-full bg-white text-sm font-medium text-ftu">
            SV
          </span>
          <div className="hidden text-sm leading-5 sm:block">
            <div>Sinh viên FTU</div>
            <div>MSSV</div>
          </div>
          <Bell className="ml-1 size-6" />
          <ChevronDown className="size-4" />
        </div>
      </header>

      <aside
        className={cn(
          "fixed top-[90px] bottom-0 left-0 z-20 w-[280px] overflow-y-auto border-r-2 border-ftu bg-white px-2.5 transition-transform",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <ul>
          {sideNav.map((item) => {
            const active = item.href !== undefined && item.href === pathname;
            const content = (
              <span className="flex items-center gap-2">
                <span>{item.label}</span>
                {item.badge ? (
                  <span className="grid size-[18px] place-items-center rounded-full bg-red-500 text-[11px] text-white">
                    {item.badge}
                  </span>
                ) : null}
                {item.isNew ? (
                  <span className="rounded bg-[#ffc107] px-1 text-[11px] font-medium text-white">
                    New
                  </span>
                ) : null}
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
                  <Link href={item.href} className="block py-[15px]">
                    {content}
                  </Link>
                ) : (
                  <span className="block cursor-pointer py-[15px]">{content}</span>
                )}
              </li>
            );
          })}
        </ul>
      </aside>

      <main
        className={cn(
          "pt-[90px] transition-[padding]",
          open ? "lg:pl-[280px]" : "pl-0",
        )}
      >
        {children}
      </main>
    </div>
  );
}
