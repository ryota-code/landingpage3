$(function(){
  // 「#top-btn」をクリックしたときに
  // ページ最上部まで自動でスクロールするようにしてください
  $('#top-btn').click(function(){
    $('html,body').animate({
      'scrollTop': 0
    },500)
  });

  $('header a').click(function(){
  var id = $(this).attr('href');
  var position = $(id).offset().top;
  $('html, body').animate({
    'scrollTop': position
  },500)
})

$('.navbar-nav ul a').each(function(){
    var $href = $(this).attr('href');
    if(location.href.match($href)) {
    $(this).addClass('active');
    } else {
    $(this).removeClass('active');
    }
});

});
