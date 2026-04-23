import { blogPosts } from '@/data/blogPosts';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogDetailLayout({ children }) {
  return <>{children}</>;
}
