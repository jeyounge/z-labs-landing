import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gamepad2, ExternalLink, BarChart2, Users, Zap, TrendingUp, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';

const features = [
  {
    icon: <BarChart2 className="w-6 h-6 text-pink-500" />,
    title: '실시간 통계 분석',
    desc: '선택 즉시 전체 사용자의 응답 데이터를 시각적으로 확인합니다. 나이대별, 성별, 시간대별 교차 분석이 실시간으로 업데이트됩니다.',
  },
  {
    icon: <Users className="w-6 h-6 text-pink-500" />,
    title: '집단 지성 데이터',
    desc: '수만 명의 선택 데이터가 쌓이면서 현대 사회의 가치관과 트렌드를 반영하는 살아있는 데이터베이스가 됩니다.',
  },
  {
    icon: <Zap className="w-6 h-6 text-pink-500" />,
    title: '논쟁 종결 기능',
    desc: '친구들과 의견이 갈릴 때, 전국 사용자들의 선택 통계로 논쟁을 데이터로 종결하세요.',
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-pink-500" />,
    title: '트렌드 인사이트',
    desc: '시간이 지남에 따라 변화하는 선택 트렌드를 추적합니다. MZ세대의 가치관 변화가 데이터 속에 담겨 있습니다.',
  },
];

const faqs = [
  {
    q: '개인정보가 수집되나요?',
    a: '아니요. VS 밸런스 게임은 개인을 식별할 수 있는 어떠한 데이터도 수집하지 않습니다. 선택 결과와 접속 시간대 등 익명 통계 데이터만 집계됩니다.',
  },
  {
    q: '어떤 주제가 있나요?',
    a: '음식, 라이프스타일, 연애, 직업, 취향 등 다양한 카테고리의 논쟁적인 주제들이 준비되어 있습니다. 새로운 주제도 지속적으로 추가됩니다.',
  },
  {
    q: '투표 결과는 신뢰할 수 있나요?',
    a: 'Z-Labs는 중복 투표 방지 로직을 적용하여 집계 신뢰도를 높이고 있습니다. 다만, 이 데이터는 공식 여론조사가 아닌 서비스 이용자 기반의 재미 통계임을 참고해주세요.',
  },
];

export default function BalanceServicePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <SEO 
        title="VS 밸런스 게임 서비스 스펙" 
        description="당신의 취향을 데이터로 증명하는 논쟁 종결 플랫폼. VS 밸런스 게임의 상세 스펙과 기능." 
        url="https://z-labs.kr/services/balance" 
      />
      <Navbar />
      <div className="pt-16">
        {/* Hero */}
        <header className="bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Link to="/" className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Z-Labs 홈
              </Link>
              <div className="flex items-center gap-5 mb-6">
                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                  <Gamepad2 className="w-10 h-10 text-white" />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full text-xs font-semibold mb-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Live 서비스 중
                  </span>
                  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">VS 밸런스 게임</h1>
                </div>
              </div>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8 break-keep">
                단순한 투표를 넘어, 수만 명의 선택 데이터로 현대 사회의 가치관을 분석하는 집단 지성 플랫폼입니다.
                친구들과의 논쟁을 데이터로 종결하세요.
              </p>
              <a
                href="https://balance.z-labs.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-rose-600 font-bold rounded-2xl hover:bg-rose-50 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                지금 바로 시작하기 <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </header>

        {/* What is it */}
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">VS 밸런스 게임이란?</h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed break-keep">
              <p>
                <strong>VS 밸런스 게임</strong>은 "치킨 vs 피자", "여름 vs 겨울"처럼 누구나 한 번쯤 해봤을 밸런스 게임을
                온라인에서 집단적으로 즐기고, 그 선택 데이터를 실시간으로 분석하는 서비스입니다.
              </p>
              <p>
                단순한 퀴즈 앱과 다른 점은, <strong>선택 결과 자체가 사회적 인사이트</strong>가 된다는 것입니다.
                연령대별, 시간대별, 성별 교차 분석을 통해 "우리 세대는 어떤 것을 더 선호하는가"를 데이터로 확인할 수 있습니다.
              </p>
              <p>
                Z-Labs 팀은 이 데이터를 기반으로 정기적으로 <strong>사회 트렌드 분석 리포트</strong>를 발행합니다.
                단순한 게임이 거시적인 사회 트렌드를 반영하는 데이터 플랫폼으로 진화하고 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">주요 기능</h2>
            <p className="text-slate-500 mb-10">VS 밸런스 게임이 단순한 투표 앱과 다른 이유</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
                >
                  <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed break-keep">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How to use */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-10">이용 방법</h2>
            <div className="flex flex-col md:flex-row gap-6">
              {[
                { step: '01', title: '주제 선택', desc: '다양한 카테고리에서 오늘 나의 의견을 테스트할 주제를 선택하세요.' },
                { step: '02', title: '선택하기', desc: 'A 또는 B, 직관에 따라 선택하세요. 모든 선택은 익명으로 처리됩니다.' },
                { step: '03', title: '인사이트 확인', desc: '전체 사용자의 선택 결과와 세대별 통계를 즉시 확인하세요.' },
              ].map((item) => (
                <div key={item.step} className="flex-1 bg-slate-50 rounded-2xl p-6">
                  <span className="text-4xl font-black text-rose-100 block mb-3">{item.step}</span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm break-keep">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-10">자주 묻는 질문</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-2">
                    <span className="text-rose-500 flex-shrink-0">Q.</span> {faq.q}
                  </h3>
                  <p className="text-slate-600 leading-relaxed break-keep pl-6">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-extrabold mb-4">지금 바로 시작해보세요</h2>
            <p className="text-white/80 mb-8 break-keep">당신의 선택이 데이터가 됩니다. 오늘의 논쟁을 종결지어 보세요.</p>
            <a
              href="https://balance.z-labs.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-rose-600 font-bold rounded-2xl hover:bg-rose-50 transition-all shadow-xl hover:-translate-y-0.5 text-lg"
            >
              VS 밸런스 게임 시작 <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-slate-100 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <span>© {new Date().getFullYear()} Z-Labs. All rights reserved.</span>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-rose-500 transition-colors">개인정보처리방침</Link>
              <Link to="/terms" className="hover:text-rose-500 transition-colors">이용약관</Link>
              <Link to="/inquiry" className="hover:text-rose-500 transition-colors">문의</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
