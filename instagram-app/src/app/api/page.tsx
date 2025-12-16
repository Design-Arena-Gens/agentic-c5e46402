import { AppShell } from "@/components/layout/AppShell";
import { PageHeading } from "@/components/layout/PageHeading";
import { PiKey, PiSparkle, PiCodeBlock } from "react-icons/pi";

const capabilities = [
  {
    title: "GraphQL sandbox",
    description:
      "Query public profile data, posts, and reels using versioned schemas. Perfect for building dashboards or research tools.",
    icon: PiCodeBlock,
  },
  {
    title: "Creator insights",
    description:
      "Authenticated endpoints offer reach metrics, story performance, and audience insights refreshed hourly.",
    icon: PiSparkle,
  },
  {
    title: "Partner integrations",
    description:
      "Embed Moment content in your product with oEmbed, webhooks, and custom sharing flows.",
    icon: PiKey,
  },
];

export default function ApiPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <PageHeading
          title="Moment API"
          description="Build on top of Moment with secure APIs, webhooks, and analytics endpoints."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm"
            >
              <item.icon className="text-2xl text-neutral-400" />
              <h3 className="text-base font-semibold text-neutral-900">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
