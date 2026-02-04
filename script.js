/* --- [0. 간식 데이터] --- */
const snackNames = [
  { name: "포카칩 어니언", cat: "snack", allergies: [] },
  { name: "포카칩 오리지널", cat: "snack", allergies: [] },
  { name: "새우깡", cat: "snack", allergies: ["새우", "밀가루"] },
  { name: "매운새우깡", cat: "snack", allergies: ["새우", "밀가루"] },
  { name: "쌀새우깡", cat: "snack", allergies: ["새우", "밀가루"] },
  { name: "꼬북칩 초코츄러스", cat: "snack", allergies: ["우유", "밀가루"] },
  { name: "꼬북칩 콘스프", cat: "snack", allergies: ["우유", "밀가루"] },
  { name: "허니버터칩", cat: "snack", allergies: ["우유"] },
  { name: "고래밥", cat: "snack", allergies: ["밀가루", "우유"] },
  { name: "자갈치", cat: "snack", allergies: ["밀가루", "대두"] },
  { name: "오징어집", cat: "snack", allergies: ["밀가루"] },
  { name: "양파링", cat: "snack", allergies: ["밀가루"] },
  { name: "꿀꽈배기", cat: "snack", allergies: ["밀가루"] },
  { name: "맛동산", cat: "snack", allergies: ["밀가루", "견과류"] },
  { name: "에이스", cat: "snack", allergies: ["우유", "밀가루"] },
  { name: "홈런볼 초코", cat: "snack", allergies: ["계란", "우유", "밀가루"] },
  { name: "칸초", cat: "snack", allergies: ["밀가루", "우유"] },
  { name: "씨리얼", cat: "snack", allergies: ["밀가루", "우유"] },
  { name: "빼빼로 오리지널", cat: "snack", allergies: ["밀가루", "우유"] },
  { name: "아몬드 빼빼로", cat: "snack", allergies: ["밀가루", "우유", "견과류"] },
  { name: "누드 빼빼로", cat: "snack", allergies: ["밀가루", "우유"] },
  { name: "빈츠", cat: "snack", allergies: ["밀가루", "우유"] },
  { name: "다이제", cat: "snack", allergies: ["밀가루", "우유"] },
  { name: "초코다이제", cat: "snack", allergies: ["밀가루", "우유"] },
  { name: "초코송이", cat: "snack", allergies: ["밀가루", "우유"] },
  { name: "오사쯔", cat: "snack", allergies: ["우유"] },
  { name: "포스틱", cat: "snack", allergies: ["밀가루"] },
  { name: "감자깡", cat: "snack", allergies: ["밀가루"] },
  { name: "고구마깡", cat: "snack", allergies: ["밀가루"] },
  { name: "프링글스 오리지널", cat: "snack", allergies: [] },
  { name: "프링글스 어니언", cat: "snack", allergies: ["우유"] },
  { name: "콘칩", cat: "snack", allergies: [] },
  { name: "치토스", cat: "snack", allergies: ["우유"] },
  { name: "썬칩", cat: "snack", allergies: ["밀가루"] },
  { name: "프렌치파이 딸기", cat: "snack", allergies: ["밀가루"] },
  { name: "마가렛트", cat: "snack", allergies: ["밀가루", "계란", "우유"] },
  { name: "엄마손파이", cat: "snack", allergies: ["밀가루", "우유"] },
  { name: "쿠쿠다스", cat: "snack", allergies: ["밀가루", "우유"] },
  { name: "버터와플", cat: "snack", allergies: ["밀가루", "우유", "계란"] },
  { name: "참크래커", cat: "snack", allergies: ["밀가루"] },
  { name: "아이비", cat: "snack", allergies: ["밀가루"] },
  { name: "빠새", cat: "snack", allergies: ["밀가루", "새우"] },
  { name: "빠다코코낫", cat: "snack", allergies: ["밀가루", "우유"] },
  { name: "수미칩", cat: "snack", allergies: [] },
  { name: "눈을감자", cat: "snack", allergies: [] },
  { name: "자가비", cat: "snack", allergies: [] },
  { name: "포테토칩", cat: "snack", allergies: [] },
  { name: "짱구", cat: "snack", allergies: ["밀가루"] },
  { name: "별뽀빠이", cat: "snack", allergies: ["밀가루"] },
  { name: "조청유과", cat: "snack", allergies: [] },
  { name: "인디안밥", cat: "snack", allergies: ["우유"] },
  { name: "바나나킥", cat: "snack", allergies: ["우유"] },
  { name: "쵸코바나나킥", cat: "snack", allergies: ["우유"] },
  { name: "카라멜콘메이플", cat: "snack", allergies: [] },
  { name: "뻥소리", cat: "snack", allergies: ["밀가루"] },
  { name: "오예스", cat: "snack", allergies: ["밀가루", "우유", "계란"] },
  { name: "초코파이", cat: "snack", allergies: ["밀가루", "우유", "계란"] },
  { name: "몽쉘", cat: "snack", allergies: ["밀가루", "우유", "계란"] },
  { name: "카스타드", cat: "snack", allergies: ["밀가루", "우유", "계란"] },
  { name: "후렌치파이 사과", cat: "snack", allergies: ["밀가루"] },
  { name: "빅파이", cat: "snack", allergies: ["밀가루"] },
  { name: "칙촉", cat: "snack", allergies: ["밀가루", "우유", "계란"] },
  { name: "촉촉한초코칩", cat: "snack", allergies: ["밀가루", "우유", "계란"] },
  { name: "가나초콜릿", cat: "snack", allergies: ["우유"] },
  { name: "크런키", cat: "snack", allergies: ["우유", "밀가루"] },
  { name: "자유시간", cat: "snack", allergies: ["우유", "견과류"] },
  { name: "핫브레이크", cat: "snack", allergies: ["우유", "견과류"] },
  { name: "트윅스", cat: "snack", allergies: ["우유", "밀가루"] },
  { name: "스니커즈", cat: "snack", allergies: ["우유", "견과류"] },
  { name: "킷캣", cat: "snack", allergies: ["우유", "밀가루"] },
  { name: "메로나", cat: "icecream", allergies: ["우유"] },
  { name: "바밤바", cat: "icecream", allergies: ["우유", "견과류"] },
  { name: "누가바", cat: "icecream", allergies: ["우유", "견과류"] },
  { name: "부라보콘", cat: "icecream", allergies: ["우유", "밀가루", "견과류"] },
  { name: "월드콘", cat: "icecream", allergies: ["우유", "밀가루", "견과류"] },
  { name: "구구콘", cat: "icecream", allergies: ["우유", "견과류"] },
  { name: "투게더", cat: "icecream", allergies: ["우유"] },
  { name: "비비빅", cat: "icecream", allergies: ["대두"] },
  { name: "팥빙수", cat: "icecream", allergies: ["우유"] },
  { name: "설레임", cat: "icecream", allergies: ["우유"] },
  { name: "쭈쭈바 딸기", cat: "icecream", allergies: [] },
  { name: "폴라포", cat: "icecream", allergies: [] },
  { name: "탱크보이", cat: "icecream", allergies: [] },
  { name: "빠삐코", cat: "icecream", allergies: ["우유"] },
  { name: "거북알", cat: "icecream", allergies: ["우유"] },
  { name: "찰떡아이스", cat: "icecream", allergies: ["우유", "견과류"] },
  { name: "빵또아", cat: "icecream", allergies: ["밀가루", "우유", "계란"] },
  { name: "붕어싸만코", cat: "icecream", allergies: ["밀가루", "우유"] },
  { name: "국화빵", cat: "icecream", allergies: ["밀가루", "우유"] },
  { name: "와", cat: "icecream", allergies: ["우유"] },
  { name: "옥동자", cat: "icecream", allergies: ["우유"] },
  { name: "와일드바디", cat: "icecream", allergies: ["우유"] },
  { name: "돼지바", cat: "icecream", allergies: ["밀가루", "우유", "계란"] },
  { name: "수박바", cat: "icecream", allergies: [] },
  { name: "죠스바", cat: "icecream", allergies: [] },
  { name: "스크류바", cat: "icecream", allergies: [] },
  { name: "쌍쌍바", cat: "icecream", allergies: ["우유"] },
  { name: "보석바", cat: "icecream", allergies: ["우유"] },
  { name: "엔초", cat: "icecream", allergies: ["우유", "견과류"] },
  { name: "티코", cat: "icecream", allergies: ["우유"] },
  { name: "엑설런트", cat: "icecream", allergies: ["우유"] },
  { name: "셀렉션", cat: "icecream", allergies: ["우유"] },
  { name: "요맘때", cat: "icecream", allergies: ["우유"] },
  { name: "쿠앤크", cat: "icecream", allergies: ["밀가루", "우유"] },
  { name: "호두마루", cat: "icecream", allergies: ["우유", "견과류"] },
  { name: "체리마루", cat: "icecream", allergies: ["우유"] },
  { name: "녹차마루", cat: "icecream", allergies: ["우유"] },
  { name: "캔디바", cat: "icecream", allergies: ["우유"] },
  { name: "더위사냥", cat: "icecream", allergies: [] },
  { name: "뽕따", cat: "icecream", allergies: ["우유"] },
  { name: "아시나요", cat: "icecream", allergies: ["밀가루", "우유", "계란"] },
  { name: "빵코코", cat: "icecream", allergies: ["밀가루", "우유"] },
  { name: "모나카", cat: "icecream", allergies: ["밀가루", "우유"] },
  { name: "미니약과", cat: "tradition", allergies: ["밀가루"] },
  { name: "찹쌀떡", cat: "tradition", allergies: [] },
  { name: "연양갱", cat: "tradition", allergies: [] },
  { name: "강정", cat: "tradition", allergies: ["견과류"] },
  { name: "유과", cat: "tradition", allergies: [] },
  { name: "식혜", cat: "tradition", allergies: [] },
  { name: "수정과", cat: "tradition", allergies: [] },
  { name: "인절미", cat: "tradition", allergies: ["대두"] },
  { name: "꿀떡", cat: "tradition", allergies: [] },
  { name: "바람떡", cat: "tradition", allergies: ["대두"] },
  { name: "무지개떡", cat: "tradition", allergies: [] },
  { name: "증편", cat: "tradition", allergies: [] },
  { name: "오란다", cat: "tradition", allergies: ["밀가루"] },
  { name: "다식", cat: "tradition", allergies: [] },
  { name: "매작과", cat: "tradition", allergies: ["밀가루"] },
  { name: "호두과자", cat: "tradition", allergies: ["밀가루", "계란", "견과류"] },
  { name: "붕어빵", cat: "tradition", allergies: ["밀가루", "우유"] },
  { name: "호떡", cat: "tradition", allergies: ["밀가루", "견과류"] },
  { name: "계란빵", cat: "tradition", allergies: ["밀가루", "계란", "우유"] },
  { name: "국화빵(전통)", cat: "tradition", allergies: ["밀가루"] },
  { name: "하리보 골드베렌", cat: "candy", allergies: [] },
  { name: "하리보 스타믹스", cat: "candy", allergies: [] },
  { name: "마이구미 포도", cat: "candy", allergies: [] },
  { name: "마이구미 복숭아", cat: "candy", allergies: [] },
  { name: "왕꿈틀이", cat: "candy", allergies: [] },
  { name: "새콤달콤 딸기", cat: "candy", allergies: [] },
  { name: "새콤달콤 포도", cat: "candy", allergies: [] },
  { name: "새콤달콤 레몬", cat: "candy", allergies: [] },
  { name: "마이쮸 딸기", cat: "candy", allergies: ["우유"] },
  { name: "마이쮸 포도", cat: "candy", allergies: ["우유"] },
  { name: "마이쮸 사과", cat: "candy", allergies: ["우유"] },
  { name: "청포도 사탕", cat: "candy", allergies: [] },
  { name: "누룽지 사탕", cat: "candy", allergies: [] },
  { name: "박하 사탕", cat: "candy", allergies: [] },
  { name: "츄파춥스 딸기우유", cat: "candy", allergies: ["우유"] },
  { name: "츄파춥스 콜라", cat: "candy", allergies: [] },
  { name: "멘토스 민트", cat: "candy", allergies: [] },
  { name: "멘토스 과일", cat: "candy", allergies: [] },
  { name: "말랑카우", cat: "candy", allergies: ["우유"] },
  { name: "밀크릿", cat: "candy", allergies: ["우유"] },
  { name: "마쉬멜로우", cat: "candy", allergies: [] },
  { name: "비타500 젤리", cat: "candy", allergies: [] },
  { name: "박카스 젤리", cat: "candy", allergies: [] },
  { name: "포도알맹이", cat: "candy", allergies: [] },
  { name: "자두캔디", cat: "candy", allergies: [] },
  { name: "알사탕", cat: "candy", allergies: ["견과류"] },
  { name: "코카콜라", cat: "drink", allergies: [] },
  { name: "펩시콜라", cat: "drink", allergies: [] },
  { name: "칠성사이다", cat: "drink", allergies: [] },
  { name: "스프라이트", cat: "drink", allergies: [] },
  { name: "밀키스", cat: "drink", allergies: ["우유"] },
  { name: "암바사", cat: "drink", allergies: ["우유"] },
  { name: "환타 오렌지", cat: "drink", allergies: [] },
  { name: "환타 포도", cat: "drink", allergies: [] },
  { name: "닥터페퍼", cat: "drink", allergies: [] },
  { name: "웰치스 포도", cat: "drink", allergies: [] },
  { name: "데미소다 사과", cat: "drink", allergies: [] },
  { name: "오렌지 주스", cat: "drink", allergies: [] },
  { name: "포도 주스", cat: "drink", allergies: [] },
  { name: "사과 주스", cat: "drink", allergies: [] },
  { name: "하늘보리", cat: "drink", allergies: [] },
  { name: "옥수수수염차", cat: "drink", allergies: [] },
  { name: "컨디션", cat: "drink", allergies: [] },
  { name: "비타500", cat: "drink", allergies: [] },
  { name: "포카리스웨트", cat: "drink", allergies: [] },
  { name: "게토레이", cat: "drink", allergies: [] },
  { name: "파워에이드", cat: "drink", allergies: [] },
  { name: "레드불", cat: "drink", allergies: [] },
  { name: "핫식스", cat: "drink", allergies: [] },
  { name: "몬스터 에너지", cat: "drink", allergies: [] },
  { name: "초코에몽", cat: "drink", allergies: ["우유"] },
  { name: "바나나맛우유", cat: "drink", allergies: ["우유"] },
  { name: "딸기우유", cat: "drink", allergies: ["우유"] },
  { name: "커피우유", cat: "drink", allergies: ["우유"] },
  { name: "TOP 커피", cat: "drink", allergies: ["우유"] },
  { name: "칸타타", cat: "drink", allergies: ["우유"] },
  { name: "조지아 커피", cat: "drink", allergies: ["우유"] },
  { name: "아침햇살", cat: "drink", allergies: ["우유"] },
  { name: "비락식혜", cat: "drink", allergies: [] },
  { name: "솔의눈", cat: "drink", allergies: [] },
  { name: "실론티", cat: "drink", allergies: [] },
  { name: "데자와", cat: "drink", allergies: ["우유"] },
  { name: "맥콜", cat: "drink", allergies: ["밀가루"] },
  { name: "봉봉", cat: "drink", allergies: [] },
  { name: "쌕쌕 오렌지", cat: "drink", allergies: [] },
  { name: "갈아만든배", cat: "drink", allergies: [] },
  { name: "코카콜라 제로", cat: "drink", allergies: [] },
  { name: "펩시 제로 슈거 (라임)", cat: "drink", allergies: [] },
  { name: "칠성사이다 제로", cat: "drink", allergies: [] },
  { name: "웰치스 제로 (포도)", cat: "drink", allergies: [] },
  { name: "나랑드사이다", cat: "drink", allergies: [] },
  { name: "롯데 제로 후르츠 젤리", cat: "candy", allergies: [] },
  { name: "롯데 제로 밀크 사탕", cat: "candy", allergies: ["우유"] },
  { name: "하스 무설탕 캔디", cat: "candy", allergies: [] },
  { name: "이클립스 민트", cat: "candy", allergies: [] },
  { name: "롯데 제로 초콜릿칩 쿠키", cat: "snack", allergies: ["밀가루", "우유", "계란"] },
  { name: "롯데 제로 카카오 케이크", cat: "snack", allergies: ["밀가루", "우유", "계란"] },
  { name: "무설탕 현미 뻥튀기", cat: "tradition", allergies: [] },
  { name: "구운 감태 부각 (무당)", cat: "tradition", allergies: [] },
  { name: "라라스윗 파인트 (초코)", cat: "icecream", allergies: ["우유", "계란"] },
  { name: "스크류바 제로", cat: "icecream", allergies: [] },
  { name: "죠스바 제로", cat: "icecream", allergies: [] }
];

