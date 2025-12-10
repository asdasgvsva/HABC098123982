import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Manufacturing x AI Studio – 공장 데이터를 수익으로 바꾸는 엔지니어링 파트너',
  description: 'MES·비전·설비 데이터를 연결해 불량·다운타임·에너지 낭비를 줄입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}

