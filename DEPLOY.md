# 배포 가이드

## 🚀 Vercel로 배포하기 (가장 추천)

### 방법 1: Vercel CLI 사용 (가장 빠름)

1. **Vercel CLI 설치**
   ```bash
   npm i -g vercel
   ```

2. **프로젝트 디렉토리에서 배포**
   ```bash
   vercel
   ```
   
3. **처음 배포 시:**
   - Vercel 계정으로 로그인 (브라우저 열림)
   - 프로젝트 설정 확인 후 Enter
   - 배포 완료!

4. **업데이트 배포:**
   ```bash
   vercel --prod
   ```

### 방법 2: Vercel 웹사이트 사용

1. **GitHub에 코드 푸시**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Vercel 웹사이트에서:**
   - https://vercel.com 접속
   - GitHub 계정으로 로그인
   - "Add New Project" 클릭
   - GitHub 저장소 선택
   - 자동으로 설정 감지됨 → "Deploy" 클릭
   - 완료! URL 제공됨

### 무료 플랜 제한사항
- ✅ 무제한 프로젝트
- ✅ 무제한 트래픽
- ✅ 자동 HTTPS
- ✅ 커스텀 도메인 가능
- ⚠️ 빌드 시간: 월 6000분 (충분함)
- ⚠️ 서버리스 함수: 월 100GB 시간 (충분함)

---

## 🌐 Netlify로 배포하기

1. **GitHub에 코드 푸시**

2. **Netlify 웹사이트에서:**
   - https://netlify.com 접속
   - GitHub 계정으로 로그인
   - "Add new site" → "Import an existing project"
   - 저장소 선택
   - 빌드 설정:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - "Deploy site" 클릭

---

## ☁️ Cloudflare Pages로 배포하기

1. **GitHub에 코드 푸시**

2. **Cloudflare Pages에서:**
   - https://pages.cloudflare.com 접속
   - GitHub 계정 연결
   - "Create a project" → 저장소 선택
   - 빌드 설정:
     - Framework preset: Next.js
     - Build command: `npm run build`
   - "Save and Deploy" 클릭

---

## 📝 배포 전 체크리스트

- [ ] `npm run build` 성공 확인
- [ ] 환경 변수 설정 (필요시)
- [ ] `.env` 파일은 `.gitignore`에 포함되어 있는지 확인
- [ ] GitHub에 코드 푸시 완료

---

## 🔗 배포 후

배포가 완료되면:
- 자동으로 HTTPS 적용됨
- 커스텀 도메인 연결 가능
- 코드 푸시 시 자동 재배포 (GitHub 연동 시)

