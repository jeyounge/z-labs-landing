import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowLeft, ArrowRight } from 'lucide-react';
import { getBlogPostBySlug, blogPosts } from '../data/blogPosts';
import Navbar from '../components/Navbar';

const categoryColors = {
  '데이터 분석': 'bg-blue-50 text-blue-700',
  '인사이트': 'bg-purple-50 text-purple-700',
  '개발 스토리': 'bg-orange-50 text-orange-700',
  '스토리': 'bg-rose-50 text-rose-700',
  '개발': 'bg-emerald-50 text-emerald-700',
};

function renderContent(content) {
  const lines = content.split('\n');
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-100">
          {line.replace('## ', '')}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-xl font-bold text-slate-800 mt-8 mb-3">
          {line.replace('### ', '')}
        </h3>
      );
    } else if (line.startsWith('> ')) {
      elements.push(
        <blockquote key={i} className="border-l-4 border-rose-400 pl-5 py-2 my-4 bg-rose-50 rounded-r-xl">
          <p className="text-rose-700 italic font-medium">{line.replace('> ', '')}</p>
        </blockquote>
      );
    } else if (line.startsWith('**') && line.endsWith('**') && !line.slice(2, -2).includes('**')) {
      elements.push(
        <p key={i} className="font-bold text-slate-800 mt-4 mb-1">{line.replace(/\*\*/g, '')}</p>
      );
    } else if (line.startsWith('- ') || line.match(/^\d+\. /)) {
      const listItems = [];
      let j = i;
      const isOrdered = line.match(/^\d+\. /);
      while (j < lines.length && (lines[j].startsWith('- ') || lines[j].match(/^\d+\. /))) {
        const text = lines[j].replace(/^- /, '').replace(/^\d+\. /, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        listItems.push(<li key={j} className="mb-1" dangerouslySetInnerHTML={{ __html: text }} />);
        j++;
      }
      if (isOrdered) {
        elements.push(<ol key={i} className="list-decimal list-inside space-y-1 my-4 text-slate-700 pl-2">{listItems}</ol>);
      } else {
        elements.push(<ul key={i} className="list-disc list-inside space-y-1 my-4 text-slate-700 pl-2">{listItems}</ul>);
      }
      i = j;
      continue;
    } else if (line.startsWith('| ')) {
      const tableLines = [];
      let j = i;
      while (j < lines.length && lines[j].startsWith('|')) {
        tableLines.push(lines[j]);
        j++;
      }
      const headers = tableLines[0].split('|').filter(Boolean).map(h => h.trim());
      const rows = tableLines.slice(2).map(row => row.split('|').filter(Boolean).map(c => c.trim()));
      elements.push(
        <div key={i} className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100">
                {headers.map((h, hi) => (
                  <th key={hi} className="px-4 py-2 text-left font-semibold text-slate-700 border border-slate-200">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-2 border border-slate-200 text-slate-700">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      i = j;
      continue;
    } else if (line.trim() === '') {
      // skip blank lines
    } else {
      const formatted = line
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/`(.*?)`/g, '<code class="bg-slate-100 text-rose-600 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>');
      elements.push(
        <p key={i} className="text-slate-700 leading-relaxed my-3 break-keep" dangerouslySetInnerHTML={{ __html: formatted }} />
      );
    }
    i++;
  }
  return elements;
}

export default function BlogDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getBlogPostBySlug(slug);
  const sorted = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
  const currentIndex = sorted.findIndex(p => p.slug === slug);
  const prevPost = sorted[currentIndex + 1];
  const nextPost = sorted[currentIndex - 1];

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 font-sans">
        <Navbar />
        <div className="pt-32 text-center">
          <p className="text-slate-500 text-lg mb-6">게시글을 찾을 수 없습니다.</p>
          <Link to="/blog" className="text-rose-500 font-semibold hover:underline">← 블로그 목록으로</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <div className="pt-16">
        {/* Header */}
        <header className="bg-white border-b border-slate-100 py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Link to="/blog" className="inline-flex items-center gap-1 text-slate-400 hover:text-rose-500 text-sm mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" /> 블로그 목록
              </Link>
              <div className="flex items-center gap-2 mb-4">
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category] || 'bg-slate-100 text-slate-600'}`}>
                  <Tag className="w-3 h-3" />{post.category}
                </span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-5xl">{post.thumbnail}</span>
                <div>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-3 break-keep">
                    {post.title}
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime} 읽기</span>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-lg text-slate-500 leading-relaxed break-keep border-l-4 border-rose-200 pl-4">
                {post.summary}
              </p>
            </motion.div>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12"
          >
            <div className="prose-custom">
              {renderContent(post.content)}
            </div>
          </motion.div>

          {/* Prev / Next Navigation */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {prevPost && (
              <Link to={`/blog/${prevPost.slug}`} className="group flex items-start gap-3 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-rose-500 flex-shrink-0 mt-0.5 transition-colors" />
                <div>
                  <p className="text-xs text-slate-400 mb-1">이전 글</p>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-rose-600 transition-colors line-clamp-2 break-keep">{prevPost.title}</p>
                </div>
              </Link>
            )}
            {nextPost && (
              <Link to={`/blog/${nextPost.slug}`} className="group flex items-start gap-3 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all md:col-start-2">
                <div className="flex-1">
                  <p className="text-xs text-slate-400 mb-1 text-right">다음 글</p>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-rose-600 transition-colors line-clamp-2 break-keep text-right">{nextPost.title}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-rose-500 flex-shrink-0 mt-0.5 transition-colors" />
              </Link>
            )}
          </div>

          {/* Back to list */}
          <div className="mt-8 text-center">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-rose-500 font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> 모든 블로그 글 보기
            </Link>
          </div>
        </main>

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
