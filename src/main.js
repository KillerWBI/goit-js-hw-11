import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from './js/pixabay-api.js';
import { clearGallery, createGallery } from './js/render-functions.js';
//showLoader, hideLoader
const form = document.querySelector('.form');
const searchInput = document.querySelector('input[name="search-text"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const query = searchInput.value.trim();
  if (!query) return;

  getImagesByQuery(query).then(data => {
    if (data && data.hits && data.hits.length > 0) {
      clearGallery();
      createGallery(data.hits);
    } else {
      clearGallery();
      iziToast.error({
        title: 'Error',
        message: 'Sorry, no images found. Try again!',
        timeout: 3000,
        position: 'topRight',
      });
    }
  });
});
