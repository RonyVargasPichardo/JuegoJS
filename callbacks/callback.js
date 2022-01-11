const API_URL = 'https://swapi.dev/api/'
const PEOPLE_ID_URL = 'people/:id'
const OPTS = `{ crossDomain: true}` //para que el request sepa que usare una pagina externa( una api)
 

// /// /// CALLBACKS (funciones que se ejecutan dependiendo si se cumple un requerimiento)
// function obtenerPeople(id, callback)
// {
//     const url = `${API_URL}${PEOPLE_ID_URL.replace(':id', id)}`

//     $.get(url, OPTS, callback) //request de jquery para llamar personajes de la api y una funcion que es un callback se ejecuta si se cumple el request
//      .fail( () => console.log(`Sucedio un error, no pudimos obtener el personaje ${id}`))
// }

// obtenerPeople(1, people => {
//     console.log(`Hola, soy ${people.name}`)

//     obtenerPeople(2, people => {
//         console.log(`Hola, yo soy ${people.name}`)

//         obtenerPeople(3, people => {
//             console.log(`hola, yo soy ${people.name}`)

//             obtenerPeople(4, people => {
//                 console.log(`hola, yo soy ${people.name}`)

//                 obtenerPeople(5, people => {
//                     console.log(`hola, yo soy ${people.name}`)
//                 })
//             })
//         })
//     })
// })
 







/// //// PROMISE(PROMESAS)

// function obtenerPersonaje (id){
//     const url = `${API_URL}${PEOPLE_ID_URL.replace(':id', id)}`

//     return new Promise(function (resolve, reject){
//         $.get(url, OPTS, function (people){
//             resolve(people)
//         }).fail( function(){
//             reject(id)
//         })
//     })
// }

// obtenerPersonaje(1).then( function(people){
//     console.log(`hola, yo soy ${people.name}`)
// }).catch( function(id){
//     console.log(`Lo sentimos ocurrio un error con el personaje ${id}`)
// })

function obtenerPersonaje (id){
    const url = `${API_URL}${PEOPLE_ID_URL.replace(':id', id)}`

    return new Promise( (resolve, reject) => {
        $.get(url, OPTS, data => resolve(data)).fail( () => reject(id))
    })
}

obtenerPersonaje(1)
    .then( people => {
        console.log(`hola, yo soy ${people.name}`)
        return obtenerPersonaje(2)
    })
    .then( people => {
        console.log(`hola, yo soy ${people.name}`)
        return obtenerPersonaje(3)
    })    
    .then( people => {
        console.log(`hola, yo soy ${people.name}`)
    })    
    .catch( id => console.log(`Lo sentimos ocurrio un error con el personaje ${id}`))


/// array de promise

// var valor = [1, 2, 3, 4, 5, 6, 7]
// var promises = valor.map( id => obtenerPersonaje(id))


// Promise.all(promises)
//         .then( people =>{
//             for (const p of people){
//                 console.log(p.name )
//             }
//         }) 
//         .catch( id => console.log(`Error con el personaje ${id}`))




/// /// async await

async function obtenerPeople(){
    var ids = [1,2,3,4,5,6,8]
    var promesas = ids.map( (id) => obtenerPersonaje(id))

    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
       console.log(`Error con el personaje ${id}`)
    }
   
}

obtenerPeople()