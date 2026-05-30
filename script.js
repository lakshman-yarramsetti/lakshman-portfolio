const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.site-nav a');
const copyEmail = document.querySelector('#copyEmail');
const toast = document.querySelector('#toast');
const email = 'lakshman.yarramsetti.dev@gmail.com';

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2200);
}

navToggle?.addEventListener('click', () => {
  const isOpen = document.body.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

copyEmail?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(email);
    showToast('Email copied');
  } catch {
    showToast(email);
  }
});
