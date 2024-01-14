let menu = document.querySelector('#menu-icon');
let board = document.querySelector('.board');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    board.classList.toggle('open');

};
const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', {delay: 200, origin: 'top'});