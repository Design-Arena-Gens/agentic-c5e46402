import { AppShell } from "@/components/layout/AppShell";
import { PageHeading } from "@/components/layout/PageHeading";
import { PiPaperPlaneTilt, PiPlusCircle, PiMagnifyingGlass } from "react-icons/pi";

const threads = [
  {
    id: "msg-1",
    name: "Aurora Studio",
    preview: "Let me know what you think about the new moodboard ✨",
    timestamp: "1m",
    unread: true,
  },
  {
    id: "msg-2",
    name: "Motion Guild",
    preview: "Weekly sync slides are ready for review.",
    timestamp: "8m",
  },
  {
    id: "msg-3",
    name: "Field Notes",
    preview: "Loved your color palette post yesterday!",
    timestamp: "45m",
  },
  {
    id: "msg-4",
    name: "Analog Diaries",
    preview: "Sending over the behind-the-scenes shots tomorrow.",
    timestamp: "2h",
    unread: true,
  },
];

export default function MessagesPage() {
  return (
    <AppShell
      rightPanel={
        <div className="hidden md:flex md:max-w-sm">
          <div className="sticky top-4 w-full rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-900">
              Create a new thread
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              Start a conversation with collaborators, clients, or friends.
            </p>
            <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800">
              <PiPlusCircle className="text-lg" />
              New message
            </button>
          </div>
        </div>
      }
    >
      <div className="space-y-6">
        <PageHeading
          title="Messages"
          description="Keep the conversation going with creators and collaborators."
          action={
            <button className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800">
              <PiPaperPlaneTilt className="text-lg" />
              Compose
            </button>
          }
        />

        <div className="rounded-3xl border border-neutral-200 bg-white shadow-sm">
          <div className="flex items-center gap-3 border-b border-neutral-200 px-4 py-3">
            <PiMagnifyingGlass className="text-xl text-neutral-400" />
            <input
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-neutral-400"
              placeholder="Search messages"
            />
          </div>

          <ul className="divide-y divide-neutral-200">
            {threads.map((thread) => (
              <li
                key={thread.id}
                className="flex items-center justify-between gap-4 px-4 py-4 transition hover:bg-neutral-50"
              >
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-neutral-900">
                    {thread.name}
                  </span>
                  <span className="mt-1 text-sm text-neutral-500">
                    {thread.preview}
                  </span>
                </div>
                <div className="flex flex-col items-end text-xs text-neutral-400">
                  <span>{thread.timestamp}</span>
                  {thread.unread ? (
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AppShell>
  );
}
