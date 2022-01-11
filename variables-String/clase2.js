var nombre = 'rony' , apellido = 'vargas'

var nombreEnMayusculas = nombre.toUpperCase();
var apellidosEnMinusculas = apellido.toLowerCase();

var primeraLetraDelNombre = nombre.charAt(0);
var CantidadDeLetrasNombre = nombre.length;

var nombreCompleto = `${nombre.toUpperCase()} ${apellido.toUpperCase()}`;

var ultimaLetraDelUser = console.log( `Tu nombre es ${nombre} y tu ultima letra es: ${nombre.substr(nombre.length-1)}`);