export const metadata = {
  title: '로또 Z (Lotto Z) | Z-Labs',
  description: '1,000회차 이상의 로또 당첨 번호 데이터를 통계학적으로 분석하는 서비스. 확률론과 대수의 법칙으로 번호 출현 패턴을 시각화합니다.',
  keywords: '로또 번호 분석, 로또 통계, 로또 확률, 로또 데이터, 로또 Z, Z-Labs',
  openGraph: {
    title: '로또 Z (Lotto Z) | Z-Labs',
    description: '1,000회차 이상의 로또 당첨 번호 데이터를 통계학적으로 분석하는 서비스. 확률론과 대수의 법칙으로 번호 출현 패턴을 시각화합니다.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '로또 Z는 어떤 서비스인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '로또 Z는 1,000회차 이상의 로또 당첨 데이터를 통계학적으로 분석하는 데이터 시각화 서비스입니다. 확률론과 대수의 법칙 관점에서 번호별 출현 빈도, 홀짝 비율, 번호 합계 분포 등의 통계 패턴을 탐색할 수 있습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '로또 Z를 사용하면 당첨 확률이 높아지나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '아니요. 로또는 각 회차가 완전히 독립적인 확률 게임으로, 과거 데이터가 미래 당첨 번호를 예측하거나 당첨 확률을 높이는 데 사용될 수 없습니다. 로또 Z는 통계 교육 및 데이터 시각화 목적의 서비스입니다.',
      },
    },
    {
      '@type': 'Question',
      name: '로또 Z는 무료로 이용할 수 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '네, 로또 Z의 기본 기능은 무료로 제공됩니다. 회원가입 없이 바로 이용 가능합니다.',
      },
    },
  ],
};

export default function LottoServiceLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
