const board = document.querySelector('#board');
const colors = ['red', 'orange', 'yellow', 'gold', 'blue', 'green', 'purple', 'pink'];
const input = document.querySelector('.select__input');
const addBtn = document.querySelector('.select__button');

let squaresNumber = 0;

addBtn.addEventListener('click', selectSquareCount);

input.addEventListener('keyup', function (event) {
  if (event.keyCode == 13) {
    selectSquareCount();
  }
});
function selectSquareCount() {
  squaresNumber = input.value;
  console.log(squaresNumber);

  input.value = '';

  for (let i = 0; i < squaresNumber; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
      setColor(square);
    });

    square.addEventListener('mouseleave', () => {
      removeColor(square);
    });
    board.append(square);
  }
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = ` 0 0 1px ${color}, 0 0 10px ${color}`;
}
function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = ` 0 0 1px #000`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}