


const diasEntreFechas = ( fecha1, fecha2) => {
    const unDia = 1000 *60*60*24
    const diferencia = Math.abs( fecha1 - fecha2)
    const tranformarMilesegundosEnDias = diferencia / unDia
   
    return Math.floor(tranformarMilesegundosEnDias)
    
}


const hoy = new Date(2021,04,15)
const fecha = new Date(2021, 06, 26)

console.log(`Han pasado ${diasEntreFechas(hoy, fecha)} dias, de tu nacimiento a hoy y tienes ${Math.floor(diasEntreFechas(hoy, fecha) / 365)} años!!!`)