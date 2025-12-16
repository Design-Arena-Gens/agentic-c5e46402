"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PiHouseFill,
  PiCompass,
  PiFilmSlate,
  PiChatCircleDots,
  PiBell,
  PiUserCircle,
  PiSquaresFour,
} from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

type NavItem = {
  href: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const primaryNav: NavItem[] = [
  { href: "/", label: "Home", Icon: PiHouseFill },
  { href: "/search", label: "Search", Icon: IoSearch },
  { href: "/explore", label: "Explore", Icon: PiCompass },
  { href: "/reels", label: "Reels", Icon: PiFilmSlate },
  { href: "/messages", label: "Messages", Icon: PiChatCircleDots },
  { href: "/notifications", label: "Notifications", Icon: PiBell },
  { href: "/create", label: "Create", Icon: PiSquaresFour },
  { href: "/profile", label: "Profile", Icon: PiUserCircle },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 border-r border-neutral-200 bg-white/80 px-4 py-6 backdrop-blur md:flex md:flex-col">
      <Link
        href="/"
        className="mb-8 flex items-center gap-2 px-3 text-2xl font-semibold tracking-tight text-neutral-900"
      >
        <FaInstagram className="text-2xl text-pink-500" />
        Moment
      </Link>

      <nav className="flex flex-1 flex-col gap-1">
        {primaryNav.map(({ href, label, Icon }) => {
          const isActive =
            href === "/"
              ? pathname === "/"
              : pathname.startsWith(href) && href !== "/";

          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-neutral-100 text-neutral-900"
                  : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
              }`}
            >
              <Icon className="text-xl" />
              {label}
            </Link>
          );
        })}
      </nav>

      <button className="mt-8 inline-flex items-center gap-2 rounded-xl border border-neutral-200 px-3 py-2 text-sm font-medium text-neutral-700 transition hover:border-neutral-300 hover:text-neutral-900">
        <PiSquaresFour className="text-lg" />
        Threads
      </button>
    </aside>
  );
}
