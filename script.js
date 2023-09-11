// ========== MENU BAR TOGGLE ==========
const navMenu = document.getElementById('nav_menu'),
        navToggle = document.getElementById('nav_toggle'),
        navClose = document.getElementById('nav_close');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show_menu');
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show_menu');
    })
}

// ========== AUTO-HIDE MENU BAR ==========


// ========== SCROLL UP BUTTON ==========


// ========== other additional ideas for functionality/effects ==========