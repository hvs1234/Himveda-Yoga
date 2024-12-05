// Scroll To Top

var scroll = document.querySelector('.scroll-top');
scroll.addEventListener('click',() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});