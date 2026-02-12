import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
                <div className="flex items-center gap-4 mb-8">
                    <Link to="/" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <ArrowLeft className="w-6 h-6 text-slate-500" />
                    </Link>
                    <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                        <Shield className="w-6 h-6 text-indigo-500" />
                        개인정보처리방침
                    </h1>
                </div>

                <div className="space-y-8 text-slate-600 leading-relaxed">
                    <section>
                        <h2 className="text-lg font-bold text-slate-800 mb-2">1. 개인정보의 처리 목적</h2>
                        <p>Z-Labs ('z-labs.kr' 및 하위 서비스)는 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>서비스 제공: 밸런스 게임, 로또 분석 등 콘텐츠 제공</li>
                            <li>통계 분석: 익명화된 데이터를 활용한 서비스 개선 및 통계 분석</li>
                            <li>문의 응대: 사용자 문의 및 제안에 대한 답변</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-slate-800 mb-2">2. 처리하는 개인정보의 항목</h2>
                        <p>Z-Labs는 회원가입 없이 이용 가능한 서비스입니다. 다만, 서비스 이용 과정에서 아래 정보가 생성되어 수집될 수 있습니다.</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보</li>
                            <li>(선택) 밸런스 게임 투표 시: 성별, 연령대, MBTI (익명 저장)</li>
                        </ul>
                    </section>
                    
                    <section>
                        <h2 className="text-lg font-bold text-slate-800 mb-2">3. 쿠키(Cookie)의 운용 및 거부</h2>
                        <p>
                            본 서비스는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.
                            이용자는 웹 브라우저의 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키 저장을 거부할 수 있습니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-slate-800 mb-2">4. 개인정보 보호책임자</h2>
                        <p>서비스 이용과 관련된 개인정보 관련 문의사항은 아래의 연락처로 문의 주시기 바랍니다.</p>
                        <div className="mt-2 text-sm bg-slate-50 p-4 rounded-lg">
                            <p>이름: Wooz</p>
                            <p>이메일: <a href="mailto:contact@z-labs.kr" className="text-indigo-500 hover:underline">contact@z-labs.kr</a></p>
                        </div>
                    </section>
                </div>
                
                <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                    <p className="text-sm text-slate-400">본 방침은 2026년 2월 12일부터 시행됩니다.</p>
                </div>
            </div>
        </div>
    );
}
