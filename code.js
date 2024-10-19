const nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
    nav.classList.toggle("sticky", window.scrollY > 1);
});

let hamburger = document.querySelector('#iconnav');
let navbar = document.querySelector('ul');

hamburger.onclick = () => {
    hamburger.classList.toggle('uil-times');
    navbar.classList.toggle('open');
}

window.onscroll = () => {
    hamburger.classList.remove('uil-times');
    navbar.classList.remove('open');
}
