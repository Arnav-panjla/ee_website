import Link from "next/link";
import { blogPosts } from "@/data/blog";

export default function Blog() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-start justify-start py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col gap-8 w-full">
          <h1 className="text-4xl font-bold text-black dark:text-zinc-50">
            Blog
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Explore our blog posts about Next.js and web development.
          </p>
          <div className="flex flex-col gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex flex-col gap-2 p-6 rounded-lg border border-solid border-black/[.08] transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
              >
                <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
                  {post.title}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <Link
              href="/"
              className="flex h-12 w-fit items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
