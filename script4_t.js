document.addEventListener('DOMContentLoaded', function() {
    const viewPicturesButton = document.getElementById('viewPicturesButton');
    const viewVideosButton = document.getElementById('viewVideosButton');
    const newsContainer = document.getElementById('newsContainer'); 

    const newsData = [
        {date: '05-01-2024', content: 'added music wall.'},
        {date: '05-01-2024', content: 'removed the coming soon for the homepage and fixed the navbar in picture wall.'},
        {date: '03-01-2024', content: 'new video wall.'},
        {date: '03-01-2024', content: 'new news section and news images.'},
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
     
});

function showNews(date, content) {
    alert(content); 
}

function toggleMenu() {
    const menuLinks = document.getElementById('menuLinks');
    menuLinks.classList.toggle('show');
}
