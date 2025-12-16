import Image from "next/image";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeading } from "@/components/layout/PageHeading";
import { PiBookmarkSimple, PiSquaresFour, PiUserPlus } from "react-icons/pi";

const gallery = Array.from({ length: 9 }).map((_, index) => ({
  id: `post-${index + 1}`,
  title: `Project highlight ${index + 1}`,
  cover: `https://images.unsplash.com/photo-149${80 + index}50108023-c5249f4df085?w=900&auto=format&fit=crop&q=80`,
}));

export default function ProfilePage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <PageHeading
          title="you.design"
          description="Design director crafting immersive visual systems, brand experiences, and documentary-style storytelling."
          action={
            <button className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-100">
              <PiUserPlus className="text-lg" />
              Follow
            </button>
          }
        />

        <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center gap-6">
            <div className="relative h-28 w-28 overflow-hidden rounded-full border border-neutral-200">
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80"
                alt="Profile portrait"
                fill
                sizes="112px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-wrap items-center gap-4 text-sm text-neutral-700">
              <Stat count="182" label="posts" />
              <Stat count="24.8k" label="followers" />
              <Stat count="1.1k" label="following" />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800">
                Message
              </button>
              <button className="rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-100">
                <PiBookmarkSimple className="text-lg" />
              </button>
              <button className="rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-100">
                <PiSquaresFour className="text-lg" />
              </button>
            </div>
          </div>
          <div className="mt-6 space-y-2 text-sm text-neutral-600">
            <p>📍 Based in Copenhagen · they/them</p>
            <p>
              Founder of <Link href="/explore">Collective Atlas</Link> ·
              Workshops on narrative design and systems thinking.
            </p>
            <p>
              Latest project:{" "}
              <Link href="/explore" className="text-blue-500">
                Spectrum Series
              </Link>{" "}
              with @aurora.studio
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-neutral-900">
              Recent posts
            </h2>
            <Link href="/reels" className="text-sm font-semibold text-blue-500">
              View highlights
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <Link
                key={item.id}
                href={`/explore/${item.id}`}
                className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md"
              >
                <div className="relative h-48">
                  <Image
                    src={item.cover}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2 px-4 py-4">
                  <h3 className="text-sm font-semibold text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Part of the Horizon collection.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}

type StatProps = {
  count: string;
  label: string;
};

function Stat({ count, label }: StatProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-neutral-200 px-5 py-3 text-sm font-semibold text-neutral-900">
      <span>{count}</span>
      <span className="text-xs font-medium uppercase tracking-wide text-neutral-400">
        {label}
      </span>
    </div>
  );
}
