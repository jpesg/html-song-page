$(document).ready(function() {
  //side btn
  $(".side-btn").click(function() {
    $(".side-nav-links").slideToggle(3000);
    $(".side-btn").toggleClass("change");
  });

  //nav btn
  $(".nav-btn").click(function() {
    $(".nav-btn").toggleClass("change");
    $(".side-nav").toggleClass("margin");
    $(".main").toggleClass("max-width");
  });
});
