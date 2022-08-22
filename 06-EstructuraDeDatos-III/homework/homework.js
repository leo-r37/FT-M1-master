"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) (por profundidad) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS) (recorrido por niveles)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

class BinarySearchTree {
	constructor(value) {
		this.value = value;
		this.right = null;
		this.left = null;
	}

	size() { 
	    if (!this.left && !this.right) {
	      return 1;
	    }
	    else if (this.left && !this.right) {
	      return 1 + this.left.size();
	    }
	    else if (!this.left) {
	      return 1 + this.right.size();
	    }
	    else {
	      return 1 + this.left.size() + this.right.size();
	    }
 	}
  
	insert(value) { 
	    if (value < this.value) {
	      if (!this.left) {
	        this.left = new BinarySearchTree(value);
	      } 
	      else {
	        return this.left.insert(value);
	      }
	    }
	    if (value > this.value) {
	      if (!this.right) {
	        this.right = new BinarySearchTree(value);
	      }
	      else {
	        return this.right.insert(value);
	      }
	    }
	}

	contains(value) {
	    if (value === this.value) {
	      return true;
	    }
	    if (value < this.value) {
	      if (!this.left) {
	        return false;
	      }
	      else {
	        return this.left.contains(value);
	      }
	    }
	    if (value > this.value) {
	      if (!this.right) {
	        return false;
	      }
	      else {
	        return this.right.contains(value);
	      }
	    }
  	};

 	//solucion de code review
 	depthFirstForEach(cb, order) {
	    if (order === "pre-order") {
	      //root - izq - der
	      cb(this.value);
	      if (this.left) this.left.depthFirstForEach(cb, order);
	      if (this.right) this.right.depthFirstForEach(cb, order);
	    }
	    else if(order === "post-order") {
	      //izq - der - root
		    if(this.left) this.left.depthFirstForEach(cb, order);
		    if(this.right) this.right.depthFirstForEach(cb, order);
		    cb(this.value);
	    }else{
	      //in order
	      //izq - root - der
	    	if(this.left) this.left.depthFirstForEach(cb, order);
		    cb(this.value);
			if(this.right) this.right.depthFirstForEach(cb, order);
	    }
  }

	breadthFirstForEach(cb, arr = []) {
	    //solucion optimizada
	    if (this.left) arr.push(this.left);
	    if (this.right) arr.push(this.right);
	    cb(this.value);
	    if (arr.length > 0) arr.shift().breadthFirstForEach(cb, arr);

	    //primera solucion (sin optimizar)
	    /*
	    if (arr.length === 0) {
	      if (this.left) arr.push(this.left);
	      if (this.right) arr.push(this.right);
	      cb(this.value);
	      if (arr.length > 0) arr.shift().breadthFirstForEach(cb, arr);
	    }else{
	      if (this.left) arr.push(this.left);
	      if (this.right) arr.push(this.right);
	      cb(this.value);
	      arr.shift().breadthFirstForEach(cb, arr);
	    }
	    */
	}
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
