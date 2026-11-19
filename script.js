const menuButton = document.querySelector('.menu');
const nav = document.querySelector('nav');
menuButton.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
document.querySelectorAll('.expand').forEach(button => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    const isOpen = details.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
    button.querySelector('b').textContent = isOpen ? '−' : '＋';
    button.firstChild.textContent = isOpen ? 'Close case study ' : 'View case study ';
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
