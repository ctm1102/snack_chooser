const snackNames = [
  { name: "포카칩", cat: "snack", allergies: [] },
  { name: "새우깡", cat: "snack", allergies: ["새우", "밀가루"] },
  { name: "꼬북칩초코", cat: "snack", allergies: ["우유", "밀가루", "대두"] },
  { name: "메로나", cat: "icecream", allergies: ["우유"] },
  { name: "월드콘", cat: "icecream", allergies: ["우유", "밀가루", "견과류"] },
  { name: "비비빅", cat: "icecream", allergies: ["대두"] },
  { name: "연양갱", cat: "tradition", allergies: [] },
  { name: "미니약과", cat: "tradition", allergies: ["밀가루"] },
  { name: "콜라", cat: "drink", allergies: [] }
];

const allergyTypes = ["우유", "견과류", "밀가루", "새우", "계란", "대두"];
let currentCategory = "all";
let showFavOnly = false;
let currentUser = null;

function openModal(type) {
  document.getElementById('auth-modal').style.display = 'flex';
  const isLogin = type === 'login';
  document.getElementById('modal-title').innerText = isLogin ? '로그인' : '회원가입';
  document.getElementById('login-form').style.display = isLogin ? 'block' : 'none';
  document.getElementById('signup-form').style.display = isLogin ? 'none' : 'block';
}

function closeModal() { document.getElementById('auth-modal').style.display = 'none'; }

function handleSignup() {
  const name = document.getElementById("signup-name").value.trim();
  const pw = document.getElementById("signup-pw").value.trim();
  if (!name || !pw) return alert("이름과 비밀번호를 입력해주세요.");
  if (localStorage.getItem(`snackUser_${name}`)) return alert("이미 사용 중인 이름입니다.");

  currentUser = { name, pw, loginCount: 1, favorites: [], allergies: [] };
  saveUserData();
  alert("가입을 축하합니다!");
  closeModal();
  updateUI();
}

function handleLogin() {
  const name = document.getElementById("login-name").value.trim();
  const pw = document.getElementById("login-pw").value.trim();
  const stored = localStorage.getItem(`snackUser_${name}`);

  if (!stored) return alert("회원정보가 없습니다.");
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
    document.getElementById("header-user-name").innerText = `👤 ${currentUser.name}`;
    document.getElementById("user-section").style.display = "block";
    document.getElementById("welcome-msg").innerText = `${currentUser.name}님, 환영합니다! 오늘의 맛있는 선택을 도와드릴게요.`;
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
    label.className = `gh-chip ${isChecked ? 'active' : ''}`;
    label.innerHTML = `<input type="checkbox" value="${type}" ${isChecked ? 'checked' : ''} onchange="updateAllergy(this)"> ${type}`;
    container.appendChild(label);
  });
}

function updateAllergy(el) {
  if (el.checked) currentUser.allergies.push(el.value);
  else currentUser.allergies = currentUser.allergies.filter(a => a !== el.value);
  saveUserData();
  renderSnacks();
  renderAllergyList();
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
      <span style="font-weight:600;">${item.name}</span>
      <button style="background:none; border:none; font-size:22px; cursor:pointer; color:${isFav ? '#fadb14':'#dee2e6'};" onclick="addFavorite('${item.name}')">${isFav ? '⭐' : '☆'}</button>
    `;
    listEl.appendChild(li);
  });
}

function addFavorite(name) {
  if (!currentUser) {
    if (confirm("즐겨찾기를 하려면 로그인이 필요합니다.\n로그인 화면으로 이동하시겠습니까?")) openModal('login');
    return;
  }
  const idx = currentUser.favorites.indexOf(name);
  if (idx > -1) currentUser.favorites.splice(idx, 1);
  else currentUser.favorites.push(name);
  saveUserData();
  renderSnacks();
}

function saveUserData() { localStorage.setItem(`snackUser_${currentUser.name}`, JSON.stringify(currentUser)); localStorage.setItem("activeUser", currentUser.name); }
function logout() { localStorage.removeItem("activeUser"); location.reload(); }
function setCategory(cat) { 
  currentCategory = cat; 
  document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  renderSnacks(); 
}
function toggleFavorites() {
  if (!currentUser && !showFavOnly) {
    if (confirm("로그인이 필요한 기능입니다.\n로그인하시겠습니까?")) openModal('login');
    return;
  }
  showFavOnly = !showFavOnly;
  document.getElementById("fav-toggle-btn").innerText = showFavOnly ? "🔙 전체 목록 보기" : "⭐ 즐겨찾기만 보기";
  renderSnacks();
}
function toggleTheme() { document.body.classList.toggle("dark"); localStorage.setItem("snackTheme", document.body.classList.contains("dark") ? "dark" : "light"); }
function pickRandom() {
  const items = document.querySelectorAll(".snack-item span");
  if (!items.length) return alert("선택할 수 있는 간식이 없습니다!");
  const picked = items[Math.floor(Math.random() * items.length)].innerText;
  document.getElementById("result").innerHTML = `🎯 추천 결과: <b style="color:var(--gh-blue)">${picked}</b>`;
}

window.onload = () => {
  if (localStorage.getItem("snackTheme") === "dark") document.body.classList.add("dark");
  const lastUser = localStorage.getItem("activeUser");
  if (lastUser) {
    currentUser = JSON.parse(localStorage.getItem(`snackUser_${lastUser}`));
    if(currentUser) updateUI();
  } else { renderSnacks(); }
};
