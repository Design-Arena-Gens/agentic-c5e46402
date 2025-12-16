"use client";

import Image from "next/image";
import {
  PiDotsThree,
  PiBookmarkSimple,
  PiBookmarkSimpleFill,
  PiChatCircle,
  PiPaperPlaneTilt,
  PiHeart,
  PiHeartFill,
} from "react-icons/pi";
import { posts, type Post } from "@/data/sampleData";
import { useState } from "react";

export function PostFeed() {
  return (
    <div className="space-y-6">
      {posts.map((post, index) => (
        <PostCard key={post.id} post={post} priority={index === 0} />
      ))}
    </div>
  );
}

type PostCardProps = {
  post: Post;
  priority?: boolean;
};

function PostCard({ post, priority = false }: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(post.saved ?? false);

  const likeCount = liked ? post.likes + 1 : post.likes;

  return (
    <article className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
      <header className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src={post.user.avatar}
              alt={post.user.username}
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-1 text-sm font-semibold text-neutral-900">
              {post.user.username}
              {post.user.verified ? (
                <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue-500">
                  Verified
                </span>
              ) : null}
            </div>
            <p className="text-xs text-neutral-500">{post.user.location}</p>
          </div>
        </div>
        <button className="rounded-full p-2 text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-800">
          <PiDotsThree className="text-xl" />
        </button>
      </header>

      <div className="relative aspect-[4/5]">
        <Image
          src={post.image}
          alt={post.caption}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 520px, 100vw"
          priority={priority}
        />
      </div>

      <footer className="space-y-4 px-5 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLiked((prev) => !prev)}
              className="rounded-full p-2 text-neutral-700 transition hover:bg-neutral-100 hover:text-rose-500"
              aria-label={liked ? "Unlike" : "Like"}
            >
              {liked ? (
                <PiHeartFill className="text-2xl text-rose-500" />
              ) : (
                <PiHeart className="text-2xl" />
              )}
            </button>
            <button className="rounded-full p-2 text-neutral-700 transition hover:bg-neutral-100">
              <PiChatCircle className="text-2xl" />
            </button>
            <button className="rounded-full p-2 text-neutral-700 transition hover:bg-neutral-100">
              <PiPaperPlaneTilt className="text-2xl" />
            </button>
          </div>

          <button
            onClick={() => setSaved((prev) => !prev)}
            className="rounded-full p-2 text-neutral-700 transition hover:bg-neutral-100"
            aria-label={saved ? "Remove from saved" : "Save post"}
          >
            {saved ? (
              <PiBookmarkSimpleFill className="text-2xl" />
            ) : (
              <PiBookmarkSimple className="text-2xl" />
            )}
          </button>
        </div>

        <p className="text-sm font-semibold text-neutral-900">
          {likeCount.toLocaleString("en-US")} likes
        </p>

        <div className="space-y-2 text-sm text-neutral-800">
          <p>
            <span className="font-semibold">{post.user.username}</span>{" "}
            {post.caption}
          </p>

          <button className="text-xs font-medium text-neutral-500">
            View all {post.comments.length} comments
          </button>

          <ul className="space-y-1">
            {post.comments.slice(0, 2).map((comment) => (
              <li key={comment.id}>
                <span className="font-semibold text-neutral-900">
                  {comment.username}
                </span>{" "}
                {comment.text}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs uppercase tracking-wide text-neutral-400">
          {post.createdAt}
        </p>

        <form className="flex items-center gap-3 text-sm text-neutral-500">
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-1 border-0 bg-transparent focus:outline-none focus:ring-0"
          />
          <button
            type="submit"
            className="font-semibold text-blue-500 transition hover:text-blue-600"
          >
            Post
          </button>
        </form>
      </footer>
    </article>
  );
}
