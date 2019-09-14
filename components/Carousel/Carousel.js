/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let carouselContainer = document.querySelector('.carousel-container');

carouselContainer.appendChild(createCarousel());
addFunctionality();

function createCarousel () {
  let carousel = document.createElement('div');
  let leftButton = document.createElement('div');
  let rightButton = document.createElement('div');

  let image1 = document.createElement('img');
  let image2 = document.createElement('img');
  let image3 = document.createElement('img');
  let image4 = document.createElement('img');

  carousel.appendChild(leftButton);
  carousel.appendChild(image1);
  carousel.appendChild(image2);
  carousel.appendChild(image3);
  carousel.appendChild(image4);
  carousel.appendChild(rightButton);

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  image1.setAttribute('src', './assets/carousel/mountains.jpeg');
  image2.setAttribute('src', './assets/carousel/computer.jpeg');
  image3.setAttribute('src', './assets/carousel/trees.jpeg');
  image4.setAttribute('src', './assets/carousel/turntable.jpeg');

  
  return carousel;
}

function addFunctionality() {
  let leftButton = document.querySelector('.left-button');
  let rightButton = document.querySelector('.right-button');

  let count = 0;
  let images = document.querySelectorAll('img');
  let current = images[0];

  current.classList.add('current');

  console.log(`Starting Index: ${count}`);

  function change(direction) {
    current.classList.remove('current');
    count += direction;
    if(direction === -1 && count < 0) {
      count = images.length - 1;
    }
    if(direction === 1 && count > images.length - 1) {
      count = 0
    }
    current = images[count];
    current.classList.add('current');
  }

  leftButton.addEventListener('click', event => {
    change(-1);
    let images = document.querySelectorAll('img');
    console.log(`Moved Left\nIndex: ${count}`);
    console.log(images[count]);
  })

  rightButton.addEventListener('click', event => {
    change(1);
    let images = document.querySelectorAll('img');
    console.log(`Moved Right\nIndex: ${count}`);
    console.log(images[count]);
  })

  change(0);
}
  