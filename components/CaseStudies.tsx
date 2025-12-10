'use client'

import { CheckCircle2, TrendingDown } from 'lucide-react'

const cases = [
  {
    title: '용접 AI 검사 PoC',
    keyword: 'Vision AI',
    metric: '불량 검출 Recall 95% 이상',
    icon: CheckCircle2,
    color: 'text-neon-accent',
  },
  {
    title: 'MES 예측모델',
    keyword: 'Predictive Analytics',
    metric: '특정 라인 다운타임 20% 감소 목표로 운영 중',
    icon: TrendingDown,
    color: 'text-blue-accent',
  },
]

export default function CaseStudies() {
  return (
    <section id="casestudies" className="py-24 md:py-40 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Case / Capability
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-medium">경험과 성과</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {cases.map((caseItem, index) => {
            const Icon = caseItem.icon
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-navy-deep via-navy-dark to-navy-deep border border-navy-deep rounded-2xl p-10 md:p-12 hover:border-neon-accent transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-neon-accent/20 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="flex-1">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-neon-accent/20 to-blue-accent/20 text-neon-accent text-sm md:text-base font-bold rounded-full mb-6 border border-neon-accent/30">
                      {caseItem.keyword}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                      {caseItem.title}
                    </h3>
                  </div>
                  <div className="ml-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-neon-accent/20 to-blue-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className={`w-8 h-8 ${caseItem.color} drop-shadow-[0_0_10px_rgba(0,217,255,0.5)]`} />
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-navy-deep">
                  <p className="text-xl md:text-2xl font-bold text-gray-100 leading-relaxed">
                    {caseItem.metric}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

