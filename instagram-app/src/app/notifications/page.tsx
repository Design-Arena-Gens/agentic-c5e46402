import { AppShell } from "@/components/layout/AppShell";
import { PageHeading } from "@/components/layout/PageHeading";
import {
  PiHeart,
  PiChatCircleDots,
  PiUserCirclePlus,
  PiArrowBendDoubleUpRight,
} from "react-icons/pi";

const notifications = [
  {
    id: "noti-1",
    type: "likes",
    icon: PiHeart,
    title: "New appreciation",
    description: "Aurora Studio and 8 others liked your reel",
    time: "2m ago",
  },
  {
    id: "noti-2",
    type: "comment",
    icon: PiChatCircleDots,
    title: "New comment",
    description: "Designhub replied to your color theory breakdown",
    time: "15m ago",
  },
  {
    id: "noti-3",
    type: "follow",
    icon: PiUserCirclePlus,
    title: "New follower",
    description: "Analog Diaries started following you",
    time: "1h ago",
  },
  {
    id: "noti-4",
    type: "share",
    icon: PiArrowBendDoubleUpRight,
    title: "Shared your post",
    description: "Motion Guild reshared your workspace story",
    time: "4h ago",
  },
];

export default function NotificationsPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <PageHeading
          title="Notifications"
          description="See how the community is engaging with your stories."
        />

        <ul className="space-y-4">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className="flex items-center justify-between gap-4 rounded-3xl border border-neutral-200 bg-white px-4 py-4 shadow-sm transition hover:border-neutral-300 hover:bg-neutral-50"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900/90 text-white shadow-sm">
                  <notification.icon className="text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">
                    {notification.title}
                  </p>
                  <p className="text-sm text-neutral-500">
                    {notification.description}
                  </p>
                </div>
              </div>
              <span className="text-xs font-medium uppercase tracking-wide text-neutral-400">
                {notification.time}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </AppShell>
  );
}
