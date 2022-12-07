const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

//show de menu
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu (){
    desktopMenu.classList.toggle('inactive');
}
