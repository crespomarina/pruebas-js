//UI variables
//input de la nota
const notaInput = document.getElementById('nota');
//boton para agregar nota 
const addBtn = document.querySelector('.red btn');
//form 
const form = document.getElementById('list-form');
//boton de eliminar notas
const deleteBtn = document.querySelector('.clear-tasks');
//ul
const myUl = document.querySelector('.collection');
//boton de promedio 
const proBtn = document.querySelector('.get-promedio');
//boton de condicion
const condBtn = document.querySelector('.condition');
//promedio
let miProm; 

function loadEventListeners(){
  //agregar una nota 
  form.addEventListener('submit',agregarNota);
  //eliminar todas las notas
  deleteBtn.addEventListener('click',deleteAllNotas);
  //eliminar una sola nota
  myUl.addEventListener('click',deleteNota);
  //calcular promedio 
  proBtn.addEventListener('click',getPromedio);
  //calcular condicion
  condBtn.addEventListener('click',calcCondition);
  //mostrar notas guardadas en local
  document.addEventListener('DOMContentLoaded', getNotas);
}

loadEventListeners();

//funciones

function calcCondition(){
  if(miProm == null){
    alert('Calcule su promedio');
  }
  if(miProm<4){
    alert('Libre');
  } else if(miProm<=6){
    alert('Regular');
  } else if(miProm>6){
    alert('Promociona');
  }
}

function getNotas(){
  let notas;
  if(localStorage.getItem('notas') === null){
    notas = [];
  } else {
    notas = JSON.parse(localStorage.getItem('notas'));
  } 

  notas.forEach(function(nota){
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(nota));
    const link = document.createElement('a');
    link.className = 'delete-nota';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    myUl.appendChild(li);
  })
}

function getPromedio(){
  let notas = JSON.parse(localStorage.getItem('notas'));
  let suma = 0;
  let cantNotas = 0;
  notas.forEach(function(nota){
    suma += parseInt(nota);
    cantNotas++;
  })
  suma/=cantNotas;
  miProm = suma;
  alert(`Su promedio es ${suma}`);
}

function deleteNota(e){
  //el parent element es <a>
  if(e.target.parentElement.classList.contains('delete-nota')){
    if(confirm('Borrar nota?')){
      // <li>
      e.target.parentElement.parentElement.remove();
      //delete from LS 
      removeNotaFromLS(e.target.parentElement.parentElement);
    }
  }
}

function removeNotaFromLS(notaItem){
  let notas;
  if(localStorage.getItem('notas') === null){
    notas = [];
  } else {
    notas = JSON.parse(localStorage.getItem('notas'));
  } 

  notas.forEach(function(nota,index){
    //comparo la nota que me pasaron para borrar con cada 
    //elemento del array
    if(notaItem.textContent === nota){
      //posicion de comienzo y final .splice()
      notas.splice(index,1);
    }
  })

  localStorage.setItem('notas',JSON.stringify(notas));
}

function deleteAllNotas(){
  while(myUl.firstChild){
    myUl.removeChild(myUl.firstChild);
  }

  //clear from LS
  localStorage.clear();
}

function agregarNota(e){
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(notaInput.value));
  const link = document.createElement('a');
  link.className = 'delete-nota';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);
  myUl.appendChild(li);

  //store in local 
  storeNotaInLocal(notaInput.value);

  //clear value
  notaInput.value = '';

  e.preventDefault();
}

function storeNotaInLocal(nota){
  let notas;
  if(localStorage.getItem('notas') === null){
    notas = [];
  } else {
    notas = JSON.parse(localStorage.getItem('notas'));
  } 

  notas.push(nota);
  localStorage.setItem('notas',JSON.stringify(notas));
}

document.addEventListener('click',function(e){
  console.log(e.target);
})