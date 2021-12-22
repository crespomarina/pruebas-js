document.querySelector('.get-jokes').addEventListener('click',
getJokes);

function getJokes(e){
  const myNumber = document.getElementById('number').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `https://api.icndb.com/jokes/random/${myNumber}`, true);

  xhr.onload = function(){
    if(this.status === 200){
      const response = JSON.parse(this.responseText);
      console.log(response);

      let output = '';

      if(response.type === 'success'){
        //cuando se hace el console.log() del response
        //vemos que en VALUE estan los chistes 
        //por eso se pone response.value.forEach 
        //y cada value (es un array) tiene id y joke
        //por eso joke.joke
        response.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`;
        })
      } else {
        output += '<li>Something went wrong</li>'
      }
      document.querySelector('.jokes').innerHTML = output;
    }
  }

  xhr.send();

  e.preventDefault();
}