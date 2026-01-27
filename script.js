const snackNames = [
  { name: "포카칩", cat: "snack", allergies: [] },
  { name: "새우깡", cat: "snack", allergies: ["새우", "밀가루"] },
  { name: "꼬북칩초코", cat: "snack", allergies: ["우유", "밀가루", "대두"] },
  { name: "메로나", cat: "icecream", allergies: ["우유"] },
  { name: "월드콘", cat: "icecream", allergies: ["우유", "밀가루", "견과류"] },
  { name: "연양갱", cat: "tradition", allergies: [] },
  { name: "미니약과", cat: "tradition", allergies: ["밀가루"] },
  { name: "콜라", cat: "drink", allergies: [] }
];

const allergyTypes = ["우유", "견과류", "밀가루", "새우", "계란", "대두"];
let currentCategory = "all";
let showFavOnly = false;
let currentUser = null;

function handleAuth() {
  const name = document.getElementById("username").value.trim();
  const pw = document.getElementById("userpw").value.trim();

  if (!name || !pw) return alert("이름과 비밀번호를 입력해주세요.");

  const userKey = `userDB_${name}`;
  const storedData = localStorage.getItem(userKey);

  if (storedData) {
    const userData = JSON.parse(storedData);
    if (userData.pw === pw) {
      userData.loginCount = (userData.loginCount || 0) + 1;
      currentUser = userData;
      saveUserData();
      showUserArea();
    } else {
      alert("비밀번호가 틀렸습니다!");
    }
  } else {
    currentUser = { name, pw, loginCount: 1, favorites: [], allergies: [] };
    saveUserData();
    alert("가입 완료!");
    showUserArea();
  }
}

function showUserArea() {
  document.getElementById("login-area").style.display = "none";
  document.getElementById("user-area").style.display = "block";
  
  const msgEl = document.getElementById("welcome-msg");
  msgEl.innerHTML = currentUser.loginCount > 1 
    ? `😊 <b>다시 만나서 반가워요, ${currentUser.name}님!</b>`
    : `🌱 <b>처음 오셨네요! 반가워요, ${currentUser.name}님!</b>`;

  // 알러지 목록 생성
  const container = document.getElementById("allergy-list");
  container.innerHTML = "";
  allergyTypes.forEach(type => {
    const isChecked = currentUser.allergies.includes(type);
    const label = document.createElement("label");
    label.className = `allergy-item ${isChecked ? 'active' : ''}`;
    label.innerHTML = `<input type="checkbox" value="${type}" ${isChecked ? 'checked' : ''} onchange="updateAllergy(this)"> ${type}`;
    container.appendChild(label);
  });

  renderSnacks();
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
    if (currentUser.allergies.some(a => item.allergies.includes(a))) return false;
    if (showFavOnly) return currentUser.favorites.includes(item.name);
    return currentCategory === "all" || item.cat === currentCategory;
  });

  filtered.forEach(item => {
    const isFav = currentUser.favorites.includes(item.name);
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="snack-name">${item.name}</span>
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

function saveUserData() { localStorage.setItem(`userDB_${currentUser.name}`, JSON.stringify(currentUser)); localStorage.setItem("lastSessionUser", currentUser.name); }
function setCategory(cat) { currentCategory = cat; showFavOnly = false; renderSnacks(); }
function toggleFavorites() { showFavOnly = !showFavOnly; document.getElementById("fav-toggle-btn").innerText = showFavOnly ? "🔙 전체 목록" : "⭐ 즐겨찾기만"; renderSnacks(); }
function logout() { localStorage.removeItem("lastSessionUser"); location.reload(); }
function toggleTheme() { document.body.classList.toggle("dark"); localStorage.setItem("snackTheme", document.body.classList.contains("dark") ? "dark" : "light"); }
function pickRandom() {
  const items = document.querySelectorAll(".snack-name");
  if (!items.length) return alert("목록이 없습니다!");
  const picked = items[Math.floor(Math.random() * items.length)].innerText;
  document.getElementById("result").innerHTML = `🎯 선택: <b>${picked}</b>`;
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
