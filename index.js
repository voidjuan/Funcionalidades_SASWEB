/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

var numero = 0

while (numero < 100) {
    numero = numero + 1
    if (numero % 3) {
        console.log("FIZZ")
    } 
    if (numero % 5) {
        console.log("BUZZ")
    }
    if (numero % 3 && numero % 5) {
        console.log("FIZZBUZZ")
    }
    console.log(numero)
}

