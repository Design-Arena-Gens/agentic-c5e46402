import { AppShell } from "@/components/layout/AppShell";
import { StoriesBar } from "@/components/feed/StoriesBar";
import { PostFeed } from "@/components/feed/PostCard";
import { TrendingReels } from "@/components/reels/TrendingReels";

export default function Home() {
  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        <StoriesBar />
        <PostFeed />
        <TrendingReels />
      </div>
    </AppShell>
  );
}
