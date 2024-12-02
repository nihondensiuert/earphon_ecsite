document.addEventListener('DOMContentLoaded', function() {
    // 무료 배송 배너 닫기
    const shippingBanner = document.querySelector('.shipping-banner');
    const closeButton = document.querySelector('.shipping-banner__close');
    
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            shippingBanner.style.display = 'none';
        });
    }

    // 모바일 메뉴 토글
    const mobileMenuButton = document.querySelector('.mobile-menu__hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }

    // 검색 기능
    const searchButton = document.querySelector('.header__search-button');
    const searchInput = document.querySelector('.header__search-input');
    const searchSelect = document.querySelector('.header__search-select');
    
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const searchValue = searchInput.value;
            const searchCategory = searchSelect.value;
            console.log('검색 카테고리:', searchCategory);
            console.log('검색어:', searchValue);
        });
    }

    // 메인 메뉴 햄버거 버튼
    const mainMenuHamburger = document.querySelector('.main-menu__hamburger');
    const mainMenuItems = document.querySelector('.main-menu__items');
    
    if (mainMenuHamburger) {
        mainMenuHamburger.addEventListener('click', function() {
            mainMenuItems.classList.toggle('active');
        });
    }
});
