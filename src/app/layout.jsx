import './globals.css';
import Navbar from '../components/Navbar';
import Script from 'next/script';

export const metadata = {
  title: 'Z-Labs | 세상의 모든 재미를 실험합니다',
  description: 'Z-Labs는 세상의 모든 재미를 실험하는 프로젝트 랩입니다. VS 밸런스 게임, 로또 번호 분석 시스템 등 혁신적인 웹 서비스를 개발하고 제공합니다.',
  keywords: 'Z-Labs, 밸런스 게임, 로또 분석, 웹 서비스, 실험적 프로젝트',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <meta name="google-adsense-account" content="ca-pub-3270769447461406" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3270769447461406"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
