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
    // 1. 제로 음료 (drink)
  { name: "코카콜라 제로", cat: "drink", allergies: [] },
  { name: "펩시 제로 슈거 (라임)", cat: "drink", allergies: [] },
  { name: "칠성사이다 제로", cat: "drink", allergies: [] },
  { name: "웰치스 제로 (포도)", cat: "drink", allergies: [] },
  { name: "닥터페퍼 제로", cat: "drink", allergies: [] },
  { name: "보리차 (하늘보리)", cat: "drink", allergies: [] },
  { name: "옥수수수염차", cat: "drink", allergies: [] },
  { name: "나랑드사이다", cat: "drink", allergies: [] },

  // 2. 제로 젤리 & 사탕 (candy)
  { name: "롯데 제로 후르츠 젤리", cat: "candy", allergies: [] },
  { name: "롯데 제로 밀크 사탕", cat: "candy", allergies: ["우유"] },
  { name: "하스 무설탕 캔디", cat: "candy", allergies: [] },
  { name: "이클립스 민트", cat: "candy", allergies: [] },

  // 3. 제로 과자 & 기타 (snack / tradition)
  { name: "롯데 제로 초콜릿칩 쿠키", cat: "snack", allergies: ["밀가루", "우유", "계란"] },
  { name: "롯데 제로 카카오 케이크", cat: "snack", allergies: ["밀가루", "우유", "계란"] },
  { name: "무설탕 현미 뻥튀기", cat: "tradition", allergies: [] },
  { name: "구운 감태 부각 (무당)", cat: "tradition", allergies: [] },

  // 4. 제로 아이스크림 (icecream)
  { name: "라라스윗 파인트 (초코)", cat: "icecream", allergies: ["우유", "계란"] },
  { name: "스크류바 제로", cat: "icecream", allergies: [] },
  { name: "죠스바 제로", cat: "icecream", allergies: [] }
  ];

const allergyTypes = ["우유", "견과류", "밀가루", "새우", "계란", "대두"];

// 2. Supabase 설정 (변수명 _supabase 사용)
const SUPABASE_URL = 'https://tpbtjnqexwubctkurpqp.supabase.co';
const SUPABASE_KEY = 'sb_publishable_ShRhGoTEr207ESTQdghLBQ_ebkwaw1D'; 
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let currentUser = null;
let currentCategory = "all";
let showFavOnly = false;

// --- 모달 제어 ---
function openModal(type) {
  document.getElementById('auth-modal').style.display = 'flex';
  const isLogin = type === 'login';
  document.getElementById('modal-title').innerText = isLogin ? '로그인' : '회원가입';
  document.getElementById('login-form').style.display = isLogin ? 'block' : 'none';
  document.getElementById('signup-form').style.display = isLogin ? 'none' : 'block';
}
function closeModal() { document.getElementById('auth-modal').style.display = 'none'; }

// --- 회원가입 ---
async function handleSignup() {
  const name = document.getElementById("signup-name").value.trim();
  const pw = document.getElementById("signup-pw").value.trim();
  if (!name || !pw) return alert("빈칸 없이 입력해주세요.");

  const { data, error } = await _supabase.auth.signUp({
    email: name.includes('@') ? name : `${name}@test.com`,
    password: pw,
  });

  if (error) return alert("가입 실패: " + error.message);

  if (data.user) {
    await _supabase.from('profiles').insert([{ id: data.user.id, name: name, favorites: [], allergies: [] }]);
    alert("가입 성공! 로그인을 진행해주세요.");
    openModal('login');
  }
}

// --- 로그인 ---
async function handleLogin() {
  const name = document.getElementById("login-name").value.trim();
  const pw = document.getElementById("login-pw").value.trim();

  const { data, error } = await _supabase.auth.signInWithPassword({
    email: name.includes('@') ? name : `${name}@test.com`,
    password: pw,
  });

  if (error) return alert("로그인 실패: 정보를 확인하세요.");
  const { data: profile } = await _supabase.from('profiles').select('*').eq('id', data.user.id).single();
  currentUser = profile;
  closeModal();
  updateUI();
}

// --- 데이터 동기화 ---
async function syncData() {
  if (!currentUser) return;
  await _supabase.from('profiles').update({ allergies: currentUser.allergies, favorites: currentUser.favorites }).eq('id', currentUser.id);
}

// --- UI 업데이트 ---
function updateUI() {
  if (currentUser) {
    document.getElementById("auth-menu").style.display = "none";
    document.getElementById("user-menu").style.display = "flex";
    document.getElementById("header-user-name").innerText = `👤 ${currentUser.name}님`;
    document.getElementById("user-section").style.display = "block";
    
    const count = currentUser.favorites ? currentUser.favorites.length : 0;
    document.getElementById("welcome-msg").innerText = `${currentUser.name}님, 오늘도 맛있는 간식을 골라보세요!`;
    const snackStatus = document.getElementById("snack-status");
    if (snackStatus) snackStatus.innerText = `(${count}개 간식 구비 중)`;
    renderAllergyList();
  }
  renderSnacks();
}

