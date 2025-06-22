import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');

let lightbox;

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function createGallery(images) {
  const markup = images.map(image => `
    <li>
      <a class="gallery__item" href="${image.largeImageURL}">
        <img class="gallery__image" src="${image.webformatURL}" alt="${image.tags}" />
      </a>
      <span>
        <div><h5>Likes</h5><p>${image.likes}</p></div>
        <div><h5>Views</h5><p>${image.views}</p></div>
        <div><h5>Comments</h5><p>${image.comments}</p></div>
        <div><h5>Downloads</h5><p>${image.downloads}</p></div>
      </span>
    </li>
  `).join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);

if (!lightbox){
  lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}else {
  lightbox.refresh();
}

}

const loader = document.querySelector('.loaderContainer');

export function showLoader() {
  loader.classList.remove('novisible');
}

export function hideLoader() {
  loader.classList.add('novisible');
}
