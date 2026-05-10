// NAV — active link

const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
});
});


// NAV — hide on scroll down, show on scroll up

let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
const current = window.scrollY;

if (current > lastScroll && current > 80) {
    nav.style.transform = 'translateY(-100%)';
    nav.style.transition = 'transform 0.3s ease';
} else {
    nav.style.transform = 'translateY(0)';
}

lastScroll = current;
});

// HIRE ME button — smooth scroll / placeholder action

const hireMeBtn = document.querySelector('.btn-primary');

hireMeBtn.addEventListener('click', () => {

const contact = document.querySelector('#contact');
if (contact) {
    contact.scrollIntoView({ behavior: 'smooth' });
} else {
    alert('Contact section coming soon!');
}
});

// View portofolio button // 
const portofolioBtn = document.querySelector('.btn-ghost');

portofolioBtn.addEventListener('click', () => {
const portofolio = document.querySelector('#portofolio');
if (portofolio) {
    portofolio.scrollIntoView({ behavior: 'smooth' });
}
});