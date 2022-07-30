$(document).ready(function () {
  $("#banner-section").css("height", window.innerHeight + "px");

  $("#sliderPlay").slick({
    centerMode: true,
    dots: true,
    slidesToShow: 1,
    autoplay: true,
    variableWidth: true,
    prevArrow:
      "<button class='prev-arr sliderArr'><img src='./images/left-arrow.svg'/></button>",
    nextArrow:
      "<button class='next-arr sliderArr'><img src='./images/right-arrow.svg'/></button>",
  });

  $(".sessionSlider").slick({
    centerMode: true,
    dots: true,
    slidesToShow: 1,
    autoplay: true,
    variableWidth: true,
    prevArrow:
      "<button class='prev-arr sliderArr'><img src='./images/left-arrow.svg'/></button>",
    nextArrow:
      "<button class='next-arr sliderArr'><img src='./images/right-arrow.svg'/></button>",
  });
});

$(window).on("scroll", function (e) {
  if (document.documentElement.scrollTop < 200) {
    $(".home-page #header").removeClass("grayBG");
  } else {
    if (!$(".home-page #header").hasClass("grayBG")) {
      $(".home-page #header").addClass("grayBG");
    }
  }
});

$(document).on("click", ".burger", function () {
  $(".burger").toggleClass("clicked");
  $(".csr-nav , .csr-nav .csr-nav-menu").toggleClass("show");
});

$(document).mouseup(function (e) {
  var nav = $(".csr-nav  .csr-nav-menu");

  if ($(".csr-nav").is(e.target) && !nav.is(e.target)) {
    $(".csr-nav , .csr-nav .csr-nav-menu").removeClass("show");
    $(".burger").removeClass("clicked");
  }
});

$(document).on(
  "click",
  "header nav.csr-nav .csr-nav-menu ul li a",
  function () {
    $(".csr-nav , .csr-nav .csr-nav-menu").removeClass("show");
    $(".burger").removeClass("clicked");
  }
);
