import { blogPosts, getBlogPostBySlug } from '@/data/blogPosts';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(decodeURIComponent(slug));
  
  if (!post) {
    return {
      title: '게시글을 찾을 수 없습니다 | Z-Labs 블로그',
      description: '요청하신 블로그 게시글을 찾을 수 없습니다.',
    };
  }

  return {
    title: `${post.title} | Z-Labs 블로그`,
    description: post.summary,
    keywords: `${post.category}, Z-Labs, 블로그, ${post.title.split(' ').slice(0, 3).join(', ')}`,
    openGraph: {
      title: `${post.title} | Z-Labs 블로그`,
      description: post.summary,
      type: 'article',
      publishedTime: post.date,
      authors: ['Z-Labs'],
    },
  };
}

export default function BlogDetailLayout({ children }) {
  return <>{children}</>;
}
