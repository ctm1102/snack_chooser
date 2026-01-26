/* ======================
   1. 데이터 설정 (카테고리 분류 완료)
====================== */
const snackNames = [
  // --- 과자/스낵 (snack) ---
  { name: "포카칩오리지널", cat: "snack" }, { name: "포카칩어니언", cat: "snack" }, { name: "스윙칩볶음고추장", cat: "snack" },
  { name: "스윙칩양파치즈", cat: "snack" }, { name: "꼬북칩콘스프", cat: "snack" }, { name: "꼬북칩초코츄러스", cat: "snack" },
  { name: "꼬북칩인절미", cat: "snack" }, { name: "새우깡", cat: "snack" }, { name: "매운새우깡", cat: "snack" },
  { name: "쌀새우깡", cat: "snack" }, { name: "먹태깡", cat: "snack" }, { name: "노가리깡", cat: "snack" },
  { name: "오잉해물맛", cat: "snack" }, { name: "꽃게랑오리지널", cat: "snack" }, { name: "꽃게랑와사비", cat: "snack" },
  { name: "치토스매콤한맛", cat: "snack" }, { name: "치토스바베큐맛", cat: "snack" }, { name: "도리토스나쵸치즈", cat: "snack" },
  { name: "도리토스허니칠리", cat: "snack" }, { name: "꼬깔콘고소한맛", cat: "snack" }, { name: "꼬깔콘군옥수수맛", cat: "snack" },
  { name: "꼬깔콘매콤달콤", cat: "snack" }, { name: "양파링", cat: "snack" }, { name: "구운양파", cat: "snack" },
  { name: "구운대파", cat: "snack" }, { name: "구운고구마", cat: "snack" }, { name: "오사쯔", cat: "snack" },
  { name: "별따먹자", cat: "snack" }, { name: "고래밥볶음양념", cat: "snack" }, { name: "상어밥매콤한맛", cat: "snack" },
  { name: "허니버터칩", cat: "snack" }, { name: "콰삭칩", cat: "snack" }, { name: "무뚝뚝감자칩", cat: "snack" },
  { name: "눈을감자", cat: "snack" }, { name: "자가비짭짤한맛", cat: "snack" }, { name: "자가비허니버터", cat: "snack" },
  { name: "감자깡", cat: "snack" }, { name: "고구마깡", cat: "snack" }, { name: "양파깡", cat: "snack" },
  { name: "옥수수깡", cat: "snack" }, { name: "바나나킥", cat: "snack" }, { name: "초코바나나킥", cat: "snack" },
  { name: "콘칩", cat: "snack" }, { name: "콘초", cat: "snack" }, { name: "콘치즈", cat: "snack" },
  { name: "조리퐁", cat: "snack" }, { name: "인디안밥", cat: "snack" }, { name: "사또밥", cat: "snack" },
  { name: "자갈치", cat: "snack" }, { name: "오징어집", cat: "snack" }, { name: "벌집피자", cat: "snack" },
  { name: "뿌셔뿌셔불고기", cat: "snack" }, { name: "프링글스오리지널", cat: "snack" },

  // --- 아이스크림 (icecream) ---
  { name: "월드콘바닐라", cat: "icecream" }, { name: "부라보콘바닐라", cat: "icecream" }, { name: "구구콘", cat: "icecream" },
  { name: "슈팅스타콘", cat: "icecream" }, { name: "메로나", cat: "icecream" }, { name: "메로나망고", cat: "icecream" },
  { name: "비비빅", cat: "icecream" }, { name: "바밤바", cat: "icecream" }, { name: "누가바", cat: "icecream" },
  { name: "돼지바", cat: "icecream" }, { name: "수박바", cat: "icecream" }, { name: "죠스바", cat: "icecream" },
  { name: "스크류바", cat: "icecream" }, { name: "옥동자밀크", cat: "icecream" }, { name: "와일드바디", cat: "icecream" },
  { name: "엔초", cat: "icecream" }, { name: "캔디바", cat: "icecream" }, { name: "쌍쌍바", cat: "icecream" },
  { name: "호두마루", cat: "icecream" }, { name: "붕어싸만코", cat: "icecream" }, { name: "빵또아", cat: "icecream" },
  { name: "투게더바닐라", cat: "icecream" }, { name: "엑설런트", cat: "icecream" }, { name: "티코", cat: "icecream" },
  { name: "구구크러스터", cat: "icecream" }, { name: "하겐다즈초코", cat: "icecream" }, { name: "빠삐코초코", cat: "icecream" },
  { name: "탱크보이", cat: "icecream" }, { name: "폴라포포도", cat: "icecream" }, { name: "설레임밀크", cat: "icecream" },
  { name: "더위사냥", cat: "icecream" }, { name: "찰떡아이스", cat: "icecream" },

  // --- 전통간식 (tradition) ---
  { name: "연양갱", cat: "tradition" }, { name: "밤양갱", cat: "tradition" }, { name: "미니약과", cat: "tradition" },
  { name: "찹쌀약과", cat: "tradition" }, { name: "유과", cat: "tradition" }, { name: "쌀강정", cat: "tradition" },
  { name: "인절미", cat: "tradition" }, { name: "바람떡", cat: "tradition" }, { name: "꿀떡", cat: "tradition" },
  { name: "찹쌀떡", cat: "tradition" }, { name: "송편", cat: "tradition" }, { name: "백설기", cat: "tradition" },
  { name: "술떡", cat: "tradition" }, { name: "가래떡", cat: "tradition" }, { name: "경단", cat: "tradition" },
  { name: "곶감", cat: "tradition" }, { name: "식혜", cat: "tradition" }, { name: "수정과", cat: "tradition" },

  // --- 사탕/젤리 (candy) ---
  { name: "청포도사탕", cat: "candy" }, { name: "알사탕", cat: "candy" }, { name: "누룽지사탕", cat: "candy" },
  { name: "박하사탕", cat: "candy" }, { name: "말랑카우밀크", cat: "candy" }, { name: "마이쭈포도", cat: "candy" },
  { name: "마이쭈딸기", cat: "candy" }, { name: "새콤달콤딸기", cat: "candy" }, { name: "새콤달콤포도", cat: "candy" },
  { name: "하리보골드베렌", cat: "candy" }, { name: "왕꿈틀이", cat: "candy" }, { name: "마이구미포도", cat: "candy" },
  { name: "요구르트젤리", cat: "candy" }, { name: "멘토스민트", cat: "candy" }, { name: "졸음번쩍껌", cat: "candy" },

  // --- 초콜릿 (chocolate) ---
  { name: "가나밀크", cat: "chocolate" }, { name: "가나다크", cat: "chocolate" }, { name: "ABC초콜릿", cat: "chocolate" },
  { name: "자유시간", cat: "chocolate" }, { name: "핫브레이크", cat: "chocolate" }, { name: "스니커즈", cat: "chocolate" },
  { name: "트윅스", cat: "chocolate" }, { name: "페레로로쉐", cat: "chocolate" }, { name: "킨더조이", cat: "chocolate" },
  { name: "허쉬밀크", cat: "chocolate" }, { name: "크런키", cat: "chocolate" }, { name: "몰티져스", cat: "chocolate" },

  // --- 음료 (drink) ---
  { name: "콜라", cat: "drink" }, { name: "사이다", cat: "drink" }, { name: "환타오렌지", cat: "drink" },
  { name: "밀키스", cat: "drink" }, { name: "닥터페퍼", cat: "drink" }, { name: "딸기우유", cat: "drink" },
  { name: "바나나우유", cat: "drink" }, { name: "초코우유", cat: "drink" }, { name: "커피우유", drink: "drink" },
  { name: "아메리카노캔", cat: "drink" }, { name: "레쓰비", cat: "drink" }, { name: "실론티", cat: "drink" },
  { name: "포카리스웨트", cat: "drink" }, { name: "파워에이드", cat: "drink" }, { name: "비락식혜", cat: "drink" },
  { name: "비타500", cat: "drink" }, { name: "박카스", cat: "drink" }, { name: "삼다수", cat: "drink" },
  { name: "하늘보리", cat: "drink" }, { name: "옥수수수염차", cat: "drink" }
];

