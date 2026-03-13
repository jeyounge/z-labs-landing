import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ExternalLink, Filter, TrendingUp, Target, Shield, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';

const features = [
  {
    icon: <Filter className="w-6 h-6 text-indigo-500" />,
    title: '3-Kill 전략',
    desc: '통계적으로 불리한 조합 패턴 3가지를 자동으로 필터링합니다. 전체 조합의 약 23%를 수학적으로 배제하여 유효 조합 공간을 최적화합니다.',
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-indigo-500" />,
    title: '빈도수 트렌드 분석',
    desc: '최근 100회 이상의 회차 데이터를 분석하여 번호별 출현 빈도 트렌드를 실시간으로 반영합니다. 핫 번호와 콜드 번호를 한눈에 확인하세요.',
  },
  {
    icon: <Target className="w-6 h-6 text-indigo-500" />,
    title: '5-Kill 챌린지 모드',
    desc: '3-Kill 전략에 추가로 2가지 고급 필터를 적용한 "최적화 모드"입니다. 더 엄격한 통계 기준을 적용하고 싶다면 챌린지 모드를 사용하세요.',
  },
  {
    icon: <Shield className="w-6 h-6 text-indigo-500" />,
    title: '패턴 분류 시스템',
    desc: '모서리 패턴, 십자 패턴, 대각선 패턴 등 로또 용지에서 자주 발생하는 시각적 선택 패턴을 분석하여 특정 패턴이 과집중된 조합을 필터링합니다.',
  },
];

const strategies = [
  {
    name: 'Kill 1',
    title: '동일 십단위 과집중 제거',
    desc: '6개 번호 중 같은 십의 자리 숫자가 4개 이상인 조합을 제거합니다. (예: 11, 12, 13, 14 + 2개) 역대 당첨 번호에서 이 패턴은 통계적으로 매우 드뭅니다.',
    stat: '전체 당첨 조합 중 약 3% 미만',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    name: 'Kill 2',
    title: '장기 미출현 번호 보정',
    desc: '최근 20회 이상 연속으로 미출현한 번호에 통계적 가중치를 적용합니다. 특정 번호가 지나치게 오랫동안 나오지 않는 경우를 감지합니다.',
    stat: '출현 주기 분석 기반',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Kill 3',
    title: '시각적 패턴 과집중 필터',
    desc: '로또 용지에서 번호를 선택할 때 무의식적으로 특정 시각적 패턴(직선, 대각선, 십자)이 만들어지는 경우를 감지하여 필터링합니다.',
    stat: '사람들이 선택하지 않는 조합 목표',
    color: 'from-pink-500 to-rose-500',
  },
];

const faqs = [
  {
    q: '이 서비스를 사용하면 당첨 확률이 높아지나요?',
    a: '로또는 본질적으로 확률 게임입니다. 어떤 서비스도 당첨을 보장할 수 없습니다. 다만, 통계적으로 불리한 조합을 배제하고, 공동 당첨자를 최소화할 수 있는 조합을 선택하는 데 도움을 줍니다.',
  },
  {
    q: '3-Kill 전략의 과학적 근거는 무엇인가요?',
    a: '역대 1000회 이상의 실제 당첨 번호 데이터를 분석한 통계적 패턴에 기반합니다. 특정 조합 유형이 통계적으로 드물게 등장함을 확인했으며, 이를 배제하여 보다 균형 잡힌 조합을 추천합니다.',
  },
  {
    q: '무료로 사용할 수 있나요?',
    a: '기본 번호 추천 기능과 빈도수 분석은 무료로 제공됩니다. 5-Kill 챌린지 모드 등 고급 기능은 추후 업데이트 예정입니다.',
  },
];

export default function LottoServicePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <div className="pt-16">
        {/* Hero */}
        <header className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Link to="/" className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Z-Labs 홈
              </Link>
              <div className="flex items-center gap-5 mb-6">
                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full text-xs font-semibold mb-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Live 서비스 중
                  </span>
                  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">로또 Z (Lotto Z)</h1>
                </div>
              </div>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8 break-keep">
                운도 과학입니다. 1000회 이상의 역대 당첨 데이터를 분석한 Z-Labs만의 독자적인
                <strong className="text-yellow-300"> 3-Kill 전략</strong>으로 통계적으로 불리한 조합을 걸러내세요.
              </p>
              <a
                href="https://lotto.z-labs.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-indigo-50 transition-all shadow-lg hover:-translate-y-0.5 text-lg"
              >
                번호 추천받기 <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </header>

        {/* What is it */}
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">로또 Z란?</h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed break-keep">
              <p>
                <strong>로또 Z</strong>는 "운"의 영역인 로또를 데이터 과학으로 접근하는 서비스입니다.
                단순히 랜덤 번호를 추천하는 것이 아니라, 역대 1,000회 이상의 당첨 번호에서 발견한
                통계적 패턴을 기반으로 <strong>불리한 조합을 체계적으로 배제</strong>합니다.
              </p>
              <p>
                Z-Labs 팀이 독자적으로 개발한 <strong>'3-Kill 전략'</strong>은 세 가지 통계적 필터를 통해
                전체 조합 공간의 약 23%를 수학적으로 배제합니다. 이를 통해 역대 당첨 패턴과 유사한 구조의
                번호 조합을 더 높은 비율로 추천할 수 있습니다.
              </p>
              <p>
                물론, 로또는 여전히 확률 게임입니다. 당첨을 보장하는 서비스가 아니라,
                <strong> 데이터를 기반으로 더 스마트하게 즐기는 방법</strong>을 제안합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Strategy detail */}
        <section className="py-16 bg-slate-50 border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">3-Kill 전략 상세</h2>
            <p className="text-slate-500 mb-10">통계적으로 불리한 조합을 배제하는 3단계 필터</p>
            <div className="space-y-6">
              {strategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${strategy.color}`} />
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <span className={`inline-block px-3 py-1 bg-gradient-to-r ${strategy.color} text-white text-xs font-black rounded-full flex-shrink-0`}>
                        {strategy.name}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{strategy.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-3 break-keep">{strategy.desc}</p>
                        <span className="inline-block bg-slate-100 text-slate-500 text-xs px-3 py-1 rounded-full">
                          📊 {strategy.stat}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">주요 기능</h2>
            <p className="text-slate-500 mb-10">단순한 랜덤 추첨을 넘어선 데이터 기반 서비스</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
                >
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed break-keep">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-slate-50 border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-10">자주 묻는 질문</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-2">
                    <span className="text-indigo-500 flex-shrink-0">Q.</span> {faq.q}
                  </h3>
                  <p className="text-slate-600 leading-relaxed break-keep pl-6">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-extrabold mb-4">데이터가 증명하는 번호를 만나보세요</h2>
            <p className="text-white/80 mb-8 break-keep">3-Kill 전략으로 불리한 조합을 걸러낸 스마트한 번호 추천을 경험해보세요.</p>
            <a
              href="https://lotto.z-labs.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-indigo-50 transition-all shadow-xl hover:-translate-y-0.5 text-lg"
            >
              로또 Z 시작하기 <ExternalLink className="w-5 h-5" />
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
