/*
Inicializar un proyecto de nodejs configurado para TypeScript
ejercicio 1 crear una clase abstracta llamada Animal y dos clases hijas llamadas Perro y Gato que extiendan la clase Animal. Cada una de las clases hijas debe implementar el método hacerSonido() de forma diferente.
*/
const mensaje: string = '¡Hola, mundo!';
console.log(mensaje);

/*
crear una clase abstracta llamada Animal y dos clases hijas llamadas Perro y Gato que extiendan la clase Animal. Cada una de las clases hijas debe implementar el método hacerSonido() de forma diferente.
*/
abstract class Animal {
    nombre: string;
  
    constructor(nombre: string) {
      this.nombre = nombre;
    }
  
    abstract hacerSonido(): void;
  }
  
  class Perro extends Animal {
    constructor(nombre: string) {
      super(nombre);
    }
  
    hacerSonido(): void {
      console.log("Guau, guau!");
    }
  }
  
  class Gato extends Animal {
    constructor(nombre: string) {
      super(nombre);
    }
  
    hacerSonido(): void {
      console.log("Miau, miau!");
    }
  }
  
  const perro = new Perro("Firulais");
  perro.hacerSonido();
  
  const gato = new Gato("Misifu");
  gato.hacerSonido();
