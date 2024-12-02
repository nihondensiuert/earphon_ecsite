document.addEventListener('DOMContentLoaded', function() {
    // 랭킹 데이터
    const rankingData = [
        {
            id: 'k8000-1',
            brand: 'Water wave',
            name: 'K8000 [HI-M4CSS]',
            price: '12,000',
            rating: '4.9',
            reviews: '1,100',
            image: 'https://placehold.co/300x300/f5f5f5/666666?text=Earphone+1',
            link: 'shop.html'
        },
        {
            id: 'kapo-1',
            brand: 'Water wave',
            name: '[中古] Kapo 完全ワイヤレスイヤホン ミックス [TP...]',
            price: '12,000',
            rating: '4.9',
            reviews: '1,100',
            image: 'https://placehold.co/300x300/f5f5f5/666666?text=Earphone+2',
            link: 'shop.html'
        },
        {
            id: 'k8000-2',
            brand: 'Water wave',
            name: 'K8000 [HI-M4CSS]',
            price: '12,000',
            rating: '4.9',
            reviews: '1,100',
            image: 'https://placehold.co/300x300/f5f5f5/666666?text=Earphone+3',
            link: 'shop.html'
        },
        {
            id: 'kapo-2',
            brand: 'Water wave',
            name: '[中古] Kapo 完全ワイヤレスイヤホン ミックス [TP...]',
            price: '12,000',
            rating: '4.9',
            reviews: '1,100',
            image: 'https://placehold.co/300x300/f5f5f5/666666?text=Earphone+4',
            link: 'shop.html'
        },
        {
            id: 'kapo-3',
            brand: 'Water wave',
            name: '[中古] Kapo 完全ワイヤレスイヤホン ミックス [TP...]',
            price: '12,000',
            rating: '4.9',
            reviews: '1,100',
            image: 'https://placehold.co/300x300/f5f5f5/666666?text=Earphone+5',
            link: 'shop.html'
        },
        {
            id: 'k8000-3',
            brand: 'Water wave',
            name: 'K8000 [HI-M4CSS]',
            price: '12,000',
            rating: '4.9',
            reviews: '1,100',
            image: 'https://placehold.co/300x300/f5f5f5/666666?text=Earphone+6',
            link: 'shop.html'
        },
        {
            id: 'kapo-4',
            brand: 'Water wave',
            name: '[中古] Kapo 完全ワイヤレスイヤホン ミックス [TP...]',
            price: '12,000',
            rating: '4.9',
            reviews: '1,100',
            image: 'https://placehold.co/300x300/f5f5f5/666666?text=Earphone+7',
            link: 'shop.html'
        },
        {
            id: 'k8000-4',
            brand: 'Water wave',
            name: 'K8000 [HI-M4CSS]',
            price: '12,000',
            rating: '4.9',
            reviews: '1,100',
            image: 'https://placehold.co/300x300/f5f5f5/666666?text=Earphone+8',
            link: 'shop.html'
        },
        {
            id: 'kapo-5',
            brand: 'Water wave',
            name: '[中古] Kapo 完全ワイヤレスイヤホン ミックス [TP...]',
            price: '12,000',
            rating: '4.9',
            reviews: '1,100',
            image: 'https://placehold.co/300x300/f5f5f5/666666?text=Earphone+9',
            link: 'shop.html'
        },
        {
            id: 'kapo-6',
            brand: 'Water wave',
            name: '[中古] Kapo 完全ワイヤレスイヤホン ミックス [TP...]',
            price: '12,000',
            rating: '4.9',
            reviews: '1,100',
            image: 'https://placehold.co/300x300/f5f5f5/666666?text=Earphone+10',
            link: 'shop.html'
        }
    ];

    // ranking-section 생성 및 추가
    function createRankingSection() {
        const main = document.querySelector('main');
        const rankingSection = document.createElement('section');
        rankingSection.className = 'total-ranking';
        
        // HTML 구조 수정 - 하나의 row로 통합
        rankingSection.innerHTML = `
            <h2 class="total-ranking__title">総合ランキング</h2>
            <div class="total-ranking__grid">
                <div class="total-ranking__row">
                    ${rankingData.slice(0, 10).map((item, index) => createRankingItem(item, index + 1)).join('')}
                </div>
            </div>
            <div class="total-ranking__more">
                <button class="total-ranking__more-btn">すべて見る</button>
            </div>
        `;

        // 기존 ranking-section이 있다면 교체, 없다면 main 끝에 추가
        const existingRankingSection = document.querySelector('.total-ranking');
        if (existingRankingSection) {
            existingRankingSection.replaceWith(rankingSection);
        } else {
            main.appendChild(rankingSection);
        }

        // 좋아요 버튼 이벤트 리스너 추가
        addFavoriteButtonListeners(rankingSection);
    }

    // 랭킹 아이템 HTML 생성 함수
    function createRankingItem(item, rank) {
        return `
            <div class="total-ranking__item" data-rank="${rank}" onclick="location.href='${item.link}'">
                <span class="total-ranking__number">${rank}</span>
                <div class="total-ranking__image-wrap">
                    <img class="total-ranking__image" src="${item.image}" alt="${item.name}">
                    <button type="button" class="total-ranking__favorite-btn" onclick="event.stopPropagation();">
                        <img src="img/heart-regular.svg" alt="お気に入り">
                    </button>
                </div>
                <div class="total-ranking__info">
                    <div class="total-ranking__brand">${item.brand}</div>
                    <div class="total-ranking__name">${item.name}</div>
                    <div class="total-ranking__price-wrap">
                        <span class="total-ranking__price">¥${item.price}</span>
                        <span class="total-ranking__tax">税込</span>
                    </div>
                    <div class="total-ranking__rating">
                        <span class="total-ranking__points">${item.reviews}件 | ★ ${item.rating}</span>
                    </div>
                </div>
            </div>
        `;
    }

    // 상품 클릭 이벤트 처리 함수
    function handleProductClick(productId) {
        const product = rankingData.find(item => item.id === productId);
        if (product && product.link) {
            window.location.href = product.link;
        }
    }

    // 좋아요 버튼 이벤트 리스너 추가 함수
    function addFavoriteButtonListeners(section) {
        const favoriteButtons = section.querySelectorAll('.total-ranking__favorite-btn');
        
        favoriteButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                this.classList.toggle('active');
                
                const heartImg = this.querySelector('img');
                if (this.classList.contains('active')) {
                    heartImg.src = 'img/heart-solid.svg';
                    heartImg.style.filter = 'invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg) brightness(94%) contrast(117%)';
                } else {
                    heartImg.src = 'img/heart-regular.svg';
                    heartImg.style.filter = 'none';
                }
            });
        });
    }

    // 초기 랭킹 섹션 생성
    createRankingSection();
}); 