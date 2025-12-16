"use client";

import Image from "next/image";
import Link from "next/link";
import { PiPlay } from "react-icons/pi";

const reels = [
  {
    id: "reel-1",
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&auto=format&fit=crop&q=80",
    title: "Designing a mood board from scratch",
    creator: "designhub",
    views: "120K",
  },
  {
    id: "reel-2",
    thumbnail:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=700&auto=format&fit=crop&q=80",
    title: "Top motion tips in After Effects",
    creator: "motioncraft",
    views: "88K",
  },
  {
    id: "reel-3",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&auto=format&fit=crop&q=80",
    title: "Color grading cinematic travel footage",
    creator: "wanderfilms",
    views: "204K",
  },
];

export function TrendingReels() {
  return (
    <section className="rounded-3xl border border-neutral-200 bg-white px-4 py-5 shadow-sm">
      <header className="flex items-center justify-between pb-4">
        <div>
          <h2 className="text-lg font-semibold text-neutral-900">
            Trending Reels
          </h2>
          <p className="text-sm text-neutral-500">
            A quick peek at what the community is remixing today.
          </p>
        </div>
        <Link
          href="/reels"
          className="text-sm font-semibold text-blue-500 hover:text-blue-600"
        >
          View all
        </Link>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {reels.map((reel) => (
          <Link
            key={reel.id}
            href={`/reels/${reel.id}`}
            className="group relative overflow-hidden rounded-2xl bg-neutral-900"
          >
            <Image
              src={reel.thumbnail}
              alt={reel.title}
              width={400}
              height={600}
              className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 text-white">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/80">
                <PiPlay />
                {reel.views} views
              </div>
              <p className="mt-1 line-clamp-2 text-sm font-semibold">
                {reel.title}
              </p>
              <p className="mt-1 text-xs text-white/70">@{reel.creator}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
