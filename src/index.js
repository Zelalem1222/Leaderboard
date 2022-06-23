import './style.css';
import scoreList from './scoreList';
import { v4 as uuidv4 } from 'uuid';

const display = (name, score) => {
  
};

scoreList.forEach((score) => {
  display(score.name, score.score);
});

const submit = document.getElementById('submit');
const refresh = document.getElementById('refresh');


submit.addEventListener('click' , (e) => {
  e.preventDefault;
  const user = document.getElementById('user').value;
  const score = document.getElementById('score').value;
  const id = uuidv4();
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:id/scores/' ,{
    method : 'POST',
    body : JSON.stringify({
      user: user,
      score:score,
      id:id
    }),
    headers : {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.result);
  })
 
})

async function populate() {
const id = uuidv4();
  const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:id/scores/';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const scores = await response.json();
  scores.forEach(score => {
    
  })
  populateHeader(scores.result[9])
}

function populateHeader(obj) {
  

  document.querySelector('.list').innerHTML += `<ul >        
    <li>${obj.user}</li></ul>`;

  // for (let user of users) {
    
  // }

}

refresh.addEventListener('click' , populate)

