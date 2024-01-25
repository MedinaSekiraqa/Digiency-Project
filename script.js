document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".slider-wrapper");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    const itemWidth = document.querySelector(".slider-item").offsetWidth;

 
    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
 });
 
 let currentIndex = 0;
 const slider = document.querySelector(".slider-wrapper");
 const prevButton = document.querySelector(".prev-button");
 const nextButton = document.querySelector(".next-button");
 const itemWidth = document.querySelector(".slider-item").offsetWidth;
 
 function showSlide(index) {
    currentIndex = index;
    const translateValue = -index * 33  + "%";
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
 prevButton.addEventListener("click", prevSlide);
 nextButton.addEventListener("click", nextSlide);