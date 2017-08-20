$(document).ready(function(){
  $("#menu_icon").click(function(){
    $(".sp_navi_li").slideToggle();
  });
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
    );
});

// ◇ボタンをクリックしたら、スクロールして上に戻る

$(document).ready(function() {
  var pagetop = $('.top_icon');
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
            }
       });
       pagetop.click(function () {
           $('body, html').animate({ scrollTop: 0 }, 500);
              return false;
   });
});

//products_スライド
$(window).load(function(){
  $("#list_img img").click(function(){
    var img_src = $(this).attr("src");
    $("#display_img img").attr("src", img_src);
  });
});
