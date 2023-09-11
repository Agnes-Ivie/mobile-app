const bar= document.querySelector('.bar');
const navLink = document.querySelector('.nav-link');

bar.addEventListener('click', () => {
  navLink.classList.toggle('nav-link');
});
