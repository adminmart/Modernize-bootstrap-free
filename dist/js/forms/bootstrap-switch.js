$(
  ".bt-switch input[type='checkbox'], .bt-switch input[type='radio']"
).bootstrapSwitch();
var radioswitch = (function () {
  var bt = function () {
    $(".radio-switch").on("switch-change", function () {
      $(".radio-switch").bootstrapSwitch("toggleRadioState");
    }),
      $(".radio-switch").on("switch-change", function () {
        $(".radio-switch").bootstrapSwitch("toggleRadioStateAllowUncheck");
      }),
      $(".radio-switch").on("switch-change", function () {
        $(".radio-switch").bootstrapSwitch("toggleRadioStateAllowUncheck", !1);
      });
  };
  return {
    init: function () {
      bt();
    },
  };
})();
$(document).ready(function () {
  radioswitch.init();
});
