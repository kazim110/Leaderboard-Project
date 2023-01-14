import GetScore from './getFromAPi.js';

const scoreBoard = document.querySelector('.score-list');

const UI = async () => {
  scoreBoard.innerHTML = '';
  const Arr = await GetScore();
  Arr.sort((a, b) => b.score - a.score);
  Arr.forEach((el) => {
    scoreBoard.innerHTML += `
    <tr>
         <td>${el.user}:</td>
         <td>${el.score}</td>
   </tr>
    `;
  });
};

export default UI;