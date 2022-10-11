$(document).ready(function(){
$('.header__mobile').on('click', function(e){
    e.preventDefault()
    $('.mobile__menu').fadeIn()
});

$('.mobile__menu-logo').on('click', function(e){
    e.preventDefault()
    $('.mobile__menu').fadeOut()
})

$(document).mouseup(function (e) {
    var container = $(".mobile__menu");
    if (container.has(e.target).length === 0){
        container.fadeOut();
    }
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
      delay: 2000,
    },
  });




})