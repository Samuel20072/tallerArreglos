let contenido = document.getElementById("contenido")
let respuesta = document.getElementById("respuesta")
let input = document.querySelector("input")
let btn = document.getElementById("btn")
import { inicio } from "./main.js"
import { esPrimo } from "./validaciones.js"

export function ejercicio1() {
    contenido.innerHTML = `1. Dado el arreglo [1,2,3,4,5,6]:
<br><br>a) Iterar por todos los elementos dentro del arreglo utilizando while y mostrarlos en pantalla.
<br><br>b) Iterar por todos los elementos dentro del arreglo utilizando el ciclo “for” y mostrarlos en pantalla.
<br><br>c) Crear una copia del arreglo usando el ciclo “for” pero con todos los elementos incrementados en 1.
<br><br>d) Calcular el promedio de todos los elementos del arreglo
<br><br>Ingrese 0 para volver al inicio
`

    let arreglo = [1, 2, 3, 4, 5, 6];

    function iterarWhile(arr) {
        let i = 0;
        let resultado = '';
        while (i < arr.length) {
            resultado += arr[i] + ' ';
            i++;
        }
        return resultado.trim();
    }
    function iterarFor(arr) {
        let resultado = '';
        for (let i = 0; i < arr.length; i++) {
            resultado += arr[i] + ' ';
        }
        return resultado.trim();
    }
    function copiarYIncrementar(arr) {
        let copia = [];
        for (let i = 0; i < arr.length; i++) {
            copia.push(arr[i] + 1);
        }
        return copia;
    }

    // d) Calcular el promedio de todos los elementos del arreglo
    function calcularPromedio(arr) {
        let suma = 0;
        for (let i = 0; i < arr.length; i++) {
            suma += arr[i];
        }
        return suma / arr.length;
    }

    // Mostrar resultados en el DOM
    respuesta.innerHTML = `a) Iterar con while: ${iterarWhile(arreglo)}<br>`;
    respuesta.innerHTML += `b) Iterar con for: ${iterarFor(arreglo)}<br>`;
    
    let copiaArreglo = copiarYIncrementar(arreglo);
    respuesta.innerHTML += `c) Copia del arreglo incrementado en 1: ${copiaArreglo}<br>`;
    
    let promedio = calcularPromedio(arreglo);
    respuesta.innerHTML += `d) Promedio de los elementos del arreglo: ${promedio}<br>`;


    btn.removeEventListener('click', ejercicio1);
    btn.addEventListener('click', handleFinalOption);
}
export function ejercicio2() {
    contenido.innerHTML = `2. Dado el arreglo de cadenas de ADN [“AATGAAC”, “GTTTTTC”, “GGTAAA”, “CCCCATGGG”]
cree una función que reciba como argumento tal arreglo y muestre las cadenas de una sola base
(cadenas formadas solo de A, o solo de T, o solo de C o solo de G) que se pueden formar entre todos los
elementos del arreglo.
<br><br>Ingrese 0 para volver al inicio`;
    let arregloADN = ["AAA","TTT"];

        function encontrarCadenasUnaBase(arr) {
        let cadenasUnaBase = {
            'A': [],
            'T': [],
            'C': [],    
            'G': []
        };
        function esUnaBase(cadena) {
            let base = cadena[0];
            for (let i = 1; i < cadena.length; i++) {
                if (cadena[i] !== base) {
                    return false;
                }
            }
            return true;
        }
        

        arr.forEach(cadena => {
            if (esUnaBase(cadena)) {
                cadenasUnaBase[cadena[0]].push(cadena);
            }
        });
        
        for (let base in cadenasUnaBase) {
            if (cadenasUnaBase[base].length > 0) {
                respuesta.innerHTML += `Cadenas de ${base}: ${cadenasUnaBase[base]}<br>`;
            }
        }

    }
    encontrarCadenasUnaBase(arregloADN);
    btn.removeEventListener('click', ejercicio2);
    btn.addEventListener('click', handleFinalOption);
}
export function ejercicio3 (){

    contenido.innerHTML = `3. Cree una función que reciba un arreglo de números y retorne el número menor entre todos los
    elementos del arreglo.
    
    <br><br>Ingrese 0 para volver al inicio`;
    let arregloNumeros = [10,4,1,3,2,43]
     let minimo = arregloNumeros[0];
    function imprimirElementos(arregloNumeros) {
        for (let i = 1; i < arregloNumeros.length; i++) {
            if (arregloNumeros[i] < minimo) {
                minimo = arregloNumeros[i];
            }
        }
    
        return minimo;
    }

    respuesta.innerHTML = "";
  
    respuesta.innerHTML = `El menor del arreglo ${arregloNumeros} es: ${imprimirElementos(arregloNumeros)};`





    btn.removeEventListener('click', ejercicio3);
    btn.addEventListener('click', handleFinalOption);
}
export function ejercicio4 (){
    contenido.innerHTML = `
    4. Cree una función que reciba un arreglo de números naturales y muestre todos los números primos en
él.
<br><br>Ingrese 0 para volver al inicio
    `
    let arreglo = [2,4,5,21,67]

    function mostrarNumerosPrimos(arreglo) {
        for (let num of arreglo) {
            if (esPrimo(num)) {
                return num
            }
        }
    }
    
    respuesta.innerHTML = `El arreglo ${arreglo}<br> <br>${mostrarNumerosPrimos(arreglo)} es un numero primo`
    btn.removeEventListener('click', ejercicio4);
    btn.addEventListener('click', handleFinalOption);
}

