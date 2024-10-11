// goToTop
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("#scroll").fadeIn();
  } else {
    $("#scroll").fadeOut();
  }
});
$("#scroll").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    600
  );
  return false;
});

// HEADER ON SCROLL CHANGE
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    var $pad = $(".nav-link");
    $pad.toggleClass("line-set", $(this).scrollTop() > $nav.height());
  });
});

// SCROLLING NAV
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 56,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 100,
  });
})(jQuery); // End of use strict

$(".multi-item-carousel").on("slide.bs.carousel", function (e) {
  let $e = $(e.relatedTarget),
    itemsPerSlide = 3,
    totalItems = $(".carousel-item", this).length,
    $itemsContainer = $(".carousel-inner", this),
    it = itemsPerSlide - (totalItems - $e.index());
  if (it > 0) {
    for (var i = 0; i < it; i++) {
      $(".carousel-item", this)
        .eq(e.direction == "left" ? i : 0)
        // append slides to the end/beginning
        .appendTo($itemsContainer);
    }
  }
});
