import './style.css';
import { display } from './modules/display';



const submit = document.getElementById('submit');
const refresh = document.getElementById('refresh');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/a1jL7pBQ8HR9eL9EL2zG/scores/'

submit.addEventListener('click' , (e) => {
  e.preventDefault;
  const user = document.getElementById('user').value.trim();
  const score = document.getElementById('score').value.trim();
  fetch(url ,{
    method : 'POST',
    body : JSON.stringify({
      user: user,
      score:score,
    }),
    headers : {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })

  user.value = '';
  score.value= '';
})

async function populate() {
  const requestURL = url;
  const request = new Request(requestURL);

  const response = await fetch(request);
  const scores =  await response.json();
  const result = scores.result

  result.forEach(score => {
    display(score.user , score.score);
  }) 
}



refresh.addEventListener('click' , populate)

