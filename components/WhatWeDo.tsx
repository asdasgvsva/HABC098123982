'use client'

import { Eye, Cpu, TrendingUp } from 'lucide-react'

const services = [
  {
    icon: Eye,
    title: 'AI 품질 검사',
    subtitle: 'Vision / ViViT',
    description: '비전 AI 기술을 활용한 실시간 품질 검사 시스템으로 불량품을 정확하게 감지하고 분류합니다.',
  },
  {
    icon: Cpu,
    title: '설비 예측정비',
    subtitle: 'Sensor & Log AI',
    description: '센서 데이터와 설비 로그를 분석해 고장 전 징후를 미리 감지하고 정비 시점을 최적화합니다.',
  },
  {
    icon: TrendingUp,
    title: '공정 데이터 기반 수율·에너지 최적화',
    subtitle: 'Process Optimization',
    description: 'MES 데이터를 분석해 공정 파라미터를 최적화하고 수율을 향상시키며 에너지 소비를 절감합니다.',
  },
]

export default function WhatWeDo() {
  return (
    <section id="whatwedo" className="py-24 md:py-40 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            What we do
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-medium">우리가 하는 일</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-navy-deep/80 to-navy-dark/80 border border-navy-deep rounded-2xl p-8 md:p-10 hover:border-neon-accent hover:bg-opacity-100 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-neon-accent/20 backdrop-blur-sm"
              >
                <div className="mb-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-neon-accent/30 to-blue-accent/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-neon-accent/20">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-neon-accent" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-base md:text-lg text-neon-accent font-semibold mb-4">
                    {service.subtitle}
                  </p>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg md:text-xl">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

