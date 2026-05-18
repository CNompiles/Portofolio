document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("ribbitNav");

    // Scroll Control: Transform into a ball when you go down 50px

    window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
        nav.classList.remove("js-open"); // 
    } else {
        nav.classList.remove("scrolled");
        nav.classList.remove("js-open");
    }
});

    // Click Function for Mobile / Ball (Opens-closes with click when scrolled)

    nav.addEventListener("click", (e) => {
        if (nav.classList.contains("scrolled")) {
            e.stopPropagation();
            nav.classList.toggle("js-open");
        }
    });

    // Close the menu if the user clicks anywhere else on the screen

    document.addEventListener("click", () => {
        if (nav) {
            nav.classList.remove("js-open");
        }
    });
});

// Typewritter effect

const words = ['Web Developer', 'UI Designer', 'Mobile Developer'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const el = document.getElementById('typewriter');

function type() {
    if (!el) return;
    const current = words[wordIndex];

    if (isDeleting) {
        el.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        el.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === current.length) {
        speed = 1800;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(type, speed);
}

if (el) {
    type();
}

// Button clicks and smooth scroll - Connecting menu links for smooth scrolling in sections

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Services buttons — Transfer to the contact page

document.querySelectorAll('.services-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        window.location.href = 'contact.html';
    });
});