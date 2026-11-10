# MASIDDA / SUPERWA — storefront study

마시따 프리미엄 과일 쇼핑몰의 **독립 UI 작업용 저장소**입니다.

> ⚠️ 현재 저장소는 **public**입니다. 원본 케이디자인(체리쉬 스칼렛) 유료 스킨 파일은 재배포하지 않습니다. 포함된 HTML/CSS/JS는 기존 화면 구조를 참고해 새로 작성한 정적 시안입니다.

## Preview
GitHub Pages에서 `main` 브랜치의 `/ (root)`를 게시하면 정적 시안을 볼 수 있습니다. Pages 설정은 저장소 Settings → Pages에서 진행합니다.

## 현재 범위
- 모바일 고정폭 + PC 브랜드 프로모션 레이아웃
- 상단 공지, 헤더, 메인 비주얼, 카테고리, 상품 진열, 브랜드 소개, 리뷰 및 푸터
- 모바일 내비게이션과 간단한 배너 인터랙션
- **실제 상품·주문·로그인·검색·장바구니는 연결되지 않음** (정적 목업)

## Cafe24 원본 연결 지도
| 원본 연결 | 용도 |
|---|---|
| `layout/basic/main.html` | 사이트 공통 레이아웃 |
| `index.html` | 메인 페이지 컨텐츠 |
| `/_kd/import/header.html` | 헤더 |
| `/layout/basic/sidebar.html` | 모바일 메뉴 |
| `/_kd/import/bn_right.html` | PC 고정 프로모션 |
| `/_kd/import/footer.html` | 푸터 |
| `/_kd/import/quick_menu.html` | 퀵메뉴 |
| `/_kd/import/prd/list01.html` | 상품 카드 공통 템플릿 |
| `/_kd/import/bn_code.html` | 배너매니저 |
| `/_kd/base.html` | 스킨 기반 설정 |

원본에서는 `bn-main`, `bn-cate`, `bn-line01`, `bn-line02` 배너 그룹 및 `product_listmain_1` ~ `product_listmain_6`, 리뷰 게시판을 사용합니다.

## 다음 작업
1. 카페24 관리자에서 실제 로고·상품 이미지·배너·콘텐츠 확보
2. 실제 화면과 비교해 간격/타이포/크기 정밀 조정
3. UI 확정 후 카페24 스킨에 적용할 CSS 및 템플릿 별도 제작
4. 장바구니/로그인/주문은 실제 카페24에서 테스트

운영 쇼핑몰과 GitHub Pages는 별개입니다.
