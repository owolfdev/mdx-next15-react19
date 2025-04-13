// app/blog/page.tsx
import { getAllPosts } from "@/lib/actions/get-posts";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="prose dark:prose-invert sm:min-w-3xl max-w-3xl mx-auto  space-y-8">
      <h1 className="text-6xl font-black pb-8">MDX Blog Next15 React 19</h1>
      {posts.map(({ slug, metadata }) => (
        <article key={slug} className="border-b pb-6">
          <h2 className="text-2xl font-black">
            <Link href={`/blog/${slug}`}>{metadata.title}</Link>
          </h2>
          <p className="text-sm text-gray-500 mb-2">{metadata.publishDate}</p>
          <p>{metadata.description}</p>
        </article>
      ))}
    </div>
  );
}
