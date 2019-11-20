const image_container = document.querySelector(".slider-images");
const slider_images = document.querySelectorAll(".slider-images img");
const slider_order = document.querySelectorAll(".dots-container .slider-dot");
const slider_dots = document.querySelectorAll(".slider-dot");

const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

let counter = 1;
let size = "";
let dots = Array.from(slider_dots);
let status = "";

//Default Setting
dots.forEach(ele => {
  ele.style.opacity = "0";
});
size = slider_images[0].clientWidth;
image_container.style.transform = "translateX(" + -size * 1 + "px)";
slider_order[0].style.backgroundColor = "white";

function slideToRight() {
  if (counter >= slider_images.length - 1) return;
  size = slider_images[0].clientWidth;
  counter++;
  slider_order[counter - 2].style.backgroundColor = "inherit";
  if (slider_images[counter].className === "first-image") {
    slider_order[0].style.backgroundColor = "white";
  } else {
    slider_order[counter - 1].style.backgroundColor = "white";
  }
  image_container.style.transform = "translateX(" + -size * counter + "px)";
  image_container.style.transition = "transform 1s ease-in-out";
}

//Buttons

function slideToLeft() {
  if (counter <= 0) return;
  size = slider_images[0].clientWidth;
  counter--;
  slider_order[counter].style.backgroundColor = "inherit";
  if (slider_images[counter].className === "last-image") {
    const image_length = slider_order.length - 1;
    slider_order[image_length].style.backgroundColor = "white";
  } else {
    slider_order[counter - 1].style.backgroundColor = "white";
  }
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

//Images Dots
function paintDots() {
  dots.forEach(ele => {
    ele.style.opacity = "1";
    ele.style.transition = "opacity 1s ease-in-out";
  });
}

function hideDots() {
  dots.forEach(ele => {
    ele.style.opacity = "0";
    ele.style.transition = "opacity 1s ease-in-out";
  });
}

function test(event) {
  console.log(event);
}

nextBtn.addEventListener("click", slideToRight);
prevBtn.addEventListener("click", slideToLeft);
dots.forEach(dot => dot.addEventListener("click", test));
nextBtn.addEventListener("mouseenter", paintDots);
prevBtn.addEventListener("mouseenter", paintDots);
image_container.addEventListener("transitionend", turningBack);
image_container.addEventListener("mouseenter", paintDots);
image_container.addEventListener("mouseleave", hideDots);
dots.forEach(dot => dot.addEventListener("mouseenter", paintDots));
