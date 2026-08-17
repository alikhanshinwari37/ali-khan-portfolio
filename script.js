// ================= MOBILE MENU =================

function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("active");
}

function closeMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.remove("active");
}


// ================= ACTIVE NAVIGATION =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.style.color = "";

        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#00f5ff";
        }

    });

});


// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(
    ".section, .skill-card, .project-card, .hero-card"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});


// ================= CLOSE MENU ON OUTSIDE CLICK =================

document.addEventListener("click", (event) => {

    const menu = document.getElementById("mobileMenu");
    const button = document.querySelector(".menu-btn");

    if (
        menu &&
        menu.classList.contains("active") &&
        !menu.contains(event.target) &&
        !button.contains(event.target)
    ) {
        menu.classList.remove("active");
    }

});


// ================= CURRENT YEAR =================

const year = document.querySelector(".copyright");

if (year) {

    year.innerHTML =
        "© " +
        new Date().getFullYear() +
        " Ali Khan Shinwari. All Rights Reserved.";

}
/* ================= TYPING ANIMATION ================= */

const typingText = document.getElementById("typing-text");

const words = [
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Technology Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 55 : 100
    );
}

typeEffect();