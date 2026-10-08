"use client";

import { useEffect, useRef, useState } from "react";
import { Maximize2, Minimize2 } from "lucide-react";
import { PortalShell } from "./PortalShell";

export function EmbeddedApp({ title, src }: { title: string; src: string }) {
  const frameBox = useRef<HTMLDivElement>(null);
  const [isFull, setIsFull] = useState(false);

  useEffect(() => {
    const onChange = () => setIsFull(document.fullscreenElement === frameBox.current);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const toggleFull = () => {
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    } else {
      void frameBox.current?.requestFullscreen();
    }
  };

  return (
    <PortalShell>
      <div className="flex h-[calc(100vh-90px)] flex-col px-4 py-3 lg:px-5">
        <div className="mb-3 flex items-center justify-between border-b border-ftu pb-2">
          <h1 className="text-lg font-medium text-ftu">{title}</h1>
          <button
            type="button"
            onClick={toggleFull}
            className="flex items-center gap-1 text-sm text-ftu hover:underline"
          >
            <Maximize2 className="size-4" /> Toàn màn hình
          </button>
        </div>
        <div ref={frameBox} className="relative flex-1 bg-white">
          <iframe
            src={src}
            title={title}
            allowFullScreen
            className="size-full rounded-[9.6px] border border-ftu"
          />
          {isFull ? (
            <button
              type="button"
              onClick={toggleFull}
              className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 rounded-full bg-ftu px-4 py-2 text-sm font-medium text-white shadow-lg hover:brightness-110"
            >
              <Minimize2 className="size-4" /> Thoát toàn màn hình (Esc)
            </button>
          ) : null}
        </div>
      </div>
    </PortalShell>
  );
}
