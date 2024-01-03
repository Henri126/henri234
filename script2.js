function toggleMenu() {
    const menuLinks = document.getElementById('menuLinks');
    menuLinks.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function() {
    const imageExplorer = document.getElementById('imageExplorer');

    const imageData = [
        { url: '28t.12.2023.png', date: '28-12-2023 test pic' },
        { url: '28.12.2023_1.png', date: '28-12-2023' },
        { url: '28.12.2023_2.png', date: '28-12-2023' },
        { url: '28.12.2023_3.png', date: '28-12-2023' },
        { url: '28.12.2023_4.png', date: '28-12-2023' },
        { url: '29.12.2023_1.png', date: '29-12-2023' },
        { url: '29.12.2023_2.png', date: '29-12-2023' },
        { url: '29.12.2023_3.png', date: '29-12-2023' },
        { url: '29.12.2023_4.png', date: '29-12-2023' },
        { url: 'tokyo1.png ', date: '29-12-2023 (the bible tokyo drift 2)' },
        { url: 'tokyo2.png', date: '29-12-2023 (the bible tokyo drift 2)' },
        { url: 'tokyo3.png', date: '29-12-2023 (the bible tokyo drift 2)' },
        { url: 'tokyo4.png', date: '29-12-2023 (the bible tokyo drift 2)' },
        { url: 'tokyo5.png', date: '29-12-2023 (the bible tokyo drift 2)' },
        { url: 'tokyo6.png', date: '29-12-2023 (the bible tokyo drift 2)' },
        { url: '30t.12.2023.png', date: '30-12-2023 MC picture wall test (old name btw)' },
        { url: '31.12.2023_1.png', date: '31-12-2023' },
        { url: '31.12.2023_2.png', date: '31-12-2023' },
        { url: '31.12.2023_3.png', date: '31-12-2023' },
        { url: '31.12.2023_4.png', date: '31-12-2023' },
        { url: '31.12.2023_5.png', date: '31-12-2023' },
        { url: '31.12.2023_6.png', date: '31-12-2023' },
        { url: '31.12.2023_7.png', date: '31-12-2023' },
        { url: '31.12.2023_8.png', date: '31-12-2023' },
        { url: '31.12.2023_9.png', date: '31-12-2023' },
        //{ url: '03t.01.2024_1.png', date: '03-01-2024' },
        //{ url: '03t.01.2024_2.png', date: '03-01-2024' },
    ];

    const groupedImages = groupByDate(imageData);

   
    renderImageExplorer(groupedImages, imageExplorer);

    function groupByDate(images) {
        const grouped = {};
        images.forEach(image => {
            if (!grouped[image.date]) {
                grouped[image.date] = [];
            }
            grouped[image.date].push(image);
        });
        return grouped;
    }

    function renderImageExplorer(groupedImages, container) {
        Object.keys(groupedImages).forEach(date => {
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('image-container');

            const dateHeader = document.createElement('div');
            dateHeader.classList.add('date-header');
            dateHeader.textContent = date;
            imageContainer.appendChild(dateHeader);

            const thumbnailContainer = document.createElement('div');
            thumbnailContainer.classList.add('thumbnail-container');

            groupedImages[date].forEach(image => {
                const thumbnail = document.createElement('div');
                thumbnail.classList.add('thumbnail');

                const img = document.createElement('img');
                img.src = image.url;
                img.alt = `Image from ${date}`;
                img.addEventListener('click', () => openImage(image.url));

                thumbnail.appendChild(img);
                thumbnailContainer.appendChild(thumbnail);
            });

            imageContainer.appendChild(thumbnailContainer);
            container.appendChild(imageContainer);
        });
    }

    function openImage(imageUrl) {
      
        const modal = document.createElement('div');
        modal.classList.add('modal');

        const fullImage = document.createElement('img');
        fullImage.src = imageUrl;
        fullImage.alt = 'Full-size Image';

        modal.appendChild(fullImage);
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

function toggleMenu() {
    const menuLinks = document.getElementById('menuLinks');
    menuLinks.classList.toggle('show');
}

