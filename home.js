const images = ["img/5.png", "img/4.jpg", "img/2.png", "img/3.jpg"];
let currentImageIndex = 0;
function changeImage() {
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = `<img src="${images[currentImageIndex]}" alt="Image ${currentImageIndex + 1}">`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}
setInterval(changeImage, 2500);

function load(){
    location.replace("SignUp.html");
}