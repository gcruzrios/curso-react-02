//Desestructuración

//Asignación desestructurante

const persona = {
    nombre:'Tony',
    edad:45,
    clave: 'Ironman',
    rango: 'Soldado'
};

const { nombre,edad,clave } = persona;


//console.log(nombre);
//console.log(edad);
//console.log(clave);

const usContext = ({nombre,edad,clave, rango}) => {
   //const{ nombre,edad,clave } = usuario;
   // console.log(nombre,edad,clave, rango)
   return {
        nombreClave : clave,
        anios : edad,
        latlng: {
            lat: 14.12763,
            lng:-12.88373
        }
   }
       
}

//retornaPersona (persona);

const { nombreClave, anios, latlng:{ lat,lng} } = usContext( persona );

console.log(nombreClave, anios);
console.log(lat,lng);
