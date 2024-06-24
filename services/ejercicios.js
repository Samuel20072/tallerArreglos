let contenido = document.getElementById("contenido")
let respuesta = document.getElementById("respuesta")
let input = document.querySelector("input")
let btn = document.getElementById("btn")
import { inicio } from "./main.js"

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
    let arregloADN = ["AATGAAC", "GTTTTTC", "GGTAAA", "CCCCATGGG"];

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

        let resultado = '';
        for (let base in cadenasUnaBase) {
            if (cadenasUnaBase[base].length > 0) {
                resultado += `Cadenas de ${base}: ${cadenasUnaBase[base]}<br>`;
            }
        }
        return resultado;
    }

    respuesta.innerHTML = encontrarCadenasUnaBase(arregloADN);

    btn.removeEventListener('click', ejercicio2);
    btn.addEventListener('click', handleFinalOption);
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
