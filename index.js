document.addEventListener("DOMContentLoaded", function () {
  let elementsToAnimate = document.querySelectorAll(".animate-on-load");

  elementsToAnimate.forEach(function (element) {
    element.classList.add("active");
  });
});

let img;
let x, y;
let xSpeed, ySpeed;
let divWidth, divHeight;

function preload() {
  img = loadImage("resources/monchen.png"); // Replace with the path to your image
}

function setup() {
  divWidth = document.getElementById("canvas-container").clientWidth;
  divHeight = document.getElementById("canvas-container").clientHeight;

  createCanvas(divWidth, divHeight).parent("canvas-container");

  x = divWidth / 2;
  y = divHeight / 2;

  xSpeed = 5;
  ySpeed = 3;

  img.resize(80, 0);
}

function draw() {
  clear();

  // Bounce on the edges
  x += xSpeed;
  y += ySpeed;

  if (x > divWidth - img.width / 2 || x < img.width / 2) {
    xSpeed *= -1;
  }

  if (y > divHeight - img.height / 2 || y < img.height / 2) {
    ySpeed *= -1;
  }

  // Display the image at the current position
  imageMode(CENTER);
  image(img, x, y);
}
