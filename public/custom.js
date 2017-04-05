
$('.gridBoxInner').click(function(){
    var lightImg = $(this).find('img').attr('src');
    $('.dark .lightImgSection').css('background-image','url('+ lightImg +')');
    $('.dark').fadeIn(600);
});

$('.dark').click(function(){
    $('.dark').fadeOut(600);
});