const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon =document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');


menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        
        shoppingCartContainer.classList.add('inactive');  
    }    
    desktopMenu.classList.toggle('inactive');//ejecuta y quita o pone la clase
    
}
function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');  
    }
closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');   
}
//Pregunto si el carrito esta cerrado.
function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isMenuDesktop =desktopMenu.classList.contains('inactive');    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');  
    }
    //si esta abierto el email menu  cierra el otro
    if(!isMenuDesktop){
        desktopMenu.classList.add('inactive');  
    }
    
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');    
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');  
    }
    shoppingCartContainer.classList.toggle('inactive');   
}
function openProductDetailAside(){
   shoppingCartContainer.classList  .add('inactive')
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside(){
productDetailContainer.classList.add('inactive');
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
function renderProducts(arr){
    for (product of arr ){
        const productCard= document.createElement('div');//crea elemento por elemento
        productCard.classList.add('product-card');
            
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
     //product = {name,price,img}    
        
        const productInfo= document.createElement('div');//crea elemento por elemento
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText='$' + product.price;
        const productName = document.createElement('p');
        productName.innerText=product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
        
        productInfo.appendChild(productInfoDiv);
        
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
        
    }
}
renderProducts(productList);