# Profile

Front-end 개발자 장경욱의 인터랙티브 프로필 카드입니다.
랜딩 화면에서 입장하면 소개 · 프로젝트 · 비디오 · 위치를 탭으로 둘러볼 수 있습니다.

**Live**: https://samsamgo.github.io/Profile/

## Tech Stack

- React 18 + Vite
- 순수 CSS (딥 네이비 + 시안 오로라, 글래스모피즘 카드)
- Leaflet + OpenStreetMap (클릭 시 좌표 · 주소 조회, Nominatim 역지오코딩)
- YouTube 클릭-투-플레이 임베드 (Lofi 탭)
- GitHub Readme Stats (실시간 언어 통계)

## Scripts

```bash
npm install
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드 (dist/)
npm run preview  # 빌드 미리보기
```

## Deploy

`dist/` 빌드 결과물을 `gh-pages` 브랜치로 푸시해 GitHub Pages로 배포합니다.
