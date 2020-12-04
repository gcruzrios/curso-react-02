


const persona = {
    nombre : 'Tony',
    apellido:'Stark',
    edad: '45',
    direccion: {
        ciudad:'New York',
        zip:'72662',
        lat: 14.49283,
        long: 34.98732,
    }
};



const persona2 = { ...persona };

persona2.nombre = 'Peter';
console.log (persona);
console.log(persona2);