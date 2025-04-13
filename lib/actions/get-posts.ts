// app/_actions/mdx.ts (or wherever you'd like to move it)
"use server";

import fs from "node:fs/promises";
import path from "node:path";

const postsDir = path.join(process.cwd(), "content/posts");

function extractMetadata(source: string) {
  const match = source.match(/export const metadata = ({[\s\S]*?});/);
  if (!match) return null;

  try {
    return new Function(`return ${match[1]}`)();
  } catch (err) {
    console.error("Failed to parse metadata:", err);
    return null;
  }
}

export async function getAllPosts() {
  try {
    const files = await fs.readdir(postsDir);

    const posts = await Promise.all(
      files
        .filter((file) => file.endsWith(".mdx"))
        .map(async (filename) => {
          const filePath = path.join(postsDir, filename);
          const source = await fs.readFile(filePath, "utf8");

          const metadata = extractMetadata(source);

          return {
            slug: path.basename(filename, path.extname(filename)),
            metadata,
          };
        })
    );

    return posts
      .filter((post) => post.metadata) // Require metadata to exist
      .map((post) => ({
        ...post,
        metadata: {
          title: post.metadata.title || "Untitled Post",
          publishDate: post.metadata.publishDate || "Unknown Date",
          description: post.metadata.description || "",
        },
      }));
  } catch (err) {
    console.error("getAllPosts failed:", err);
    return [];
  }
}
