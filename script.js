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
  document.getElementById('login-form').style.display = (type === 'login' ? 'block' : 'none');
  document.getElementById('signup-form').style.display = (type === 'signup' ? 'block' : 'none');
}
function closeModal() { document.getElementById('auth-modal').style.display = 'none'; }

// --- 회원가입/로그인 로직 ---
function handleSignup() {
  const name = document.getElementById("signup-name").value.trim();
  const pw = document.getElementById("signup-pw").value.trim();
  if (!name || !pw) return alert("정보를 모두 입력하세요.");

  if (localStorage.getItem(`userDB_${name}`)) return alert("이미 존재하는 이름입니다.");

  currentUser = { name, pw, loginCount: 1, favorites: [], allergies: [] };
  saveUserData();
  alert("가입 성공! 환영합니다.");
  closeModal();
  updateUI();
}

function handleLogin() {
  const name = document.getElementById("login-name").value.trim();
  const pw = document.getElementById("login-pw").value.trim();
  const stored = localStorage.getItem(`userDB_${name}`);

  if (!stored) return alert("가입되지 않은 이름입니다.");
  const userData = JSON.parse(stored);
  if (userData.pw !== pw) return alert("비밀번호가 틀렸습니다.");

  userData.loginCount++;
  currentUser = userData;
  saveUserData();
  closeModal();
  updateUI();
}

function updateUI() {
  if (currentUser) {
    document.getElementById("auth-menu").style.display = "none";
    document.getElementById("user-menu").style.display = "block";
    document.getElementById("header-user-name").innerText = `👤 ${currentUser.name}님`;
    document.getElementById("user-section").style.display = "block";
    
    const msg = currentUser.loginCount > 1 
      ? `😊 다시 만나서 반가워요, ${currentUser.name}님!` 
      : `🌱 처음 오셨네요! 반가워요, ${currentUser.name}님!`;
    document.getElementById("welcome-msg").innerHTML = `<b>${msg}</b> (방문:${currentUser.loginCount})`;

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
    label.className = `allergy-item ${isChecked ? 'active' : ''}`;
    label.innerHTML = `<input type="checkbox" value="${type}" ${isChecked ? 'checked' : ''} onchange="updateAllergy(this)"> ${type}`;
    container.appendChild(label);
  });
}

function updateAllergy(el) {
  if (el.checked) currentUser.allergies.push(el.value);
  else currentUser.allergies = currentUser.allergies.filter(a => a !== el.value);
  el.parentElement.classList.toggle('active');
  saveUserData();
  renderSnacks();
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
    li.innerHTML = `<span>${item.name}</span> <button class="fav-btn" onclick="addFavorite('${item.name}')">${isFav ? '⭐' : '☆'}</button>`;
    listEl.appendChild(li);
  });
}

function addFavorite(name) {
  if (!currentUser) return alert("로그인이 필요합니다.");
  const idx = currentUser.favorites.indexOf(name);
  if (idx > -1) currentUser.favorites.splice(idx, 1);
  else currentUser.favorites.push(name);
  saveUserData();
  renderSnacks();
}

function saveUserData() { localStorage.setItem(`userDB_${currentUser.name}`, JSON.stringify(currentUser)); localStorage.setItem("lastSessionUser", currentUser.name); }
function logout() { localStorage.removeItem("lastSessionUser"); location.reload(); }
function setCategory(cat) { currentCategory = cat; showFavOnly = false; renderSnacks(); }
function toggleFavorites() { showFavOnly = !showFavOnly; document.getElementById("fav-toggle-btn").innerText = showFavOnly ? "🔙 전체보기" : "⭐ 즐겨찾기만"; renderSnacks(); }
function toggleTheme() { document.body.classList.toggle("dark"); localStorage.setItem("snackTheme", document.body.classList.contains("dark") ? "dark" : "light"); }
function pickRandom() {
  const items = document.querySelectorAll("#snack-list li span");
  if (!items.length) return alert("목록이 없습니다.");
  const picked = items[Math.floor(Math.random() * items.length)].innerText;
  document.getElementById("result").innerHTML = `🎯 선택 결과: <b>${picked}</b>`;
}

// 초기 로드
window.onload = () => {
  if (localStorage.getItem("snackTheme") === "dark") document.body.classList.add("dark");
  const lastUser = localStorage.getItem("lastSessionUser");
  if (lastUser) {
    currentUser = JSON.parse(localStorage.getItem(`userDB_${lastUser}`));
    updateUI();
  } else { renderSnacks(); }
};
