$(".bg-paroller").paroller({
  factor: 0.3,
  factorXs: 0.15,
  type: "foreground",
  direction: "horizontal",
  // direction: "vertical",
});


// main.js
if (window.innerWidth > 480) {
  $(".bg-paroller").paroller({
    factor: 0.3,
    type: "foreground",
    direction: "horizontal"
  });
}