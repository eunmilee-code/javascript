const imageUrl = document.getElementById('imageUrl');
const loadImageButton = document.getElementById('loadImageButton');
const imageContainer = document.getElementById('imageContainer');

loadImageButton.addEventListener('click', function() {
    const img = new Image();
    img.src = imageUrl.value;
    img.alt = "User provided image";

    img.onload = function() {
        imageContainer.innerHTML = ''; // Clear previous images
        imageContainer.appendChild(img);
    };

    img.onerror = function() {
        alert('Failed to load the image. Please check the URL.');
    };
});
