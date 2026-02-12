import React, { useState, useRef } from 'react';
import { Send, ArrowLeft, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export default function InquiryPage() {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // NOTE: Replace these with your actual EmailJS credentials
        // Service ID, Template ID, Public Key
        emailjs.sendForm('service_2vjma3d', 'template_eozapdl', form.current, 'cZQf4Tev6rhPpsGcI')
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
                <div className="flex items-center gap-4 mb-8">
                    <Link to="/" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <ArrowLeft className="w-6 h-6 text-slate-500" />
                    </Link>
                    <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                        <Mail className="w-6 h-6 text-indigo-500" />
                        1:1 문의하기
                    </h1>
                </div>

                {status === 'success' ? (
                    <div className="text-center py-12 animate-fade-in-up">
                        <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">문의가 접수되었습니다!</h2>
                        <p className="text-slate-500 mb-8">
                            빠른 시일 내에 답변 드리겠습니다.<br/>
                            (답변은 입력하신 이메일로 발송됩니다.)
                        </p>
                        <button 
                            onClick={() => setStatus('idle')}
                            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors"
                        >
                            다른 문의하기
                        </button>
                    </div>
                ) : (
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-lg text-sm text-indigo-700 mb-6">
                            👋 안녕하세요! <strong>Z-Labs</strong>입니다.<br/>
                            서비스 이용 중 불편한 점이나 제안하고 싶은 내용이 있다면 편하게 남겨주세요.
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">문의 유형</label>
                            <select name="category" className="w-full rounded-lg border-slate-200 p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none" required>
                                <option value="제휴/협업">🤝 제휴 및 협업 제안</option>
                                <option value="버그/오류">🐛 버그 제보 및 오류 신고</option>
                                <option value="기타">💬 기타 문의</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">답변 받으실 이메일</label>
                            <input 
                                type="email" 
                                name="user_email" 
                                placeholder="name@example.com"
                                className="w-full rounded-lg border-slate-200 p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none" 
                                required 
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">제목</label>
                            <input 
                                type="text" 
                                name="subject" 
                                placeholder="문의 제목을 입력해주세요"
                                className="w-full rounded-lg border-slate-200 p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none" 
                                required 
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">문의 내용</label>
                            <textarea 
                                name="message" 
                                rows="5"
                                placeholder="상세한 내용을 적어주세요."
                                className="w-full rounded-lg border-slate-200 p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none resize-none" 
                                required 
                            ></textarea>
                        </div>

                        {status === 'error' && (
                            <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                                <AlertCircle className="w-4 h-4" />
                                메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.
                            </div>
                        )}

                        <button 
                            type="submit" 
                            disabled={status === 'sending'}
                            className={`w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {status === 'sending' ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    전송 중...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    문의 보내기
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
