// Add real articles here (or swap this for MDX/CMS later). `demo: true` shows the Demo badge.
export type Post = { slug: string; date: string; demo: boolean; image: string };
export const posts: Post[] = [
  { slug: "modern-uis", date: "2026-09-12", demo: true, image: "/images/post-1.svg" },
  { slug: "tailwind", date: "2026-08-28", demo: true, image: "/images/post-2.svg" },
  { slug: "web3", date: "2026-08-10", demo: true, image: "/images/post-3.svg" },
];
