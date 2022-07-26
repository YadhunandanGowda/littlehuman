$(document).ready(function () {
  $("#banner-section").css("height", window.innerHeight + "px");
});

$(window).on("scroll", function (e) {
  if (document.documentElement.scrollTop < 50) {
    $("#header").removeClass("grayBG");
  } else {
    if (!$("#header").hasClass("grayBG")) {
      $("#header").addClass("grayBG");
    }
  }
});
