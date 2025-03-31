# hoonie-blog

![opengraph-image](https://github.com/user-attachments/assets/52bbf62d-eea9-43fe-bfac-ecae5ad3013c)

hoonie-blog는 Next.js와 MDX를 활용한 미니멀한 정적 블로그입니다.

## 프로젝트 소개

hoonie-blog는 다음과 같은 기능을 기반으로 정적 블로그를 구성합니다:

- Next.js를 활용한 정적 사이트 생성
- MDX 기반 콘텐츠 관리
- 최소한의 패키지 의존성
- 성능 최적화
- 다크 모드 지원
- 체계적인 상수 관리

## 기술 스택

- [Next.js](https://nextjs.org/)
- [MDX](https://mdxjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Remark](https://github.com/remarkjs/remark)
- [TypeScript](https://www.typescriptlang.org/)

## 프로젝트 구조

```
hoonie-blog
├─ src
│  ├─ app              # Next.js 앱 라우터
│  ├─ components       # React 컴포넌트
│  │  ├─ common        # 공통 UI 컴포넌트
│  │  ├─ post          # 포스트 관련 컴포넌트
│  │  └─ ui            # 기본 UI 컴포넌트
│  ├─ constants        # 상수 정의
│  │  ├─ social.tsx    # 소셜 링크 데이터
│  │  ├─ site.ts       # 사이트 기본 정보
│  │  ├─ posts.ts      # 포스트 관련 상수
│  │  ├─ images.ts     # 이미지 관련 상수
│  │  ├─ date.ts       # 날짜 포맷 설정
│  │  └─ theme.ts      # 테마 관련 상수
│  ├─ content          # MDX 콘텐츠 파일
│  │  └─ posts         # 블로그 포스트
│  ├─ lib              # 핵심 기능
│  └─ types            # TypeScript 타입 정의
└─ public              # 정적 자산
   ├─ fonts
   ├─ icons
   ├─ og
   └─ images
```

## 기능

### 핵심 기능 (1순위)

- [x] MDX 포스트 렌더링
- [x] 페이지네이션이 있는 포스트 목록
- [x] 다크 모드 지원
- [x] 사용자 친화적인 404 페이지
- [x] 지속적인 테마 설정 저장

### 중요 기능 (2순위)

- [x] SEO 최적화
- [ ] 포스트 검색

### 선택 기능 (3순위)

- [ ] 태그/카테고리
- [ ] 아카이브
- [ ] 댓글 시스템 (Giscus 활용)

## 최근 업데이트 (v1.1.1)

### 주요 변경사항

- NotFound 페이지 디자인 개선
- 테마 설정 지속성 강화
- 매직 넘버와 UI 데이터 상수화
- 코드 품질 및 유지보수성 개선

### 기술적 개선

- TypeScript 타입 시스템 강화
- 상수 관리 체계 구축
- 코드 구조 개선
- 문서화 강화

리드미는 계속해서 추가될 예정입니다!
