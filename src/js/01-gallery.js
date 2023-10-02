import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryElement = document.querySelector('.gallery');
const gallery = galleryItems.map((image) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
    </a>
  </li>
`);

galleryElement.innerHTML = gallery.join('');
const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
  captionsData: "alt",
  // overlayOpacity: 0.7,
});
gallery.style.listStyleType = none;
console.log(galleryItems);
