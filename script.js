/* ======================
   테마
====================== */
function toggleTheme() {
  document.body.classList.toggle("dark");
  const mode = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", mode);
}

(function loadTheme() {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
})();

/* ======================
   로그인
====================== */
function login() {
  const name = document.getElementById("username").value;
  if (!name) return alert("이름을 입력하세요!");
  localStorage.setItem("user", name);
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
  }
}
showUser();

/* ======================
   데이터
====================== */
const snacks = [
  { "name": "포테토칩", "category": "snack" },
  { "name": "포카칩", "category": "snack" },
  { "name": "감자칩", "category": "snack" },
  { "name": "감자깡", "category": "snack" },
  { "name": "홈런볼", "category": "snack" },
  { "name": "조리퐁", "category": "snack" },
  { "name": "허니버터칩", "category": "snack" },
  { "name": "스윙칩", "category": "snack" },
  { "name": "프링글스", "category": "snack" },
  { "name": "바나나킥", "category": "snack" },
  { "name": "메론킥", "category": "snack" },
  { "name": "사또밥", "category": "snack" },
  { "name": "땅콩강정", "category": "snack" },
  { "name": "맛동산", "category": "snack" },
  { "name": "꼬깔콘", "category": "snack" },
  { "name": "치토스", "category": "snack" },
  { "name": "도리토스", "category": "snack" },
  { "name": "새우깡", "category": "snack" },
  { "name": "고래밥", "category": "snack" },
  { "name": "자갈치", "category": "snack" },
  { "name": "꽃게랑", "category": "snack" },
  { "name": "양파링", "category": "snack" },
  { "name": "오징어집", "category": "snack" },
  { "name": "꿀꽈배기", "category": "snack" },
  { "name": "고구마깡", "category": "snack" },
  { "name": "알새우칩", "category": "snack" },
  { "name": "벌집피자", "category": "snack" },
  { "name": "콘칲", "category": "snack" },
  { "name": "오사쯔", "category": "snack" },
  { "name": "빠새", "category": "snack" },
  { "name": "메로나", "category": "ice_cream" },
  { "name": "월드콘", "category": "ice_cream" },
  { "name": "부라보콘", "category": "ice_cream" },
  { "name": "투게더", "category": "ice_cream" },
  { "name": "붕어싸만코", "category": "ice_cream" },
  { "name": "빵또아", "category": "ice_cream" },
  { "name": "구구콘", "category": "ice_cream" },
  { "name": "설레임", "category": "ice_cream" },
  { "name": "돼지바", "category": "ice_cream" },
  { "name": "누누바", "category": "ice_cream" },
  { "name": "수박바", "category": "ice_cream" },
  { "name": "죠스바", "category": "ice_cream" },
  { "name": "스크류바", "category": "ice_cream" },
  { "name": "비비빅", "category": "ice_cream" },
  { "name": "아맛나", "category": "ice_cream" },
  { "name": "바밤바", "category": "ice_cream" },
  { "name": "찰떡아이스", "category": "ice_cream" },
  { "name": "더위사냥", "category": "ice_cream" },
  { "name": "탱크보이", "category": "ice_cream" },
  { "name": "폴라포", "category": "ice_cream" },
  { "name": "엑설런트", "category": "ice_cream" },
  { "name": "티코", "category": "ice_cream" },
  { "name": "쿠앤크", "category": "ice_cream" },
  { "name": "호두마루", "category": "ice_cream" },
  { "name": "체리마루", "category": "ice_cream" },
  { "name": "약과", "category": "tradition" },
  { "name": "강정", "category": "tradition" },
  { "name": "식혜", "category": "tradition" },
  { "name": "수정과", "category": "tradition" },
  { "name": "인절미", "category": "tradition" },
  { "name": "양갱", "category": "tradition" },
  { "name": "유과", "category": "tradition" },
  { "name": "가래떡구이", "category": "tradition" },
  { "name": "코카콜라", "category": "drink" },
  { "name": "칠성사이다", "category": "drink" },
  { "name": "바나나우유", "category": "drink" },
  { "name": "밀키스", "category": "drink" },
  { "name": "포카리스웨트", "category": "drink" },
  { "name": "가나초콜릿", "category": "chocolate" },
  { "name": "자유시간", "category": "chocolate" },
  { "name": "핫브레이크", "category": "chocolate" },
  { "name": "킨더조이", "category": "chocolate" },
  { "name": "페레로로쉐", "category": "chocolate" },
  { "name": "츄파츕스", "category": "candy" },
  { "name": "이클립스", "category": "candy" },
  { "name": "마이쮸", "category": "candy" },
  { "name": "새콤달콤", "category": "candy" },
  { "name": "말랑카우", "category": "candy" },
  { "name": "청포도사탕", "category": "candy" },
  { "name": "다이제", "category": "cookie" },
  { "name": "쿠쿠다스", "category": "cookie" },
  { "name": "에이스", "category": "cookie" },
  { "name": "마가렛트", "category": "cookie" },
  { "name": "빈츠", "category": "cookie" },
  { "name": "오레오", "category": "cookie" },
  { "name": "초코파이", "category": "pie" },
  { "name": "오예스", "category": "pie" },
  { "name": "몽쉘", "category": "pie" },
  { "name": "빅파이", "category": "pie" },
  { "name": "후렌치파이", "category": "pie" }
  { "name": "포스틱", "category": "snack" },
  { "name": "오징어땅콩", "category": "snack" },
  { "name": "신당동떡볶이", "category": "snack" },
  { "name": "콘초", "category": "snack" },
  { "name": "콘치", "category": "snack" },
  { "name": "카라멜메이플콘", "category": "snack" },
  { "name": "인디안밥", "category": "snack" },
  { "name": "바나나칩", "category": "snack" },
  { "name": "참깨스틱", "category": "snack" },
  { "name": "고소미", "category": "snack" },
  { "name": "닭다리", "category": "snack" },
  { "name": "치킨팝", "category": "snack" },
  { "name": "오잉", "category": "snack" },
  { "name": "뿌셔뿌셔", "category": "snack" },
  { "name": "태양의맛썬", "category": "snack" },
  { "name": "꼬북칩", "category": "snack" },
  { "name": "도리토스 나초", "category": "snack" },
  { "name": "구운양파", "category": "snack" },
  { "name": "구운감자", "category": "snack" },
  { "name": "빠새 간장치킨맛", "category": "snack" },
  { "name": "감자속소금", "category": "snack" },
  { "name": "조청유과", "category": "snack" },
  { "name": "쌀로별", "category": "snack" },
  { "name": "미쯔", "category": "snack" },
  { "name": "베이컨칩", "category": "snack" },
  { "name": "팝콘", "category": "snack" },
  { "name": "프레첼", "category": "snack" },
  { "name": "나나콘", "category": "snack" },
  { "name": "브이콘", "category": "snack" },
  { "name": "밭두렁", "category": "snack" },
  { "name": "돼지바 찰떡", "category": "ice_cream" },
  { "name": "보석바", "category": "ice_cream" },
  { "name": "캔디바", "category": "ice_cream" },
  { "name": "누가바", "category": "ice_cream" },
  { "name": "쌍쌍바", "category": "ice_cream" },
  { "name": "빠삐코", "category": "ice_cream" },
  { "name": "쭈쭈바", "category": "ice_cream" },
  { "name": "생귤탱귤", "category": "ice_cream" },
  { "name": "요맘때", "category": "ice_cream" },
  { "name": "와", "category": "ice_cream" },
  { "name": "쿠키오", "category": "ice_cream" },
  { "name": "국화빵", "category": "ice_cream" },
  { "name": "와일드바디", "category": "ice_cream" },
  { "name": "옥동자", "category": "ice_cream" },
  { "name": "별난바", "category": "ice_cream" },
  { "name": "엔초", "category": "ice_cream" },
  { "name": "토마토마", "category": "ice_cream" },
  { "name": "스크류바 피치", "category": "ice_cream" },
  { "name": "거북이", "category": "ice_cream" },
  { "name": "메가톤", "category": "ice_cream" },
  { "name": "찰옥수수", "category": "ice_cream" },
  { "name": "빵아따아", "category": "ice_cream" },
  { "name": "구구크러스터", "category": "ice_cream" },
  { "name": "나뚜루 녹차", "category": "ice_cream" },
  { "name": "하겐다즈 바닐라", "category": "ice_cream" },
  { "name": "본젤라또", "category": "ice_cream" },
  { "name": "끌레도르", "category": "ice_cream" },
  { "name": "모나카", "category": "ice_cream" },
  { "name": "팥빙수(컵)", "category": "ice_cream" },
  { "name": "부라보홈", "category": "ice_cream" },
  { "name": "송편", "category": "tradition" },
  { "name": "백설기", "category": "tradition" },
  { "name": "강정강정", "category": "tradition" },
  { "name": "엿", "category": "tradition" },
  { "name": "뻥튀기", "category": "tradition" },
  { "name": "누룽지", "category": "tradition" },
  { "name": "배도라지차", "category": "tradition" },
  { "name": "환타", "category": "drink" },
  { "name": "닥터페퍼", "category": "drink" },
  { "name": "웰치스", "category": "drink" },
  { "name": "데미소다", "category": "drink" },
  { "name": "아침햇살", "category": "drink" },
  { "name": "갈아만든배", "category": "drink" },
  { "name": "비타500", "category": "drink" },
  { "name": "트윅스", "category": "chocolate" },
  { "name": "스니커즈", "category": "chocolate" },
  { "name": "키캣", "category": "chocolate" },
  { "name": "엠앤엠즈", "category": "chocolate" },
  { "name": "크런키", "category": "chocolate" },
  { "name": "ABC초코", "category": "chocolate" },
  { "name": "드림카카오", "category": "chocolate" },
  { "name": "목캔디", "category": "candy" },
  { "name": "호올스", "category": "candy" },
  { "name": "스키틀즈", "category": "candy" },
  { "name": "멘토스", "category": "candy" },
  { "name": "하리보 곰젤리", "category": "candy" },
  { "name": "꿈틀이", "category": "candy" },
  { "name": "마이구미", "category": "candy" },
  { "name": "비틀즈", "category": "candy" },
  { "name": "사랑방선물", "category": "candy" },
  { "name": "쿠키다스 화이트", "category": "cookie" },
  { "name": "버터와플", "category": "cookie" },
  { "name": "엄마손파이", "category": "cookie" },
  { "name": "칙촉", "category": "cookie" },
  { "name": "촉촉한초코칩", "category": "cookie" },
  { "name": "참크래커", "category": "cookie" },
  { "name": "칸쵸", "category": "cookie" },
  { "name": "초코송이", "category": "cookie" },
  { "name": "그레이스", "category": "cookie" },
  { "name": "엄마손쿠키", "category": "cookie" }
];

