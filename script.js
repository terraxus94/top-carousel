const wrapper = document.querySelector('.wrapper');
let counter = 0;

(function addEventHandlers() {
  const previousSlide = wrapper.querySelector('.previous-slide');
  const nextSlide = wrapper.querySelector('.next-slide');

  previousSlide.addEventListener('click', displayPreviousSlide);
  nextSlide.addEventListener('click', displayNextSlide);
})();

function clearActiveSlides() {
  const slideContainer = wrapper.querySelector('.slide-container');
  let slides = slideContainer.querySelectorAll('.carousel-slide');

  slides.forEach((slide) => {
    if (slide.className.includes('active-slide')) {
      slide.classList.remove('active-slide');
    }
  });
}

function displaySlide(i) {
  const slideContainer = wrapper.querySelector('.slide-container');
  let slides = slideContainer.querySelectorAll('.carousel-slide');

  slides.forEach((slide, slideNumber) => {
    if (slideNumber == i) {
      slide.classList.add('active-slide');
    }
  });
}

function correctSlideCounter(counter) {
  const slideContainer = wrapper.querySelector('.slide-container');
  let slides = slideContainer.querySelectorAll('.carousel-slide');

  if (counter > slides.length - 1) {
    counter = counter - slides.length;
  }

  if (counter < 0) {
    counter = counter + slides.length;
  }

  return counter;
}

function changeSlides() {
  clearActiveSlides();
  displaySlide(correctSlideCounter(counter));
}

function displayPreviousSlide() {
  counter--;
  changeSlides();
  console.log('prev slide');
}

function displayNextSlide() {
  counter++;
  changeSlides();
  console.log('next slide');
}

changeSlides();
