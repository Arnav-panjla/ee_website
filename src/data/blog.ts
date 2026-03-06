export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "first-post",
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js routing.",
    content:
      "Next.js is a powerful React framework that makes it easy to build full-stack web applications. With features like server-side rendering, static site generation, and API routes, Next.js provides everything you need to create modern web applications.",
    date: "December 1, 2025",
  },
  {
    slug: "second-post",
    title: "Understanding App Router",
    excerpt: "Deep dive into the Next.js App Router.",
    content:
      "The App Router is a new paradigm in Next.js that uses React Server Components by default. It provides better performance, more intuitive routing, and improved developer experience with features like layouts, loading states, and error handling built-in.",
    date: "December 5, 2025",
  },
  {
    slug: "third-post",
    title: "Dynamic Routes in Next.js",
    excerpt: "How to create dynamic routes with params.",
    content:
      "Dynamic routes allow you to create pages that can handle variable URL segments. Using the [slug] folder naming convention, you can create pages that adapt to different parameters, making it easy to build blogs, product pages, and more.",
    date: "December 9, 2025",
  },
];

export const blogPostsBySlug = Object.fromEntries(
  blogPosts.map((post) => [post.slug, post]),
);
