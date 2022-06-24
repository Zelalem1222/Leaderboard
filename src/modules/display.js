const display = (name , score) => {
    
  document.querySelector('.list').innerHTML +=  `<ul >        
    <li>${name} : ${score}</li></ul>`;
};

export default display;
