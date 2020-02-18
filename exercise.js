/**
 * Escribir una Función para obtener todos las llaves de un Object
 * Escribit una función para obtener todos los valores de un objecto.
 *
 * Retornar Arreglos
 *
 * `node exercise.js`
 */

function llaves(objeto) {
  for (let key in objeto) {
    if (objeto.hasOwnProperty(key)) {
      console.log(key)
    }
  }
}

const obj = {
  a: 4,
  b: 3,
  c: 2,
  d: 1,
  z: '5'
}

function valores(objeto) {
  let valores = Object.values(objeto)
  let llaves = Object.keys(objeto)

  for (let i = 0; i < valores.length; i++) {
    console.log(llaves[i] + ': ' + valores[i])
  }
}

valores(obj)
console.log(obj)
