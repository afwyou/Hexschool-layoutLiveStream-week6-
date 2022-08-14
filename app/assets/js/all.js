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