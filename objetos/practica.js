var rony = {
    nombre: "rony",
    apellido: "vargas",
    edad: 21
}

var ady = {
    nombre: "Ady",
    apellido: "vargas",
    edad: 17
}


function imprimirNombreEdad(obj){
    var { nombre, edad } = obj;     //son equivalentes = var nombre = obj.nombre, edad = obj.edad
    console.log( `hola, me llamo ${nombre.toUpperCase()} y tengo ${edad} años` );
}

imprimirNombreEdad(rony);
imprimirNombreEdad(ady);



function ImprimirApellido({ apellido}){
    console.log(apellido.toUpperCase());
}
ImprimirApellido(rony);
ImprimirApellido(ady);




//parametros con eferencia o como valor
//retornar otro objeto si queremos modificar uno
function cumpleanio(persona){
    return{
        ...persona,
        edad: persona.edad + 1
    }
}


// //Comparaciones en javaScript valores primitivos y objetos


var x = 4, y = '4'   

x == y //true por que tienen el mismo valor

x === y //false por que son de diferentes datos una es numero otra es string

//los objetos se comparan por lugar de referencia en memoria
var a ={
    nombre: 'a'
}

var b ={
    nombre: 'b'
}


 a === b // false tienen el mismo valor pero estan en distinta lugar de memoria






 // //Condicionales Reto
 // saber si una perona es mayor o menor de edad
 var ronaldo = {
     nombre: 'Ronaldo',
     apellido: 'Vargas',
     edad: 23
 }

 const MAYORIA_DE_EDAD = 18;

//  const mayorDeEdad = function (persona){
//      return persona.edad >= MAYORIA_DE_EDAD;
//  }

// //Arrow function
const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD
const esMenorDeEdad = persona => !esMayorDeEdad(persona) ?
// const acceso = persona => {
// if(esMenorDeEdad(persona)){
    console.log('Acceso Denegado') :
// }else{
    console.log('Acceso Permitido');
// }
// }

 function mayorMenorDeEdad(persona){
     console.log('Eres mayor o menor de edad ?')

     if(esMayorDeEdad(persona) ){
        console.log(`${persona.nombre} tiene ${persona.edad} y es mayor de edad `)
     }else{
        console.log(`${persona.nombre} tiene ${persona.edad} y es menor de edad `)
     }
 }






 // //CICLOS FOR


 var mami = {
     nombre: 'mami',
     apellido: 'cruz',
     edad: 38,
     peso: 70
 }

const DIAS_DEL_ANIO = 365;
const INCREMENTO_PESO = 0.3;
const aumentaPeso = persona => persona.peso += INCREMENTO_PESO
const bajaPeso = persona => persona.peso -= INCREMENTO_PESO

const pesoDentroDeUnAnio = persona => {
    console.log(`${persona.nombre}, Iniciaste con un peso de ${persona.peso}kg`);

    for(var i = 1; i <= DIAS_DEL_ANIO; i++)
    {
        var randon = Math.random();

        if(randon < 0.25){
            aumentaPeso(persona)
        }else if(randon < 0.5){
            bajaPeso(persona)
        }
    }
    console.log(`A fin de año terminaste con un peso de ${Math.round(persona.peso)}kg`)
}



// generar un numero aleatrorio
const numMax = 10
const numMin = 1

const numRandom = () => Math.round(Math.random() * (numMax - numMin) + numMin)
// redondeamos el decimal que nos devuelve envolviendo todo en Math.round

// numRandom() // 8




// //CICLO WHILE

const META = mami.peso - 3;
const comeMucho = () => Math.random() < 0.3
const haceEjercicios = () => Math.random() < 0.4
var dias = 0;

while(mami.peso > META)
{
    if(comeMucho()){
        aumentaPeso(mami)
    }
    if(haceEjercicios()){
        bajaPeso(mami)
    }
    dias++
}

console.log(`Llegaste a tu meta ${mami.nombre}, en ${dias} dias bajaste 3kg, tu peso es ${Math.round(mami.peso)}kg ahora`)


// //CICLO Do WHILE

var contador = 0;
const llueve = () => Math.random() < 0.25

do{
    contador++
}while(!llueve());

if(contador === 1){
    console.log(`Fui a ver si llovia ${contador} vez`)
}else{
    console.log(`Fui a ver si llovia ${contador} veces`)
}







// //ARRAYS

//iterar un array
var coleccionObj = [mami, ronaldo, ady, rony]; //coleccion de obj en un array

for(var i=0; i < coleccionObj.length; i++){
    var {nombre, edad} = coleccionObj[i]; //nombre y edad de la persona
    console.log(`${nombre} tiene ${edad} años`)
}

//filter un array
const esMayor = ({ edad }) => edad > 18
const esMenor = ({ edad }) => edad < 18
var personasMayores = coleccionObj.filter(esMayor)
var personasMenores = coleccionObj.filter(esMenor)
//var filtrarEdad = array.filter(function({edad}){
//  return edad > 18
//});
console.log(personasMayores, personasMenores)

//function map
const newAtributo = persona => persona = persona.altura = 1.81 
const alturaACms = persona => ({
    ...coleccionObj,
    altura: persona.altura * 100
})
coleccionObj.map(newAtributo);
var modificarAltura = coleccionObj.map(alturaACms)

//function reduce 
const sumarEdades = (acum, { edad }) => acum + edad
var totalEdades = coleccionObj.reduce(sumarEdades, 0)

console.log(`sumando las edades de todos hace ${totalEdades} años`)












// // prototipos de clases o de objetos en javaScript

// function person(nombre, apellido, edad){
//     this.nombre = nombre
//     this.apellido = apellido
//     this.edad = edad
// }

// person.prototype.saludar = function (){
//     console.log(`hola me llamo ${this.nombre} ${this.apellido}`)}

// person.prototype.soyMayor = function (){
//     return this.edad >= 18
// }    

//  var papi = new person('Reinaldo', 'Vargas', 48)
//  var floky = new person('floky', 'vargas', 2)











// // clases, heredar de una clase(prototipo por detras) a otra

class person{
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    saludo(saludar){
        var { nombre, apellido, edad} = this
        console.log(`Hola me llamo ${nombre} ${apellido} y tengo ${edad} años de edad`)
        if(saludar){
            saludar(nombre, apellido)
        }
    }
    eresMayor(){
        var { edad } = this
        return edad > 18
    }
}

class DevT extends person{
    constructor(nombre, apellido, edad, lenguaje){
        super(nombre, apellido, edad)
        this.lenguaje = lenguaje
    }
    saludo(saludar){
        var { nombre, apellido, edad, lenguaje} = this
        console.log(`Hola me llamo ${nombre} ${apellido}, tengo ${edad} años y soy deVeloper en ${lenguaje}.`)
        if(saludar){
            saludar(nombre, apellido, true)
        }
    }
}
  //funcion para pasar por parametro al metodo creado dentro de la class
const saludar = (nombre, apellido, esDev) => {
     console.log(`Buen dia ${nombre} ${apellido}${esDev ? ', genial eres developer :)' : ''}`) 
}

var personas = [], developer = [];

personas.push(new person('Rony', 'Vargas', 21))
personas.push(new person('Ady', 'Vargas', 17))
personas.push(new person('Ronaldo', 'Vargas', 23))
developer.push(new DevT('Reinaldo','Vargas', 40, 'JavaScript'))

developer[0].saludo(saludar);
