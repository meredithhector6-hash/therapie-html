document.addEventListener('DOMContentLoaded', () => {

  // ===== HAMBURGER =====
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('open');
      }
    });
  }

  // ===== PROTECTION DES PAGES =====
  if (!window.location.pathname.includes('login.html')) {
    if (sessionStorage.getItem('connecte') !== 'true') {
      window.location.href = 'login.html';
    }
  }

  // ===== CONNEXION =====
  const btnLogin = document.getElementById('btn-login');
  if (btnLogin) {
    btnLogin.addEventListener('click', handleLogin);
  }

  // ===== SUJETS VERROUILLÉS =====
  // Pour débloquer un sujet, ajoute son numéro ici
  const sujetsDebloques = [1];

  const liens = document.querySelectorAll('.sujet-lien');
  liens.forEach((lien) => {
    const numero = parseInt(lien.getAttribute('data-sujet'));
    if (!sujetsDebloques.includes(numero)) {
      lien.classList.add('sujet-bloque');
      lien.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Ce sujet n\'est pas encore disponible.');
      });
    }
  });

});

// ===== FONCTION CONNEXION =====
const UTILISATEUR = 'Sheldon';
const MOT_DE_PASSE = 'msmsh096@aqui';

function handleLogin() {
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();
  const erreur = document.getElementById('login-error');

  if (user === UTILISATEUR && pass === MOT_DE_PASSE) {
    sessionStorage.setItem('connecte', 'true');
    window.location.href = 'index.html';
  } else {
    erreur.style.display = 'block';
  }
}
