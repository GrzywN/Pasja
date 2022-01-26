const leftBtn = document.querySelector(".section__btn--left");
const rightBtn = document.querySelector(".section__btn--right");
const imgs = document.querySelectorAll(".section__img");

let currentSlide = 1;
let currentTransform = 0;

setInterval(() => {
    if (currentSlide != imgs.length) {
        currentSlide++;
        currentTransform = currentSlide * 100 - 100;
        for (i = 0; i < imgs.length; i++) {
            imgs[i].style.transform = "translateX(-" + currentTransform + "%)";
        }
    }
    else {
        currentSlide = 1;
        currentTransform = currentSlide * 100 - 100;
        for (i = 0; i < imgs.length; i++) {
            imgs[i].style.transform = "translateX(-" + currentTransform + "%)";
        }
    }
}, 7000);

leftBtn.addEventListener("click", () => {
    if (currentSlide != 1) {
        currentSlide--;
        currentTransform = currentSlide * 100 - 100;
        for (i = 0; i < imgs.length; i++) {
            imgs[i].style.transform = "translateX(-" + currentTransform + "%)";
        }
    }
    else {
        currentSlide = imgs.length;
        currentTransform = currentSlide * 100 - 100;
        for (i = 0; i < imgs.length; i++) {
            imgs[i].style.transform = "translateX(-" + currentTransform + "%)";
        }
    }
})

rightBtn.addEventListener("click", () => {
    if (currentSlide != imgs.length) {
        currentSlide++;
        currentTransform = currentSlide * 100 - 100;
        for (i = 0; i < imgs.length; i++) {
            imgs[i].style.transform = "translateX(-" + currentTransform + "%)";
        }
    }
    else {
        currentSlide = 1;
        currentTransform = currentSlide * 100 - 100;
        for (i = 0; i < imgs.length; i++) {
            imgs[i].style.transform = "translateX(-" + currentTransform + "%)";
        }
    }
})