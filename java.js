const slide = document.querySelector(".slide");

const images = [" ./images/bath decor/B8.jpg", "./images/home decor/D2.jpg", "./images/office decor/k3.jpg", "./images/room decor/B10.jpg", "./images/room decor/G10.jpg"];




let slideIndex = 0;


function slideImages() {
    slideIndex += 1;


    if (slideIndex > images.length - 1)

        slideIndex = 0;

    slide.style.backgroundImage = "url('" + images[slideIndex] + "')"

}



setInterval(slideImages, 4000)