let currentCategory = "all";
let showFavOnly = false;

/* ======================
   카테고리
====================== */
function setCategory(cat) {
  currentCategory = cat;
  renderSnacks();
}

/* ======================
   즐겨찾기
====================== */
function getFavorites() {
  const user = localStorage.getItem("user");
  if (!user) return [];
  return JSON.parse(localStorage.getItem("fav_" + user)) || [];
}

function addFavorite(snack) {
  const user = localStorage.getItem("user");
  if (!user) return alert("로그인 후 이용하세요!");

  const key = "fav_" + user;
  const list = getFavorites();

  if (!list.includes(snack)) {
    list.push(snack);
    localStorage.setItem(key, JSON.stringify(list));
    alert("즐겨찾기 추가 ⭐");
  }
}

/* ======================
   즐겨찾기 보기 토글
====================== */
function toggleFavorites() {
  showFavOnly = !showFavOnly;
  renderSnacks();
}

/* ======================
   🎲 랜덤 뽑기
====================== */
function pickRandom() {
  const filtered = snacks.filter(s =>
    (currentCategory === "all" || s.category === currentCategory)
  );

  if (filtered.length === 0) return;

  const pick = filtered[Math.floor(Math.random() * filtered.length)];
  document.getElementById("result").innerText =
    `🎉 오늘의 간식은 "${pick.name}"!`;
}

/* ======================
   렌더링
====================== */
function renderSnacks() {
  const list = document.getElementById("snack-list");
  list.innerHTML = "";
  document.getElementById("result").innerText = "";

  let data = snacks;

  if (currentCategory !== "all") {
    data = data.filter(s => s.category === currentCategory);
  }

  if (showFavOnly) {
    const favs = getFavorites();
    data = data.filter(s => favs.includes(s.name));
  }

  data.forEach(s => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${s.name}
      <button onclick="addFavorite('${s.name}')">⭐</button>
    `;
    list.appendChild(li);
  });
}

renderSnacks();
