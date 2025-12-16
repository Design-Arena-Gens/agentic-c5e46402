import { AppShell } from "@/components/layout/AppShell";
import { PageHeading } from "@/components/layout/PageHeading";
import Image from "next/image";
import Link from "next/link";
import { PiPlay, PiChatCircleDots, PiHeart, PiShareNetwork } from "react-icons/pi";

type PageProps = {
  params: { reelId: string };
};

export default function ReelDetailsPage({ params }: PageProps) {
  const { reelId } = params;

  return (
    <AppShell
      rightPanel={
        <div className="hidden md:flex md:max-w-sm">
          <div className="sticky top-4 w-full rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-900">
              Remix this reel
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              Start from this creator&apos;s audio and add your own visuals to
              share with your followers.
            </p>
            <button className="mt-4 w-full rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800">
              Start remix
            </button>
          </div>
        </div>
      }
    >
      <div className="space-y-6">
        <PageHeading
          title={`Reel • ${reelId.replace(/[-_]/g, " ")}`}
          description="A deep dive into this creator&apos;s story. Add comments, remix, or share with your communities."
          action={
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-100">
                <PiShareNetwork className="text-lg" />
                Share
              </button>
              <Link
                href="/messages"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                <PiChatCircleDots className="text-lg" />
                Send as message
              </Link>
            </div>
          }
        />

        <div className="grid gap-6 md:grid-cols-[minmax(0,_420px)_1fr]">
          <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-black">
            <Image
              src="https://images.unsplash.com/photo-1516874882108-7d7032e1b0b4?w=900&auto=format&fit=crop&q=80"
              alt={reelId}
              width={600}
              height={900}
              className="h-[520px] w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/40 to-transparent p-4 text-white">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/70">
                <PiPlay />
                1 min 12 sec
              </div>
              <h2 className="mt-1 text-lg font-semibold">
                Designing with local light to build atmosphere
              </h2>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
            <div className="space-y-4 text-sm text-neutral-700">
              <p>
                Captured across multiple nights in Iceland, this reel explores
                how light behaves when you work with reflective fabrics and
                slow-motion capture. Swipe through the behind-the-scenes for the
                rig setup and color grading breakdown.
              </p>
              <p>
                Audio inspired by @soundscapes.studio • Shot on Sony FX3 •
                Graded in DaVinci Resolve.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-100">
                <PiHeart className="text-lg" />
                Appreciate
              </button>
              <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-100">
                <PiChatCircleDots className="text-lg" />
                Discuss
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
