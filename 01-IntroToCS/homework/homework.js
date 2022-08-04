'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

    //"1000"

  var enDigitos = num.split("").reverse();

  //['0','0','0','1']

  var enNumeros = [];

  for (let i = 0; i < enDigitos.length; i++) {
  	enNumeros.push(parseInt(enDigitos[i],10));

  } //[0, 0, 0, 1]

  var formula = []
  for (let j = 0; j < enNumeros.length; j++) {
  	formula.push(enNumeros[j]*(2**j));
  
  } //[0,0,0,8]

  var resultado = formula.reduce(function(a,b) {
  	return a + b;
  })

  return resultado;

}

function DecimalABinario(num) {
  // tu codigo aca

  var binario = [];
  if (num === 0) {
  	return 0;
  }
  while (num > 0) {   
  	if (num % 2 === 1) {
  		binario.unshift(1);
  	}
  	else binario.unshift(0);
  	num = Math.floor(num / 2);
  }
 
  return binario.join("");

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}