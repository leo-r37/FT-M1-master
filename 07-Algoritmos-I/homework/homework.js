'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  // si num % 2 = 0, entonces no es primo

  let aux = num;
  let factores = [1];
  if (num === 1) return factores;
  for (let i = 2; i <= num; i++) { 
    while (aux % i === 0) { 
      aux = aux / i;          
      factores.push(i);
    }
    if (aux === 1) return factores;
  }
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  array.forEach(function(x) { //ejecuta la funcion por cada valor del array;
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i+1]) { //compara uno con el siguiente
          array[array.length] = array[i]; //guarda el valor mayor
          array[i] = array [i + 1]; //asigna el menor
          array[i + 1] = array[array.length -1]; //asigna el mayor
          array.pop(); //elimina el valor auxiliar guardado
        }
      }
    });
  return array;
}

function insertionSort(array) {
// Implementar el método conocido como insertionSort para ordenar de menor a mayor
// el array recibido como parámetro utilizando arreglos
// Devolver el array ordenado resultante
// Tu código:

  for (let i = 1; i < array.length; i++) {
    for (let j = i; j >=0; j--) {
      if (array[i] === array[j]) continue;
      if (array[i] < array[j]) {
        if (array.indexOf(array[j]) === 0) {
          let aux = array.splice(i,1);
          array.splice(j,0,aux[0]);
          break;
        }
            else continue;
      }
      if (array[i] > array[j]) {
        let aux = array.splice(i,1);
        array.splice(j+1,0,aux[0]);
        break;
      }
    }
  }
  return array;
}




function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  /*
  toma un valor
  recorre a la derecha, si hay alguno menor.
  si lo hay, guarda el indice del primero. 
  sigue buscando a la derecha si hay alguno menor
  repite hasta encontrar el menor de todos
  ese menor lo guarda en el indice del valor que se inicio
  */
  //                   i  c
  //                   j
  //   [5, 1, 4, 2, 8, 3]
  //   [1, 2, 4, 3, 5, 6]
  
  for (let i = 0; i < array.length - 1; i++) {
    let current = array[i];
    let index = array.indexOf(array[i]);
    for (let j = i + 1; j <= array.length; j++) {   
      if (array.indexOf(array[j]) >= array.length) break;
      if (array.indexOf(array[j]) === array.length -1) {
        if (current < array[j]) {
          let aux = array.splice(array.indexOf(current),1);
          array.splice(index,0,aux[0]);
          break;
        }
        if (current > array[j]) {
          let aux = array.splice(j,1);
          array.splice(index,0,aux[0]);
          break;
        }
      }
      if (current < array[j]) continue;
      if (current > array[j]) {
        if (array.indexOf(array[j]) != array.length -1) {
          current = array[j];
          continue;
        }else{
          let aux = array.splice(j,1);
          array.splice(index,0,aux[0]);
          break;
        }
      }
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
