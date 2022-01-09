const navToggle = document.querySelector(".nav-bar__menu-toggle");
const nav = document.querySelector(".nav-bar__nav")

var buttonChecked = false;

navToggle.addEventListener("click", () => {
    if (nav.style.transform === "translateX(100%)") {
        buttonChecked = true;
        nav.style.transform = "translateX(0%)";
    } else if (nav.style.transform === "translateX(0%)") {
        buttonChecked = false;
        nav.style.transform = "translateX(100%)";
    }
    else {
        buttonChecked = true;
        nav.style.transform = "translateX(0%)";
    }
})

window.addEventListener("resize", () => {
    if (document.documentElement.clientWidth >= 562) {
        if (nav.style.transform === "translateX(100%)") {
            nav.style.transform = "translateX(0%)";
        }
    }
})

window.addEventListener("resize", () => {
    if (document.documentElement.clientWidth < 562) {
        if (buttonChecked === true) {
            nav.style.transform = "translateX(0%)";
        }
        else {
            nav.style.transform = "translateX(100%)";
        }
    }
})

// Skrypt ze strony: https://css-tricks.com/stop-animations-during-window-resizing/
// Przy zmianie rozmiaru okna, wyłącza animację dla określonych klasą resize-animation-stopper znaczników

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('form[action^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('action')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});