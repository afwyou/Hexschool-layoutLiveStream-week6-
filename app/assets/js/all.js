$(function () {
  console.log('Hello Bootstrap5');
});


$(document).ready(function () {
  //點擊
  $('.menu-icon').on('click', function (e) {
    e.preventDefault();
    $('header').toggleClass('show-menu')
  })
});


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});