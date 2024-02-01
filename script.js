document.addEventListener("DOMContentLoaded", function () {
   const wrapper = document.querySelector(".slider-wrapper");
   const prevButton = document.querySelector(".prev-button");
   const nextButton = document.querySelector(".next-button");
   const itemWidth = document.querySelector(".slider-item").offsetWidth;

   prevButton.addEventListener("click", prevSlide);
   nextButton.addEventListener("click", nextSlide);

   // Check if the screen width is less than a certain breakpoint to enable swipe
   const enableSwipe = window.innerWidth <= 768; // Adjust the breakpoint as needed

   if (enableSwipe) {
       wrapper.addEventListener('touchstart', handleTouchStart);
       wrapper.addEventListener('touchmove', handleTouchMove);
       wrapper.addEventListener('touchend', handleTouchEnd);
   }
});

let currentIndex = 0;
const slider = document.querySelector(".slider-wrapper");
const itemWidth = document.querySelector(".slider-item").offsetWidth;
let startX = 0;
let isSwiping = false;

function showSlide(index) {
   currentIndex = index;
   const translateValue = -index * (100 / 3) + "%"; // Assuming 3 items visible at a time
   slider.style.transform = `translateX(${translateValue})`;
}

function nextSlide() {
   if (currentIndex < slider.children.length - 3) {
       showSlide(currentIndex + 1);
   }
}

function prevSlide() {
   if (currentIndex > 0) {
       showSlide(currentIndex - 1);
   }
}

function handleTouchStart(event) {
   isSwiping = true;
   startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
   if (!isSwiping) return;

   const currentX = event.touches[0].clientX;
   const difference = startX - currentX;

   const moveAmount = 200;

   const currentTransform = getComputedStyle(slider).transform;
   const currentTranslateX = new WebKitCSSMatrix(currentTransform).m41;

   slider.style.transform = `translateX(${currentTranslateX - difference}px)`;
}

function handleTouchEnd() {
   isSwiping = false;
}


 


