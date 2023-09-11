const bar= document.querySelector(".bar");
const navlink= document.querySelector('.nav-link');


bar.addEventListner('click', () => {
navlink.classList.toggle('hide');
}); 