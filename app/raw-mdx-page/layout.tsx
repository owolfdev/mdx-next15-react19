import "./mdx.css"; // optional global styles

export default function RawMdxPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="prose dark:prose-invert mx-auto max-w-3xl py-16 px-4">
      {children}
    </article>
  );
}
