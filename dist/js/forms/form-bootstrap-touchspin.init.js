//==================================================//
//                  Normal Touchspin                //
//==================================================//
$("input[name='demo3']").TouchSpin();

//==================================================//
//                 postfix Touchspin                //
//==================================================//
$("input[name='demo1']").TouchSpin({
  min: 0,
  max: 100,
  step: 0.1,
  decimals: 2,
  boostat: 5,
  maxboostedstep: 10,
  postfix: "%",
});

//==================================================//
//                 prefix Touchspin                //
//==================================================//
$("input[name='demo2']").TouchSpin({
  min: -1000000000,
  max: 1000000000,
  stepinterval: 50,
  maxboostedstep: 10000000,
  prefix: "$",
});

//==================================================//
//          Vertical button alignment                //
//==================================================//
$("input[name='demo_vertical']").TouchSpin({
  verticalbuttons: true,
});

//==================================================//
//          Vertical buttons with custom icons      //
//==================================================//
$("input[name='demo_vertical2']").TouchSpin({
  verticalbuttons: true,
  verticalupclass: "glyphicon glyphicon-plus",
  verticaldownclass: "glyphicon glyphicon-minus",
});

//==================================================//
//     touchspin with button(small)                 //
//==================================================//
$("input[name='demo4']").TouchSpin({
  postfix: "a button",
});

//==================================================//
//          touchspin with button(large)             //
//==================================================//
$("input[name='demo4_2']").TouchSpin({
  postfix: "a button",
});

//==================================================//
//          Button Group                             //
//==================================================//
$("input[name='demo5']").TouchSpin({
  prefix: "pre",
  postfix: "post",
});

//==================================================//
//          Button change class                     //
//==================================================//
$("input[name='demo6']").TouchSpin({
  buttondown_class: "btn btn-light-danger text-danger font-medium",
  buttonup_class: "btn btn-light-success text-success font-medium",
});
