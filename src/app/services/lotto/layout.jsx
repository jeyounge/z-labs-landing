export const metadata = {
  title: '로또 Z (Lotto Z) | Z-Labs',
  description: '1,000회차 이상의 로또 당첨 데이터 전수 분석. 5-KILL 전략 알고리즘으로 확률을 극대화하는 나만의 로또 번호를 조합해 보세요.',
  keywords: '로또 번호 추천, 로또 분석, 로또 통계, 로또 Z, 5-KILL 전략, Z-Labs',
  openGraph: {
    title: '로또 Z (Lotto Z) | Z-Labs',
    description: '1,000회차 이상의 로또 당첨 데이터 전수 분석. 5-KILL 전략 알고리즘으로 확률을 극대화하는 나만의 로또 번호를 조합해 보세요.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '로또 Z의 5-KILL 전략이란 무엇인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '5-KILL 전략은 1,000회차 이상의 로또 데이터를 분석하여 통계적으로 출현 확률이 극히 낮은 번호 패턴 5가지를 배제하는 알고리즘입니다. 수학적 확률론에 기반한 번호 조합 전략입니다.',
      },
    },
    {
      '@type': 'Question',
      name: '로또 Z는 당첨을 보장하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '아니요. 로또 Z는 통계적 분석 도구로, 당첨을 보장하지 않습니다. 로또는 확률 게임이며, 분석 결과는 참고용으로만 활용하시기 바랍니다.',
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
