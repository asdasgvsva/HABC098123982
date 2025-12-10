'use client'

import { useState } from 'react'
import { Mail, Linkedin, Github, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
    alert('문의가 접수되었습니다. 곧 연락드리겠습니다.')
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-24 md:py-40 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Contact
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-medium">
            아이디어 단계부터 PoC, 기존 라인 고도화까지 함께 고민합니다.
          </p>
          <p className="text-lg md:text-xl text-gray-500">
            간단한 상담이라도 편하게 남겨 주세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-navy-dark to-navy-deep/50 border border-navy-deep rounded-2xl p-8 md:p-10 shadow-2xl backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-base font-semibold text-gray-200 mb-3"
                >
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-navy-deep border border-navy-deep rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-accent focus:ring-2 focus:ring-neon-accent/20 transition-all text-lg"
                  placeholder="이름을 입력하세요"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-base font-semibold text-gray-200 mb-3"
                >
                  회사
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-navy-deep border border-navy-deep rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-accent focus:ring-2 focus:ring-neon-accent/20 transition-all text-lg"
                  placeholder="회사명을 입력하세요"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-semibold text-gray-200 mb-3"
                >
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-navy-deep border border-navy-deep rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-accent focus:ring-2 focus:ring-neon-accent/20 transition-all text-lg"
                  placeholder="이메일을 입력하세요"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-base font-semibold text-gray-200 mb-3"
                >
                  문의 내용
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-navy-deep border border-navy-deep rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-accent focus:ring-2 focus:ring-neon-accent/20 transition-all resize-none text-lg"
                  placeholder="문의 내용을 입력하세요"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-5 bg-gradient-to-r from-neon-accent to-blue-accent text-navy-dark font-bold text-lg rounded-xl hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-neon-accent/50 hover:shadow-xl hover:shadow-neon-accent/70 hover:scale-105"
              >
                <Send className="w-6 h-6" />
                문의 보내기
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-navy-dark to-navy-deep/50 border border-navy-deep rounded-2xl p-8 md:p-10 shadow-2xl backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-black mb-8">연락처</h3>
              
              <div className="space-y-5">
                <a
                  href="mailto:contact@example.com"
                  className="group flex items-center gap-5 p-5 bg-gradient-to-r from-navy-deep/60 to-navy-deep/40 rounded-xl hover:from-navy-deep hover:to-navy-deep/80 transition-all duration-300 hover:scale-105 border border-navy-deep hover:border-neon-accent/50"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-accent/20 to-blue-accent/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-neon-accent" />
                  </div>
                  <span className="text-gray-200 text-lg font-medium">contact@example.com</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-5 bg-gradient-to-r from-navy-deep/60 to-navy-deep/40 rounded-xl hover:from-navy-deep hover:to-navy-deep/80 transition-all duration-300 hover:scale-105 border border-navy-deep hover:border-neon-accent/50"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-accent/20 to-blue-accent/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6 text-neon-accent" />
                  </div>
                  <span className="text-gray-200 text-lg font-medium">LinkedIn</span>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-5 bg-gradient-to-r from-navy-deep/60 to-navy-deep/40 rounded-xl hover:from-navy-deep hover:to-navy-deep/80 transition-all duration-300 hover:scale-105 border border-navy-deep hover:border-neon-accent/50"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-accent/20 to-blue-accent/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github className="w-6 h-6 text-neon-accent" />
                  </div>
                  <span className="text-gray-200 text-lg font-medium">Github</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

