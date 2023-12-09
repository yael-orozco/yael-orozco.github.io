document.addEventListener("DOMContentLoaded", function () {
  let elementsToAnimate = document.querySelectorAll(".animate-on-load");

  elementsToAnimate.forEach(function (element) {
    element.classList.add("active");
  });
});
