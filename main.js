const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){
    
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');  
    }
    
    desktopMenu.classList.toggle('inactive');//ejecuta y quita o pone la clase
    
}
function toggleMobileMenu(){
    const isAsideClosed = mobileMenu.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');  
    }
    mobileMenu.classList.toggle('inactive');  
}
//Pregunto si el carrito esta cerrado.
function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');  
    }
    aside.classList.toggle('inactive');
    
}