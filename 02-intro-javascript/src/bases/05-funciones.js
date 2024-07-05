// Funciones JS

const saludar = function saludar(nombre) {
    return `Hola, ${nombre}`
}
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
};

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Mundo}`;


console.log(saludar('Martin'));
console.log(saludar2('Fernando'));
console.log(saludar3('Fernando'));
console.log(saludar4());

const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});

const user = getUser();
console.log(user);

// Tarea
//1. Transforme a una funcion de Flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas
// function getUsuarioActivo(nombre) {
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// };
const getUsuarioActivo = (nombre) => ({
    udi: 'ABC567',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);

