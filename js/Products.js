$(document).ready(function() {
    // 상품 데이터
    const products = {
        earphone: [
            {
                id: 'e1',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=Earphone+1',
                brand: 'Water wave',
                name: 'K8000 [HI-M4CSS]',
                price: '12,000',
                rating: '4.9',
                reviews: '1,100',
                link: '#'
            },
            {
                id: 'e2',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=Earphone+2',
                brand: 'Audio-Technica',
                name: 'ATH-IEX1',
                price: '15,800',
                rating: '4.7',
                reviews: '850',
                link: '#'
            },
            {
                id: 'e3',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=Earphone+3',
                brand: 'SHURE',
                name: 'SE846 PRO',
                price: '24,500',
                rating: '4.8',
                reviews: '2,300',
                link: '#'
            },
            {
                id: 'e4',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=Earphone+4',
                brand: 'Moondrop',
                name: 'Blessing 3',
                price: '18,900',
                rating: '4.6',
                reviews: '750',
                link: '#'
            },
            {
                id: 'e5',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=Earphone+5',
                brand: 'FiiO',
                name: 'FH9',
                price: '22,000',
                rating: '4.5',
                reviews: '420',
                link: '#'
            },
            {
                id: 'e5',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=Earphone+5',
                brand: 'FiiO',
                name: 'FH9',
                price: '22,000',
                rating: '4.5',
                reviews: '420',
                link: '#'
            },
            {
                id: 'e5',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=Earphone+5',
                brand: 'FiiO',
                name: 'FH9',
                price: '22,000',
                rating: '4.5',
                reviews: '420',
                link: '#'
            },
            {
                id: 'e5',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=Earphone+5',
                brand: 'FiiO',
                name: 'FH9',
                price: '22,000',
                rating: '4.5',
                reviews: '420',
                link: '#'
            },
            {
                id: 'e5',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=Earphone+5',
                brand: 'FiiO',
                name: 'FH9',
                price: '22,000',
                rating: '4.5',
                reviews: '420',
                link: '#'
            },
            {
                id: 'e5',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=Earphone+5',
                brand: 'FiiO',
                name: 'FH9',
                price: '22,000',
                rating: '4.5',
                reviews: '420',
                link: '#'
            }
        ],
        headphone: [
            {
                id: 'h1',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=Headphone+1',
                brand: 'SONY',
                name: 'WH-1000XM5',
                price: '42,000',
                rating: '4.9',
                reviews: '3,200',
                link: '#'
            },
            {
                id: 'h2',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=Headphone+2',
                brand: 'SENNHEISER',
                name: 'HD 660S2',
                price: '35,800',
                rating: '4.8',
                reviews: '1,500',
                link: '#'
            },
            {
                id: 'h3',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=Headphone+3',
                brand: 'beyerdynamic',
                name: 'DT 1990 PRO',
                price: '48,900',
                rating: '4.7',
                reviews: '890',
                link: '#'
            },
            {
                id: 'h4',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=Headphone+4',
                brand: 'HIFIMAN',
                name: 'Sundara',
                price: '32,000',
                rating: '4.6',
                reviews: '670',
                link: '#'
            },
            {
                id: 'h5',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=Headphone+5',
                brand: 'Dan Clark Audio',
                name: 'Aeon 2',
                price: '52,000',
                rating: '4.8',
                reviews: '320',
                link: '#'
            },
            {
                id: 'h5',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=Headphone+5',
                brand: 'Dan Clark Audio',
                name: 'Aeon 2',
                price: '52,000',
                rating: '4.8',
                reviews: '320',
                link: '#'
            },
            {
                id: 'h5',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=Headphone+5',
                brand: 'Dan Clark Audio',
                name: 'Aeon 2',
                price: '52,000',
                rating: '4.8',
                reviews: '320',
                link: '#'
            },
            {
                id: 'h5',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=Headphone+5',
                brand: 'Dan Clark Audio',
                name: 'Aeon 2',
                price: '52,000',
                rating: '4.8',
                reviews: '320',
                link: '#'
            },
            {
                id: 'h5',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=Headphone+5',
                brand: 'Dan Clark Audio',
                name: 'Aeon 2',
                price: '52,000',
                rating: '4.8',
                reviews: '320',
                link: '#'
            },
            {
                id: 'h5',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=Headphone+5',
                brand: 'Dan Clark Audio',
                name: 'Aeon 2',
                price: '52,000',
                rating: '4.8',
                reviews: '320',
                link: '#'
            }
        ],
        amp: [
            {
                id: 'a1',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=AMP+1',
                brand: 'FiiO',
                name: 'K9 PRO',
                price: '68,000',
                rating: '4.9',
                reviews: '450',
                link: '#'
            },
            {
                id: 'a2',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=AMP+2',
                brand: 'iFi Audio',
                name: 'Neo iDSD',
                price: '72,000',
                rating: '4.8',
                reviews: '380',
                link: '#'
            },
            {
                id: 'a3',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=AMP+3',
                brand: 'Topping',
                name: 'DX7 Pro+',
                price: '89,900',
                rating: '4.7',
                reviews: '290',
                link: '#'
            },
            {
                id: 'a4',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=AMP+4',
                brand: 'SENNHEISER',
                name: 'HDV 820',
                price: '125,000',
                rating: '4.9',
                reviews: '180',
                link: '#'
            },
            {
                id: 'a5',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=AMP+5',
                brand: 'Astell&Kern',
                name: 'ACRO CA1000T',
                price: '98,000',
                rating: '4.8',
                reviews: '220',
                link: '#'
            }
            ,
            {
                id: 'a5',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=AMP+5',
                brand: 'Astell&Kern',
                name: 'ACRO CA1000T',
                price: '98,000',
                rating: '4.8',
                reviews: '220',
                link: '#'
            },
            {
                id: 'a5',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=AMP+5',
                brand: 'Astell&Kern',
                name: 'ACRO CA1000T',
                price: '98,000',
                rating: '4.8',
                reviews: '220',
                link: '#'
            },
            {
                id: 'a5',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=AMP+5',
                brand: 'Astell&Kern',
                name: 'ACRO CA1000T',
                price: '98,000',
                rating: '4.8',
                reviews: '220',
                link: '#'
            },
            {
                id: 'a5',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=AMP+5',
                brand: 'Astell&Kern',
                name: 'ACRO CA1000T',
                price: '98,000',
                rating: '4.8',
                reviews: '220',
                link: '#'
            },
            {
                id: 'a5',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=AMP+5',
                brand: 'Astell&Kern',
                name: 'ACRO CA1000T',
                price: '98,000',
                rating: '4.8',
                reviews: '220',
                link: '#'
            }
        ],
        new: [
            {
                id: 'n1',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=New+1',
                brand: 'SONY',
                name: 'IER-Z1R 2nd Gen',
                price: '82,000',
                rating: '5.0',
                reviews: '50',
                link: '#'
            },
            {
                id: 'n2',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=New+2',
                brand: 'FiiO',
                name: 'M17 II',
                price: '178,000',
                rating: '4.9',
                reviews: '30',
                link: '#'
            },
            {
                id: 'n3',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=New+3',
                brand: 'SHURE',
                name: 'KSE1500 Gen2',
                price: '245,000',
                rating: '5.0',
                reviews: '15',
                link: '#'
            },
            {
                id: 'n4',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=New+4',
                brand: 'Astell&Kern',
                name: 'SP3000T',
                price: '198,000',
                rating: '4.9',
                reviews: '25',
                link: '#'
            },
            {
                id: 'n5',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=New+5',
                brand: 'SENNHEISER',
                name: 'IE900S',
                price: '145,000',
                rating: '4.8',
                reviews: '40',
                link: '#'
            },
            {
                id: 'n5',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=New+5',
                brand: 'SENNHEISER',
                name: 'IE900S',
                price: '145,000',
                rating: '4.8',
                reviews: '40',
                link: '#'
            },
            {
                id: 'n5',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=New+5',
                brand: 'SENNHEISER',
                name: 'IE900S',
                price: '145,000',
                rating: '4.8',
                reviews: '40',
                link: '#'
            },
            {
                id: 'n5',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=New+5',
                brand: 'SENNHEISER',
                name: 'IE900S',
                price: '145,000',
                rating: '4.8',
                reviews: '40',
                link: '#'
            },
            {
                id: 'n5',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=New+5',
                brand: 'SENNHEISER',
                name: 'IE900S',
                price: '145,000',
                rating: '4.8',
                reviews: '40',
                link: '#'
            },
            {
                id: 'n5',
                image: 'https://placehold.co/300x300/f5f5f5/666666?text=New+5',
                brand: 'SENNHEISER',
                name: 'IE900S',
                price: '145,000',
                rating: '4.8',
                reviews: '40',
                link: '#'
            }
        ]
    };

    // 상품 카드 HTML 생성 함수
    function createProductCard(product) {
        return `
            <a href="${product.link}" class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <button class="favorite-button" data-product-id="${product.id}">
                        <img src="img/heart-regular.svg" alt="お気に入り">
                    </button>
                </div>
                <div class="product-info">
                    <div class="product-brand">${product.brand}</div>
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">
                        <span class="price">¥${product.price}</span>
                        <span class="tax">税込</span>
                    </div>
                    <div class="product-rating">
                        <span class="points">${product.reviews}件 | ★ ${product.rating}</span>
                    </div>
                </div>
            </a>
        `;
    }

    // 초기 상품 렌더링 (이어폰 카테고리)
    const $productsGrid = $('.products-grid');
    $productsGrid.empty();
    products.earphone.forEach(product => {
        $productsGrid.append(createProductCard(product));
    });

    // 탭 클릭 이벤트 처리
    $('.tab-button').on('click', function() {
        $('.tab-button').removeClass('active');
        $(this).addClass('active');

        const category = $(this).text() === 'イヤホン' ? 'earphone'
                      : $(this).text() === 'ヘッドホン' ? 'headphone'
                      : $(this).text() === 'AMP・DAC・DAP' ? 'amp'
                      : 'new';

        $productsGrid.empty();
        products[category].forEach(product => {
            $productsGrid.append(createProductCard(product));
        });
    });

    // 좋아요 버튼 클릭 이벤트
    $(document).on('click', '.favorite-button', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const $button = $(this);
        const $heartIcon = $button.find('img');
        const isFavorite = $heartIcon.attr('src').includes('regular');
        
        // 버튼 상태 토글
        $button.toggleClass('active');
        
        if (isFavorite) {
            // 빨간색 하트로 변경
            $heartIcon.attr('src', 'img/heart-solid.svg')
                     .css('filter', 'invert(27%) sepia(91%) saturate(7085%) hue-rotate(355deg) brightness(105%) contrast(112%)');
        } else {
            // 기본 하트로 변경
            $heartIcon.attr('src', 'img/heart-regular.svg')
                     .css('filter', 'none');
        }
    });
}); 