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

export default async function BlogDetailLayout({ children, params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(decodeURIComponent(slug));

  const articleSchema = post ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'Z-Labs', url: 'https://z-labs.kr' },
    publisher: { '@type': 'Organization', name: 'Z-Labs', url: 'https://z-labs.kr' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://z-labs.kr/blog/${post.slug}` },
  } : null;

  return (
    <>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      {children}
    </>
  );
}
