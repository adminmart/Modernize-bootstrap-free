$(function () {
  "use strict";

  // Feather Icon Init Js
  // feather.replace();

  $(".preloader").fadeOut();

  // =================================
  // Tooltip
  // =================================
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // =================================
  // Popover
  // =================================
  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  // change links
  $(function () {
    let currentURL =
      window.location != window.parent.location
        ? document.referrer
        : document.location.href;
    if (currentURL == "https://themeforest.net/") {
      $("a.buynow-link").attr("href", "");
    } else if (currentURL == "https://wrapbootstrap.com/") {
      $("a.buynow-link").attr("href", "");
    } else {
      $("a.buynow-link").attr(
        "href",
        "https://www.wrappixel.com/templates/modernize/"
      );
    }
  });

  // increment & decrement
  $(".minus,.add").on("click", function () {
    var $qty = $(this).closest("div").find(".qty"),
      currentVal = parseInt($qty.val()),
      isAdd = $(this).hasClass("add");
    !isNaN(currentVal) &&
      $qty.val(
        isAdd ? ++currentVal : currentVal > 0 ? --currentVal : currentVal
      );
  });

  // fixed header
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 60) {
      $('.app-header').addClass('fixed-header');
    } else {
      $('.app-header').removeClass('fixed-header');
    }
  });

  

  // Checkout 
  $(function(){
    $(".billing-address").click(function(){
      $(".billing-address-content").hide();
    });
    $(".billing-address").click(function(){
      $(".payment-method-list").show();
    });
  });
});