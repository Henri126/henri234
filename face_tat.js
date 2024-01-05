document.addEventListener('DOMContentLoaded', function () {
    var audioPlayerContainer = document.getElementById('audioPlayerContainer');
    var audioPlayer = document.getElementById('audioPlayer');
    var playlist = document.getElementById('playlist');

    playlist.addEventListener('click', function (event) {
        var target = event.target;

        if (target.tagName === 'LI' && target.dataset.src) {
            
            audioPlayer.src = target.dataset.src;
            audioPlayer.play();

            audioPlayerContainer.style.display = 'block';
        }
    });
});