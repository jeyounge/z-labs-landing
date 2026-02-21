import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Sparkles, Rocket, Globe, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const projects = [
    {
      id: 'balance',
      title: 'VS 밸런스 게임',
      desc: '이걸 선택한다고? 🤯 당신의 선택 성향을 꿰뚫어 보는 AI 분석! 단순한 게임을 넘어, 친구들과의 논쟁을 종결짓는 도파민 폭발 밸런스 토론장.',
      icon: <Gamepad2 className="w-8 h-8 text-white" />,
      color: 'from-pink-500 to-rose-500',
      link: 'https://balance.z-labs.kr',
      status: 'Live'
    },
    {
      id: 'lotto',
      title: '로또 Z (Lotto Z)',
      desc: '운도 과학입니다. 🧬 Z-Labs만의 독자적인 "3-Kill 전략"과 정밀한 통계 알고리즘으로 확률의 한계에 도전합니다. 데이터가 증명하는 최적의 번호 조합을 경험하세요.',
      icon: <Sparkles className="w-8 h-8 text-white" />,
      color: 'from-indigo-500 to-purple-500',
      link: 'https://lotto.z-labs.kr',
      status: 'Live'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-rose-100 selection:text-rose-900 font-sans flex flex-col">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 font-display">
              Z-Labs <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed break-keep">
              세상의 모든 재미를 실험합니다.<br />
              <span className="text-base text-slate-400 mt-2 block font-normal">Experimental Fun Projects by Wooz</span>
            </p>
          </motion.div>
        </div>
      </header>

      {/* About Section - For SEO & AdSense */}
      <section className="bg-slate-50 border-b border-slate-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-rose-500" />
              Z-Labs는 어떤 곳인가요?
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium break-keep">
              <p>
                안녕하세요! <strong>Z-Labs(제트랩스)</strong>는 평범한 일상 속에서 마주치는 소소한 호기심들을 캐치하여,
                독창적이고 혁신적인 웹 브라우저 기반의 스낵 컬처(Snack Culture) 서비스로 구현해내는 크리에이티브 프로젝트 랩입니다.
              </p>
              <p>
                우리는 누구나 한 번쯤 상상해 보았던 재미있는 아이디어들을 분석하고 고도화하여 실제 동작하는 프로덕트로 만들어냅니다.
                현재 서비스 중인 <strong>'VS 밸런스 게임'</strong>은 다양한 논쟁거리를 통해 사용자들의 성향 데이터를 수집하고 통계화하여
                시각적인 즐거움을 제공하며, <strong>'로또 Z (Lotto Z)'</strong>는 단순한 운의 영역을 넘어 데이터 과학과 자체 알고리즘을 통한
                정밀한 분석 인사이트를 제공하는 플랫폼입니다.
              </p>
              <p>
                단순히 앱을 만드는 것을 넘어, 우리는 사용자들에게 <strong>'새로운 시각'</strong>과 <strong>'도파민이 터지는 즐거움'</strong>을
                선사하는 것을 목표로 합니다. 앞으로도 끊임없는 실험정신을 바탕으로 세상에 없던 재밌고 유익한 콘텐츠들을 지속적으로 연구하고
                런칭할 예정이오니 많은 관심과 응원 부탁드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex-grow w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target={project.status === 'Live' ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 block ${project.status !== 'Live' ? 'pointer-events-none opacity-80' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                    {project.title}
                  </h3>
                  {project.status === 'Live' ? (
                    <span className="px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      Live
                    </span>
                  ) : (
                    <span className="px-3 py-1 text-xs font-semibold text-slate-500 bg-slate-100 rounded-full">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="text-slate-500 mb-6 min-h-[3rem] break-keep">
                  {project.desc}
                </p>
                <div className="flex items-center text-sm font-medium text-slate-400 group-hover:text-slate-600 transition-colors">
                  {project.status === 'Live' ? (
                    <>
                      바로가기 <ExternalLink className="w-4 h-4 ml-1" />
                    </>
                  ) : (
                    '준비중'
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Z-Labs. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-slate-500 hover:text-rose-500 transition-colors">
              개인정보처리방침 (Privacy)
            </Link>
            <Link to="/terms" className="text-slate-500 hover:text-rose-500 transition-colors">
              이용약관 (Terms)
            </Link>
            <Link to="/inquiry" className="text-slate-500 hover:text-rose-500 transition-colors flex items-center gap-1">
              <Mail className="w-4 h-4" /> 이용 문의 (Contact)
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
