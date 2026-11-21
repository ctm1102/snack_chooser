  /* Supabase 및 인증 보조 함수 */
  const SUPABASE_URL = 'https://tpbtjnqexwubctkurpqp.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_ShRhGoTEr207ESTQdghLBQ_ebkwaw1';
  const _supabase = window.supabase?.createClient(SUPABASE_URL, SUPABASE_KEY);

  let currentUser = null;
  let currentProfile = null;
  let selectedSignupAllergies = [];

  function usernameToEmail(username) {
      const safe = String(username).trim().toLowerCase().replace(/[^a-z0-9_-]/g, '-');
      return `${safe}@snack.local`;
  }

  function openModal(type) {
      selectedSignupAllergies = [];
      document.getElementById("auth-modal").style.display = "flex";
      document.getElementById("login-form").style.display = type === 'login' ? 'block' : 'none';
      document.getElementById("signup-form").style.display = type === 'signup' ? 'block' : 'none';
      document.getElementById("modal-title").innerText = type === 'login' ? '로그인' : '회원가입';
      if (type === 'signup') renderSignupAllergies();
  }

  function closeModal() {
      document.getElementById("auth-modal").style.display = "none";
      selectedSignupAllergies = [];
  }

  function renderSignupAllergies() {
      const container = document.getElementById("signup-allergy-list");
      if (!container) return;
      container.innerHTML = allergyTypes.map(a => `
          <button type="button" class="gh-chip ${selectedSignupAllergies.includes(a) ? 'active' : ''}" onclick="toggleSignupAllergy('${a.replace(/'/g, "\\'")}')">
              ${selectedSignupAllergies.includes(a) ? '🚫 ' : ''}${a}
          </button>
      `).join('');
  }

  function toggleSignupAllergy(a) {
      selectedSignupAllergies.includes(a)
          ? selectedSignupAllergies = selectedSignupAllergies.filter(v => v !== a)
          : selectedSignupAllergies.push(a);
      renderSignupAllergies();
  }

  async function loadProfile(user) {
      const { data, error } = await _supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .maybeSingle();

      if (error) {
          alert("프로필을 불러오지 못했습니다: " + error.message);
          return;
      }

      currentProfile = data;
      currentUser = {
          name: data?.username || user.user_metadata?.username || user.email.split('@')[0]
      };
      updateUI();
  }

  async function handleSignup() {
      const name = document.getElementById("signup-name").value.trim();
      const pw = document.getElementById("signup-pw").value;
      if (!name || !pw) return alert("아이디와 비밀번호를 입력해주세요.");
      if (pw.length < 6) return alert("비밀번호는 6자 이상이어야 합니다.");

      const { data, error } = await _supabase.auth.signUp({
          email: usernameToEmail(name),
          password: pw,
          options: { data: { username: name } }
      });

      if (error) return alert("가입 실패: " + error.message);
      if (!data.user) return alert("가입은 되었지만 로그인 세션을 확인할 수 없습니다.");

      const { error: profileError } = await _supabase.from('profiles').upsert({
          id: data.user.id,
          username: name,
          allergies: selectedSignupAllergies,
          favorites: [],
          ratings: {}
      });

      if (profileError) return alert("알레르지 정보 저장 실패: " + profileError.message);

      selectedSignupAllergies = [];
      alert("가입이 완료되었습니다!");
      closeModal();
      await loadProfile(data.user);
  }

  async function handleLogin() {
      const name = document.getElementById("login-name").value.trim();
      const pw = document.getElementById("login-pw").value;
      if (!name || !pw) return alert("아이디와 비밀번호를 입력해주세요.");

      const { data, error } = await _supabase.auth.signInWithPassword({
          email: usernameToEmail(name),
          password: pw
      });

      if (error) return alert("로그인 실패: " + error.message);

      document.getElementById("login-name").value = "";
      document.getElementById("login-pw").value = "";
      closeModal();
      await loadProfile(data.user);
  }

  async function logout() {
      await _supabase.auth.signOut();
      currentUser = null;
      currentProfile = null;
      showFavOnly = false;
      location.reload();
  }
