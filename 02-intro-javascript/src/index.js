const { act } = require("react-dom/test-utils");

const activo = true;
// let mensaje='';

// if(activo){
//     mensaje='Activo';
// }else{
//     mensaje='Inactivo';
// }
// const mensaje = (activo) ? 'Activo' : 'Inactivo';
// const menesaje = (activo) ? 'Activo' : null;
const mensaje = activo && 'Activo';

console.log(mensaje);