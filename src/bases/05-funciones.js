// functions en JS

const saludar = function(nombre){
    return `Hola, ${ nombre }`;
}

const saludar2 = (nombre) =>{
    return `Hola, ${ nombre }`;
}


const saludar3 = (nombre) => `Hola, ${ nombre }`;

const saludar4 = () => `Hola, Mundo`;



console.log (saludar ('Greivin'));

console.log (saludar2 ('Gabriel'));

console.log (saludar3 ('Marco'));

console.log (saludar4 ());

/*
const getUser = () =>{
    return {
        uid: 'A19829',
        username : 'gcruzrios'
    }
}

*/

const getUser = () =>
    ({
        uid: 'A19829',
        username : 'gcruzrios'
    })


const user = getUser();
console.log (user);

function getUsuarioActivo(nombre){
    return {
        uid: 'ABC88773',
        username : nombre
    }
};

const usuarioActivo = getUsuarioActivo('Greivin');
console.log ( usuarioActivo );

const getUsuarioActivo = (nombre) => 
    ({
        uid: 'ABC88773',
        username : nombre
    })