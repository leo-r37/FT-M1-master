'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n, total = 1) {
	if (n <= 0) {
		return total;
	}
	total *= n;
	n--;
	return nFactorial(n, total);
}



function nFibonacci(n, i = n, a = 0, b = 1, c = 1) {
  if (n < 0) {
    return "Not a number"
  }
  else if (n === 0) {
    return a;
  }
  else if (n === 1) {
    return b;
  }
  else {
    if (i <= 1) {
      return b;
    }
    else {
      c += a;
      a = b;
      b = c;
      i--;
      return nFibonacci(i, i, a, b, c)
    }
  }
}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {

    this.long = 0;
    this.queue = [];
  
	this.enqueue = function(value) {
	    this.long++;
	    this.queue.push(value);    
  	}
  
  	this.dequeue = function() {
     	if (this.long <= 0) {
        	return undefined;
      }
		this.long--;
		return this.queue.shift()    
  	}
  
  	this.size = function() {
    	return this.long;    
  }
}


// --------------- Version con CLASE ------

/*class Queue {
	  constructor() {
	    this.long = 0;
	    this.queue = [];
	  }
	  
	  enqueue(value) {
	    this.long++;
	    this.queue.push(value);
	  }
	  dequeue() {
	    if (this.long <= 0) {
	      return undefined;
	    }
	    this.long--;
	    return this.queue.shift();
	  }
	  size() {
	    return this.long;
	  }
}*/


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
