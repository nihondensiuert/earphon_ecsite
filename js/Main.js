document.addEventListener('DOMContentLoaded', function() {
    // 슬라이더 초기화
    class MainSlider {
        constructor() {
            this.slides = [
                {
                    image: 'img/Test_ad_01.jpg',
                    link: '#',
                    alt: 'Amazonギフトカード大還元祭'
                },
                {
                    image: 'img/Test_ad_01.jpg',
                    link: '#',
                    alt: 'ポタフェス2024'
                },
                {
                    image: 'img/Test_ad_01.jpg',
                    link: '#',
                    alt: 'オータムセール'
                },
                {
                    image: 'img/Test_ad_01.jpg',
                    link: '#',
                    alt: 'スライド4'
                },
                {
                    image: 'img/Test_ad_01.jpg',
                    link: '#',
                    alt: 'スライド5'
                },
                {
                    image: 'img/Test_ad_01.jpg',
                    link: '#',
                    alt: 'スライド6'
                },
                {
                    image: 'img/Test_ad_01.jpg',
                    link: '#',
                    alt: 'スライド7'
                },
                {
                    image: 'img/Test_ad_01.jpg',
                    link: '#',
                    alt: 'スライド8'
                },
                {
                    image: 'img/Test_ad_01.jpg',
                    link: '#',
                    alt: 'スライド9'
                },
                {
                    image: 'img/Test_ad_01.jpg',
                    link: '#',
                    alt: 'スライド10'
                }
            ];
            this.initSlider();
        }

        initSlider() {
            const track = document.querySelector('.splide__list');
            
            // 슬라이드 생성
            this.slides.forEach(slide => {
                const li = document.createElement('li');
                li.className = 'splide__slide';
                
                const link = document.createElement('a');
                link.href = slide.link;
                link.className = 'slide';
                link.setAttribute('aria-label', slide.alt);
                link.style.backgroundImage = `url('${slide.image}')`;
                
                li.appendChild(link);
                track.appendChild(li);
            });

            // Splide 초기화
            const splide = new Splide('.splide', {
                type: 'loop',
                perPage: 5,
                gap: 20,
                arrows: true,
                pagination: true,
                speed: 800,
                autoplay: false,
                padding: {
                    left: '0',
                    right: '0'
                },
                focus: 'center',
                perMove: 1,
                fixedWidth: 400,      // PC에서의 고정 너비
                fixedHeight: 458,     // PC에서의 고정 높이
                breakpoints: {
                    2560: {
                        perPage: 7,
                        gap: 30,
                        fixedWidth: 400,
                        fixedHeight: 458
                    },
                    1920: {
                        perPage: 5,
                        gap: 30,
                        fixedWidth: 400,
                        fixedHeight: 458
                    },
                    1440: {
                        perPage: 4,
                        gap: 20,
                        fixedWidth: 400,
                        fixedHeight: 458
                    },
                    1200: {
                        perPage: 4,
                        gap: 20,
                        fixedWidth: 300,
                        fixedHeight: 342
                    },
                    1024: {
                        perPage: 4,
                        gap: 20,
                        fixedWidth: 300,
                        fixedHeight: 342
                    },
                    768: {
                        perPage: 1,
                        gap: 10,
                        fixedWidth: 300,    // 모바일에서의 고정 너비
                        fixedHeight: 342,   // 모바일에서의 고정 높이
                        padding: {
                            left: '15%',
                            right: '15%'
                        }
                    }
                },
                classes: {
                    arrows: 'splide__arrows custom-arrows',
                    arrow: 'splide__arrow custom-arrow',
                    prev: 'splide__arrow--prev custom-prev',
                    next: 'splide__arrow--next custom-next',
                    pagination: 'splide__pagination custom-pagination',
                    page: 'splide__pagination__page custom-dot'
                }
            }).mount();

            // 재생/정지 버튼 기능 추가
            const playPauseBtn = document.querySelector('.play-pause-btn');
            const pauseIcon = playPauseBtn.querySelector('.pause-icon');
            const playIcon = playPauseBtn.querySelector('.play-icon');
            let isPlaying = true;

            playPauseBtn.addEventListener('click', () => {
                if (isPlaying) {
                    splide.Components.Autoplay.pause();
                    pauseIcon.style.display = 'none';
                    playIcon.style.display = 'block';
                } else {
                    splide.Components.Autoplay.play();
                    pauseIcon.style.display = 'block';
                    playIcon.style.display = 'none';
                }
                isPlaying = !isPlaying;
            });

            // 현재 슬라이드 번호 업데이트
            const currentSlideNum = document.querySelector('.current');
            splide.on('moved', () => {
                const current = splide.index + 1;
                currentSlideNum.textContent = current.toString().padStart(2, '0');
            });
        }
    }

    // 슬라이더 초기화
    new MainSlider();

    // header-top 닫기 버튼 기능 추가
    const headerTop = document.querySelector('.header-top');
    const closeBtn = document.querySelector('.header-top-close');

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            headerTop.classList.add('hidden');
            // 선택적: 닫힘 상태를 localStorage에 저장
            localStorage.setItem('headerTopClosed', 'true');
        });
    }

    // 페이지 로드 시 닫힘 상태 확인
    document.addEventListener('DOMContentLoaded', () => {
        if (localStorage.getItem('headerTopClosed') === 'true') {
            headerTop.classList.add('hidden');
        }
    });

    // 기존의 headerSlider 코드 수정
    const headerSlider = {
        currentSlide: 0,
        slides: document.querySelectorAll('.slide-item'),
        interval: null,

        init() {
            if (this.slides.length === 0) return;
            
            // 첫 슬라이드 표시
            this.slides[0].classList.add('active');
            
            // 슬라이더 자동 재생 시작
            this.startSlider();

            // 마우스 호버 시 일시정지
            const sliderContainer = document.querySelector('.header-top-slider');
            sliderContainer.addEventListener('mouseenter', () => this.stopSlider());
            sliderContainer.addEventListener('mouseleave', () => this.startSlider());

            // 클릭 이벤트가 X 버튼과 충돌하지 않도록 처리
            this.slides.forEach(slide => {
                slide.addEventListener('click', (e) => {
                    // X 버튼 클릭 시 이벤트 전파 중단
                    if (e.target.closest('.header-top-close')) {
                        e.preventDefault();
                        return;
                    }
                    // 링크 이동 처리는 a 태그의 href로 자 처리됨
                });
            });
        },

        startSlider() {
            this.interval = setInterval(() => this.nextSlide(), 5000);
        },

        stopSlider() {
            if (this.interval) {
                clearInterval(this.interval);
            }
        },

        nextSlide() {
            // 현재 슬라이드 숨기
            this.slides[this.currentSlide].classList.remove('active');
            
            // 다음 슬라이드 인덱스 계산
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
            
            // 다음 슬라이드 표시
            this.slides[this.currentSlide].classList.add('active');
        }
    };

    // 헤더 탑 슬라이더 초기화
    headerSlider.init();

    // 総合レビュー의 좋아요 버튼 기능
    const favoriteButtons = document.querySelectorAll('.comprehensive-favorite-btn');
    
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const heartIcon = this.querySelector('img');
            
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                heartIcon.src = 'img/heart-regular.svg';
                heartIcon.style.filter = 'none';
            } else {
                this.classList.add('active');
                heartIcon.src = 'img/heart-solid.svg';
                heartIcon.style.filter = 'invert(27%) sepia(91%) saturate(7085%) hue-rotate(355deg) brightness(105%) contrast(112%)';
            }
        });
    });

    // 상품 링크 클릭 이벤트
    const productLinks = document.querySelectorAll('.comprehensive-product-link');
    productLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.stopPropagation(); // 상위 요소로의 이벤트 전파 방지
        });
    });

    // 모바일 메뉴 토글 기능 수정
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.mobile-nav-overlay');
    
    menuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });

    overlay.addEventListener('click', function() {
        menuBtn.classList.remove('active');
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // 열람 이력 토글 기능
    const titleWrap = document.querySelector('.mobile-nav-title-wrap');
    const toggleBtn = document.querySelector('.toggle-btn');
    const historyItems = document.querySelector('.history-items');
    
    titleWrap.addEventListener('click', function() {
        toggleBtn.classList.toggle('active');
        historyItems.classList.toggle('collapsed');
    });

    // 탭 메뉴 터치 스크롤 기능 추가
    const tabMenu = document.querySelector('.tab-menu');
    let isDown = false;
    let startX;
    let scrollLeft;

    tabMenu.addEventListener('mousedown', (e) => {
        isDown = true;
        tabMenu.classList.add('active');
        startX = e.pageX - tabMenu.offsetLeft;
        scrollLeft = tabMenu.scrollLeft;
    });

    tabMenu.addEventListener('mouseleave', () => {
        isDown = false;
        tabMenu.classList.remove('active');
    });

    tabMenu.addEventListener('mouseup', () => {
        isDown = false;
        tabMenu.classList.remove('active');
    });

    tabMenu.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - tabMenu.offsetLeft;
        const walk = (x - startX) * 2; // 스크롤 속도 조절
        tabMenu.scrollLeft = scrollLeft - walk;
    });

    // 터치 이벤트 처리
    tabMenu.addEventListener('touchstart', (e) => {
        isDown = true;
        tabMenu.classList.add('active');
        startX = e.touches[0].pageX - tabMenu.offsetLeft;
        scrollLeft = tabMenu.scrollLeft;
    });

    tabMenu.addEventListener('touchend', () => {
        isDown = false;
        tabMenu.classList.remove('active');
    });

    tabMenu.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - tabMenu.offsetLeft;
        const walk = (x - startX) * 2;
        tabMenu.scrollLeft = scrollLeft - walk;
    }, { passive: false }); // 터치 이벤트의 기본 동작 방지

});