export function ejercicio5() {
    contenido.innerHTML = `
        <p>5. Cree una función que pida a n número de usuarios su nombre y edad y retorne un arreglo con los
        nombres de los usuarios que son mayores de edad, luego muestre cuántos usuarios hay mayores de
        edad.</p>
        <br><br>Ingrese 0 para volver al inicio
        <button id="verificarBtn">Iniciar</button>
        <br><br>
  
    `;
    
    const verificarBtn = document.getElementById('verificarBtn');
    verificarBtn.addEventListener('click', pedirDatosYEvaluar);
    function pedirDatosYEvaluar() {
        const usuarios = []; 
        
        while (true) {
            let nombre = prompt("Ingrese el nombre del usuario (o '0' para terminar):");
            
            if (nombre === '0') {
                break; 
            }
            
            let edad = parseInt(prompt("Ingrese la edad de " + nombre + ":"));
            
            if (isNaN(edad) || edad <= 0) {
                alert("Edad inválida. Por favor ingrese un número válido mayor que cero.");
                continue; 
            }
            
            if (edad >= 18) {
                usuarios.push(nombre); 
            }
        }
        
        mostrarResultados(usuarios); 
    }
    
    function mostrarResultados(usuariosMayoresEdad) {
        const respuesta = document.getElementById('respuesta');
        
        if (usuariosMayoresEdad.length === 0) {
            respuesta.innerHTML = "No hay usuarios mayores de edad.";
        } else {
            respuesta.innerHTML = `
                <p>Usuarios mayores de edad:</p>
                <ul>
                    ${usuariosMayoresEdad.map(nombre => `<li>${nombre}</li>`).join('')}
                </ul>
                <p>Total de usuarios mayores de edad: ${usuariosMayoresEdad.length}</p>
            `;
        }
    }
    btn.removeEventListener('click', ejercicio5);
    btn.addEventListener('click', handleFinalOption);
}
export function ejercicio6 (){
    contenido.innerHTML = `
    6. Dado los arreglos valle = [“Cali” , “Tulua”, “Cartago”, “Salento”] quindio = [“Cordoba”,
        “Armenia”, “Palmira”, “Circasia”] Ordene los arreglos de tal manera que los elementos(ciudades)
        queden en el arreglo que les corresponde. Use ciclos.
        <br><br>Ingrese 0 para volver al inicio
    
    `



let valle = ["Cali", "Tulua", "Cartago", "Salento"];
let quindio = ["Cordoba", "Armenia", "Palmira", "Circasia"];
let ciudadesOrdenadas = [];

for (let ciudad of valle.concat(quindio)) {
    if (valle.includes(ciudad)) {
        ciudadesOrdenadas.push(ciudad);
    } else if (quindio.includes(ciudad)) {
        ciudadesOrdenadas.push(ciudad);
    }
}
respuesta.innerHTML = `El orden es ${ciudadesOrdenadas}`
btn.removeEventListener('click', ejercicio6);
btn.addEventListener('click', handleFinalOption);
}

