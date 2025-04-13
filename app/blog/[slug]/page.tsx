// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const post = await import(`@/content/posts/${slug}.mdx`);
    const { default: Content, metadata } = post;

    return (
      <article className="prose dark:prose-invert w-full max-w-3xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-6xl font-black break-words">{metadata.title}</h1>
          <div className="text-sm text-gray-500">{metadata.publishDate}</div>
        </div>
        <Content />
      </article>
    );
  } catch {
    return notFound();
  }
}
