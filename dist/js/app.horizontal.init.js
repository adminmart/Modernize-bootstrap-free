$(function () {
  "use strict";
  $("#main-wrapper").AdminSettings({
    Theme: false, // this can be true or false ( true means dark and false means light ),
    Layout: "horizontal",
    // IS HERE //
    NavbarBg: "skin6", // You can change the Value to be skin1/skin2/skin3/skin4/skin5/skin6
    SidebarType: "full", // You can change it full / mini-sidebar / iconbar / overlay
    SidebarColor: "skin6", // You can change the Value to be skin1/skin2/skin3/skin4/skin5/skin6
    SidebarPosition: true, // it can be true / false ( true means Fixed and false means absolute )
    HeaderPosition: true, // it can be true / false ( true means Fixed and false means absolute )
  });
});
