const persona = {
  nombre: "Cecilia",
  edad : 36,
  clave : "Ironman",
}

console.log(persona.edad); // 36
console.log(persona.nombre); // Cecilia
console.log(persona.clave); // Ironman


const {nombre, edad, clave} = persona; // Desestructuracion de objetos. muestra las llaves de la constante persona.
console.log(edad); // 36 - muestra la edad
console.log(nombre); // Cecilia - muestra el nombre
console.log(clave); // Ironman - muestra la clave del objeto persona
