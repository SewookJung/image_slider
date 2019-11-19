const image_container = document.querySelector(".slider-images");
const slider_images = document.querySelectorAll(".slider-images img");

const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

let counter = 1;
let size = "";

size = slider_images[0].clientWidth;
image_container.style.transform = "translateX(" + -size * 1 + "px)";

function slideToRight() {
  if (counter >= slider_images.length - 1) return;
  size = slider_images[0].clientWidth;
  counter++;
  image_container.style.transform = "translateX(" + -size * counter + "px)";
  image_container.style.transition = "transform 1s ease-in-out";
}

function slideToLeft() {
  if (counter <= 0) return;
  size = slider_images[0].clientWidth;
  counter--;
  image_container.style.transform = "translateX(" + -size * counter + "px)";
  image_container.style.transition = "transform 1s ease-in-out";
}

function turningBack() {
  if (slider_images[counter].className === "first-image") {
    counter = slider_images.length - counter;
    image_container.style.transform = "translateX(" + -size * counter + "px)";
    image_container.style.transition = "none";
  }
  if (slider_images[counter].className === "last-image") {
    counter = slider_images.length - 2;
    image_container.style.transform = "translateX(" + -size * counter + "px)";
    image_container.style.transition = "none";
  }
}

nextBtn.addEventListener("click", slideToRight);
prevBtn.addEventListener("click", slideToLeft);
image_container.addEventListener("transitionend", turningBack);
