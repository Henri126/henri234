function openPlaylist(playlistUrl) {
    window.location.href = playlistUrl;
}

function toggleMenu() {
    const menuLinks = document.getElementById('menuLinks');
    menuLinks.classList.toggle('show');
}