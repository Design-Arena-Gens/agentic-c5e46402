"use client";

import Image from "next/image";
import { suggestedProfiles } from "@/data/sampleData";
import Link from "next/link";

export function SuggestionsPanel() {
  return (
    <aside className="sticky top-4 hidden h-fit w-full max-w-sm flex-col gap-6 md:flex">
      <ProfileSummary />
      <section className="rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm">
        <header className="flex items-center justify-between text-sm font-semibold text-neutral-500">
          <span>Suggested for you</span>
          <button className="text-xs font-semibold text-neutral-900">
            See all
          </button>
        </header>
        <ul className="mt-4 space-y-3">
          {suggestedProfiles.map((profile) => (
            <li key={profile.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full">
                  <Image
                    src={profile.avatar}
                    alt={profile.username}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <Link
                    href={`/profile/${profile.username}`}
                    className="flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:underline"
                  >
                    {profile.username}
                    {profile.followed ? (
                      <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-neutral-500">
                        Following
                      </span>
                    ) : null}
                  </Link>
                  <p className="text-xs text-neutral-500">{profile.reason}</p>
                </div>
              </div>
              <button className="text-xs font-semibold text-blue-500 hover:text-blue-600">
                Follow
              </button>
            </li>
          ))}
        </ul>
      </section>

      <footer className="text-xs leading-relaxed text-neutral-400">
        <p>
          © {new Date().getFullYear()} Moment • Built for exploration and
          inspiration.
        </p>
        <p className="mt-3">
          <Link href="/privacy" className="hover:text-neutral-600">
            Privacy
          </Link>{" "}
          ·{" "}
          <Link href="/terms" className="hover:text-neutral-600">
            Terms
          </Link>{" "}
          ·{" "}
          <Link href="/api" className="hover:text-neutral-600">
            API
          </Link>
        </p>
      </footer>
    </aside>
  );
}

function ProfileSummary() {
  return (
    <div className="flex items-center justify-between rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <Image
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80"
            alt="Your profile picture"
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div>
          <Link
            href="/profile"
            className="text-sm font-semibold text-neutral-900 hover:underline"
          >
            you.design
          </Link>
          <p className="text-xs text-neutral-500">Alex Morgan</p>
        </div>
      </div>
      <button className="text-xs font-semibold text-blue-500 hover:text-blue-600">
        Switch
      </button>
    </div>
  );
}
