#!/bin/bash

echo "🚀 Vercel 배포 시작..."
echo ""
echo "1단계: Vercel 로그인"
vercel login

echo ""
echo "2단계: 배포 시작"
vercel --prod

echo ""
echo "✅ 배포 완료! 위에 표시된 URL로 접속하세요."

