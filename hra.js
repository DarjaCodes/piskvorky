import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';
const buttonsClick = document.querySelectorAll('.box');
const playerIndicator = document.querySelector('#player-indicator');

// Obecná funkce pro zpracování tahu a kontrolu výsledku, API
const handleMove = async (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.toggle('board__field--circle');
    playerIndicator.src = 'images/cross2.svg';
    currentPlayer = 'cross';
  } else if (currentPlayer === 'cross') {
    event.target.classList.toggle('board__field--cross');
    playerIndicator.src = 'images/circle2.svg';
    currentPlayer = 'circle';
  }
  event.target.disabled = true;

  const buttonsArray = Array.from(buttonsClick).map((field) => {
    if (field.classList.contains('board__field--cross')) {
      return 'x';
    } else if (field.classList.contains('board__field--circle')) {
      return 'o';
    } else {
      return '_';
    }
  });

  const winner = findWinner(buttonsArray);
  if (winner === 'x' || winner === 'o' || winner === 'tie') {
    setTimeout(() => {
      if (winner === 'tie') {
        alert('Hra skoncila remízou');
      } else {
        alert(`Vyhrál hráč ${winner.toUpperCase()}`);
      }
      location.reload();
    }, 1000);
  }

  if (currentPlayer === 'cross') {
    const response = await fetch(
      'https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          board: buttonsArray,
          player: 'x',
        }),
      },
    );

    const data = await response.json();
    const { x, y } = data.position;
    const field = buttonsClick[x + y * 10];
    field.click();
  }
};

// Posluchace události a zavolání funkce
document.querySelectorAll('.box').forEach((button) => {
  button.addEventListener('click', handleMove);
});

// Ošetření restartu
document
  .querySelector('.menu__buttons--restart')
  .addEventListener('click', (event) => {
    const userReply = confirm('Opravdu chcete začít znovu?');
    if (userReply === false) {
      event.preventDefault();
    }
  });
