const sliderWrapper = document.getElementById('sliderWrapper');
let startX = 0;
let isSwiping = false;

// Check if the screen width is less than a certain breakpoint to enable swipe
const enableSwipe = window.innerWidth <= 768; // Adjust the breakpoint as needed

if (enableSwipe) {
    sliderWrapper.addEventListener('touchstart', handleTouchStart);
    sliderWrapper.addEventListener('touchmove', handleTouchMove);
    sliderWrapper.addEventListener('touchend', handleTouchEnd);
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

    const currentTransform = getComputedStyle(sliderWrapper).transform;
    const currentTranslateX = new WebKitCSSMatrix(currentTransform).m41;

    sliderWrapper.style.transform = `translateX(${currentTranslateX - difference}px)`;
}

function handleTouchEnd() {
    isSwiping = false;
}
