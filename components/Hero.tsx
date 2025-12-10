'use client'

import { ArrowRight, Eye, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 md:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-accent rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-accent rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Concept Tagline */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <p className="text-base md:text-lg lg:text-xl text-neon-accent font-semibold tracking-wider uppercase">
            Manufacturing x AI Studio
          </p>
          <p className="text-sm md:text-base text-gray-400 mt-2">
            공장 데이터를 수익으로 바꾸는 엔지니어링 파트너
          </p>
        </div>

        {/* Main Hero Text - Centered */}
        <div className="text-center animate-slide-up">
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[1.1] tracking-tight mb-4">
            <span className="block text-white mb-2">데이터와 현장</span>
            <span className="block text-white mb-2">을 아는</span>
            <span className="block text-neon-accent">제조 AI 파트너</span>
          </h1>
        </div>
        
        {/* Subtitle and CTA - Below */}
        <div className="mt-16 md:mt-20 text-center space-y-8">
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-medium">
            MES·비전·설비 데이터를 연결해<br />
            <span className="text-neon-accent">불량·다운타임·에너지 낭비</span>를 줄입니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center px-10 py-5 bg-neon-accent text-navy-dark font-bold text-lg rounded-xl hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-neon-accent/50 hover:shadow-xl hover:shadow-neon-accent/70"
            >
              프로젝트 상담 요청
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#casestudies"
              className="inline-flex items-center justify-center px-10 py-5 border-2 border-neon-accent text-neon-accent font-bold text-lg rounded-xl hover:bg-neon-accent hover:bg-opacity-10 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              포트폴리오 보기
              <Sparkles className="ml-3 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

