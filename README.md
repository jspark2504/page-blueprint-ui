# Nature Reserve Landing (Next.js)

자연/공간 소개형 랜딩 페이지를 위한 **Next.js(App Router) 프로젝트**입니다.  
현재 버전은 단일 홈 랜딩(`/`) 중심으로 구성되어 있으며, 백엔드 없이 바로 실행됩니다.

## 핵심 특징

- 풀스크린 히어로 + CTA 버튼
- 소개 섹션(텍스트 + 수치 카드 + 이미지 그리드)
- 주요 특징 카드 4개
- 이벤트 카드 섹션
- 방문 안내(운영시간/위치/문의/이메일) + 예약 CTA
- 재진입 시 반복되는 스크롤 애니메이션(`framer-motion`)

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 접속

### 스크립트

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## 현재 라우팅 구조

- 메인 페이지: `/`
- 호환용 리다이렉트:
  - `/about` -> `/#about-overview`
  - `/gallery` -> `/#features`
  - `/contact` -> `/#visit-guide`

즉, 실질적인 콘텐츠는 홈 단일 페이지에서 섹션 단위로 제공됩니다.

## 커스터마이징 포인트

### 전역 사이트 데이터

`src/content/site.config.ts`

- `siteName`, `siteDescription`
- `nav` (헤더 메뉴)
- `contact` (방문 안내 카드)
- `eventCards` (이벤트 목록)
- `organizationJsonLd` (구조화 데이터)

### 주요 UI/레이아웃 파일

- `src/components/layout/Header.tsx`
- `src/components/sections/HeroSection.tsx`
- `src/components/sections/HomeInformationSections.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/ui/Button.tsx`
- `src/app/globals.css`

## 디렉터리 개요

```txt
src/
  app/
    page.tsx
    about/page.tsx      # anchor redirect
    gallery/page.tsx    # anchor redirect
    contact/page.tsx    # anchor redirect
    layout.tsx
    globals.css
    robots.ts
    sitemap.ts
  components/
    layout/
    sections/
    ui/
  content/
    site.config.ts
  lib/
    metadata.ts
```

## 운영 전 체크

- `src/content/site.config.ts`의 `url`을 실제 도메인으로 변경
- `contact` 정보(전화/이메일/주소) 실데이터로 교체
- 이벤트 카드 이미지/문구를 운영 데이터로 교체
