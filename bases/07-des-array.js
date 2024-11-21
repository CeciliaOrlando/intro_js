const personajes = ['Homero', 'Marge', 'Bart', 'Lisa', 'Maggie'];
console.log(personajes[2]); // Bart


const [, , , ,pl] = personajes;
console.log(pl); // Maggie - desestructuracion de arrays - opcion 1

const [p1, p2, p3, p4, p5] = personajes;  // desestructuracion de arrays- opcion 2
console.log(p1); // Homero - desestructuracion de arrays

const retornaArray = () => {
  return ['ABC', 123];
}
const [letras, numeros] = retornaArray(); // letras y numeros son las variables que se desestructuran de la funcion retornaArray. pueden tener el nombre que yo quiera y se asignan a los valores que retorna la funcion
console.log(letras); // ABC
console.log(numeros); // 123 - desestructuracion de arrays
