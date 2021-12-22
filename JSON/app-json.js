document.getElementById('cursos2021').addEventListener('click', loadCursos21);

document.getElementById('cursos2022').addEventListener('click', loadCursos22);

function loadCursos21(){
  //objeto para hacer peticiones asincronicas
  const xhr = new XMLHttpRequest();

  xhr.open('GET','cursos2021.json', true);

  xhr.onload = function(){
    if(this.status === 200){
      //lo que obtengo en el open 
      const cursos = JSON.parse(this.responseText);

      const output = `
        <ul>
          <li>nombre: ${cursos.nombre}</li>
          <li>precio: ${cursos.precio}</li>
        </ul>
      `;

      document.getElementById('ver21').innerHTML = output;
    }
  }
  xhr.send();
}

function loadCursos22(){
  const xhr = new XMLHttpRequest();

  xhr.open('GET','cursos2022.json', true);

  xhr.onload = function(){
    if(this.status === 200){
      //lo que obtengo en el open 
      const cursos = JSON.parse(this.responseText);

      let output = '';
      
      cursos.forEach(function(curso){
        output += `
        <ul>
          <li>nombre: ${curso.nombre}</li>
          <li>precio: ${curso.precio}</li>
        </ul>
        `;
      })

      document.getElementById('ver22').innerHTML = output;
    }
  }
  xhr.send();
}