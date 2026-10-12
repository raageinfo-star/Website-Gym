const header = document.getElementById('header');
const menu   = document.getElementById('menu');

const links = [...document.querySelectorAll('.menu a:not(.signup)')];

const sections = links.map(a => document.querySelector(a.getAttribute('href')));

document.getElementById('burger').onclick = () => menu.classList.toggle('open');

document.querySelectorAll('.menu a').forEach(a =>
  a.addEventListener('click', () => menu.classList.remove('open'))
);

function onScroll() {

  header.classList.toggle('scrolled', scrollY > 60);

  const y = scrollY + 80;

  sections.forEach((s, i) => {
    if (s.offsetTop <= y && s.offsetTop + s.offsetHeight > y) {
      links.forEach(l => l.classList.remove('active'));
      links[i].classList.add('active');
    }
  });
}
addEventListener('scroll', onScroll);
onScroll();

const cTabs   = document.querySelectorAll('.c-tab');
const cPanels = document.querySelectorAll('.c-panel');

cTabs.forEach(tab => tab.addEventListener('click', () => {

  cTabs.forEach(x => x.classList.remove('active'));
  cPanels.forEach(p => p.classList.remove('active'));

  tab.classList.add('active');

  document.getElementById('cp' + tab.dataset.t).classList.add('active');
}));

const dayBtns = document.querySelectorAll('.day');
const tables  = document.querySelectorAll('table');

dayBtns.forEach(btn => btn.addEventListener('click', () => {
  dayBtns.forEach(x => x.classList.remove('active'));
  tables.forEach(t => t.classList.remove('active'));

  btn.classList.add('active');

  document.getElementById(btn.dataset.d).classList.add('active');
}));

document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  document.getElementById('status').textContent =
    'Thanks ' + name + ', your message was sent!';

  e.target.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();