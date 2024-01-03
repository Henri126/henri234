document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('.footer');
    const viewPicturesButton = document.getElementById('viewPicturesButton');
    const viewVideosButton = document.getElementById('viewVideosButton');

    viewPicturesButton.addEventListener('click', function() {
        window.location.href = 'pictures.html';
    });

    viewVideosButton.addEventListener('click', function() {
        window.location.href = 'video.html';
    });

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
