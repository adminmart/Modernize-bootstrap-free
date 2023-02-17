$(function () {
  "use strict";

  //****************************
  /* sidebar position */
  //****************************
  function handlesidebarposition() {
    $("#sidebar-position").change(function () {
      if ($(this).is(":checked")) {
        $("#main-wrapper").attr("data-sidebar-position", "fixed");
        $(".topbar .top-navbar .navbar-header").attr("data-navheader", "fixed");
      } else {
        $("#main-wrapper").attr("data-sidebar-position", "absolute");
        $(".topbar .top-navbar .navbar-header").attr(
          "data-navheader",
          "relative"
        );
      }
    });
  }
  handlesidebarposition();

  //****************************
  /* Header position */
  //****************************
  function handleheaderposition() {
    $("#header-position").change(function () {
      if ($(this).is(":checked")) {
        $("#main-wrapper").attr("data-header-position", "fixed");
      } else {
        $("#main-wrapper").attr("data-header-position", "relative");
      }
    });
  }
  handleheaderposition();

  //****************************
  // header bg color
  //****************************
  function handlenavbarbg() {
    // if ($("#main-wrapper").attr("data-navbarbg") == "skin6") {
    //   // do this
    //   $(".app-header .navbar").addClass("navbar-light");
    //   $(".app-header .navbar").removeClass("navbar-dark");
    // } else {
    //   // do that
    //   $(".app-header .navbar").addClass("navbar-dark");
    //   $(".app-header .navbar").removeClass("navbar-light");
    // }
    // $(".theme-color .theme-item .theme-link").on("click", function () {
    //   var navbarbgskin = $(this).attr("data-navbarbg");
    //   $("#main-wrapper").attr("data-navbarbg", navbarbgskin);
    //   $(".app-header").attr("data-navbarbg", navbarbgskin);
    //   $(".app-header .navbar-collapse").attr("data-navbarbg", navbarbgskin);
    //   if ($("#main-wrapper").attr("data-navbarbg") == "skin6") {
    //     // do this
    //     $(".app-header .navbar").addClass("navbar-light");
    //     $(".app-header .navbar").removeClass("navbar-dark");
    //   } else {
    //     // do that
    //     $(".app-header .navbar").removeClass("navbar-light");
    //     $(".app-header .navbar").addClass("navbar-dark");
    //   }
    // });
  }

  handlenavbarbg();

  //****************************
  /* Manage sidebar bg color */
  //****************************
  function handlesidebarbg() {
    $(".theme-color .theme-item .theme-link").on("click", function () {
      var sidebarbgskin = $(this).attr("data-sidebarbg");
      $(".left-sidebar").attr("data-sidebarbg", sidebarbgskin);
    });
  }
  handlesidebarbg();

  //****************************
  /* boxed layout */
  //****************************
  function handleboxedlayout() {
    $("#boxed-layout").change(function () {
      if ($(this).is(":checked")) {
        $("#main-wrapper").attr("data-boxed-layout", "boxed");
      } else {
        $("#main-wrapper").attr("data-boxed-layout", "full");
      }
    });
  }
  handleboxedlayout();
});
