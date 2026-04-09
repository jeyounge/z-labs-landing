import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import InquiryPage from './pages/InquiryPage';
import BlogListPage from './pages/BlogListPage';
import BlogDetailPage from './pages/BlogDetailPage';
import BalanceServicePage from './pages/BalanceServicePage';
import LottoServicePage from './pages/LottoServicePage';
import BaseballServicePage from './pages/BaseballServicePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path="/services/balance" element={<BalanceServicePage />} />
        <Route path="/services/lotto" element={<LottoServicePage />} />
        <Route path="/services/baseball" element={<BaseballServicePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/inquiry" element={<InquiryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
