const imageStack = document.querySelector(".image-stack");
const stackCards = document.querySelectorAll(".stack-card");

imageStack.addEventListener("mouseenter", function () {
  stackCards.forEach(function (card) {
    if (card.classList.contains("position-front")) {
      card.classList.remove("position-front");
      card.classList.add("position-middle");
    } else if (card.classList.contains("position-middle")) {
      card.classList.remove("position-middle");
      card.classList.add("position-back");
    } else if (card.classList.contains("position-back")) {
      card.classList.remove("position-back");
      card.classList.add("position-front");
    }
  });
});
const aboutInfo = document.querySelector(".about-info");

if (document.body.classList.contains("about-page-body") && aboutInfo) {
  window.addEventListener(
    "wheel",
    function (event) {
      event.preventDefault();
      aboutInfo.scrollTop += event.deltaY;
    },
    { passive: false }
  );
}