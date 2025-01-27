# hoonie-blog

hoonie-blog는 Next.js와 MDX를 활용한 미니멀한 정적 블로그입니다.

## 프로젝트 소개

hoonie-blog는 다음과 같은 기능을 기반으로 정적 블로그를 구성합니다:

- Next.js를 활용한 정적 사이트 생성
- MDX 기반 콘텐츠 관리
- 최소한의 패키지 의존성
- 성능 최적화
- 다크 모드 지원

## 기술 스택

- [Next.js](https://nextjs.org/)
- [MDX](https://mdxjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Remark](https://github.com/remarkjs/remark)

## 프로젝트 구조

```
hoonie-blog
├─ src
│  ├─ app              # Next.js 앱 라우터
│  ├─ components       # React 컴포넌트
│  │  ├─ common        # 공통 UI 컴포넌트
│  │  ├─ post          # 포스트 관련 컴포넌트
│  │  └─ ui            # 기본 UI 컴포넌트
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

### 중요 기능 (2순위)

- [ ] SEO 최적화
- [ ] 포스트 검색

### 선택 기능 (3순위)

- [ ] 태그/카테고리
- [ ] 아카이브
- [ ] 댓글 시스템 (Giscus 활용)

리드미는 계속해서 추가될 예정입니다!
