import Image from "next/image";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeading } from "@/components/layout/PageHeading";

const exploreItems = [
  {
    id: "exp-1",
    category: "Color Theory",
    title: "Building a vibrant gradient system for your brand",
    cover:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&auto=format&fit=crop&q=80",
  },
  {
    id: "exp-2",
    category: "Photography",
    title: "Shooting cinematic portraits with minimal gear",
    cover:
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=1000&auto=format&fit=crop&q=80",
  },
  {
    id: "exp-3",
    category: "Architecture",
    title: "Brutalist gems across Eastern Europe",
    cover:
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=1000&auto=format&fit=crop&q=80",
  },
  {
    id: "exp-4",
    category: "Design",
    title: "UI trends for 2025: Soft glass and typographic rhythm",
    cover:
      "https://images.unsplash.com/photo-1526481280695-3c469c8b0fd2?w=1000&auto=format&fit=crop&q=80",
  },
  {
    id: "exp-5",
    category: "Travel",
    title: "Hidden hiking routes along the Norwegian coast",
    cover:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000&auto=format&fit=crop&q=80",
  },
  {
    id: "exp-6",
    category: "Illustration",
    title: "From sketchbook to gallery: A process breakdown",
    cover:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&auto=format&fit=crop&q=80",
  },
];

export default function ExplorePage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <PageHeading
          title="Explore"
          description="Discover curated visuals from creators you may like. Hand-picked daily to fuel your inspiration."
          action={
            <Link
              href="/search"
              className="rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-100"
            >
              Trending searches
            </Link>
          }
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {exploreItems.map((item) => (
            <Link
              key={item.id}
              href={`/explore/${item.id}`}
              className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-56 md:h-64">
                <Image
                  src={item.cover}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-700 backdrop-blur">
                  {item.category}
                </span>
              </div>
              <div className="space-y-2 px-4 py-5">
                <h3 className="text-base font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500">
                  Trending in design, photography and content creation.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
