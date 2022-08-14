# Homework JavaScript Avanzado II

## Closures

Resolvé los ejercicios en el archivo `homework.js`.
Para ejecutar los test, anda a esta carpeta y ejecutá:
`npm install` y luego:
`npm test`.

## Extra Credit

### OOP - Prototypes

### Repeatify

Crear un método `repeatify` que este disponible para _todos_ los objetos `Strings`. Esta función debe aceptar un `entero` que indica cuantas veces el string tiene que repetirse. La función retorna el string repetido el número de veces que indicamos. Controlar que el número no sea menor que cero, y si es cero que devuelva `''` (String vacío).

```javascript
String.prototype.repeatify = function(number) {
  if (number < 0) {
    return "error"
  }
  else if (number === 0) {
    return "''"
  }
  let repeticion = ''
  for (let i = 0; i < number; i++) {
    repeticion += this;
  }
  return repeticion
}


console.log('hola'.repeatify(3));   //holaholahola


```

### Shapes

* Crea un objeto llamado `shape` que tenga una propiedad `type` y un método `getType`.
* Ahora defini una función `Triangle` cuyo prototipo sea `shape`. Los objetos creados con `Triangle` deberían tener tres propiedades: `a`, `b` y `c`. Que representan cada lado del triángulo. `type` debe ser `Triangle`.
* Agregá un nuevo método al prototipo llamado `getPerimeter`.

SOLUCION:
```javascript
function Shape() {
	this.Type = ''	
	this.getType = function() {
		return this.Type;
	}

}

// --------- TRIANGLE -------------

function Triangle(a, b, c) {
	this.prototype = new Shape();
	Shape.call(this);
	this.a = a;
	this.b = b;
	this.c = c;
 	this.Type = "Triangle"

	this.getPerimeter = function() {
		return a + b + c;
	}
	this.getArea = function() {
		let sp = (a + b + c) / 2
		return Math.sqrt(sp(sp-a)(sp-b)(sp-c))
	}
}

// --------- CIRCLE -------------

const pi = 3.1415926535897

function Circle(radio) {
	this.prototype = new Shape();
	Shape.call(this);
	this.radio = radio;
	this.Type = "Circle";

	this.getPerimeter = function() {
		return 2 * pi * radio;
	}
}


// --------- SQUARE -------------

function Square(side) {
	this.prototype = new Shape();
	Shape.call(this);
	this.side = side;

	this.getPerimeter = function() {
		return 4 * side;
	}
}
```
Probá tu solución con el siguiente código:

```javascript
> var t = new Triangle(1, 2, 3);
> t instanceof Triangle
// true
> Shape.prototype.isPrototypeOf(t);
// true
> t.getPerimeter();
// 6
> t.getType();
// "Triangle"
```

* Ahora creá un nuevo constructor que herede de `shape`, llamado `Circle`. Implementalo de tal modo que puedas calcular su perímetro en la función `getPerimeter`.

Probá tu solución con el siguiente código:

```javascript
> var c = new Circle(2);
> c instanceof Circle
// true
> Shape.prototype.isPrototypeOf(c);
// true
> c.getPerimeter();
// 12.566370614359172
> c.getType();
// "Circle"
```

* Creá una última `shape` llamada `Square`.
* Agregá el método `getArea` de todas las `shape`s.
