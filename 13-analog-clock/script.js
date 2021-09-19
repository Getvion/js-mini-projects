const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
  "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

toggle.addEventListener('click', (event) => {
  const html = document.querySelector('html');

  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    event.target.innerHTML = 'Переключить на темную тему';
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.add('dark');
    event.target.innerHTML = 'Переключить на светлую тему';
    localStorage.setItem('theme', 'dark');
  }
});

function checkLocalStorage() {
  const html = document.querySelector('html');

  if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
    console.log(html.classList);
  } else {
    html.classList.remove('dark');
  }
}
checkLocalStorage();

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const HoursForClock = hours % 12;
  let minutes = time.getMinutes();
  const seconds = time.getSeconds();


  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(HoursForClock, 0, 12, 0, 360)}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  timeEl.innerHTML = `${hours} : ${minutes}`;
  dateEl.innerHTML = `<span class="">${date}</span> ${months[month]}, ${days[day]} `;
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

setTime();

setInterval(setTime, 1000);

