document.addEventListener('DOMContentLoaded', function() {
    // 슬라이드 데이터
    const slides = [
        {
            image: 'img/Test_ad_01.jpg',
            subtitle: 'イヤホンの新しい世界へ',
            title: '使い方ガイド',
            description: 'あなたにぴったりの商品の探し方をご紹介',
            buttonText: '詳しく見る',
            link: 'Rank.html'
        },
        {
            image: 'img/Test_ad_02.webp',
            subtitle: 'スタッフのおすすめ',
            title: '商品レビュー',
            description: 'プロが選ぶ至極のサウンド',
            buttonText: '詳しく見る',
            link: 'Shop.html'
        },
        {
            image: 'https://placehold.co/800x500/f5f5f5/666666?text=Guide+3',
            subtitle: '音質にこだわる',
            title: '選び方ガイド',
            description: '失敗しない イヤホン・ヘッドホンの選び方',
            buttonText: '詳しく見る'
        },
        {
            image: 'https://placehold.co/800x500/f5f5f5/666666?text=Guide+4',
            subtitle: 'プロが教える',
            title: 'メンテナンス',
            description: '長く使うためのお手入れ方法',
            buttonText: '詳しく見る'
        },
        {
            image: 'https://placehold.co/800x500/f5f5f5/666666?text=Guide+5',
            subtitle: '音の世界を広げる',
            title: '最新トレンド',
            description: '注目の新製品をご紹介',
            buttonText: '詳しく見る'
        }
    ];

    let currentSlide = 0;
    const totalSlides = slides.length;

    // DOM 요소
    const readingImage = document.querySelector('.reading-image img');
    const readingSubtitle = document.querySelector('.reading-subtitle');
    const readingTitle = document.querySelector('.reading-title');
    const readingDescription = document.querySelector('.reading-description');
    const readingButton = document.querySelector('.reading-button');
    const paginationPrev = document.querySelector('.pagination-prev');
    const paginationNext = document.querySelector('.pagination-next');
    const paginationNumbers = document.querySelector('.pagination-numbers');
    const thumbnails = document.querySelectorAll('.thumbnail');

    // 슬라이드 업데이트 함수
    function updateSlide(index) {
        const slide = slides[index];
        readingImage.src = slide.image;
        readingSubtitle.textContent = slide.subtitle;
        readingTitle.textContent = slide.title;
        readingDescription.textContent = slide.description;
        readingButton.textContent = slide.buttonText;
        
        // 링크 업데이트
        const readingLink = document.querySelector('.reading-link');
        if (slide.link) {
            readingLink.href = slide.link;
        } else {
            readingLink.href = '#';
        }

        // 페이지네이션 숫자 업데이트
        paginationNumbers.innerHTML = `
            <span>${index + 1}</span>
            <span>/</span>
            <span>${totalSlides}</span>
        `;

        // 썸네일 활성화 상태 업데이트
        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });
    }

    // 다음 슬라이드로 이동
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlide(currentSlide);
    }

    // 이전 슬라이드로 이동
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlide(currentSlide);
    }

    // 이벤트 리스너 등록
    paginationNext.addEventListener('click', nextSlide);
    paginationPrev.addEventListener('click', prevSlide);

    // 썸네일 클릭 이벤트
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            currentSlide = index;
            updateSlide(currentSlide);
        });
    });

    // 자동 슬라이드 (5초마다)
    let autoSlideInterval = setInterval(nextSlide, 5000);

    // 마우스가 슬라이드 영역에 들어오면 자동 슬라이드 정지
    const readingCard = document.querySelector('.reading-card');
    readingCard.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });

    // 마우스가 슬라이드 영역을 벗어나면 자동 슬라이드 재시작
    readingCard.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(nextSlide, 5000);
    });

    // 초기 슬라이드 설정
    updateSlide(currentSlide);
}); 