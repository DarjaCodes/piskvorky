// const buttontext = () => {
//   document.querySelector('.board__field--cross img').src = 'images/cross.svg';
// };
// buttontext();

// const changeBut = () => {
//   const PoleElm = document.querySelector('#but1 button');
//   PoleElm.className = '.board__field--circle'
//   butElm.addEventListener ('click', ())
// };

// const changeBut = () => {
//   const buttonElm = document.querySelector('#but1');
//   buttonElm.classList.add('board__field--circle'); // Přidání třídy
//   buttonElm.classList.remove('board__field--cross'); // Odebrání třídy
// };

// const butElm = document.querySelector('#but1');
// butElm.addEventListener('click', changeBut);

let currentPlayer = 'circle';

const selectLogo = (event) => {
  event.target.classList.add('board__field--circle');
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
