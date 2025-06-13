$(function () {
    const close = $(".fa-xmark");
    const modal = $(".modal");
    const mobileMenu = $(".mobile-menu");
    const overlay = $(".modal-overlay");

    // ハンバーガーメニューが押されたときに
    mobileMenu.on("click", function () {
        // modalをフェードインする
        modal.fadeIn(500);
    })    

// 閉じるアイコンが押されたときに
    close.on("click", function () {
        // modalがフェードアウトする
        modal.fadeOut(500);
    })

// オーバーレイを押したときに
    overlay.on("click", function () {
        // modalがフェードアウトする
        modal.fadeOut(500);
    });
})