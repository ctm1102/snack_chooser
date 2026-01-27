const snackNames = [
  { name: "포카칩", cat: "snack", allergies: [] },
  { name: "새우깡", cat: "snack", allergies: ["새우", "밀가루"] },
  { name: "꼬북칩초코", cat: "snack", allergies: ["우유", "밀가루", "대두"] },
  { name: "메로나", cat: "icecream", allergies: ["우유"] },
  { name: "월드콘", cat: "icecream", allergies: ["우유", "밀가루", "견과류"] },
  { name: "비비빅", cat: "icecream", allergies: ["대두"] },
  { name: "연양갱", cat: "tradition", allergies: [] },
  { name: "미니약과", cat: "tradition", allergies: ["밀가루"] },
  { name: "하리보", cat: "candy", allergies: [] },
  { name: "콜라", cat: "drink", allergies: [] }
];

const allergyTypes = ["우유", "견과류", "밀가루", "새우", "계란", "대두"];
let currentCategory = "all";
let showFavOnly = false;
let currentUser = null;

// --- 모달 제어 ---
function openModal(type) {
  document.getElementById('auth-modal').style.display = 'flex';
  const isLogin = type === 'login';
  document.getElementById('modal-title').innerText = isLogin ? '로그인' : '회원가입';
  document.getElementById('login-form').style.display = isLogin ? 'block' : 'none';
  document.getElementById('signup-form').style.display = isLogin ? 'none' : 'block';
}
function closeModal() { document.getElementById('auth-modal').style.display = 'none'; }

// --- 인증 로직 ---
function handleSignup() {
  const name = document.getElementById("signup-name").value.trim();
  const pw = document.getElementById("signup-pw").value.trim();
  if (!name || !pw) return alert("이름과 비밀번호를 모두 입력해주세요.");
  if (localStorage.getItem(`userDB_${name}`)) return alert("이미 사용 중인 이름입니다.");

  currentUser = { name, pw, loginCount: 1, favorites: [], allergies: [] };
  saveUserData();
  alert("회원가입이 완료되었습니다!");
  closeModal();
  updateUI();
}

function handleLogin() {
  const name = document.getElementById("login-name").value.trim();
  const pw = document.getElementById("login-pw").value.trim();
  const stored = localStorage.getItem(`userDB_${name}`);

  if (!stored) return alert("존재하지 않는 사용자입니다.");
  const userData = JSON.parse(stored);
  if (userData.pw !== pw) return alert("비밀번호가 일치하지 않습니다.");

  userData.loginCount++;
  currentUser = userData;
  saveUserData();
  closeModal();
  updateUI();
}

function updateUI() {
  if (currentUser) {
    document.getElementById("auth-menu").style.display = "none";
    document.getElementById("user-menu").style.display = "flex";
    document.getElementById("header-user-name").innerText = currentUser.name;
    document.getElementById("user-section").style.display = "block";
    
    const msg = currentUser.loginCount > 1 
      ? `👋 다시 만나서 반가워요, ${currentUser.name}님!` 
      : `🌱 첫 방문을 환영합니다, ${currentUser.name}님!`;
    document.getElementById("welcome-msg").innerHTML = `<b>${msg}</b>`;

    renderAllergyList();
  }
  renderSnacks();
}

function renderAllergyList() {
  const container = document.getElementById("allergy-list");
  container.innerHTML = "";
  allergyTypes.forEach(type => {
    const isChecked = currentUser.allergies.includes(type);
    const label = document.createElement("label");
    label.className = `chip ${isChecked ? 'active' : ''}`;
    label.innerHTML = `<input type="checkbox" value="${type}" ${isChecked ? 'checked' : ''} onchange="updateAllergy(this)"> ${type}`;
    container.appendChild(label);
  });
}

function updateAllergy(el) {
  if (el.checked) currentUser.allergies.push(el.value);
  else currentUser.allergies = currentUser.allergies.filter(a => a !== el.value);
  saveUserData();
  renderSnacks();
  renderAllergyList(); // 클래스 갱신을 위해 재호출
}

function renderSnacks() {
  const listEl = document.getElementById("snack-list");
  listEl.innerHTML = "";
  const filtered = snackNames.filter(item => {
    if (currentUser && currentUser.allergies.some(a => item.allergies.includes(a))) return false;
    if (showFavOnly) return currentUser && currentUser.favorites.includes(item.name);
    return currentCategory === "all" || item.cat === currentCategory;
  });

  filtered.forEach(item => {
    const isFav = currentUser && currentUser.favorites.includes(item.name);
    const li = document.createElement("li");
    li.className = "snack-item";
    li.innerHTML = `
      <span class="name">${item.name}</span>
      <button class="fav-btn ${isFav ? 'on' : ''}" onclick="addFavorite('${item.name}')">${isFav ? '⭐' : '☆'}</button>
    `;
    listEl.appendChild(li);
  });
}

function addFavorite(name) {
  // 로그인 체크 (Geekhub 스타일 팝업 유도)
  if (!currentUser) {
    if (confirm("로그인을 해야 사용할 수 있는 기능입니다.\n로그인 화면으로 이동할까요?")) {
      openModal('login');
    }
    return;
  }

  const idx = currentUser.favorites.indexOf(name);
  if (idx > -1) currentUser.favorites.splice(idx, 1);
  else currentUser.favorites.push(name);
  saveUserData();
  renderSnacks();
}

// 공통 유틸
function saveUserData() { localStorage.setItem(`userDB_${currentUser.name}`, JSON.stringify(currentUser)); localStorage.setItem("lastSessionUser", currentUser.name); }
function logout() { localStorage.removeItem("lastSessionUser"); location.reload(); }
function setCategory(cat) { 
  currentCategory = cat; 
  showFavOnly = false;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  renderSnacks(); 
}
function toggleFavorites() { 
  if(!currentUser && !showFavOnly) {
     if (confirm("로그인을 해야 즐겨찾기를 볼 수 있습니다.\n로그인 하시겠습니까?")) openModal('login');
     return;
  }
  showFavOnly = !showFavOnly; 
  document.getElementById("fav-toggle-btn").innerText = showFavOnly ? "🔙 전체 목록" : "⭐ 즐겨찾기 목록만"; 
  renderSnacks(); 
}
function toggleTheme() { document.body.classList.toggle("dark"); localStorage.setItem("snackTheme", document.body.classList.contains("dark") ? "dark" : "light"); }
function pickRandom() {
  const items = document.querySelectorAll(".snack-item .name");
  if (!items.length) return alert("조건에 맞는 간식이 없습니다.");
  const picked = items[Math.floor(Math.random() * items.length)].innerText;
  document.getElementById("result").innerHTML = `🎯 추천 결과: <b>${picked}</b>`;
}

window.onload = () => {
  if (localStorage.getItem("snackTheme") === "dark") document.body.classList.add("dark");
  const lastUser = localStorage.getItem("lastSessionUser");
  if (lastUser) {
    currentUser = JSON.parse(localStorage.getItem(`userDB_${lastUser}`));
    if(currentUser) updateUI();
  } else { renderSnacks(); }
};
