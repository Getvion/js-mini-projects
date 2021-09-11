
const button = document.querySelector('#button');
const card = document.querySelector('#card');

button.addEventListener('click', function () {
  // card.classList.toggle('content__hidden');

  if (card.classList.toggle('content__hidden')) {
    button.textContent = 'Open Block';
  } else {
    button.textContent = 'Close Block';
  }
});


