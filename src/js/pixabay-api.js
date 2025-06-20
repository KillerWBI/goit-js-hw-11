import axios from 'axios';

const API_KEY = '47565295-21d9cae95d17646b4d8ee5128'; // заміни на свій API ключ
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true
    }
  })
  .then(response => {
    return response.data;
  })
  .catch(error => {
    console.log('Помилка при завантаженні зображень:', error.message);
    return null;
  });
}

