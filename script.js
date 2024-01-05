document.addEventListener('DOMContentLoaded', function() {
    const viewPicturesButton = document.getElementById('viewPicturesButton');
    const viewVideosButton = document.getElementById('viewVideosButton');
    const viewNewsButton = document.getElementById('viewNewsButton');
    const newsContainer = document.getElementById('newsContainer'); 

    const newsData = [
        {date: '05-01-2024', content: 'removed the coming soon for the homepage and fixed the navbar in picture wall.'},
    ];

    renderNews(newsData, newsContainer);
   
    function renderNews(newsData, container) {
        newsData.forEach(newsItem => {
            const newsItemContainer = document.createElement('div');
            newsItemContainer.classList.add('news-item');
            newsItemContainer.dataset.date = newsItem.date;

            const dateHeader = document.createElement('h3');
            dateHeader.classList.add('date');
            dateHeader.textContent = newsItem.date;
            dateHeader.addEventListener('click', () => showNews(newsItem.date, newsItem.content));

            const newsContent = document.createElement('p');
            newsContent.classList.add('news-content');
            newsContent.textContent = newsItem.content;

            newsItemContainer.appendChild(dateHeader);
            newsItemContainer.appendChild(newsContent);
            container.appendChild(newsItemContainer);
        });
    }

    viewPicturesButton.addEventListener('click', function() {
        window.location.href = 'pictures.html';
    });

    viewVideosButton.addEventListener('click', function() {
        window.location.href = 'video.html';
    });

    viewNewsButton.addEventListener('click', function() {
        window.location.href = 'news.html';
    });

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            footer.style.display = 'block';
        } else {
            footer.style.display = 'none'
        }
    });
      
});

function toggleMenu() {
    const menuLinks = document.getElementById('menuLinks');
    menuLinks.classList.toggle('show');
}
