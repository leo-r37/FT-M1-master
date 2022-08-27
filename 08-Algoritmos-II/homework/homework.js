'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {                
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  let index = Math.floor(Math.random()*array.length);
  let pivot = array[index];

  let left = [];      
  let equals = [];    
  let right = [];     
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) left.push(array[i]);
    if (array[i] === pivot) equals.push(array[i]);
    if (array[i] > pivot) right.push(array[i]);
  }

  if (left.length > 1 && right.length > 1) return quickSort(left).concat(equals).concat(quickSort(right));
  if (left.length > 1 && right.length <= 1) return quickSort(left).concat(equals).concat(right);
  if (right.length > 1) return left.concat(equals).concat(quickSort(right));

  return left.concat(equals).concat(right);

}


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length === 1) return array[0];
  
  let mid = Math.ceil(array.length / 2); 
  let left = []; 
  let right = []; 
  let arr2 = [];
  let arrOrd = []; 

  while (array.length > 2) {      
    arr2 = array.splice(mid,array.length - mid);
    left = left.concat(mergeSort(array));
    right = right.concat(mergeSort(arr2));
    while (left.length > 0 || right.length > 0) {
      if (left.length === 0) {
        arrOrd.push(right[0]);
        right.shift();
      }
      else if (right.length === 0) {
        arrOrd.push(left[0]);
        left.shift();
      }else{
        if (left[0] < right[0]) {
          arrOrd.push(left[0]);
          left.shift();
        }else if(left[0] > right[0]) {
          arrOrd.push(right[0]);
          right.shift();
        }
        else if (left[0] === right[0]) {
          arrOrd.push(left[0]);
          left.shift();
          arrOrd.push(right[0]);
          right.shift();
        }
      }
    }
    return arrOrd;
  }
  
  if (array.length === 2) {
    if (array[0] <= array[1]) {
      arr2 = array.splice(mid,array.length - mid);
      left.push(mergeSort(array));
      right.push(mergeSort(arr2));
      left = left.concat(right);
      return left;
    }
    else if (array[0] > array[1]) {
      arr2 = array.splice(0,1);
      left.push(mergeSort(array));
      right.push(mergeSort(arr2));
      left = left.concat(right);
      return left;
    }
  }
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
