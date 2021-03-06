$(function() {
  //Слайдер в шапке
	$('.portal_slider_inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
  });


  //Открытие/Скрытие блоков в слайдере при нажатии на кнопки
  const headerButtonLeft = document.querySelector('.wrapper_left_open_button .left_open_button');
  const leftTextBlock = document.querySelector('.wrapper_text_blocks .left_block_text');

  const headerButtonRight = document.querySelector('.wrapper_right_open_button .right_open_button');
  const rightTextBlock = document.querySelector('.wrapper_text_blocks .right_block_text');

  //Проверяем есть ли кнопки на странице
  if (headerButtonLeft && headerButtonRight) {
    headerButtonLeft.onclick = changesLeftBlock;
    headerButtonRight.onclick = changesRightBlock;
  }
  
  function changesLeftBlock (event) {
    event.preventDefault();
    if(leftTextBlock.classList.contains('active_block')) {
      leftTextBlock.classList.remove('active_block');
      leftTextBlock.nextElementSibling.classList.add('active_block');
   }
   else {
     leftTextBlock.classList.add('active_block');
     leftTextBlock.nextElementSibling.classList.remove('active_block');
   }
  }

  function changesRightBlock (event) {
    event.preventDefault();
    if(rightTextBlock.classList.contains('active_block')) {
      rightTextBlock.classList.remove('active_block');
      rightTextBlock.nextElementSibling.classList.add('active_block');
   }
   else {
    rightTextBlock.classList.add('active_block');
    rightTextBlock.nextElementSibling.classList.remove('active_block');
   }
  }

//Табы на главной странице
$(".tab_item").not(":first").hide();
$(".wrapper .tab").show().click(function() {
    var ind = $(this).index();
    $(".wrapper .tab").removeClass("active").eq(ind).addClass("active");
    $(".tab_item").hide().eq(ind).fadeIn()
}).eq(0).addClass("active");


//Слайдер приоритеты портала
$(".wrapper_priorities_slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  fade: true,
  dots: true,
  appendDots: $('.portal_priorities .dots .col-xl-11'),
  prevArrow: '<div class="prevArrow"></div>',
  nextArrow: '<div class="nextArrow"></div>'

});
//Табы на странице о проекте
$(".faq_tab_item").not(":first").hide();
$(".faq_wrapper .faq_tab").show().click(function() {
    var ind = $(this).index();
    $(".faq_wrapper .faq_tab").removeClass("faq_active").eq(ind).addClass("faq_active");
    $(".faq_tab_item").hide().eq(ind).fadeIn();
}).eq(0).addClass("faq_active");

//Табы с аккордеоном на странице о проекте
let faqAccordeonButton = document.querySelectorAll('.wrapper_tab_accord_item h3');
if(faqAccordeonButton) {
  for (let i = 0; i < faqAccordeonButton.length; i++) {
    faqAccordeonButton[i].addEventListener('click', openItem);
  }
}

//tabs
$(".tab-content__item").hide();
$(".tabs__container div.tab-content__item:first-child").show();
$('ul.tabs__list > li').click(function () {
    if (!($(this).hasClass('active'))) {
        var thisLi = $(this);
        var numLi = thisLi.index();
        thisLi.addClass('active').siblings().removeClass('active');
        thisLi.parent().next().children('div').hide().eq(numLi).fadeIn('slow');
    }
});
//Табы по атрибуту
$(".attr-tab-content__item").hide();
$(".attr-tab-content__item:first-child").show();
$('.attr-tab__item').on('click', function(){
  $('.attr-tab-content__item').removeClass('active');
  $('.attr-tab__item').removeClass('active');
  $('.attr-tab-content__item[data-item="'+$(this).attr('data-item')+'"]').addClass('active');
  $(this).addClass('active');
});

function openItem() {
  this.parentNode.classList.toggle('active-accordeon');
  this.classList.toggle('active-accordeon-title');
  this.nextElementSibling.classList.toggle('active-accordeon-text');
}

//Слайдер наши партнёры
$(".us_partners_slider").slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  dots: false,
  prevArrow: '<div class="prevArrow"></div>',
  nextArrow: '<div class="nextArrow"></div>'
});

//Стилизованный input type file
    $(".upload__file").change(function() {
      var filename = [];
      for (var i = 0; i < $(this).get(0).files.length; ++i) { // Запускаем цикл и перебираем все файлы
        filename.push($(this).get(0).files[i].name.slice(0, 18) + '...'); // Добавляем имена файлов в массив
      }
      $(this).next(".filename").text(filename.join(", "));
      $(this).parent().next('.upload__file-status').css('display','none');
    });
    

});