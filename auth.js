/* Supabase Auth integration. Passwords are handled and hashed by Supabase Auth; do not store or hash them in the browser. */
(() => {
  'use strict';

  const favoritesKey = (userId) => `snackChooserFavorites:${userId}`;
  let selectedAllergies = [];
  let authReady = false;

  function message(text, isError = false) {
    const el = document.getElementById('auth-message');
    if (!el) return;
    el.textContent = text;
    el.classList.toggle('is-error', isError);
  }

  function readFavorites(userId) {
    try {
      const value = JSON.parse(localStorage.getItem(favoritesKey(userId)) || '[]');
      return Array.isArray(value) ? value.filter((item) => typeof item === 'string') : [];
    } catch {
      return [];
    }
  }

  function renderSignupAllergies() {
    const container = document.getElementById('signup-allergy-list');
    if (!container) return;
    container.replaceChildren();
    (typeof allergyTypes !== 'undefined' ? allergyTypes : []).forEach((allergy) => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = `gh-chip${selectedAllergies.includes(allergy) ? ' active' : ''}`;
      chip.setAttribute('aria-pressed', String(selectedAllergies.includes(allergy)));
      chip.textContent = `${selectedAllergies.includes(allergy) ? '🚫 ' : ''}${allergy}`;
      chip.addEventListener('click', () => {
        selectedAllergies = selectedAllergies.includes(allergy)
          ? selectedAllergies.filter((item) => item !== allergy)
          : [...selectedAllergies, allergy];
        renderSignupAllergies();
      });
      container.appendChild(chip);
    });
  }

  function renderAuthenticatedUser(authUser) {
    const metadata = authUser?.user_metadata || {};
    if (!authUser) {
      currentUser = null;
      document.getElementById('auth-menu').style.display = 'flex';
      document.getElementById('user-menu').style.display = 'none';
      document.getElementById('user-section').style.display = 'none';
      renderSnacks();
      return;
    }

    const allergies = Array.isArray(metadata.allergies)
      ? metadata.allergies.filter((item) => typeof item === 'string')
      : [];
    currentUser = {
      id: authUser.id,
      email: authUser.email || '',
      name: typeof metadata.name === 'string' && metadata.name.trim()
        ? metadata.name.trim()
        : (authUser.email || '사용자').split('@')[0],
      allergies,
      favorites: readFavorites(authUser.id)
    };
    document.getElementById('auth-menu').style.display = 'none';
    document.getElementById('user-menu').style.display = 'flex';
    document.getElementById('header-user-name').textContent = `👤 ${currentUser.name}님`;
    document.getElementById('user-section').style.display = 'block';
    document.getElementById('welcome-msg').textContent = `${currentUser.name}님, 오늘 뭐 먹을까요?`;

    const allergyList = document.getElementById('allergy-list');
    allergyList.replaceChildren();
    allergies.forEach((allergy) => {
      const chip = document.createElement('span');
      chip.className = 'gh-chip active';
      chip.textContent = `🚫 ${allergy}`;
      allergyList.appendChild(chip);
    });
    renderSnacks();
  }

  window.openModal = (type) => {
    const signingUp = type === 'signup';
    document.getElementById('auth-modal').style.display = 'flex';
    document.getElementById('login-form').style.display = signingUp ? 'none' : 'block';
    document.getElementById('signup-form').style.display = signingUp ? 'block' : 'none';
    document.getElementById('modal-title').textContent = signingUp ? '회원가입' : '로그인';
    message('');
    if (signingUp) renderSignupAllergies();
    const field = document.getElementById(signingUp ? 'signup-name' : 'login-email');
    field?.focus();
  };

  window.closeModal = () => {
    document.getElementById('auth-modal').style.display = 'none';
    message('');
  };

  window.handleSignup = async () => {
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim().toLowerCase();
    const password = document.getElementById('signup-pw').value;
    if (!name || name.length > 50 || !email || password.length < 8) {
      message('이름, 이메일을 확인하고 비밀번호를 8자 이상 입력해주세요.', true);
      return;
    }
    if (!window._supabase) {
      message('Supabase에 연결할 수 없습니다. 잠시 후 다시 시도해주세요.', true);
      return;
    }
    const button = document.querySelector('#signup-form .gh-btn-submit');
    button.disabled = true;
    message('가입 처리 중입니다.');
    try {
      const { data, error } = await _supabase.auth.signUp({
        email,
        password,
        options: { data: { name, allergies: selectedAllergies } }
      });
      if (error) throw error;
      selectedAllergies = [];
      document.getElementById('signup-pw').value = '';
      if (data.session) {
        window.closeModal();
        message('');
      } else {
        message('가입 요청이 완료되었습니다. 이메일 인증을 마친 뒤 로그인해주세요.');
      }
    } catch (error) {
      message('회원가입에 실패했습니다. 이메일이 이미 등록되었는지, Supabase 설정을 확인해주세요.', true);
    } finally {
      button.disabled = false;
    }
  };

  window.handleLogin = async () => {
    const email = document.getElementById('login-email').value.trim().toLowerCase();
    const password = document.getElementById('login-pw').value;
    if (!email || !password) {
      message('이메일과 비밀번호를 입력해주세요.', true);
      return;
    }
    if (!window._supabase) {
      message('Supabase에 연결할 수 없습니다. 잠시 후 다시 시도해주세요.', true);
      return;
    }
    const button = document.querySelector('#login-form .gh-btn-submit');
    button.disabled = true;
    message('로그인 중입니다.');
    try {
      const { error } = await _supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      document.getElementById('login-pw').value = '';
      window.closeModal();
    } catch {
      message('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.', true);
    } finally {
      button.disabled = false;
    }
  };

  window.addFavorite = (name) => {
    if (!currentUser) {
      alert('즐겨찾기를 저장하려면 로그인해주세요.');
      return;
    }
    const favorites = new Set(currentUser.favorites);
    if (favorites.has(name)) favorites.delete(name);
    else favorites.add(name);
    currentUser.favorites = [...favorites];
    try {
      localStorage.setItem(favoritesKey(currentUser.id), JSON.stringify(currentUser.favorites));
      renderSnacks();
    } catch {
      alert('즐겨찾기를 저장할 수 없습니다. 브라우저 저장 공간을 확인해주세요.');
    }
  };

  window.logout = async () => {
    if (window._supabase) {
      const { error } = await _supabase.auth.signOut();
      if (error) alert('로그아웃에 실패했습니다. 다시 시도해주세요.');
    }
    currentUser = null;
    showFavOnly = false;
    const favoriteButton = document.getElementById('fav-toggle-btn');
    if (favoriteButton) favoriteButton.textContent = '⭐ 즐겨찾기 목록만 보기';
    renderAuthenticatedUser(null);
  };

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      window.closeModal();
      if (typeof closeSnackModal === 'function') closeSnackModal();
    }
  });

  window.addEventListener('DOMContentLoaded', async () => {
    if (!window._supabase) {
      message('Supabase SDK 또는 설정을 불러오지 못했습니다.', true);
      renderSnacks();
      return;
    }
    _supabase.auth.onAuthStateChange((_event, session) => {
      renderAuthenticatedUser(session?.user || null);
      authReady = true;
    });
    const { data, error } = await _supabase.auth.getSession();
    if (error) {
      renderAuthenticatedUser(null);
      return;
    }
    if (!authReady) renderAuthenticatedUser(data.session?.user || null);
  });
})();
