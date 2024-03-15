const menu = document.querySelector('.fa-bars');
const items = document.querySelector('.nav-items');

menu.addEventListener('click', () => {
  items.classList.toggle('active');
});

items.addEventListener('click', () => {
  items.classList.toggle('active');
});