export function ejercicio7 (){
    contenido.innerHTML = `
    7. Dados los arreglos arreglo1 = [“Pera”, “Cebolla”, “Limón”, “Pimentón”] arreglo2 = [“Manzana”,
        “Banano”, “Lechuga”, “Perejíl”] Ordene los arreglos de tal manera que los elementos(frutas y
        verduras) queden en el arreglo que les corresponde. Use ciclos.
        
    <br><br>Ingrese 0 para volver al inicio
    `
    let arreglo1 = ["Pera", "Cebolla", "Limón", "Pimentón"];
let arreglo2 = ["Manzana", "Banano", "Lechuga", "Perejíl"];
let alimentosOrdenados = [];

for (let alimento of arreglo1.concat(arreglo2)) {
    if (arreglo1.includes(alimento)) {
        alimentosOrdenados.push(alimento);
    } else if (arreglo2.includes(alimento)) {
        alimentosOrdenados.push(alimento);
    }
}
respuesta.innerHTML = `El orden es ${alimentosOrdenados}`
btn.removeEventListener('click', ejercicio7);
btn.addEventListener('click', handleFinalOption);
}

export function ejercicio8 (){
    contenido.innerHTML = `
    8. Cree una función que reciba un arreglo de números enteros y retorne el número mayor en él. Se le
debe pedir al usuario que introduzca el arreglo
        
    <br><br>Ingrese 0 para volver al inicio
    `

function mayorNum (arreglo){
    let mayor = arreglo[0]
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }

    return mayor;
    
    
}
let numeros = prompt("Ingrese los números separados por coma (,):");
    numeros = numeros.split(',').map(num => parseInt(num.trim()));
    let resultadoMayor = mayorNum(numeros);
    
respuesta.innerHTML = `El numero mayor de [${numeros.join(", ")}] es ${resultadoMayor}`
btn.removeEventListener('click', ejercicio8);
btn.addEventListener('click', handleFinalOption);
}
export function ejercicio9 (){
    contenido.innerHTML = `
    9. Cree una función que reciba dos arreglos de números enteros y muestre cual arreglo tiene un
promedio mayor de sus elementos. Se le debe pedir al usuario que introduzca los arreglos.
<br><br>Ingrese 0 para volver al inicio
    `


    function calcularPromedio(arreglo) {
        if (arreglo.length === 0) {
            return 0; 
        }
    
        let suma = arreglo.reduce((acc, curr) => acc + curr, 0);
        return suma / arreglo.length;
    }
    
    function compararPromedios(arreglo1, arreglo2) {
        let promedio1 = calcularPromedio(arreglo1);
        let promedio2 = calcularPromedio(arreglo2);
    
        if (promedio1 > promedio2) {
            respuesta.innerHTML = ("El primer arreglo tiene un promedio mayor.");
        } else if (promedio2 > promedio1) {
            respuesta.innerHTML = ("El segundo arreglo tiene un promedio mayor.");
        } else {
            respuesta.innerHTML = ("Ambos arreglos tienen el mismo promedio.");
        }
    }
    
    let numeros1 = prompt("Ingrese los números del primer arreglo separados por coma (,):");
    numeros1 = numeros1.split(',').map(num => parseInt(num.trim()));
    let numeros2 = prompt("Ingrese los números del segundo arreglo separados por coma (,):");
    numeros2 = numeros2.split(',').map(num => parseInt(num.trim()));
    compararPromedios(numeros1, numeros2);
    btn.removeEventListener('click', ejercicio9);
    btn.addEventListener('click', handleFinalOption);
    
}

