"use client";

import { SidebarNav } from "@/components/navigation/SidebarNav";
import { BottomNav } from "@/components/navigation/BottomNav";
import { SuggestionsPanel } from "@/components/feed/SuggestionsPanel";

type Props = {
  children: React.ReactNode;
  rightPanel?: React.ReactNode;
};

export function AppShell({ children, rightPanel }: Props) {
  return (
    <div className="flex min-h-screen bg-neutral-100">
      <SidebarNav />
      <BottomNav />

      <main className="flex w-full justify-center px-4 pb-24 pt-6 md:pl-0 md:pr-8 md:pt-10">
        <div className="flex w-full max-w-6xl flex-col gap-8 md:flex-row">
          <section className="w-full md:max-w-[620px]">{children}</section>
          {rightPanel ?? <SuggestionsPanel />}
        </div>
      </main>
    </div>
  );
}
