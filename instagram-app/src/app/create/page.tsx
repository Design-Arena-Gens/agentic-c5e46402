import { AppShell } from "@/components/layout/AppShell";
import { PageHeading } from "@/components/layout/PageHeading";
import { PiUploadSimple, PiImage, PiVideo, PiMusicNotes } from "react-icons/pi";

const tabs = [
  {
    id: "post",
    title: "Photo post",
    description:
      "Share a single shot or a carousel with up to ten high-resolution images.",
    icon: PiImage,
  },
  {
    id: "reel",
    title: "Reel",
    description:
      "Upload vertical video up to 90 seconds. Remix existing audio or add your own.",
    icon: PiVideo,
  },
  {
    id: "story",
    title: "Story",
    description:
      "Craft immersive, ephemeral stories with music, stickers, and text overlays.",
    icon: PiMusicNotes,
  },
];

export default function CreatePage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <PageHeading
          title="Create"
          description="Upload photos, reels, or stories to share with your followers."
          action={
            <button className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800">
              <PiUploadSimple className="text-lg" />
              Select files
            </button>
          }
        />

        <div className="grid gap-4 md:grid-cols-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className="flex flex-col items-start gap-3 rounded-3xl border border-neutral-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md"
            >
              <tab.icon className="text-2xl text-neutral-400" />
              <div>
                <h3 className="text-base font-semibold text-neutral-900">
                  {tab.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-500">
                  {tab.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="rounded-3xl border border-dashed border-neutral-300 bg-white p-8 text-center text-sm text-neutral-500">
          Drag & drop files anywhere on this page to begin uploading. We support
          PNG, JPG, MP4, MOV, and GIF.
        </div>
      </div>
    </AppShell>
  );
}
