'use strict';

$(document).ready(function() {
    console.log('Document ready');

    // 送料無料バナーを閉じる機能
    $('.shipping-banner__close').on('click', function() {
        $('.shipping-banner').hide();
    });

    // モバイルメニューの開閉
    $('.mobile-menu__hamburger').on('click', function() {
        $('.mobile-menu').toggleClass('active');
    });

    // 検索機能
    $('.header__search-button').on('click', function() {
        const searchValue = $('.header__search-input').val();
        const searchCategory = $('.header__search-select').val();
        console.log('検索カテゴリー:', searchCategory);
        console.log('検索ワード:', searchValue);
    });

    // モバイル検索バーの開閉
    $('.mobile-menu__search').on('click', function() {
        $('.mobile-search').toggleClass('active');
    });

    // メインメニューのハンバーガーメニュー
    $('.main-menu__hamburger').on('click', function() {
        $('.main-menu__items').toggleClass('active');
    });

    // タブ切り替え機能
    console.log('Initializing tabs');
    
    // 初期状態設定
    $('.product-tabs__panel').hide();
    $('#details').show();
    $('.product-tabs__button:first').addClass('active');

    console.log('Panels found:', $('.product-tabs__panel').length);
    console.log('Buttons found:', $('.product-tabs__button').length);

    // タブボタンクリックイベント
    $('.product-tabs__button').on('click', function(e) {
        e.preventDefault();
        const target = $(this).data('tab');
        
        // すべてのボタンからactiveクラスを削除
        $('.product-tabs__button').removeClass('active');
        // 現在クリックされたボタンにactiveクラスを追加
        $(this).addClass('active');
        
        // すべてのパネルを非表示にする
        $('.product-tabs__panel').hide();
        // クリックされたボタンに対応するパネルを表示する
        $(target).fadeIn();
    });

    // 初期状態の確認
    console.log('Initial active tab:', $('.product-tabs__button.active').length);
    console.log('Visible panels:', $('.product-tabs__panel:visible').length);
});

// jQueryのロード確認
if (typeof jQuery != 'undefined') {
    console.log('jQuery version:', jQuery.fn.jquery);
} else {
    console.log('jQuery is not loaded!');
}