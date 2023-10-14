import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';

const selectLogo = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.contains('board__field--cross');
    event.target.classList.add('board__field--circle');
    document.querySelector('#player-indicator').src = 'images/cross2.svg';
    currentPlayer = 'cross';
    event.target.disabled = true;
  } else if (currentPlayer === 'cross') {
    event.target.classList.contains('board__field--circle');
    event.target.classList.add('board__field--cross');
    document.querySelector('#player-indicator').src = 'images/circle2.svg';
    currentPlayer = 'circle';
    event.target.disabled = true;
  }
  checkBoard();
};

const confirmE = (event) => {
  const UserReply = confirm('Opravdu chcete začít znovu?');
  if (UserReply === false) {
    event.preventDefault();
  }
};
const buttonsClick = document.querySelectorAll('.box');
buttonsClick.forEach((button) => {
  button.addEventListener('click', selectLogo);
});
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

document.querySelectorAll('.box').forEach((button) => {
  button.addEventListener('click', checkBoard);
});
