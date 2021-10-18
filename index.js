// 1 Tenemos un array en una variable numeros con números al azar.
// Usá la función map para crear un nuevo array incrementando cada valor del array en 10, y guardarlo en la variable numerosMasDiez
// Mostrar por consola el array original y el nuevo

// const numeros = [1, 2, 3, 4, 5];

// // codear acá la solución del ejercicio
// const numerosMasDiez = numeros.map((elemento) => {
// 	return elemento + 10;
// });
// console.log(numeros); // [1, 2, 3, 4, 5]
// console.log(numerosMasDiez); // [11, 12, 13, 14, 15]

//2 Tenemos un array en una variable numeros con números al azar.
// Usar la función map para crear un nuevo array multiplicando cada valor del array por 2, y guardarlo en la variable dobles
// Mostrar por consola el array original y el nuevo

// const numeros = [3, 7, 13, 99];

// // codear acá la solución del ejercicio
// const dobles = numeros.map((elemento) => {
// 	return elemento * 2;
// });

// console.log(numeros); // [3, 7, 13, 99]
// console.log(dobles); // [6, 14, 26, 198]

//3  Tenemos un array en una variable frases con frases al azar.
// Usar la función map para crear un nuevo array donde cada frase empiece y termine con signo de exclamación.
// Mostrar por consola el array original y el nuevo
// const frases = ["Labore sea dolor.", "Justo rebum dolor.", "Stet lorem amet."];

// // codear acá la solución del ejercicio

// const frasesExclamadas = frases.map((elemento) => {
// 	return `¡${elemento}! `;
// });

// console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
// console.log(frasesExclamadas); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!' ]

//4 Tenemos un array en una variable libros con libros para leer sobre Javascript.
// Usar la función map para crear un nuevo array donde cada titulo de los libros esté encerrado en una etiqueta <li></li>.
// Mostrar por consola el array nuevo, encerrándolo entre <ul></ul>

// const librosDeJS = [
// 	"JavaScript for Kids: A Playful Introduction to Programming",
// 	"Composing Software",
// 	"Eloquent JavaScript: A Modern Introduction to Programming",
// 	"JavaScript: The Good Parts",
// 	"Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries",
// 	"Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
// 	"JavaScript: The Definitive Guide",
// 	"You Don’t Know JS",
// 	"JavaScript Allongé: The Six Edition",
// ];

// // // codear acá la solución del ejercicio

// const libros = librosDeJS.map((elemento) => {
// 	return `<li>${elemento}</li>`;
// });
// console.log(`<ul>${libros.join("")}</ul>`);

// el resultado final debería ser
// <ul><li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent JavaScript: A Modern Introduction to Programming</li><li>JavaScript: The Good Parts</li><li>Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries</li><li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li><li>JavaScript: The Definitive Guide</li><li>You Don’t Know JS</li><li>JavaScript Allongé: The Six Edition</li></ul>

//5 Tenemos un array en una variable frases con frases al azar.
// Usar la función map para crear un nuevo array que contenga la longitud de cada frase.
// Mostrar por consola el array original y el nuevo.

// const frases = ["Labore sea dolor.", "Justo rebum dolor.", "Stet lorem amet."];

// // codear acá la solución del ejercicio
// const longitudes = frases.map((elemento) => {
// 	return elemento.length;
// });

// console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
// console.log(longitudes); // [ 17, 18, 16 ]

//6 Tenemos un array en una variable playlist con una lista de canciones de un disco.
// Usar la función map para agregar a cada título de la canción el número de posición en la que está dentro del array.

// const playlist = ["Everlong", "The Pretender", "Learn to Fly"];

// /// completá acá el código

// const musica = playlist.map((elemento, index) => {
// 	return `${index} - ${elemento}`;
// });
// console.log(musica);
// RESULTADO ESPERADO
// [ '0 - Everlong', '1 - The Pretender', '2 - Learn to Fly' ]
