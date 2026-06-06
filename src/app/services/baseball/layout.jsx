export const metadata = {
  title: '우제트 베이스볼 (WooZ Baseball) | Z-Labs',
  description: 'AI가 실시간으로 분석하는 KBO 승부 예측. 플레이 바이 플레이 데이터로 오늘 경기의 흐름과 패인을 완벽하게 복기하세요.',
  keywords: 'KBO, 야구 예측, 승률 예측, 야구 데이터, 우제트 베이스볼, Z-Labs',
  openGraph: {
    title: '우제트 베이스볼 (WooZ Baseball) | Z-Labs',
    description: 'AI가 실시간으로 분석하는 KBO 승부 예측. 플레이 바이 플레이 데이터로 오늘 경기의 흐름과 패인을 완벽하게 복기하세요.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '우제트 베이스볼은 어떻게 승부를 예측하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '우제트 베이스볼은 과거 20,000여 건 이상의 KBO 경기 데이터를 학습한 AI 모델(Algol-1)을 사용합니다. 현재 이닝, 아웃 카운트, 주자 상황, 다음 타순 상성 등을 복합적으로 계산하여 실시간 승률을 예측합니다.',
      },
    },
    {
      '@type': 'Question',
      name: '우제트 베이스볼은 어떤 데이터를 제공하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '실시간 KBO 경기 승률 예측, 플레이 바이 플레이 분석, 경기 후 AI 복기 리포트, 팀별 상성 분석 등의 데이터를 제공합니다.',
      },
    },
    {
      '@type': 'Question',
      name: '우제트 베이스볼은 무료인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '네, 우제트 베이스볼의 기본 기능은 무료로 제공됩니다. 별도 회원가입 없이 KBO 경기 분석 데이터를 확인하실 수 있습니다.',
      },
    },
  ],
};

export default function BaseballServiceLayout({ children }) {
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
