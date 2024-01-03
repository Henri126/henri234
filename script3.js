function toggleMenu() {
    const menuLinks = document.getElementById('menuLinks');
    menuLinks.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function () {
    const videoExplorer = document.getElementById('videoExplorer');

   const videoData = [
        { url: '30t-12-2023_1.mp4', date: '30-12-2023'},
        { url: '30t-12-2023_2.mp4', date: '30-12-2023'},
        { url: '30t-12-2023_3.mp4', date: '30-12-2023'},
        { url: '02.01.2024.mp4', date: '02-01-2024'},
    ];

    const groupedVideos = groupByDate(videoData);

    renderVideoExplorer(groupedVideos, videoExplorer);

    function groupByDate(videos) {
        const grouped = {};
        videos.forEach(video => {
            if (!grouped[video.date]) {
                grouped[video.date] = [];
            }
            grouped[video.date].push(video);
        });
        return grouped;
    }

    function renderVideoExplorer(groupedVideos, container) {
        Object.keys(groupedVideos).forEach(date => {
            const videoContainer = document.createElement('div');
            videoContainer.classList.add('video-container');

            const dateHeader = document.createElement('div');
            dateHeader.classList.add('date-header');
            dateHeader.textContent = date;
            videoContainer.appendChild(dateHeader);

            const thumbnailContainer = document.createElement('div');
            thumbnailContainer.classList.add('thumbnail-container');

            groupedVideos[date].forEach(video => {
                const thumbnail = document.createElement('div');
                thumbnail.classList.add('thumbnail');

                const iframe = document.createElement('iframe');
                iframe.src = video.url;
                iframe.frameBorder = '0';
                iframe.allowFullscreen = true;
                thumbnail.appendChild(iframe);

                thumbnail.addEventListener('click', () => openVideo(video.url));

                thumbnailContainer.appendChild(thumbnail);
            });

            videoContainer.appendChild(thumbnailContainer);
            container.appendChild(videoContainer);
        });
    }

    function openVideo(videoUrl) {
        const modal = document.createElement('div');
        modal.classList.add('modal');

        const iframe = document.createElement('iframe');
        iframe.src = videoUrl;
        iframe.frameBorder = '0';
        iframe.allowFullscreen = true;

        modal.appendChild(iframe);
        document.body.appendChild(modal);

        modal.addEventListener('click', () => {
            modal.remove();
        });
    }

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollPosition >= documentHeight - window.innerHeight) {
            footer.style.display = 'block';
        } else {
            footer.style.display = 'none';
        }
    });

    window.dispatchEvent(new Event('scroll'));
});

