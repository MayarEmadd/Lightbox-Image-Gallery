let imgsList = Array.from(document.getElementsByClassName('img-item'));
let lightboxContainer = document.querySelector('.lightbox-container');
let lightboxItem = document.querySelector('.lightbox-item');
let currentIndex = 0;
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let closeButton = document.getElementById('close');

for (let i = 0; i < imgsList.length; i++) {
    imgsList[i].addEventListener('click', function (e) {

        currentIndex = imgsList.indexOf(e.target);

        let imgSrc = e.target.getAttribute('src')
        lightboxContainer.classList.replace('d-none', 'd-flex')
        lightboxItem.style.backgroundImage = `url(${imgSrc})`;
    })
}

function nextSlide() {
    currentIndex++;

    if (currentIndex == imgsList.length) {
        currentIndex = 0;
    }

    let imgSrc = imgsList[currentIndex].getAttribute('src');
    lightboxItem.style.backgroundImage = `url(${imgSrc})`;
}

nextButton.addEventListener('click', nextSlide);


function prevSlide() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = imgsList.length - 1;
    }

    let imgSrc = imgsList[currentIndex].getAttribute('src');
    lightboxItem.style.backgroundImage = `url(${imgSrc})`;
}

prevButton.addEventListener('click', prevSlide);


function closeSlide()
{
    lightboxContainer.classList.replace('d-flex' , 'd-none');
}

closeButton.addEventListener('click' , closeSlide);



document.addEventListener('keydown' , function(e){

    if(e.key == 'ArrowRight')
    {
        nextSlide();
    }
    else if (e.key == 'ArrowLeft')
    {
        prevSlide();
    }
    else if (e.key == 'Escape')
    {
        closeSlide();
    }
})



