document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('.footer');

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            footer.style.display = 'block';
        } else {
            footer.style.display = 'none'
        }
    });
       
    observer.observe(document.querySelector('.footer'));
});

function toggleMenu() {
    const menuLinks = document.getElementById('menuLinks');
    menuLinks.classList.toggle('show');
}
