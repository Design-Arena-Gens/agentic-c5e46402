"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PiHouseFill,
  PiCompass,
  PiFilmSlate,
  PiChatCircleDots,
  PiUserCircle,
} from "react-icons/pi";

const navItems = [
  { href: "/", label: "Home", Icon: PiHouseFill },
  { href: "/explore", label: "Explore", Icon: PiCompass },
  { href: "/reels", label: "Reels", Icon: PiFilmSlate },
  { href: "/messages", label: "Messages", Icon: PiChatCircleDots },
  { href: "/profile", label: "Profile", Icon: PiUserCircle },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-neutral-200 bg-white/90 px-6 py-3 backdrop-blur md:hidden">
      <ul className="flex items-center justify-between">
        {navItems.map(({ href, label, Icon }) => {
          const isActive =
            href === "/"
              ? pathname === "/"
              : pathname.startsWith(href) && href !== "/";

          return (
            <li key={href}>
              <Link
                href={href}
                aria-label={label}
                className={`flex flex-col items-center text-xs font-medium transition-colors ${
                  isActive ? "text-neutral-900" : "text-neutral-500"
                }`}
              >
                <Icon className="text-xl" />
                <span className="mt-1">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
