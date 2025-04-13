# 📝 Next.js 15 MDX Blog

A fast, modern, and accessible blog platform built with:

- **Next.js 15 App Router**
- **MDX-based content authoring**
- **React 19 with Server Components (RSC)**
- **Tailwind CSS for styling**
- **File-based content system in `/content/posts`**

---

## ✨ Features

- 📄 **MDX-powered posts** – write interactive markdown with React components
- 📦 **App Router support** – modern routing, layouts, and loading patterns
- 🧱 **Custom `useMDXComponents`** – style your headings, paragraphs, and code blocks consistently
- 💡 **Async `params` and metadata parsing** – compatible with latest Next.js 15 behavior
- 🌓 **Dark mode friendly** – via `dark:prose-invert` styling
- 📁 **File-based content** – add `.mdx` files to `content/posts` to create pages
- ✅ **Error handling** – 404s, missing metadata, and broken posts are gracefully handled

---

## 📂 Project Structure

```bash
/app
  /blog
    [slug]/page.tsx      # Dynamic route for individual posts
    not-found.tsx        # Custom 404 page
    page.tsx             # Blog index (blog roll)
  layout.tsx             # Shared layout
/content
  /posts                 # Your MDX files live here
/lib
  /actions/get-posts.ts  # Reads + parses metadata from MDX files
/app/_actions/mdx.ts     # Core MDX file logic
```

````

---

## 🛠 How to Add a New Post

1. Create a file in `content/posts/` with a `.mdx` extension.
2. At the top, export your metadata:

```tsx
export const metadata = {
  title: "Your Post Title",
  publishDate: "2025-04-14",
  description: "A short summary of the post.",
};
```

3. Write your content using markdown and React components!

---

## 🧪 Development

```bash
pnpm install       # or yarn / npm
pnpm dev           # run locally at http://localhost:3000
```

---

## 📦 Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org/docs/app)
- [MDX](https://mdxjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React 19](https://react.dev/)
- TypeScript, Server Components, Edge-ready

---

## ✅ Status

💥 **Actively built** — focusing on performance, authoring experience, and stability for production deployment.

---

## 🧠 Credits

Built with ❤️ by O. Wolfson with significant help from ChatGPT Code Copilot
````
