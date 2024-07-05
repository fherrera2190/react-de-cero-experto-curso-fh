const persona= {
    nombre:'Tony',
    apellido: 'Stark',
    edad:45,
    direccion:{
        ciudad:'New York',
        zip:2353465,
        lat:15.3234,
        lng:34.981282
    }
};


// console.table(persona);
console.log(persona)


const persona2= {...persona};
persona2.nombre='Zack';

console.log(persona)
console.log(persona2);