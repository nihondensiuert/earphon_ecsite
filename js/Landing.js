document.addEventListener('DOMContentLoaded', function() {
    // 탭 기능 초기화 함수
    function initTabs(tabSelector, contentSelector, activeClass = 'active') {
        const tabs = document.querySelectorAll(tabSelector);
        const contents = document.querySelectorAll(contentSelector);

        if (!tabs.length || !contents.length) return;

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // 모든 탭과 컨텐츠에서 active 클래스 제거
                tabs.forEach(t => t.classList.remove(activeClass));
                contents.forEach(c => c.classList.remove(activeClass));

                // 클릭된 탭과 해당 컨텐츠에 active 클래스 추가
                tab.classList.add(activeClass);
                const targetContent = document.querySelector(`${contentSelector}[data-content="${tab.dataset.tab}"]`);
                if (targetContent) {
                    targetContent.classList.add(activeClass);
                }
            });
        });
    }

    // 캠페인 탭
    initTabs('.campaign__tab', '.campaign__items');

    // 구 방법 탭
    initTabs('.purchase-methods__tab', '.purchase-methods__content');

    // 고가매입 리스트 섹션
    initTabs('.buyback-list__tab', '.buyback-list__content');

    // 검색 기능 구현
    const searchInput = document.getElementById('searchInput');
    const searchSuggestions = document.getElementById('searchSuggestions');

    // 가상의 제품 데이터 확장
    const products = [
        {
            brand: 'SONY',
            name: 'WH-1000XM4',
            price: '¥15,000',
            image: 'https://placehold.co/40x40?text=SONY'
        },
        {
            brand: 'Apple',
            name: 'AirPods Pro (2nd generation)',
            price: '¥20,000',
            image: 'https://placehold.co/40x40?text=APP'
        },
        {
            brand: 'Bose',
            name: 'QuietComfort 45',
            price: '¥18,000',
            image: 'https://placehold.co/40x40?text=BOSE'
        },
        {
            brand: 'Sennheiser',
            name: 'MOMENTUM 4 Wireless',
            price: '¥22,000',
            image: 'https://placehold.co/40x40?text=SENN'
        },
        {
            brand: 'Audio-Technica',
            name: 'ATH-M50xBT2',
            price: '¥12,000',
            image: 'https://placehold.co/40x40?text=AT'
        },
        // 추가 데이터
        {
            brand: 'SONY',
            name: 'WF-1000XM4',
            price: '¥16,000',
            image: 'https://placehold.co/40x40?text=SONY'
        },
        {
            brand: 'Apple',
            name: 'AirPods Max',
            price: '¥45,000',
            image: 'https://placehold.co/40x40?text=APP'
        }
    ];

    if (searchInput && searchSuggestions) {
        searchInput.addEventListener('input', function(e) {
            const value = e.target.value.toLowerCase().trim();
            
            if (value.length > 0) {
                // 검색어와 일치하는 제품 필터링
                const filteredProducts = products.filter(product => 
                    product.name.toLowerCase().includes(value) || 
                    product.brand.toLowerCase().includes(value)
                );

                // 검색 결과 표시
                if (filteredProducts.length > 0) {
                    searchSuggestions.innerHTML = filteredProducts.map(product => `
                        <div class="search-suggestion-item">
                            <img src="${product.image}" alt="${product.name}" class="suggestion-image">
                            <div class="suggestion-info">
                                <div class="suggestion-brand">${product.brand}</div>
                                <div class="suggestion-name">${product.name}</div>
                            </div>
                            <div class="suggestion-price">${product.price}</div>
                        </div>
                    `).join('');
                    searchSuggestions.style.display = 'block';
                } else {
                    searchSuggestions.style.display = 'none';
                }
            } else {
                searchSuggestions.style.display = 'none';
            }
        });

        // 검색창 외부 클릭시 suggestion 닫기
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
                searchSuggestions.style.display = 'none';
            }
        });

        // 검색 제안 항목 클릭 시 처리
        searchSuggestions.addEventListener('click', function(e) {
            const suggestionItem = e.target.closest('.search-suggestion-item');
            if (suggestionItem) {
                const productName = suggestionItem.querySelector('.suggestion-name').textContent;
                searchInput.value = productName;
                searchSuggestions.style.display = 'none';
            }
        });
    }

    // 판매 가이드 탭
    initTabs('.sales-guide__tab', '.sales-guide__content');

    // FAQ 아코디언 기능
    document.querySelectorAll('.faq__question').forEach(button => {
        button.addEventListener('click', () => {
            const expanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !expanded);
        });
    });

    // 매장 호버 효과
    const storeItems = document.querySelectorAll('.store-item');
    const storeImages = document.querySelectorAll('.stores__image img');

    storeItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // 모든 이미지 비활성화
            storeImages.forEach(img => img.classList.remove('active'));
            // 해당 매장의 이미지만 활성화
            const targetImage = document.querySelector(`.stores__image img[data-store="${item.dataset.store}"]`);
            if (targetImage) {
                targetImage.classList.add('active');
            }
        });
    });

    // 매장 리스트에서 마우스가 벗어났을 때 첫 번째 이미지로 돌아가기
    const storesList = document.querySelector('.stores__list');
    storesList.addEventListener('mouseleave', () => {
        storeImages.forEach(img => img.classList.remove('active'));
        storeImages[0].classList.add('active');
    });
});