// 1. YAML 파일의 sed 명령어가 찾을 수 있게 정확한 이름을 적어주세요.
const SUPABASE_URL = 'YOUR_SUPABASE_URL_PLACEHOLDER'; 
const SUPABASE_KEY = 'YOUR_SUPABASE_ANON_KEY_PLACEHOLDER';
const allergyTypes = ["우유", "견과류", "밀가루", "새우", "계란", "대두"];

// 2. 변수 이름을 _supabase로 해서 라이브러리와의 충돌을 피합니다.
// window.supabase는 HTML에서 로드된 라이브러리 객체입니다.
const _supabase = window.supabase 
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) 
    : null;

if (!_supabase) {
    console.error("Supabase 라이브러리 로드 실패! HTML의 스크립트 순서를 확인하세요.");
}

let currentCategory = "all";
let showFavOnly = false;
let currentUser = null;
let activeSnackName = null;

/* --- 2. 보안 함수 --- */
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}

/* --- 3. 인증 및 모달 제어 --- */
function openModal(type) {
  const modal = document.getElementById("auth-modal");
  document.getElementById("login-form").style.display = type === 'login' ? 'block' : 'none';
  document.getElementById("signup-form").style.display = type === 'signup' ? 'block' : 'none';
  document.getElementById("modal-title").innerText = type === 'login' ? '로그인' : '회원가입';
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("auth-modal").style.display = "none";
}

