const http = new easyHTTP;

const data = {
  title: 'Custom post',
  body: 'lorem ipsum etc'
};

/*
//GET REQUEST
//.get() es un metodo de la clase easyHTTP que estableci
//en la libreria easyhttp.js
http.get('https://jsonplaceholder.typicode.com/posts',
function(err, post){
  err ? console.log(err) : console.log(post);
});

//POST REQUEST

//nos devuelve la data mas un ID que no esta especificado
//aca sino que viene desde el lado del request
http.post('https://jsonplaceholder.typicode.com/posts', data,
function(err, post){
  err ? console.log(err) : console.log(post);
})


//PUT REQUEST
//en console.log() nos devolvera la misma data, pero
//con un id: 1, que es el nro. que pasamos aca en el 
//parametro de la funcion (/posts/1)
http.put('https://jsonplaceholder.typicode.com/posts/1',
data, function(err,post){
  err ? console.log(error) : console.log(post);
});
*/

http.delete('https://jsonplaceholder.typicode.com/posts/1',
function(err, response){
  err ? console.log(err) : console.log(response);
});