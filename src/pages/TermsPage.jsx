import React from 'react';
import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <SEO 
                title="이용약관" 
                description="Z-Labs 서비스 이용약관. 서비스 이용에 대한 제반 사항을 안내합니다." 
                url="https://z-labs.kr/terms" 
            />
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
                <div className="flex items-center gap-4 mb-8">
                    <Link to="/" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <ArrowLeft className="w-6 h-6 text-slate-500" />
                    </Link>
                    <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                        <FileText className="w-6 h-6 text-indigo-500" />
                        이용약관
                    </h1>
                </div>

                <div className="space-y-8 text-slate-600 leading-relaxed">
                    <section>
                        <h2 className="text-lg font-bold text-slate-800 mb-2">제1조 (목적)</h2>
                        <p>본 약관은 Z-Labs(이하 '회사' 또는 '서비스')가 제공하는 모든 웹 서비스(밸런스 게임, 로또 분석 시스템 등)의 이용조건 및 절차, 회사와 회원(또는 이용자) 간의 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-slate-800 mb-2">제2조 (용어의 정의)</h2>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><strong>서비스:</strong> 단말기(PC, 휴대형 단말기 등)와 상관없이 이용자가 이용할 수 있는 Z-Labs 및 관련 제반 서비스를 의미합니다.</li>
                            <li><strong>이용자:</strong> 서비스에 접속하여 본 약관에 따라 회사가 제공하는 서비스를 받는 비회원 및 회원을 의미합니다.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-slate-800 mb-2">제3조 (약관의 효력 및 변경)</h2>
                        <p>
                            본 약관은 서비스 초기 화면에 게시함으로써 효력이 발생합니다. 회사는 필요하다고 인정되는 경우 관련 법령을 위배하지 않는 범위 내에서 약관을 개정할 수 있으며, 개정된 약관은 적용일자 및 개정사유를 명시하여 현행 약관과 함께 그 적용일자 7일 전부터 적용일자 전일까지 미리 공지합니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-slate-800 mb-2">제4조 (서비스의 제공 및 변경)</h2>
                        <p>
                            회사는 이용자에게 밸런스 게임, 데이터 기반 분석 콘텐츠 등 다양한 엔터테인먼트 서비스를 제공합니다. 회사는 운영상, 기술상의 필요에 따라 제공하고 있는 일부 또는 전부의 서비스를 변경 또는 중단할 수 있으며, 이 경우 사전에 공지합니다. 단, 무료로 제공되는 서비스의 변경 또는 중단에 대해서는 관련 법규에 특별한 규정이 없는 한 이용자에게 별도의 보상을 하지 않습니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-slate-800 mb-2">제5조 (책임의 한계 및 면책)</h2>
                        <p>
                            모든 서비스는 "있는 그대로" 제공되며, 특정 목적에의 적합성이나 정확성을 보증하지 않습니다. 특히 제한적 데이터나 통계에 기반한 분석 결과(예: 로또 번호 분석 등)는 참고용일 뿐이며, 이를 활용한 결과에 대해 회사는 법적 책임을 지지 않습니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold text-slate-800 mb-2">제6조 (문의 및 분쟁 해결)</h2>
                        <p>서비스 이용과 관련하여 분쟁이 발생한 경우, 담당자 이메일(<a href="mailto:contact@z-labs.kr" className="text-indigo-500 hover:underline">contact@z-labs.kr</a>)로 문의하실 수 있으며 회사는 이를 신속하게 처리하기 위해 노력합니다.</p>
                    </section>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                    <p className="text-sm text-slate-400">본 약관은 2026년 2월 21일부터 시행됩니다.</p>
                </div>
            </div>
        </div>
    );
}
