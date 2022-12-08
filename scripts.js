//Selectors Creator
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileIconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartMenu = document.querySelector('#ShoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailAside = document.querySelector('#productDetail');
const productDetailAsideClose = document.querySelector('.product-detail-close');

//show de menu
menuEmail.addEventListener('click', toggleDesktopMenu);
mobileIconMenu.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click',toggleShoppingCart);
productDetailAsideClose.addEventListener('click',closeProductDetailAside);

function toggleDesktopMenu (){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isShoppingCartMenuClosed = shoppingCartMenu.classList.contains('inactive');
    const isAsideProductDetailClosed = productDetailAside.classList.contains('inactive');

    if(!isShoppingCartMenuClosed){
        shoppingCartMenu.classList.add('inactive');
    }else if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }else if (!isAsideProductDetailClosed){
        productDetailAside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isdesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isShoppingCartMenuClosed = shoppingCartMenu.classList.contains('inactive');
    const isAsideProductDetailClosed = productDetailAside.classList.contains('inactive');

    if(!isShoppingCartMenuClosed){
        shoppingCartMenu.classList.add('inactive');
    }else if (!isdesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }else if (!isAsideProductDetailClosed){
        productDetailAside.classList.add('inactive');
    }


    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isdesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isAsideProductDetailClosed = productDetailAside.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }else if (!isdesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }else if (!isAsideProductDetailClosed){
        productDetailAside.classList.add('inactive');
    }

    shoppingCartMenu.classList.toggle('inactive');
}

function openProductDetailAside(){

    shoppingCartMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');

    productDetailAside.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailAside.classList.add('inactive');
}

//Creacion de bd de productos en hardCode
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Camera',
    price: 350,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'TV',
    price: 480,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts (array){
    for (product of array){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click',openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info'); 
        
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = `$ ${product.price}`;
        const productName = document.createElement('p');
        productName.innerText = `${product.name}`;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);    
    }
}
renderProducts(productList);
