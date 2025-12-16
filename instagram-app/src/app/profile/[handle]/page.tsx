import { AppShell } from "@/components/layout/AppShell";
import { PageHeading } from "@/components/layout/PageHeading";

type PageProps = {
  params: { handle: string };
};

export default function ProfileHandlePage({ params }: PageProps) {
  const { handle } = params;

  return (
    <AppShell>
      <div className="space-y-6">
        <PageHeading
          title={`@${handle}`}
          description="Profile preview coming soon. Follow to stay up to date with their latest posts and reels."
        />

        <div className="rounded-3xl border border-neutral-200 bg-white p-6 text-sm text-neutral-600 shadow-sm">
          <p>
            We&apos;re still collecting highlights for this creator. Check back
            soon or explore similar creators in the discover feed.
          </p>
        </div>
      </div>
    </AppShell>
  );
}
