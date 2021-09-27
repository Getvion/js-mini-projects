let API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const form = document.querySelector('#form');
const search = document.querySelector('#search');
const main = document.querySelector('#main');
const buttons = document.querySelector('.buttons');
const nextBtn = document.querySelector('.next__btn');
const prevBtn = document.querySelector('.prev__btn');
const logo = document.querySelector('.logo');

logo.addEventListener('click', (event) => {
  event.preventDefault();
  getMovies(API_URL);
});

let i = 1;
buttons.addEventListener('click', (event) => {
  let target = event.target;
  if (target === nextBtn) {
    i++;
    getMovies(API_URL + i);
  }
  if (target === prevBtn && i > 1) {
    i--;
    getMovies(API_URL + i);
  }

});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  buttons.style.display = 'none';
  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);

    search.value = '';
  } else {
    window.location.reload();
  }
});

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = '';

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');

    movieEl.innerHTML = `
    <img src="${IMG_PATH + poster_path}" alt="${title}">
    <div class="movie-info">
    <h3>${title}</h3>
    <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
    <h3>Overview</h3>
    ${overview}
    </div>
    `;
    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}
getMovies(API_URL);