function closeSnackModal() {
  document.getElementById("snack-detail-modal").style.display = "none";
}

/* --- 4. UI 렌더링 --- */
function updateUI() {
  if (currentUser) {
    document.getElementById("auth-menu").style.display = "none";
    document.getElementById("user-menu").style.display = "flex";
    document.getElementById("header-user-name").innerText = `👤 ${currentUser.name}님`;
    document.getElementById("user-section").style.display = "block";
    
    let welcomeText = (currentUser.loginCount <= 1) ? "첫 이용 환영합니다!" : 
                     (currentUser.loginCount === 2) ? "또 오셨네요! 반갑습니다!" : 
                     `간식 뽑기 단골 ${currentUser.name}님 반가워요!`;

    document.getElementById("welcome-msg").innerText = `${currentUser.name}님, ${welcomeText}`;
    renderAllergyList();
  }
  renderSnacks();
}

function renderSnacks() {
  const listEl = document.getElementById("snack-list");
  if (!listEl) return;
  listEl.innerHTML = "";

  const filtered = snackNames.filter(item => {
    if (currentUser && currentUser.allergies.some(a => item.allergies.includes(a))) return false;
    if (showFavOnly) return currentUser && currentUser.favorites.includes(item.name);
    return currentCategory === "all" || item.cat === currentCategory;
  });

  filtered.forEach(item => {
    const isFav = currentUser && currentUser.favorites.includes(item.name);
    const li = document.createElement("li");
    li.className = "gh-snack-item";
    li.innerHTML = `
      <span class="snack-name-clickable" onclick="openSnackModal('${item.name}')" style="font-weight:700; cursor:pointer;">${item.name}</span>
      <button class="gh-fav-star ${isFav ? 'on' : ''}" onclick="addFavorite('${item.name}')">${isFav ? '⭐' : '☆'}</button>
    `;
    listEl.appendChild(li);
  });
}

