const btnOpenMenu = document.getElementById('btn-menu');
const btnCloseMenu = document.getElementById('btn-close-menu');
const menuMain = document.querySelector('.modal-menu');

function cbOpenClose(element, display, left) {
    element.style.display = display;
    element.style.left = left;
}

btnOpenMenu.addEventListener('click', () => {
    cbOpenClose(menuMain, 'block', '0')
});

btnCloseMenu.addEventListener('click',() => {
    cbOpenClose(menuMain, 'none', '110vh')
});