let currentCategory = "all";
let showFavOnly = false;

/* ======================
   2. 테마 및 로그인
====================== */
function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
}

function login() {
  const name = document.getElementById("username").value.trim();
  const pw = prompt("본인 확인을 위한 숫자 4자리를 입력하세요 (예: 1234)"); // 간단한 추가
  
  if (!name || !pw) return alert("이름과 암호를 모두 입력하세요!");
  
  const userKey = name + "_" + pw; // "홍길동_1234" 형태로 저장
  localStorage.setItem("user", userKey);
  showUser();
}

function logout() {
  localStorage.removeItem("user");
  location.reload();
}

function showUser() {
  const user = localStorage.getItem("user");
  if (user) {
    document.getElementById("login-area").style.display = "none";
    document.getElementById("user-area").style.display = "block";
    document.getElementById("user-name").innerText = user;
    renderSnacks();
  }
}

/* ======================
   3. 즐겨찾기 로직
====================== */
function getFavorites() {
  const user = localStorage.getItem("user");
  return JSON.parse(localStorage.getItem("fav_" + user)) || [];
}

function addFavorite(name) {
  const user = localStorage.getItem("user");
  if (!user) return alert("로그인 후 이용 가능합니다!");

  let favs = getFavorites();
  if (favs.includes(name)) {
    favs = favs.filter(f => f !== name);
  } else {
    favs.push(name);
  }
  localStorage.setItem("fav_" + user, JSON.stringify(favs));
  renderSnacks();
}

/* ======================
   4. 필터 및 렌더링 (핵심 수정 부분)
====================== */
function setCategory(cat) {
  currentCategory = cat;
  showFavOnly = false;
  renderSnacks();
}

function toggleFavorites() {
  showFavOnly = !showFavOnly;
  document.getElementById("fav-toggle-btn").innerText = showFavOnly ? "🔙 전체 목록 보기" : "⭐ 즐겨찾기 목록만 보기";
  renderSnacks();
}

function renderSnacks() {
  const listEl = document.getElementById("snack-list");
  if (!listEl) return;
  listEl.innerHTML = "";

  const favs = getFavorites();

  const filtered = snackNames.filter(item => {
    if (showFavOnly) return favs.includes(item.name);
    if (currentCategory === "all") return true;
    return item.cat === currentCategory;
  });

  filtered.forEach(item => {
    const isFav = favs.includes(item.name);
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.name}</span>
      <button class="fav-btn" onclick="addFavorite('${item.name}')">${isFav ? '⭐' : '☆'}</button>
    `;
    listEl.appendChild(li);
  });
}

function pickRandom() {
  const favs = getFavorites();
  let data = snackNames.filter(item => {
    if (showFavOnly) return favs.includes(item.name);
    if (currentCategory === "all") return true;
    return item.cat === currentCategory;
  });

  if (data.length === 0) return alert("목록이 비어있습니다!");

  const pick = data[Math.floor(Math.random() * data.length)];
  document.getElementById("result").innerText = `🎯 오늘의 선택: ${pick.name}!`;
}

// 초기 실행
window.onload = () => {
  if (localStorage.getItem("theme") === "dark") document.body.classList.add("dark");
  showUser();
  renderSnacks();
};
