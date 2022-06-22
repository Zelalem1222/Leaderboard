import './style.css';
import scoreList from './scoreList';


function display(name , score){
    document.querySelector('.list').innerHTML += `<ul >        
    <li>${name}:${score}</li></ul>`
  }
scoreList.forEach(score => {
    console.log(score.name + ':' + score.score)
    display(score.name, score.score)
})