// --- 알러지 칩 렌더링 ---
function renderAllergyList() {
  const container = document.getElementById("allergy-list");
  if (!container) return;
  container.innerHTML = "";
  allergyTypes.forEach(type => {
    const isChecked = currentUser.allergies.includes(type);
    const label = document.createElement("label");
    label.className = `gh-chip ${isChecked ? 'active' : ''}`;
    label.innerHTML = `<input type="checkbox" value="${type}" ${isChecked ? 'checked' : ''} onchange="updateAllergy(this)"> ${type}`;
    container.appendChild(label);
  });
}

async function updateAllergy(el) {
  if (el.checked) currentUser.allergies.push(el.value);
  else currentUser.allergies = currentUser.allergies.filter(a => a !== el.value);
  await syncData();
  renderSnacks();
  renderAllergyList();
}

// --- 간식 리스트 렌더링 (필터링 로직 강화) ---
function renderSnacks() {
  const listEl = document.getElementById("snack-list");
  if (!listEl) return;
  listEl.innerHTML = "";
  
  const filtered = snackNames.filter(item => {
    // 1. 알러지 필터: 내 알러지가 포함된 간식 제외
    if (currentUser && currentUser.allergies.some(a => item.allergies.includes(a))) return false;
    // 2. 즐겨찾기 필터: ⭐ 별표 누른 것만 보기 모드일 때
    if (showFavOnly) return currentUser && currentUser.favorites.includes(item.name);
    // 3. 카테고리 필터: 탭에서 선택한 카테고리만 보기
    return currentCategory === "all" || item.cat === currentCategory;
  });

  if (filtered.length === 0) {
    listEl.innerHTML = `<li style="padding:20px; color:#999; text-align:center;">조건에 맞는 간식이 없습니다.</li>`;
  }

  filtered.forEach(item => {
    const isFav = currentUser && currentUser.favorites.includes(item.name);
    const li = document.createElement("li");
    li.className = "gh-snack-item";
    li.innerHTML = `
      <span style="font-weight:700;">${item.name}</span>
      <button class="gh-fav-star ${isFav ? 'on' : ''}" onclick="addFavorite('${item.name}')">${isFav ? '⭐' : '☆'}</button>
    `;
    listEl.appendChild(li);
  });
}

// --- 즐겨찾기 기능 ---
async function addFavorite(name) {
  if (!currentUser) {
    if (confirm("로그인이 필요합니다. 이동할까요?")) openModal('login');
    return;
  }
  const idx = currentUser.favorites.indexOf(name);
  if (idx > -1) currentUser.favorites.splice(idx, 1);
  else currentUser.favorites.push(name);
  await syncData();
  updateUI();
}

// --- 로그아웃 ---
async function logout() {
  await _supabase.auth.signOut();
  currentUser = null;
  location.reload();
}

// --- 카테고리 설정 ---
function setCategory(cat) { 
  currentCategory = cat; 
  document.querySelectorAll('.gh-tab-btn').forEach(t => t.classList.remove('active'));
  if (event) event.target.classList.add('active');
  renderSnacks(); 
}

// --- 즐겨찾기 토글 ---
function toggleFavorites() {
  if (!currentUser && !showFavOnly) {
    if (confirm("로그인이 필요합니다. 이동할까요?")) openModal('login');
    return;
  }
  showFavOnly = !showFavOnly;
  document.getElementById("fav-toggle-btn").innerText = showFavOnly ? "🔙 전체 목록 보기" : "⭐ 즐겨찾기 목록만 보기";
  renderSnacks();
}

// --- 랜덤 뽑기 (에러 방지 강화) ---
function pickRandom() {
  const listEl = document.getElementById("snack-list");
  const items = listEl.querySelectorAll(".gh-snack-item span");
  
  if (items.length === 0) {
    return alert("현재 화면에 표시된 간식이 없습니다. 카테고리나 알러지 설정을 확인하세요.");
  }
  
  const picked = items[Math.floor(Math.random() * items.length)].innerText;
  document.getElementById("result").innerHTML = `🎯 추천 결과: <b style="color:var(--gh-primary)">${picked}</b>`;
}

// --- 초기 로드 ---
window.onload = async () => {
  const { data: { session } } = await _supabase.auth.getSession();
  if (session) {
    const { data: profile } = await _supabase.from('profiles').select('*').eq('id', session.user.id).single();
    currentUser = profile;
    updateUI();
  } else {
    renderSnacks();
  }
};
