$(function () {
    // ページトップボタンを取得
    const topBtn = $(".page-top");
    topBtn.on('click', function () {
        // クリックイベントを確認
        console.log("ボタンが押されました");
        $("body,html").animate({
            scrollTop: 0
        }, 300);
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn(500);
        } else {
            topBtn.fadeOut(500);
        }
    });

    // ロゴをクリックしたら画像変更のデモ
    // const logo = $(".header__logo");
    // logo.on('click', function () {
    //     $(".colum-second__photo1").attr("src", "./img/photo01.jpg");
    // })

    // フッターロゴのクリックイベント
    $(".footer__logo").on('click', function() {
        // 一回転するアニメーション
        gsap.to(".footer__logo", {
            rotation: 360,
            duration: 1
        });
        // 1秒後にページトップへスクロール
        setTimeout(function() {
            $("html, body").animate({ scrollTop: $("#top").offset().top }, "slow"); // ヘッダーのID #top をターゲットにする
        }, 1000);
    });
});



// ここからGSAPアニメーション
//consept
gsap.fromTo(
    ".concept-primary .colum-first",
    {
        x: -100,
        opacity: 0,
    },
    {
        duration: 2, // GSAP 3.x syntax
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".concept-primary .colum-first",
            start: "top 70%",
            markers: false
        }
    }
);

gsap.fromTo(
    ".concept-article-re",
    {
        x: 100,
        opacity: 0,
    },
    {
        duration: 2, // GSAP 3.x syntax
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".concept-article-re",
            start: "top 70%",
            markers: false
        }
    }
);

gsap.fromTo(
    ".colum-second-photo",
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      duration: 1, // Example duration, adjust as needed
      opacity: 1,
      scrollTrigger: {
        trigger: ".colum-second-photo", 
        start: "top 80%",
        markers: false
      }
    }
  );

  gsap.fromTo(
    ".colum-first__photo",
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      duration: 1, // Example duration, adjust as needed
      opacity: 1,
      scrollTrigger: {
        trigger: ".colum-first__photo", 
        start: "top 80%",
        markers: false
      }
    }
  );

//works
gsap.fromTo(
    ".works-section-head",
    {
      y: -80,
      opacity: 0,
    },
    {
      duration: 1.5, // GSAP 3.x syntax
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".works-section-head", 
        start: "top 70%",
        markers: false
      }
    }
  );
 //news
gsap.fromTo(
    ".news-section-head",
    {
      x: 100,
      opacity: 0,
    },
    {
      duration: 2, // GSAP 3.x syntax
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".news-section-head", 
        start: "top 70%",
        markers: false
      }
    }
  );

  gsap.fromTo(
    ".show-room-section-head",
    {
      y: 80,
      opacity: 0,
    },
    {
      duration: 1.8, // GSAP 3.x syntax
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".show-room-section-head", 
        start: "top 95%",
        markers: false
      }
    }
  );
  
  gsap.fromTo(
    ".room-list",
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      duration: 1, // Example duration, adjust as needed
      opacity: 1,
      scrollTrigger: {
        trigger: ".room-list", 
        start: "top 80%",
        markers: false
      }
    }
  );
   
  gsap.fromTo(
    ".img",
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      duration: 1, // Example duration, adjust as needed
      opacity: 1,
      scrollTrigger: {
        trigger: ".img", 
        start: "top 80%",
        markers: false
      }
    }
  );
  
  
  
    



// let mm = gsap.matchMedia();

// mm.add("(min-width: 1025px)", () => {
//     // 1025px以上の大きさのたｍんまつだけ
//     gsap. fromTo(
//         ".concept-primary .colum-first", 2,
//        {
//         x: -100,
//         opcity: 0,
//        },
//        {
//         x: 0,
//         opacity: 1,
//         scrollTrigger: {
//             trigger: ".concept-primary .colum-first",
//             start: "top center",
//             markers: true
//         },
//     }
//     );

// })

// // 599px以下の大きさの端末の時だけアニメーションが有効
// mm.add("(max-width: 599px)", () => {

//     gsap. fromTo(
//         ".concept-primary .colum-first", 2,
//        {
//         x: -100,
//         opcity: 0,
//        },
//        {
//         x: 0,
//         opacity: 1,
//         scrollTrigger: {
//             trigger: ".concept-primary .colum-first",
//             start: "top center",
//             markers: true
//         },
//     }
//     );
// });
