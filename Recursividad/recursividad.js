


function recursividad( dividendo, divisor){

    if(dividendo < divisor){
        return 0
    }

    return 1 + recursividad(dividendo - divisor, divisor)

}
console.log(recursividad(72, 9))




//estructura de datos 

const persona  = {
    nombre: 'rony',
    apellido: 'vargas',
    edad: 21
}

const aumentarUnAnio = ({ edad }) => ({
    ...persona,
    edad: edad + 1
})

