document.addEventListener("DOMContentLoaded", function () {
  let elementsToAnimate = document.querySelectorAll(".animate-on-load");

  elementsToAnimate.forEach(function (element) {
    element.classList.add("active");
  });
});

let images = [];
let currentImageIndex = 0;
let x, y;
let xSpeed, ySpeed;
let divWidth, divHeight;
let initialPositionSet = false;

function preload() {
  images.push(loadImage('resources/fotos_kiev/kiev1.png'));
  images.push(loadImage('resources/fotos_kiev/kiev2.png')); 
  images.push(loadImage('resources/fotos_kiev/kiev3.png')); 
  images.push(loadImage('resources/fotos_kiev/kiev4.png')); 
}

function setup() {
  divWidth = document.getElementById('canvas-container').clientWidth;
  divHeight = document.getElementById('canvas-container').clientHeight;

  createCanvas(divWidth, divHeight).parent('canvas-container');

  // Set initial position randomly within the canvas
  x = random(images[currentImageIndex].width / 2, divWidth - images[currentImageIndex].width / 2);
  y = random(images[currentImageIndex].height / 2, divHeight - images[currentImageIndex].height / 2);

  xSpeed = 3;
  ySpeed = 3;

  // Resize the images to a smaller size
  for (let i = 0; i < images.length; i++) {
    images[i].resize(150, 0);
  }
}

function draw() {
  clear();

  // Bounce on the edges
  x += xSpeed;
  y += ySpeed;

  if (!initialPositionSet) {
    // Set the initial position only once
    x = constrain(x, images[currentImageIndex].width / 2, divWidth - images[currentImageIndex].width / 2);
    y = constrain(y, images[currentImageIndex].height / 2, divHeight - images[currentImageIndex].height / 2);
    initialPositionSet = true;
  }

  if (x > divWidth - images[currentImageIndex].width / 2 || x < images[currentImageIndex].width / 2) {
    xSpeed *= -1;
    changeImage();
  }

  if (y > divHeight - images[currentImageIndex].height / 2 || y < images[currentImageIndex].height / 2) {
    ySpeed *= -1;
    changeImage();
  }

  // Display the current image at the current position
  imageMode(CENTER);
  image(images[currentImageIndex], x, y);
}

function changeImage() {
  // Change to the next image in sequence
  currentImageIndex = (currentImageIndex + 1) % images.length;
}
