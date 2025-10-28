// $(".bg-paroller").paroller({
//   factor: 0.3,
//   factorXs: 0,
//   type: "foreground",
//   direction: "horizontal",
// });


$(".bg-paroller").paroller({
  factor: 0.3,        // سرعت افکت در دسکتاپ
  factorXs: 0.2,      // سرعت کمتر برای موبایل (ولی صفر نباشه!)
  factorSm: 0.25,     // تبلت‌ها
  type: "foreground",
  direction: "horizontal",
  transition: "transform 0.2s ease-out"
});

