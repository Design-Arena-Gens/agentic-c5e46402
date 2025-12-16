"use client";

import Image from "next/image";
import { stories } from "@/data/sampleData";

export function StoriesBar() {
  return (
    <section className="relative flex items-center gap-4 overflow-x-auto border border-neutral-200 bg-white px-4 py-3 shadow-sm sm:rounded-2xl">
      {stories.map((story) => (
        <button
          key={story.id}
          className="flex w-20 min-w-[5rem] flex-col items-center gap-2"
        >
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-full border-4 bg-white ${
              story.isLive
                ? "border-gradient-live"
                : "border-gradient-story"
            }`}
          >
            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-neutral-100">
              <Image
                src={story.avatar}
                alt={story.username}
                fill
                sizes="56px"
                className="object-cover"
              />
              {story.isLive ? (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full bg-rose-500 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white shadow">
                  Live
                </span>
              ) : null}
            </div>
          </div>
          <span className="line-clamp-1 text-xs font-medium text-neutral-700">
            {story.username}
          </span>
        </button>
      ))}
    </section>
  );
}
