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
    },
    {
      id: 'lab',
      title: 'Z-Lab (연구소)',
      desc: '세상의 모든 재미를 연구합니다. 🚀 엉뚱한 상상이 현실이 되는 곳, 다음 프로젝트를 기대해주세요!',
      icon: <Rocket className="w-8 h-8 text-white" />,
      color: 'from-slate-500 to-slate-600',
      link: '#',
      status: 'Coming Soon'
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
              세상의 모든 재미를 실험합니다.<br/>
              <span className="text-base text-slate-400 mt-2 block font-normal">Experimental Fun Projects by Wooz</span>
            </p>
          </motion.div>
        </div>
      </header>

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
              개인정보처리방침 (Privacy Policy)
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
