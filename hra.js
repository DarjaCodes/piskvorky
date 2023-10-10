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
};

const confirmE = (event) => {
  const UserReply = confirm('Opravdu chcete začít znovu?');
  if (UserReply === false) {
    event.preventDefault();
  }
};
const ButtonsClick = document.querySelectorAll('.box');
ButtonsClick.forEach((button) => {
  button.addEventListener('click', selectLogo);
});
