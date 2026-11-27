/* --- [1. Supabase 및 reCAPTCHA 설정] --- */
const SUPABASE_URL = 'https://tpbtjnqexwubctkurpqp.supabase.co'; 
const SUPABASE_KEY = 'sb_publishable_ShRhGoTEr207ESTQdghLBQ_ebkwaw1D'; 
const _supabase = (window.supabase) ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

// Google reCAPTCHA v2 사이트 키를 아래에 붙여넣으세요
const RECAPTCHA_SITE_KEY = '여기에_발급받은_SITE_KEY_입력';
let loginWidgetId = null;
let signupWidgetId = null;

/* --- [2. 상태 관리] --- */
let currentUser = null;
let currentCategory = "all";
let showFavOnly = false;
let activeSnackName = null;
let selectedSignupAllergies =;

/* --- [3. 인증 로직] --- */
async function hashPassword(pw) {
    const encoder = new TextEncoder();
    const data = encoder.encode(pw);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function openModal(type) {
    document.getElementById("auth-modal").style.display = "flex";
    document.getElementById("login-form").style.display = type === 'login' ? 'block' : 'none';
    document.getElementById("signup-form").style.display = type === 'signup' ? 'block' : 'none';
    document.getElementById("modal-title").innerText = type === 'login' ? '로그인' : '회원가입';

    if (type === 'signup') renderSignupAllergies();

    // Google reCAPTCHA 위젯 렌더링 및 초기화
    if (window.grecaptcha && grecaptcha.render && RECAPTCHA_SITE_KEY !== '여기에_발급받은_SITE_KEY_입력') {
        if (type === 'login') {
            if (loginWidgetId === null) {
                loginWidgetId = grecaptcha.render('recaptcha-login', { sitekey: RECAPTCHA_SITE_KEY });
            } else {
                grecaptcha.reset(loginWidgetId);
            }
        } else if (type === 'signup') {
            if (signupWidgetId === null) {
                signupWidgetId = grecaptcha.render('recaptcha-signup', { sitekey: RECAPTCHA_SITE_KEY });
            } else {
                grecaptcha.reset(signupWidgetId);
            }
        }
    }
}

function closeModal() { document.getElementById("auth-modal").style.display = "none"; }

function renderSignupAllergies() {
    const container = document.getElementById("signup-allergy-list");
    if(!container) return;
    container.innerHTML = allergyTypes.map(a => `
        <div class="gh-chip ${selectedSignupAllergies.includes(a) ? 'active' : ''}" onclick="toggleSignupAllergy('${a}')">
            ${selectedSignupAllergies.includes(a) ? '🚫 ' : ''}${a}
        </div>
    `).join('');
}

function toggleSignupAllergy(a) {
    selectedSignupAllergies.includes(a) ? selectedSignupAllergies = selectedSignupAllergies.filter(v => v !== a) : selectedSignupAllergies.push(a);
    renderSignupAllergies();
}

async function handleSignup() {
    const name = document.getElementById("signup-name").value.trim();
    const pw = document.getElementById("signup-pw").value.trim();
    if (!name || !pw) return alert("입력 정보를 확인하세요.");

    if (window.grecaptcha && signupWidgetId !== null) {
        if (!grecaptcha.getResponse(signupWidgetId)) {
            return alert('"로봇이 아닙니다"를 체크해주세요.');
        }
    }

    const hashed = await hashPassword(pw);
    const { error } = await _supabase.from('users').insert([{ name, pw: hashed, allergies: selectedSignupAllergies, favorites:, ratings: {} }]);
    if (error) {
        if (window.grecaptcha && signupWidgetId !== null) grecaptcha.reset(signupWidgetId);
        return alert("가입 실패: " + error.message);
    }
    alert("가입 성공! 이제 로그인해주세요.");
    openModal('login');
}

async function handleLogin() {
    const name = document.getElementById("login-name").value.trim();
    const pw = document.getElementById("login-pw").value.trim();
    if (!name || !pw) return alert("입력 정보를 확인하세요.");

    if (window.grecaptcha && loginWidgetId !== null) {
        if (!grecaptcha.getResponse(loginWidgetId)) {
            return alert('"로봇이 아닙니다"를 체크해주세요.');
        }
    }

    const { data: user } = await _supabase.from('users').select('*').eq('name', name).maybeSingle();
    if (!user || user.pw !== await hashPassword(pw)) {
        if (window.grecaptcha && loginWidgetId !== null) grecaptcha.reset(loginWidgetId);
        return alert("정보가 일치하지 않습니다.");
    }
    currentUser = user; localStorage.setItem("snackUser", name);
    closeModal(); updateUI();
}

/* --- [4. 기능 로직] --- */
function updateUI() {
    if (currentUser) {
        document.getElementById("auth-menu").style.display = "none";
        document.getElementById("user-menu").style.display = "flex";
        document.getElementById("header-user-name").innerText = `👤 ${currentUser.name}님`;
        document.getElementById("user-section").style.display = "block";
        document.getElementById("welcome-msg").innerText = `${currentUser.name}님, 오늘 뭐 먹을까요?`;
        document.getElementById("allergy-list").innerHTML = currentUser.allergies.map(a => `<span class="gh-chip active">🚫 ${a}</span>`).join('');
    }
    renderSnacks();
}

function renderSnacks() {
    const list = document.getElementById("snack-list");
    if(!list) return;
    list.innerHTML = "";
    
    const filtered = snackNames.filter(s => {
        if (currentUser && currentUser.allergies.some(a => s.allergies.includes(a))) return false;
        if (showFavOnly && currentUser && !currentUser.favorites.includes(s.name)) return false;
        return currentCategory === "all" || s.cat === currentCategory;
    });

    filtered.forEach(s => {
        const isFav = currentUser && currentUser.favorites.includes(s.name);
        const li = document.createElement("li");
        li.className = "gh-snack-item";
        li.innerHTML = `
            <span onclick="openSnackModal('${s.name}')" style="cursor:pointer; font-weight:800;">${s.name}</span>
            <button class="gh-fav-star ${isFav ? 'on' : ''}" onclick="addFavorite('${s.name}')">${isFav ? '⭐' : '☆'}</button>
        `;
        list.appendChild(li);
    });
}

function toggleFavorites() {
    if (!currentUser) return alert("로그인 후 이용 가능합니다.");
    showFavOnly = !showFavOnly;
    const btn = document.getElementById("fav-toggle-btn");
    if(btn) btn.innerText = showFavOnly ? "👀 전체 간식 보기" : "⭐ 즐겨찾기 목록만 보기";
    renderSnacks();
}

function pickRandom() {
    const items = Array.from(document.querySelectorAll(".gh-snack-item span")).map(el => el.innerText);
    if (!items.length) return alert("간식이 없습니다.");
    const picked = items[Math.floor(Math.random() * items.length)];
    document.getElementById("result").innerHTML = `
        <div style="font-size:0.9rem; color:#888; margin-bottom:5px;">🍪 오늘의 추천!</div>
        <div style="color:var(--gh-primary); font-size:clamp(1.25rem, 4vw, 1.5rem); font-weight:800;">[ ${picked} ]</div>
    `;
}

async function addFavorite(name) {
    if (!currentUser) return alert("로그인이 필요한 기능입니다.");
    const idx = currentUser.favorites.indexOf(name);
    idx > -1 ? currentUser.favorites.splice(idx, 1) : currentUser.favorites.push(name);
    
    const { error } = await _supabase.from('users').update({ favorites: currentUser.favorites }).eq('name', currentUser.name);
    if (error) alert("즐겨찾기 업데이트 실패");
    renderSnacks();
}

function setCategory(cat, e) {
    currentCategory = cat;
    document.querySelectorAll(".gh-tab-btn").forEach(b => b.classList.remove("active"));
    if(e) e.target.classList.add("active");
    renderSnacks();
}

function openSnackModal(name) {
    activeSnackName = name;
    document.getElementById("detail-snack-name").innerText = name;
    const snackObj = snackNames.find(s => s.name === name);
    const infoEl = document.getElementById("detail-snack-allergies");
    if (infoEl && snackObj) {
        infoEl.innerHTML = snackObj.allergies.length
            ? `⚠️ 포함 알러지: <strong>${snackObj.allergies.join(', ')}</strong>`
            : `✅ 등록된 주요 알러지 성분이 없습니다.`;
    }
    document.getElementById("snack-detail-modal").style.display = "flex";
}

function closeSnackModal() { document.getElementById("snack-detail-modal").style.display = "none"; }
function logout() { localStorage.removeItem("snackUser"); location.reload(); }

window.onload = async () => {
    const saved = localStorage.getItem("snackUser");
    if (saved && _supabase) {
        const { data } = await _supabase.from('users').select('*').eq('name', saved).maybeSingle();
        if (data) { currentUser = data; updateUI(); }
    } else { 
        renderSnacks(); 
    }
};
