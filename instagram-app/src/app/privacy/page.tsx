import { AppShell } from "@/components/layout/AppShell";
import { PageHeading } from "@/components/layout/PageHeading";

const sections = [
  {
    title: "Information we collect",
    content:
      "We collect the content you create and share, account metadata, interactions with other accounts, and device information to make Moment work for you.",
  },
  {
    title: "How we use your data",
    content:
      "Data powers recommendations, helps keep the community safe, and supports personalized experiences like your feed, notifications, and relevant search results.",
  },
  {
    title: "Your controls",
    content:
      "You can download your data, delete posts, manage ad preferences, and control who sees your content at any time in your account settings.",
  },
];

export default function PrivacyPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <PageHeading
          title="Privacy"
          description="Transparency on how Moment handles your data and the controls you can manage."
        />

        <div className="space-y-4 text-sm text-neutral-600">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-neutral-900">
                {section.title}
              </h2>
              <p className="mt-3 leading-relaxed">{section.content}</p>
            </section>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
