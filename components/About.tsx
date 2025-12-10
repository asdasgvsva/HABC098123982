'use client'

import { Check } from 'lucide-react'

const experiences = [
  'ViViT 기반 용접 품질 분석 시스템 개발',
  'MES 연동 실시간 예측 엔진 구축',
  'GPU 서버 구축 및 실시간 비전 인퍼런스',
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 px-4 bg-gradient-to-b from-transparent via-navy-deep/30 to-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            About
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-medium">AI Engineer / 제조 프로젝트 경험</p>
        </div>

        <div className="bg-gradient-to-br from-navy-dark via-navy-deep/50 to-navy-dark border border-navy-deep rounded-2xl p-10 md:p-12 shadow-2xl backdrop-blur-sm">
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed mb-12 text-center font-medium">
            제조 현장의 데이터를 이해하고,<br />
            <span className="text-neon-accent font-bold">AI 기술로 실질적인 가치</span>를 만들어내는<br />
            엔지니어링 파트너입니다.
          </p>

          <div className="space-y-5">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group flex items-start gap-5 p-6 bg-gradient-to-r from-navy-deep/60 to-navy-deep/40 rounded-xl hover:from-navy-deep hover:to-navy-deep/80 transition-all duration-300 hover:scale-[1.02] border border-navy-deep hover:border-neon-accent/50"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-neon-accent/30 to-blue-accent/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  <Check className="w-5 h-5 text-neon-accent" />
                </div>
                <p className="text-gray-200 leading-relaxed text-lg md:text-xl font-medium">{exp}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

