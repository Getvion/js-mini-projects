"use strict";

const openBtn = document.querySelector('#open'),
   closeBtn = document.querySelector('#close'),
   container = document.querySelector('.container');

openBtn.addEventListener('click', () => {
   container.classList.add('show-nav');
});

closeBtn.addEventListener('click', () => {
   container.classList.remove('show-nav');
});