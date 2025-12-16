import Link from "next/link";
import Image from "next/image";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeading } from "@/components/layout/PageHeading";
import { PiPlay, PiShareNetwork } from "react-icons/pi";

const reels = Array.from({ length: 9 }).map((_, index) => ({
  id: `highlight-${index + 1}`,
  title: `Creator highlight ${index + 1}`,
  thumbnail: `https://images.unsplash.com/photo-15${
    100 + index
  }30855697-b586d89ba3ee?w=900&auto=format&fit=crop&q=80`,
  duration: `${0}:${45 + index}`,
}));

export default function ReelsPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <PageHeading
          title="Reels"
          description="Short-form stories from creators you follow and fresh recommendations. Swipe in to remix and respond."
          action={
            <Link
              href="/create"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              <PiShareNetwork className="text-lg" />
              Upload reel
            </Link>
          }
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reels.map((reel) => (
            <Link
              key={reel.id}
              href={`/reels/${reel.id}`}
              className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-black shadow-sm"
            >
              <Image
                src={reel.thumbnail}
                alt={reel.title}
                width={600}
                height={900}
                className="h-80 w-full object-cover opacity-90 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/80">
                  <PiPlay />
                  {reel.duration}
                </div>
                <p className="mt-1 line-clamp-2 text-sm font-semibold">
                  {reel.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
