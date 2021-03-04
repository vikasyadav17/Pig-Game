'use strict';
const resetBtn = document.querySelector('.btn--new');
const score = document.querySelectorAll('.score');
const current = document.querySelectorAll('.current-score');
const players = document.querySelector('.player');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const rollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceImg = document.querySelector('.dice');
const score0 = document.querySelector('.score--0');
const Score1 = document.querySelector('score--1');

const reset = function () {
  for (let i = 0; i < score.length; i++) {
    score[i].textContent = 0;
    current[i].textContent = 0;
    diceImg.classList.add('hidden');
  }
};
const roll = function () {
  let ran = Math.trunc(Math.random() * 6) + 1;
  diceImg.classList.remove('hidden');
  diceImg.src = `dice-${ran}.png`;
};
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  for (let i = 0; i < players.length; i++) {
    players[i].classList.toggle(players);
  }
};
resetBtn.addEventListener('click', reset);
rollDice.addEventListener('click', roll);
btnHold.addEventListener('click', switchPlayer);
