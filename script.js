/* --- [0. 데이터 선언: 가장 먼저 선언해야 에러가 발생하지 않습니다] --- */
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

/* --- [1. 전역 변수 및 초기화] --- */
let currentCategory = "all";
let showFavOnly = false;
let currentUser = null;
let activeSnackName = null;
const allergyTypes = ["우유", "견과류", "밀가루", "새우", "계란", "대두"];

// Supabase 설정
const SUPABASE_URL = 'SET_URL'; 
const SUPABASE_KEY = 'SET_KEY';

const _supabase = (window.supabase) 
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) 
    : null;

/* --- [2. 보안 및 유틸리티] --- */
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function openModal(type) {
    const modal = document.getElementById("auth-modal");
    document.getElementById("login-form").style.display = type === 'login' ? 'block' : 'none';
    document.getElementById("signup-form").style.display = type === 'signup' ? 'block' : 'none';
    document.getElementById("modal-title").innerText = type === 'login' ? '로그인' : '회원가입';
    modal.style.display = "flex";
}

function closeModal() { document.getElementById("auth-modal").style.display = "none"; }
function closeSnackModal() { document.getElementById("snack-detail-modal").style.display = "none"; }

/* --- [3. UI 업데이트 및 렌더링] --- */
/* --- [4. 회원 시스템] --- */
async function updateUI() {
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
        // 알러지 필터링 (currentUser가 있을 때만 작동)
        if (currentUser && currentUser.allergies.some(a => item.allergies.includes(a))) return false;
        // 즐겨찾기 필터링
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

async function handleSignup() {
    const name = document.getElementById("signup-name").value.trim();
    const pw = document.getElementById("signup-pw").value.trim();
    if (!name || !pw) return alert("빈칸 없이 입력해주세요.");
    
    // Supabase 중복 체크
    const { data: existing } = await _supabase.from('users').select('name').eq('name', name).maybeSingle();
    if (existing) return alert("이미 등록된 이름입니다.");
    
    const hashedPw = await hashPassword(pw);
    
    // 유저 객체 생성
    currentUser = { 
        name, 
        pw: hashedPw, 
        loginCount: 1, 
        favorites: [], 
        allergies: [], 
        ratings: {} 
    };

    // Supabase에 직접 저장
    const { error } = await _supabase.from('users').insert([currentUser]);
    
    if (error) {
        alert("가입 실패: " + error.message);
    } else {
        closeModal();
        updateUI();
    }
}

async function handleLogin() {
    const name = document.getElementById("login-name").value.trim();
    const pw = document.getElementById("login-pw").value.trim();
    
    // Supabase에서 유저 정보 조회
    const { data: userData, error } = await _supabase.from('users').select('*').eq('name', name).maybeSingle();
    
    if (!userData || error) return alert("사용자 정보가 없습니다.");
    
    const hashedPw = await hashPassword(pw);
    if (userData.pw !== hashedPw) return alert("비밀번호가 일치하지 않습니다.");
    
    // 로그인 카운트 증가 및 데이터 업데이트
    userData.loginCount++;
    currentUser = userData;
    
    await saveUserData(); // DB 동기화
    closeModal();
    updateUI();
}

async function saveUserData() { 
    if (!currentUser || !_supabase) return;
    
    // name을 기준으로 기존 데이터 덮어쓰기 (upsert)
    const { error } = await _supabase
        .from('users')
        .upsert(currentUser, { onConflict: 'name' });
        
    if (error) {
        console.error("데이터 저장 에러:", error.message);
    } else {
        localStorage.setItem("currentSnackSession", currentUser.name); 
    }
}

function logout() { 
    localStorage.removeItem("currentSnackSession"); 
    location.reload(); 
}

/* --- [5. 기능 함수] --- */
function addFavorite(name) {
    if (!currentUser) {
        if (confirm("이 기능은 로그인 후 이용하실 수 있습니다.\n로그인하시겠습니까?")) {
            openModal('login');
        }
        return;
    }
    const idx = currentUser.favorites.indexOf(name);
    if (idx > -1) currentUser.favorites.splice(idx, 1);
    else currentUser.favorites.push(name);
    
    saveUserData(); // DB에 즉시 반영
    renderSnacks();
}

function updateAllergy(el) {
    if (!currentUser) return;
    if (el.checked) {
        if (!currentUser.allergies.includes(el.value)) {
            currentUser.allergies.push(el.value);
        }
    } else {
        currentUser.allergies = currentUser.allergies.filter(a => a !== el.value);
    }
    
    saveUserData(); // DB에 즉시 반영
    renderSnacks();
    renderAllergyList();
}

function renderAllergyList() {
    const container = document.getElementById("allergy-list");
    if (!container || !currentUser) return;
    container.innerHTML = "";
    
    // global 변수인 allergyTypes 사용 가정
    allergyTypes.forEach(type => {
        const isChecked = currentUser.allergies.includes(type);
        const label = document.createElement("label");
        label.className = `gh-chip ${isChecked ? 'active' : ''}`;
        label.innerHTML = `<input type="checkbox" value="${type}" ${isChecked ? 'checked' : ''} onchange="updateAllergy(this)"> ${type}`;
        container.appendChild(label);
    });
}

/* --- [5. 기능 함수 (리뷰/별점 포함)] --- */

// 별점과 AI 요약을 포함한 상세 모달 열기
async function openSnackModal(snackName) {
    activeSnackName = snackName;
    const modal = document.getElementById("snack-detail-modal");
    const container = document.getElementById("detail-user-scores");
    if (!modal || !container) return;

    document.getElementById("detail-snack-name").innerText = `🍪 ${snackName}`;

    // 1. Supabase에서 모든 유저의 리뷰 데이터 가져오기
    const { data: allUsers, error } = _supabase 
        ? await _supabase.from('users').select('name, ratings') 
        : { data: [], error: null };
    
    if (error) console.error("리뷰 로드 실패:", error.message);

    let scores = [];
    let comments = [];

    if (allUsers) {
        allUsers.forEach(u => {
            // ratings 컬럼(jsonb) 내에서 해당 스낵 이름으로 저장된 데이터 추출
            const r = u.ratings?.[snackName];
            if (r) {
                scores.push(typeof r === 'object' ? r.score : r);
                if (r.comment) comments.push(r.comment);
            }
        });
    }

    const avg = scores.length > 0 
        ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1) 
        : "0.0";

    // 2. AI 요약 생성 로직
    let aiSummary = "아직 리뷰가 부족하여 AI가 분석 중입니다.";
    if (comments.length >= 2) {
        aiSummary = `이 간식은 대체로 <b>"${comments[0]}"</b>라는 의견과 <b>"${comments[1]}"</b>라는 평가가 많습니다. 평균 별점 ${avg}점으로 인기가 좋습니다!`;
    } else if (comments.length === 1) {
        aiSummary = `최근 한 사용자가 <b>"${comments[0]}"</b>라고 평가했습니다.`;
    }

    // 3. UI 렌더링
    container.innerHTML = `
        <div class="ai-summary-box">
            <span class="ai-badge">AI 분석</span>
            <p id="ai-text" style="margin: 10px 0 0 0; font-size: 14px; line-height: 1.5;">${aiSummary}</p>
        </div>

        <div style="text-align:center; margin: 20px 0;">
            <div style="font-size: 24px; color: #ff8a3d;">${avg} ⭐</div>
            <small>${scores.length}명의 평가</small>
        </div>

        <div class="rating-input-section" style="background:var(--bg-card); padding:15px; border-radius:10px;">
            <p style="margin:0 0 10px 0; font-weight:bold; text-align:center;">나의 별점 남기기</p>
            <div class="star-rating">
                <input type="radio" id="5-stars" name="rating" value="5" /><label for="5-stars">★</label>
                <input type="radio" id="4-stars" name="rating" value="4" /><label for="4-stars">★</label>
                <input type="radio" id="3-stars" name="rating" value="3" /><label for="3-stars">★</label>
                <input type="radio" id="2-stars" name="rating" value="2" /><label for="2-stars">★</label>
                <input type="radio" id="1-star" name="rating" value="1" /><label for="1-star">★</label>
            </div>
            <textarea id="review-comment" class="gh-input" placeholder="AI에게 들려줄 맛 평가를 써주세요." style="width:100%; margin-top:10px;"></textarea>
            <button onclick="submitRating()" class="gh-btn" style="width:100%; margin-top:10px; background:#ff6b00;">평가 등록</button>
        </div>
    `;
    modal.style.display = "flex";
}

