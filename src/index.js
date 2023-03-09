import './style.css';
import scoreAdd from '../modules/add-score.js';
import getScores from '../modules/get-score.js';

const listScores = document.querySelector('.scores-list');
const refreshScore = document.querySelector('.refresh-score');
const submitScore = document.querySelector('.submit-score');
const msg = document.querySelector('.msg');

refreshScore.addEventListener('click', (event) => {
  event.preventDefault();
  getScores(listScores);
});

submitScore.addEventListener('click', (event) => {
  event.preventDefault();
  const user = document.querySelector('.user-name').value;
  const score = document.querySelector('.user-score').value;
  scoreAdd(listScores, user, score, msg);
});
