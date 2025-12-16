import { AppShell } from "@/components/layout/AppShell";
import { PageHeading } from "@/components/layout/PageHeading";
import {
  PiMagnifyingGlass,
  PiHashStraight,
  PiUserCircle,
  PiMapPin,
} from "react-icons/pi";

const trending = [
  { id: "trend-1", label: "color grading", count: "32k posts" },
  { id: "trend-2", label: "analog photography", count: "21k posts" },
  { id: "trend-3", label: "interior design", count: "18k posts" },
  { id: "trend-4", label: "sketchbook tours", count: "12k posts" },
];

export default function SearchPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <PageHeading
          title="Search"
          description="Look up creators, places, or topics you want to explore next."
        />

        <div className="rounded-3xl border border-neutral-200 bg-white shadow-sm">
          <div className="flex items-center gap-3 border-b border-neutral-200 px-4 py-3">
            <PiMagnifyingGlass className="text-xl text-neutral-400" />
            <input
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-neutral-400"
              placeholder="Try 'architecture field notes'"
            />
          </div>

          <div className="grid gap-6 px-5 py-6 md:grid-cols-2">
            <section className="space-y-4">
              <h2 className="text-sm font-semibold text-neutral-500">
                Trending topics
              </h2>
              <ul className="space-y-3">
                {trending.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between rounded-2xl border border-neutral-200 px-4 py-3 text-sm transition hover:border-neutral-300 hover:bg-neutral-50"
                  >
                    <div className="flex items-center gap-3 font-medium text-neutral-800">
                      <PiHashStraight className="text-lg text-neutral-400" />
                      {item.label}
                    </div>
                    <span className="text-xs text-neutral-500">
                      {item.count}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-sm font-semibold text-neutral-500">
                Try searching by
              </h2>
              <div className="grid gap-3">
                <button className="flex items-center gap-3 rounded-2xl border border-neutral-200 px-4 py-3 text-left text-sm font-medium text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50">
                  <PiUserCircle className="text-xl text-neutral-400" />
                  Creators · Studios · Collaborators
                </button>
                <button className="flex items-center gap-3 rounded-2xl border border-neutral-200 px-4 py-3 text-left text-sm font-medium text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50">
                  <PiHashStraight className="text-xl text-neutral-400" />
                  Topics · Trends · Hashtags
                </button>
                <button className="flex items-center gap-3 rounded-2xl border border-neutral-200 px-4 py-3 text-left text-sm font-medium text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50">
                  <PiMapPin className="text-xl text-neutral-400" />
                  Places · Pop-ups · Nearby events
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
