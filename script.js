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

  //owl
  $(".songs-center").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    smartSpeed: 4000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });
});
