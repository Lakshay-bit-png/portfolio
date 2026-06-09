import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Lakshay Garg",
  description: "Notes on backend, infra, and the things I build.",
};

function formatDate(d: string) {
  if (!d) return "";
  const date = new Date(d);
  if (isNaN(date.getTime())) return d;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="wrap">
      <header className="page-head">
        <p className="prompt">ls ./blog</p>
        <h1>Blog</h1>
        <p>Notes on backend, infra, RAG, and things I'm building.</p>
      </header>

      {posts.length === 0 ? (
        <p className="empty">No posts yet — drop a .md file in /posts.</p>
      ) : (
        <div>
          {posts.map((post) => (
            <Link className="post-item" href={`/blog/${post.slug}`} key={post.slug}>
              <div className="post-date">{formatDate(post.date)}</div>
              <div className="post-title">{post.title}</div>
              {post.excerpt && <p className="post-excerpt">{post.excerpt}</p>}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
