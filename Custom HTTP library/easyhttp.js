/*
//JS ES5
function easyHTTP(){
  this.http = new XMLHttpRequest();
}

//prototype methods
//Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback){
  this.http.open('GET', url, true);
  
  let self = this;
  this.http.onload = function(){
    if(self.http.status === 200){
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}
*/

// JS ES6
class easyHTTP{
  constructor(){
    this.http = new XMLHttpRequest();
  }
  //GET 
  get(url, callback){
    this.http.open('GET', url, true); 

    let self = this;
    this.http.onload = function() {
      if(self.http.status === 200){
        callback(null, self.http.responseText);
      } else {
        callback('Error' + self.http.status);
      }
    }
    this.http.send();
  }
  //POST
  post(url, data, callback){
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 
    'application/json');

    let self = this;
    this.http.onload = function(){
      callback(null, self.http.responseText);
    }
    //el .send() va con JSON.stringify() 
    //porque estoy trabajando con data
    this.http.send(JSON.stringify(data));
  }
  //PUT
  put(url, data, callback){
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 
    'application/json');

    let self = this;
    this.http.onload = function(){
      callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
  }
  delete(url, callback){
    this.http.open('DELETE', url, true); 

    let self = this;
    this.http.onload = function() {
      if(self.http.status === 200){
        callback(null, 'Post Deleted');
      } else {
        callback('Error' + self.http.status);
      }
    }
    this.http.send();
  }
}

//Make an HTTP GET Request 
//Make an HTTP GET Request 
//Make an HTTP GET Request 