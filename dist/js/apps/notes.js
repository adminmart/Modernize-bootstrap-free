$(function () {
    function removeNote() {
      $(".remove-note")
        .off("click")
        .on("click", function (event) {
          event.stopPropagation();
          $(this).parents(".single-note-item").remove();
        });
    }
  
    function favouriteNote() {
      $(".favourite-note")
        .off("click")
        .on("click", function (event) {
          event.stopPropagation();
          $(this).parents(".single-note-item").toggleClass("note-favourite");
        });
    }
  
    function addLabelGroups() {
      $(".category-selector .badge-group-item")
        .off("click")
        .on("click", function (event) {
          event.preventDefault();
          /* Act on the event */
          var getclass = this.className;
          var getSplitclass = getclass.split(" ")[0];
          if ($(this).hasClass("badge-business")) {
            $(this).parents(".single-note-item").removeClass("note-social");
            $(this).parents(".single-note-item").removeClass("note-important");
            $(this).parents(".single-note-item").toggleClass(getSplitclass);
          } else if ($(this).hasClass("badge-social")) {
            $(this).parents(".single-note-item").removeClass("note-business");
            $(this).parents(".single-note-item").removeClass("note-important");
            $(this).parents(".single-note-item").toggleClass(getSplitclass);
          } else if ($(this).hasClass("badge-important")) {
            $(this).parents(".single-note-item").removeClass("note-social");
            $(this).parents(".single-note-item").removeClass("note-business");
            $(this).parents(".single-note-item").toggleClass(getSplitclass);
          }
        });
    }
  
    var $btns = $(".note-link").click(function () {
      if (this.id == "all-category") {
        var $el = $("." + this.id).fadeIn();
        $("#note-full-container > div").not($el).hide();
      }
      if (this.id == "important") {
        var $el = $("." + this.id).fadeIn();
        $("#note-full-container > div").not($el).hide();
      } else {
        var $el = $("." + this.id).fadeIn();
        $("#note-full-container > div").not($el).hide();
      }
      $btns.removeClass("active");
      $(this).addClass("active");
    });
  
    $("#add-notes").on("click", function (event) {
      $("#addnotesmodal").modal("show");
      $("#btn-n-save").hide();
      $("#btn-n-add").show();
    });
  
    // Button add
    $("#btn-n-add").on("click", function (event) {
      event.preventDefault();
      /* Act on the event */
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth()); //January is 0!
      var yyyy = today.getFullYear();
      var monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      today = dd + " " + monthNames[mm] + " " + yyyy;
  
      var $_noteTitle = document.getElementById("note-has-title").value;
      var $_noteDescription = document.getElementById(
        "note-has-description"
      ).value;
  
      $html =
        '<div class="col-md-4 single-note-item all-category"><div class="card card-body">' +
        '<span class="side-stick"></span>' +
        '<h6 class="note-title text-truncate w-75 mb-0" data-noteHeading="' +
        $_noteTitle +
        '">' +
        $_noteTitle +
        '</h6>' +
        '<p class="note-date fs-2">' +
        today +
        "</p>" +
        '<div class="note-content">' +
        '<p class="note-inner-content" data-noteContent="' +
        $_noteDescription +
        '">' +
        $_noteDescription +
        "</p>" +
        "</div>" +
        '<div class="d-flex align-items-center">' +
        '<a href="javascript:void(0)" class="link me-1"><i data-feather="star" class="feather-sm favourite-note"></i></a>' +
        '<a href="javascript:void(0)" class="link text-danger ms-2"><i data-feather="trash-2" class="feather-sm remove-note"></i></a>' +
        '<div class="ms-auto">' +
        '<div class="category-selector btn-group">' +
        '<a class="nav-link category-dropdown label-group p-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">' +
        '<div class="category">' +
        '<div class="category-business"></div>' +
        '<div class="category-social"></div>' +
        '<div class="category-important"></div>' +
        '<span class="more-options text-dark"><i data-feather="more-vertical" class="feather-sm"></i></span>' +
        "</div>" +
        "</a>" +
        '<div class="dropdown-menu dropdown-menu-right category-menu">' +
        '<a class="note-business badge-group-item badge-business dropdown-item position-relative category-business" href="javascript:void(0);">Business</a>' +
        '<a class="note-social badge-group-item badge-social dropdown-item position-relative category-social" href="javascript:void(0);"> Social</a>' +
        '<a class="note-important badge-group-item badge-important dropdown-item position-relative category-important" href="javascript:void(0);"> Important</a>' +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div></div> ";
  
      $("#note-full-container").prepend($html);
      $("#addnotesmodal").modal("hide");
  
      removeNote();
      favouriteNote();
      addLabelGroups();
      feather.replace();
    });
  
    $("#addnotesmodal").on("hidden.bs.modal", function (event) {
      event.preventDefault();
      document.getElementById("note-has-title").value = "";
      document.getElementById("note-has-description").value = "";
    });
  
    removeNote();
    favouriteNote();
    addLabelGroups();
  
    $("#btn-n-add").attr("disabled", "disabled");
  });
  
  $("#note-has-title").keyup(function () {
    var empty = false;
    $("#note-has-title").each(function () {
      if ($(this).val() == "") {
        empty = true;
      }
    });
  
    if (empty) {
      $("#btn-n-add").attr("disabled", "disabled");
    } else {
      $("#btn-n-add").removeAttr("disabled");
    }
  });