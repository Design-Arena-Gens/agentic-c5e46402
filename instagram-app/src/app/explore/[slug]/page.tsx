import { AppShell } from "@/components/layout/AppShell";
import { PageHeading } from "@/components/layout/PageHeading";

type PageProps = {
  params: { slug: string };
};

export default function ExploreDetailsPage({ params }: PageProps) {
  const { slug } = params;

  return (
    <AppShell>
      <div className="space-y-6">
        <PageHeading
          title={slug.replace(/[-_]/g, " ")}
          description="Curated stories, creator interviews, and visual studies. Save the collection to revisit later."
        />

        <div className="space-y-4 text-sm text-neutral-600">
          <article className="rounded-3xl border border-neutral-200 bg-white p-6 leading-relaxed shadow-sm">
            <p>
              This collection dives deep into the textures, palettes, and
              narratives shaping the creative community today. Follow the
              featured accounts to add their work to your feed and get notified
              when new pieces drop.
            </p>
          </article>
        </div>
      </div>
    </AppShell>
  );
}
