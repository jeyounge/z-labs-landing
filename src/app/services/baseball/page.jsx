"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TrendingUp, ExternalLink, Activity, BarChart3, Users, Shield, ArrowLeft, Trophy } from 'lucide-react';



const features = [
  {
    icon: <Activity className="w-6 h-6 text-emerald-500" />,
    title: '실시간 승부 예측',
    desc: '현재 진행 중인 경기의 상황을 실시간으로 분석하여 승리 확률을 도출합니다. 점수 차이, 이닝, 주자 상황 등 모든 변수를 AI가 계산합니다.',
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-emerald-500" />,
    title: '정밀 데이터 분석',
    desc: '팀 간의 상대 전적, 최근 10경기 흐름, 투타 밸런스 등 방대한 기출 데이터를 바탕으로 객관적인 전력 지수를 산출합니다.',
  },
  {
    icon: <Trophy className="w-6 h-6 text-emerald-500" />,
    title: 'KBO 리그 통합 정보',
    desc: '실시간 순위, 경기 일정, 팀별 기록 등 KBO 리그의 모든 정보를 한곳에서 확인할 수 있습니다. 데이터는 실시간으로 동기화됩니다.',
  },
  {
    icon: <Users className="w-6 h-6 text-emerald-500" />,
    title: '커뮤니티 공간',
    desc: '야구 팬들이 자유롭게 의견을 나누고 경기 결과를 예측하며 소통할 수 있는 전용 게시판을 제공합니다.',
  },
];

const algorithms = [
  {
    name: 'Woozet Algol-1',
    title: '승률 예측 알고리즘',
    desc: '과거 10년간의 KBO 경기 데이터를 학습한 독자적인 머신러닝 모델입니다. 선발 투수의 컨디션, 구장별 특성, 날씨 변수까지 고려하여 가장 확률 높은 결과를 제시합니다.',
    stat: '예측 정확도 지속적 개선 중',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Real-time Sync',
    title: '초단위 데이터 동기화',
    desc: '네이버 스포츠 및 공식 KBO 데이터를 기반으로 1초 내외의 지연 시간으로 현장 상황을 중계합니다. 가장 빠른 데이터를 경험하세요.',
    stat: '실시간 지연시간 1초 미만',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    name: 'Insight Focus',
    title: '핵심 지표 시각화',
    desc: '복잡한 숫자 데이터를 누구나 쉽게 이해할 수 있도록 직관적인 그래프와 수치로 시각화하여 제공합니다.',
    stat: '심플한 UI/UX 지향',
    color: 'from-cyan-500 to-blue-500',
  },
];

const faqs = [
  {
    q: '예측 데이터는 얼마나 정확한가요?',
    a: '우제트 베이스볼의 AI 모델은 통계적 확률을 제공합니다. 스포츠의 특성상 이변이 존재할 수 있으나, 장기적인 데이터 분석 결과는 팀의 객관적인 전력을 매우 정확하게 반영합니다.',
  },
  {
    q: '별도의 비용이 발생하나요?',
    a: '우제트 베이스볼의 모든 핵심 기능(실시간 중계, 예측 데이터, 순위 확인)은 무료로 이용하실 수 있습니다.',
  },
  {
    q: '모바일에서도 이용 가능한가요?',
    a: '네, 우제트 베이스볼은 모바일 환경에 최적화된 반응형 웹앱으로 제작되었습니다. 언제 어디서나 스마트폰으로 경기를 체크하세요.',
  },
];

export default function BaseballServicePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      
      <div className="pt-16">
        {/* Hero */}
        <header className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-500 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Link href="/" className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Z-Labs 홈
              </Link>
              <div className="flex items-center gap-5 mb-6">
                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full text-xs font-semibold mb-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> 라이브 서비스 중
                  </span>
                  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">우제트 베이스볼 (WooZ Baseball)</h1>
                </div>
              </div>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8 break-keep">
                데이터로 야구를 더 즐겁게. ⚾ AI가 실시간으로 분석하는 <strong className="text-yellow-300">승부 예측 알고리즘</strong>과
                KBO 전 경기의 정밀한 통합 데이터를 모바일에서 가장 빠르게 경험하세요.
              </p>
              <a
                href="http://wooz.z-labs.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-600 font-bold rounded-2xl hover:bg-emerald-50 transition-all shadow-lg hover:-translate-y-0.5 text-lg"
              >
                서비스 바로가기 <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </header>

        {/* Introduction */}
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">야구는 이제 데이터 싸움입니다.</h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed break-keep">
              <p>
                <strong>우제트 베이스볼</strong>은 단순한 스코어 보드를 넘어, 야구 경기가 가진 수많은 데이터 포인트들을 
                실시간으로 연결하여 새로운 통찰을 제공합니다.
              </p>
              <p>
                Z-Labs의 AI 분석 엔진은 과거 매치업 데이터는 물론, 선발 투수의 구종별 특성, 타자들의 해당 구장 성적 등을 종합적으로 고려합니다. 
                이러한 <strong>복합적인 변수 처리</strong>를 통해 경기 흐름을 미리 예측하고, 사용자가 야구를 더 깊이 있게 즐길 수 있도록 돕습니다.
              </p>
              <p>
                오늘의 승자는 누가 될까요? 감이 아닌 <strong>데이터로 증명된 확률</strong>을 지금 바로 확인해 보세요.
              </p>
            </div>
          </div>
        </section>

        {/* Algorithms */}
        <section className="py-16 bg-slate-50 border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">AI 분석 기술 스택</h2>
            <p className="text-slate-500 mb-10">데이터 과학이 야구에 적용되는 방식</p>
            <div className="space-y-6">
              {algorithms.map((algo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${algo.color}`} />
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <span className={`inline-block px-3 py-1 bg-gradient-to-r ${algo.color} text-white text-xs font-black rounded-full flex-shrink-0`}>
                        {algo.name}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{algo.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-3 break-keep">{algo.desc}</p>
                        <span className="inline-block bg-slate-100 text-slate-500 text-xs px-3 py-1 rounded-full">
                          📊 {algo.stat}
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
            <p className="text-slate-500 mb-10">더 똑똑하게 야구를 관전하는 방법</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
                >
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
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
                    <span className="text-emerald-500 flex-shrink-0">Q.</span> {faq.q}
                  </h3>
                  <p className="text-slate-600 leading-relaxed break-keep pl-6">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-extrabold mb-4">데이터로 야구할 시간입니다</h2>
            <p className="text-white/80 mb-8 break-keep">지금 우제트 베이스볼에 접속하여 오늘의 경기 결과를 확인해 보세요.</p>
            <a
              href="http://wooz.z-labs.kr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 font-bold rounded-2xl hover:bg-emerald-50 transition-all shadow-xl hover:-translate-y-0.5 text-lg"
            >
              우제트 베이스볼 시작하기 <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
