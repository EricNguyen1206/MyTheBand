let slideIndex = 0;
let slides = document.getElementsByClassName("slider__item");
for (i = 0; i < slides.length; i++) {
    if (i == slideIndex) {
        slides[i].style.display = "block";
    } else {
        slides[i].style.display = "none";
    }
}

function showSlides() {
    let dots = document.getElementsByClassName("dot");
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

setInterval(showSlides, 3000); // Change image every 5 seconds
