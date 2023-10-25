const images = ["img/image1.jpg", "img/image2.jpg", "img/image3.jpg"];
let currentIndex = 0;

const slideImage = document.getElementById('slideImage');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

prevButton.addEventListener('click', function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    slideImage.src = images[currentIndex];
});

nextButton.addEventListener('click', function() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    slideImage.src = images[currentIndex];
});
