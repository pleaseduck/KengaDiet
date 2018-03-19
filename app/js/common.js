$(function() {

  /*$("#my-menu").mmenu({
    extensions: [ "widescreen", "theme-black", "effect-menu-slide", "pagedim-black"],
  //  navbar: {
  //    title: "<img src='img/logo-1.svg' alt='Салон красоты Смитлер'>"
  //  },
    offCanvas: {
      position: 'top'
    }
  });
  var api = $('#my-menu').data('mmenu');
  api.bind('opened', function () {
    $('.hamburger').addClass('is-active');
  }).bind('closed', function () {
    $('.hamburger').removeClass('is-active')
  });*/
  const hamburger = document.querySelector(".hamburger");
  const mainNav = document.querySelector("#my-menu");
  console.log(mainNav);

  hamburger.addEventListener("click", function() {
    mainNav.classList.toggle("menu-opened");
  })

});
