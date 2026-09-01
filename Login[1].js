const strings = {
  en: {
    title: "EquipShare Hub",
    subtitle: "Connecting Farmers with Equipment Owners",
    signin: "Sign In",
    signup: "Sign Up",
    lang: "తెలుగు"
  },
  te: {
    title: "ఈక్విప్‌షేర్ హబ్",
    subtitle: "రైతులను పరికరాల యజమానులతో కలుపుతోంది",
    signin: "సైన్ ఇన్",
    signup: "సైన్ అప్",
    lang: "English"
  }
};

let currentLang = 'en';
let currentTab = 'signin';

const langToggle = document.getElementById('langToggle');
const titleText = document.getElementById('titleText');
const subtitleText = document.getElementById('subtitleText');
const signInTab = document.getElementById('signInTab');
const signUpTab = document.getElementById('signUpTab');
const submitBtn = document.getElementById('submitBtn');
const nameField = document.getElementById('nameField');
const phoneField = document.getElementById('phoneField');
const authForm = document.getElementById('authForm');

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'te' : 'en';
  updateText();
});

function switchTab(tab) {
  currentTab = tab;
  signInTab.classList.toggle('active', tab === 'signin');
  signUpTab.classList.toggle('active', tab === 'signup');
  nameField.classList.toggle('hidden', tab !== 'signup');
  phoneField.classList.toggle('hidden', tab !== 'signup');
  updateText();
}

function updateText() {
  const s = strings[currentLang];
  titleText.textContent = s.title;
  subtitleText.textContent = s.subtitle;
  signInTab.textContent = s.signin;
  signUpTab.textContent = s.signup;
  submitBtn.textContent = currentTab === 'signin' ? s.signin : s.signup;
  langToggle.textContent = s.lang;
}

authForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('emailField').value;
  const password = document.getElementById('passwordField').value;
window.location.href = "../Html/role.html";
  // Demo credential check
  const demoUsers = {
    'ravi@example.com': { password: 'owner123', role: 'owner' },
    'arjun@example.com': { password: 'farm123', role: 'farmer' }
  };

  if (currentTab === 'signin') {
    const user = demoUsers[email];
    if (user && user.password === password) {
      alert(`Signed in as ${user.role}!`);
    }
  }
});
