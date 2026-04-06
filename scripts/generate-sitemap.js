import fs from 'fs';
import path from 'path';

// ES Module 환경에서는 블로그 포스트를 직접 import 하거나 정규식으로 파싱해야 합니다.
// 간단하게 파일을 읽어서 slug 목록을 추출하는 방식 사용 (빌드 스크립트로 동작하므로)
const blogPostsPath = path.resolve('src/data/blogPosts.js');
const blogPostsContent = fs.readFileSync(blogPostsPath, 'utf8');

const slugs = [];
const regex = /slug:\s*['"]([^'"]+)['"]/g;
let match;
while ((match = regex.exec(blogPostsContent)) !== null) {
  slugs.push(match[1]);
}

const DOMAIN = 'https://z-labs.kr';

const staticRoutes = [
  '',
  '/blog',
  '/services/balance',
  '/services/lotto',
  '/privacy',
  '/terms',
  '/inquiry'
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes.map(route => `  <url>
    <loc>${DOMAIN}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
${slugs.map(slug => `  <url>
    <loc>${DOMAIN}/blog/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.resolve('public/sitemap.xml'), sitemap);
console.log('✅ sitemap.xml generated successfully!');

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`;

fs.writeFileSync(path.resolve('public/robots.txt'), robotsTxt);
console.log('✅ robots.txt generated successfully!');
