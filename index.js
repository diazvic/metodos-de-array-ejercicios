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

//7 Tenemos un array en una variable costos con números que representan costos de diferentes productos.
// Completar el siguiente código para llegar al resultado esperado
// A un costo primero se le agrega la ganancia y después el IVA (este ultimo sobre el costo + la ganancia)

// const costos = [12.5, 56, 98, 45.75];

// const agregarIVA = (costo) => {
// 	return costo * 1.21;
// };

// const sumarGanancia = (costo) => {
// 	return costo * 1.5;
// };

// // codear acá la solución del ejercicio
// const preciosFinales = costos.map((elemento) => {
// 	return agregarIVA(sumarGanancia(elemento));
// });

// console.log(preciosFinales);
// // deberia mostrar
// // [ 22.6875, 101.64, 177.87, 83.03625 ]

//8Tenemos un array en una variable costos con números que representan costos de diferentes productos.
// También tenemos un array en una variable productos con los nombres de cada producto.
// Completar el siguiente código para llegar al resultado esperado
// A un costo primero se le agrega la ganancia y después el IVA
// El nombre de un producto en una posición, se corresponde con el precio que está en la misma posición. Por ejemplo: el producto que está en la posición 1 tiene un costo igual al elemento en la posición 1 del array costos
// const productos = ["celular", "notebook", "monitor"];
// const costos = [12.5, 56, 98];

// const agregarIVA = (costo) => {
// 	return costo * 1.21;
// };

// const sumarGanancia = (costo) => {
// 	return costo * 1.5;
// };

// // codear acá la solución del ejercicio
// const preciosFinales = productos.map((elemento, array) => {
// 	return `${elemento} ${agregarIVA(sumarGanancia(costos[array]))}  `;
// });

// console.log(preciosFinales);
// deberia mostrar
// [ "celular 22.6875", "notebook 101.64", "monitor 177.87" ]

//Ejercicios FILTER
//1 Tenemos un array en una variable costos con números que representan costos de diferentes productos.
// Usando filter, crear un nuevo array con los precios más caros (mayores a 50) y guardarlo en la variable losMasCaros
// Mostrar el array original y el filtrado
// const costos = [
// 	39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14,
// ];
// // codear acá la solución del ejercicio
// const losMasCaros = costos.filter((elemento) => {
// 	return elemento > 50;
// });

// console.log(costos);
// console.log(losMasCaros);
// deberia mostrar
// [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]
// [ 53, 99, 68, 54, 97, 90, 92, 75, 86 ]

//2 Tenemos un array en una variable numeros con números al azar.
// También tenemos dos arrays vacios en las dos variables numerosPares y numerosImpares.
// Utilizando filter crear un nuevo array con todos los números pares y guardalo en la variable numerosPares
// Utilizando filter crear un nuevo array con todos los números impares y guardalo en la variable numerosImpares
// const masNumeros = [
// 	43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32,
// ];

// // codea acá tu solución
// const numerosPares = masNumeros.filter((elemento) => {
// 	return elemento % 2 == 0;
// });
// const numerosImpares = masNumeros.filter((elemento) => {
// 	return elemento % 2 !== 0;
// });

// console.log("pares: ", numerosPares);
// console.log("impares: ", numerosImpares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]

//3
