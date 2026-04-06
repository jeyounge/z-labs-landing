import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, url, type = 'website', image = 'https://z-labs.kr/og-image.jpg' }) {
  const siteTitle = title ? `${title} | Z-Labs` : 'Z-Labs | 세상의 모든 재미를 실험합니다';
  const siteDescription = description || 'Z-Labs는 세상의 모든 재미를 실험하는 프로젝트 랩입니다. VS 밸런스 게임, 로또 번호 분석 시스템 등 혁신적인 웹 서비스를 개발하고 제공합니다.';
  const currentUrl = url || 'https://z-labs.kr';

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
