const menuIcon = document.getElementById('menu-icon');
const header = document.querySelector('header');

menuIcon.addEventListener('click', () => {
    header.classList.toggle('menu-open');
});
