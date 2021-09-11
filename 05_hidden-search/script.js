'use strict';

const search = document.querySelector('.search'),
   btn = document.querySelector('.btn'),
   input = document.querySelector('.input');

btn.addEventListener('click', function () {
   search.classList.toggle('active');
   input.focus();
});
