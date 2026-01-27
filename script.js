/* ======================
   1. 데이터 설정 (알러지 정보 추가)
   - milk, peanut, wheat, shrimp 등
====================== */
const snackNames = [
  { name: "포카칩", cat: "snack", allergies: [] },
  { name: "새우깡", cat: "snack", allergies: ["shrimp", "wheat"] },
  { name: "꼬북칩초코", cat: "snack", allergies: ["milk", "wheat"] },
  { name: "메로나", cat: "icecream", allergies: ["milk"] },
  { name: "월드콘", cat: "icecream", allergies: ["milk", "wheat", "peanut"] },
  { name: "아몬드봉봉", cat: "icecream", allergies: ["milk", "peanut"] },
  { name: "미니약과", cat: "tradition", allergies: ["wheat"] },
  { name: "우유우유", cat: "drink", allergies: ["milk"] },
  { name: "콜라", cat: "drink", allergies: [] },
  // ... 나머지 데이터에도 allergies: [] 형태로 추가 가능
];

let currentCategory = "all";
let showFavOnly = false;
let currentUser = null;

/* ======================
   2. 로그인 및 회원 관리
====================== */
function login() {
  const name = document.getElementById("username").value.trim();
  const pw = document.getElementById("userpw").value.trim();

  if (!name || pw.length !== 4) return alert("이름과 숫자 4자리 비밀번호를 입력하세요!");

  const userKey = `user_${name}`;
  const existingUser = JSON.parse(localStorage.getItem(userKey));

  if (existingUser) {
    if (existingUser.pw !== pw) {
      return alert("이미 존재하는 이름입니다. 비밀번호가 틀렸습니다.");
    }
    // 기존 유저 로그인 (방문 횟수 증가)
    existingUser.loginCount += 1;
    currentUser = existingUser;
  } else {
    // 신규 유저 등록
    currentUser = {
      name: name,
      pw: pw,
      loginCount: 1,
      favorites: [],
      allergies: []
    };
    alert("새로운 사용자로 등록되었습니다!");
  }

  saveUserData();
  showUserArea();
}

function saveUserData() {
  if (!currentUser) return;
  localStorage.setItem(`user_${currentUser.name}`, JSON.stringify(currentUser));
  localStorage.setItem("lastLoginUser", currentUser.name);
}

function showUserArea() {
  document.getElementById("login-area").style.display = "none";
  document.getElementById("user-area").style.display = "block";
  
  // 횟수별 인사말
  const msgEl = document.getElementById("welcome-msg");
  const count = currentUser.loginCount;
  let ment = `😋 ${currentUser.name}님 환영합니다!`;
  
  if (count === 1) ment = `🌱 처음 오셨네요! 반가워요, ${currentUser.name}님!`;
  else if (count >= 2 && count < 5) ment = `👋 다시 만나서 정말 반가워요, ${currentUser.name}님!`;
  else if (count >= 5) ment = `👑 단골 손님! ${currentUser.name}님, 오늘도 맛있는 간식 고르세요!`;
  
  msgEl.innerHTML = `<b>${ment}</b> (방문: ${count}회)`;

  // 체크박스 상태 복원
  const checks = document.querySelectorAll('.allergy-check');
  checks.forEach(c => {
    c.checked = currentUser.allergies.includes(c.value);
  });

  renderSnacks();
}

function logout() {
  localStorage.removeItem("lastLoginUser");
  location.reload();
}

/* ======================
   3. 알러지 및 즐겨찾기 로직
====================== */
function updateAllergy() {
  const checks = document.querySelectorAll('.allergy-check:checked');
  currentUser.allergies = Array.from(checks).map(c => c.value);
  saveUserData();
  renderSnacks();
}

function addFavorite(name) {
  if (!currentUser) return alert("로그인 후 이용 가능합니다!");
  
  const idx = currentUser.favorites.indexOf(name);
  if (idx > -1) currentUser.favorites.splice(idx, 1);
  else currentUser.favorites.push(name);
  
  saveUserData();
  renderSnacks();
}

/* ======================
   4. 필터 및 렌더링
====================== */
function renderSnacks() {
  const listEl = document.getElementById("snack-list");
  if (!listEl) return;
  listEl.innerHTML = "";

  const filtered = snackNames.filter(item => {
    // 1. 알러지 필터 (사용자가 선택한 알러지 성분이 간식에 하나라도 있으면 제외)
    const hasAllergy = currentUser && item.allergies.some(a => currentUser.allergies.includes(a));
    if (hasAllergy) return false;

    // 2. 즐겨찾기 필터
    if (showFavOnly) return currentUser && currentUser.favorites.includes(item.name);
    
    // 3. 카테고리 필터
    if (currentCategory === "all") return true;
    return item.cat === currentCategory;
  });

  filtered.forEach(item => {
    const isFav = currentUser && currentUser.favorites.includes(item.name);
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.name} ${item.allergies.length > 0 ? '⚠️' : ''}</span>
      <button class="fav-btn" onclick="addFavorite('${item.name}')">${isFav ? '⭐' : '☆'}</button>
    `;
    listEl.appendChild(li);
  });
}

function pickRandom() {
  const listEl = document.getElementById("snack-list");
  const items = listEl.querySelectorAll("li span");
  if (items.length === 0) return alert("조건에 맞는 간식이 없습니다!");

  const randomIndex = Math.floor(Math.random() * items.length);
  const pickedName = items[randomIndex].innerText.replace('⚠️', '').trim();
  document.getElementById("result").innerText = `🎯 오늘의 선택: ${pickedName}!`;
}

// 카테고리 설정
function setCategory(cat) {
  currentCategory = cat;
  showFavOnly = false;
  renderSnacks();
}

// 즐겨찾기 토글
function toggleFavorites() {
  showFavOnly = !showFavOnly;
  document.getElementById("fav-toggle-btn").innerText = showFavOnly ? "🔙 전체 목록 보기" : "⭐ 즐겨찾기 목록만 보기";
  renderSnacks();
}

/* ======================
   5. 데이터 동기화 (기기 이동용)
====================== */
function exportData() {
  const data = JSON.stringify(currentUser);
  prompt("이 코드를 복사해서 다른 기기에서 '불러오기' 하세요:", data);
}

function importData() {
  const data = prompt("내보내기 했던 코드를 붙여넣으세요:");
  if (data) {
    try {
      const parsed = JSON.parse(data);
      localStorage.setItem(`user_${parsed.name}`, data);
      alert("데이터를 성공적으로 가져왔습니다! 로그인해주세요.");
      location.reload();
    } catch(e) {
      alert("올바르지 않은 데이터입니다.");
    }
  }
}

// 테마 변경
function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
}

// 초기 로드
window.onload = () => {
  if (localStorage.getItem("theme") === "dark") document.body.classList.add("dark");
  
  const lastUser = localStorage.getItem("lastLoginUser");
  if (lastUser) {
    currentUser = JSON.parse(localStorage.getItem(`user_${lastUser}`));
    showUserArea();
  }
  renderSnacks();
};
