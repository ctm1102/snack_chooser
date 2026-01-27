const snackNames = [
  { name: "포카칩", cat: "snack", allergies: [] },
  { name: "새우깡", cat: "snack", allergies: ["shrimp", "wheat"] },
  { name: "꼬북칩초코츄러스", cat: "snack", allergies: ["milk", "wheat", "soy"] },
  { name: "메로나", cat: "icecream", allergies: ["milk"] },
  { name: "월드콘", cat: "icecream", allergies: ["milk", "wheat", "peanut"] },
  { name: "미니약과", cat: "tradition", allergies: ["wheat"] },
  { name: "밀키스", cat: "drink", allergies: ["milk"] },
  { name: "콜라", cat: "drink", allergies: [] }
];

let currentCategory = "all";
let showFavOnly = false;
let currentUser = null;

function handleAuth() {
  const name = document.getElementById("username").value.trim();
  const pw = document.getElementById("userpw").value.trim();

  if (!name || !pw) {
    alert("이름과 비밀번호를 모두 입력해주세요.");
    return;
  }

  const userKey = `userDB_${name}`;
  const storedData = localStorage.getItem(userKey);

  if (storedData) {
    const userData = JSON.parse(storedData);
    if (userData.pw === pw) {
      userData.loginCount += 1;
      currentUser = userData;
      saveUserData();
      showUserArea();
    } else {
      alert("이미 등록된 이름입니다. 비밀번호가 틀렸습니다!");
    }
  } else {
    currentUser = {
      name: name,
      pw: pw,
      loginCount: 1,
      favorites: [],
      allergies: []
    };
    saveUserData();
    alert(`${name}님, 가입을 축하합니다!`);
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
  
  let greeting = `👋 안녕하세요, ${currentUser.name}님!`;
  if (count === 1) greeting = `🌱 처음 오셨네요! 반가워요, ${currentUser.name}님!`;
  else if (count >= 2) greeting = `😊 다시 만나서 반가워요, ${currentUser.name}님!`;
  
  msgEl.innerHTML = `<b>${greeting}</b> (방문: ${count}회)`;

  // 알러지 복원 및 이벤트 연결
  document.querySelectorAll('.allergy-check').forEach(c => {
    c.checked = currentUser.allergies.includes(c.value);
    c.onclick = updateAllergy; // 직접 할당으로 꼬임 방지
  });

  renderSnacks();
}

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
    if (currentUser && item.allergies.some(a => currentUser.allergies.includes(a))) return false;
    if (showFavOnly) return currentUser && currentUser.favorites.includes(item.name);
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
  if (items.length === 0) return alert("목록이 비어있습니다!");
  const pickedName = items[Math.floor(Math.random() * items.length)].innerText;
  document.getElementById("result").innerHTML = `🎯 오늘의 선택: <b>${pickedName}</b>`;
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

function logout() {
  localStorage.removeItem("lastSessionUser");
  location.reload();
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem("snackTheme", document.body.classList.contains("dark") ? "dark" : "light");
}

function exportData() {
  const data = btoa(encodeURIComponent(JSON.stringify(currentUser)));
  prompt("백업 코드를 복사하세요:", data);
}

function importData() {
  const data = prompt("코드를 입력하세요:");
  if (data) {
    try {
      const parsed = JSON.parse(decodeURIComponent(atob(data)));
      localStorage.setItem(`userDB_${parsed.name}`, JSON.stringify(parsed));
      location.reload();
    } catch(e) { alert("오류가 발생했습니다."); }
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
