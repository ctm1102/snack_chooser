# 🍪 Snack Chooser

먹고 싶은 간식을 랜덤으로 추천해주는 반응형 웹 앱입니다.

## 주요 기능

- 간식 카테고리별 목록 및 랜덤 추천
- 이메일 기반 회원가입·로그인·로그아웃 (Supabase Auth)
- 회원가입 시 이름과 알러지 설정 저장
- 로그인한 사용자별 즐겨찾기 저장 (현재 브라우저의 localStorage)
- 모바일부터 데스크톱까지 화면 크기에 맞춘 반응형 레이아웃
- 쿠키 이모지 로고와 파비콘

## 실행 및 Supabase 설정

이 프로젝트는 빌드 과정이 없는 정적 HTML/CSS/JavaScript 앱입니다. `index.html`을 로컬 정적 서버나 GitHub Pages에서 실행하세요. 일부 브라우저 API와 Supabase 설정은 `file://` 실행에서 동작하지 않을 수 있으므로 로컬 웹 서버를 권장합니다.

Supabase 대시보드에서 프로젝트를 만들고 **Authentication → Providers → Email**을 활성화하세요. 이메일 확인을 사용하는 경우 가입 후 받은 메일의 인증 링크를 눌러야 로그인할 수 있습니다. Supabase의 Project URL과 publishable/anon 공개 키는 `script.js`와 `auth.js`의 설정값에 맞춰 두세요. 해당 키는 브라우저에 공개되는 키만 사용해야 하며 `service_role` 키나 비밀 키는 절대로 클라이언트 코드에 넣지 마세요.

회원가입은 Supabase Auth를 사용하며 사용자 이름과 알러지 선택값은 Auth 사용자의 metadata에 저장됩니다. 비밀번호를 앱에서 직접 저장하거나 SHA-256으로 해시하지 않습니다. 비밀번호 검증 및 안전한 비밀번호 해싱은 Supabase Auth가 서버에서 처리합니다. 즐겨찾기는 사용자 ID별로 현재 브라우저의 localStorage에 저장되므로 다른 기기와 동기화되지는 않습니다.

## SQL 및 데이터베이스

현재 회원가입·로그인과 프로필 설정은 Supabase Auth만 사용하므로 별도 SQL 테이블이 필요하지 않습니다. 이 프로젝트는 기존 `users` 테이블에 비밀번호 해시를 직접 저장하던 방식 대신 Supabase Auth의 안전한 인증 API를 사용합니다. 즐겨찾기를 여러 기기에서 동기화하려면 별도 DB 테이블을 추가할 수 있지만, 테이블에 RLS를 활성화하고 `auth.uid()`로 본인 데이터만 읽고 쓸 수 있도록 정책을 설정해야 합니다. SQL은 이 기본 로그인 기능에 적용하지 마세요.

## 배포

GitHub Pages에 저장소를 배포할 수 있습니다: <https://ctm1102.github.io/snack_chooser>

## 보안 참고

- 브라우저에 포함되는 Supabase publishable/anon 키는 공개 정보이며, 데이터 접근 권한은 Auth와 RLS 정책으로 제한해야 합니다.
- 비밀번호나 서비스 키를 저장소, localStorage, 사용자 metadata에 저장하지 마세요.
- 인증 리디렉션 URL과 이메일 확인 설정은 Supabase 대시보드에서 배포 도메인에 맞게 구성하세요.
