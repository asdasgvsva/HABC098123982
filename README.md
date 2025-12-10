# Manufacturing x AI Studio Landing Page

공장 데이터를 수익으로 바꾸는 엔지니어링 파트너를 소개하는 랜딩 페이지입니다.

## 기술 스택

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (아이콘)

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 프로젝트 구조

```
manu/
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx             # 메인 페이지
│   └── globals.css          # 전역 스타일
├── components/
│   ├── Hero.tsx             # Hero 섹션
│   ├── WhatWeDo.tsx         # 서비스 소개
│   ├── HowItWorks.tsx       # 프로세스 설명
│   ├── CaseStudies.tsx      # 사례 연구
│   ├── About.tsx            # 팀 소개
│   └── Contact.tsx          # 연락처 폼
└── public/                  # 정적 파일
```

## 디자인 시스템

- **색상**: 다크 네이비 (#0A1929) + 딥 블루 (#1E3A5F) + 네온 액센트 (#00D9FF)
- **폰트**: Pretendard (한글), Inter (영문)
- **레이아웃**: 최대 폭 1200px, 중앙 정렬
- **배경**: 그리드/도면 패턴 오버레이

## 주요 기능

- 반응형 디자인 (모바일, 태블릿, 데스크톱)
- 부드러운 스크롤 네비게이션
- 폼 유효성 검사
- SEO 최적화
- 접근성 고려 (ARIA 레이블, 시맨틱 HTML)

