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
    const isAsideClosed = aside.classList.contains('inactive');

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

const productList = [];
//Trae 1 elemento con la funcion  push
productList.push({
    name: 'bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'mouse',
    price: 120,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRVltk4u8UwsQscH4xQ_kuGvMhRl-IrL6IGEi05hPpozKQjGf29ekNYKfLt9vCOwmOsms&usqp=CAU',
});
productList.push({
    name: 'teclado',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

//recorro el Array
for (produc of productList ){
    const productCard= document.createElement('div');//crea elemento por elemento
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src',product.image);
 //product = {name,price,img}    
    
    const productInfo= document.createElement('div');//crea elemento por elemento
    productCard.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText='$' + productPrice;
    const productName = document.createElement('p');
    productName.innerText='$' + productPrice;
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    image.setAttribute('src','./icons/bt_add_to_cart.svg');
}