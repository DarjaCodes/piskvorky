import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';
const buttonsClick = document.querySelectorAll('.box');
const playerIndicator = document.querySelector('#player-indicator');

/* Prvni funkce pro zobrazeni symbolu a API*/
const selectLogo = async (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.toggle('board__field--circle');
    playerIndicator.src = 'images/cross2.svg';
    currentPlayer = 'cross';
    event.target.disabled = true;
  } else if (currentPlayer === 'cross') {
    event.target.classList.toggle('board__field--cross');
    playerIndicator.src = 'images/circle2.svg';
    currentPlayer = 'circle';
    event.target.disabled = true;
  }

  if (currentPlayer === 'cross') {
    const buttonsArray = Array.from(buttonsClick).map((field) => {
      if (field.classList.contains('board__field--cross')) {
        return 'x';
      } else if (field.classList.contains('board__field--circle')) {
        return 'o';
      } else {
        return '_';
      }
    });

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
    console.log(data);
    field.click();
  }
};

/* Vytvoreni pole a druha funkce*/
const checkBoard = () => {
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
  if (winner === 'x') {
    setTimeout(() => {
      alert('Vyhrál hráč X');
      location.reload();
    }, 1000);
  } else if (winner === 'o') {
    setTimeout(() => {
      alert('Vyhrál hráč O');
      location.reload();
    }, 1000);
  } else if (winner === 'tie') {
    setTimeout(() => {
      alert('Hra skoncila remízou');
      location.reload();
    }, 1000);
  }
};
/* Posluchace udalosti*/
document.querySelectorAll('.box').forEach((button) => {
  button.addEventListener('click', function () {
    selectLogo(event);
    checkBoard();
  });
});

/* Osetreni restartu*/
document
  .querySelector('.menu__buttons--restart')
  .addEventListener('click', (event) => {
    const userReply = confirm('Opravdu chcete začít znovu?');
    if (userReply === false) {
      event.preventDefault();
    }
  });
