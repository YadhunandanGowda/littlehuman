$(document).ready(function () {
  $("#banner-section").css("height", window.innerHeight + "px");

  $("#sliderPlay").slick({
    centerMode: true,
    dots: true,
    slidesToShow: 1,
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
    variableWidth: true,
    prevArrow:
      "<button class='prev-arr sliderArr'><img src='./images/left-arrow.svg'/></button>",
    nextArrow:
      "<button class='next-arr sliderArr'><img src='./images/right-arrow.svg'/></button>",
  });
});

// $(window).on("scroll", function (e) {
//   if (document.documentElement.scrollTop < 50) {
//     $("#header").removeClass("grayBG");
//   } else {
//     if (!$("#header").hasClass("grayBG")) {
//       $("#header").addClass("grayBG");
//     }
//   }
// });
