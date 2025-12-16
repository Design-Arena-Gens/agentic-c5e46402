import { AppShell } from "@/components/layout/AppShell";
import { PageHeading } from "@/components/layout/PageHeading";

const terms = [
  {
    title: "Community guidelines",
    description:
      "Share authentic content, respect others, and avoid posting anything harmful or misleading. Content that violates these principles may be removed.",
  },
  {
    title: "Content ownership",
    description:
      "You own the photos, videos, and stories you share. By posting you grant Moment permission to host your content and display it to audiences you select.",
  },
  {
    title: "Account responsibilities",
    description:
      "Keep your login secure, use accurate account information, and avoid impersonating others. Repeated violations may result in account suspension.",
  },
];

export default function TermsPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <PageHeading
          title="Terms"
          description="The essentials of using Moment responsibly and keeping the community safe."
        />

        <dl className="space-y-4 text-sm text-neutral-600">
          {terms.map((term) => (
            <div
              key={term.title}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <dt className="text-lg font-semibold text-neutral-900">
                {term.title}
              </dt>
              <dd className="mt-3 leading-relaxed">{term.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </AppShell>
  );
}
