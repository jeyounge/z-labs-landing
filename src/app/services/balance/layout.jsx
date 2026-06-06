export const metadata = {
  title: 'VS 밸런스 게임 | Z-Labs',
  description: '수만 명의 데이터로 증명하는 현대 사회의 집단 지성. 논쟁 종결을 위한 VS 밸런스 게임을 즐겨보세요.',
  keywords: '밸런스 게임, VS 게임, 심리 테스트, 트렌드 분석, Z-Labs',
  openGraph: {
    title: 'VS 밸런스 게임 | Z-Labs',
    description: '수만 명의 데이터로 증명하는 현대 사회의 집단 지성. 논쟁 종결을 위한 VS 밸런스 게임을 즐겨보세요.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'VS 밸런스 게임이란 무엇인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VS 밸런스 게임은 두 가지 선택지 중 하나를 골라 다른 사용자들의 통계와 성향을 비교하는 서비스입니다. 나이대별, 성별별 선택 트렌드를 데이터로 확인할 수 있습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '밸런스 게임 데이터는 어떻게 활용되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '수집된 선택 데이터는 익명으로 통계 처리되어 현대 사회의 가치관과 트렌드 분석에 활용됩니다. 개인 식별 정보는 수집하지 않습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '밸런스 게임은 무료인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '네, VS 밸런스 게임은 완전 무료로 이용하실 수 있습니다. 별도 회원가입 없이 바로 참여 가능합니다.',
      },
    },
  ],
};

export default function BalanceServiceLayout({ children }) {
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
