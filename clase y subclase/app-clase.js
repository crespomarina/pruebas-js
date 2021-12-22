class Animal {
  constructor(especie, estado){
    this.especie = especie;
    this.estado = estado;
  }
  verEstado(){
    if(this.estado == 'en peligro'){
      return `Debemos hacer algo para salvar al ${this.especie}`;
    } else if(this.estado == 'extinto'){
      return 'Animal extinto';
    } else {
      return 'El animal no esta en peligro';
    }
  }
}

class Perro extends Animal {
  constructor(especie, estado, raza, nombre){
    super(especie, estado);
    this.raza = raza;
    this.nombre = nombre;
  }
  verDatos(){
    return `El perro de raza ${this.raza} se llama ${this.nombre}`;
  }
  ladrar(){
    return 'Guau guau';
  }
}

class Kiwi extends Animal {
  constructor(especie, estado, familia){
    super(especie, estado);
    this.familia = 'Apterygidae';
  }
}

const copito = new Perro('perro', 'fuera de peligro', 'cocker', 'copito');
console.log(copito.verEstado());
console.log(copito.verDatos());

const miKiwi = new Kiwi('kiwi', 'en peligro');
console.log(miKiwi.verEstado());