/* --- 5. 간식 상세 및 평점 --- */

// 1. 모달 열기: 통계 계산 및 리뷰 목록 표시
async function openSnackModal(snackName) {
    activeSnackName = snackName;
    const modal = document.getElementById("snack-detail-modal");
    document.getElementById("detail-snack-name").innerText = snackName;

    // 통계 초기화
    let scoreCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    let totalScore = 0, count = 0;
    let reviewsHtml = "";

    // Supabase에서 모든 유저의 리뷰 데이터 가져오기
    const { data: users } = await _supabase.from('users').select('name, ratings');

    if (users) {
        users.forEach(user => {
            const userReview = user.ratings ? user.ratings[snackName] : null;
            if (userReview) {
                // userReview가 숫자(구버전)일수도, 객체(신버전 {score, comment})일수도 있음 처리
                const score = typeof userReview === 'object' ? userReview.score : userReview;
                const comment = userReview.comment || "";
                
                scoreCounts[score]++;
                totalScore += score;
                count++;
                
                reviewsHtml += `
                    <div class="user-review-item" style="border-bottom:1px solid #eee; padding:10px 0;">
                        <strong>${user.name}</strong> <span style="color:#ff8a3d;">${"★".repeat(score)}</span>
                        <p style="margin:5px 0; font-size:14px;">${comment}</p>
                    </div>`;
            }
        });
    }

    const avg = count > 0 ? (totalScore / count).toFixed(1) : "0.0";

    // 쿠팡 스타일 통계 HTML 주입
    document.getElementById("detail-user-scores").innerHTML = `
        <div class="review-stats-container">
            <div style="text-align:center; margin-bottom:15px;">
                <h2 style="font-size:32px; margin:0;">${avg}</h2>
                <div style="color:#ff8a3d;">${"★".repeat(Math.round(avg))}</div>
                <small>${count}명 참여</small>
            </div>
            ${[5, 4, 3, 2, 1].map(num => {
                const percent = count > 0 ? Math.round((scoreCounts[num] / count) * 100) : 0;
                const labels = ["", "나쁨", "별로", "보통", "좋음", "최고"];
                return `
                    <div class="stat-row">
                        <span class="stat-label">${labels[num]}</span>
                        <div class="stat-bar-bg"><div class="stat-bar-fill" style="width:${percent}%"></div></div>
                        <span class="stat-percent">${percent}%</span>
                    </div>`;
            }).join('')}
        </div>
        <div class="review-input-area">
            <textarea id="review-comment" class="review-textarea" placeholder="맛은 어땠나요? 후기를 남겨주세요!"></textarea>
        </div>
        <div class="review-list" style="margin-top:20px;">
            <label class="gh-label">전체 리뷰 (${count})</label>
            ${reviewsHtml || "<p>첫 리뷰를 작성해보세요!</p>"}
        </div>
    `;

    modal.style.display = "flex";
}

