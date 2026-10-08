import { ChevronRight, ChevronsRight, Megaphone } from "lucide-react";

export type NewsCard = { title: string; date: string; tag: string };
export type NewsLine = { title: string; date: string; isNew?: boolean };

export function NewsSection({
  title,
  cards,
  lines = [],
}: {
  title: string;
  cards: NewsCard[];
  lines?: NewsLine[];
}) {
  return (
    <section className="rounded-[9.6px] border border-ftu bg-white">
      <div className="mx-2.5 flex items-center justify-between border-b border-ftu py-2.5">
        <h2 className="flex items-center gap-2 text-[16px] font-medium">
          <Megaphone className="size-4 text-ftu" />
          {title}
        </h2>
        <span className="flex cursor-pointer items-center text-ftu">
          Xem tiếp <ChevronRight className="size-4" />
        </span>
      </div>
      <div className="grid gap-4 p-3 md:grid-cols-[1fr_1fr_1.9fr]">
        {cards.map((c) => (
          <article key={c.title}>
            <div className="grid aspect-[16/9] place-items-center rounded-lg bg-gradient-to-br from-[#ad171c] to-[#e2585d] px-3 text-center text-sm font-bold text-white">
              {c.tag}
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-[#666]">
              <span className="h-px flex-1 bg-[#ccc]" />
              {c.date}
            </div>
            <p className="mt-1 line-clamp-3 text-justify">{c.title}</p>
          </article>
        ))}
        {lines.length > 0 ? (
          <ul className="border-l border-[#ccc] pl-4 md:col-start-3">
            {lines.map((l) => (
              <li
                key={l.title}
                className="flex items-center gap-4 border-b border-[#ddd] py-2.5 last:border-0"
              >
                <p className="flex-1 text-[15px]">
                  <ChevronsRight className="mr-1 inline size-4 text-ftu" />
                  {l.isNew ? (
                    <span className="mr-1 rounded bg-[#ffc107] px-1 text-[11px] text-white">
                      New
                    </span>
                  ) : null}
                  {l.title}
                </p>
                <span className="shrink-0 text-sm text-[#666]">{l.date}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
