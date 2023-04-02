function mobileMenu() {
    document.getElementById("menu-wrapper").style.visibility = "visible"
    document.getElementById("menu-wrapper").style.width = "100%"
}

function closeMenu() {
    document.getElementById("menu-wrapper").style.visibility = "hidden"
    document.getElementById("menu-wrapper").style.width = 0
}

function notCloseMenu(e) {
    e.stopPropagation();
}

const header = document.getElementById('nav-menu');
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 200) {
        header.classList.add('sticky');
        if (prevScrollPos > currentScrollPos) {
            header.classList.remove('sticky-leave');
        } else {
            header.classList.add('sticky-leave');
        }
        prevScrollPos = currentScrollPos;
    } else {
        header.classList.remove('sticky', 'sticky-leave');
    }
});