// 2. 리뷰 제출 (별점 + 텍스트)
async function submitRating() {
    if (!currentUser) return alert("로그인이 필요합니다.");
    
    const selectedStar = document.querySelector('input[name="rating"]:checked');
    const comment = document.getElementById("review-comment").value;

    if (!selectedStar) return alert("별점을 선택해주세요!");

    const score = parseInt(selectedStar.value);
    
    // 현재 유저의 기존 ratings 가져오기
    const { data } = await _supabase.from('users').select('ratings').eq('name', currentUser.name).single();
    let newRatings = data.ratings || {};
    
    // 객체 형태로 저장 (쿠팡 스타일을 위해)
    newRatings[activeSnackName] = { score, comment, date: new Date().toISOString() };

    const { error } = await _supabase
        .from('users')
        .update({ ratings: newRatings })
        .eq('name', currentUser.name);

    if (!error) {
        alert("리뷰가 등록되었습니다!");
        openSnackModal(activeSnackName); // 새로고침
    } else {
        alert("저장 실패: " + error.message);
    }
}

    // 2. 쿠팡 스타일 레이아웃 생성
    scoreListDiv.innerHTML = `
        <div class="review-stats-container">
            <div style="text-align:center; margin-bottom:15px;">
                <h2 style="font-size:32px; margin:0; color:#111;">${avg}</h2>
                <div style="color:#ff8a3d; font-size:20px;">${"★".repeat(Math.round(avg))}${"☆".repeat(5 - Math.round(avg))}</div>
                <small style="color:#888;">${count}건의 리뷰</small>
            </div>
            <div class="score-bars">
                ${[5, 4, 3, 2, 1].map(num => {
                    const percent = count > 0 ? Math.round((scoreCounts[num] / count) * 100) : 0;
                    const labels = ["", "나쁨", "별로", "보통", "좋음", "최고"];
                    return `
                        <div class="stat-row" style="display:flex; align-items:center; gap:10px; margin:5px 0;">
                            <span style="width:30px; font-size:12px; color:#666;">${labels[num]}</span>
                            <div style="flex-grow:1; height:8px; background:#eee; border-radius:4px; overflow:hidden;">
                                <div style="width:${percent}%; height:100%; background:#ff8a3d;"></div>
                            </div>
                            <span style="width:30px; font-size:12px; color:#888; text-align:right;">${percent}%</span>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>

        <div class="review-input-area" style="margin-top:20px; padding-top:15px; border-top:1px solid #eee;">
            <label class="gh-label">💬 후기 남기기</label>
            <textarea id="review-comment" class="gh-input" 
                style="width:100%; height:70px; margin-top:10px; padding:10px; border-radius:8px; border:1px solid #ddd; resize:none;" 
                placeholder="간식에 대한 솔직한 평을 남겨주세요!"></textarea>
        </div>

        <div class="individual-reviews" style="margin-top:25px;">
            <label class="gh-label">최근 리뷰 (${count})</label>
            <div style="margin-top:10px; max-height:200px; overflow-y:auto;">
                ${userReviewsHtml || "<p style='color:#999; text-align:center; padding:20px;'>아직 작성된 후기가 없습니다.</p>"}
            </div>
        </div>
    `;
    document.querySelectorAll('input[name="rating"]').forEach(input => input.checked = false);
    modal.style.display = "flex";

async function submitRating() {
  if (!currentUser) { alert("로그인이 필요합니다."); openModal('login'); return; }
  const selectedStar = document.querySelector('input[name="rating"]:checked');
  if (!selectedStar) return alert("별점을 선택해주세요!");

  if (!currentUser.ratings) currentUser.ratings = {};
  currentUser.ratings[activeSnackName] = parseInt(selectedStar.value);

  await saveUserData();
  alert("평점이 저장되었습니다.");
  openSnackModal(activeSnackName);
}

/* --- 6. 계정 기능 --- */
async function handleSignup() {
  const name = document.getElementById("signup-name").value.trim();
  const pw = document.getElementById("signup-pw").value.trim();
  if (!name || !pw) return alert("빈칸 없이 입력해주세요.");
  
  const { data: existing } = await _supabase.from('users').select('name').eq('name', name).single();
  if (existing) return alert("이미 등록된 이름입니다.");
  
  const hashedPw = await hashPassword(pw);
  currentUser = { name, pw: hashedPw, loginCount: 1, favorites: [], allergies: [], ratings: {} };
  await saveUserData();
  closeModal();
  updateUI();
}

async function handleLogin() {
  const name = document.getElementById("login-name").value.trim();
  const pw = document.getElementById("login-pw").value.trim();
  
  const { data: userData, error } = await _supabase.from('users').select('*').eq('name', name).single();
  if (!userData || error) return alert("사용자 정보가 없습니다.");
  
  const hashedPw = await hashPassword(pw);
  if (userData.pw !== hashedPw) return alert("비밀번호가 일치하지 않습니다.");
  
  userData.loginCount++;
  currentUser = userData;
  await saveUserData();
  closeModal();
  updateUI();
}

async function saveUserData() { 
  if (!currentUser) return;
  await _supabase.from('users').upsert(currentUser);
  localStorage.setItem("currentSnackSession", currentUser.name); 
}

function addFavorite(name) {
  if (!currentUser) { openModal('login'); return; }
  const idx = currentUser.favorites.indexOf(name);
  if (idx > -1) currentUser.favorites.splice(idx, 1);
  else currentUser.favorites.push(name);
  saveUserData();
  renderSnacks();
}

function logout() { localStorage.removeItem("currentSnackSession"); location.reload(); }

function setCategory(cat, e) { 
  currentCategory = cat; 
  document.querySelectorAll('.gh-tab-btn').forEach(t => t.classList.remove('active'));
  if(e && e.target) e.target.classList.add('active');
  renderSnacks(); 
}

function toggleFavorites() {
  if (!currentUser) { openModal('login'); return; }
  showFavOnly = !showFavOnly;
  const btn = document.getElementById("fav-toggle-btn");
  if (btn) btn.innerText = showFavOnly ? "🔙 전체 목록 보기" : "⭐ 즐겨찾기 목록만 보기";
  renderSnacks();
}

function toggleTheme() { 
  document.body.classList.toggle("dark"); 
  localStorage.setItem("snackTheme", document.body.classList.contains("dark") ? "dark" : "light"); 
}

function pickRandom() {
  const items = document.querySelectorAll(".gh-snack-item .snack-name-clickable");
  if (!items.length) return alert("조건에 맞는 간식이 없습니다.");
  const picked = items[Math.floor(Math.random() * items.length)].innerText;
  document.getElementById("result").innerHTML = `✨ 오늘의 추천 간식: <br><b style="color:#FF6B00; font-size:1.5rem;">[ ${picked} ]</b>`;
}

function renderAllergyList() {
  const container = document.getElementById("allergy-list");
  if (!container || !currentUser) return;
  container.innerHTML = "";
  allergyTypes.forEach(type => {
    const isChecked = currentUser.allergies.includes(type);
    const label = document.createElement("label");
    label.className = `gh-chip ${isChecked ? 'active' : ''}`;
    label.innerHTML = `<input type="checkbox" value="${type}" ${isChecked ? 'checked' : ''} onchange="updateAllergy(this)"> ${type}`;
    container.appendChild(label);
  });
}

function updateAllergy(el) {
  if (el.checked) currentUser.allergies.push(el.value);
  else currentUser.allergies = currentUser.allergies.filter(a => a !== el.value);
  saveUserData();
  renderSnacks();
  renderAllergyList();
}

/* --- 7. 초기 구동 --- */
window.onload = async () => {
  if (localStorage.getItem("snackTheme") === "dark") document.body.classList.add("dark");
  renderSnacks();

  const last = localStorage.getItem("currentSnackSession");
  if (last) {
    const { data } = await _supabase.from('users').select('*').eq('name', last).single();
    if (data) { currentUser = data; updateUI(); }
  }
}

window.onclick = function(event) {
  if (event.target == document.getElementById("auth-modal")) closeModal();
  if (event.target == document.getElementById("snack-detail-modal")) closeSnackModal();
}
