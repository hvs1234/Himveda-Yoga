// Sticky Navbar

const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);
observer.observe(sectionHero);

// Responsive Navbar

const header = document.querySelector('.header');
const mobile_nav = document.querySelector('.mobile-navbar-btn');

mobile_nav.addEventListener('click', () => {
    header.classList.toggle('active')
});
