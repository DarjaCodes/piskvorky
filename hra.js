let currentPlayer = 'circle';

const selectLogo = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.contains('board__field--cross');
    event.target.classList.add('board__field--circle');
    document.querySelector('#player-indicator').src = 'images/circle2.svg';
    currentPlayer = 'cross';
    event.target.disabled = true;
  } else if (currentPlayer === 'cross') {
    event.target.classList.contains('board__field--circle');
    event.target.classList.add('board__field--cross');
    document.querySelector('#player-indicator').src = 'images/cross2.svg';
    currentPlayer = 'circle';
    event.target.disabled = true;
  }
};

const confirmE = (event) => {
  const UserConfirmed = confirm('Opravdu chcete zacit znovu?');
  if (UserConfirmed === false) {
    event.preventDefault();
  }
};
document
  .querySelector('button:nth-child(1)')
  .addEventListener('click', selectLogo);
document
  .querySelector('button:nth-child(2)')
  .addEventListener('click', selectLogo);
document
  .querySelector('button:nth-child(3)')
  .addEventListener('click', selectLogo);
document
  .querySelector('button:nth-child(4)')
  .addEventListener('click', selectLogo);
document
  .querySelector('button:nth-child(5)')
  .addEventListener('click', selectLogo);
document
  .querySelector('button:nth-child(6)')
  .addEventListener('click', selectLogo);
document
  .querySelector('button:nth-child(5)')
  .addEventListener('click', selectLogo);
document
  .querySelector('button:nth-child(7)')
  .addEventListener('click', selectLogo);
document
  .querySelector('button:nth-child(8)')
  .addEventListener('click', selectLogo);
document
  .querySelector('button:nth-child(9)')
  .addEventListener('click', selectLogo);
document
  .querySelector('button:nth-child(10)')
  .addEventListener('click', selectLogo);

document
  .querySelector('.menu__buttons--restart')
  .addEventListener('click', confirmE);
