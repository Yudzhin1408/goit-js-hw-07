import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');


const imagesEl = galleryItems.map(({ preview, original, description }) =>
        `<div class="gallery__item">
        <a  class="gallery__link" href="${original}">
        <img class="gallery__image" src='${preview}' data-source='${original}' alt='${description}'</img>
        </a></div>`
).join('');
    
galleryEl.insertAdjacentHTML('beforeend',imagesEl);

// open
galleryEl.addEventListener('click', openGallery);

function openGallery(evt) {
    evt.preventDefault()
    
    if (evt.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)
    instance.show()
};

//close

