const nombre = 'Fernando';
const apellido = 'Herrera';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto= `
${nombre}
${apellido}
${2+2}
`;

function getSaludo(nombre){
    return 'Hola '+ nombre;
}


console.log(`Este es un texto: ${getSaludo(nombre)}`);