export function ejercicio10 (){
    contenido.innerHTML = `
    10. Cree una función que reciba un arreglo de nombres de personas y muestre si la letra “c” se
    encuentra entre tales nombres, en caso de que la letra “c” se encuentre, mostrar las veces que se
    encuentra(considerando las apariciones entre todos los nombres) . Se le debe pedir al usuario que
    introduzca el arreglo.
    <br><br>Ingrese 0 para volver al inicio
    `
    function buscarLetraC(arregloNombres) {
        let conteoC = 0;
    
        for (let nombre of arregloNombres) {
            if (nombre.toLowerCase().includes('c')) {
                conteoC++;
            }
        }
    
        if (conteoC > 0) {
            respuesta.innerHTML= `Se encontró la letra "c" ${conteoC} veces entre los nombres.`;
        } else {
            respuesta.innerHTML = `No se encontró la letra "c" entre los nombres.`;
        }
    }
    
    let nombres = prompt("Ingrese los nombres separados por coma (,):").split(',');
    buscarLetraC(nombres);
    btn.removeEventListener('click', ejercicio10);
    btn.addEventListener('click', handleFinalOption)
}
export function ejercicio11 (){
    contenido.innerHTML = `
    11. Cree una función que reciba un arreglo de números enteros positivos y muestre cuantos números
    impares posee el arreglo. Se le debe pedir al usuario que introduzca el arreglo
    <br><br>Ingrese 0 para volver al inicio
    `
    function contarImpares(arreglo) {
        let conteoImpares = 0;
    
        for (let numero of arreglo) {
            if (numero % 2 !== 0) {
                conteoImpares++;
            }
        }
    
        return conteoImpares;
    }
    
    
    let numeros = prompt("Ingrese los números del arreglo separados por coma (,):");
    numeros = numeros.split(',').map(num => parseInt(num.trim()));
    let impares = contarImpares(numeros);
    respuesta.innerHTML = `El arreglo ${numeros} tiene ${impares} números impares.`;
    btn.removeEventListener('click', ejercicio11);
    btn.addEventListener('click', handleFinalOption)
}
export function ejercicio12 (){

    contenido.innerHTML = `
    12. Cree una función que reciba un arreglo de cadenas de ADN (las cadenas estarán formadas por las 
        letras A o C o T o G referirse a taller de ADN pasado) y muestre la cadena de ADN con mayor número 
        de Timina (T). Se le debe pedir al usuario que introduzca los arreglos.
    <br><br>Ingrese 0 para volver al inicio
    `
function countThymine(dnaStrand) {
    let count = 0;
    for (let char of dnaStrand) {
      if (char === 'T') {
        count++;
      }
    }
    return count;
  }
  

  function findMaxThymineDna(dnaArray) {
    let maxThymineCount = -1;
    let maxThymineDna = '';
  
    for (let dna of dnaArray) {
      let currentThymineCount = countThymine(dna);
      if (currentThymineCount > maxThymineCount) {
        maxThymineCount = currentThymineCount;
        maxThymineDna = dna;
      }
    }
  
    return maxThymineDna;
  }
  

  function getUserInput() {
    let dnaArray = [];
    let numberOfStrands = prompt("¿Cuántas cadenas de ADN vas a introducir?");
  
    for (let i = 0; i < numberOfStrands; i++) {
      let dnaStrand = prompt(`Introduce la cadena de ADN ${i + 1}:`);
      dnaArray.push(dnaStrand);
    }
  
    return dnaArray;
  }

  function main() {
    let dnaArray = getUserInput();
    let dnaWithMaxThymine = findMaxThymineDna(dnaArray);
    respuesta.innerHTML = `La cadena de ADN con el mayor número de Timina (T) es: ", ${dnaWithMaxThymine}`;
  }
  

  main();
  btn.removeEventListener('click', ejercicio12);
  btn.addEventListener('click', handleFinalOption)
}



function handleFinalOption() {
    let option = input.value.trim();
    error.textContent = "";

    switch (option) {
        case "0":
            inicio()
            error.textContent = "";
            respuesta.textContent = "";
            btn.removeEventListener('click', handleFinalOption);
            break;
        default:
            error.textContent = "Esta opción no es válida";
            break;
    }
}
