"use strict";

$(document).ready(function () {
  console.log("Loaded");
  $(document).scroll(function () {
    var scroll = $(this).scrollTop();
    var topDist = 10;
    console.log(scroll);

    if (parseInt(scroll) > topDist) {
      $('.header').addClass("is-scrolled");
    } else {
      $('.header').removeClass("is-scrolled");
    }
  });
  updateAnimations();
  $(window).scroll(function () {
    updateAnimations();
  });
  $('.your-class').slick({});
});

function updateAnimations() {
  $('.d-anim').each(function () {
    var position = $(this).offset().top;
    var windowHeight = $(window).height();
    var scroll = $(window).scrollTop();

    if (position < scroll + windowHeight - 200) {
      $(this).addClass('d-anim-transition');
    }
  });
}