async function submitRating() {
    if (!currentUser) { 
        alert("로그인이 필요합니다."); 
        openModal('login'); 
        return; 
    }
    const selectedStar = document.querySelector('input[name="rating"]:checked');
    const comment = document.getElementById("review-comment").value.trim();
    
    if (!selectedStar) return alert("별점을 선택해주세요!");

    // currentUser 객체 구조 유지하며 업데이트
    if (!currentUser.ratings) currentUser.ratings = {};
    
    currentUser.ratings[activeSnackName] = { 
        score: parseInt(selectedStar.value), 
        comment: comment, 
        date: new Date().toISOString() 
    };

    // DB에 저장 (이전에 만든 saveUserData 활용)
    await saveUserData();
    
    alert("리뷰가 등록되었습니다!");
    openSnackModal(activeSnackName); // 모달 내용 갱신
}

function toggleTheme() { 
    document.body.classList.toggle("dark"); 
    localStorage.setItem("snackTheme", document.body.classList.contains("dark") ? "dark" : "light"); 
}

/* --- [6. 초기 실행 및 이벤트] --- */
window.onload = async () => {
    // 1. 테마 로드
    if (localStorage.getItem("snackTheme") === "dark") document.body.classList.add("dark");
    
    // 2. 초기 간식 목록 렌더링
    renderSnacks();

    // 3. Supabase 세션 자동 복구 (자동 로그인)
    const lastSession = localStorage.getItem("currentSnackSession");
    if (lastSession && _supabase) {
        const { data, error } = await _supabase
            .from('users')
            .select('*')
            .eq('name', lastSession)
            .maybeSingle();
            
        if (data && !error) { 
            currentUser = data; 
            updateUI(); 
        } else {
            // 정보가 없거나 에러 시 세션 삭제
            localStorage.removeItem("currentSnackSession");
        }
    }
}

// 모달 바깥 클릭 시 닫기
window.onclick = function(event) {
    const authModal = document.getElementById("auth-modal");
    const detailModal = document.getElementById("snack-detail-modal");
    
    if (event.target == authModal) closeModal();
    if (event.target == detailModal) closeSnackModal();
}
