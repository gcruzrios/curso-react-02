

console.log('???');

const nombre ='GReivin';
const apellido = 'Cruz';

const NombreCompleto = nombre + ' ' + apellido;
console.log( NombreCompleto);


const NombreCompleto2 =`${ nombre } ${ apellido }`;

console.log( NombreCompleto2);

const NombreCompleto3 =`Hola Mundo `;

console.log( NombreCompleto3);

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${ getSaludo( nombre ) }`);