"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowRight, BookOpen } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';



const categoryColors = {
  '데이터 분석': 'bg-blue-50 text-blue-700',
  '인사이트': 'bg-purple-50 text-purple-700',
  '개발 스토리': 'bg-orange-50 text-orange-700',
  '스토리': 'bg-rose-50 text-rose-700',
  '개발': 'bg-emerald-50 text-emerald-700',
};

export default function BlogListPage() {
  const sorted = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      
      <div className="pt-16">
        {/* Hero */}
        <header className="bg-white border-b border-slate-100 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-600 rounded-full text-sm font-semibold mb-6">
                <BookOpen className="w-4 h-4" />
                Z-Labs 블로그
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                데이터로 읽는 세상
              </h1>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed break-keep">
                로또 통계, 밸런스 게임 인사이트, 서비스 개발 스토리까지.<br />
                Z-Labs 팀이 직접 분석하고 경험한 이야기들을 공유합니다.
              </p>
            </motion.div>
          </div>
        </header>

        {/* Post List */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-6">
            {sorted.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07 }}
              >
                <Link href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category] || 'bg-slate-100 text-slate-600'}`}>
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                    </div>
                    <div className="flex gap-4 items-start">
                      <span className="text-4xl flex-shrink-0">{post.thumbnail}</span>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-rose-600 transition-colors leading-snug break-keep">
                          {post.title}
                        </h2>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4 break-keep line-clamp-2">
                          {post.summary}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-xs text-slate-400">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime} 읽기
                            </span>
                          </div>
                          <span className="text-rose-500 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                            읽기 <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-slate-100 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <span>© {new Date().getFullYear()} Z-Labs. All rights reserved.</span>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-rose-500 transition-colors">개인정보처리방침</Link>
              <Link href="/terms" className="hover:text-rose-500 transition-colors">이용약관</Link>
              <Link href="/inquiry" className="hover:text-rose-500 transition-colors">문의</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
