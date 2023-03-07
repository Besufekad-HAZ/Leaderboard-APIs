import addScore from '../modules/add-score.js';
import getScores from '../modules/get-score.js';
import './style.css';

const scoresList = document.querySelector('.scores-list');
const submitScore = document.querySelector('.submit-score');
const refreshScore = document.querySelector('.refresh-score');
const msg = document.querySelector('.success-msg');

// creating the msg here....

refreshScore.addEventListener('click', (event) => {
  event.preventDefault();
  getScores(scoresList);
});

submitScore.addEventListener('click', (event) => {
  event.preventDefault();
  const user = document.querySelector('.user').value;
  const score = document.querySelector('.score').value;
  addScore(scoresList, user, score, msg);
});
