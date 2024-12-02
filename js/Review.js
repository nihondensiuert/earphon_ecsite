$(document).ready(function() {
    // 리뷰 데이터
    const reviews = {
        new: [
            {
                image: 'https://placehold.co/600x400/f5f5f5/666666?text=Review+1',
                brand: 'Water wave',
                name: 'K8000 [HI-M4CSS]',
                subtitle: 'パワータイプ!!',
                text: 'Skullcandyから発売されたアクティブコレクション『Push Play Active』をご紹介します！',
                tags: ['ロック', 'ジャズ', 'EDM', 'HIPHOP', 'アコースティック', 'クラシック', '低音マシマシ', 'おしゃれ', 'レトロ'],
                reviewLink: 'Rank.html',
                product: {
                    image: 'https://placehold.co/60x60/f5f5f5/666666?text=Product',
                    brand: 'Water wave',
                    model: 'K8000 [HI-M4CSS]',
                    price: '12,000',
                    productLink: 'Shop.html'
                }
            },
            {
                image: 'https://placehold.co/600x400/f5f5f5/666666?text=Review+2',
                brand: 'SONY',
                name: 'WF-1000XM5',
                subtitle: '最新フラッグシップ!!',
                text: 'SONYの新完全ワイヤレスイヤホン『WF-1000XM5』の魅力をご紹介します！',
                tags: ['ワイヤレス', 'ノイズキャンセリング', 'ハイレゾ', 'おしゃれ', 'コンパクト'],
                reviewLink: 'Rank.html',
                product: {
                    image: 'https://placehold.co/60x60/f5f5f5/666666?text=Product',
                    brand: 'SONY',
                    model: 'WF-1000XM5',
                    price: '39,800',
                    productLink: 'Shop.html'
                }
            },
            {
                image: 'https://placehold.co/600x400/f5f5f5/666666?text=Review+3',
                brand: 'FiiO',
                name: 'FH9',
                subtitle: '高解像度サウンド!!',
                text: 'FiiOの新フラッグシップIEM『FH9』の音質と装着感をレビューします！',
                tags: ['ハイレゾ', 'バランス接続', '高解像度', 'プロ仕様', '音場が広い'],
                reviewLink: 'Rank.html',
                product: {
                    image: 'https://placehold.co/60x60/f5f5f5/666666?text=Product',
                    brand: 'FiiO',
                    model: 'FH9',
                    price: '89,800',
                    productLink: 'Shop.html'
                }
            }
        ],
        popular: [
            {
                image: 'https://placehold.co/600x400/f5f5f5/666666?text=Popular+1',
                brand: 'SONY',
                name: 'WH-1000XM5',
                subtitle: '最の遮音性!!',
                text: 'SONYの最新フラッグシップモデル『WH-1000XM5』の魅力をご紹介します！',
                tags: ['ワイヤレス', 'ノイズキャンセリング', 'ハイレゾ', 'マルチポイント', 'おしゃれ'],
                reviewLink: 'Rank.html',
                product: {
                    image: 'https://placehold.co/60x60/f5f5f5/666666?text=Product',
                    brand: 'SONY',
                    model: 'WH-1000XM5',
                    price: '42,000',
                    productLink: 'Shop.html'
                }
            },
            {
                image: 'https://placehold.co/600x400/f5f5f5/666666?text=Popular+2',
                brand: 'Apple',
                name: 'AirPods Pro 2',
                subtitle: '完璧な統合!!',
                text: 'Apple純正の最新ワイヤレスイヤホン『AirPods Pro 2』の使用感をレビュー！',
                tags: ['ワイヤレス', 'アクティブノイズキャンセリング', '防水', 'iPhone連携', '便利'],
                reviewLink: 'Rank.html',
                product: {
                    image: 'https://placehold.co/60x60/f5f5f5/666666?text=Product',
                    brand: 'Apple',
                    model: 'AirPods Pro 2',
                    price: '35,800',
                    productLink: 'Shop.html'
                }
            },
            {
                image: 'https://placehold.co/600x400/f5f5f5/666666?text=Popular+3',
                brand: 'SENNHEISER',
                name: 'HD 660S2',
                subtitle: '音の細部まで!!',
                text: 'ゼンハイザーの新定番『HD 660S2』のサウンドクオリティを徹底解説！',
                tags: ['オープン型', 'スタジオ', 'リファレンス', '解像度', 'プロ仕様'],
                reviewLink: 'Rank.html',
                product: {
                    image: 'https://placehold.co/60x60/f5f5f5/666666?text=Product',
                    brand: 'SENNHEISER',
                    model: 'HD 660S2',
                    price: '54,800',
                    productLink: 'Shop.html'
                }
            }
        ]
    };

    // 리뷰 카드 HTML 생성 함수 수정
    function createReviewCard(review) {
        return `
            <article class="review-card">
                <a href="${review.reviewLink}" class="review-link">
                    <div class="review-image">
                        <img src="${review.image}" alt="${review.name}">
                    </div>
                    <div class="review-content">
                        <div class="review-header">
                            <div class="review-brand">${review.brand}</div>
                            <h3 class="review-product-name">${review.name}</h3>
                        </div>
                        <h4 class="review-subtitle">${review.subtitle}</h4>
                        <p class="review-text">${review.text}</p>
                        <div class="review-tags">
                            ${review.tags.map(tag => `<span class="review-tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </a>
                <div class="review-product">
                    <a href="${review.product.productLink}" class="review-product-link">
                        <img src="${review.product.image}" alt="${review.product.model}">
                        <div class="review-product-info">
                            <div class="review-product-brand">${review.product.brand}</div>
                            <div class="review-product-model">${review.product.model}</div>
                            <div class="review-product-price">¥${review.product.price}<span class="review-tax">税込</span></div>
                        </div>
                    </a>
                    <button class="review-favorite-btn">
                        <img src="img/heart-regular.svg" alt="お気に入り">
                    </button>
                </div>
            </article>
        `;
    }

    // 초기 리뷰 렌더링
    const $reviewGrid = $('.review-grid');
    reviews.new.forEach(review => {
        $reviewGrid.append(createReviewCard(review));
    });

    // 리뷰 탭 클릭 이벤트
    $('.review-tab-button').on('click', function() {
        $('.review-tab-button').removeClass('active');
        $(this).addClass('active');
        
        // 탭에 따른 리뷰 렌더링
        const category = $(this).text() === '新着' ? 'new' : 'popular';
        $reviewGrid.empty();
        reviews[category].forEach(review => {
            $reviewGrid.append(createReviewCard(review));
        });
    });

    // 좋아요 버튼 클릭 이벤트 수정
    $(document).on('click', '.review-favorite-btn', function(e) {  // 클래스명 수정
        e.preventDefault();
        e.stopPropagation();
        
        const $btn = $(this);
        const $icon = $btn.find('img');
        const isFavorite = $icon.attr('src').includes('regular');
        
        // 버튼 상태 토글
        $btn.toggleClass('active');
        
        if (isFavorite) {
            // 빨간색 하트로 변경
            $icon.attr('src', 'img/heart-solid.svg')
                 .css('filter', 'invert(27%) sepia(91%) saturate(7085%) hue-rotate(355deg) brightness(105%) contrast(112%)');
        } else {
            // 기본 하트로 변경
            $icon.attr('src', 'img/heart-regular.svg')
                 .css('filter', 'none');
        }
    });
}); 