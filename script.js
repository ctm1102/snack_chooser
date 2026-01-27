/* ======================
   1. 데이터 설정 (알러지 태그 추가)
====================== */
const snackNames = [
  { name: "포카칩", cat: "snack", allergies: [] },
  { name: "새우깡", cat: "snack", allergies: ["shrimp", "wheat"] },
  { name: "매운새우깡", cat: "snack", allergies: ["shrimp", "wheat"] },
  { name: "꼬북칩초코츄러스", cat: "snack", allergies: ["milk", "wheat", "soy"] },
  { name: "메로나", cat: "icecream", allergies: ["milk"] },
  { name: "월드콘", cat: "icecream", allergies: ["milk", "wheat", "peanut"] },
  { name: "연양갱", cat: "tradition", allergies: [] },
  { name: "미니약과", cat: "tradition", allergies: ["wheat"] },
  { name: "하리보", cat: "candy", allergies: [] },
  { name: "밀키스", cat: "drink", allergies: ["milk"] },
  { name: "콜라", cat: "drink", allergies: [] },
  { name: "바나나우유", cat: "drink", allergies: ["milk"] }
];

let currentCategory = "all";
let showFavOnly = false;
let currentUser = null;

/* ======================
   2. 회원가입 및 로그인 통합 로직
====================== */
function handleAuth() {
  const name = document.getElementById("username").value.trim();
  const pw = document.getElementById("userpw").value.trim();

  if (!name || pw.length !== 4) {
    alert("이름과 숫자 4자리 비밀번호를 정확히 입력해주세요.");
    return;
  }

  const userKey = `userDB_${name}`;
  const storedData = localStorage.getItem(userKey);

  if (storedData) {
    // [로그인 시도] 이미 존재하는 사용자일 경우
    const userData = JSON.parse(storedData);
    if (userData.pw === pw) {
      // 비밀번호 일치
      userData.loginCount += 1;
      currentUser = userData;
      saveUserData();
      showUserArea();
    } else {
      // 비밀번호 불일치 (경고 알림)
      alert("이미 존재하는 이름입니다! 비밀번호 4자리가 틀렸습니다. 다시 확인해주세요.");
    }
  } else {
    // [회원가입] 새로운 사용자일 경우
    const newUser = {
      name: name,
      pw: pw,
      loginCount: 1,
      favorites: [],
      allergies: []
    };
    currentUser = newUser;
    saveUserData();
    alert(`반가워요 ${name}님! 회원 등록이 완료되었습니다.`);
    showUserArea();
  }
}

function saveUserData() {
  if (!currentUser) return;
  localStorage.setItem(`userDB_${currentUser.name}`, JSON.stringify(currentUser));
  localStorage.setItem("lastSessionUser", currentUser.name);
}

function showUserArea() {
  document.getElementById("login-area").style.display = "none";
  document.getElementById("user-area").style.display = "block";
  
  const msgEl = document.getElementById("welcome-msg");
  const count = currentUser.loginCount;
  
  // 횟수별 멘트 분기
  let greeting = `👋 안녕하세요, ${currentUser.name}님!`;
  if (count === 1) greeting = `🌱 처음 오셨네요! 반가워요, ${currentUser.name}님!`;
  else if (count >= 2 && count < 10) greeting = `😊 다시 만나서 반가워요, ${currentUser.name}님!`;
  else if (count >= 10) greeting = `👑 우리 동네 최고의 간식 대장, ${currentUser.name}님!`;
  
  msgEl.innerHTML = `<b>${greeting}</b><br><small>(누적 방문: ${count}회)</small>`;

  // 알러지 체크박스 상태 복원
  document.querySelectorAll('.allergy-check').forEach(c => {
    c.checked = currentUser.allergies.includes(c.value);
  });

  renderSnacks();
}

function logout() {
  localStorage.removeItem("lastSessionUser");
  location.reload();
}

/* ======================
   3. 알러지 및 렌더링
====================== */
function updateAllergy() {
  const checks = document.querySelectorAll('.allergy-check:checked');
  currentUser.allergies = Array.from(checks).map(c => c.value);
  saveUserData();
  renderSnacks();
}

function renderSnacks() {
  const listEl = document.getElementById("snack-list");
  listEl.innerHTML = "";

  const filtered = snackNames.filter(item => {
    // 알러지 필터링
    if (currentUser && item.allergies.some(a => currentUser.allergies.includes(a))) return false;
    // 즐겨찾기 필터링
    if (showFavOnly) return currentUser && currentUser.favorites.includes(item.name);
    // 카테고리 필터링
    if (currentCategory === "all") return true;
    return item.cat === currentCategory;
  });

  filtered.forEach(item => {
    const isFav = currentUser && currentUser.favorites.includes(item.name);
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.name}</span>
      <button class="fav-btn" onclick="addFavorite('${item.name}')">${isFav ? '⭐' : '☆'}</button>
    `;
    listEl.appendChild(li);
  });
}

function addFavorite(name) {
  const idx = currentUser.favorites.indexOf(name);
  if (idx > -1) currentUser.favorites.splice(idx, 1);
  else currentUser.favorites.push(name);
  saveUserData();
  renderSnacks();
}

function pickRandom() {
  const listEl = document.getElementById("snack-list");
  const items = listEl.querySelectorAll("li span");
  if (items.length === 0) return alert("조건에 맞는 간식이 없어요!");

  const randomIndex = Math.floor(Math.random() * items.length);
  const pickedName = items[randomIndex].innerText;
  document.getElementById("result").innerHTML = `🎯 오늘의 선택<br><span style="font-size: 1.5rem; color:#e67e22;">${pickedName}</span>`;
}

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

/* ======================
   4. 기타 기능 (테마, 백업)
====================== */
function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem("snackTheme", document.body.classList.contains("dark") ? "dark" : "light");
}

function exportData() {
  const data = btoa(encodeURIComponent(JSON.stringify(currentUser))); // 암호화된 느낌의 문자열 생성
  prompt("아래 코드를 복사해서 메모장에 저장하거나 기기를 옮길 때 사용하세요!", data);
}

function importData() {
  const data = prompt("복사해둔 코드를 붙여넣으세요:");
  if (data) {
    try {
      const parsed = JSON.parse(decodeURIComponent(atob(data)));
      localStorage.setItem(`userDB_${parsed.name}`, JSON.stringify(parsed));
      alert("데이터 복구 완료! 로그인을 진행해주세요.");
      location.reload();
    } catch(e) { alert("잘못된 코드입니다."); }
  }
}

window.onload = () => {
  if (localStorage.getItem("snackTheme") === "dark") document.body.classList.add("dark");
  const lastUser = localStorage.getItem("lastSessionUser");
  if (lastUser) {
    currentUser = JSON.parse(localStorage.getItem(`userDB_${lastUser}`));
    if(currentUser) showUserArea();
  }
  renderSnacks();
};
