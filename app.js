

const header = document.querySelector('header');
const gym = document.querySelector('#gym-btn');
const cerrar = document.querySelector('#close-menu-btn');

gym.addEventListener('click', () => {
    header.classList.toggle('show-mobile-menu');
})


cerrar.addEventListener('click', () => {
    header.classList.remove('show-mobile-menu');
})