let contenido = document.getElementById("contenido")
let respuesta = document.getElementById("respuesta")
let input = document.querySelector("input")
let btn = document.getElementById("btn")
let error = document.getElementById("error")
import { ejercicio1 } from "./ejercicios.js"
import { ejercicio2 } from "./ejercicios.js"
import { ejercicio3 } from "./ejercicios.js"
import { ejercicio4 } from "./ejercicios.js"
import { ejercicio5 } from "./ejercicios.js"
import { ejercicio6 } from "./ejercicios.js"
import { ejercicio7 } from "./ejercicios.js"
import { ejercicio8 } from "./ejercicios.js"
import { ejercicio9 } from "./ejercicios.js"
import { ejercicio10 } from "./ejercicios.js"
import { ejercicio11 } from "./ejercicios.js"
import { ejercicio12 } from "./ejercicios.js"
import { validNum } from "./validaciones.js"
export function inicio (){
    let container = document.getElementById("container")
    container.style.backgroundColor="#44b9bd"
    error.textContent = ""
    contenido.innerHTML = `ejercicio1
    <br> <br>Ingrese 1 para el ejercicio 1 
    <br> <br> Ingrese 2 para el ejercicio 2
    <br> <br> Ingrese 3 para el ejercicio 3
    <br> <br> Ingrese 4 para el ejercicio 4 
    <br> <br> Ingrese 5 para el ejercicio 5 
    <br> <br> Ingrese 6 para el ejercicio 6 
    <br> <br> Ingrese 7 para el ejercicio 7
    <br> <br> Ingrese 8 para el ejercicio 8
    <br> <br> Ingrese 8 para el ejercicio 9 
    <br> <br> Ingrese 8 para el ejercicio 10  
    <br> <br> Ingrese 8 para el ejercicio 11
    <br> <br> Ingrese 8 para el ejercicio 12  

    <br> <br> Ingrese 0 para los siguientes ejercicios
    `
    btn.addEventListener('click', () => {

        let result1 = input.value;
        
        if ( validNum(result1) === "Número"){
            switch (result1) {
                case "1":
                    ejercicio1()
                    error.textContent = ""
                    break;
                case "2":
                    ejercicio2();
                    error.textContent = ""
                    break;
                case "3":
                    ejercicio3()
                    error.textContent = ""
                    break; 
                case "4":
                    ejercicio4()
                    error.textContent = ""
                    break; 
                case "5":
                    ejercicio5()
                    error.textContent = ""
                    break; 
                case "6":
                   ejercicio6()
                    error.textContent = ""
                    break;
                case "7":
                   ejercicio7();
                    error.textContent = ""
                    break;  
                case "8":
                    ejercicio8()
                    error.textContent = ""
                    break; 
                case "9":
                    ejercicio9()
                    error.textContent = ""
                    break; 
                case "10":
                    ejercicio10()
                    error.textContent = ""
                    break; 
                case "11":
                    ejercicio11()
                    error.textContent = ""
                    break;       
                case "12":
                    ejercicio12()
                    error.textContent = ""
                    break;        
                case "0":
                    contenido.innerHTML = "fin del programa"
                
                    error.textContent = ""
                    break;              
                default:
                    break;
            }
        }else{
            error.textContent = "Este no es una opcion que este disponible en el sistema"  
        }
     
    });

}
inicio()