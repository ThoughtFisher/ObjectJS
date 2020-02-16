# Literal Object

> Los objectos literales.

Son una estructura de datos primaría. La cual consta de varias
caracteristicas únicas. La primera de ellas es que es:

`['llave']: 'valor'`

Otra cosa a tener encuenta es que los objectos pueden tener diferentes tipos de valores por llave.

##### Ej:

```
 var nino = {
   nombre: 'pepito',
   edad: 13,
   vacaciones: false,
   altura: 144, //cm
   peso: 45, //KG
   'calcular-volumen': function(){
     var vol = this.altura*this.peso;
     return vol;
   }
 }
```

###### Como podemos ver aquí tenemos de todos los tipos que posee JS.

## Accediendo llaves

Un objecto puede ser accedido de diferentes maneras, pero siempre necesitará
el valor de la llave para poder hacerlo.

- `nino.edad // 13`
- `nino['peso'] // 45`

Vemos que se puede usar `[]` _**ó**_ `.` para acceder a la propiedad de los objectos.

#### ¿Cual usar?

Usualmente se usa `.` pero hay casos especiales como _`calcular-volumen`_ donde el
compilador pensará que se refiere a dos valores _calcular_ y _volumen_, por lo tanto en
estos casos es mejor usar `['calcular-volumen']`.

## Versatiles.

Los objetos literales son muy versatiles, dado que se puede hacer aun más operaciones
de las que hemos visto hasta el momento.

#### reasignar valores

Los valores almacenados en una llave pueden ser asignados nuevamente sin problemas.

###### Más adelante en ES6 veremos la utilidad de esta propiedad de los objectos.

```
  nino.vacaciones = true
```

#### Borrar llaves del objecto

También da la posibilidad de borrar llaves indeseadas del objeto, esto dará como
resultado un nuevo objecto sin esa llave.

A continuación el ejemplo:

```
delete nino['calcular-peso']

/*
  {
    nombre: 'pepito',
    edad: 13,
    vacaciones: false,
    altura: 144, //cm
    peso: 45, //KG
  }
*/
```

### Iteración sobre el objecto

Hay dos formas de hacerlo, la primera forma es usando `for in` de JS, esto nos da
la posibilidad de iterar sobre el objecto en cuestión.

```
  for (let key in nino) {
    if (nino.hasOwnProperty(key)) {
      console.log(nino[key])
    }
  }
  /*
    pepito
    13
    false
    144
    4
    function
  */
```

##### 2º forma de iterar objectos

Esta forma lo que hace es sacar las llaves del Objecto en un **arreglo** gracias a la función de JS:

`Object.keys()`

Ya con esto podemos iterrar como cualquier _Array_

```
  var llaves = Object.keys(nino);
  for (var i=0; i < llaves.length; i++) {
    var llave = llaves[i];
    console.log(nino[llave]);
  }
  /*
    pepito
    13
    false
    144
    4
    function
  */
```

## Tiempo de ejercicios.

- [Exercise.js](./exercise.js)
- [ExerciseII.js](./exerciseII.js)
