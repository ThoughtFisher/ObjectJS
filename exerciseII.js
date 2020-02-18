var library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
    popularity: 4,
    books: ['a Bill Gates', 'b Bill Gates', 'c Bill Gates']
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
    popularity: 2,
    books: ['a Steve Jobs', 'b Steve Jobs', 'c Steve Jobs']
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
    popularity: 1,
    books: ['a Suzanne Collins', 'b Suzanne Collins', 'c Suzanne Collins']
  }
]

/**
 * Encontrar una propiedad del arreglo
 * para nuestro caso será el que tenga reading status TRUE
 *
 * Ya hecho esto deberá avisar cuando el libro está leido y
 * cuado el libro falte por leer
 *
 * HINT: Iterar el arreglo y preguntar por la propiedad
 *       correcta
 */

for (var i = 0; i < library.length; i++) {
  var book = "'" + library[i].title + "'" + ' by ' + library[i].author + '.'
}
