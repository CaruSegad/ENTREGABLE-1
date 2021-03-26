let nombre = prompt('Ingrese su nombre')
let edad = prompt('Igrese su edad')
let date = new Date()
let year = date.getFullYear()

// console.log( typeof edad)
// console.log(nombre)
// console.log(year)

console.log('Qué tal, todo anda bien (:')

edad = parseInt(edad) 
let dateUser = year - edad

alert('Bienvenido' + nombre + 'Usted nació en' + dateUser)




