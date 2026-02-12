import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrivacyPage from './pages/PrivacyPage';

import InquiryPage from './pages/InquiryPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/inquiry" element={<InquiryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
