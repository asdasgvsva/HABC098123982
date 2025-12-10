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

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 md:space-y-10 text-center md:text-left animate-slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight">
              <span className="block mb-2">데이터와 현장을</span>
              <span className="block mb-2">아는</span>
              <span className="block bg-gradient-to-r from-neon-accent via-blue-accent to-neon-accent bg-clip-text text-transparent animate-gradient">
                제조 AI 파트너
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed max-w-xl font-medium">
              MES·비전·설비 데이터를 연결해<br />
              <span className="text-neon-accent">불량·다운타임·에너지 낭비</span>를 줄입니다.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 pt-6">
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

          {/* Right: Visual Placeholder */}
          <div className="relative h-80 md:h-[500px] lg:h-[600px] flex items-center justify-center animate-fade-in-delay">
            {/* Abstract illustration using gradients and shapes */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-dark to-navy-deep rounded-3xl opacity-90 border border-neon-accent/20"></div>
            
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.15)_1px,transparent_1px)] bg-[size:40px_40px] rounded-3xl"></div>
            
            {/* Animated abstract shapes */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <div className="absolute w-40 h-40 md:w-64 md:h-64 bg-neon-accent rounded-full opacity-25 blur-3xl animate-pulse"></div>
              <div className="absolute w-32 h-32 md:w-48 md:h-48 bg-blue-accent rounded-full opacity-30 blur-2xl -translate-x-20 md:-translate-x-32 animate-bounce-slow"></div>
              <div className="absolute w-28 h-28 md:w-40 md:h-40 bg-neon-accent rounded-lg opacity-40 blur-xl translate-x-20 md:translate-x-32 rotate-45 animate-spin-slow"></div>
              
              {/* Icon representation with glow */}
              <div className="relative z-20">
                <div className="absolute inset-0 bg-neon-accent rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <Eye className="relative w-20 h-20 md:w-32 md:h-32 text-neon-accent drop-shadow-[0_0_20px_rgba(0,217,255,0.8)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

