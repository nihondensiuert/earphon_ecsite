document.addEventListener('DOMContentLoaded', function() {
    // 공지사항 데이터
    const notices = [
        {
            text: "2024年6月1日以降に「中古7日間返品」をご利用いただいたお客様の「個人情報漏洩」について",
            link: "#"
        },
        {
            text: "年末年始の営業時間および商品発送について",
            link: "#"
        },
        {
            text: "システムメンテナンスに伴うサービス一時停止のお知らせ",
            link: "#"
        }
    ];

    let currentNoticeIndex = 0;
    let autoPlayInterval;
    const INTERVAL_TIME = 3000; // 3초마다 변경
    
    // DOM 요소
    const noticeContent = document.querySelector('.notice-content p');
    const noticePage = document.querySelector('.notice-page');
    const noticeContainer = document.querySelector('.mobile-notice');

    // 공지사항 업데이트 함수
    function updateNotice(index) {
        const notice = notices[index];
        noticeContent.textContent = notice.text;
        noticeContent.title = notice.text;  // 마우스 오버시 전체 텍스트 표시
        noticePage.textContent = `${index + 1}/${notices.length}`;
    }

    // 다음 공지사항으로 이동
    function nextNotice() {
        currentNoticeIndex = (currentNoticeIndex + 1) % notices.length;
        updateNotice(currentNoticeIndex);
    }

    // 자동 재생 시작
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextNotice, INTERVAL_TIME);
    }

    // 자동 재생 정지
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // 마우스 오버시 자동 재생 정지
    noticeContainer.addEventListener('mouseenter', stopAutoPlay);
    noticeContainer.addEventListener('mouseleave', startAutoPlay);

    // 터치 이벤트 처리
    noticeContainer.addEventListener('touchstart', stopAutoPlay);
    noticeContainer.addEventListener('touchend', startAutoPlay);

    // 초기 공지사항 설정
    updateNotice(currentNoticeIndex);
    
    // 자동 재생 시작
    startAutoPlay();
}); 