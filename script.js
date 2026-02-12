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

const allergyTypes = ["메밀", "밀", "대두", "호두", "땅콩", "복숭아", "토마토", "난류(계란)", "우유", "새우", "게", "조개류", "굴", "전복", "홍합", "오징어", "고등어", "돼지고기", "쇠고기", "닭고기", "잣", "아황산류"];

/* --- [2. Supabase 설정] --- */
const SUPABASE_URL = 'https://tpbtjnqexwubctkurpqp.supabase.co'; 
const SUPABASE_KEY = 'sb_publishable_ShRhGoTEr207ESTQdghLBQ_ebkwaw1'; 
const _supabase = (window.supabase) ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

/* --- [3. 상태 관리] --- */
let currentUser = null;
let currentCategory = "all";
let showFavOnly = false;
let activeSnackName = null;
let selectedSignupAllergies = [];

/* --- [4. 인증 로직] --- */
async function hashPassword(pw) {
    const encoder = new TextEncoder();
    const data = encoder.encode(pw);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function openModal(type) {
    document.getElementById("auth-modal").style.display = "flex";
    document.getElementById("login-form").style.display = type === 'login' ? 'block' : 'none';
    document.getElementById("signup-form").style.display = type === 'signup' ? 'block' : 'none';
    document.getElementById("modal-title").innerText = type === 'login' ? '로그인' : '회원가입';
    if (type === 'signup') renderSignupAllergies();
}

function closeModal() { document.getElementById("auth-modal").style.display = "none"; }

function renderSignupAllergies() {
    const container = document.getElementById("signup-allergy-list");
    container.innerHTML = allergyTypes.map(a => `
        <div class="gh-chip ${selectedSignupAllergies.includes(a) ? 'active' : ''}" onclick="toggleSignupAllergy('${a}')">
            ${selectedSignupAllergies.includes(a) ? '🚫 ' : ''}${a}
        </div>
    `).join('');
}

function toggleSignupAllergy(a) {
    selectedSignupAllergies.includes(a) ? selectedSignupAllergies = selectedSignupAllergies.filter(v => v !== a) : selectedSignupAllergies.push(a);
    renderSignupAllergies();
}

async function handleSignup() {
    const name = document.getElementById("signup-name").value.trim();
    const pw = document.getElementById("signup-pw").value.trim();
    if (!name || !pw) return alert("입력 정보를 확인하세요.");
    const hashed = await hashPassword(pw);
    const { error } = await _supabase.from('users').insert([{ name, pw: hashed, allergies: selectedSignupAllergies, favorites: [], ratings: {} }]);
    if (error) return alert("가입 실패");
    alert("가입 성공!"); openModal('login');
}

async function handleLogin() {
    const name = document.getElementById("login-name").value.trim();
    const pw = document.getElementById("login-pw").value.trim();
    const { data: user } = await _supabase.from('users').select('*').eq('name', name).maybeSingle();
    if (!user || user.pw !== await hashPassword(pw)) return alert("정보가 일치하지 않습니다.");
    currentUser = user; localStorage.setItem("snackUser", name);
    closeModal(); updateUI();
}

/* --- [5. 기능 로직] --- */
function updateUI() {
    if (currentUser) {
        document.getElementById("auth-menu").style.display = "none";
        document.getElementById("user-menu").style.display = "flex";
        document.getElementById("header-user-name").innerText = `👤 ${currentUser.name}님`;
        document.getElementById("user-section").style.display = "block";
        document.getElementById("welcome-msg").innerText = `${currentUser.name}님, 오늘 뭐 먹을까요?`;
        document.getElementById("allergy-list").innerHTML = currentUser.allergies.map(a => `<span class="gh-chip active">🚫 ${a}</span>`).join('');
    }
    renderSnacks();
}

function renderSnacks() {
    const list = document.getElementById("snack-list");
    list.innerHTML = "";
    const filtered = snackNames.filter(s => {
        if (currentUser && currentUser.allergies.some(a => s.allergies.includes(a))) return false;
        if (showFavOnly && currentUser && !currentUser.favorites.includes(s.name)) return false;
        return currentCategory === "all" || s.cat === currentCategory;
    });
    filtered.forEach(s => {
        const li = document.createElement("li");
        li.className = "gh-snack-item";
        li.innerHTML = `<span onclick="openSnackModal('${s.name}')" style="cursor:pointer; font-weight:800;">${s.name}</span><button onclick="addFavorite('${s.name}')">${currentUser?.favorites.includes(s.name) ? '⭐' : '☆'}</button>`;
        list.appendChild(li);
    });
}

function pickRandom() {
    const items = Array.from(document.querySelectorAll(".gh-snack-item span")).map(el => el.innerText);
    if (!items.length) return alert("간식이 없습니다.");
    document.getElementById("result").innerHTML = `🍪 추천: <span style="color:var(--gh-primary)">[ ${items[Math.floor(Math.random() * items.length)]} ]</span>`;
}

async function addFavorite(name) {
    if (!currentUser) return alert("로그인 필요");
    const idx = currentUser.favorites.indexOf(name);
    idx > -1 ? currentUser.favorites.splice(idx, 1) : currentUser.favorites.push(name);
    await _supabase.from('users').update({ favorites: currentUser.favorites }).eq('name', currentUser.name);
    renderSnacks();
}

function setCategory(cat, e) {
    currentCategory = cat;
    document.querySelectorAll(".gh-tab-btn").forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");
    renderSnacks();
}

function openSnackModal(name) {
    activeSnackName = name;
    document.getElementById("detail-snack-name").innerText = name;
    document.getElementById("snack-detail-modal").style.display = "flex";
}

function closeSnackModal() { document.getElementById("snack-detail-modal").style.display = "none"; }
function logout() { localStorage.removeItem("snackUser"); location.reload(); }

window.onload = async () => {
    const saved = localStorage.getItem("snackUser");
    if (saved && _supabase) {
        const { data } = await _supabase.from('users').select('*').eq('name', saved).maybeSingle();
        if (data) { currentUser = data; updateUI(); }
    } else { renderSnacks(); }
};
