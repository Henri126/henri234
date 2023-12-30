document.addEventListener('DOMContentLoaded', function() {
    const imageExplorer = document.getElementById('imageExplorer');
    const footer = document.querySelector('.footer');


    const imageData = [
        { url: '28.12.2023_1.png', date: '28-12-2023' },
        { url: '28.12.2023_2.png', date: '28-12-2023' },
        { url: '28.12.2023_3.png', date: '28-12-2023' },
        { url: '28.12.2023_4.png', date: '28-12-2023' },
        { url: '29.12.2023_1.png', date: '29-12-2023' },
        { url: '29.12.2023_2.png', date: '29-12-2023' },
        { url: '29.12.2023_3.png', date: '29-12-2023' },
        { url: '29.12.2023_4.png', date: '29-12-2023' },
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