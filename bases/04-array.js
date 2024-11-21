const array = [1, 2, 3, 4];
console.log(array[3]); // 4

let array1 = [...array,5 ]; // spread operator para copiar un array desde una constante con los tres puntitos... array nuevo con el 5 agregado

console.log(array1); // [1, 2, 3, 4, 5]

const array2 = array1.map(num => num * 2); // map para recorrer un array y multiplicar por 2 cada elemento- callback function
