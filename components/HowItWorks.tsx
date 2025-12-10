'use client'

const steps = [
  {
    number: '01',
    title: '진단',
    description: '현장 데이터 분석 및 문제점 도출',
  },
  {
    number: '02',
    title: 'PoC',
    description: '실제 라인 데이터를 사용해 8~12주 내 성능을 검증합니다.',
  },
  {
    number: '03',
    title: '현장 적용',
    description: '검증된 모델을 실제 라인에 배포합니다.',
  },
  {
    number: '04',
    title: '운영/고도화',
    description: '지속적인 모니터링 및 개선을 통해 성능을 향상시킵니다.',
  },
]

export default function HowItWorks() {
  return (
    <section id="howitworks" className="py-24 md:py-40 px-4 bg-gradient-to-b from-navy-deep/40 via-navy-deep/30 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            How it works
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-medium">4단계 프로세스</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-navy-dark to-navy-deep/50 border border-navy-deep rounded-2xl p-8 md:p-10 hover:border-neon-accent hover:shadow-2xl hover:shadow-neon-accent/20 transition-all duration-500 hover:scale-105"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-6 -left-6 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-neon-accent to-blue-accent rounded-full flex items-center justify-center shadow-xl shadow-neon-accent/50 group-hover:scale-110 transition-transform duration-300">
                <span className="text-navy-dark font-black text-2xl md:text-3xl">
                  {step.number}
                </span>
              </div>

              <div className="pt-10">
                <h3 className="text-2xl md:text-3xl font-black mb-6 leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg md:text-xl">
                  {step.description}
                </p>
              </div>

              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <>
                  <div className="hidden lg:block absolute top-1/2 -right-5 w-10 h-1 bg-gradient-to-r from-neon-accent to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  {/* Vertical connector for 2-column layout */}
                  {index === 1 && (
                    <div className="hidden md:block lg:hidden absolute -bottom-5 left-1/2 -translate-x-1/2 h-10 w-1 bg-gradient-to-b from-neon-accent to-transparent opacity-60"></div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

