"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Maximize2, Minimize2 } from "lucide-react";

const noop = () => () => {};

export function EmbeddedApp({ title, src }: { title: string; src: string }) {
  const frameBox = useRef<HTMLDivElement>(null);
  const [isFull, setIsFull] = useState(false);
  // iPhone Safari cannot put a div into fullscreen; fall back to opening the app in a new tab.
  const canFullscreen = useSyncExternalStore(
    noop,
    () => document.fullscreenEnabled,
    () => true,
  );

  useEffect(() => {
    const onChange = () => setIsFull(document.fullscreenElement === frameBox.current);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const enterFull = () => {
    frameBox.current?.requestFullscreen().catch(() => window.open(src, "_blank", "noopener"));
  };
  const exitFull = () => {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
  };

  const btnClass = "flex shrink-0 items-center gap-1 rounded whitespace-nowrap px-2 py-1.5 text-sm text-ftu hover:bg-[#fdf3f3]";

  return (
    <div className="flex h-[calc(100dvh-122px)] flex-col px-4 py-3 lg:px-5">
      <div className="mb-3 flex items-center justify-between border-b border-ftu pb-2">
        <h1 className="text-lg font-medium text-ftu">{title}</h1>
        {canFullscreen ? (
          <button type="button" onClick={enterFull} className={btnClass}>
            <Maximize2 className="size-4" /> Toàn màn hình
          </button>
        ) : (
          <a href={src} target="_blank" rel="noreferrer" className={btnClass}>
            <Maximize2 className="size-4" /> Mở trong tab mới
          </a>
        )}
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
            onClick={exitFull}
            className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 rounded-full bg-ftu px-4 py-2 text-sm font-medium text-white shadow-lg hover:brightness-110"
          >
            <Minimize2 className="size-4" /> Thoát toàn màn hình (Esc)
          </button>
        ) : null}
      </div>
    </div>
  );
}
