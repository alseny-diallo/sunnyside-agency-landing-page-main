const menuHamburger = document.querySelector('.mobile-nav-toggle');
const navbar = document.querySelector('.navbar');
menuHamburger.addEventListener('click', (event) => {
  event.preventDefault();
  navbar.classList.toggle('mobile-navbar');
});
