document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
  
    let currentIndex = 0;
  
    nextBtn.addEventListener("click", function () {
      currentIndex = Math.min(currentIndex + 1, slider.children.length - 3);
      updateSlider();
    });
  
    prevBtn.addEventListener("click", function () {
      currentIndex = Math.max(currentIndex - 1, 0);
      updateSlider();
    });
  
    function updateSlider() {
      const translateValue = -currentIndex * 100 + "%";
      slider.style.transform = "translateX(" + translateValue + ")";
    }
  });
  