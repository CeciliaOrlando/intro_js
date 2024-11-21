// Forma antigua de funcion en JS

function saludar() {
    console.log('Hola mundo');
}

saludar();

//  Forma nueva de funcion en JS
const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

console.log(saludar2('Cecilia'));

const saludar3 = (nombre) => `Hola ${nombre}`; // cuando no tengo llaves de la funcion flecha se llama return implicito y se puede hacer asi. Y tengo un codigo optimizado y abreviado. 

console.log(saludar3('Cecilia'));
