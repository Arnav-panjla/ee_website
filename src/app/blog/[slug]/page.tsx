import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, blogPostsBySlug } from "@/data/blog";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPostsBySlug[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-start justify-start py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold text-black dark:text-zinc-50">
              {post.title}
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              {post.date}
            </p>
          </div>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {post.content}
          </p>
          <div className="flex gap-4">
            <Link
              href="/blog"
              className="flex h-12 items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            >
              Back to Blog
            </Link>
            <Link
              href="/"
              className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            >
              Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
