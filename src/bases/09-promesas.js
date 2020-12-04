import { getHeroeById } from './bases/08-imports'

// const promesa = new Promise( (resolve, reject)=>{

//     setTimeout(() => {
//         //console.log('2 segundos después');
//         const heroe = getHeroeById(2);
//         resolve(heroe)
//         //console.log(heroe);
//         //reject('No se pudo encontrar el héroe');
//     }, 2000);
// });

// promesa.then ((heroe) => {
//     console.log('heroe',heroe)
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync= (id) => {

    const promesa = new Promise( (resolve, reject)=>{

            setTimeout(() => {
                //console.log('2 segundos después');
                const heroe = getHeroeById(id);
                if (heroe ){
                    resolve(heroe)
                }else{
                //console.log(heroe);
                    reject('No se pudo encontrar el héroe');
                }
            }, 2000);
        }); 

        return promesa;
}

getHeroeByIdAsync(10)
    //.then(heroe => console.log("heroe",heroe))
    .then (console.log)
    .catch(err => console.warn(err))