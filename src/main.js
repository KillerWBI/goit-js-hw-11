import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from './js/pixabay-api.js';
import { clearGallery, createGallery, hideLoader, showLoader } from './js/render-functions.js';

const form = document.querySelector('.form');
const searchInput = document.querySelector('input[name="search-text"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  clearGallery();
  showLoader();
  const query = searchInput.value.trim();
  if (!query)  {
    hideLoader();
    iziToast.warning({
        title: 'Warning',
        message: 'Please enter a search term!',
        timeout: 3000,
        position: 'topRight',
      });
      return;
  }

  getImagesByQuery(query).then(data => {
    if (data && data.hits && data.hits.length > 0) {
      createGallery(data.hits);
    } else {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, no images found. Try again!',
        timeout: 3000,
        position: 'topRight',
      });;
    }
  })
  .catch(error => {
    iziToast.error({
      title: 'Error',
      message: `An error occurred: ${error.message}`,
      timeout: 3000,
      position: 'topRight',
    });
  })
  .finally(() => {
    hideLoader();
    searchInput.value = '';
  }   )
});
