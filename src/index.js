import './style.css';
import scoreList from './scoreList';

const display = (name, score) => {
  document.querySelector('.list').innerHTML += `<ul >        
    <li>${name}:${score}</li></ul>`;
};

scoreList.forEach((score) => {
  display(score.name, score.score);
});
